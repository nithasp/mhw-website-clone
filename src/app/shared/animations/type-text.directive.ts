import { Directive, ElementRef, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ScrollTriggerService } from './scroll-trigger.service';

export interface TypeTextOptions {
  /** Fade duration of every character (s) */
  fadeSpeed: number;
  /** Delay before the first character (s) */
  delay: number;
  /** Delay between two characters (s) */
  duration: number;
  /** Horizontal offset each character slides in from (px) */
  x: number;
}

/** The parameter sets used by the original site (data-typetext="…"). */
export const TYPE_TEXT_PRESETS = {
  /** big titles: characters slide in from 100px on the right */
  title: { fadeSpeed: 1, delay: 0, duration: 0.05, x: 100 },
  /** body copy: quick fade, no slide */
  text: { fadeSpeed: 1, delay: 0, duration: 0.01, x: 0 },
  /** home page section copy */
  lead: { fadeSpeed: 1, delay: 0.2, duration: 0.02, x: 0 },
};
export type TypeTextPreset = keyof typeof TYPE_TEXT_PRESETS;

/** GSAP Power2.easeOut, the easing the original used */
const EASE_OUT = 'cubic-bezier(0.215, 0.61, 0.355, 1)';

/**
 * Typewriter reveal – the Angular version of the original `data-typetext`.
 * Every visible character fades (and optionally slides) in one after another
 * once the element is scrolled into view. Line breaks (<br>) and nested inline
 * markup are preserved; the text is restored to plain nodes afterwards.
 *
 * Usage:
 *   <h3 appTypeText="title">Hoarfrost Reach</h3>
 *   <p appTypeText>Body copy…</p>
 *   <p appTypeText [typeTextOptions]="{ delay: 0.5 }">…</p>
 *   <p appTypeText="text" [innerHTML]="html"></p>
 */
@Directive({ selector: '[appTypeText]' })
export class TypeTextDirective implements OnInit, OnDestroy {
  @Input('appTypeText') preset: TypeTextPreset | '' = 'text';
  @Input() typeTextOptions?: Partial<TypeTextOptions>;
  /** `scroll` (default) or `load` (start right after rendering). */
  @Input() typeTextOn: 'scroll' | 'load' = 'scroll';

  private stopWatching?: () => void;
  private timer?: ReturnType<typeof setTimeout>;
  private frame = 0;
  private started = false;

  constructor(
    private host: ElementRef<HTMLElement>,
    private trigger: ScrollTriggerService,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    el.classList.add('js-typetext');
    if (this.typeTextOn === 'load') {
      this.zone.runOutsideAngular(() => {
        this.frame = requestAnimationFrame(() => this.start());
      });
    } else {
      this.stopWatching = this.trigger.register(el, () => this.start());
    }
  }

  ngOnDestroy(): void {
    this.stopWatching?.();
    clearTimeout(this.timer);
    cancelAnimationFrame(this.frame);
  }

  /** Run the typewriter animation (can also be called manually). */
  start(): void {
    if (this.started) {
      return;
    }
    this.started = true;
    const el = this.host.nativeElement;
    const options: TypeTextOptions = {
      ...TYPE_TEXT_PRESETS[this.preset || 'text'],
      ...this.typeTextOptions,
    };

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      el.classList.add('is-typed');
      return;
    }

    const chars = this.split(el, options.x !== 0);
    chars.forEach((char, i) => {
      char.style.opacity = '0';
      if (options.x) {
        char.style.transform = `translateX(${options.x}px)`;
      }
      char.style.transition = `opacity ${options.fadeSpeed}s ${EASE_OUT}, transform ${options.fadeSpeed}s ${EASE_OUT}`;
      char.style.transitionDelay = `${options.delay + i * options.duration}s`;
    });
    el.classList.add('is-typing');

    this.zone.runOutsideAngular(() => {
      // two frames: make sure the hidden state is committed before transitioning
      this.frame = requestAnimationFrame(() => {
        this.frame = requestAnimationFrame(() => {
          chars.forEach((char) => {
            char.style.opacity = '1';
            char.style.transform = 'none';
          });
          const total =
            options.delay + Math.max(chars.length - 1, 0) * options.duration + options.fadeSpeed;
          this.timer = setTimeout(() => this.restore(el), total * 1000 + 50);
        });
      });
    });
  }

  /** Wrap every non-blank character in a span (words are kept together when sliding). */
  private split(root: HTMLElement, slide: boolean): HTMLElement[] {
    const chars: HTMLElement[] = [];
    const textNodes: Text[] = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode as Text);
    }

    for (const node of textNodes) {
      const text = node.textContent ?? '';
      if (!text.trim()) {
        continue;
      }
      const fragment = document.createDocumentFragment();
      for (const part of text.split(/(\s+)/)) {
        if (!part) {
          continue;
        }
        if (/^\s+$/.test(part)) {
          fragment.appendChild(document.createTextNode(part));
          continue;
        }
        let target: Node = fragment;
        if (slide) {
          const word = document.createElement('span');
          word.className = 'tt-word';
          fragment.appendChild(word);
          target = word;
        }
        for (const ch of Array.from(part)) {
          const span = document.createElement('span');
          span.className = slide ? 'tt-char' : 'tt-char tt-char--inline';
          span.textContent = ch;
          target.appendChild(span);
          chars.push(span);
        }
      }
      node.parentNode?.replaceChild(fragment, node);
    }
    return chars;
  }

  /** Put plain text back once every character is visible (like the original's unwrap()). */
  private restore(root: HTMLElement): void {
    root.querySelectorAll('.tt-word, .tt-char').forEach((span) => {
      if (span.classList.contains('tt-word')) {
        span.replaceWith(...Array.from(span.childNodes));
      }
    });
    root.querySelectorAll('.tt-char').forEach((span) => span.replaceWith(span.textContent ?? ''));
    root.normalize();
    root.classList.remove('is-typing');
    root.classList.add('is-typed');
  }
}

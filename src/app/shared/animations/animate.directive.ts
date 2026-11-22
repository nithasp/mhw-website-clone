import { Directive, ElementRef, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ScrollTriggerService } from './scroll-trigger.service';

export type AnimateVariant =
  | 'up' // default: from 10vw below
  | 'down' // from 10vw above
  | 'left' // from 10vw on the left
  | 'right' // from 10vw on the right
  | 'left-up'
  | 'right-up'
  | 'scale' // from 80% size
  | 'fade'; // opacity only

/** Delay added per element when several elements are revealed by the same scroll (seconds). */
const SCROLL_STAGGER = 0.2;

/**
 * Reusable entrance animation – the Angular version of the original site's
 * `data-animate='{"event":"on-scroll"}'`.
 *
 * Usage:
 *   <header appAnimate>…</header>                         fade + slide up when scrolled into view
 *   <header appAnimate="left">…</header>                  slide in from the left
 *   <a appAnimate="fade" [animateDelay]="0.4">…</a>       extra delay in seconds
 *   <div appAnimate="down" animateOn="load">…</div>       play right after the page renders
 *   <img appAnimate="right" animateSpStatic>              no horizontal slide on phones
 *
 * The transition itself lives in styles/_animations.sass (.js-animate).
 */
@Directive({ selector: '[appAnimate]' })
export class AnimateDirective implements OnInit, OnDestroy {
  @Input('appAnimate') variant: AnimateVariant | '' = '';
  /** `scroll` (default): reveal when visible, `load`: reveal as soon as the page is rendered. */
  @Input() animateOn: 'scroll' | 'load' = 'scroll';
  /** Additional delay in seconds. */
  @Input() animateDelay = 0;
  /** Transition duration in seconds (default 2s like the original). */
  @Input() animateDuration?: number;
  /** Keep the element still on phones (only fade), like the original monster artwork. */
  @Input() set animateSpStatic(value: boolean | '') {
    this.spStatic = value !== false;
  }

  private spStatic = false;
  private stopWatching?: () => void;
  private timers: ReturnType<typeof setTimeout>[] = [];
  private frame = 0;

  constructor(
    private host: ElementRef<HTMLElement>,
    private trigger: ScrollTriggerService,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    el.classList.add('js-animate', `js-animate--${this.variant || 'up'}`);
    if (this.spStatic) {
      el.classList.add('js-animate--sp-static');
    }
    if (this.animateDuration !== undefined) {
      el.style.setProperty('--animate-duration', `${this.animateDuration}s`);
    }

    if (this.animateOn === 'load') {
      // wait for the initial (hidden) state to be painted, then transition
      this.zone.runOutsideAngular(() => {
        this.frame = requestAnimationFrame(() => {
          this.frame = requestAnimationFrame(() => this.reveal(0));
        });
      });
    } else {
      this.stopWatching = this.trigger.register(
        el,
        (index, fromScroll) => this.reveal(fromScroll ? index * SCROLL_STAGGER : 0),
        { cascade: true }
      );
    }
  }

  ngOnDestroy(): void {
    this.stopWatching?.();
    this.timers.forEach(clearTimeout);
    cancelAnimationFrame(this.frame);
  }

  private reveal(stagger: number): void {
    const el = this.host.nativeElement;
    const delay = this.animateDelay + stagger;
    // always set it: custom properties inherit, so a nested animated element
    // must not pick up the delay of the box it sits in
    el.style.setProperty('--animate-delay', `${delay}s`);
    el.classList.add('in-view');
    // once the entrance is over, hover transitions on the element should not be delayed
    const duration = this.animateDuration ?? 2;
    this.timers.push(setTimeout(() => el.style.setProperty('--animate-delay', '0s'), (delay + duration) * 1000));
  }
}

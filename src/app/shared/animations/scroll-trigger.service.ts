import { Injectable, NgZone, OnDestroy } from '@angular/core';

/**
 * Called once when the element reaches the trigger line.
 * `cascadeIndex` is the element's position among the elements revealed by the
 * same scroll frame (0 for the first one, always 0 when not caused by scrolling).
 */
export type ScrollTriggerCallback = (cascadeIndex: number, fromScroll: boolean) => void;

export interface ScrollTriggerOptions {
  /** Take part in the cascade of elements revealed together (entrance animations do). */
  cascade?: boolean;
}

interface TriggerEntry {
  el: HTMLElement;
  callback: ScrollTriggerCallback;
  cascade: boolean;
}

/** Elements revealed by one scroll frame cascade at most this many steps deep. */
const MAX_CASCADE_STEPS = 3;

/**
 * Central "is it on screen yet?" watcher shared by every scroll animation.
 *
 * Same trigger line as the original site's `AnimateByScroll`: an element fires
 * once its un-transformed top edge passes 1 / 1.2 of the viewport height, or when
 * the page is scrolled to the very bottom.
 *
 * Unlike a naive port of the original, the cascade only counts the elements that
 * become visible in the same frame (in on-screen order), so an element you scroll
 * to starts animating right away instead of waiting for elements that are still
 * further down the page. Content inside an animated box (e.g. caption text)
 * triggers together with its box.
 *
 * A single passive scroll/resize listener runs outside Angular and is throttled
 * with requestAnimationFrame, so having hundreds of animated elements is cheap.
 */
@Injectable({ providedIn: 'root' })
export class ScrollTriggerService implements OnDestroy {
  /** Trigger line, as a fraction of the viewport height (original: wh / 1.2). */
  static readonly VIEWPORT_RATIO = 1 / 1.2;

  private entries: TriggerEntry[] = [];
  private frame = 0;
  private frameFromScroll = false;
  private listening = false;
  private settleTimer?: ReturnType<typeof setTimeout>;
  private followUpTimer?: ReturnType<typeof setTimeout>;

  private readonly onScroll = () => this.schedule(true);
  private readonly onResize = () => this.schedule(false);

  constructor(private zone: NgZone) {}

  /**
   * Watch an element. Returns a function that stops watching it
   * (call it from ngOnDestroy).
   */
  register(el: HTMLElement, callback: ScrollTriggerCallback, options: ScrollTriggerOptions = {}): () => void {
    const entry: TriggerEntry = { el, callback, cascade: !!options.cascade };
    this.entries.push(entry);
    this.listen();
    this.schedule(false);
    // images / fonts can still move things around right after a page is rendered
    clearTimeout(this.settleTimer);
    this.settleTimer = setTimeout(() => this.schedule(false), 600);
    return () => this.remove(entry);
  }

  /** Force a check, e.g. after content was shown or the layout changed. */
  refresh(): void {
    this.schedule(false);
  }

  ngOnDestroy(): void {
    this.unlisten();
    clearTimeout(this.settleTimer);
    clearTimeout(this.followUpTimer);
  }

  private remove(entry: TriggerEntry): void {
    const i = this.entries.indexOf(entry);
    if (i > -1) {
      this.entries.splice(i, 1);
    }
    if (!this.entries.length) {
      this.unlisten();
    }
  }

  private listen(): void {
    if (this.listening || typeof window === 'undefined') {
      return;
    }
    this.listening = true;
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onResize, { passive: true });
      window.addEventListener('load', this.onResize);
    });
  }

  private unlisten(): void {
    if (!this.listening) {
      return;
    }
    this.listening = false;
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('load', this.onResize);
    cancelAnimationFrame(this.frame);
    this.frame = 0;
  }

  private schedule(fromScroll: boolean): void {
    this.frameFromScroll = this.frameFromScroll || fromScroll;
    if (this.frame) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.frame = requestAnimationFrame(() => {
        this.frame = 0;
        const scroll = this.frameFromScroll;
        this.frameFromScroll = false;
        this.check(scroll);
      });
    });
  }

  private check(fromScroll: boolean): void {
    if (!this.entries.length) {
      return;
    }
    const viewport = window.innerHeight;
    const line = viewport * ScrollTriggerService.VIEWPORT_RATIO;
    const atBottom = window.pageYOffset >= document.documentElement.scrollHeight - viewport - 1;

    const fired: Array<{ entry: TriggerEntry; top: number; left: number }> = [];
    for (const entry of this.entries) {
      if (!entry.el.isConnected) {
        continue;
      }
      const top = triggerTop(entry.el);
      if (top < line || atBottom) {
        fired.push({ entry, top, left: entry.el.getBoundingClientRect().left });
      }
    }
    if (!fired.length) {
      return;
    }

    // cascade in on-screen order: top to bottom, then left to right
    fired.sort((a, b) => {
      if (Math.abs(a.top - b.top) > 2) {
        return a.top - b.top;
      }
      if (Math.abs(a.left - b.left) > 2) {
        return a.left - b.left;
      }
      return a.entry.el.compareDocumentPosition(b.entry.el) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });

    let step = 0;
    for (const { entry } of fired) {
      this.remove(entry);
      const index = fromScroll && entry.cascade ? Math.min(step++, MAX_CASCADE_STEPS) : 0;
      entry.callback(index, fromScroll);
    }

    // like the original's delayed re-check: pick up anything whose position
    // changed because of what was just revealed, even if the user stops scrolling
    clearTimeout(this.followUpTimer);
    this.followUpTimer = setTimeout(() => this.schedule(false), 400);
  }
}

/**
 * Top edge used to decide whether an element is on screen: its position without
 * the entrance offset. Content inside an animated box uses the box's position, so
 * e.g. caption text starts typing while its box slides in.
 */
function triggerTop(el: HTMLElement): number {
  let target = el;
  for (let box = el.parentElement?.closest<HTMLElement>('.js-animate'); box; box = box.parentElement?.closest<HTMLElement>('.js-animate')) {
    target = box; // outermost animated box
  }
  return target.getBoundingClientRect().top - translateY(target);
}

/** Vertical translation of an element's own transform. */
function translateY(el: HTMLElement): number {
  const transform = getComputedStyle(el).transform;
  if (!transform || transform === 'none') {
    return 0;
  }
  const match = transform.match(/matrix(3d)?\(([^)]+)\)/);
  if (!match) {
    return 0;
  }
  const values = match[2].split(',').map(parseFloat);
  return (match[1] ? values[13] : values[5]) || 0;
}

import { Injectable, NgZone } from '@angular/core';

export type ScrollEasing = 'easeOutExpo' | 'swing';

const EASINGS: Record<ScrollEasing, (t: number) => number> = {
  // jQuery easing "easeOutExpo" – used by the original for "Buy Now" / anchors
  easeOutExpo: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  // jQuery default "swing" – used by the topic pages' in-page links
  swing: (t) => 0.5 - Math.cos(t * Math.PI) / 2,
};

/** Animated window scrolling with the same easings as the original site. */
@Injectable({ providedIn: 'root' })
export class SmoothScrollService {
  private frame = 0;
  private readonly cancelOnWheel = () => this.stop();

  constructor(private zone: NgZone) {}

  scrollToElement(el: Element | null, duration = 1000, easing: ScrollEasing = 'easeOutExpo'): void {
    if (!el) {
      return;
    }
    const y = el.getBoundingClientRect().top + window.pageYOffset;
    this.scrollTo(y, duration, easing);
  }

  scrollTo(targetY: number, duration = 1000, easing: ScrollEasing = 'easeOutExpo'): void {
    this.stop();
    const startY = window.pageYOffset;
    const maxY = document.documentElement.scrollHeight - window.innerHeight;
    const endY = Math.max(0, Math.min(targetY, maxY));
    const distance = endY - startY;
    const ease = EASINGS[easing];
    const start = performance.now();

    this.zone.runOutsideAngular(() => {
      // like the original, a mouse wheel interrupts the animation
      window.addEventListener('wheel', this.cancelOnWheel, { passive: true, once: true });
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        window.scrollTo(0, startY + distance * ease(t));
        if (t < 1) {
          this.frame = requestAnimationFrame(step);
        } else {
          this.stop();
        }
      };
      this.frame = requestAnimationFrame(step);
    });
  }

  stop(): void {
    cancelAnimationFrame(this.frame);
    this.frame = 0;
    window.removeEventListener('wheel', this.cancelOnWheel);
  }
}

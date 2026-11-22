import { Injectable } from '@angular/core';

/**
 * Freezes page scrolling while the menu or a modal is open and restores the
 * exact scroll position afterwards (body gets `position: fixed; top: -y`,
 * the same technique the original site uses).
 * Calls are reference counted so a modal opened from the menu works too.
 */
@Injectable({ providedIn: 'root' })
export class ScrollLockService {
  private locks = 0;
  private offsetY = 0;

  get isLocked(): boolean {
    return this.locks > 0;
  }

  lock(): void {
    if (this.locks++ > 0) {
      return;
    }
    this.offsetY = window.pageYOffset;
    document.body.classList.add('fixed');
    document.body.style.top = `-${this.offsetY}px`;
  }

  unlock(restoreScroll = true): void {
    if (this.locks === 0 || --this.locks > 0) {
      return;
    }
    document.body.classList.remove('fixed');
    document.body.style.top = '';
    if (restoreScroll) {
      window.scrollTo(0, this.offsetY);
    }
  }
}

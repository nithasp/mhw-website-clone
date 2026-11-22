import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { GLOBAL_MENU, MenuItem } from '../../data/menu.data';
import { ScrollLockService } from '../../shared/services/scroll-lock.service';
import { SmoothScrollService } from '../../shared/services/smooth-scroll.service';

/** Id of the product section on the home page ("Buy Now" / "Product Information"). */
const PRODUCTS_ID = 'product-information';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  readonly menu: MenuItem[] = GLOBAL_MENU;

  /** Menu overlay is visible */
  isOpen = false;
  /** Menu items are shown (kept during the overlay fade-out, like the original) */
  itemsIn = false;
  /** Buttons slide down once after the first render */
  isShown = false;

  private timer?: ReturnType<typeof setTimeout>;
  private sub?: Subscription;

  constructor(
    private router: Router,
    private scrollLock: ScrollLockService,
    private smoothScroll: SmoothScrollService
  ) {}

  ngOnInit(): void {
    // same entrance as the original (buttons drop in from above after loading)
    this.timer = setTimeout(() => (this.isShown = true), 300);
    // a navigation always closes the menu
    this.sub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.closeMenu(false));
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
    this.sub?.unsubscribe();
  }

  toggleMenu(): void {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu(): void {
    clearTimeout(this.timer);
    this.isOpen = true;
    this.itemsIn = true;
    this.scrollLock.lock();
  }

  /** @param restoreScroll keep the page where it was (false when navigating away) */
  closeMenu(restoreScroll = true): void {
    if (!this.isOpen) {
      return;
    }
    this.isOpen = false;
    this.scrollLock.unlock(restoreScroll);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => (this.itemsIn = false), 300);
  }

  /** "Buy Now" and "Product Information": scroll to the product section of the home page. */
  goToProducts(): void {
    const scroll = () =>
      this.smoothScroll.scrollToElement(document.getElementById(PRODUCTS_ID), 1000, 'easeOutExpo');

    if (this.router.url.split('#')[0] === '/' || this.router.url === '') {
      this.closeMenu();
      // wait for the scroll position to be restored by the menu before animating
      setTimeout(scroll);
      return;
    }
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        take(1)
      )
      .subscribe(() => setTimeout(scroll, 100));
    this.router.navigateByUrl('/');
  }
}

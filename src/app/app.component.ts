import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnDestroy {
  title = 'mhw-website-clone';
  /** The global menu is hidden on pages that bring their own header */
  showNavbar = true;
  private sub: Subscription;

  constructor(router: Router, route: ActivatedRoute, titleService: Title) {
    // document title from the route data (pages with dynamic titles set it themselves)
    this.sub = router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      let child = route.firstChild;
      while (child?.firstChild) {
        child = child.firstChild;
      }
      const data = child?.snapshot.data ?? {};
      if (data['title']) {
        titleService.setTitle(data['title']);
      }
      this.showNavbar = data['navbar'] !== false;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

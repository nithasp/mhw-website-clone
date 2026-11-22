import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * Footer variant per page type, like the original site:
 *  - home:   SNS + link to the Monster Hunter: World site
 *  - lower:  SNS + "Top Page" bar (story, ecosystem, news, …)
 *  - topics: SNS + link back to the Iceborne site (news articles)
 *  - sns:    SNS only (Downloadable Content)
 *  - update: the update site's own footer
 */
export type FooterMode = 'home' | 'lower' | 'topics' | 'sns' | 'update';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnDestroy {
  mode: FooterMode = 'home';

  readonly socials = [
    { label: 'Facebook', icon: 'fa-facebook-square', href: 'https://www.facebook.com/monsterhunter' },
    { label: 'Twitter', icon: 'fa-twitter', href: 'https://twitter.com/MHinfo_en' },
    { label: 'Instagram', icon: 'fa-instagram', href: 'https://www.instagram.com/monsterhuntergame' },
    { label: 'YouTube', icon: 'fa-youtube-play', href: 'https://www.youtube.com/user/monsterhunter' },
  ];

  private sub: Subscription;

  constructor(router: Router, route: ActivatedRoute) {
    this.sub = router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      let child = route.firstChild;
      while (child?.firstChild) {
        child = child.firstChild;
      }
      this.mode = (child?.snapshot.data['footer'] as FooterMode) ?? 'home';
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

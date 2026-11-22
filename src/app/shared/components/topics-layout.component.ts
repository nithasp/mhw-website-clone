import { ChangeDetectionStrategy, Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**
 * Frame of the "topics" pages (news articles and Downloadable Content):
 * centered Iceborne logo header (+ the MH: World logo for some topics) and the
 * 960px content column. While mounted it switches the root font-size to 62.5%
 * so the topics' rem based styles render like on the original site.
 */
@Component({
  selector: 'app-topics-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="topics-page" [ngClass]="'topic-' + slug">
      <div id="wrap">
        <header [class.mhw]="mhwHeader">
          <h1>
            <a routerLink="/"><img src="/assets/images/common/logo_iceborne_l.png" alt="MONSTER HUNTER WORLD: ICEBORNE" /></a>
            <a *ngIf="mhwHeader" href="https://www.monsterhunter.com/world/us/" target="_blank" rel="noopener">
              <img src="/assets/images/common/logo_mhw.png" alt="MONSTER HUNTER: WORLD" />
            </a>
          </h1>
        </header>
        <section>
          <ng-content></ng-content>
        </section>
      </div>
      <div id="footBtn"></div>
    </div>
  `,
})
export class TopicsLayoutComponent implements OnInit, OnDestroy {
  @Input() slug = '';
  @Input() mhwHeader = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.document.documentElement.classList.add('topics-mode');
  }

  ngOnDestroy(): void {
    this.document.documentElement.classList.remove('topics-mode');
  }
}

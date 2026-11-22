import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UPDATE_VERSIONS } from '../../data/update.data';

/** Update Information index (original: https://www.monsterhunter.com/update/mhw/us/) */
@Component({
  selector: 'app-update',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="update-page is-index">
      <app-update-header mode="lang"></app-update-header>
      <main class="conts">
        <h2 class="page-ttl">Update Information</h2>
        <div class="conts-box" id="info">
          <div class="conts-box-inner">
            <div class="panel-box">
              <ul class="panel-list">
                <li *ngFor="let v of versions">
                  <a [routerLink]="['/update', v.ver]">
                    <div class="col-box">
                      <div class="pic"><img [src]="v.thumb" alt="" /></div>
                      <div class="txt">
                        <h3 [class.up]="v.up"><span>{{ v.label }}</span></h3>
                        <p class="date" [innerHTML]="'<span>Available</span><br>' + v.dateHtml"></p>
                      </div>
                    </div>
                    <p class="note" *ngIf="v.note">{{ v.note }}</p>
                    <div class="txt-box">
                      <p class="ttl">{{ v.contentsTitle }}</p>
                      <ul>
                        <li *ngFor="let line of v.contents" [innerHTML]="line"></li>
                      </ul>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
})
export class UpdateComponent {
  readonly versions = UPDATE_VERSIONS;
}

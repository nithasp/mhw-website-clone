import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { HuntingDetail } from '../../data/hunting.data';

/** Weapon / clutch claw detail window of the Hunting page (hunting/detail/*.html). */
@Component({
  selector: 'app-hunting-detail-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-modal *ngIf="detail" (closed)="closed.emit()">
      <div class="modal_hunting" [ngClass]="'hunting_detail_' + detail.id">
        <header class="content__header">
          <h1 class="content__header__title">{{ detail.title }}</h1>
        </header>
        <div class="modal_hunting__box">
          <div class="modal_hunting__box__iframe">
            <a [href]="'https://www.youtube.com/watch?v=' + detail.youtubeId" target="_blank" rel="noopener">
              <img [src]="detail.thumb" alt="Watch the video" width="320" height="180" />
            </a>
          </div>
        </div>
        <div class="article__column2__body textbox">
          <h2 class="modal_action__title">{{ detail.heading }}</h2>
          <div class="modal_action__block" *ngFor="let block of detail.blocks">
            <div class="modal_ss">
              <img
                *ngFor="let src of block.images; let last = last"
                [src]="src"
                [class.margin__bottom]="!last"
                alt=""
              />
            </div>
            <div class="modal_right__box" [innerHTML]="'<h4>' + block.title + '</h4>' + block.html | safeHtml"></div>
          </div>
        </div>
      </div>
    </app-modal>
  `,
})
export class HuntingDetailModalComponent {
  @Input() detail: HuntingDetail | null = null;
  @Output() closed = new EventEmitter<void>();
}

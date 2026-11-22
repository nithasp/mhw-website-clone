import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CharaDetail } from '../../data/characters.data';
import { ModalComponent } from './modal.component';

/**
 * Character profile window of the Story / New Headquarters pages
 * (the original story/detail/detail_XX.html & base/detail/detail_XX.html).
 * Prev / next arrows walk through the characters in list order and loop.
 */
@Component({
  selector: 'app-chara-detail-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-modal *ngIf="chara" [gallery]="characters.length > 1" (closed)="close()" (prev)="go(-1)" (next)="go(1)">
      <div class="modal_detail" [ngClass]="prefix + '_detail_' + chara.id" data-modal-bg>
        <article class="modal_detail__article">
          <figure class="modal_detail__article__figure">
            <img [src]="chara.image" [alt]="chara.name" />
          </figure>
          <dl class="modal_detail__article__dl">
            <dt class="modal_detail__article__dl__dt">{{ chara.name }}</dt>
            <dd class="modal_detail__article__dl__dt__dd">
              <p *ngFor="let paragraph of chara.paragraphs" [innerHTML]="paragraph"></p>
            </dd>
          </dl>
        </article>
      </div>
    </app-modal>
  `,
})
export class CharaDetailModalComponent {
  @Input() characters: CharaDetail[] = [];
  /** `story` or `base` – selects the per-character artwork offsets */
  @Input() prefix: 'story' | 'base' = 'story';
  /** Index of the opened character, `null` when closed */
  @Input() index: number | null = null;
  @Output() indexChange = new EventEmitter<number | null>();

  @ViewChild(ModalComponent) modal?: ModalComponent;

  get chara(): CharaDetail | null {
    return this.index === null ? null : this.characters[this.index] ?? null;
  }

  go(step: number): void {
    if (this.index === null) {
      return;
    }
    const count = this.characters.length;
    this.indexChange.emit((this.index + step + count) % count);
    this.modal?.scrollTop();
  }

  close(): void {
    this.indexChange.emit(null);
  }
}

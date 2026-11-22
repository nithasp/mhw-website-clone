import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CharaDetail } from '../../data/characters.data';

/** Grid of character thumbnails; clicking one opens its profile window. */
@Component({
  selector: 'app-chara-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="article article_character">
      <ul class="article__list">
        <li class="article__list__item" *ngFor="let chara of characters; let i = index" appAnimate>
          <div class="thumbnailChara">
            <a href="javascript:void(0)" (click)="open.emit(i)" [attr.aria-label]="chara.name + ' profile'">
              <figure class="thumbnailChara__figure">
                <img [src]="chara.thumb" [alt]="chara.name" />
              </figure>
              <div class="thumbnailChara__body">
                <p [innerHTML]="chara.name"></p>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </article>
  `,
})
export class CharaListComponent {
  @Input() characters: CharaDetail[] = [];
  @Output() open = new EventEmitter<number>();
}

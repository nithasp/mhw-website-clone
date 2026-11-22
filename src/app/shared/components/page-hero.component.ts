import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Main visual of the lower pages: framed page title, the big typewriter
 * heading with its description, and an optional looping background movie.
 * Extra buttons (e.g. "Watch Video") can be projected into the spec block.
 *
 * <app-page-hero sub="New Elements" title="Ecosystem" role="A New Locale" name="Hoarfrost Reach"
 *   description="…" bg="/assets/images/ecosystem/main_bg.jpg" movie="/assets/video/ecosystem_mhw.mp4">
 * </app-page-hero>
 */
@Component({
  selector: 'app-page-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-logo-iceborne></app-logo-iceborne>
    <main
      class="main"
      [class.main--short]="isShort"
      [style.--main-bg]="bg ? 'url(' + bg + ')' : null"
      [style.--main-bg-sp]="bgSp ? 'url(' + bgSp + ')' : null"
    >
      <header class="main__header" appAnimate="left">
        <h2 class="main__header__sub">
          <p class="main__header__sub__en">{{ sub }}</p>
        </h2>
        <h1 class="main__header__title">
          <p class="main__header__title__en" [class.is-long]="isLongTitle">{{ title }}</p>
        </h1>
      </header>
      <dl class="main__spec" *ngIf="name || description">
        <dd class="main__spec__role" *ngIf="role !== null" appTypeText="title">{{ role }}</dd>
        <dt class="main__spec__name" appTypeText="title" [innerHTML]="name"></dt>
        <dd class="main__spec__description" appTypeText="text" [innerHTML]="description"></dd>
        <ng-content></ng-content>
      </dl>
      <app-bg-movie *ngIf="movie" [src]="movie"></app-bg-movie>
    </main>
  `,
})
export class PageHeroComponent {
  /** Small line above the title (e.g. "New Elements") */
  @Input() sub = 'New Elements';
  @Input() title = '';
  /** Reduce the title size for long titles (e.g. "New Headquarters"). Usable as a bare attribute. */
  @Input() set longTitle(value: boolean | '') {
    this.isLongTitle = value !== false;
  }
  /** Small line above the spec name; `null` removes the element */
  @Input() role: string | null = '';
  @Input() name = '';
  @Input() description = '';
  /** Background images (PC / phone) */
  @Input() bg = '';
  @Input() bgSp = '';
  /** Optional looping background movie */
  @Input() movie = '';
  /** Short main visual (gameplay page). Usable as a bare attribute. */
  @Input() set short(value: boolean | '') {
    this.isShort = value !== false;
  }

  isLongTitle = false;
  isShort = false;
}

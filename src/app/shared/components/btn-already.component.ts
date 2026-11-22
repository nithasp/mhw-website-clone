import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/** Banner at the bottom of the lower pages linking to the Monster Hunter: World site. */
@Component({
  selector: 'app-btn-already',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="content__footer" appAnimate="fade">
      <a [href]="href" target="_blank" rel="noopener" class="btn_already" [class.is-small]="isSmall">
        <div class="btn_already__figure">
          <img src="/assets/images/common/logo_mhw.png" alt="MONSTER HUNTER: WORLD" />
        </div>
        <div class="btn_already__text">
          <h3>{{ title }}</h3>
          <p>To the Monster Hunter: World Official Website</p>
        </div>
      </a>
    </footer>
  `,
})
export class BtnAlreadyComponent {
  @Input() href = 'https://www.monsterhunter.com/world/us/';
  @Input() title = '';
  /** Smaller heading (used by the longer US texts). Usable as a bare attribute. */
  @Input() set small(value: boolean | '') {
    this.isSmall = value !== false;
  }

  isSmall = false;
}

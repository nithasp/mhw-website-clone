import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Iceborne logo at the top left of every lower page (links back home). */
@Component({
  selector: 'app-logo-iceborne',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure class="logo_iceborne">
      <a routerLink="/">
        <img src="/assets/images/common/logo_iceborne.png" alt="MONSTER HUNTER WORLD: ICEBORNE" />
      </a>
    </figure>
  `,
})
export class LogoIceborneComponent {}

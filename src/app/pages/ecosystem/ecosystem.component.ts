import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Ecosystem page (original: /world-iceborne/us/ecosystem/) */
@Component({
  selector: 'app-ecosystem',
  templateUrl: './ecosystem.component.html',
  styleUrls: ['./ecosystem.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EcosystemComponent {}

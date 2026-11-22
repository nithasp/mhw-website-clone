import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Gameplay page (original: /world-iceborne/us/system/) */
@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SystemComponent {}

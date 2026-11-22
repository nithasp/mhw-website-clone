import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CLUTCH_CLAW_THUMB, HUNTING_DETAILS, HuntingDetail, WEAPONS } from '../../data/hunting.data';

/** Hunting page (original: /world-iceborne/us/hunting/) */
@Component({
  selector: 'app-hunting',
  templateUrl: './hunting.component.html',
  styleUrls: ['./hunting.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HuntingComponent {
  readonly weapons = WEAPONS;
  readonly clutchClawThumb = CLUTCH_CLAW_THUMB;

  /** Detail window currently open */
  detail: HuntingDetail | null = null;

  open(id: string): void {
    this.detail = HUNTING_DETAILS[id] ?? null;
  }
}

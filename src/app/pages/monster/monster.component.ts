import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MAIN_MONSTER, MONSTERS } from '../../data/monster.data';

/** Lightbox is only used on PC, phones open the large artwork in a new tab (original `disableOn: 1000`). */
const LIGHTBOX_MIN_WIDTH = 1001;

/** Monsters page (original: /world-iceborne/us/monster/) */
@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonsterComponent {
  readonly main = MAIN_MONSTER;
  readonly monsters = MONSTERS;

  /** Artwork shown in the lightbox */
  lightbox: { src: string; alt: string } | null = null;

  openLarge(event: MouseEvent, src: string, alt: string): void {
    if (window.innerWidth < LIGHTBOX_MIN_WIDTH) {
      return; // let the link open the image
    }
    event.preventDefault();
    this.lightbox = { src, alt };
  }
}

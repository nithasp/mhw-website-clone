import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BASE_CHARACTERS } from '../../data/characters.data';

/** New Headquarters (Seliana) page (original: /world-iceborne/us/base/) */
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseComponent {
  readonly characters = BASE_CHARACTERS;
  readonly facilities = [1, 2, 3, 4].map((n) => `/assets/images/base/img_01_0${n}.jpg`);
  readonly bathing = [
    { src: '/assets/images/base/img_05_02.jpg', caption: 'Steam Bath' },
    { src: '/assets/images/base/img_05_03.jpg', caption: 'Footbath' },
    { src: '/assets/images/base/img_05_04.jpg', caption: 'Hot Springs' },
  ];
  openIndex: number | null = null;
}

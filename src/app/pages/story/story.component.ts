import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STORY_CHARACTERS } from '../../data/characters.data';

/** Story page (original: /world-iceborne/us/story/) */
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryComponent {
  readonly characters = STORY_CHARACTERS;
  readonly slides1 = [1, 2, 3].map((n) => `/assets/images/story/img_01_0${n}.jpg`);
  readonly slides2 = [1, 2, 3].map((n) => `/assets/images/story/img_02_0${n}.jpg`);
  /** Index of the character whose profile is open */
  openIndex: number | null = null;
}

import { Component } from '@angular/core';

/**
 * Home page.
 * All animations are declarative now (see src/app/shared/animations):
 *  - [appAnimate]     fade / slide in when scrolled into view
 *  - [appTypeText]    typewriter text
 *  - [appPlayInView]  background movies that start when visible
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  /** "New Elements" teasers, each linking to its page */
  readonly elements = [
    {
      id: 'story',
      title: 'Story',
      subtitle: 'The Research Commission Embarks on a New Adventure!',
      text: 'Featuring a new story that continues on from the ending of Monster Hunter: World!',
      route: '/story',
    },
    {
      id: 'ecosystem',
      title: 'Ecosystem',
      subtitle: 'New Life',
      text: 'A new locale: Hoarfrost Reach.<br>A variety of new endemic life inhabit this frigid and unexplored region.',
      route: '/ecosystem',
      video: '/assets/video/ecosystem_mhw.mp4',
    },
    {
      id: 'monsters',
      title: 'Monsters',
      subtitle: 'New Monsters to Fight',
      text:
        'The new locale is home to various unknown monsters.<br>Due to changes in the ecosystem, some new monsters can be found in familiar locales from Monster Hunter: World as well.',
      route: '/monster',
    },
    {
      id: 'hunting',
      title: 'Hunting',
      subtitle: 'Improved Hunting Actions',
      text:
        'Your arsenal of available actions has greatly expanded with new moves and slinger combos,<br>for a more polished hunting experience!',
      route: '/hunting',
      video: '/assets/video/hunting_mhw.mp4',
    },
    {
      id: 'new-headquarters',
      title: 'New Headquarters',
      subtitle: 'Seliana',
      text:
        "A new base built as the headquarters for investigations in the Hoarfrost Reach.<br>It's complete with a variety of useful facilities and features.",
      route: '/base',
    },
    {
      id: 'gameplay',
      title: 'Gameplay',
      subtitle: '',
      text: 'A first look at some new and updated gameplay!',
      route: '/system',
    },
  ];
}

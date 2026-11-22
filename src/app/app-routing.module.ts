import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { MediaComponent } from './pages/media/media.component';
import { StoryComponent } from './pages/story/story.component';
import { EcosystemComponent } from './pages/ecosystem/ecosystem.component';
import { MonsterComponent } from './pages/monster/monster.component';
import { HuntingComponent } from './pages/hunting/hunting.component';
import { BaseComponent } from './pages/base/base.component';
import { SystemComponent } from './pages/system/system.component';
import { UpdateComponent } from './pages/update/update.component';
import { UpdateDetailComponent } from './pages/update/update-detail.component';
import { DlcComponent } from './pages/dlc/dlc.component';
import { TopicComponent } from './pages/topic/topic.component';

/**
 * Route data:
 *  - title:  document title
 *  - footer: footer variant (see FooterComponent)
 *  - navbar: false to hide the global menu (the update pages are a separate
 *            mini-site with their own header on the original site)
 */
const SITE = 'MONSTER HUNTER WORLD: ICEBORNE';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: SITE, footer: 'home' } },
  { path: 'news', component: NewsComponent, data: { title: `${SITE} | Latest Information`, footer: 'lower' } },
  { path: 'media', component: MediaComponent, data: { title: `${SITE} | Media`, footer: 'lower' } },
  { path: 'story', component: StoryComponent, data: { title: `${SITE} | Story`, footer: 'lower' } },
  { path: 'ecosystem', component: EcosystemComponent, data: { title: `${SITE} | Ecosystem`, footer: 'lower' } },
  { path: 'monster', component: MonsterComponent, data: { title: `${SITE} | Monsters`, footer: 'lower' } },
  { path: 'hunting', component: HuntingComponent, data: { title: `${SITE} | Hunting`, footer: 'lower' } },
  { path: 'base', component: BaseComponent, data: { title: `${SITE} | New Headquarters`, footer: 'lower' } },
  { path: 'system', component: SystemComponent, data: { title: `${SITE} | Gameplay`, footer: 'lower' } },
  { path: 'update', component: UpdateComponent, data: { title: `${SITE}[Update Information]`, footer: 'update', navbar: false } },
  { path: 'update/:ver', component: UpdateDetailComponent, data: { footer: 'update', navbar: false } },
  { path: 'topics/dlc', component: DlcComponent, data: { title: `${SITE} | Downloadable Content`, footer: 'sns' } },
  { path: 'topics/:slug', component: TopicComponent, data: { footer: 'topics' } },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

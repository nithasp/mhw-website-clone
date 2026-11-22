import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';

// layout
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpdateNewComponent } from './components/update-new/update-new.component';
import { LastestInformationComponent } from './components/lastest-information/lastest-information.component';
import { MhwMediaComponent } from './components/mhw-media/mhw-media.component';

// reusable animations
import { AnimateDirective } from './shared/animations/animate.directive';
import { TypeTextDirective } from './shared/animations/type-text.directive';
import { PlayInViewDirective } from './shared/animations/play-in-view.directive';
import { BgMovieComponent } from './shared/animations/bg-movie.component';

// shared building blocks
import { SafeHtmlPipe } from './shared/pipes/safe-html.pipe';
import { LogoIceborneComponent } from './shared/components/logo-iceborne.component';
import { PageHeroComponent } from './shared/components/page-hero.component';
import { BtnAlreadyComponent } from './shared/components/btn-already.component';
import { ModalComponent } from './shared/components/modal.component';
import { CharaListComponent } from './shared/components/chara-list.component';
import { CharaDetailModalComponent } from './shared/components/chara-detail-modal.component';
import { HuntingDetailModalComponent } from './shared/components/hunting-detail-modal.component';
import { ImageLightboxComponent } from './shared/components/image-lightbox.component';
import { YoutubeModalComponent } from './shared/components/youtube-modal.component';
import { FadeSliderComponent } from './shared/components/fade-slider.component';
import { SimpleSliderComponent } from './shared/components/simple-slider.component';
import { TopicsLayoutComponent } from './shared/components/topics-layout.component';

// pages
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { MediaComponent } from './pages/media/media.component';
import { StoryComponent } from './pages/story/story.component';
import { EcosystemComponent } from './pages/ecosystem/ecosystem.component';
import { MonsterComponent } from './pages/monster/monster.component';
import { HuntingComponent } from './pages/hunting/hunting.component';
import { BaseComponent } from './pages/base/base.component';
import { SystemComponent } from './pages/system/system.component';
import { UpdateHeaderComponent } from './pages/update/update-header.component';
import { UpdateComponent } from './pages/update/update.component';
import { UpdateDetailComponent } from './pages/update/update-detail.component';
import { DlcComponent } from './pages/dlc/dlc.component';
import { TopicComponent } from './pages/topic/topic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UpdateNewComponent,
    LastestInformationComponent,
    MhwMediaComponent,

    AnimateDirective,
    TypeTextDirective,
    PlayInViewDirective,
    BgMovieComponent,

    SafeHtmlPipe,
    LogoIceborneComponent,
    PageHeroComponent,
    BtnAlreadyComponent,
    ModalComponent,
    CharaListComponent,
    CharaDetailModalComponent,
    HuntingDetailModalComponent,
    ImageLightboxComponent,
    YoutubeModalComponent,
    FadeSliderComponent,
    SimpleSliderComponent,
    TopicsLayoutComponent,

    HomeComponent,
    NewsComponent,
    MediaComponent,
    StoryComponent,
    EcosystemComponent,
    MonsterComponent,
    HuntingComponent,
    BaseComponent,
    SystemComponent,
    UpdateHeaderComponent,
    UpdateComponent,
    UpdateDetailComponent,
    DlcComponent,
    TopicComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

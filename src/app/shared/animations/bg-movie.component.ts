import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ScrollTriggerService } from './scroll-trigger.service';

/** Phones get the still background image only, like the original (`visiblesp: false`). */
const SP_BREAKPOINT = 1000;

/**
 * Looping, muted background video that fades in over 2s once it starts playing
 * (the original `data-movie` element). Place it inside a `position: relative` block.
 *
 *   <app-bg-movie src="/assets/video/monster_mhw.mp4"></app-bg-movie>
 *   <app-bg-movie src="…" trigger="view" [delay]="1"></app-bg-movie>
 */
@Component({
  selector: 'app-bg-movie',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg_movie" [class.is-show]="visible">
      <div class="movieWrapper">
        <video
          #video
          *ngIf="enabled"
          [attr.src]="started ? src : null"
          loop
          muted
          playsinline
          preload="none"
          (playing)="onPlaying()"
        ></video>
      </div>
    </div>
  `,
})
export class BgMovieComponent implements AfterViewInit, OnDestroy {
  @Input() src = '';
  /** `load` (default): start immediately, `view`: start once scrolled into view. */
  @Input() trigger: 'load' | 'view' = 'load';
  /** Delay before playing (seconds). */
  @Input() delay = 0;

  @ViewChild('video') video?: ElementRef<HTMLVideoElement>;

  enabled = typeof window !== 'undefined' && window.innerWidth > SP_BREAKPOINT;
  started = false;
  visible = false;

  private stopWatching?: () => void;
  private timer?: ReturnType<typeof setTimeout>;

  constructor(
    private host: ElementRef<HTMLElement>,
    private scrollTrigger: ScrollTriggerService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (!this.enabled) {
      return;
    }
    if (this.trigger === 'view') {
      this.stopWatching = this.scrollTrigger.register(this.host.nativeElement, () => this.queue());
    } else {
      this.queue();
    }
  }

  ngOnDestroy(): void {
    this.stopWatching?.();
    clearTimeout(this.timer);
    this.video?.nativeElement.pause();
  }

  onPlaying(): void {
    this.visible = true;
    this.cdr.markForCheck();
  }

  private queue(): void {
    this.timer = setTimeout(() => this.play(), this.delay * 1000);
  }

  private play(): void {
    this.started = true;
    this.cdr.detectChanges();
    const video = this.video?.nativeElement;
    if (!video) {
      return;
    }
    // the `muted` attribute is not reflected to the property for script-created
    // elements, and browsers only autoplay muted media
    video.muted = true;
    video.play().catch(() => {
      /* autoplay can still be refused (e.g. power saving): keep the still image */
    });
  }
}

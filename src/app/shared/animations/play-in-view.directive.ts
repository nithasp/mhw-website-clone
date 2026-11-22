import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ScrollTriggerService } from './scroll-trigger.service';

/**
 * Starts the <video> inside the host element once the host is scrolled into view
 * and adds a CSS class (default `show`) so the host can fade in.
 * Used by the home page background movies.
 *
 *   <div class="bg-video" appPlayInView [playDelay]="1"> <video loop muted>…</video> </div>
 */
@Directive({ selector: '[appPlayInView]' })
export class PlayInViewDirective implements OnInit, OnDestroy {
  /** Class added to the host when the video starts. */
  @Input() playClass = 'show';
  /** Delay in seconds. */
  @Input() playDelay = 0;
  /** `view` (default) or `load`. */
  @Input() playOn: 'view' | 'load' = 'view';

  private stopWatching?: () => void;
  private timer?: ReturnType<typeof setTimeout>;

  constructor(private host: ElementRef<HTMLElement>, private trigger: ScrollTriggerService) {}

  ngOnInit(): void {
    if (this.playOn === 'load') {
      this.queue();
    } else {
      this.stopWatching = this.trigger.register(this.host.nativeElement, () => this.queue());
    }
  }

  ngOnDestroy(): void {
    this.stopWatching?.();
    clearTimeout(this.timer);
    this.host.nativeElement.querySelector('video')?.pause();
  }

  private queue(): void {
    this.timer = setTimeout(() => {
      const el = this.host.nativeElement;
      el.classList.add(this.playClass);
      const video = el.querySelector('video');
      if (video) {
        video.muted = true;
        video.play().catch(() => undefined);
      }
    }, this.playDelay * 1000);
  }
}

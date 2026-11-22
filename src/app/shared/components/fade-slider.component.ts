import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';

/**
 * Cross-fading slideshow (slick `fade: true, autoplay, autoplaySpeed: 3000, speed: 1000`
 * on the original Story page). The incoming slide fades in on top of the previous one.
 */
@Component({
  selector: 'app-fade-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="fade-slider">
      <img
        *ngFor="let src of images; let i = index"
        [src]="src"
        alt=""
        [class.is-active]="i === current"
        [class.is-prev]="i === previous"
        [style.transition-duration.ms]="speed"
      />
    </div>
  `,
  styleUrls: ['./fade-slider.component.css'],
})
export class FadeSliderComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  /** Time each slide stays (ms) */
  @Input() interval = 3000;
  /** Fade duration (ms) */
  @Input() speed = 1000;

  current = 0;
  previous = -1;
  private timer?: ReturnType<typeof setInterval>;

  constructor(private zone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.images.length < 2) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.timer = setInterval(() => {
        this.previous = this.current;
        this.current = (this.current + 1) % this.images.length;
        this.cdr.detectChanges();
      }, this.interval + this.speed);
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}

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
 * Sliding carousel with arrows and diamond dots (slick defaults of the original:
 * autoplay 3000ms, speed 1000ms, infinite). Used on phones for the Seliana photos.
 */
@Component({
  selector: 'app-simple-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="simple-slider">
      <div class="simple-slider__viewport">
        <div
          class="simple-slider__track"
          [style.transform]="'translateX(' + -index * 100 + '%)'"
          [style.transition]="animate ? 'transform ' + speed + 'ms ease' : 'none'"
          (transitionend)="onTransitionEnd()"
        >
          <div class="simple-slider__slide" *ngFor="let src of slides">
            <img [src]="src" alt="" />
          </div>
        </div>
      </div>
      <button type="button" class="simple-slider__arrow simple-slider__arrow--prev" aria-label="Previous" (click)="go(-1)"></button>
      <button type="button" class="simple-slider__arrow simple-slider__arrow--next" aria-label="Next" (click)="go(1)"></button>
      <ul class="simple-slider__dots">
        <li *ngFor="let src of images; let i = index" [class.is-active]="i === activeDot">
          <button type="button" [attr.aria-label]="'Slide ' + (i + 1)" (click)="goTo(i + 1)"></button>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./simple-slider.component.css'],
})
export class SimpleSliderComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  @Input() interval = 3000;
  @Input() speed = 1000;

  /** Position in `slides` (which has a clone at both ends for infinite looping). */
  index = 1;
  animate = true;
  private timer?: ReturnType<typeof setInterval>;

  constructor(private zone: NgZone, private cdr: ChangeDetectorRef) {}

  get slides(): string[] {
    if (!this.images.length) {
      return [];
    }
    return [this.images[this.images.length - 1], ...this.images, this.images[0]];
  }

  get activeDot(): number {
    const n = this.images.length;
    return (((this.index - 1) % n) + n) % n;
  }

  ngOnInit(): void {
    this.restart();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  go(step: number): void {
    this.goTo(this.index + step);
  }

  goTo(index: number): void {
    this.animate = true;
    this.index = index;
    this.cdr.markForCheck();
    this.restart();
  }

  onTransitionEnd(): void {
    // jump from a clone back to the real slide without animation
    if (this.index === 0 || this.index === this.slides.length - 1) {
      this.animate = false;
      this.index = this.index === 0 ? this.images.length : 1;
      this.cdr.detectChanges();
    }
  }

  private restart(): void {
    clearInterval(this.timer);
    if (this.images.length < 2) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.timer = setInterval(() => {
        this.zone.run(() => {
          this.animate = true;
          this.index++;
          this.cdr.markForCheck();
        });
      }, this.interval + this.speed);
    });
  }
}

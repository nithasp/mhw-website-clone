import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ScrollLockService } from '../services/scroll-lock.service';

/**
 * Modal shell (white 80% overlay, fixed close button, optional gallery arrows),
 * the Angular replacement for the original magnific-popup windows.
 * Render it with *ngIf; it locks page scrolling while open.
 */
@Component({
  selector: 'app-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mh-modal" [class.is-closing]="closing" role="dialog" aria-modal="true">
      <div class="mh-modal__bg"></div>
      <div class="mh-modal__wrap" #wrap tabindex="-1" (click)="onWrapClick($event)">
        <div class="mh-modal__content" #content>
          <ng-content></ng-content>
        </div>
      </div>
      <button *ngIf="showClose" type="button" class="mh-modal__close" (click)="close()">Close (Esc)</button>
      <ng-container *ngIf="gallery">
        <button type="button" class="mh-modal__arrow mh-modal__arrow--prev" aria-label="Previous" (click)="prev.emit()"></button>
        <button type="button" class="mh-modal__arrow mh-modal__arrow--next" aria-label="Next" (click)="next.emit()"></button>
      </ng-container>
    </div>
  `,
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {
  /** Show previous / next arrows (and enable arrow keys). */
  @Input() gallery = false;
  /** Hide the default fixed close button when the content draws its own. */
  @Input() showClose = true;
  @Output() closed = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  @ViewChild('wrap') wrap?: ElementRef<HTMLElement>;
  @ViewChild('content') content?: ElementRef<HTMLElement>;

  closing = false;
  private timer?: ReturnType<typeof setTimeout>;

  constructor(private scrollLock: ScrollLockService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.scrollLock.lock();
  }

  ngAfterViewInit(): void {
    this.wrap?.nativeElement.focus({ preventScroll: true });
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
    this.scrollLock.unlock();
  }

  /** Fade out, then tell the parent to remove the modal. */
  close(): void {
    if (this.closing) {
      return;
    }
    this.closing = true;
    this.cdr.markForCheck();
    this.timer = setTimeout(() => this.closed.emit(), 200);
  }

  /** Scroll the modal back to its top (used when the gallery changes item). */
  scrollTop(): void {
    this.wrap?.nativeElement.scrollTo(0, 0);
  }

  onWrapClick(event: MouseEvent): void {
    // like magnific-popup: a click on the empty background closes the window
    const target = event.target as HTMLElement;
    if (target === this.wrap?.nativeElement || target === this.content?.nativeElement || target.hasAttribute('data-modal-bg')) {
      this.close();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.close();
    } else if (this.gallery && event.key === 'ArrowLeft') {
      this.prev.emit();
    } else if (this.gallery && event.key === 'ArrowRight') {
      this.next.emit();
    }
  }
}

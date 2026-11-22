import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/** YouTube player window (topic pages' `a.modal` links). */
@Component({
  selector: 'app-youtube-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-modal *ngIf="embedUrl" #modal [showClose]="false" (closed)="closed.emit()">
      <div class="mh-video" data-modal-bg>
        <div class="mh-video__inner">
          <button type="button" class="mh-modal__close" (click)="modal.close()">Close (Esc)</button>
          <div class="mh-video__scaler">
            <iframe
              [src]="embedUrl"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </app-modal>
  `,
})
export class YoutubeModalComponent {
  embedUrl: SafeResourceUrl | null = null;

  /** YouTube video id, `null` closes the player. */
  @Input() set videoId(id: string | null) {
    this.embedUrl = id
      ? this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`)
      : null;
  }
  @Output() closed = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}
}

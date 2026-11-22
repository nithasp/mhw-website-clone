import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

/** Full-width image viewer used by the loupe buttons of the Monsters page. */
@Component({
  selector: 'app-image-lightbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-modal *ngIf="src" #modal [showClose]="false" (closed)="closed.emit()">
      <div class="mh-lightbox" data-modal-bg>
        <figure>
          <img [src]="src" [alt]="alt" />
          <button type="button" class="mh-modal__close" (click)="modal.close()">Close (Esc)</button>
        </figure>
      </div>
    </app-modal>
  `,
})
export class ImageLightboxComponent {
  @Input() src: string | null = null;
  @Input() alt = '';
  @Output() closed = new EventEmitter<void>();
}

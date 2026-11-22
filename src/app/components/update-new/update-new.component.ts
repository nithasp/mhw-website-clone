import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-new',
  templateUrl: './update-new.component.html',
  styleUrls: ['./update-new.component.sass'],
})
export class UpdateNewComponent implements OnInit, OnDestroy {
  /** The featured banner rises in after the main visual has appeared */
  isShown = false;
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.timer = setTimeout(() => (this.isShown = true), 1500);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}

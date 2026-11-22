import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Marks HTML as trusted. Only use it for the site's own static content
 * (src/app/data/*, src/assets/topics/*, src/assets/data/*), never for user input.
 * It keeps markup Angular's sanitizer would strip (inline styles, form toggles).
 */
@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string | null | undefined): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value ?? '');
  }
}

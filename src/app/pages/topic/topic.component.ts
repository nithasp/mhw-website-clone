import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TOPICS, TopicInfo } from '../../data/topics.data';
import { SmoothScrollService } from '../../shared/services/smooth-scroll.service';
import { slideToggle } from '../../shared/utils/slide-toggle';

/**
 * News article ("topics") page, e.g. /topics/alatreon.
 *
 * Like the original site, the article body and its stylesheet are loaded at
 * runtime (src/assets/topics/{slug}/content.html + style.css). The stylesheet
 * was scoped to `.topic-{slug}` when it was imported, so it cannot leak.
 * The original jQuery behaviours are re-implemented with event delegation.
 */
@Component({
  selector: 'app-topic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-topics-layout *ngIf="topic" [slug]="topic.slug" [mhwHeader]="topic.mhwHeader">
      <div #content class="topic-content" [innerHTML]="html" (click)="onContentClick($event)"></div>

      <!-- inline window (e.g. weapon stats of the "boost" topic) -->
      <app-modal *ngIf="inlineHtml" [showClose]="false" #inlineModal (closed)="inlineHtml = null">
        <div class="mh-inline" data-modal-bg>
          <button type="button" class="mh-modal__close mh-modal__close--x" (click)="inlineModal.close()">Close</button>
          <div [innerHTML]="inlineHtml"></div>
        </div>
      </app-modal>
    </app-topics-layout>

    <app-youtube-modal [videoId]="videoId" (closed)="videoId = null"></app-youtube-modal>
  `,
})
export class TopicComponent implements OnInit, OnDestroy {
  @ViewChild('content') content?: ElementRef<HTMLElement>;

  topic: TopicInfo | null = null;
  html: SafeHtml | null = null;
  inlineHtml: SafeHtml | null = null;
  videoId: string | null = null;

  private stylesheet?: HTMLLinkElement;
  private sub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private title: Title,
    private smoothScroll: SmoothScrollService,
    private cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap
      .pipe(
        map((params) => TOPICS.find((t) => t.slug === params.get('slug')) ?? null),
        switchMap((topic) => {
          if (!topic) {
            return of({ topic, html: null });
          }
          this.loadStylesheet(topic.slug);
          return this.http
            .get(`assets/topics/${topic.slug}/content.html`, { responseType: 'text' })
            .pipe(
              map((html) => ({ topic, html })),
              catchError(() => of({ topic, html: null }))
            );
        })
      )
      .subscribe(({ topic, html }) => {
        if (!topic || html === null) {
          this.router.navigate(['/news']);
          return;
        }
        this.topic = topic;
        // trusted: static files shipped with the app (see SafeHtmlPipe)
        this.html = this.sanitizer.bypassSecurityTrustHtml(html);
        this.title.setTitle(`MONSTER HUNTER WORLD: ICEBORNE | ${topic.title}`);
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.stylesheet?.remove();
  }

  /** Event delegation for the links / toggles inside the loaded article. */
  onContentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    // accordions ("boost") and developer comments ("contest")
    const toggleHeader = target.closest<HTMLElement>('.accordion h4, .comment h4');
    if (toggleHeader) {
      const panel = toggleHeader.nextElementSibling as HTMLElement | null;
      toggleHeader.classList.toggle('active');
      if (panel) {
        slideToggle(panel, undefined, 400);
      }
      return;
    }

    const link = target.closest<HTMLAnchorElement>('a');
    if (!link) {
      return;
    }
    const href = link.getAttribute('href') ?? '';

    if (!href || href.startsWith('javascript')) {
      event.preventDefault();
      return;
    }

    // inline modal: <a class="modal_init" href="#weapon_01">
    if (link.classList.contains('modal_init') && href.startsWith('#')) {
      event.preventDefault();
      const source = this.content?.nativeElement.querySelector(href);
      if (source) {
        this.inlineHtml = this.sanitizer.bypassSecurityTrustHtml(source.outerHTML);
        this.cdr.markForCheck();
      }
      return;
    }

    // youtube popup: <a class="modal" href="https://www.youtube.com/watch?v=…">
    if (link.classList.contains('modal') && /youtube\.com/.test(href) && window.innerWidth >= 768) {
      const id = href.match(/v=([\w-]{11})/)?.[1];
      if (id) {
        event.preventDefault();
        this.videoId = id;
        this.cdr.markForCheck();
      }
      return;
    }

    // in-page anchors scroll smoothly (jQuery "swing", 400ms)
    if (href.startsWith('#')) {
      event.preventDefault();
      this.smoothScroll.scrollToElement(this.content?.nativeElement.querySelector(href) ?? null, 400, 'swing');
      return;
    }

    // links to other pages of the clone stay inside the app
    if (href.startsWith('/') && !href.startsWith('/assets/') && link.target !== '_blank') {
      event.preventDefault();
      this.router.navigateByUrl(href);
    }
  }

  private loadStylesheet(slug: string): void {
    const href = `assets/topics/${slug}/style.css`;
    if (this.stylesheet?.getAttribute('href') === href) {
      return;
    }
    this.stylesheet?.remove();
    const link = this.document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    this.document.head.appendChild(link);
    this.stylesheet = link;
  }
}

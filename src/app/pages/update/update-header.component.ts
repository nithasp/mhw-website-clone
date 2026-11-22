import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { UPDATE_VERSION_SELECT } from '../../data/update.data';
import { slideToggle } from '../../shared/utils/slide-toggle';

interface SelectOption {
  key: string;
  label: string;
  /** internal route */
  route?: unknown[];
  /** external link */
  href?: string;
}

const LANGUAGES: SelectOption[] = [
  { key: 'JA', label: '日本語', href: 'https://www.monsterhunter.com/update/mhw/ja/' },
  { key: 'US', label: 'English (US)', route: ['/update'] },
  { key: 'UK', label: 'English (UK)', href: 'https://www.monsterhunter.com/update/mhw/uk/' },
  { key: 'FR', label: 'Français', href: 'https://www.monsterhunter.com/update/mhw/fr/' },
  { key: 'IT', label: 'Italiano', href: 'https://www.monsterhunter.com/update/mhw/it/' },
  { key: 'DE', label: 'Deutsch', href: 'https://www.monsterhunter.com/update/mhw/de/' },
  { key: 'ES', label: 'Español', href: 'https://www.monsterhunter.com/update/mhw/es/' },
  { key: 'HK', label: '繁體中文', href: 'https://www.monsterhunter.com/update/mhw/hk/' },
  { key: 'CN', label: '簡体中文', href: 'https://www.monsterhunter.com/update/mhw/cn/' },
  { key: 'KR', label: '한국어', href: 'https://www.monsterhunter.com/update/mhw/kr/' },
];

/**
 * Header of the update pages: logo, platform logos and a dropdown that selects
 * the language (index page) or the version (detail pages).
 */
@Component({
  selector: 'app-update-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="header">
      <h1 class="logo">
        <a routerLink="/"><img src="/assets/images/update/common/mhwib_logo.png" alt="MONSTER HUNTER WORLD: ICEBORNE" /></a>
      </h1>
      <ul class="platform-list">
        <li class="ps"><img src="/assets/images/update/common/logo_psf.png" alt="PS" /></li>
        <li class="ps4"><img src="/assets/images/update/common/logo_ps4.png" alt="PS4" /></li>
        <li class="xbox"><img src="/assets/images/update/common/logo_xboxone.png" alt="XBOX ONE" /></li>
      </ul>
      <div class="select-wrap">
        <dl class="select-box" [class.is-open]="open">
          <dt (click)="toggle($event)">
            <p class="box-ttl" [class.ic-matl]="mode === 'lang'" [class.ic-lang]="mode === 'lang'">
              {{ mode === 'lang' ? 'Language' : 'Version' }}
            </p>
            <p class="set ic-matl ic-arrow-b-r">{{ currentLabel }}</p>
          </dt>
          <dd #list style="display: none">
            <ul class="lang-list">
              <li *ngFor="let option of options" [class.active]="option.key === current">
                <a *ngIf="option.route" [routerLink]="option.route" (click)="close()">
                  <span>{{ option.label }}</span>
                </a>
                <a *ngIf="option.href" [href]="option.href" target="_blank" rel="noopener" (click)="close()">
                  <span>{{ option.label }}</span>
                </a>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </header>
  `,
})
export class UpdateHeaderComponent {
  /** `lang` on the index page, `ver` on the detail pages */
  @Input() mode: 'lang' | 'ver' = 'lang';
  /** Current version key (e.g. `ver15_10`) */
  @Input() version = '';

  @ViewChild('list', { static: true }) list!: ElementRef<HTMLElement>;

  open = false;

  constructor(private host: ElementRef<HTMLElement>) {}

  get options(): SelectOption[] {
    return this.mode === 'lang'
      ? LANGUAGES
      : UPDATE_VERSION_SELECT.map((v) => ({ key: v.ver, label: v.label, route: ['/update', v.ver] }));
  }

  get current(): string {
    return this.mode === 'lang' ? 'US' : this.version;
  }

  get currentLabel(): string {
    return this.options.find((o) => o.key === this.current)?.label ?? '';
  }

  toggle(event: Event): void {
    event.stopPropagation();
    this.open = slideToggle(this.list.nativeElement, !this.open, 200);
  }

  close(): void {
    if (this.open) {
      this.open = slideToggle(this.list.nativeElement, false, 200);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.close();
    }
  }
}

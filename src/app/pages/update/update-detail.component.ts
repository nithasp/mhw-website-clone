import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UPDATE_VERSIONS } from '../../data/update.data';
import { slideToggle } from '../../shared/utils/slide-toggle';
import { UpdatePage, UpdateSection } from './update.models';

/** Patch notes of one version (original: https://www.monsterhunter.com/update/mhw/us/verXX_XX.html) */
@Component({
  selector: 'app-update-detail',
  templateUrl: './update-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateDetailComponent implements OnInit, OnDestroy {
  page: UpdatePage | null = null;
  /** Current open state of each toggle section */
  private openState = new Map<UpdateSection, boolean>();
  private sub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private title: Title,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap
      .pipe(
        map((params) => params.get('ver') ?? ''),
        switchMap((ver) => {
          if (!UPDATE_VERSIONS.some((v) => v.ver === ver)) {
            return of(null);
          }
          return this.http.get<UpdatePage>(`assets/data/update/${ver}.json`).pipe(catchError(() => of(null)));
        })
      )
      .subscribe((page) => {
        if (!page) {
          this.router.navigate(['/update']);
          return;
        }
        this.page = page;
        this.openState.clear();
        this.title.setTitle(`MONSTER HUNTER WORLD: ICEBORNE [${page.label} Update Information]`);
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  isOpen(section: UpdateSection): boolean {
    return this.openState.get(section) ?? section.open;
  }

  /** Same as the original's `slideToggle(200)` on the section header. */
  toggle(section: UpdateSection, box: HTMLElement): void {
    this.openState.set(section, slideToggle(box, !this.isOpen(section), 200));
  }
}

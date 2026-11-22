import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NEWS, NewsItem } from '../../data/news.data';

/** "Latest Information" list (original: /world-iceborne/us/news/). */
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent {
  /** Items shown before "READ MORE" (original NEWS_MAX) */
  static readonly NEWS_MAX = 8;

  readonly items: NewsItem[] = NEWS.filter((n) => n.showList);
  expanded = false;

  get visibleItems(): NewsItem[] {
    return this.expanded ? this.items : this.items.slice(0, NewsComponent.NEWS_MAX);
  }

  get hasMore(): boolean {
    return !this.expanded && this.items.length > NewsComponent.NEWS_MAX;
  }
}

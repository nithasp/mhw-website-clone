import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MEDIA, MediaItem } from '../../data/news.data';

/** Video list grouped by category (original: /world-iceborne/us/media/). */
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaComponent {
  /** Same group order as the original page */
  readonly groups = ['pr', 'update', 'dev', 'collabo', 'other'] as const;

  readonly byGroup: Record<string, MediaItem[]> = this.groups.reduce((acc, group) => {
    acc[group] = MEDIA.filter((m) => m.showList && this.groupOf(m) === group);
    return acc;
  }, {} as Record<string, MediaItem[]>);

  private groupOf(item: MediaItem): string {
    return (this.groups as readonly string[]).includes(item.cat) ? item.cat : 'other';
  }
}

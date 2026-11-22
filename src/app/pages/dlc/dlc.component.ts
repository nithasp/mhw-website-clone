import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {
  DLC_DELUXE,
  DLC_ITEMS,
  DLC_MENU,
  DLC_SECTIONS,
  DLC_STORE_LINKS,
  DLC_STYLE,
  DLC_VALUE_PACKS,
  DlcItem,
} from '../../data/dlc.data';
import { SmoothScrollService } from '../../shared/services/smooth-scroll.service';

/** Sections whose items come from the original index.json */
const LIST_SECTIONS = ['pose', 'gesture', 'stamp', 'hairstyle', 'costume', 'charm', 'room', 'figure', 'music'];

/**
 * Downloadable Content page (original: /world-iceborne/us/topics/dlc/).
 * The stylesheet is the original DLC stylesheet scoped to `.topic-dlc`
 * (ViewEncapsulation.None because the markup sits inside the topics layout).
 */
@Component({
  selector: 'app-dlc',
  templateUrl: './dlc.component.html',
  styleUrls: ['./dlc.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DlcComponent {
  readonly menu = DLC_MENU;
  readonly valuePacks = DLC_VALUE_PACKS;
  readonly deluxe = DLC_DELUXE;
  readonly style = DLC_STYLE;
  readonly storeLinks = DLC_STORE_LINKS;
  /** Item sections in page order (Appearance is rendered separately) */
  readonly sections = DLC_SECTIONS.filter((s) => LIST_SECTIONS.includes(s.id));

  constructor(private smoothScroll: SmoothScrollService) {}

  items(id: string): DlcItem[] {
    return DLC_ITEMS[id] ?? [];
  }

  /** Menu links scroll like the original (`animate({scrollTop}, 400, 'swing')`). */
  scrollTo(event: Event, anchor: string): void {
    event.preventDefault();
    this.smoothScroll.scrollToElement(document.getElementById(anchor), 400, 'swing');
  }
}

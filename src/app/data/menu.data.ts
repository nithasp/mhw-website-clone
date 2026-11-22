/** Global navigation (same entries and grouping as the original site's menu.json). */
export interface MenuItem {
  label: string;
  /** Internal route */
  route?: string;
  /** Optional fragment (scroll target) of the internal route */
  fragment?: string;
  /** External link (opens in a new tab) */
  href?: string;
  /** Draw a separator line under the item */
  separator?: boolean;
}

export const GLOBAL_MENU: MenuItem[] = [
  { label: 'Home', route: '/', separator: true },
  { label: 'Latest Information', route: '/news', separator: true },
  { label: 'Media', route: '/media', separator: true },
  { label: 'Story', route: '/story' },
  { label: 'Ecosystem', route: '/ecosystem' },
  { label: 'Monsters', route: '/monster' },
  { label: 'Hunting', route: '/hunting' },
  { label: 'New Headquarters', route: '/base' },
  { label: 'Gameplay', route: '/system', separator: true },
  { label: 'Update Information', route: '/update' },
  { label: 'Event Quest Schedule', href: 'https://game.capcom.com/world/us/rank.html' },
  { label: 'Downloadable Content', route: '/topics/dlc', separator: true },
  { label: 'Product Information', route: '/', fragment: 'product-information' },
];

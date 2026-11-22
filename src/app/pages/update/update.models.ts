/** Shape of src/assets/data/update/{ver}.json (generated from the original update pages). */

export interface UpdateNest {
  type: 'text' | 'item';
  /** type `text` */
  html?: string;
  ib?: boolean;
  /** type `item` (skill / weapon change with optional details) */
  category?: string;
  text?: string;
  detail?: string[];
}

export interface UpdateItem {
  html: string;
  /** Feature that requires Iceborne (☆ in the original data) */
  ib: boolean;
  nest: UpdateNest[];
}

export interface UpdateSection {
  title: string;
  /** Sections without a header are always open */
  toggle: boolean;
  textBox: boolean;
  /** Initial state */
  open: boolean;
  image: string | null;
  items: UpdateItem[];
  beforeHtml: string;
  afterHtml: string;
}

export interface UpdateCategory {
  id: string;
  title: string;
  sections: UpdateSection[];
}

export interface UpdatePage {
  ver: string;
  label: string;
  title: string;
  subtitle: string;
  banners: { title: string; route: string | null; image: string }[];
  info: { important: string; html: string } | null;
  categories: UpdateCategory[];
}

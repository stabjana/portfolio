export interface BioEntry {
  id: string;
  /** Short label shown on the timeline, e.g. "Nov 2025 – Now" */
  date: string;
  /** Used only for sorting, not displayed. ISO-ish, higher = more recent. */
  sortKey: string;
  role: string;
  org: string;
  description: string;
  /** one of the palette accent colors, used for the timeline dot */
  accent: string;
}

export interface Project {
  id: string;
  name: string;
  url: string;
  description: string;
  language: string;
  accent: string;
  forkedFrom?: {
    label: string;
    url: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HobbyItem {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  accent: string;
  link?: {
    label: string;
    href: string;
  };
  image?: {
    src: string;
    alt: string;
  };
  footerImage?: {
    src: string;
    alt: string;
    caption?: string;
  };
  youtubeId?: string;
}

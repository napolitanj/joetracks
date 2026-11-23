export interface ExpeditionImage {
  /** Full size, 1600w. Used by the lightbox. */
  src: string; // /images/expeditions/<slug>/<name>.webp
  /** 480w thumbnail. Used by the gallery grid so a 33-photo chapter does not
   *  pull 33 full-size files. */
  thumb: string; // /images/expeditions/<slug>/<name>-thumb.webp
  alt: string;
  /** Original filename in the WordPress media export. Kept so the media prep
   *  script can match served files back to their source. Not rendered. */
  source?: string;
}

export interface ExpeditionFavorite {
  /** Anchor of the chapter this card points at. */
  slug: string;
  /** Short card description. Written for the card, not lifted from the entry. */
  blurb: string;
  /** Card art. Defaults to the chapter's first photo at build time; chapters
   *  with no surviving photos render without media. */
  image?: string;
}

export interface ExpeditionChapter {
  /** Readable anchor id, derived from the title. Several original WordPress
   *  slugs had drifted from their titles (the Katahdin post's slug was "626"),
   *  so anchors are generated rather than inherited. */
  slug: string;
  /** Original WordPress post slug. Kept so the _redirects file can map old
   *  permalinks to the right anchor. Not rendered. */
  legacySlug: string;
  title: string;
  date: string; // "2014-06-10"
  dateLabel: string; // "June 10, 2014"
  region?: string; // original WordPress category, used to group the chapter nav
  paragraphs: string[]; // sanitized inline HTML: em, strong, br, external anchors only
  images: ExpeditionImage[];
  featured?: boolean; // surfaced in the "Start here" list
  note?: string; // editorial note shown above the chapter body
}

export interface Expedition {
  slug: string;
  title: string;
  seoTitle?: string; // <title> override; falls back to `title`
  year: string;
  tagline: string;
  shortDescription: string; // meta description
  heroImage: string;
  /** 1200x630 crop used for Open Graph and Twitter cards. */
  ogImage?: string;
  intro: string[]; // present-day framing, written now rather than on trail
  /** One line explaining what makes these the favorites on this page. */
  favoritesNote: string;
  readerFavorites: ExpeditionFavorite[];
  sourceNote: string; // provenance line shown under the intro
  lastUpdated: string; // "2026-11-18"
  regionOrder: string[]; // display order for the grouped chapter nav
  chapters: ExpeditionChapter[]; // chronological
}

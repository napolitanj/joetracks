#!/usr/bin/env python3
"""Convert WordPress WXR exports into typed Expedition data files for joetracks.com."""

import glob
import html
import json
import os
import re
import sys
from datetime import datetime, timezone
from urllib.parse import urlparse

# Usage: python3 convert-wordpress-export.py [export-dir] [repo-root]
#   export-dir  holds the two WordPress .xml exports (default: this file's dir)
#   repo-root   where src/ lives (default: the parent of this file's dir)
HERE = os.path.dirname(os.path.abspath(__file__))
UPLOADS = sys.argv[1] if len(sys.argv) > 1 else HERE
OUT = sys.argv[2] if len(sys.argv) > 2 else os.path.dirname(HERE)


def find_xml(fragment):
    """Match an export by the blog name in its filename, ignoring the WordPress
    hash prefix and date suffix, which change on every re-export."""
    hits = sorted(glob.glob(f'{UPLOADS}/*{fragment}*.xml'))
    if not hits:
        raise SystemExit(
            f'no WordPress export matching "*{fragment}*.xml" in {UPLOADS}\n'
            f'pass the export directory as the first argument'
        )
    return hits[-1]


SOURCES = [
    {
        'xml': find_xml('haulin'),
        'slug': 'american-west-2013',
        'var': 'americanWest2013',
        'title': 'Riding the American West',
        'seoTitle': 'Riding the American West: A Solo Bike Tour from Colorado to the Pacific (2013)',
        'year': '2013',
        'tagline': 'A solo, self-supported bike tour from the Colorado Rockies to the Northern California coast.',
        'shortDescription': (
            'Field dispatches from a solo, self-supported bicycle tour across the American West in 2013, '
            'from the Colorado Rockies through Utah and Nevada to the Northern California coast.'
        ),
        'sourceDomain': 'haulinhobo.wordpress.com',
        'sourceName': "Haulin' Hobo",
        'intro': [
            'In 2013 I ended my first ski season in Colorado with no car, little money, and '
            'big ambitions to explore the American West. My answer to those constraints was '
            "to buy my friend's Surly Long Haul Trucker, a bike that had already crossed the "
            'country once.',
            'After a few months of route planning and riding a stationary bike at the gym, I '
            'embarked on a solo ride from Breckenridge, Colorado to the Pacific, with plans '
            'to follow the coast before looping back to Montana. The route ran through some '
            "of America's most astonishing national parks, up Highway 1, and through a long "
            'string of small towns along the way. I documented it on a WordPress blog that '
            'has since been migrated to my own domain.',
            'Through snowstorms, equipment failures, unexpected setbacks, and a premature '
            'end, this story catalogs not just a bicycle tour, but the goodness found in '
            'others along the way.',
        ],
        'favoritesNote': (
            'The six entries that drew the most traffic, comments, and likes while the blog '
            'was live.'
        ),
        'stats': [
            {'label': 'Route', 'value': 'Colorado to Northern California'},
            {'label': 'Season', 'value': 'April to June 2013'},
            {'label': 'Style', 'value': 'Solo, self-supported'},
        ],
        'regionOrder': ['Pre-departure', 'Colorado', 'Utah', 'Nevada', 'California'],
    },
    {
        'xml': find_xml('nobohippybro'),
        'slug': 'appalachian-trail-2014',
        'var': 'appalachianTrail2014',
        'title': 'Thru-Hiking the Appalachian Trail',
        'seoTitle': 'Thru-Hiking the Appalachian Trail: Georgia to Maine, 2014',
        'year': '2014',
        'tagline': 'A northbound thru-hike of the Appalachian Trail, Springer Mountain to Katahdin.',
        'shortDescription': (
            'Field dispatches from a northbound thru-hike of the Appalachian Trail in 2014, '
            'written on trail from Springer Mountain in Georgia to Katahdin in Maine.'
        ),
        'sourceDomain': 'nobohippybro.wordpress.com',
        'sourceName': 'Nobo Hippy Bro',
        'intro': [
            'In February 2014 I embarked on a northbound thru-hike of the Appalachian Trail, '
            '2,185 miles from Springer Mountain, Georgia to Mount Katahdin, Maine. I hiked '
            'under the trail name Crush and summited four months and twenty days later. Most '
            'entries here were typed on my phone in a shelter at the end of the day, or in '
            'town on a resupply, and cleaned up in the years since. The last few did not go '
            'up until well after I got home.',
            'The blog has since been migrated to my own domain and reformatted for easier '
            'navigation and readability. Enjoy!',
        ],
        'favoritesNote': (
            'Four entries that carry the arc of the hike, from the middle of Virginia to the '
            'summit of Katahdin.'
        ),
        'stats': [
            {'label': 'Route', 'value': 'Springer Mountain to Katahdin'},
            {'label': 'Season', 'value': 'February to August 2014'},
            {'label': 'Direction', 'value': 'Northbound'},
        ],
        'regionOrder': [
            'Pre-Departure', 'Georgia', 'North Carolina', 'North Carolina / Tennessee',
            'Virginia', 'Maryland', 'Pennsylvania', 'New Jersey', 'New York',
            'New England', 'White Mountains', 'Maine',
        ],
        # The bike blog carries a "Reader's Favorites" category Joe curated in
        # 2013 from traffic and comments; the AT blog has no equivalent, so
        # these four are a starting pick, chronological and all with photos.
        # TODO Joe: swap these for the four or five you'd actually point at.
        'favorites': [
            'magic-hippy-love-cloud',
            'the-white-mountains',
            'the-finest-day',
            'katahdin',
        ],
    },
]

# Card copy for the Reader Favorites grid, written from each entry's own text.
# TODO Joe: these are drafts, rewrite in your own words.
FAVORITE_BLURBS = {
    # american-west-2013
    'hibernation': (
        'Riding into Great Sand Dunes National Park after a free night outside the '
        'boundary, then settling in among the dunes for a few days.'
    ),
    'refuge': (
        'Leaving the dunes and crossing the San Luis Valley under Mount Blanca, a peak '
        'used as a landmark by travelers since before the Louisiana Purchase.'
    ),
    'bogus-and-beauty': (
        'A chain failure partway up a long climb toward Boulder, Utah, and what the rest '
        'of that day looked like once the bike was moving again.'
    ),
    'zion': (
        'Night riding out of Bryce, a few hours of sleep under a billboard outside Hatch, '
        'and the run down Highway 89 into Zion.'
    ),
    'banner-peak-expedition': (
        'The objective the whole tour was built around: a Class 3 line up Banner Peak, '
        'approached from Tuolumne Meadows on the PCT and the John Muir Trail.'
    ),
    'gold-bear': (
        'The last post, written seven months late, covering the four foggy days past the '
        'Golden Gate and the end of the trip.'
    ),
    # appalachian-trail-2014
    'magic-hippy-love-cloud': (
        'A day off the thru-hike to scramble Old Rag in the Shenandoah with friends out of '
        'Washington, on the strength of a rumor about the best hike in the park.'
    ),
    'the-white-mountains': (
        'Written on a library computer at a dollar every half hour: wrecked knees, raw feet, '
        'and a mountain range that has never heard of switchbacks.'
    ),
    'the-finest-day': (
        'A weather window in the Presidentials, planned out of the guidebook the night before '
        'at Zealand Falls Hut, and the best day of walking on the whole trail.'
    ),
    'katahdin': (
        'Five days through the Hundred Mile Wilderness to the northern terminus, and a look '
        'back at the first miserable week from the far end of the trail.'
    ),
}

# Editorial notes keyed by post slug, for chapters that need context.
CHAPTER_NOTES = {
    'gold-bear': 'Written in January 2014, seven months after the fact, recounting the final four days of the trip.',
}

SKIP_CATEGORIES = {"Reader's Favorites", 'Uncategorized'}
FEATURED_CATEGORY = "Reader's Favorites"

# Orphaned captions left behind by images that were dropped (third-party hosted).
DROP_PARAGRAPHS = {'source: bbc.com'}

STOP_AT_START = ()


def slugify(title):
    """Readable anchor derived from the chapter title. Several WordPress slugs
    drifted from their titles over the years (the Katahdin post's slug is
    literally "626"), so anchors come from the title instead."""
    s = title.lower()
    s = s.replace('&', ' and ')
    s = re.sub(r"['‘’“”\"]", '', s)
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return re.sub(r'^-+|-+$', '', s)

ALLOWED_INLINE = {'em', 'i', 'strong', 'b', 'br'}


def cdata(pattern, blob, flags=0):
    m = re.search(pattern, blob, flags)
    return m.group(1) if m else None


def items_of(blob):
    return re.findall(r'<item>(.*?)</item>', blob, re.S)


def sanitize_inline(fragment, source_domain):
    """Keep a small inline whitelist, drop everything else, unescape entities."""
    # Unwrap anchors: keep text, keep genuinely external hrefs as plain text targets.
    def anchor(m):
        href, inner = m.group(1), m.group(2)
        host = urlparse(html.unescape(href)).netloc
        if not host or source_domain in host or 'wordpress.com' in host:
            return inner
        return f'<a href="{html.escape(html.unescape(href), quote=True)}" target="_blank" rel="noopener noreferrer">{inner}</a>'

    fragment = re.sub(r'<a\b[^>]*href=["\']([^"\']*)["\'][^>]*>(.*?)</a>', anchor, fragment, flags=re.S | re.I)
    fragment = re.sub(r'<a\b[^>]*>(.*?)</a>', r'\1', fragment, flags=re.S | re.I)

    # Strip every tag except the inline whitelist and the anchors kept above.
    def tag(m):
        raw, name = m.group(0), m.group(1).lower()
        if name in ALLOWED_INLINE:
            return f'<{"/" if raw.startswith("</") else ""}{name}>'
        if name == 'a':
            return raw
        return ''

    fragment = re.sub(r'</?([a-zA-Z0-9]+)\b[^>]*/?>', tag, fragment)
    fragment = html.unescape(fragment)
    fragment = fragment.replace(' ', ' ')
    fragment = re.sub(r'[ \t]+', ' ', fragment)
    return fragment.strip()


def extract_images(body, source_domain):
    """Pull every <img> out of the body. Returns (body_without_imgs, local, missing)."""
    local, missing = [], []
    for tag in re.findall(r'<img\b[^>]*>', body, re.I):
        src = cdata(r'src=["\']([^"\']+)["\']', tag)
        if not src:
            continue
        src = html.unescape(src)
        host = urlparse(src).netloc
        name = src.split('?')[0].split('/')[-1]
        if source_domain in host:
            local.append(name)
        else:
            title = cdata(r'title=["\']([^"\']+)["\']', tag) or name
            missing.append({'filename': html.unescape(title), 'host': host})
    body = re.sub(r'<img\b[^>]*>', '', body, flags=re.I)
    return body, local, missing


def paragraphs_of(body, source_domain):
    """WordPress mixes explicit <p> blocks with bare wpautop text. Handle both."""
    blocks = []
    # Gutenberg block delimiters and any other HTML comments carry no content.
    body = re.sub(r'<!--.*?-->', '', body, flags=re.S)
    # Pull explicit <p> blocks out first, leaving markers so order survives.
    parts = re.split(r'(<p\b[^>]*>.*?</p>)', body, flags=re.S | re.I)
    for part in parts:
        if not part or not part.strip():
            continue
        if re.match(r'^<p\b', part, re.I):
            inner = re.sub(r'^<p\b[^>]*>|</p>$', '', part.strip(), flags=re.I)
            blocks.append(inner)
        else:
            # bare text: split on blank lines the way wpautop would
            for chunk in re.split(r'\n\s*\n', part):
                if chunk.strip():
                    blocks.append(chunk)

    out = []
    for b in blocks:
        clean = sanitize_inline(b, source_domain)
        clean = re.sub(r'^(?:<br>\s*)+|(?:<br>\s*)+$', '', clean).strip()
        if not clean or clean.lower() in DROP_PARAGRAPHS:
            continue
        if not re.search(r'[A-Za-z0-9]', clean):
            continue
        out.append(clean)
    return out


def convert(src):
    blob = open(src['xml'], encoding='utf-8').read()
    chapters, report = [], []

    for it in items_of(blob):
        if cdata(r'<wp:post_type><!\[CDATA\[(.*?)\]\]>', it) != 'post':
            continue
        if cdata(r'<wp:status><!\[CDATA\[(.*?)\]\]>', it) != 'publish':
            continue

        title = html.unescape(cdata(r'<title><!\[CDATA\[(.*?)\]\]></title>', it) or '').strip()
        slug = cdata(r'<wp:post_name><!\[CDATA\[(.*?)\]\]>', it) or ''
        date_raw = (cdata(r'<wp:post_date><!\[CDATA\[(.*?)\]\]>', it) or '')[:10]
        body = cdata(r'<content:encoded><!\[CDATA\[(.*?)\]\]></content:encoded>', it, re.S) or ''
        cats = [html.unescape(c) for c in
                re.findall(r'domain="category"[^>]*><!\[CDATA\[(.*?)\]\]>', it)]

        body, local, missing = extract_images(body, src['sourceDomain'])
        paras = paragraphs_of(body, src['sourceDomain'])

        region = next((c for c in cats if c not in SKIP_CATEGORIES), None)
        dt = datetime.strptime(date_raw, '%Y-%m-%d')
        date_label = f'{dt.strftime("%B")} {dt.day}, {dt.year}'

        alt = f'{title}, {date_label}'
        # Site convention is .webp. The media prep script emits two sizes per
        # photo: a 480w thumb for the gallery grid and a 1600w full for the
        # lightbox. Chapters run up to 33 photos, so the grid must not load fulls.
        images = []
        for n in local:
            stem = re.sub(r'\.[A-Za-z0-9]+$', '', n)
            base = f'/images/expeditions/{src["slug"]}/{stem}'
            images.append({
                'src': f'{base}.webp',
                'thumb': f'{base}-thumb.webp',
                'alt': alt,
                'source': n,
            })

        anchor = slugify(title)

        chapter = {
            'slug': anchor,
            'legacySlug': slug,
            'title': title,
            'date': date_raw,
            'dateLabel': date_label,
            'paragraphs': paras,
            'images': images,
        }
        if region:
            chapter['region'] = region
        if FEATURED_CATEGORY in cats:
            chapter['featured'] = True
        if slug in CHAPTER_NOTES:
            chapter['note'] = CHAPTER_NOTES[slug]

        chapters.append(chapter)
        report.append({
            'slug': anchor, 'legacySlug': slug, 'title': title, 'date': date_raw,
            'words': sum(len(p.split()) for p in paras),
            'photos': local, 'unavailable': missing,
        })

    chapters.sort(key=lambda c: c['date'])
    report.sort(key=lambda r: r['date'])

    seen = {}
    for c in chapters:
        if c['slug'] in seen:
            raise SystemExit(f'duplicate anchor {c["slug"]!r} in {src["slug"]}')
        seen[c['slug']] = True

    return chapters, report


def ts_literal(value, indent=2):
    """Emit TypeScript-ish JSON with single-quote-safe double-quoted strings."""
    return json.dumps(value, indent=indent, ensure_ascii=False)


def hero_image(chapters, src):
    best = max(chapters, key=lambda c: len(c['images']), default=None)
    if best and best['images']:
        return best['images'][0]['src']
    return f'/images/expeditions/{src["slug"]}/hero.webp'


def build_favorites(src, chapters):
    """Reader Favorites cards: anchor, draft blurb, and a representative photo."""
    by_slug = {c['slug']: c for c in chapters}
    picks = src.get('favorites') or [c['slug'] for c in chapters if c.get('featured')]

    unknown = [s for s in picks if s not in by_slug]
    if unknown:
        raise SystemExit(f'favorites reference unknown anchors in {src["slug"]}: {unknown}')

    missing_blurb = [s for s in picks if s not in FAVORITE_BLURBS]
    if missing_blurb:
        raise SystemExit(f'no blurb written for {missing_blurb} in {src["slug"]}')

    favorites = []
    for slug in picks:
        chapter = by_slug[slug]
        entry = {'slug': slug, 'blurb': FAVORITE_BLURBS[slug]}
        # Card art defaults to the entry's first surviving photo. Some chapters
        # have none, and the template renders those without media.
        if chapter['images']:
            entry['image'] = chapter['images'][0]['thumb']
        favorites.append(entry)
    return favorites


def write_data_file(src, chapters):
    featured = build_favorites(src, chapters)
    expedition = {
        'slug': src['slug'],
        'title': src['title'],
        'seoTitle': src['seoTitle'],
        'year': src['year'],
        'tagline': src['tagline'],
        'shortDescription': src['shortDescription'],
        # Defaults to the first photo of the most heavily illustrated chapter so
        # the page renders as soon as the media prep script has run.
        # TODO Joe: swap for the photo you actually want as the hero.
        'heroImage': hero_image(chapters, src),
        # The stats bar was removed from the template; the route, season and
        # dispatch count now live in the intro copy instead.
        # TODO Joe: this is a draft, rewrite it however you want. It is the only
        # part of the page written today rather than on the trip.
        'intro': src['intro'],
        'favoritesNote': src['favoritesNote'],
        'readerFavorites': featured,
        'sourceNote': (
            f'Originally published at {src["sourceDomain"]} between '
            f'{chapters[0]["dateLabel"]} and {chapters[-1]["dateLabel"]}.'
        ),
        'lastUpdated': datetime.now(timezone.utc).strftime('%Y-%m-%d'),
        'regionOrder': src['regionOrder'],
        'chapters': chapters,
    }

    body = ts_literal(expedition)
    content = (
        'import { Expedition } from "../../types/Expedition";\n\n'
        f'export const {src["var"]}: Expedition = {body};\n'
    )
    path = f'{OUT}/src/data/expeditions/{src["slug"]}.ts'
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, 'w', encoding='utf-8').write(content)
    return expedition


# Hero chosen by hand: the auto-pick grabbed a 500px WordPress thumbnail.
HERO_OVERRIDE = {
    "american-west-2013": "bike-blog-banner.webp",
    "appalachian-trail-2014": "img_1083.webp",
}
OG_IMAGE = {s: f"/images/expeditions/og-{s}.jpg" for s in HERO_OVERRIDE}


def main():
    os.makedirs(f'{OUT}/src/data/expeditions', exist_ok=True)
    reports, summary = {}, []

    for src in SOURCES:
        chapters, report = convert(src)
        exp = write_data_file(src, chapters)
        reports[src['slug']] = report

        photos = sum(len(c['images']) for c in chapters)
        gone = sum(len(r['unavailable']) for r in report)
        words = sum(r['words'] for r in report)
        summary.append({
            'slug': src['slug'], 'chapters': len(chapters), 'words': words,
            'photos': photos, 'unavailable': gone,
            'thinChapters': [r['slug'] for r in report if not r['photos'] and r['unavailable']],
        })

    index = (
        'import { Expedition } from "../../types/Expedition";\n'
        + ''.join(f'import {{ {s["var"]} }} from "./{s["slug"]}";\n' for s in SOURCES)
        + '\nexport const expeditions: Expedition[] = [\n'
        + ''.join(f'  {s["var"]},\n' for s in SOURCES)
        + '];\n\n'
        'export function getExpeditionBySlug(slug: string): Expedition | undefined {\n'
        '  return expeditions.find((e) => e.slug === slug);\n'
        '}\n'
    )
    open(f'{OUT}/src/data/expeditions/index.ts', 'w', encoding='utf-8').write(index)

    os.makedirs(f'{OUT}/reports', exist_ok=True)
    json.dump(reports, open(f'{OUT}/reports/media-manifest.json', 'w'), indent=2)

    print(json.dumps(summary, indent=2))


if __name__ == '__main__':
    main()

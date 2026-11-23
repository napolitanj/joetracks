#!/usr/bin/env python3
"""Generate a Cloudflare Pages _redirects file mapping every old WordPress
permalink to its chapter anchor on the new expedition pages."""

import glob
import json
import os
import re
import sys
from urllib.parse import urlparse

# Usage: python3 generate-redirects.py [export-dir] [repo-root]
# Run this after convert-wordpress-export.py; it reads the generated data files
# so that only published chapters get a rule, and every rule points at the
# chapter's real anchor.
HERE = os.path.dirname(os.path.abspath(__file__))
UPLOADS = sys.argv[1] if len(sys.argv) > 1 else HERE
OUT = sys.argv[2] if len(sys.argv) > 2 else os.path.dirname(HERE)


def find_xml(fragment):
    hits = sorted(glob.glob(f'{UPLOADS}/*{fragment}*.xml'))
    if not hits:
        raise SystemExit(f'no WordPress export matching "*{fragment}*.xml" in {UPLOADS}')
    return hits[-1]


MAP = [
    ('american-west-2013', find_xml('haulin')),
    ('appalachian-trail-2014', find_xml('nobohippybro')),
]

# Loaded from the generated data files so only published chapters get a rule.
# Maps the original WordPress slug to the chapter's new anchor.
def published_slugs(expedition_slug):
    text = open(f'{OUT}/src/data/expeditions/{expedition_slug}.ts', encoding='utf-8').read()
    data = json.loads(text[text.index('= ') + 2:text.rindex(';')])
    return {c['legacySlug']: c['slug'] for c in data['chapters']}


def main():
    lines = [
        '# Archive redirects: old WordPress permalinks to the expedition pages.',
        '# Generated from the WordPress exports. First match wins, so the explicit',
        '# per-post rules come before the year-level catch-alls.',
        '#',
        '# These fire on paths arriving at joetracks.com. The WordPress.com Site',
        '# Redirect upgrade forwards each old permalink path-for-path, so',
        '# haulinhobo.wordpress.com/2013/04/25/gods-country/ lands here as',
        '# /2013/04/25/gods-country/ and matches the rule below.',
        '',
    ]

    years = {}
    total = 0

    for expedition_slug, xml in MAP:
        keep = published_slugs(expedition_slug)
        blob = open(xml, encoding='utf-8').read()
        rules = []

        for item in re.findall(r'<item>(.*?)</item>', blob, re.S):
            if re.search(r'<wp:post_type><!\[CDATA\[post\]\]>', item) is None:
                continue
            if re.search(r'<wp:status><!\[CDATA\[publish\]\]>', item) is None:
                continue
            link = re.search(r'<link>(.*?)</link>', item)
            name = re.search(r'<wp:post_name><!\[CDATA\[(.*?)\]\]>', item)
            if not link or not name or name.group(1) not in keep:
                continue
            path = urlparse(link.group(1)).path
            if not path.endswith('/'):
                path += '/'
            dest = f'/expeditions/{expedition_slug}#{keep[name.group(1)]}'
            rules.append((path, dest))
            # remember year/month so catch-alls route to the right trip
            m = re.match(r'/(\d{4})/(\d{2})/', path)
            if m:
                years.setdefault((m.group(1), m.group(2)), expedition_slug)

        rules.sort()
        lines.append(f'# {expedition_slug}: {len(rules)} posts')
        for path, dest in rules:
            lines.append(f'{path}  {dest}  301')
            # WordPress served both with and without the trailing slash
            lines.append(f'{path.rstrip("/")}  {dest}  301')
        lines.append('')
        total += len(rules)

    # Month-level catch-alls for attachment pages, paginated archives, feeds and
    # anything else under an old date path that has no explicit rule.
    lines.append('# Catch-alls for attachment pages, date archives and feeds.')
    for (year, month), expedition_slug in sorted(years.items()):
        lines.append(f'/{year}/{month}/*  /expeditions/{expedition_slug}  301')
    for year in sorted({y for y, _ in years}):
        owner = sorted(
            {s for (yy, _), s in years.items() if yy == year},
            key=lambda s: -sum(1 for (yy, _), v in years.items() if yy == year and v == s),
        )[0]
        lines.append(f'/{year}/*  /expeditions/{owner}  301')
    lines.append('')

    open(f'{OUT}/public/_redirects', 'w', encoding='utf-8').write('\n'.join(lines))
    print(f'wrote {total} explicit post rules plus {len(years)} month catch-alls')


if __name__ == '__main__':
    import os
    os.makedirs(f'{OUT}/public', exist_ok=True)
    main()

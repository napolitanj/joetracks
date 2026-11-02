/**
 * Cloudflare Pages Middleware — OG tag injector
 *
 * This middleware intercepts HTML responses for known routes and rewrites the
 * default Open Graph / Twitter meta tags in index.html with page-specific
 * values before the response reaches the client. This is necessary because
 * social crawlers (Discord, Slack, iMessage, etc.) do not execute JavaScript
 * and will only see the static HTML.
 *
 * ─── HOW TO ADD A NEW ROUTE ───────────────────────────────────────────────
 * 1. Add a new entry to the ROUTES map below.
 * 2. The key is the pathname exactly as it appears in the URL (leading slash,
 *    no trailing slash).
 * 3. Fill in title, description, image (absolute URL), url (absolute URL),
 *    and type ("article" for guides, "website" for general pages).
 *
 * Example:
 *   "/my-new-guide": {
 *     title: "My New Guide | JoeTracks",
 *     description: "A short description of the page.",
 *     image: "https://joetracks.com/images/my-new-guide/card.webp",
 *     url: "https://joetracks.com/my-new-guide",
 *     type: "article",
 *   },
 * ──────────────────────────────────────────────────────────────────────────
 */

interface RouteMeta {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
  /**
   * Absolute canonical URL for this route. The static index.html ships a
   * site-root canonical, so without this every route tells a pre-render
   * crawler it is a duplicate of the homepage.
   */
  canonical: string;
}

const ROUTES: Record<string, RouteMeta> = {
  "/boardman-river-keystone-rapids": {
    title: "Paddling the Keystone Rapids — A Boardman River Guide | JoeTracks",
    description:
      "A beginner's field guide to paddling the Keystone Rapids stretch of the Boardman River in Traverse City, Michigan — put-in and take-out info, rapids breakdown, bike shuttle route, and what to expect on the water.",
    image: "https://joetracks.com/images/keystone-rapids/keystone-rapids-card.webp",
    url: "https://joetracks.com/boardman-river-keystone-rapids",
    canonical: "https://joetracks.com/boardman-river-keystone-rapids",
    type: "article",
  },
  "/ski-sleeping-bear-dunes": {
    title: "Skiing Sleeping Bear Dunes: Shauger Hill Field Guide | JoeTracks",
    description:
      "Field-tested guide to skiing Shauger Hill at Sleeping Bear Dunes National Lakeshore — conditions assessment, gear list, approach beta, and a full trip report.",
    image: "https://joetracks.com/images/ski-sleeping-bear/ski-sleeping-bear-banner.png",
    url: "https://joetracks.com/ski-sleeping-bear-dunes",
    canonical: "https://joetracks.com/ski-sleeping-bear-dunes",
    type: "article",
  },
  "/north-manitou-island-guide": {
    title: "North Manitou Island Backpacking & Camping Guide | JoeTracks",
    description:
      "Ferry and charter access, permits and fees, hazards, packing list, and route planning for backpacking North Manitou Island. Field notes from a decade of trips.",
    image:
      "https://joetracks.com/images/north-manitou/north-manitou-island-backpacking.webp",
    url: "https://joetracks.com/north-manitou-island-guide",
    canonical: "https://joetracks.com/north-manitou-island-guide",
    type: "article",
  },
  "/betsie-river": {
    title:
      "The Betsie River Paddling Guide — Kayaking & Canoeing from Interlochen to Frankfort | JoeTracks",
    description:
      "A complete guide to paddling the Betsie River in northern Michigan — 54 miles of kayaking and canoeing from Green Lake near Interlochen to Lake Michigan at Frankfort. Download the free 37-page PDF guide.",
    image: "https://joetracks.com/images/betsie-river/betsie-river-card.webp",
    url: "https://joetracks.com/betsie-river",
    canonical: "https://joetracks.com/betsie-river",
    type: "article",
  },
  "/kalkaska-moraine-loop": {
    title:
      "The Kalkaska Moraine Loop — A 50-Mile Michigan Backpacking Loop Guide | JoeTracks",
    description:
      "A field-verified 50-mile backpacking loop through the sandy moraine country southeast of Traverse City, Michigan. Four legs, three shorter trips, full maps, elevation profiles, waypoints, and a CalTopo mapset. The only complete guide to the route.",
    image:
      "https://joetracks.com/images/kalkaska-moraine-loop/kalkaska-moraine-loop-banner.webp",
    url: "https://joetracks.com/kalkaska-moraine-loop",
    canonical: "https://joetracks.com/kalkaska-moraine-loop",
    type: "article",
  },
  "/palmer-woods-biking": {
    title: "Mountain Biking at Palmer Woods Forest Reserve | JoeTracks",
    description:
      "A guide to mountain biking the just-completed trail system at Palmer Woods Forest Reserve in Leelanau County, Michigan — 27 miles of singletrack across two trail hubs, with detailed maps, trail breakdowns, and trip-planning info.",
    image: "https://joetracks.com/images/palmer-woods/palmer-woods-card.webp",
    url: "https://joetracks.com/palmer-woods-biking",
    canonical: "https://joetracks.com/palmer-woods-biking",
    type: "article",
  },
  // Trail guides. These render through /trails/:slug, whose Helmet sets no
  // canonical at all, so the entries below are the only canonical those
  // pages get.
  "/trails/pyramid-point": {
    title: "Pyramid Point Trails, Sleeping Bear Dunes — 3 Route Options",
    description:
      "Three hikes to the Pyramid Point overlook in Sleeping Bear Dunes: a 1.2-mi round trip, a 2.3-mi Meadow Loop, and a 3.24-mi route AllTrails doesn't list.",
    image: "https://joetracks.com/images/pyramid-point/pyramid-point-hero.webp",
    url: "https://joetracks.com/trails/pyramid-point",
    canonical: "https://joetracks.com/trails/pyramid-point",
    type: "article",
  },
  "/trails/whaleback-natural-area": {
    title: "Whaleback Natural Area Hike, Leland — Lake Michigan Bluff",
    description:
      "A steep half-mile climb to a 300-ft bluff over Lake Michigan near Leland. 1.6-mile loop past thimbleberry patches and Manitou Passage overlooks.",
    image:
      "https://joetracks.com/images/conservancy-natural-areas/whaleback-natural-area/whaleback-natural-area-banner.webp",
    url: "https://joetracks.com/trails/whaleback-natural-area",
    canonical: "https://joetracks.com/trails/whaleback-natural-area",
    type: "article",
  },
  "/trails/valley-of-the-giants": {
    title: "Valley of the Giants — Michigan Old Growth Forest Hike",
    description:
      "A 6-mile out-and-back on the North Country Trail through old-growth white pines near Traverse City. Blaze-by-blaze directions AllTrails doesn't have.",
    image:
      "https://joetracks.com/images/nct/valley-of-the-giants/valley-of-the-giants-banner.webp",
    url: "https://joetracks.com/trails/valley-of-the-giants",
    canonical: "https://joetracks.com/trails/valley-of-the-giants",
    type: "article",
  },
  "/trails/timbers-recreation-area": {
    title: "Timbers Recreation Area — Long Lake Hiking & ADA Trail",
    description:
      "Hike the 2.1-mile loop at Timbers Recreation Area on Long Lake near Traverse City: 4.5 mi of trails, a universally accessible route, and fishing access.",
    image:
      "https://joetracks.com/images/conservancy-natural-areas/timbers-recreation-area/timbers-recreation-area-banner.webp",
    url: "https://joetracks.com/trails/timbers-recreation-area",
    canonical: "https://joetracks.com/trails/timbers-recreation-area",
    type: "article",
  },
};

export async function onRequest(context: {
  request: Request;
  next: () => Promise<Response>;
}): Promise<Response> {
  const { request, next } = context;

  const url = new URL(request.url);
  // Trailing slashes are the same page, so normalize before the lookup.
  const pathname =
    url.pathname.length > 1 ? url.pathname.replace(/\/+$/, "") : url.pathname;
  const meta = ROUTES[pathname];

  // No match — pass through untouched
  if (!meta) {
    return next();
  }

  const response = await next();

  // Only rewrite HTML responses
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  return new HTMLRewriter()
    // <title>
    .on("title", {
      text(chunk) {
        if (chunk.lastInTextNode) {
          chunk.replace(meta.title);
        } else {
          chunk.remove();
        }
      },
    })
    // <meta name="title">
    .on('meta[name="title"]', {
      element(el) {
        el.setAttribute("content", meta.title);
      },
    })
    // <meta name="description">
    .on('meta[name="description"]', {
      element(el) {
        el.setAttribute("content", meta.description);
      },
    })
    // Canonical — must match the route, not the site root
    .on('link[rel="canonical"]', {
      element(el) {
        el.setAttribute("href", meta.canonical);
      },
    })
    // OG tags
    .on('meta[property="og:type"]', {
      element(el) {
        el.setAttribute("content", meta.type);
      },
    })
    .on('meta[property="og:url"]', {
      element(el) {
        el.setAttribute("content", meta.url);
      },
    })
    .on('meta[property="og:title"]', {
      element(el) {
        el.setAttribute("content", meta.title);
      },
    })
    .on('meta[property="og:description"]', {
      element(el) {
        el.setAttribute("content", meta.description);
      },
    })
    .on('meta[property="og:image"]', {
      element(el) {
        el.setAttribute("content", meta.image);
      },
    })
    // Twitter tags
    .on('meta[name="twitter:url"]', {
      element(el) {
        el.setAttribute("content", meta.url);
      },
    })
    .on('meta[name="twitter:title"]', {
      element(el) {
        el.setAttribute("content", meta.title);
      },
    })
    .on('meta[name="twitter:description"]', {
      element(el) {
        el.setAttribute("content", meta.description);
      },
    })
    .on('meta[name="twitter:image"]', {
      element(el) {
        el.setAttribute("content", meta.image);
      },
    })
    .transform(response);
}

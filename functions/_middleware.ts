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
  /**
   * Optional robots directive. The static index.html ships "index,follow",
   * so any page that should stay out of search must say so here: a robots
   * rule applied only by client-side JavaScript is not reliably honoured.
   */
  robots?: string;
}

const ROUTES: Record<string, RouteMeta> = {
  "/boardman-river-keystone-rapids": {
    title: "Paddling the Keystone Rapids — A Boardman River Guide | JoeTracks",
    description:
      "A beginner's field guide to paddling the Keystone Rapids stretch of the Boardman River in Traverse City, Michigan — put-in and take-out info, rapids breakdown, bike shuttle route, and what to expect on the water.",
    image:
      "https://joetracks.com/images/keystone-rapids/keystone-rapids-card.webp",
    url: "https://joetracks.com/boardman-river-keystone-rapids",
    canonical: "https://joetracks.com/boardman-river-keystone-rapids",
    type: "article",
  },
  "/ski-sleeping-bear-dunes": {
    title: "Skiing Sleeping Bear Dunes: Shauger Hill Field Guide | JoeTracks",
    description:
      "Field-tested guide to skiing Shauger Hill at Sleeping Bear Dunes National Lakeshore — conditions assessment, gear list, approach beta, and a full trip report.",
    image:
      "https://joetracks.com/images/ski-sleeping-bear/ski-sleeping-bear-banner.png",
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
  // ── Core site pages ────────────────────────────────────────────────────
  "/about": {
    title: "About Joe Napolitan | JoeTracks",
    description:
      "Fifteen years of ski patrol, wilderness guiding, and outdoor education behind the field-researched guides and planning tools on JoeTracks.",
    image: "https://joetracks.com/images/og-image.png",
    url: "https://joetracks.com/about",
    canonical: "https://joetracks.com/about",
    type: "website",
  },
  "/guides": {
    title: "Northern Michigan Trail & Route Guides | JoeTracks",
    description:
      "Field-researched guides to hiking, paddling, skiing, and mountain biking in Northern Michigan, with maps, access notes, and conditions.",
    image: "https://joetracks.com/images/og-image.png",
    url: "https://joetracks.com/guides",
    canonical: "https://joetracks.com/guides",
    type: "website",
  },
  "/tools": {
    title: "Outdoor Planning Tools for Michigan | JoeTracks",
    description:
      "Live river conditions, Michigan ski forecasts, and trip-planning tools built for real decisions. No apps to download, no accounts to make.",
    image: "https://joetracks.com/images/og-image.png",
    url: "https://joetracks.com/tools",
    canonical: "https://joetracks.com/tools",
    type: "website",
  },
  "/contact": {
    title: "Contact | JoeTracks",
    description:
      "Questions about the guides, feedback on the tools, collaboration ideas, or corrections. Get in touch.",
    image: "https://joetracks.com/images/og-image.png",
    url: "https://joetracks.com/contact",
    canonical: "https://joetracks.com/contact",
    type: "website",
  },
  // ── Guides and tools that were missing edge metadata ───────────────────
  "/ski-mount-sneffels": {
    title: "Skiing Mount Sneffels: Snake Couloir Guide | JoeTracks",
    description:
      "Detailed Snake Couloir beta for Mount Sneffels: approach logistics, rappel setup, hazard notes, map links, and trip-tested insights.",
    image: "https://joetracks.com/images/sneffels/Mount-sneffels-view.webp",
    url: "https://joetracks.com/ski-mount-sneffels",
    canonical: "https://joetracks.com/ski-mount-sneffels",
    type: "article",
  },
  "/caltopo-guide": {
    title: "How to Use CalTopo for Trip Planning | JoeTracks",
    description:
      "Learn CalTopo route building, map layers, terrain tools, and export workflows for safer backcountry trip planning.",
    image: "https://joetracks.com/images/caltopo/caltopo.webp",
    url: "https://joetracks.com/caltopo-guide",
    canonical: "https://joetracks.com/caltopo-guide",
    type: "article",
  },
  "/remote-forecasting-tools": {
    title: "Remote Forecasting Tools for Snow & Trip Planning | JoeTracks",
    description:
      "A practical workflow using NOHRSC, SNOTEL, SWE, and map overlays to assess snow conditions remotely and plan better mountain trips.",
    image: "https://joetracks.com/images/og-image.png",
    url: "https://joetracks.com/remote-forecasting-tools",
    canonical: "https://joetracks.com/remote-forecasting-tools",
    type: "website",
  },
  "/michigan-ski-tracker": {
    title: "Michigan Ski Tracker | JoeTracks",
    description:
      "Live Michigan ski resort snowfall and weather tracker powered by NOAA forecasts to support better Great Lakes trip planning.",
    image: "https://joetracks.com/images/ski-tracker-preview.png",
    url: "https://joetracks.com/michigan-ski-tracker",
    canonical: "https://joetracks.com/michigan-ski-tracker",
    type: "website",
  },
  "/river-conditions": {
    title: "Michigan River Conditions | Live Flow & Gauge Data — JoeTracks",
    description:
      "Real-time river flow rates and gauge heights for Michigan paddling rivers, updated continuously from USGS gauging stations. Compares current conditions to historical averages for every date of the year.",
    image: "https://joetracks.com/images/og-image.png",
    url: "https://joetracks.com/river-conditions",
    canonical: "https://joetracks.com/river-conditions",
    type: "website",
  },
  // ── Field Archive ───────────────────────────────────────────────────────
  "/expeditions/appalachian-trail-2014": {
    title: "Thru-Hiking the Appalachian Trail: Georgia to Maine, 2014",
    description:
      "Field dispatches from a northbound thru-hike of the Appalachian Trail in 2014, written on trail from Springer Mountain in Georgia to Katahdin in Maine.",
    image:
      "https://joetracks.com/images/expeditions/og-appalachian-trail-2014.jpg",
    url: "https://joetracks.com/expeditions/appalachian-trail-2014",
    canonical: "https://joetracks.com/expeditions/appalachian-trail-2014",
    type: "article",
  },
  "/expeditions/american-west-2013": {
    title:
      "Riding the American West: A Solo Bike Tour from Colorado to the Pacific (2013)",
    description:
      "Field dispatches from a solo, self-supported bicycle tour across the American West in 2013, from the Colorado Rockies through Utah and Nevada to the Northern California coast.",
    image: "https://joetracks.com/images/expeditions/og-american-west-2013.jpg",
    url: "https://joetracks.com/expeditions/american-west-2013",
    canonical: "https://joetracks.com/expeditions/american-west-2013",
    type: "article",
  },
  // ── Portfolio section: reachable by direct URL, kept out of search ─────
  "/portfolio": {
    title: "Portfolio | Joe Napolitan",
    description:
      "Selected work across software development, outdoor leadership, program management, marketing, and writing.",
    image: "https://joetracks.com/images/og-image.png",
    url: "https://joetracks.com/portfolio",
    canonical: "https://joetracks.com/portfolio",
    type: "website",
    robots: "noindex,follow",
  },
  "/marketing": {
    title: "Marketing & SEO Work | Joe Napolitan",
    description:
      "Content marketing and SEO for an outdoor nonprofit: long-form guides, search strategy, and sustained organic growth.",
    image: "https://joetracks.com/images/og-image.png",
    url: "https://joetracks.com/marketing",
    canonical: "https://joetracks.com/marketing",
    type: "website",
    robots: "noindex,follow",
  },
  "/writing": {
    title: "Writing Portfolio | Joe Napolitan",
    description:
      "Grant proposals, outdoor guides, technical documentation, and reporting. Writing that makes information useful and easy to act on.",
    image: "https://joetracks.com/images/og-image.png",
    url: "https://joetracks.com/writing",
    canonical: "https://joetracks.com/writing",
    type: "website",
    robots: "noindex,follow",
  },
  "/programmanagement": {
    title: "Program Management & Development | Joe Napolitan",
    description:
      "Designing, funding, and running outdoor programs end to end, from strategy and partnerships to logistics, training, and measurement.",
    image: "https://joetracks.com/images/og-image.png",
    url: "https://joetracks.com/programmanagement",
    canonical: "https://joetracks.com/programmanagement",
    type: "website",
    robots: "noindex,follow",
  },
  "/outdoorleadership": {
    title: "Outdoor Leadership & Guiding | Joe Napolitan",
    description:
      "Fifteen years leading and educating people in wild places: ski patrol, avalanche work, wilderness guiding, and outdoor program design.",
    image: "https://joetracks.com/images/og-image.png",
    url: "https://joetracks.com/outdoorleadership",
    canonical: "https://joetracks.com/outdoorleadership",
    type: "website",
    robots: "noindex,follow",
  },
  "/softwaretechsupport": {
    title: "Software & Tech Support | Joe Napolitan",
    description:
      "Full-stack tools, community apps, and portfolio websites, built with a focus on polished UX and reliable backend systems.",
    image: "https://joetracks.com/images/og-image.png",
    url: "https://joetracks.com/softwaretechsupport",
    canonical: "https://joetracks.com/softwaretechsupport",
    type: "website",
    robots: "noindex,follow",
  },
  "/origin-expeditions": {
    title: "Origin Expeditions (2018–2021) | JoeTracks",
    description:
      "Origin Expeditions was a nonprofit wilderness education program focused on self-discovery, leadership, and land stewardship for youth. This page preserves its story and remaining resources.",
    image: "https://joetracks.com/images/north-manitou/manitou-header.webp",
    url: "https://joetracks.com/origin-expeditions",
    canonical: "https://joetracks.com/origin-expeditions",
    type: "website",
    robots: "noindex,follow",
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

  return (
    new HTMLRewriter()
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
      // Robots — only when the route asks for something other than the default
      .on('meta[name="robots"]', {
        element(el) {
          if (meta.robots) {
            el.setAttribute("content", meta.robots);
          }
        },
      })
      // Canonical. Must match the route, not the site root
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
      .transform(response)
  );
}

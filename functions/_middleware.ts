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
}

const ROUTES: Record<string, RouteMeta> = {
  "/boardman-river-keystone-rapids": {
    title: "Paddling the Keystone Rapids — A Boardman River Guide | JoeTracks",
    description:
      "A beginner's field guide to paddling the Keystone Rapids stretch of the Boardman River in Traverse City, Michigan — put-in and take-out info, rapids breakdown, bike shuttle route, and what to expect on the water.",
    image: "https://joetracks.com/images/keystone-rapids/keystone-rapids-card.webp",
    url: "https://joetracks.com/boardman-river-keystone-rapids",
    type: "article",
  },
  "/ski-sleeping-bear-dunes": {
    title: "Skiing Sleeping Bear Dunes: Shauger Hill Field Guide | JoeTracks",
    description:
      "Field-tested guide to skiing Shauger Hill at Sleeping Bear Dunes National Lakeshore — conditions assessment, gear list, approach beta, and a full trip report.",
    image: "https://joetracks.com/images/ski-sleeping-bear/ski-sleeping-bear-banner.png",
    url: "https://joetracks.com/ski-sleeping-bear-dunes",
    type: "article",
  },
};

export async function onRequest(context: {
  request: Request;
  next: () => Promise<Response>;
}): Promise<Response> {
  const { request, next } = context;

  const url = new URL(request.url);
  const meta = ROUTES[url.pathname];

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

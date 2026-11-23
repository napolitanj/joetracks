#!/usr/bin/env node
/**
 * Warns when a public route has no entry in functions/_middleware.ts.
 *
 * Social crawlers (Facebook, LinkedIn, Slack, iMessage) do not run JavaScript,
 * so a route missing from that map serves the generic index.html head: the
 * homepage title, the homepage image, and a canonical pointing at the site
 * root. react-helmet fixes it in the browser, which those crawlers never reach.
 *
 * Non-blocking by design. It prints and exits 0 so a deploy is never stopped.
 */
import { readFileSync } from "node:fs";

// Routes with nothing to share: editors, auth, and internal utilities.
const PRIVATE = new Set([
  "/editor", "/editor/:slug", "/portfolioeditor", "/portfolioeditor/:id",
  "/login", "/access-denied", "/coord-tool", "/portfolio/:category",
  "/guides/:slug", "/blog/:slug",
]);

// Rendered from data files; the template cannot carry one entry per item, so
// each published slug needs its own entry in the map.
const TEMPLATES = new Set(["/trails/:slug", "/expeditions/:slug"]);

const app = readFileSync("src/App.tsx", "utf8");
const mw = readFileSync("functions/_middleware.ts", "utf8");

// Match whole <Route .../> elements so multi-line ones are caught, then drop
// the pure redirects: <Navigate> renders no page, so it has nothing to share.
const routes = [...app.matchAll(/<Route\b[\s\S]*?\/>/g)]
  .map((m) => m[0])
  .filter((el) => !el.includes("<Navigate"))
  .map((el) => (el.match(/path="([^"]+)"/) || [])[1])
  .filter(Boolean);
const covered = new Set([...mw.matchAll(/^ {2}"(\/[^"]*)":/gm)].map((m) => m[1]));

const missing = routes.filter(
  (r) => !PRIVATE.has(r) && !TEMPLATES.has(r) && r !== "/" && !r.startsWith("*") && !covered.has(r),
);

// Every slug behind a template route needs its own map entry.
const slugMissing = [];
for (const [dir, prefix] of [["expeditions", "/expeditions"], ["guides", "/trails"]]) {
  let index;
  try {
    index = readFileSync(`src/data/${dir}/index.ts`, "utf8");
  } catch {
    continue;
  }
  for (const m of index.matchAll(/from\s+"\.\/([a-z0-9-]+)"/g)) {
    const url = `${prefix}/${m[1]}`;
    if (!covered.has(url)) slugMissing.push(url);
  }
}

const all = [...missing, ...slugMissing];
if (all.length) {
  console.warn("\n  ⚠  Routes with no entry in functions/_middleware.ts:");
  for (const r of all) console.warn(`       ${r}`);
  console.warn(
    "     These serve the homepage title, image and canonical to any crawler\n" +
      "     that does not run JavaScript. Add them to the ROUTES map.\n",
  );
} else {
  console.log("  ✓ every public route has edge metadata");
}

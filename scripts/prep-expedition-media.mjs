#!/usr/bin/env node
/**
 * Prepare the WordPress media export for the expedition archive pages.
 *
 * Reads the photo filenames each chapter references straight out of the
 * expedition data files, finds each one anywhere under the source directory,
 * and writes two webp sizes into public/images/expeditions/<slug>/:
 *
 *   <name>.webp        1600w, quality 80  (lightbox)
 *   <name>-thumb.webp   480w, quality 72  (gallery grid)
 *
 * Usage:
 *   npm i -D sharp
 *   node scripts/prep-expedition-media.mjs ~/Downloads/wordpress-media
 *
 * Point it at the unzipped media folder. Nested folders are fine; files are
 * matched by basename, so the export's uploads/YYYY/MM/ layout works as-is.
 * Safe to re-run: existing outputs are skipped unless you pass --force.
 */

import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const FULL_WIDTH = 1600;
const THUMB_WIDTH = 480;
const FULL_QUALITY = 80;
const THUMB_QUALITY = 72;

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const DATA_DIR = path.join(REPO_ROOT, "src/data/expeditions");
const PUBLIC_DIR = path.join(REPO_ROOT, "public/images/expeditions");

const args = process.argv.slice(2);
const force = args.includes("--force");
const sourceDir = args.find((a) => !a.startsWith("--"));

if (!sourceDir) {
  console.error("Usage: node scripts/prep-expedition-media.mjs <media-dir> [--force]");
  process.exit(1);
}

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.error("sharp is not installed. Run: npm i -D sharp");
  process.exit(1);
}

/** Every file under dir, keyed by lowercased basename. First match wins. */
async function indexSourceFiles(dir) {
  const index = new Map();
  const skipped = [];

  async function walk(current) {
    let entries;
    try {
      entries = await readdir(current, { withFileTypes: true });
    } catch (err) {
      skipped.push(`${current}: ${err.message}`);
      return;
    }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else if (entry.isFile()) {
        const key = entry.name.toLowerCase();
        if (!index.has(key)) index.set(key, full);
      }
    }
  }

  await walk(dir);
  return { index, skipped };
}

/** Pull slug + referenced filenames out of each expedition data file. */
async function readExpeditions() {
  const files = (await readdir(DATA_DIR)).filter(
    (f) => f.endsWith(".ts") && f !== "index.ts",
  );

  const expeditions = [];
  for (const file of files) {
    const text = await import("node:fs/promises").then((fs) =>
      fs.readFile(path.join(DATA_DIR, file), "utf8"),
    );
    const start = text.indexOf("= ");
    const end = text.lastIndexOf(";");
    if (start === -1 || end === -1) {
      console.warn(`skipping ${file}: could not locate the data object`);
      continue;
    }
    const data = JSON.parse(text.slice(start + 2, end));
    const wanted = [];
    for (const chapter of data.chapters) {
      for (const image of chapter.images) {
        wanted.push({
          source: image.source,
          stem: path.basename(image.src, ".webp"),
          chapter: chapter.slug,
        });
      }
    }
    expeditions.push({ slug: data.slug, wanted });
  }
  return expeditions;
}

async function convert(sourcePath, outPath, width, quality) {
  await sharp(sourcePath)
    .rotate() // honour EXIF orientation; 2013 phone photos rely on it
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(outPath);
  const { size } = await stat(outPath);
  return size;
}

const { index, skipped } = await indexSourceFiles(sourceDir);
console.log(`indexed ${index.size} files under ${sourceDir}\n`);
for (const note of skipped) console.warn(`  could not read ${note}`);

const expeditions = await readExpeditions();
const missing = [];
let converted = 0;
let reused = 0;
let bytes = 0;

for (const expedition of expeditions) {
  const outDir = path.join(PUBLIC_DIR, expedition.slug);
  await mkdir(outDir, { recursive: true });
  console.log(`${expedition.slug}: ${expedition.wanted.length} photos referenced`);

  for (const want of expedition.wanted) {
    const sourcePath = index.get(String(want.source).toLowerCase());
    if (!sourcePath) {
      missing.push({ ...want, expedition: expedition.slug });
      continue;
    }

    const fullOut = path.join(outDir, `${want.stem}.webp`);
    const thumbOut = path.join(outDir, `${want.stem}-thumb.webp`);

    if (!force && existsSync(fullOut) && existsSync(thumbOut)) {
      reused += 1;
      continue;
    }

    try {
      bytes += await convert(sourcePath, fullOut, FULL_WIDTH, FULL_QUALITY);
      bytes += await convert(sourcePath, thumbOut, THUMB_WIDTH, THUMB_QUALITY);
      converted += 1;
    } catch (err) {
      missing.push({ ...want, expedition: expedition.slug, error: err.message });
    }
  }
}

console.log("");
console.log(`converted ${converted} photos (${(bytes / 1024 / 1024).toFixed(1)} MB written)`);
if (reused) console.log(`skipped ${reused} already converted (use --force to redo)`);

if (missing.length) {
  console.log(`\n${missing.length} referenced photos were not found in the source directory:`);
  const byExpedition = new Map();
  for (const m of missing) {
    const list = byExpedition.get(m.expedition) ?? [];
    list.push(m);
    byExpedition.set(m.expedition, list);
  }
  for (const [slug, list] of byExpedition) {
    console.log(`\n  ${slug} (${list.length}):`);
    for (const m of list.slice(0, 25)) {
      console.log(`    ${m.chapter}  ${m.source}${m.error ? `  (${m.error})` : ""}`);
    }
    if (list.length > 25) console.log(`    ...and ${list.length - 25} more`);
  }
  console.log(
    "\nAny photo listed here needs its <img> entry removed from the chapter in" +
      "\nsrc/data/expeditions/, or the file located and added to the source directory.",
  );
}

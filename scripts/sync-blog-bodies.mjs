#!/usr/bin/env node
// Fetches each blog post body from the live site and caches it to lib/blogBodies.json.
// Run with: npm run sync-blogs

import { writeFileSync } from "node:fs";
import * as cheerio from "cheerio";

const slugs = [
  "comparative-advantage-of-wire-wound-technology-over-film-technology-in-fusible-resistor-applications",
  "comparative-performance-between-thick-film-and-electron-beam-welded-metal-band-resistor-technologies-when-used-in-automotive-applications",
  "types-of-fusible-wire-wound-resistors-and-ordering-information-required",
  "why-are-capacitor-discharge-resistors-now-mandated-as-essential-safety-device",
  "techno-economic-comparison-between-silicon-cement-coated-wire-wound-resistors-and-ceramic-encased-resistors-2",
  "comparison-between-metal-plate-ceramic-type-hvac-motor-control-resistors",
  "application-design-notes-on-selection-of-wirewound-resistor",
  "use-of-current-sense-resistors-for-battery-management-in-automotive-applications",
  "low-ohmic-current-sense-resistors-for-automotive-applications",
];

// Rewrite internal links to this clone's local routes
function cleanHtml(html) {
  return html
    .replace(/https?:\/\/(?:www\.)?htr-india\.com/g, "")
    .replace(/\/products\/([^"'\s]+)/g, "/product-category/$1")
    .replace(/\sstyle="[^"]*"/g, "")
    .replace(/<p>\s*&nbsp;\s*<\/p>/g, "")
    .trim();
}

async function fetchBody(slug) {
  const url = `https://www.htr-india.com/${slug}/`;
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (sync-script)" } });
  if (!res.ok) throw new Error(`${slug}: ${res.status}`);
  const html = await res.text();
  const $ = cheerio.load(html);
  // Pick the elementor widget container with the most body text — this is the article body
  let best = null;
  let bestLen = 0;
  $(".elementor-widget-text-editor > .elementor-widget-container, .elementor-widget-theme-post-content > .elementor-widget-container").each((_, el) => {
    const len = $(el).text().trim().length;
    // Exclude the small Convomax footer widget
    if (len > bestLen && !$(el).text().includes("Website Design & Marketing Partner")) {
      bestLen = len;
      best = el;
    }
  });
  if (!best) return "";
  return cleanHtml($(best).html() ?? "");
}

const out = {};
for (const slug of slugs) {
  try {
    const body = await fetchBody(slug);
    out[slug] = body;
    console.log(`✓ ${slug}  (${body.length} chars)`);
  } catch (e) {
    console.error(`✗ ${slug}: ${e.message}`);
    out[slug] = "";
  }
}

writeFileSync("./lib/blogBodies.json", JSON.stringify(out, null, 2), "utf8");
console.log(`\nWrote lib/blogBodies.json  (${Object.keys(out).length} posts)`);

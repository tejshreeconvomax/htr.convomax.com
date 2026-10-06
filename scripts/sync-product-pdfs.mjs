#!/usr/bin/env node
// Discovers each /product/<slug>/ page's "Download Datasheet" PDF URL on the live
// site and writes the slug → absolute URL map to lib/productPdfs.json.
// (No files are downloaded — the Next.js app links out to the live PDFs directly.)
//
// Run with: npm run sync-product-pdfs

import { writeFileSync } from "node:fs";
import * as cheerio from "cheerio";

const slugs = [
  // Electron Beam Welded
  "hbe-size-2726", "hbm-size-1216", "heb-size-8518-8420-6315-6918-6018-5216-7036-5520",
  "hee-size-5930", "hhe-size-3820", "hos-size-4512-4524", "hre-size-4026",
  "hse-size-3920", "hte-size-2512-1206", "hve-size-5515",
  // Aluminium Housed
  "habr", "hah", "hme",
  // Metal Clad
  "hbr",
  // Wire Wound (ceramic encased)
  "frc", "hca", "hcl", "hcp", "hcv-with-bracket", "hcw", "hea", "hmv", "hmw",
  "hsv", "hsva", "hsvau", "hsvf",
  // Silicone Coated
  "frs", "haa", "hfa", "hfo", "hfom", "hfp", "hfw", "hia", "hip", "hir",
  "hta", "rsr", "vhia",
  // Symmetry
  "hsr", "hsrc",
  // Current Sense Ceramic Encased
  "br", "hcal", "heal", "hmvl", "rl",
  // Open Frame
  "hew", "oa", "of", "ofsc", "op", "ow",
  // Surface Mount
  "hcals", "hcals-size-4527-6927", "hias", "hsvas-hsvals", "rls",
  // Automotive / Noise Suppressor
  "hans-2", "hans-c", "hans-f", "hans-s",
  // Load Bank
  "custom-resistive-load-banks-1kw-500kw",
];

async function discoverPdf(slug) {
  const res = await fetch(`https://www.htr-india.com/product/${slug}/`, {
    headers: { "User-Agent": "Mozilla/5.0 (htr-sync)" },
  });
  if (!res.ok) return null;
  const html = await res.text();
  const $ = cheerio.load(html);
  const link = $('a[href$=".pdf"], a[href*=".pdf?"]').first().attr("href");
  if (!link) return null;
  // Normalize to absolute URL
  try {
    return new URL(link, "https://www.htr-india.com/").toString();
  } catch {
    return link;
  }
}

const map = {};
let ok = 0, fail = 0;
for (const slug of slugs) {
  try {
    const url = await discoverPdf(slug);
    if (!url) {
      console.error(`-- ${slug}: no PDF link on product page`);
      fail++;
      continue;
    }
    map[slug] = url;
    console.log(`OK ${slug}  ->  ${url}`);
    ok++;
  } catch (e) {
    console.error(`xx ${slug}: ${e.message}`);
    fail++;
  }
}

writeFileSync("./lib/productPdfs.json", JSON.stringify(map, null, 2), "utf8");
console.log(`\nWrote lib/productPdfs.json  (${Object.keys(map).length} entries)  OK:${ok}  FAIL:${fail}`);

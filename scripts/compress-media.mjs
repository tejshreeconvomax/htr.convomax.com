#!/usr/bin/env node
// Compresses images and PDFs in /public in-place.
// - JPEG/PNG > 100 KB  → sharp (mozjpeg quality 82 / pngquant-style compressionLevel 9)
// - PDFs  → pdf-lib re-serialize with ObjectStreams + remove ignored keys
//
// Run: npm run compress-media
// Note: for deeper PDF image downsampling, install Ghostscript and use
//       gs -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook -o out.pdf in.pdf

import { readdirSync, statSync, readFileSync, writeFileSync, renameSync, unlinkSync } from "node:fs";
import { join, extname, basename } from "node:path";
import sharp from "sharp";
import { PDFDocument } from "pdf-lib";

const ROOT = "./public";
const MIN_IMAGE_KB = 100; // leave small images alone
const MIN_PDF_KB = 150;
const DRY_RUN = process.argv.includes("--dry-run");

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) yield* walk(p);
    else yield { path: p, size: st.size };
  }
}

function fmt(bytes) { return (bytes / 1024).toFixed(0) + "KB"; }

async function compressImage(file) {
  const ext = extname(file.path).toLowerCase();
  const buf = readFileSync(file.path);
  let out;
  if (ext === ".jpg" || ext === ".jpeg") {
    out = await sharp(buf).jpeg({ quality: 82, mozjpeg: true, progressive: true }).toBuffer();
  } else if (ext === ".png") {
    // sharp's PNG palette+compressionLevel often beats stock
    out = await sharp(buf).png({ compressionLevel: 9, palette: true, quality: 82 }).toBuffer();
  } else if (ext === ".webp") {
    out = await sharp(buf).webp({ quality: 82 }).toBuffer();
  } else return null;

  if (out.length < buf.length * 0.95) {
    if (!DRY_RUN) writeFileSync(file.path, out);
    return { before: buf.length, after: out.length };
  }
  return { before: buf.length, after: buf.length, noop: true };
}

async function compressPdf(file) {
  const buf = readFileSync(file.path);
  try {
    const pdf = await PDFDocument.load(buf, { ignoreEncryption: true, updateMetadata: false });
    // Strip some bloat
    pdf.setTitle("");
    pdf.setAuthor("");
    pdf.setSubject("");
    pdf.setKeywords([]);
    pdf.setProducer("");
    pdf.setCreator("");
    const out = await pdf.save({ useObjectStreams: true, addDefaultPage: false });
    if (out.length < buf.length * 0.95) {
      if (!DRY_RUN) writeFileSync(file.path, out);
      return { before: buf.length, after: out.length };
    }
    return { before: buf.length, after: buf.length, noop: true };
  } catch (e) {
    return { before: buf.length, after: buf.length, err: e.message };
  }
}

const results = { img: [], pdf: [] };

for (const file of walk(ROOT)) {
  const ext = extname(file.path).toLowerCase();
  const kb = file.size / 1024;
  try {
    if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext) && kb >= MIN_IMAGE_KB) {
      const r = await compressImage(file);
      if (r) results.img.push({ path: file.path, ...r });
    } else if (ext === ".pdf" && kb >= MIN_PDF_KB) {
      const r = await compressPdf(file);
      if (r) results.pdf.push({ path: file.path, ...r });
    }
  } catch (e) {
    console.error(`! ${file.path}: ${e.message}`);
  }
}

function report(label, items) {
  if (!items.length) return;
  console.log(`\n=== ${label} ===`);
  let totalBefore = 0, totalAfter = 0;
  for (const r of items.sort((a, b) => (b.before - b.after) - (a.before - a.after))) {
    totalBefore += r.before;
    totalAfter += r.after;
    const name = basename(r.path);
    if (r.noop) console.log(`  = ${name.padEnd(55)} ${fmt(r.before).padStart(7)}  (no gain, skipped)`);
    else if (r.err) console.log(`  ! ${name.padEnd(55)} ${fmt(r.before).padStart(7)}  ERR ${r.err}`);
    else console.log(`  ✓ ${name.padEnd(55)} ${fmt(r.before).padStart(7)} → ${fmt(r.after).padStart(7)}  (-${(100 - (r.after / r.before) * 100).toFixed(0)}%)`);
  }
  console.log(`  TOTAL: ${fmt(totalBefore)} → ${fmt(totalAfter)}  (saved ${fmt(totalBefore - totalAfter)})`);
}

report("Images", results.img);
report("PDFs", results.pdf);
console.log(DRY_RUN ? "\n(dry-run — no files written)" : "\nDone.");

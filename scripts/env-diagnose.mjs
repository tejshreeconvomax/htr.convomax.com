// Parse .env.local two ways and compare — mimics my smoke test vs Next.js's dotenv.
import { readFileSync } from "node:fs";

// --- Way A: my simple regex (what the smoke test uses, which WORKS) ---
const envText = readFileSync(".env.local", "utf8");
const simple = {};
for (const line of envText.split(/\r?\n/)) {
  if (line.trim().startsWith("#")) continue;
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
  if (m) simple[m[1]] = m[2].replace(/^["']|["']$/g, "");
}

// --- Way B: dotenv (what Next.js uses) ---
let dotenvParsed = {};
try {
  const dotenv = await import("dotenv");
  dotenvParsed = dotenv.parse(envText);
} catch {
  console.log("dotenv not installed — install with: npm i dotenv (dev-only, for this diag)");
}

function describe(label, obj) {
  for (const k of ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM"]) {
    const v = obj[k] ?? "";
    const safe = k === "SMTP_PASS" || k === "SMTP_USER"
      ? `(len=${v.length}) ${v.slice(0, 2)}***${v.slice(-3)}`
      : v;
    console.log(`  ${k.padEnd(12)} ${safe}`);
  }
}

console.log("=== A) Simple regex (smoke-test parser — WORKS) ===");
describe("A", simple);
console.log("\n=== B) dotenv parser (what Next.js uses — FAILS with 535) ===");
describe("B", dotenvParsed);

console.log("\n=== Diff ===");
for (const k of ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "SMTP_FROM"]) {
  if (simple[k] !== dotenvParsed[k]) {
    console.log(`  ! ${k}  A len=${(simple[k]||'').length}  B len=${(dotenvParsed[k]||'').length}  <-- MISMATCH`);
  } else {
    console.log(`  = ${k}  match`);
  }
}

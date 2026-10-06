// Byte-by-byte comparison: what my regex vs dotenv vs @next/env returns for SMTP_PASS.
import { readFileSync } from "node:fs";
import * as dotenv from "dotenv";

const envText = readFileSync(".env.local", "utf8");

// --- A: my regex parser (matches smoke-test behavior) ---
let regexPass = "";
for (const line of envText.split(/\r?\n/)) {
  if (line.trim().startsWith("#")) continue;
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
  if (m && m[1] === "SMTP_PASS") regexPass = m[2].replace(/^["']|["']$/g, "");
}

// --- B: dotenv (what Next.js uses) ---
const dotenvPass = dotenv.parse(envText).SMTP_PASS || "";

// --- C: raw line from the file (the SMTP_PASS=... line in full) ---
const rawLine = envText.split(/\r?\n/).find((l) => l.trim().startsWith("SMTP_PASS=")) || "";

function dump(label, s) {
  const bytes = [...s].map((c) => c.charCodeAt(0));
  const hex = bytes.map((b) => b.toString(16).padStart(2, "0")).join(" ");
  console.log(`${label}  len=${s.length}`);
  console.log(`  codepoints: [${bytes.join(",")}]`);
  console.log(`  hex:        ${hex}`);
}

console.log("=== Raw file line ===");
console.log(JSON.stringify(rawLine));
console.log(`  byte length: ${rawLine.length}`);
console.log("");

console.log("=== A) regex parser (smoke test — WORKS) ===");
dump("  pass", regexPass);
console.log("");

console.log("=== B) dotenv parser (Next.js — FAILS 535) ===");
dump("  pass", dotenvPass);
console.log("");

console.log("=== Diff ===");
if (regexPass === dotenvPass) {
  console.log("  STRINGS ARE IDENTICAL — issue is NOT in parsing");
  console.log("  → Next.js may be caching an older build (delete .next/)");
  console.log("  → Or process.env is being mutated somewhere");
} else {
  console.log("  STRINGS DIFFER:");
  const max = Math.max(regexPass.length, dotenvPass.length);
  for (let i = 0; i < max; i++) {
    const a = regexPass[i] || "(none)";
    const b = dotenvPass[i] || "(none)";
    const ac = a === "(none)" ? "-" : a.charCodeAt(0);
    const bc = b === "(none)" ? "-" : b.charCodeAt(0);
    const marker = a === b ? "  " : "<-- MISMATCH";
    console.log(`  [${i.toString().padStart(2,"0")}] regex=${JSON.stringify(a)} (${ac})  dotenv=${JSON.stringify(b)} (${bc})  ${marker}`);
  }
}

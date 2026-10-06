// Loads .env.local via dotenv (same way Next.js does), then calls the exact
// same sendEnquiryEmail function the API route uses. Bypasses Next.js runtime.

import * as dotenv from "dotenv";
import nodemailer from "nodemailer";
import { readFileSync } from "node:fs";

// Mirror Next.js's env loading (dotenv.parse + assign to process.env)
const parsed = dotenv.parse(readFileSync(".env.local", "utf8"));
for (const [k, v] of Object.entries(parsed)) {
  if (process.env[k] === undefined) process.env[k] = v;
}

console.log("[check] SMTP_PASS length from process.env:", (process.env.SMTP_PASS || "").length);
console.log("[check] SMTP_PASS first/last chars:", JSON.stringify((process.env.SMTP_PASS || "").slice(0, 2)), JSON.stringify((process.env.SMTP_PASS || "").slice(-3)));

// Build a transporter EXACTLY like email.ts does
const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT || 587);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

const t = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
  auth: { user, pass },
});

console.log("\n[verify] trying auth with dotenv-parsed password...");
try {
  await t.verify();
  console.log("  ✓ auth OK — the password dotenv parses works fine");
  const info = await t.sendMail({
    from: `"HTR Test (via email.ts clone)" <${process.env.SMTP_FROM || user}>`,
    to: "tejshree@convomax.com",
    subject: "[call-email-module test] " + new Date().toISOString(),
    text: "If you got this, the dotenv-parsed password works. Issue is Next.js-specific.",
  });
  console.log("  ✓ sent. messageId:", info.messageId);
} catch (e) {
  console.error("  ✗ FAILED:", e.message);
  console.error("  code:", e.code, "responseCode:", e.responseCode);
  console.error("\n  → The dotenv-parsed password is REJECTED by SMTP2GO.");
  console.error("  → Even though it byte-matches my regex parser's result.");
  console.error("  → Something about the string differs when nodemailer passes it over the wire.");
}

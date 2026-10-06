// Load .env.local manually (same way Next.js does for the API route)
import { readFileSync } from "node:fs";
import nodemailer from "nodemailer";

const envText = readFileSync(".env.local", "utf8");
for (const line of envText.split(/\r?\n/)) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
  if (m && !line.trim().startsWith("#")) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
}

const cfg = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  user: process.env.SMTP_USER,
  from: process.env.SMTP_FROM || process.env.SMTP_USER,
};
console.log("Config loaded:", { ...cfg, user: cfg.user ? "***" + cfg.user.slice(-15) : "(missing)" });

const t = nodemailer.createTransport({
  host: cfg.host,
  port: cfg.port,
  secure: cfg.port === 465,
  auth: { user: cfg.user, pass: process.env.SMTP_PASS },
  logger: false,
  debug: false,
});

console.log("\n[1/2] Verifying SMTP connection...");
try {
  await t.verify();
  console.log("  OK — connection + auth succeeded");
} catch (e) {
  console.error("  FAILED:", e.message);
  console.error("  Code:", e.code);
  console.error("  Response:", e.response);
  process.exit(1);
}

console.log("\n[2/2] Sending test email...");
try {
  const info = await t.sendMail({
    from: `"HTR Test" <${cfg.from}>`,
    to: "tejshree@convomax.com",
    subject: "[SMTP smoke test] " + new Date().toISOString(),
    text: "If you see this, SMTP works end-to-end.",
  });
  console.log("  OK — sent. Message ID:", info.messageId);
  console.log("  Accepted:", info.accepted);
  console.log("  Rejected:", info.rejected);
} catch (e) {
  console.error("  FAILED:", e.message);
  console.error("  Code:", e.code);
  console.error("  Response:", e.response);
  process.exit(1);
}

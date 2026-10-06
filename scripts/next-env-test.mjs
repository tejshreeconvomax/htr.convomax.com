// Load env the EXACT way Next.js does, via @next/env.
import pkg from "@next/env";
const { loadEnvConfig } = pkg;
import nodemailer from "nodemailer";

const { combinedEnv } = loadEnvConfig(process.cwd(), true /* dev */);

console.log("[@next/env] SMTP_PASS length:", (combinedEnv.SMTP_PASS || "").length);
console.log("[@next/env] SMTP_PASS first/last:",
  JSON.stringify((combinedEnv.SMTP_PASS || "").slice(0, 2)),
  JSON.stringify((combinedEnv.SMTP_PASS || "").slice(-3)));
console.log("[@next/env] SMTP_PASS codepoints:",
  [...(combinedEnv.SMTP_PASS || "")].map(c => c.charCodeAt(0)).join(","));

// Try auth with THIS value
const t = nodemailer.createTransport({
  host: combinedEnv.SMTP_HOST,
  port: Number(combinedEnv.SMTP_PORT),
  secure: Number(combinedEnv.SMTP_PORT) === 465,
  auth: { user: combinedEnv.SMTP_USER, pass: combinedEnv.SMTP_PASS },
});
try {
  await t.verify();
  console.log("\n[verify] auth OK — Next.js env loading is NOT the issue");
} catch (e) {
  console.error("\n[verify] FAILED:", e.message);
  console.error("Culprit confirmed: @next/env mangles the password via dotenv-expand on $$.");
}

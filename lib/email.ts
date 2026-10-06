// SMTP email helper for enquiry/contact form submissions.
// Credentials come from .env.local — see .env.example for the required keys.

import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Next.js loads .env files through @next/env, which runs dotenv-expand — that
// mangles passwords containing `$` / `$$` (treated as variable references).
// To be bulletproof regardless of special characters, we read the raw .env file
// ourselves with NO expansion and use those values first. In production (no
// .env file on disk) we fall back to process.env, which the host sets directly
// and is not subject to dotenv-expand.
let rawEnvCache: Record<string, string> | null = null;
function readRawEnv(): Record<string, string> {
  if (rawEnvCache) return rawEnvCache;
  const out: Record<string, string> = {};
  for (const file of [".env.local", ".env"]) {
    try {
      const text = readFileSync(join(process.cwd(), file), "utf8");
      for (const line of text.split(/\r?\n/)) {
        if (!line || line.trim().startsWith("#")) continue;
        const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
        if (!m) continue;
        let val = m[2];
        // Strip a single matching pair of surrounding quotes; keep contents literal.
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (!(m[1] in out)) out[m[1]] = val; // first file wins (.env.local over .env)
      }
    } catch {
      // file not present — ignore
    }
  }
  rawEnvCache = out;
  return out;
}

function env(key: string): string | undefined {
  // Prefer the raw file value (dev); fall back to process.env (production/host).
  const raw = readRawEnv()[key];
  return raw !== undefined && raw !== "" ? raw : process.env[key];
}

// Hard-coded recipient list requested by the project owner.
export const ENQUIRY_RECIPIENTS = [
  
  "tejshree@convomax.com",
];

export type EnquiryPayload = {
  name: string;
  phone: string;
  email: string;
  country?: string;
  message: string;
  source?: string; // "Enquire Now modal" | "Contact Us form"
  pageUrl?: string;
};

let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (cachedTransporter) return cachedTransporter;
  const host = env("SMTP_HOST");
  const port = Number(env("SMTP_PORT") || 587);
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");
  if (!host || !user || !pass) {
    throw new Error(
      "SMTP credentials missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env.local",
    );
  }
  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465 (SSL), false for 587/25 (STARTTLS)
    auth: { user, pass },
  });
  return cachedTransporter;
}

// Minimal HTML escape for user-supplied strings before injecting into the template.
function esc(v: string | undefined | null): string {
  if (v == null) return "";
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderHtml(p: EnquiryPayload, receivedAt: Date): string {
  const rows: Array<[string, string]> = [
    ["Name", p.name],
    ["Phone", p.phone],
    ["Email", p.email],
    ["Country", p.country || "—"],
    ["Message", p.message],
    ["Submitted via", p.source || "Website form"],
    ["Page URL", p.pageUrl || "—"],
    ["Received at", receivedAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour12: true }) + " IST"],
  ];

  const rowHtml = rows
    .map(
      ([k, v], i) => `
        <tr>
          <td bgcolor="#f4f7fc" valign="top" style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:bold;color:#4b7fce;width:150px;letter-spacing:0.3px;text-transform:uppercase;">${esc(k)}</td>
          <td bgcolor="#ffffff" valign="top" style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1f2937;line-height:1.55;${i === 4 ? "white-space:pre-wrap;" : ""}">${esc(v)}</td>
        </tr>`,
    )
    .join("");

  // Logo is embedded as a CID attachment (see sendEnquiryEmail) so it always
  // displays even when the client blocks remote images.
  const logoSrc = "cid:htrlogo";

  return `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>New Enquiry — HTR</title>
  </head>
  <body style="margin:0;padding:0;background-color:#eef2f7;">
    <!-- Preheader (hidden preview text in inbox) -->
    <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#eef2f7;">
      New enquiry from ${esc(p.name)} — ${esc(p.email)}${p.country ? " (" + esc(p.country) + ")" : ""}
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#eef2f7" style="background-color:#eef2f7;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;">

            <!-- Header with logo (solid blue, bgcolor attribute for client support) -->
            <tr>
              <td bgcolor="#4b7fce" style="background-color:#4b7fce;padding:24px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td valign="middle" width="64" style="width:64px;">
                      <img src="${logoSrc}" alt="HTR" width="56" height="56" style="display:block;width:56px;height:56px;border:0;outline:none;border-radius:50%;background-color:#ffffff;" />
                    </td>
                    <td valign="middle" style="padding-left:16px;">
                      <div style="font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:bold;color:#ffffff;line-height:1.2;">
                        Hi Tech Resistors Pvt. Ltd.
                      </div>
                      <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:1px;color:#dbe6fa;margin-top:4px;">
                        AN IATF 16949:2016 CERTIFIED COMPANY
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Banner -->
            <tr>
              <td style="padding:24px 28px 8px 28px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td bgcolor="#eef4fc" style="background-color:#eef4fc;padding:5px 12px;border-radius:4px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:0.6px;color:#4b7fce;text-transform:uppercase;">
                      New Website Enquiry
                    </td>
                  </tr>
                </table>
                <h1 style="font-family:Georgia,'Times New Roman',serif;font-size:22px;color:#1f2937;margin:14px 0 6px;font-weight:bold;">
                  You have a new lead
                </h1>
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;color:#6b7280;font-size:14px;line-height:1.55;">
                  <strong style="color:#1f2937;">${esc(p.name)}</strong> just submitted the ${esc(p.source || "website form")}. Details below.
                </p>
              </td>
            </tr>

            <!-- Data table -->
            <tr>
              <td style="padding:16px 28px 20px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
                  ${rowHtml}
                </table>
              </td>
            </tr>

            <!-- Quick reply button (bulletproof: table + bgcolor) -->
            <tr>
              <td align="center" style="padding:0 28px 26px 28px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td bgcolor="#4b7fce" style="background-color:#4b7fce;border-radius:6px;">
                      <a href="mailto:${esc(p.email)}?subject=${encodeURIComponent("Re: Your enquiry to HTR")}"
                         style="display:inline-block;font-family:Arial,Helvetica,sans-serif;color:#ffffff;text-decoration:none;font-weight:bold;font-size:14px;padding:12px 28px;">
                        Reply to ${esc(p.name.split(" ")[0] || "Lead")}
                      </a>
                    </td>
                  </tr>
                </table>
                <div style="margin-top:10px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#9ca3af;">
                  Or just hit Reply — reply-to is set to ${esc(p.email)}.
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td bgcolor="#141414" align="center" style="background-color:#141414;padding:22px 28px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#d1d5db;">
                <div style="color:#ffffff;font-family:Georgia,'Times New Roman',serif;font-weight:bold;font-size:14px;margin-bottom:6px;">
                  Hi Tech Resistors Pvt. Ltd.
                </div>
                <div style="color:#d1d5db;">Buty Compound, Mount Road Extension, Nagpur – 440001, Maharashtra, India</div>
                <div style="margin-top:6px;">
                  <a href="tel:+917122533269" style="color:#9ec1f0;text-decoration:none;">+91-712-2533269</a>
                  &nbsp;·&nbsp;
                  <a href="mailto:info@htr-india.com" style="color:#9ec1f0;text-decoration:none;">info@htr-india.com</a>
                  &nbsp;·&nbsp;
                  <a href="https://www.htr-india.com" style="color:#9ec1f0;text-decoration:none;">htr-india.com</a>
                </div>
                <div style="margin-top:14px;font-size:11px;color:#8a8f98;">
                  Automated notification from the HTR website. Reply to the sender above to respond.
                </div>
                <div style="margin-top:12px;font-size:11px;color:#8a8f98;">
                  Powered by <a href="https://www.convomax.com" style="color:#9ec1f0;text-decoration:none;font-weight:bold;">Convomax</a>
                </div>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function renderText(p: EnquiryPayload, receivedAt: Date): string {
  return [
    "NEW WEBSITE ENQUIRY — Hi Tech Resistors",
    "",
    `Name:     ${p.name}`,
    `Phone:    ${p.phone}`,
    `Email:    ${p.email}`,
    `Country:  ${p.country || "—"}`,
    "",
    "Message:",
    p.message,
    "",
    "---",
    `Submitted via: ${p.source || "Website form"}`,
    `Page URL:      ${p.pageUrl || "—"}`,
    `Received at:   ${receivedAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour12: true })} IST`,
  ].join("\n");
}

export async function sendEnquiryEmail(payload: EnquiryPayload) {
  const transporter = getTransporter();
  const receivedAt = new Date();
  const fromName = env("SMTP_FROM_NAME") || "HTR Website";
  const fromAddress = env("SMTP_FROM") || env("SMTP_USER")!;

  const subject = `[HTR Enquiry] ${payload.name}${payload.country ? ` · ${payload.country}` : ""}`;

  // Embed the logo as an inline CID attachment so it shows even when the
  // client blocks remote images. Falls back silently if the file is missing.
  const attachments: Array<{ filename: string; path: string; cid: string }> = [];
  try {
    const logoPath = join(process.cwd(), "public", "images", "logo.png");
    readFileSync(logoPath); // verify it exists/readable
    attachments.push({ filename: "htr-logo.png", path: logoPath, cid: "htrlogo" });
  } catch {
    // no logo file — template's alt text ("HTR") will show instead
  }

  const info = await transporter.sendMail({
    from: `"${fromName}" <${fromAddress}>`,
    to: ENQUIRY_RECIPIENTS.join(", "),
    replyTo: `"${payload.name}" <${payload.email}>`,
    subject,
    text: renderText(payload, receivedAt),
    html: renderHtml(payload, receivedAt),
    attachments,
  });
  return info;
}

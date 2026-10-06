import { NextResponse } from "next/server";
import { sendEnquiryEmail, type EnquiryPayload } from "@/lib/email";

// Rough in-memory per-IP rate limit: 5 submissions / 10 min / IP.
// Fine for a single-instance deployment; swap for Redis if you scale horizontally.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const log = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (log.length >= MAX_PER_WINDOW) {
    hits.set(ip, log);
    return true;
  }
  log.push(now);
  hits.set(ip, log);
  return false;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<EnquiryPayload> & { website?: string };

    // Honeypot — real users don't fill the hidden `website` field; bots do.
    if (body.website && body.website.trim() !== "") {
      return NextResponse.json({ ok: true }); // pretend success, send nothing
    }

    // Field validation
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required field" },
        { status: 400 },
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }
    if (name.length > 120 || phone.length > 40 || email.length > 160 || message.length > 5000) {
      return NextResponse.json({ ok: false, error: "Field too long" }, { status: 400 });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many submissions. Try again shortly." },
        { status: 429 },
      );
    }

    await sendEnquiryEmail({
      name,
      phone,
      email,
      country: String(body.country || "").trim() || undefined,
      message,
      source: String(body.source || "Website form").trim(),
      pageUrl: String(body.pageUrl || "").trim() || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/enquiry] send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send enquiry. Please try again or email us directly." },
      { status: 500 },
    );
  }
}

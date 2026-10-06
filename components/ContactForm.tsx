"use client";

import { useState } from "react";

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Argentina","Australia","Austria","Bahrain","Bangladesh","Belgium","Brazil","Bulgaria","Canada","Chile","China","Colombia","Croatia","Cyprus","Czech Republic","Denmark","Egypt","Estonia","Finland","France","Georgia","Germany","Ghana","Greece","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Latvia","Lebanon","Lithuania","Luxembourg","Malaysia","Malta","Mexico","Mongolia","Morocco","Nepal","Netherlands","New Zealand","Nigeria","Norway","Oman","Pakistan","Philippines","Poland","Portugal","Qatar","Romania","Russia","Saudi Arabia","Serbia","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","Sweden","Switzerland","Taiwan","Thailand","Tunisia","Turkey","Ukraine","United Arab Emirates","United Kingdom","United States","Uzbekistan","Vietnam","Yemen","Zambia","Zimbabwe",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      country: String(fd.get("country") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""), // honeypot
      source: "Contact Us form",
      pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
    };
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Could not send message. Please try again.");
      }
      window.location.href = "/thank-you";
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Could not send message.");
    }
  }

  return (
    <form
      className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      onSubmit={handleSubmit}
    >
      <input required type="text" name="name" placeholder="Full name" className="cfield" disabled={status === "sending"} />
      <input required type="text" name="phone" placeholder="Phone Number" className="cfield" disabled={status === "sending"} />
      <input required type="email" name="email" placeholder="Email" className="cfield" disabled={status === "sending"} />
      <select required name="country" defaultValue="" className="cfield" disabled={status === "sending"}>
        <option value="" disabled>Select Country</option>
        {COUNTRIES.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <textarea required name="message" rows={5} placeholder="Message" className="cfield" disabled={status === "sending"} />

      {/* Honeypot — hidden from real users, catches bots */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-htr-blue px-8 py-3 font-semibold text-white transition-colors hover:bg-htr-blue-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Submit Form"}
      </button>
      <style>{`
        .cfield{width:100%;border:1px solid #cbd5e1;border-radius:6px;padding:0.65rem 0.85rem;font-size:0.95rem;outline:none}
        .cfield:focus{border-color:#4b7fce;box-shadow:0 0 0 2px rgba(75,127,206,0.2)}
        .cfield:disabled{opacity:0.7;cursor:not-allowed}
      `}</style>
    </form>
  );
}

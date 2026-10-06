"use client";

import { createContext, useCallback, useContext, useState } from "react";

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahrain","Bangladesh","Belarus","Belgium","Bhutan","Bolivia","Bosnia and Herzegovina","Brazil","Bulgaria","Cambodia","Canada","Chile","China","Colombia","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Egypt","Estonia","Ethiopia","Finland","France","Georgia","Germany","Ghana","Greece","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Latvia","Lebanon","Lithuania","Luxembourg","Malaysia","Maldives","Malta","Mexico","Monaco","Mongolia","Morocco","Myanmar","Nepal","Netherlands","New Zealand","Nigeria","Norway","Oman","Pakistan","Philippines","Poland","Portugal","Qatar","Romania","Russia","Saudi Arabia","Serbia","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","Sweden","Switzerland","Taiwan","Tanzania","Thailand","Tunisia","Turkey","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vietnam","Yemen","Zambia","Zimbabwe",
];

type EnquireContextValue = { open: () => void };
const EnquireContext = createContext<EnquireContextValue>({ open: () => {} });

export function useEnquire() {
  return useContext(EnquireContext);
}

export function EnquireProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const open = useCallback(() => {
    setStatus("idle");
    setErrorMsg("");
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

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
      source: "Enquire Now modal",
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
        throw new Error(data?.error || "Could not send enquiry. Please try again.");
      }
      window.location.href = "/thank-you";
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Could not send enquiry.");
    }
  }

  return (
    <EnquireContext.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-lg rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={close}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-2xl leading-none text-gray-500 hover:bg-gray-100"
            >
              ×
            </button>
            <div className="rounded-t-xl bg-htr-blue px-6 py-5 text-white">
              <h3 className="font-serif text-2xl font-bold">Enquiry Form</h3>
              <p className="mt-1 text-sm text-white/90">
                Fill the form and our team will contact you.
              </p>
            </div>
            <div className="p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input required type="text" name="name" placeholder="Full name" className="field" disabled={status === "sending"} />
                <input required type="text" name="phone" placeholder="Phone Number" className="field" disabled={status === "sending"} />
                <input required type="email" name="email" placeholder="Email" className="field" disabled={status === "sending"} />
                <select required name="country" defaultValue="" className="field" disabled={status === "sending"}>
                  <option value="" disabled>
                    Select Country
                  </option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <textarea required name="message" rows={4} placeholder="Message" className="field" disabled={status === "sending"} />

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
                  className="w-full rounded-md bg-htr-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-htr-blue-dark disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? "Sending…" : "Submit Form"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <style>{`
        .field {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          padding: 0.6rem 0.8rem;
          font-size: 0.95rem;
          outline: none;
        }
        .field:focus { border-color: #4b7fce; box-shadow: 0 0 0 2px rgba(75,127,206,0.2); }
      `}</style>
    </EnquireContext.Provider>
  );
}

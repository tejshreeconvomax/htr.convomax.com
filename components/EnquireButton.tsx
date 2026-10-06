"use client";

import { useEnquire } from "./EnquireProvider";

export function EnquireButton({
  className,
  children = "Enquire Now",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { open } = useEnquire();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}

export function FloatingEnquire() {
  const { open } = useEnquire();
  return (
    <>
      {/* Left vertical tab — matches the live site: flush left edge, blue tab,
          rounded corners on the right (protruding) side, text reads bottom-to-top. */}
      <div
        className="fixed left-0 top-1/2 z-40"
        style={{ transform: "translateY(-50%)" }}
      >
        <button
          type="button"
          onClick={open}
          aria-label="Enquire Now"
          style={{
            display: "block",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            background: "#4b7fce",
            color: "#ffffff",
            padding: "24px 14px",
            fontSize: "16px",
            fontWeight: 500,
            letterSpacing: "0.3px",
            // In physical CSS: TL + BL rounded; after rotate(180deg) these end
            // up on the RIGHT (sticking-out) side of the tab.
            borderRadius: "8px 0 0 8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.18)",
            cursor: "pointer",
            whiteSpace: "nowrap",
            border: "none",
            transition: "background-color 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#3a6cb5")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#4b7fce")}
        >
          Enquire Now
        </button>
      </div>

      {/* Floating bottom-right pill button */}
      <button
        type="button"
        onClick={open}
        className="fixed bottom-5 right-5 z-40 rounded-full bg-htr-blue px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-htr-blue-dark"
      >
        Enquire Now
      </button>
    </>
  );
}

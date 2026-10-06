import type { Metadata } from "next";
import { PageShell, TitleBar } from "@/components/PageShell";

export const metadata: Metadata = { title: "Automotive Resistor Usage" };

export default function AutomotiveResistorUsagePage() {
  return (
    <PageShell>
      <TitleBar>Automotive Resistor Usage</TitleBar>
      <div className="htr-prose">
        <p>
          HTR manufactures for the Automotive Market resistors using two different distinct
          technologies depending on Usage – <strong>Shunt Resistors</strong> and{" "}
          <strong>Wound Resistors</strong>.
        </p>
        <p>Kindly select the desired link from below : –</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href="https://www.htr-india.com/wp-content/uploads/2024/04/Automotive-Resistor-Shunt.pdf"
          target="_blank"
          rel="noopener"
          className="rounded-md bg-htr-blue px-6 py-3 font-semibold uppercase tracking-wide text-white transition-colors hover:bg-htr-blue-dark"
        >
          Shunt Resistors
        </a>
        <a
          href="https://www.htr-india.com/wp-content/uploads/2024/04/Automotive-Resistor-Wound.pdf"
          target="_blank"
          rel="noopener"
          className="rounded-md bg-htr-blue px-6 py-3 font-semibold uppercase tracking-wide text-white transition-colors hover:bg-htr-blue-dark"
        >
          Wound Resistors
        </a>
      </div>
    </PageShell>
  );
}

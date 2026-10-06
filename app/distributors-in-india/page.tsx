import type { Metadata } from "next";
import { PageShell, TitleBar } from "@/components/PageShell";
import { indiaDistributors } from "@/lib/site";

export const metadata: Metadata = {
  title: "HTR Distributors in India - Quality Resistor Suppliers",
};

export default function DistributorsIndiaPage() {
  return (
    <PageShell>
      <TitleBar>Distributors in India</TitleBar>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {indiaDistributors.map((d, i) => (
          <div key={i} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-htr-blue">
              {d.name} <span className="text-gray-500">({d.country})</span>
            </h3>
            <div className="mt-2 space-y-0.5 text-sm text-gray-600">
              {d.lines.map((l, j) => (
                <p key={j}>{l}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

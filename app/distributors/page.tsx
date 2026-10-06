import type { Metadata } from "next";
import Image from "next/image";
import { PageShell, TitleBar } from "@/components/PageShell";
import { worldwideDistributors } from "@/lib/site";

export const metadata: Metadata = {
  title: "HTR Global Distributor Network | Find a Resistor Supplier Near You",
};

export default function DistributorsPage() {
  return (
    <PageShell>
      <TitleBar>Worldwide Distributors</TitleBar>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {worldwideDistributors.map((d, i) => (
          <div key={i} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-3 border-b border-gray-100 pb-3">
              {d.flag && (
                <Image src={d.flag} alt={d.country} width={38} height={26} className="h-auto w-9 rounded-sm border border-gray-200" />
              )}
              <h3 className="font-serif text-lg font-bold text-htr-blue">{d.country}</h3>
            </div>
            <p className="font-semibold text-gray-800">{d.name}</p>
            <div className="mt-1 space-y-0.5 text-sm text-gray-600">
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

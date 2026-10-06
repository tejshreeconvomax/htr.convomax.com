import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, TitleBar } from "@/components/PageShell";
import { crossRefChart } from "@/lib/crossref";
import { productMap } from "@/lib/products";

export const metadata: Metadata = {
  title: "HTR Cross Reference Chart | Find Equivalent Resistors Easily",
};

export default function CrossReferenceChartPage() {
  return (
    <PageShell>
      <TitleBar>Cross Reference Chart</TitleBar>
      <p className="htr-prose mb-6">
        <a
          href="https://www.htr-india.com/wp-content/uploads/2024/09/Cross-Reference-Chart-Rev-10-08062024.pdf"
          target="_blank"
          rel="noopener"
          className="font-semibold"
        >
          Click here to download the full reference chart
        </a>
      </p>

      <div className="space-y-8">
        {crossRefChart.map((b) => (
          <section key={b.brand}>
            <h2 className="mb-1 font-serif text-xl font-bold text-htr-blue">{b.brand}</h2>
            <p className="mb-3 text-sm text-gray-600">
              Select any of the following Series of {b.brand} to view it&apos;s HTR- Equivalent(s):
            </p>
            <div className="htr-prose">
              <table>
                <thead>
                  <tr>
                    <th>Competitor Series</th>
                    <th>HTR Equivalent</th>
                  </tr>
                </thead>
                <tbody>
                  {b.rows.map((r, i) => {
                    const prod = r.slug ? productMap[r.slug] : undefined;
                    return (
                      <tr key={i}>
                        <td className="font-semibold">{r.series}</td>
                        <td>
                          {r.slug ? (
                            <Link href={`/product/${r.slug}`} className="text-htr-blue underline">
                              {prod ? prod.name : r.slug.toUpperCase()}
                            </Link>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}

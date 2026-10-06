import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { products, productMap, typeFeatures, typeLabels } from "@/lib/products";
import { EnquireButton } from "@/components/EnquireButton";
import productPdfs from "@/lib/productPdfs.json";

const pdfMap = productPdfs as Record<string, string>;

// Fallback datasheet for products that have no individual PDF (e.g. the load bank
// listing links to a PPT in its category page rather than a per-product datasheet).
const FALLBACK_PDF = "https://www.htr-india.com/wp-content/uploads/2026/08/HTR_Load_Bank_PPT.pdf";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/product/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = productMap[slug];
  return { title: p ? `${p.name} | ${typeLabels[p.type]}` : "Product" };
}

export default async function ProductPage({ params }: PageProps<"/product/[slug]">) {
  const { slug } = await params;
  const product = productMap[slug];
  if (!product) notFound();

  const features = typeFeatures[product.type];
  const datasheet = pdfMap[slug] ?? FALLBACK_PDF;

  return (
    <PageShell>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-white p-6">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-contain p-6"
            priority
          />
        </div>

        <div>
          <h1 className="mb-4 font-serif text-3xl font-bold text-htr-blue">{product.name}</h1>
          <p className="mb-4 text-sm uppercase tracking-wide text-gray-500">
            {typeLabels[product.type]}
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-800">
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <a
              href={datasheet}
              target="_blank"
              rel="noopener"
              className="rounded-md bg-htr-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-htr-blue-dark"
            >
              Download Datasheet
            </a>
            <EnquireButton className="rounded-md border border-htr-blue bg-white px-6 py-3 font-semibold text-htr-blue transition-colors hover:bg-htr-blue hover:text-white" />
          </div>
        </div>
      </div>
    </PageShell>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell, TitleBar } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { categories, categoryMap, productMap } from "@/lib/products";

export function generateStaticParams() {
  return categories.map((c) => ({ path: c.path.split("/") }));
}

export async function generateMetadata({ params }: PageProps<"/product-category/[...path]">): Promise<Metadata> {
  const { path } = await params;
  const key = Array.isArray(path) ? path.join("/") : path;
  const cat = categoryMap[key];
  return { title: cat?.metaTitle ?? "Products" };
}

export default async function CategoryPage({ params }: PageProps<"/product-category/[...path]">) {
  const { path } = await params;
  const key = Array.isArray(path) ? path.join("/") : path;
  const category = categoryMap[key];
  if (!category) notFound();

  const products = category.productSlugs
    .map((slug) => productMap[slug])
    .filter(Boolean);

  return (
    <PageShell>
      <TitleBar>{category.title}</TitleBar>
      {category.intro && category.intro.length > 0 && (
        <div className="htr-prose mb-8">
          {category.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard
            key={p.slug}
            name={p.name}
            image={p.image}
            href={`/product/${p.slug}`}
          />
        ))}
      </div>
    </PageShell>
  );
}

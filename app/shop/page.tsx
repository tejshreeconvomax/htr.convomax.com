import type { Metadata } from "next";
import { PageShell, TitleBar } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <PageShell>
      <TitleBar>Shop</TitleBar>
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

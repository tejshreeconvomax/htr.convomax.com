import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell, TitleBar } from "@/components/PageShell";
import { allProductsGrid } from "@/lib/products";

export const metadata: Metadata = {
  title: "Resistor Product Range: Explore All Types of Resistors | HTR India",
};

export default function AllProductsPage() {
  return (
    <PageShell>
      <TitleBar>All Products</TitleBar>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allProductsGrid.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-square bg-white p-4">
              <Image src={c.image} alt={c.title} fill sizes="300px" className="object-contain p-4 transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="border-t border-gray-100 px-3 py-4 text-center">
              <h3 className="font-serif text-lg font-bold text-htr-blue group-hover:text-htr-blue-dark">
                {c.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">({c.count})</p>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}

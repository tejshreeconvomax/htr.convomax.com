"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import { categories } from "@/lib/products";

type Result = { title: string; href: string; kind: "Product" | "Category" };

export function SearchResults({ initialQuery }: { initialQuery: string }) {
  const [q, setQ] = useState(initialQuery);

  const results = useMemo<Result[]>(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return [];
    const hits: Result[] = [];
    for (const p of products) {
      if (p.name.toLowerCase().includes(needle) || p.slug.includes(needle)) {
        hits.push({ title: p.name, href: `/product/${p.slug}`, kind: "Product" });
      }
    }
    for (const c of categories) {
      if (c.title.toLowerCase().includes(needle) || c.path.includes(needle)) {
        hits.push({ title: c.title, href: `/product-category/${c.path}`, kind: "Category" });
      }
    }
    return hits.slice(0, 50);
  }, [q]);

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mb-6 flex gap-2 rounded-md border border-gray-300 bg-white p-2 shadow-sm"
      >
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search products and categories…"
          className="flex-1 px-3 py-2 text-base outline-none"
        />
        <button
          type="submit"
          className="rounded bg-htr-blue px-5 py-2 font-semibold text-white hover:bg-htr-blue-dark"
        >
          Search
        </button>
      </form>

      {q.trim() === "" ? (
        <p className="text-gray-600">Type a product name or category to search.</p>
      ) : results.length === 0 ? (
        <p className="text-gray-600">
          No results for <strong>&quot;{q}&quot;</strong>.
        </p>
      ) : (
        <ul className="divide-y divide-gray-200 rounded-md border border-gray-200 bg-white">
          {results.map((r, i) => (
            <li key={i} className="flex items-center justify-between px-4 py-3">
              <Link href={r.href} className="font-semibold text-htr-blue hover:underline">
                {r.title}
              </Link>
              <span className="rounded bg-gray-100 px-2 py-0.5 text-xs uppercase tracking-wide text-gray-600">
                {r.kind}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

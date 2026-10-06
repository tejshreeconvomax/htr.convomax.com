"use client";

import Link from "next/link";
import { useState } from "react";
import { sidebarCategories, sidebarResourceLinks, type NavItem } from "@/lib/site";

function CategoryRow({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;
  return (
    <li className="border-b border-gray-200">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className="block flex-1 py-3 pl-1 text-[15px] font-semibold uppercase tracking-wide text-htr-blue hover:text-htr-blue-dark"
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            aria-label="Toggle"
            onClick={() => setOpen((o) => !o)}
            className="px-2 py-3 text-htr-blue"
          >
            {open ? "▾" : "▸"}
          </button>
        )}
      </div>
      {hasChildren && open && (
        <ul className="pb-2">
          {item.children!.map((c) => (
            <li key={c.label}>
              <Link
                href={c.href}
                className="block py-1.5 pl-4 text-sm text-gray-700 hover:text-htr-blue"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function Sidebar() {
  return (
    <aside className="w-full lg:w-72 lg:flex-shrink-0">
      {/* Not a true heading — kept as <p> to avoid an out-of-order h2 before the page's h1 */}
      <p className="mb-2 border-b-2 border-gray-300 pb-2 font-serif text-2xl font-bold text-gray-800">
        CATEGORIES
      </p>
      <ul>
        {sidebarCategories.map((item) => (
          <CategoryRow key={item.label + item.href} item={item} />
        ))}
      </ul>
      <div className="mt-5 space-y-3">
        {sidebarResourceLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center justify-between rounded-full bg-htr-blue px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow transition-colors hover:bg-htr-blue-dark"
          >
            {link.label}
            <span className="text-xs">✔</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}

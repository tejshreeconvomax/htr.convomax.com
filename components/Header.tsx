"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav, type NavItem } from "@/lib/site";
import { EnquireButton } from "./EnquireButton";

function DesktopItem({ item, activePath }: { item: NavItem; activePath: string }) {
  const hasChildren = !!item.children?.length;
  const isActive = item.href === activePath || (item.href !== "/" && activePath.startsWith(item.href));
  return (
    <li className="group relative">
      <Link
        href={item.href}
        className={
          "flex items-center gap-1 whitespace-nowrap px-[14px] py-[13px] text-[16px] font-normal transition-colors hover:bg-black/15 " +
          (isActive ? "text-htr-blue" : "text-slate-200 hover:text-white")
        }
      >
        {item.label}
        {hasChildren && <span className="text-[9px] leading-none">▼</span>}
      </Link>
      {hasChildren && (
        <ul className="invisible absolute right-0 top-full z-50 min-w-[250px] translate-y-1 border border-gray-200 bg-white py-1 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          {item.children!.map((child) => (
            <li key={child.label} className="group/sub relative">
              <Link
                href={child.href}
                className="flex items-center justify-between gap-2 px-5 py-[13px] text-[13px] font-semibold text-[#33373d] hover:bg-htr-blue hover:text-white"
              >
                {child.label}
                {child.children?.length ? <span className="text-[9px]">◂</span> : null}
              </Link>
              {child.children?.length ? (
                <ul className="invisible absolute right-full top-0 min-w-[260px] border border-gray-200 bg-white py-1 opacity-0 shadow-xl transition-all group-hover/sub:visible group-hover/sub:opacity-100">
                  {child.children.map((g) => (
                    <li key={g.label}>
                      <Link
                        href={g.href}
                        className="block px-5 py-[13px] text-[13px] font-semibold text-[#33373d] hover:bg-htr-blue hover:text-white"
                      >
                        {g.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function MobileItem({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;
  return (
    <li className="border-b border-white/10">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          className="block flex-1 py-3 text-slate-200 hover:text-white"
          style={{ paddingLeft: `${12 + depth * 14}px` }}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            aria-label="Toggle submenu"
            onClick={() => setOpen((o) => !o)}
            className="px-4 py-3 text-white/70"
          >
            {open ? "–" : "+"}
          </button>
        )}
      </div>
      {hasChildren && open && (
        <ul className="bg-black/20">
          {item.children!.map((c) => (
            <MobileItem key={c.label} item={c} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() || "/";
  return (
    <header className="w-full bg-gradient-to-b from-[#f2f2f2] to-[#e4e4e4] py-[20px]">
      {/* Mobile top bar (logo + hamburger) */}
      <div className="md:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
          <Link href="/" aria-label="HTR - Hi Tech Resistors home" className="flex items-center">
            <Image src="/images/logo.png" alt="HTR - Hi Tech Resistors" width={72} height={72} priority />
          </Link>
          <button
            className="rounded bg-htr-blue px-3 py-2 text-white"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Desktop layout: centered container; logo sits in the left area,
          search is top-right of the right column, dark nav bar sits below the
          search aligned to the right (its width = the nav items' width, not
          the full column). */}
      <div className="mx-auto hidden max-w-6xl items-end px-6 md:flex">
        {/* Logo column — fixed width, logo vertically centered */}
        <Link
          href="/"
          aria-label="HTR - Hi Tech Resistors home"
          className="relative z-10 flex shrink-0 items-center self-stretch py-2"
        >
          <Image src="/images/logo.png" alt="HTR - Hi Tech Resistors" width={85} height={85} priority />
        </Link>

        {/* Right column: pushes everything to the right edge */}
        <div className="flex flex-1 flex-col items-end">
          {/* Search */}
          <form action="/search-results" method="get" className="pb-2 pt-3">
            <div className="relative">
              <input
                type="search"
                name="q"
                aria-label="Search"
                className="w-72 rounded border border-gray-400/60 bg-white px-3 py-1 pl-8 text-sm outline-none focus:border-htr-blue"
              />
              <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500">⌕</span>
            </div>
          </form>

          {/* Dark nav bar — only as wide as its items (fits content), right-aligned */}
          <nav
            aria-label="Primary"
            className="inline-block bg-gradient-to-b from-[#565656] to-[#2e2e2e] rounded-[10px] shadow-md"
          >
            <ul className="flex items-center">
              {mainNav.map((item) => (
                <DesktopItem key={item.label} item={item} activePath={pathname} />
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav aria-label="Primary" className="md:hidden bg-gradient-to-b from-[#565656] to-[#2e2e2e]">
          <ul>
            {mainNav.map((item) => (
              <MobileItem key={item.label} item={item} />
            ))}
            <li className="p-3">
              <EnquireButton className="w-full rounded bg-htr-blue px-4 py-2 text-sm font-semibold text-white" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV = [
  { label: "Learn", href: "/learn" },
  { label: "Gemstones", href: "/gemstones" },
  { label: "Tools", href: "/tools" },
  { label: "Origins", href: "/origins" },
  { label: "Glossary", href: "/glossary" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/90 bg-background/90 backdrop-blur-xl">
      <div className="container-page flex h-[64px] items-center justify-between md:h-[68px]">
        <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><i /><b /><em /></span>
          <span className="font-serif text-[1.15rem] font-semibold tracking-tight text-foreground">
            Gemology<span className="text-gold">X</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/search" aria-label="Search GemologyX" className="gx-icon-btn">
            <Search size={16} />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="gx-icon-btn md:hidden"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-page flex flex-col gap-1 py-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent-soft"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

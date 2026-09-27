"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV = [
  { label: "Explore", href: "/gemstones" },
  { label: "Learn", href: "/learn" },
  { label: "Tools", href: "/tools" },
  { label: "Origins", href: "/origins" },
  { label: "Glossary", href: "/glossary" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-[68px] items-center justify-between md:h-[72px]">
        <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><i /><b /><em /></span>
          <span className="font-serif text-xl font-semibold tracking-tight">Gemology<span className="text-accent">X</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-foreground/70">
          {NAV.map((item) => <Link key={item.href} href={item.href} className="nav-link hover:text-accent">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2.5">
          <Link href="/search" aria-label="Search GemologyX" className="luxury-icon-button"><Search size={16} /></Link>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(v => !v)} className="luxury-icon-button md:hidden">
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>
      <div className={`mobile-nav md:hidden ${open ? "mobile-nav-open" : ""}`} aria-hidden={!open}>
        <nav className="container-page grid gap-1 pb-4">
          {NAV.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="mobile-nav-link" style={{ transitionDelay: open ? `${index * 35}ms` : "0ms" }} tabIndex={open ? 0 : -1}>
              <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

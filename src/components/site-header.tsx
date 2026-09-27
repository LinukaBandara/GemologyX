"use client";

import Link from "next/link";
import { Search, Menu, X, Sparkles } from "lucide-react";
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
    <header className="site-header">
      <div className="container-page header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-gem"><Sparkles size={13} /></span>
          <span>Gemology<span>X</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link href="/search" aria-label="Search GemologyX" className="header-icon"><Search size={17} /></Link>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} className="header-icon mobile-menu-button" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {NAV.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        </nav>
      )}
    </header>
  );
}
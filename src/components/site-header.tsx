"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV = [
  { label: "Discover", href: "/gemstones" },
  { label: "Gemology", href: "/learn" },
  { label: "Origins", href: "/origins" },
  { label: "Sri Lanka", href: "/origins/sri-lanka" },
  { label: "Tools", href: "/tools" },
  { label: "Glossary", href: "/glossary" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="gx-topline"><strong>GEMOLOGYX</strong>&nbsp; · &nbsp;The science · The origin · The gem</div>
      <header className="gx-header">
        <div className="container-page gx-header-inner">
          <Link href="/" className="gx-brand" onClick={() => setOpen(false)} aria-label="GemologyX home">
            <img src="/gemologyx-mark.svg" alt="" width="42" height="42" />
            <span>
              <span className="gx-brand-word">Gemology<span>X</span></span>
              <span className="gx-brand-caption">A world of gems, understood</span>
            </span>
          </Link>

          <nav className="gx-nav" aria-label="Main navigation">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="gx-nav-link">{item.label}</Link>
            ))}
          </nav>

          <div className="gx-header-actions">
            <Link href="/search" aria-label="Search GemologyX" className="gx-search-link"><Search size={16} /></Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="gx-menu-button"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="gx-mobile-nav container-page" aria-label="Mobile navigation">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

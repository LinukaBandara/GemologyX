"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";

const NAV = [
  { label: "Learn", href: "/learn" },
  { label: "Gemstones", href: "/gemstones" },
  { label: "Sri Lanka", href: "/sri-lanka" },
  { label: "සිංහල", href: "/si/learn" },
  { label: "Mining", href: "/sri-lanka-mining" },
  { label: "Tools", href: "/tools" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-40">
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)} aria-label="GemologyX home">
          <Image src="/gemologyx-mark.svg" alt="" width={30} height={30} priority />
          <span className="brand-lockup"><span className="font-serif text-[1.55rem] font-medium leading-none tracking-tight text-foreground">
            Gemology<span className="text-gold">X</span></span><small>The science · The origin · The gem</small>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {NAV.map((item) => (
          <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/search" aria-label="Search GemologyX" className="gx-icon-btn">
            <Search size={16} />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
            className="gx-icon-btn lg:hidden"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-3" aria-label="Mobile navigation">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="min-h-11 rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-accent-soft"
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

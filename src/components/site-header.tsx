"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV = [
  { label: "Gemstones", href: "/gemstones" },
  { label: "Learn", href: "/learn" },
  { label: "Sri Lanka", href: "/sri-lanka" },
  { label: "Mining", href: "/sri-lanka-mining" },
  { label: "Tools", href: "/tools" },
  { label: "සිංහල", href: "/si/learn" },
];

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement | null>(null);

  return (
    <header
      className="gx-site-header sticky top-0 z-50"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menuToggleRef.current?.focus();
        }
      }}
    >
      <div className="gx-header-main">
        <div className="gx-header-inner container-page">
          <Link
            href="/"
            className="gx-brand"
            onClick={() => setOpen(false)}
            aria-label="GemologyX home"
          >
            <Image
              src="/gemologyx-mark.svg"
              alt=""
              width={42}
              height={42}
              priority
              className="gx-brand-mark"
            />
            <span className="gx-brand-copy">
              <span className="gx-brand-name">Gemology<span>X</span></span>
              <span className="gx-brand-tagline">Knowledge · Science · Integrity</span>
            </span>
          </Link>

          <nav className="gx-desktop-nav" aria-label="Main navigation">
            {NAV.map((item) => {
              const active = isCurrent(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? "gx-nav-link is-active" : "gx-nav-link"}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="gx-header-actions">
            <Link href="/search" className="gx-header-search" aria-label="Search GemologyX">
              <Search size={18} strokeWidth={1.8} />
              <span>Search</span>
            </Link>
            <ThemeToggle />
            <button
              ref={menuToggleRef}
              type="button"
              className="gx-menu-toggle"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="gx-mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={21} strokeWidth={1.8} /> : <Menu size={21} strokeWidth={1.8} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div id="gx-mobile-navigation" className="gx-mobile-navigation">
          <div className="container-page gx-mobile-navigation-inner">
            <Link
              href="/search"
              className="gx-mobile-search"
              onClick={() => setOpen(false)}
            >
              <Search size={18} />
              <span>Search gemstones, topics and guides</span>
              <ChevronRight size={17} />
            </Link>
            <nav aria-label="Mobile navigation" className="gx-mobile-nav-list">
              {NAV.map((item) => {
                const active = isCurrent(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={active ? "gx-mobile-nav-link is-active" : "gx-mobile-nav-link"}
                    aria-current={active ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={16} />
                  </Link>
                );
              })}
            </nav>
            <p className="gx-mobile-nav-note">A considered reference to the world of gemstones.</p>
          </div>
        </div>
      )}
    </header>
  );
}

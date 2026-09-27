import Link from "next/link";
import { Search, Menu } from "lucide-react";

const NAV = [
  { label: "Explore", href: "/gemstones" },
  { label: "Learn", href: "/learn" },
  { label: "Tools", href: "/tools" },
  { label: "Origins", href: "/origins" },
  { label: "Glossary", href: "/glossary" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="brand-mark" aria-hidden="true"><i /><b /><em /></span>
          <span className="font-serif text-xl font-semibold tracking-tight">Gemology<span className="text-accent">X</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-foreground/70">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link href="/search" aria-label="Search GemologyX" className="luxury-icon-button">
            <Search size={16} />
          </Link>
          <button aria-label="Open menu" className="luxury-icon-button md:hidden">
            <Menu size={17} />
          </button>
        </div>
      </div>
    </header>
  );
}

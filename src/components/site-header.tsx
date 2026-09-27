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
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-1 font-serif text-lg font-semibold tracking-tight">
          GemologyX
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-foreground/80">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/search"
            aria-label="Search GemologyX"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 hover:border-accent hover:text-accent transition-colors"
          >
            <Search size={16} />
          </Link>
          <button
            aria-label="Open menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 md:hidden"
          >
            <Menu size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}

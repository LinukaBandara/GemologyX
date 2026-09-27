import Link from "next/link";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Gemstones", href: "/gemstones" },
      { label: "Origins", href: "/origins" },
      { label: "Compare", href: "/compare" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Guides", href: "/learn" },
      { label: "Journal", href: "/journal" },
      { label: "Glossary", href: "/glossary" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "All Tools", href: "/tools" },
      { label: "Carat Converter", href: "/tools/carat-to-gram" },
      { label: "Ring Size", href: "/tools/ring-size" },
      { label: "Mohs Hardness", href: "/tools/mohs-hardness" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About", href: "/about" },
      { label: "Editorial Standards", href: "/editorial-standards" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-lg font-semibold">GemologyX</p>
            <p className="mt-2 text-sm text-muted">The Digital Guide to Gemstones</p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium text-foreground">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-muted hover:text-accent transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 GemologyX. Educational information; not a substitute for professional gemological examination.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-accent">Privacy</Link>
            <Link href="/terms" className="hover:text-accent">Terms</Link>
            <Link href="/disclaimer" className="hover:text-accent">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

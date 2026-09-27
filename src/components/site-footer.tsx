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
    <footer className="border-t border-border bg-[#24152f] text-white">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-serif text-xl font-semibold tracking-tight">
              GemologyX
            </Link>
            <p className="mt-2 max-w-[180px] text-sm text-white/60">
              The Digital Guide to Gemstones
            </p>
            <div className="mt-5 h-px w-12 bg-[#c9a66b]" />
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium text-white">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/55 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-white/45">
              © 2026 GemologyX. Educational information; not a substitute for professional gemological examination.
            </p>
            <div className="flex gap-4 text-xs text-white/50">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center border-t border-white/10 pt-5 text-center">
            <p className="text-xs tracking-wide text-white/40">
              Crafted &amp; developed by{" "}
              <span className="font-medium text-[#c9a66b]">RK II</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

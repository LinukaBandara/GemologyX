import Link from "next/link";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Learn",
    links: [
      { label: "Guides", href: "/learn" },
      { label: "Glossary", href: "/glossary" },
      { label: "Gemstone Certification", href: "/learn/gemstone-certification" },
      { label: "How to Read a Report", href: "/learn/how-to-read-a-gemstone-report" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Gemstones", href: "/gemstones" },
      { label: "Origins", href: "/origins" },
      { label: "Sri Lanka Mining", href: "/sri-lanka-mining" },
      { label: "Trade & Export", href: "/sri-lanka-trade-export" },
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
      { label: "About Us", href: "/about" },
      { label: "Editorial Standards", href: "/editorial-standards" },
      { label: "Contact", href: "/contact" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-page py-14 md:py-16">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-brand-name">
              <span className="brand-mark" aria-hidden="true"><i /><b /><em /></span>
              Gemology<span>X</span>
            </Link>
            <p>
              Empowering minds with accurate, accessible gemology education for a more informed world.
            </p>
            <div className="footer-gold-line" />
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="footer-column-title">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="footer-link">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2026 GemologyX. Educational information; not a substitute for professional gemological examination.</p>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/editorial-standards">Standards</Link>
          </div>
        </div>

        <div className="footer-credit">
          <span /> Crafted with care · Knowledge · Science · Integrity <span />
        </div>
      </div>
    </footer>
  );
}

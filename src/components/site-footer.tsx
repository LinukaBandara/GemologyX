import Image from "next/image";
import Link from "next/link";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  { title: "Learn", links: [
    { label: "Guides", href: "/learn" },
    { label: "Glossary", href: "/glossary" },
    { label: "Gemstone Certification", href: "/learn/gemstone-certification" },
    { label: "How to Read a Report", href: "/learn/how-to-read-a-gemstone-report" },
  ]},
  { title: "Explore", links: [
    { label: "Gemstones", href: "/gemstones" },
    { label: "Origins", href: "/origins" },
    { label: "Sri Lanka Gem Hub", href: "/sri-lanka" },
    { label: "සිංහල: ශ්‍රී ලංකාවේ මැණික්", href: "/si/learn" },
    { label: "Sri Lanka Mining", href: "/sri-lanka-mining" },
    { label: "Trade & Export", href: "/sri-lanka-trade-export" },
  ]},
  { title: "Tools", links: [
    { label: "All Tools", href: "/tools" },
    { label: "Carat Converter", href: "/tools/carat-to-gram" },
    { label: "Ring Size", href: "/tools/ring-size" },
    { label: "Mohs Hardness", href: "/tools/mohs-hardness" },
  ]},
  { title: "About", links: [
    { label: "About Us", href: "/about" },
    { label: "Editorial Standards", href: "/editorial-standards" },
    { label: "Sources & Citations", href: "/sources" },
    { label: "Frequently Asked Questions", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Disclaimer", href: "/disclaimer" },
  ]},
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-page py-14 md:py-16">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-brand-name">
              <Image src="/gemologyx-mark.svg" alt="" width={36} height={36} />
              <span>Gemology<span>X</span></span>
            </Link>
            <p>
              Independent gemology education exploring gemstones, mineral science, Sri Lankan gem heritage and informed buying.
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
            <Link href="/sitemap">Site map</Link>
          </div>
        </div>

        <div className="footer-credit">
          <span /> Knowledge · Science · Integrity <span />
          <a href="https://ark-ii.studio" target="_blank" rel="noopener noreferrer" aria-label="Visit ARK II Studio website">Created by <strong>ARK II</strong></a>
        </div>
      </div>
    </footer>
  );
}

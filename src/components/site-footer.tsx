import Link from "next/link";

const COLUMNS = [
  { title: "Explore", links: [{ label: "Gemstone directory", href: "/gemstones" }, { label: "Gemstone origins", href: "/origins" }, { label: "Sri Lankan gems", href: "/origins/sri-lanka" }, { label: "Mining & trade", href: "/sri-lanka-mining" }] },
  { title: "Learn", links: [{ label: "Learning library", href: "/learn" }, { label: "Gemstone glossary", href: "/glossary" }, { label: "Certification", href: "/learn/gemstone-certification" }, { label: "Buying guides", href: "/learn" }] },
  { title: "Resources", links: [{ label: "Practical tools", href: "/tools" }, { label: "Search the library", href: "/search" }, { label: "Editorial standards", href: "/editorial-standards" }, { label: "About GemologyX", href: "/about" }] },
  { title: "Information", links: [{ label: "Contact", href: "/contact" }, { label: "Privacy", href: "/privacy" }, { label: "Disclaimer", href: "/disclaimer" }, { label: "Terms", href: "/terms" }] },
];

export function SiteFooter() {
  return (
    <footer className="gx-footer">
      <div className="container-page">
        <div className="gx-footer-main">
          <div className="gx-footer-brand">
            <Link href="/" className="gx-brand">
              <img src="/gemologyx-mark.svg" alt="" width="42" height="42" />
              <span><span className="gx-brand-word">Gemology<span>X</span></span><span className="gx-brand-caption">A world of gems, understood</span></span>
            </Link>
            <p>An independent learning and reference destination for the science, origins and character of gemstones — with a special connection to Sri Lanka.</p>
          </div>
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h2 className="gx-footer-title">{column.title}</h2>
              <div className="gx-footer-links">
                {column.links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
              </div>
            </div>
          ))}
        </div>
        <div className="gx-footer-bottom">
          <p>© {new Date().getFullYear()} GemologyX. Educational reference; not a substitute for professional gemological examination.</p>
          <div className="gx-footer-bottom-links"><Link href="/editorial-standards">Editorial standards</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        </div>
        <div className="gx-footer-credit">THE SCIENCE · THE ORIGIN · THE GEM</div>
      </div>
    </footer>
  );
}

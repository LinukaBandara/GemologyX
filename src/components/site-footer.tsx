import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const COLUMNS = [
  { title: "Explore", links: [["Gemstones","/gemstones"],["Origins","/origins"],["Glossary","/glossary"]] },
  { title: "Learn", links: [["Guides","/learn"],["About","/about"],["Editorial Standards","/editorial-standards"]] },
  { title: "Tools", links: [["All Tools","/tools"],["Carat Converter","/tools/carat-to-gram"],["Ring Size","/tools/ring-size"],["Mohs Hardness","/tools/mohs-hardness"]] },
  { title: "Company", links: [["Contact","/contact"],["Privacy","/privacy"],["Terms","/terms"]] },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-page footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-logo"><span><Sparkles size={13}/></span>Gemology<span>X</span></Link>
          <p>Understand the world of gemstones.<br/>One stone, one story, one discovery at a time.</p>
          <Link href="/gemstones" className="footer-explore">Explore the collection <ArrowUpRight size={15}/></Link>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title} className="footer-column">
            <h3>{col.title}</h3>
            {col.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </div>
        ))}
      </div>
      <div className="container-page footer-bottom">
        <p>© 2026 GemologyX. Educational information; not a substitute for professional gemological examination.</p>
        <div><span>Made for curious minds</span><span className="footer-dot">◆</span><span>Research-led reference</span></div>
      </div>
    </footer>
  );
}
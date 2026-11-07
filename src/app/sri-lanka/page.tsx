import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, FileCheck2, Gem, MapPinned, Pickaxe, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Sri Lanka Gemstone Heritage, Mining & Trade",
  description: "Explore Sri Lanka's gemstone origins, mining regions, gem trade, cutting, certification and local knowledge through the GemologyX country guide.",
  alternates: { canonical: "/sri-lanka" },
};

const sections = [
  { number: "01", icon: Gem, title: "Gemstone origins", description: "Understand Sri Lankan gem materials, geological context and what a geographic-origin opinion can—and cannot—establish.", links: [{ label: "Sri Lanka origin profile", href: "/origins/sri-lanka" }, { label: "Gemstone directory", href: "/gemstones" }] },
  { number: "02", icon: Pickaxe, title: "Mining landscapes", description: "Explore gem-bearing regions, traditional and mechanised mining contexts, worker safety and environmental responsibility.", links: [{ label: "Mining overview", href: "/sri-lanka-mining" }, { label: "Mining methods", href: "/sri-lanka-mining/methods" }, { label: "Environment", href: "/sri-lanka-mining/environment" }, { label: "Licensing", href: "/sri-lanka-mining/licensing" }] },
  { number: "03", icon: FileCheck2, title: "Trade, cutting & export", description: "Follow the journey from rough material to cutting, documentation, laboratory reports and official export guidance.", links: [{ label: "Trade and export", href: "/sri-lanka-trade-export" }, { label: "Read a gem report", href: "/learn/how-to-read-a-gemstone-report" }] },
  { number: "04", icon: BookOpen, title: "Local knowledge", description: "Explore local terminology, buying practices and the people and specialist roles involved in the Sri Lankan gem trade.", links: [{ label: "Trade terms · English", href: "/learn/sri-lanka-gem-terms" }, { label: "මැණික් පද · සිංහල", href: "/si/learn/sri-lanka-gem-terms" }, { label: "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම", href: "/si/learn/sri-lanka-gem-trade-intro" }, { label: "Buying in Sri Lanka · සිංහල", href: "/si/learn/sri-lanka-buying-day-tips" }] },
];

export default function SriLankaHubPage() {
  return (
    <main className="gx-regional-hub gx-sri-lanka-hub">
      <div className="container-page">
        <nav className="gx-regional-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Sri Lanka</span></nav>
        <header className="gx-regional-hero">
          <div className="gx-regional-hero-copy">
            <p className="gx-regional-kicker"><span /> GEMOLOGYX FIELD GUIDE · SRI LANKA</p>
            <h1>Sri Lanka, through its gem heritage.</h1>
            <p className="gx-regional-lede">A considered guide to the island’s gem-bearing landscapes, remarkable materials, mining communities and the knowledge that connects them to the wider world.</p>
            <div className="gx-regional-actions">
              <Link className="gx-regional-primary" href="/origins/sri-lanka">Explore gem origins <ArrowUpRight size={16} /></Link>
              <Link className="gx-regional-secondary" href="/sri-lanka-mining">Discover mining in Sri Lanka</Link>
            </div>
            <div className="gx-regional-meta"><span>01 / COUNTRY GUIDE</span><span>GEOLOGY · PEOPLE · TRADE</span></div>
          </div>
          <figure className="gx-regional-hero-image">
            <Image src="/images/homepage/Sri lanka.jpg" alt="Landscape photograph representing Sri Lanka" fill priority sizes="(max-width: 800px) 100vw, 48vw" />
            <figcaption>THE ISLAND OF GEMS <span>SRI LANKA</span></figcaption>
          </figure>
        </header>

        <section className="gx-regional-intro" aria-labelledby="regional-intro-title">
          <p className="gx-regional-kicker"><span /> A PLACE, MANY STORIES</p>
          <h2 id="regional-intro-title">More than a gemstone origin.</h2>
          <p>Sri Lanka’s gem story is shaped by ancient geology, regional knowledge, skilled cutting, trading relationships and changing standards of responsible practice. Explore each subject in its own context rather than reducing the island’s heritage to a single stone or slogan.</p>
        </section>

        <section className="gx-regional-sections" aria-label="Explore Sri Lanka topics">
          {sections.map(({ number, icon: Icon, title, description, links }) => (
            <article className="gx-regional-section" key={number}>
              <div className="gx-regional-section-top"><span>{number}</span><Icon size={20} strokeWidth={1.5} /></div>
              <div className="gx-regional-section-body">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="gx-regional-link-list">{links.map((link) => <Link href={link.href} key={link.href}>{link.label}<ArrowUpRight size={14} /></Link>)}</div>
              </div>
            </article>
          ))}
        </section>

        <section className="gx-regional-note">
          <MapPinned size={20} strokeWidth={1.5} />
          <div><h2>Geographic origin needs evidence.</h2><p>A gemstone’s appearance, seller description or place of purchase does not independently prove its geographic origin. Origin opinions require appropriate gemological examination and must be interpreted within the limits of the available evidence.</p></div>
        </section>
        <section className="gx-regional-disclaimer"><ShieldCheck size={18} /><p>GemologyX is an educational reference. Information about mining, licensing, safety and export is a starting point for research—not legal, operational or professional advice. Confirm current requirements with the relevant Sri Lankan authority.</p></section>
      </div>
    </main>
  );
}

import Link from "next/link";
import { ArrowRight, Sparkles, Gem, Compass, BookOpen, Calculator, Search } from "lucide-react";
import { gemstones } from "@/data/gemstones";
import { origins } from "@/data/origins";
import { GemstoneCard } from "@/components/gemstone-card";
import { AdSlot } from "@/components/ad-slot";

const GUIDES = [
  ["Natural vs Synthetic Gemstones", "/learn/natural-vs-synthetic-gemstones"],
  ["Heated vs Unheated Gemstones", "/learn/heated-vs-unheated"],
  ["How Gemstone Certification Works", "/learn/gemstone-certification"],
  ["How to Read a Gemstone Report", "/learn/how-to-read-a-gemstone-report"],
  ["What Makes a Sapphire Valuable?", "/learn/sapphire/sapphire-value-factors"],
  ["How to Care for Gemstones", "/learn/gemstone-care"],
];

const TOOLS = [
  ["Carat to Gram Converter", "/tools/carat-to-gram"],
  ["Gemstone Size Calculator", "/tools/gemstone-size"],
  ["Ring Size Converter", "/tools/ring-size"],
  ["Mohs Hardness Reference", "/tools/mohs-hardness"],
  ["Birthstone Finder", "/tools/birthstones"],
];

const CEYLON_GEMS = ["Ceylon Sapphire", "Padparadscha", "Star Sapphire", "Yellow Sapphire", "Ruby", "Alexandrite", "Cat's Eye", "Spinel"];
const GLOSSARY_PREVIEW = ["Asterism", "Cabochon", "Carat", "Clarity", "Corundum", "Geuda", "Inclusion", "Padparadscha", "Pleochroism", "Refractive Index"];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="container-page hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={13} /> THE MODERN GEMSTONE REFERENCE</div>
            <h1>Every gem has a story.<br /><em>Learn to see it.</em></h1>
            <p>Discover the science, beauty, origins and language behind the world&apos;s most fascinating gemstones — thoughtfully organized for curious minds.</p>
            <div className="hero-actions">
              <Link href="/gemstones" className="button button-primary">Explore the collection <ArrowRight size={16} /></Link>
              <Link href="/learn" className="button button-ghost">Start learning</Link>
            </div>
            <div className="hero-trust"><span /><span /><span /> Research-led. Practical. Beautifully simple.</div>
          </div>
          <div className="hero-gem" aria-hidden="true">
            <div className="gem-halo" />
            <div className="gem-orbit orbit-one" /><div className="gem-orbit orbit-two" />
            <div className="hero-crystal"><div className="crystal-top" /><div className="crystal-left" /><div className="crystal-right" /><div className="crystal-bottom" /><div className="crystal-glow" /></div>
            <div className="floating-note note-top"><Gem size={15} /> GEMOLOGY</div>
            <div className="floating-note note-bottom"><Compass size={15} /> ORIGINS • TREATMENTS • VALUE</div>
          </div>
        </div>
        <div className="hero-scroll">SCROLL TO EXPLORE <ArrowRight size={13} /></div>
      </section>

      <section className="intro-strip">
        <div className="container-page intro-grid">
          <div><span className="intro-number">01</span><strong>Know the stone.</strong><p>Clear reference pages for characteristics, hardness, colour and more.</p></div>
          <div><span className="intro-number">02</span><strong>Trace its story.</strong><p>Explore origins, treatments, terminology and how laboratories assess gems.</p></div>
          <div><span className="intro-number">03</span><strong>Use the tools.</strong><p>Practical calculators and converters designed for everyday decisions.</p></div>
        </div>
      </section>

      <section className="container-page section-space">
        <SectionHeading eyebrow="The collection" title="Meet the gemstones" href="/gemstones" cta="View the full reference" />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gemstones.slice(0, 6).map((gem) => <GemstoneCard key={gem.slug} gem={gem} />)}
        </div>
      </section>

      <section className="feature-band">
        <div className="container-page feature-grid">
          <div className="feature-copy">
            <div className="eyebrow"><Compass size={13} /> ORIGIN MATTERS</div>
            <h2>Where did your gemstone begin?</h2>
            <p>Origin can add context to a gemstone&apos;s story. Explore producing regions and understand what laboratories can — and cannot — determine scientifically.</p>
            <Link href="/origins" className="text-link">Explore gemstone origins <ArrowRight size={15} /></Link>
          </div>
          <div className="origin-cards">
            {origins.slice(0, 8).map((o, i) => <Link key={o.slug} href={`/origins/${o.slug}`} className="origin-card"><span>0{i + 1}</span>{o.name}<ArrowRight size={14} /></Link>)}
          </div>
        </div>
      </section>

      <section className="container-page section-space">
        <SectionHeading eyebrow="The journal" title="Learn without the jargon" href="/learn" cta="Browse all guides" />
        <div className="guide-grid">
          {GUIDES.map(([title, href], i) => <Link key={href} href={href} className="guide-card"><span className="guide-index">0{i + 1}</span><BookOpen size={17} /><h3>{title}</h3><span className="guide-arrow"><ArrowRight size={15} /></span></Link>)}
        </div>
      </section>

      <div className="container-page"><AdSlot variant="leaderboard" /></div>

      <section className="tools-band">
        <div className="container-page section-space">
          <SectionHeading eyebrow="Practical tools" title="Small tools. Useful answers." href="/tools" cta="See every tool" />
          <div className="tools-grid">
            {TOOLS.map(([title, href]) => <Link key={href} href={href} className="tool-card"><span className="tool-icon"><Calculator size={17} /></span><span>{title}</span><ArrowRight size={15} /></Link>)}
          </div>
        </div>
      </section>

      <section className="container-page section-space">
        <div className="ceylon-panel">
          <div className="ceylon-copy">
            <div className="eyebrow"><Sparkles size={13} /> FROM SRI LANKA</div>
            <h2>Discover the Ceylon story.</h2>
            <p>Sri Lanka has a remarkable history of coloured gemstones. Explore the stones associated with the island and the terminology behind them.</p>
            <Link href="/origins/sri-lanka" className="button button-dark">Explore Sri Lanka <ArrowRight size={15} /></Link>
          </div>
          <div className="ceylon-list">{CEYLON_GEMS.map((name, i) => <Link key={name} href="/origins/sri-lanka"><span>{String(i + 1).padStart(2, "0")}</span>{name}</Link>)}</div>
        </div>
      </section>

      <section className="glossary-band">
        <div className="container-page section-space">
          <SectionHeading eyebrow="The language of gems" title="A glossary worth knowing" href="/glossary" cta="Open the glossary" />
          <div className="term-cloud">{GLOSSARY_PREVIEW.map((term) => <Link key={term} href={`/glossary/${term.toLowerCase().replace(/\s+/g, "-")}`}>{term}</Link>)}</div>
        </div>
      </section>

      <section className="container-page section-space">
        <div className="newsletter-panel">
          <div><div className="eyebrow"><Search size={13} /> KEEP EXPLORING</div><h2>New knowledge, once in a while.</h2><p>Occasional updates when new gemstone guides, tools and reference pages are published.</p></div>
          <form className="newsletter-form"><input type="email" placeholder="Your email address" aria-label="Email address" /><button type="submit">Subscribe <ArrowRight size={15} /></button></form>
        </div>
      </section>
    </>
  );
}

function SectionHeading({ eyebrow, title, href, cta }: { eyebrow: string; title: string; href: string; cta: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><Link href={href} className="text-link">{cta} <ArrowRight size={14} /></Link></div>;
}

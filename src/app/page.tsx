import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Gem, Globe2, Microscope, Search, Sparkles } from "lucide-react";
import { gemstones } from "@/data/gemstones";

export const metadata: Metadata = {
  title: "GemologyX — Gemstones, Gemology & Sri Lanka",
  description: "Explore gemstone science, gem identification, treatments, buying guidance, and Sri Lanka’s gem heritage.",
  alternates: { canonical: "/" },
};

const gemLooks: Record<string, string> = {
  sapphire: "gem-sapphire", ruby: "gem-ruby", emerald: "gem-emerald", topaz: "gem-topaz", pearl: "gem-pearl",
};

export default function HomePage() {
  const featured = ["sapphire", "ruby", "emerald", "topaz", "pearl"].map((slug) => gemstones.find((gem) => gem.slug === slug)).filter((gem): gem is NonNullable<typeof gem> => Boolean(gem));
  return <div className="gx-home">
    <section className="home-hero">
      <div className="home-hero-image" />
      <div className="container-page home-hero-inner">
        <div className="home-copy"><p className="home-kicker">Global gemstone authority</p><h1>Discover the<br/>Timeless Beauty<br/>of Gemstones</h1><p>From the depths of the Earth to the brilliance in your hands — explore the world of gemstones with GemologyX.</p><div className="home-actions"><Link className="gold-pill" href="/gemstones">Explore Gemstones <ArrowRight size={15}/></Link><Link className="video-link" href="/about"><span>▶</span> Watch Video</Link></div>
          <form action="/search" className="home-search"><Search size={17}/><input name="q" placeholder="Search for gemstones, articles, or topics…"/><button aria-label="Search"><ArrowRight size={16}/></button></form>
        </div>
        <div className="home-highlights"><div><Gem/><span><b>1,000+</b><small>Articles &amp; Guides</small></span></div><div><BookOpen/><span><b>Expert Knowledge</b><small>&amp; Insights</small></span></div><div><Globe2/><span><b>Sri Lankan Heritage</b><small>in Gemstones</small></span></div><div><Microscope/><span><b>Tools &amp; Calculators</b></span></div></div>
      </div>
    </section>
    <section className="home-collection"><div className="container-page collection-grid"><div className="collection-intro"><h2>Explore Our<br/>Gemstone Collection</h2><p>A comprehensive encyclopedia of all major gemstones, with detailed information and stunning visuals.</p><Link href="/gemstones">Browse All Gemstones <ArrowRight size={13}/></Link></div>{featured.map((gem) => <Link key={gem.slug} href={`/gemstones/${gem.slug}`} className="collection-card"><div className={`collection-stone ${gemLooks[gem.slug] ?? "gem-sapphire"}`}><span/></div><b>{gem.name}</b><small>Explore →</small></Link>)}</div></section>
    <section className="sri-banner"><div className="sri-photo"/><div className="container-page sri-inner"><div><span className="home-kicker">Sri Lanka</span><h2>The Island of<br/>Extraordinary Gems</h2><p>Discover the rich gem heritage of Sri Lanka, from ancient mines to a global industry.</p><Link href="/sri-lanka">Explore Sri Lanka →</Link></div><div className="sri-outline">◌</div></div></section>
    <section className="home-learn"><div className="container-page"><div className="learn-heading"><div><h2>Learn, Explore &amp; Grow</h2><p>Educational resources for everyone — from beginners to experts.</p></div><Link href="/learn">View All Articles <ArrowRight size={13}/></Link></div><div className="learn-grid">{[
      ["How to Identify a Natural Sapphire", "/learn/sapphire/what-is-ceylon-sapphire", "sapphire-hero.svg", "Gemology"], ["Sri Lankan Gem Mining: A Rich Legacy", "/sri-lanka-mining", "tourmaline-san-diego.jpg", "Mining"], ["Ruby: Factors That Influence Value", "/gemstones/ruby", "ruby-gem-inclusions.jpg", "Valuation"], ["Your Guide to Buying Fine Gemstones", "/learn/buying-gemstones", "emerald-cut-gem.jpg", "Buying Guide"]
    ].map(([title, href, img, tag]) => <Link className="learn-card" href={href} key={title}><div className="learn-image"><Image src={`/images/gems/${img}`} alt="" fill sizes="(max-width: 600px) 44vw, (max-width: 1000px) 48vw, 25vw"/></div><div className="learn-content"><small>{tag}</small><b>{title}</b><span>Expert guide · Read more →</span></div></Link>)}</div></div></section>
    <section className="home-quicklinks"><div className="container-page">{[["Gemstone Identification","/learn"],["Price Guide & Valuation","/learn/buying-gemstones"],["Mining & Trade","/sri-lanka-mining"],["Interactive Calculators","/tools"],["Trusted Information","/editorial-standards"]].map(([title,href])=><Link key={title} href={href}><Sparkles size={18}/>{title}</Link>)}</div></section>
  </div>;
}

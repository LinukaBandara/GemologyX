import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, BookOpen, Compass, Gem, Globe2,
  Microscope, Ruler, Search, ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GemologyX — The science, origin and story of gemstones",
  description: "A considered guide to gemstones, gemological science, identification, treatments and Sri Lanka’s gem heritage. Explore clear, source-led English and Sinhala learning.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "GemologyX — The science, origin and story of gemstones",
    description: "Explore gemstone science, identification, treatments and Sri Lanka’s gem heritage.",
    type: "website",
  },
};

const gemstones = [
  { name: "Sapphire", detail: "Corundum · Mohs 9", href: "/gemstones/sapphire", image: "/images/suranga/blue-gem.svg", alt: "Blue sapphire visual from the Suranga Gems collection", note: "THE BLUE OF CEYLON", number: "01" },
  { name: "Ruby", detail: "Red corundum · Mohs 9", href: "/gemstones/ruby", image: "/images/suranga/pink-gem.svg", alt: "Ruby visual from the Suranga Gems collection", note: "THE RED VARIETY", number: "02" },
  { name: "Emerald", detail: "Beryl · Mohs 7.5–8", href: "/gemstones/emerald", image: "/images/suranga/green-gem.svg", alt: "Emerald visual from the Suranga Gems collection", note: "THE GREEN BERYL", number: "03" },
  { name: "Golden sapphire", detail: "Yellow corundum · Mohs 9", href: "/gemstones/sapphire", image: "/images/suranga/gold-gem.svg", alt: "Golden sapphire visual from the Suranga Gems collection", note: "A GOLDEN CORUNDUM", number: "04" },
];

const articles = [
  { no: "01", topic: "IDENTIFICATION", title: "Natural, synthetic or imitation?", text: "Understand the differences between geological origin, laboratory growth and look-alike materials—and why appearance alone is not enough.", href: "/learn/natural-vs-synthetic-gemstones", image: "/images/homepage/04_gem_inspection_gemologist_examining_sapphire.png", alt: "Gemologist examining a sapphire during a professional gem identification session" },
  { no: "02", topic: "TREATMENTS", title: "What has been done to the stone?", text: "Explore common gemstone enhancements, disclosure and how treatment can affect care, durability and value.", href: "/learn/gemstone-treatments", image: "/images/homepage/03_private_gem_atelier_inspection_setup_macro.png", alt: "Close-up of a professional gemstone inspection setup in a private gem atelier" },
  { no: "03", topic: "BUYING WITH CONFIDENCE", title: "Learn to read a gem report", text: "Find out what a laboratory report can establish, what it cannot, and which details deserve a closer look.", href: "/learn/how-to-read-a-gemstone-report", image: "/images/homepage/gem report.jpg", alt: "Gemological report and gemstone inspection tools arranged on a work surface" },
];

const pathways = [
  { icon: Microscope, title: "Identify & examine", text: "Learn about inclusions, refractive index, hardness and the instruments used in gem testing.", href: "/learn", link: "Explore gemology" },
  { icon: ShieldCheck, title: "Buy with confidence", text: "Understand reports, treatments, seller questions and the limits of visual inspection.", href: "/learn/buying-gemstones", link: "Explore buying guides" },
  { icon: Compass, title: "Understand origin", text: "Explore geological settings and why geographic origin requires specialist evidence.", href: "/origins", link: "Explore gem origins" },
  { icon: Ruler, title: "Work with practical tools", text: "Use measurement, carat conversion, gemstone size and hardness references.", href: "/tools", link: "Open the tool desk" },
];

export default function HomePage() {
  return (
    <main className="gx-pearl-home">
      <section className="gx-pearl-hero">
        <div className="gx-pearl-hero-inner container-page">
          <div className="gx-pearl-kicker"><span /> A REFERENCE FOR THE CURIOUS</div>
          <h1>The world of gems,<br /><em>made clearer.</em></h1>
          <p className="gx-pearl-intro">Explore the science behind gemstones, the stories of their origins and the knowledge that helps you look closer.</p>
          <form action="/search" role="search" className="gx-pearl-search">
            <Search size={17} aria-hidden="true" />
            <label className="sr-only" htmlFor="gx-pearl-search-input">Search GemologyX</label>
            <input id="gx-pearl-search-input" name="q" placeholder="Search a gemstone, treatment or topic…" />
            <button type="submit" aria-label="Search GemologyX"><ArrowUpRight size={18} /></button>
          </form>
          <div className="gx-pearl-hero-links">
            <Link href="/gemstones" className="gx-pearl-primary">Explore gemstones <ArrowUpRight size={16} /></Link>
            <Link href="/learn" className="gx-pearl-secondary">Start learning <ArrowRight size={15} /></Link>
          </div>
          <div className="gx-pearl-index"><span>GEMOLOGY · 01</span><span>Clear explanations. Source-led learning.</span></div>
        </div>
        <div className="gx-pearl-proof">
          <div className="container-page">
            <span><ShieldCheck /> Evidence before assumptions</span>
            <span><Microscope /> Gemological fundamentals</span>
            <span><Globe2 /> Global knowledge, Sri Lankan perspective</span>
            <span><BookOpen /> English & Sinhala learning</span>
          </div>
        </div>
      </section>

      <section className="gx-pearl-section gx-pearl-library">
        <div className="container-page">
          <div className="gx-pearl-heading">
            <div><div className="gx-pearl-kicker"><span /> THE GEMSTONE LIBRARY</div><h2>Begin with<br /><em>the stone itself.</em></h2></div>
            <div className="gx-pearl-heading-aside"><p>Explore profiles through mineral identity, colour, physical properties, treatments, origins and care.</p><Link href="/gemstones">Browse the gemstone directory <ArrowUpRight size={15} /></Link></div>
          </div>
          <div className="gx-pearl-gem-gallery">
            {gemstones.map((gem, i) => (
              <Link href={gem.href} key={gem.name} className={`gx-pearl-gem-card gx-pearl-gem-card-${i + 1}`}>
                <div className="gx-pearl-gem-art"><Image src={gem.image} alt={gem.alt} fill sizes="(max-width: 640px) 48vw, (max-width: 980px) 46vw, 34vw" /><span>{gem.number}</span><i><ArrowUpRight size={18} /></i></div>
                <div className="gx-pearl-gem-copy"><div className="gx-pearl-gem-note">{gem.note}</div><h3>{gem.name}</h3><div className="gx-pearl-gem-detail">{gem.detail}</div></div>
              </Link>
            ))}
          </div>
          <p className="gx-pearl-disclosure">Visuals from the Suranga Gems collection, presented for editorial illustration. Gem identity, treatment, quality and geographic origin require appropriate gemological evidence.</p>
        </div>
      </section>

      <section className="gx-pearl-section gx-pearl-journal">
        <div className="container-page">
          <div className="gx-pearl-heading">
            <div><div className="gx-pearl-kicker"><span /> THE GEMOLOGY JOURNAL</div><h2>Look beyond<br /><em>what you see.</em></h2></div>
            <div className="gx-pearl-heading-aside"><p>Build a stronger understanding of gemstones through carefully structured guides and practical explanations.</p><Link href="/learn">Explore all learning guides <ArrowUpRight size={15} /></Link></div>
          </div>
          <div className="gx-pearl-article-grid">
            {articles.map(article => (
              <Link href={article.href} key={article.no} className="gx-pearl-article">
                <div className="gx-pearl-article-art"><Image src={article.image} alt={article.alt} fill sizes="(max-width: 700px) 100vw, 33vw" /><span>{article.no}</span></div>
                <div className="gx-pearl-article-body"><div className="gx-pearl-topic">{article.topic}</div><h3>{article.title}</h3><p>{article.text}</p><span className="gx-pearl-read">Read the guide <ArrowUpRight size={15} /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="gx-pearl-sri">
        <div className="container-page gx-pearl-sri-inner">
          <div className="gx-pearl-sri-mark">
            <div className="gx-pearl-sri-photo">
              <Image src="/images/homepage/Sri lanka.jpg" alt="Sri Lankan gem heritage and landscape" fill sizes="(max-width: 760px) 100vw, 38vw" />
            </div>
            <span>06° 41′ N&nbsp; / &nbsp;80° 23′ E</span><small>THE ISLAND OF GEMS</small>
          </div>
          <div className="gx-pearl-sri-copy"><div className="gx-pearl-kicker"><span /> A SRI LANKAN GEM REFERENCE</div><h2>Rooted in the island.<br /><em>Connected to the world.</em></h2><p>Explore Sri Lanka’s gem regions, mining traditions, geological context, local trade language and export pathways—with a clear distinction between documented facts and trade claims.</p>
            <div className="gx-pearl-tags"><Link href="/origins/sri-lanka">Sri Lanka origins <ArrowUpRight /></Link><Link href="/sri-lanka">Gem heritage <ArrowUpRight /></Link><Link href="/sri-lanka-mining">Mining & environment <ArrowUpRight /></Link><Link href="/sri-lanka-trade-export">Trade & export <ArrowUpRight /></Link></div>
            <div className="gx-pearl-sri-actions"><Link href="/sri-lanka" className="gx-pearl-primary">Explore the Sri Lanka hub <ArrowUpRight size={16} /></Link><Link href="/si/learn" className="gx-pearl-secondary">සිංහල දැනුම් මධ්‍යස්ථානය <ArrowUpRight size={15} /></Link></div>
          </div>
        </div>
      </section>

      <section className="gx-pearl-section gx-pearl-paths">
        <div className="container-page">
          <div className="gx-pearl-heading gx-pearl-path-heading"><div><div className="gx-pearl-kicker"><span /> FIND YOUR NEXT STEP</div><h2>Explore with <em>purpose.</em></h2></div><p>Whether you are learning the basics or researching a specific stone, follow a path built around what you need to understand.</p></div>
          <div className="gx-pearl-path-grid">{pathways.map(({ icon: Icon, title, text, href, link }, i) => <Link href={href} key={title} className="gx-pearl-path-card"><div><span>0{i + 1}</span><Icon size={20} /></div><h3>{title}</h3><p>{text}</p><b>{link} <ArrowUpRight size={15} /></b></Link>)}</div>
        </div>
      </section>

      <section className="gx-pearl-tools">
        <div className="container-page gx-pearl-tools-inner"><div><div className="gx-pearl-kicker"><span /> THE PRACTICAL DESK</div><h2>Knowledge,<br /><em>put to work.</em></h2><p>Use reference tools alongside your learning. Calculators and charts are educational aids—not substitutes for gemological testing.</p></div>
          <div className="gx-pearl-tool-list"><Link href="/tools/carat-to-gram"><span>01</span><strong>Carat to gram converter</strong><ArrowUpRight /></Link><Link href="/tools/gemstone-size"><span>02</span><strong>Gemstone size guide</strong><ArrowUpRight /></Link><Link href="/tools/mohs-hardness"><span>03</span><strong>Mohs hardness reference</strong><ArrowUpRight /></Link><Link href="/tools"><span>04</span><strong>All tools & calculators</strong><ArrowUpRight /></Link></div>
        </div>
      </section>

      <section className="gx-pearl-end"><div className="container-page"><div className="gx-pearl-kicker"><span /> KEEP EXPLORING</div><h2>Curiosity is where<br /><em>understanding begins.</em></h2><p>Discover the science, explore the stories and build a more informed understanding of the world’s gemstones.</p><div><Link href="/gemstones" className="gx-pearl-primary">Enter the gemstone library <ArrowUpRight size={16} /></Link><Link href="/about" className="gx-pearl-secondary">About GemologyX <ArrowRight size={15} /></Link></div></div></section>
    </main>
  );
}

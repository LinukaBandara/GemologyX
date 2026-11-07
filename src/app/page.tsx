import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Compass,
  Gem,
  Globe2,
  Microscope,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "GemologyX — Understand the Science Behind Every Gem",
  description:
    "Explore gemstone science, identification, treatments, origins and Sri Lanka’s gem heritage through clear, source-led guides, practical tools and a growing gemstone reference library.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "GemologyX — Understand the Science Behind Every Gem",
    description:
      "A thoughtful guide to gemstones, gemological science and Sri Lanka’s gem heritage.",
    type: "website",
  },
};

const gemstoneCards = [
  {
    name: "Sapphire",
    note: "Corundum · Mohs 9",
    href: "/gemstones/sapphire",
    image: "/images/gems/sapphire-crystals-montana-02.jpg",
    alt: "Natural rough sapphire crystals from the Smithsonian collection, Montana, USA",
    caption: "Smithsonian · CC0 · Montana, USA",
    className: "gx-home-gem-sapphire",
  },
  {
    name: "Ruby",
    note: "Red corundum · Mohs 9",
    href: "/gemstones/ruby",
    image: "/images/gems/ruby-gem-inclusions.jpg",
    alt: "Faceted ruby showing internal inclusions",
    caption: "Humanfeather · CC BY 3.0",
    className: "gx-home-gem-ruby",
  },
  {
    name: "Emerald",
    note: "Beryl · Mohs 7.5–8",
    href: "/gemstones/emerald",
    image: "/images/gems/emerald-cut-gem.jpg",
    alt: "Faceted green gemstone described by its source as an emerald",
    caption: "Gaumania · CC0 1.0",
    className: "gx-home-gem-emerald",
  },
  {
    name: "Amethyst",
    note: "Quartz · Mohs 7",
    href: "/gemstones/amethyst",
    image: "/images/gems/amethyst-crystals.jpg",
    alt: "Close view of purple amethyst crystals",
    caption: "Lisa Ann Yount · CC0 1.0",
    className: "gx-home-gem-amethyst",
  },
];

const learningCards = [
  {
    number: "01",
    eyebrow: "IDENTIFICATION",
    title: "Natural, synthetic or imitation?",
    description:
      "Understand the differences between geological origin, laboratory growth and look-alike materials—and why appearance alone is not enough.",
    href: "/learn/natural-vs-synthetic-gemstones",
    image: "/images/gems/sapphire-crystals-montana-01.jpg",
    alt: "Rough sapphire crystals from the Smithsonian collection, Montana, USA",
  },
  {
    number: "02",
    eyebrow: "TREATMENTS",
    title: "What has been done to the stone?",
    description:
      "Explore common gemstone enhancements, what disclosure means and how treatment can affect care, durability and value.",
    href: "/learn/gemstone-treatments",
    image: "/images/gems/ruby-gem-inclusions.jpg",
    alt: "Ruby photograph by Humanfeather, showing internal inclusions",
  },
  {
    number: "03",
    eyebrow: "BUYING WITH CONFIDENCE",
    title: "Learn to read a gem report",
    description:
      "Find out what a laboratory report can establish, what it cannot, and which details deserve a closer look before a purchase.",
    href: "/learn/how-to-read-a-gemstone-report",
    image: "/images/gems/emerald-cut-gem.jpg",
    alt: "Faceted green gemstone described by its source as an emerald",
  },
];

const pathways = [
  {
    icon: Microscope,
    title: "Identify & examine",
    text: "Learn about inclusions, refractive index, hardness and the instruments used in gem testing.",
    href: "/learn",
    link: "Explore gemology",
  },
  {
    icon: ShieldCheck,
    title: "Buy more carefully",
    text: "Understand reports, treatments, seller questions and the limits of visual inspection.",
    href: "/learn/buying-gemstones",
    link: "Explore buying guides",
  },
  {
    icon: Compass,
    title: "Understand origin",
    text: "Explore geological settings and why geographic origin requires specialist evidence.",
    href: "/origins",
    link: "Explore gem origins",
  },
  {
    icon: Ruler,
    title: "Use practical tools",
    text: "Work with measurement, carat conversion, gemstone size and hardness references.",
    href: "/tools",
    link: "Open the tool desk",
  },
];

export default function HomePage() {
  return (
    <main className="gx-home-v2">
      <section className="gx-v2-hero">
        <div className="gx-v2-hero-glow" aria-hidden="true" />
        <div className="container-page gx-v2-hero-grid">
          <div className="gx-v2-hero-copy">
            <div className="gx-v2-eyebrow"><span /> THE SCIENCE · THE ORIGIN · THE GEM</div>
            <h1>Look closer.<br /><em>Understand</em> more.</h1>
            <p className="gx-v2-hero-lede">
              A deeper guide to the world of gemstones—from mineral science and identification to treatments, origins and Sri Lanka’s remarkable gem heritage.
            </p>
            <div className="gx-v2-hero-actions">
              <Link href="/gemstones" className="gx-v2-button gx-v2-button-gold">
                Explore gemstones <ArrowUpRight size={16} />
              </Link>
              <Link href="/learn" className="gx-v2-text-link">
                Start learning <ArrowRight size={15} />
              </Link>
            </div>
            <form action="/search" className="gx-v2-search" role="search">
              <Sparkles size={17} aria-hidden="true" />
              <label className="sr-only" htmlFor="gx-home-search">Search GemologyX</label>
              <input id="gx-home-search" name="q" placeholder="Search a gemstone, treatment or topic…" />
              <button type="submit" aria-label="Search"><ArrowUpRight size={17} /></button>
            </form>
            <div className="gx-v2-hero-footnote">
              <span>01 / REFERENCE</span>
              <span>Clear explanations. Source-led learning.</span>
            </div>
          </div>

          <div className="gx-v2-hero-visual">
            <div className="gx-v2-hero-photo">
              <Image
                src="/images/gems/sapphire-crystals-montana-01.jpg"
                alt="Rough sapphire crystals from the Smithsonian National Museum of Natural History collection, Montana, USA"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 54vw"
              />
              <div className="gx-v2-photo-shade" />
              <div className="gx-v2-photo-label">
                <span>SPECIMEN STUDY · 001</span>
                <strong>Sapphire in its natural form</strong>
                <small>Smithsonian collection · Montana, USA</small>
              </div>
            </div>
            <div className="gx-v2-floating-note">
              <span className="gx-v2-note-mark"><Gem size={17} /></span>
              <span><strong>Beyond the sparkle</strong><small>Explore the science inside the stone.</small></span>
            </div>
            <div className="gx-v2-image-index">GEMOLOGYX / FIELD NOTES</div>
          </div>
        </div>
        <div className="gx-v2-hero-bottom">
          <div className="container-page gx-v2-proof-row">
            <span><ShieldCheck size={16} /> Evidence before assumptions</span>
            <span><Microscope size={16} /> Gemological fundamentals</span>
            <span><Globe2 size={16} /> Global knowledge, Sri Lankan perspective</span>
            <span><BookOpen size={16} /> English & Sinhala learning</span>
          </div>
        </div>
      </section>

      <section className="gx-v2-gem-section">
        <div className="container-page">
          <div className="gx-v2-section-heading">
            <div>
              <div className="gx-v2-eyebrow gx-v2-eyebrow-dark"><span /> THE GEMSTONE LIBRARY</div>
              <h2>Every stone has<br /><em>a story to tell.</em></h2>
            </div>
            <div className="gx-v2-heading-aside">
              <p>Explore gemstone profiles through their mineral identity, colour, properties, treatments, origins and care.</p>
              <Link href="/gemstones" className="gx-v2-inline-link">Browse the full directory <ArrowUpRight size={15} /></Link>
            </div>
          </div>
          <div className="gx-v2-gem-grid">
            {gemstoneCards.map((gem, index) => (
              <Link href={gem.href} className="gx-v2-gem-card" key={gem.name}>
                <div className="gx-v2-gem-image">
                  <Image src={gem.image} alt={gem.alt} fill sizes="(max-width: 640px) 48vw, (max-width: 1000px) 48vw, 25vw" />
                  <span className="gx-v2-gem-number">0{index + 1}</span>
                  <span className="gx-v2-gem-arrow"><ArrowUpRight size={17} /></span>
                </div>
                <div className="gx-v2-gem-meta"><span>{gem.note}</span><small>{gem.caption}</small></div>
                <h3>{gem.name}</h3>
              </Link>
            ))}
          </div>
          <p className="gx-v2-image-disclosure">Photographs are identified by their source records. A specimen image illustrates the material shown; it does not establish the identity, treatment, quality or origin of another gemstone.</p>
        </div>
      </section>

      <section className="gx-v2-editorial-section">
        <div className="container-page">
          <div className="gx-v2-section-heading gx-v2-section-heading-light">
            <div>
              <div className="gx-v2-eyebrow"><span /> THE GEMOLOGY JOURNAL</div>
              <h2>Knowledge that goes<br /><em>beneath the surface.</em></h2>
            </div>
            <div className="gx-v2-heading-aside">
              <p>Start with the questions that matter: what is the material, what has changed it, and what can reliable evidence tell you?</p>
              <Link href="/learn" className="gx-v2-inline-link gx-v2-inline-link-light">Explore all learning guides <ArrowUpRight size={15} /></Link>
            </div>
          </div>
          <div className="gx-v2-editorial-grid">
            {learningCards.map((card) => (
              <Link href={card.href} key={card.number} className="gx-v2-editorial-card">
                <div className="gx-v2-editorial-image">
                  <Image src={card.image} alt={card.alt} fill sizes="(max-width: 700px) 100vw, 33vw" />
                  <span>{card.number}</span>
                </div>
                <div className="gx-v2-editorial-content">
                  <div className="gx-v2-card-eyebrow">{card.eyebrow}</div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <small className="gx-v2-photo-credit">{card.credit}</small>\n                  <span className="gx-v2-card-read">Read the guide <ArrowUpRight size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="gx-v2-sri-section">
        <div className="container-page gx-v2-sri-grid">
          <div className="gx-v2-sri-art" aria-hidden="true">
            <div className="gx-v2-sri-orbit gx-v2-sri-orbit-one" />
            <div className="gx-v2-sri-orbit gx-v2-sri-orbit-two" />
            <div className="gx-v2-sri-gem"><Gem size={76} strokeWidth={0.8} /></div>
            <span className="gx-v2-sri-coord">06° 41′ N<br />80° 23′ E</span>
            <span className="gx-v2-sri-art-caption">THE ISLAND OF GEMS</span>
          </div>
          <div className="gx-v2-sri-copy">
            <div className="gx-v2-eyebrow gx-v2-eyebrow-dark"><span /> A SRI LANKAN GEM REFERENCE</div>
            <h2>Rooted in the island.<br /><em>Connected to the world.</em></h2>
            <p>Explore Sri Lanka’s gem regions, mining traditions, geological context, local trade language and export pathways—while learning to separate documented facts from trade claims.</p>
            <div className="gx-v2-sri-tags">
              <Link href="/origins/sri-lanka">Sri Lanka origins <ArrowUpRight size={13} /></Link>
              <Link href="/sri-lanka">Gem heritage <ArrowUpRight size={13} /></Link>
              <Link href="/sri-lanka-mining">Mining & environment <ArrowUpRight size={13} /></Link>
              <Link href="/sri-lanka-trade-export">Trade & export <ArrowUpRight size={13} /></Link>
            </div>
            <div className="gx-v2-sri-bottom">
              <Link href="/sri-lanka" className="gx-v2-button gx-v2-button-dark">Explore the Sri Lanka hub <ArrowUpRight size={16} /></Link>
              <Link href="/si/learn" className="gx-v2-sinhala-link">සිංහල දැනුම් මධ්‍යස්ථානය <ArrowUpRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="gx-v2-pathways-section">
        <div className="container-page">
          <div className="gx-v2-pathway-heading">
            <div>
              <div className="gx-v2-eyebrow gx-v2-eyebrow-dark"><span /> FIND YOUR NEXT STEP</div>
              <h2>Explore with <em>purpose.</em></h2>
            </div>
            <p>Whether you are learning the basics or researching a specific stone, follow a path built around what you need to understand.</p>
          </div>
          <div className="gx-v2-pathway-grid">
            {pathways.map(({ icon: Icon, title, text, href, link }, index) => (
              <Link href={href} key={title} className="gx-v2-pathway-card">
                <div className="gx-v2-pathway-top"><span>0{index + 1}</span><Icon size={21} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="gx-v2-pathway-link">{link} <ArrowUpRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="gx-v2-tools-band">
        <div className="container-page gx-v2-tools-inner">
          <div>
            <div className="gx-v2-eyebrow"><span /> THE PRACTICAL DESK</div>
            <h2>Put the knowledge<br /><em>to work.</em></h2>
            <p>Use simple reference tools alongside your learning. Calculators and charts are educational aids—not substitutes for gemological testing.</p>
          </div>
          <div className="gx-v2-tool-links">
            <Link href="/tools/carat-to-gram"><span>01</span><strong>Carat to gram converter</strong><ArrowUpRight size={16} /></Link>
            <Link href="/tools/gemstone-size"><span>02</span><strong>Gemstone size guide</strong><ArrowUpRight size={16} /></Link>
            <Link href="/tools/mohs-hardness"><span>03</span><strong>Mohs hardness reference</strong><ArrowUpRight size={16} /></Link>
            <Link href="/tools"><span>04</span><strong>All tools & calculators</strong><ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="gx-v2-final-cta">
        <div className="container-page gx-v2-final-cta-inner">
          <div className="gx-v2-eyebrow gx-v2-eyebrow-dark"><span /> START EXPLORING</div>
          <h2>The more you know,<br /><em>the more you see.</em></h2>
          <p>Explore the science, discover the stories and build a more informed understanding of the world’s gemstones.</p>
          <div className="gx-v2-hero-actions">
            <Link href="/gemstones" className="gx-v2-button gx-v2-button-dark">Enter the gemstone library <ArrowUpRight size={16} /></Link>
            <Link href="/about" className="gx-v2-text-link gx-v2-text-link-dark">About GemologyX <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

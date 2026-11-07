import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Gem,
  Microscope,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Learn Gemology",
  description:
    "Explore practical gemology guides, gemstone science, buying knowledge and Sri Lankan gem industry insights in English and Sinhala.",
  alternates: { canonical: "/learn" },
};

const sinhalaGuides = [
  { title: "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම", description: "දේශීය වෙළෙඳපොළ, කර්මාන්තයේ භූමිකා සහ මෙරට මැණික් ගමන් කරන මාර්ග.", href: "/si/learn/sri-lanka-gem-trade-intro", readTime: "මිනිත්තු 7" },
  { title: "ශ්‍රී ලංකාවේ මැණික් පද", description: "Geuda සහ දේශීය වෙළෙඳාමේ භාවිත වන පද.", href: "/si/learn/sri-lanka-gem-terms", readTime: "මිනිත්තු 7" },
  { title: "ශ්‍රී ලංකාවේ නිල්මැණික්", description: "Sapphire, Ceylon නාමය සහ origin claims.", href: "/si/learn/sri-lankan-blue-sapphire", readTime: "මිනිත්තු 5" },
  { title: "‘Ceylon Sapphire’ යන්නෙහි අර්ථය", description: "වෙළෙඳ නාමය සහ laboratory origin opinion අතර වෙනස.", href: "/si/learn/what-ceylon-means", readTime: "මිනිත්තු 6" },
  { title: "Geuda ගැනුම් මාර්ගෝපදේශය", description: "රළු ගල්, තාප ප්‍රතිකාර සහ මිලදී ගැනීමේ සීමා.", href: "/si/learn/buying-geuda", readTime: "මිනිත්තු 6" },
  { title: "ශ්‍රී ලංකාවේ මැණික් මිලදී ගැනීම", description: "ලේඛන, ස්වාධීන පරීක්ෂාව සහ දැනුවත් පියවර.", href: "/si/learn/sri-lanka-buying-day-tips", readTime: "මිනිත්තු 7" },
  { title: "ශ්‍රී ලංකාවේ වෙළෙඳුන්ගේ භූමිකා", description: "Rough sellers, cutters, brokers සහ retailers.", href: "/si/learn/sri-lanka-dealer-types", readTime: "මිනිත්තු 6" },
  { title: "ශ්‍රී ලංකාවේ මැණික් වාර්තා කියවීම", description: "NGJA වාර්තා, තහවුරු කිරීම සහ වාර්තාවක සීමා.", href: "/si/learn/how-to-read-gem-report", readTime: "මිනිත්තු 8" },
  { title: "මැණික් අපනයනයේ මූලික කරුණු", description: "නිල ක්‍රියාවලිය ගැන හැඳින්වීමක්; නවතම නියම NGJA වෙතින් තහවුරු කරන්න.", href: "/si/learn/export-documents-intro", readTime: "මිනිත්තු 6" },
] as const;

const categories = [
  {
    name: "Sapphire & coloured gems",
    eyebrow: "THE GEMSTONES",
    number: "01",
    description: "Understand the stones, their colour, identity, treatments and what makes each one distinctive.",
    icon: Gem,
    links: [
      ["What Is Ceylon Sapphire?", "/learn/sapphire/what-is-ceylon-sapphire"],
      ["What Makes a Sapphire Valuable?", "/learn/sapphire/sapphire-value-factors"],
      ["Natural vs Synthetic Sapphire", "/learn/natural-vs-synthetic-gemstones"],
      ["Heated vs Unheated Sapphire", "/learn/heated-vs-unheated"],
      ["Explore the gemstone directory", "/gemstones"],
    ],
  },
  {
    name: "Gemstone essentials",
    eyebrow: "FOUNDATIONS",
    number: "02",
    description: "Build a confident foundation in gemstone identity, durability, care and treatments.",
    icon: BookOpen,
    links: [
      ["Natural vs Synthetic Gemstones", "/learn/natural-vs-synthetic-gemstones"],
      ["Heated vs Unheated Gemstones", "/learn/heated-vs-unheated"],
      ["Interactive Gemstone Treatment Guide", "/learn/gemstone-treatments"],
      ["How to Care for Gemstones", "/learn/gemstone-care"],
    ],
  },
  {
    name: "Buying with confidence",
    eyebrow: "THE BUYER'S DESK",
    number: "03",
    description: "Learn how reports, disclosure, pricing and the right questions help protect a purchase.",
    icon: ShieldCheck,
    links: [
      ["How Gemstone Certification Works", "/learn/gemstone-certification"],
      ["How to Read a Gemstone Report", "/learn/how-to-read-a-gemstone-report"],
      ["Treatment Disclosure and Reports", "/learn/gemstone-treatments/treatment-disclosure"],
      ["Questions to Ask a Gem Dealer", "/learn/questions-to-ask-gem-dealer"],
      ["Interactive Gemstone Buyer’s Desk", "/learn/buying-gemstones"],
      ["Buy Gemstones Online", "/learn/buying-gemstones/buying-gemstones-online"],
      ["Gemstone Price per Carat", "/learn/buying-gemstones/gemstone-price-per-carat"],
    ],
  },
  {
    name: "Gemology in the lab",
    eyebrow: "SCIENCE & INSTRUMENTS",
    number: "04",
    description: "Explore optical properties, identification methods and the instruments used by gemologists.",
    icon: Microscope,
    links: [
      ["Mohs Hardness Scale", "/tools/mohs-hardness"],
      ["What Is Refractive Index?", "/learn/refractive-index"],
      ["Gemstone Cut & Light Lab", "/learn/gemstone-cut"],
      ["Gem Formation Explorer", "/learn/gem-formation"],
      ["How to Use a Gem Loupe", "/learn/using-a-gem-loupe"],
      ["Using a Microscope in Gemology", "/learn/gemstone-microscope-guide"],
      ["How a Gem Refractometer Works", "/learn/gemstone-refractometer-guide"],
      ["Using a Polariscope", "/learn/using-a-polariscope"],
      ["Using a Spectroscope", "/learn/gemstone-spectroscope-guide"],
      ["Specific Gravity & Hydrostatic Weighing", "/learn/specific-gravity-guide"],
      ["Using a Dichroscope", "/learn/dichroscope-guide"],
      ["Observing Gemstones Under UV Light", "/learn/uv-fluorescence-guide"],
      ["What Is Pleochroism?", "/glossary/pleochroism"],
    ],
  },
] as const;

const totalGuides = categories.reduce((sum, category) => sum + category.links.length, 0);

export default function LearnPage() {
  return (
    <main className="gx-learning-library">
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://gemologyx.com/" }, { name: "Learn Gemology", url: "https://gemologyx.com/learn" }]} />
      <section className="gx-learning-hero">
        <div className="gx-learning-hero-inner">
          <div className="gx-learning-hero-copy">
            <p className="gx-learning-kicker"><span /> THE GEMOLOGYX KNOWLEDGE LIBRARY</p>
            <h1>Look closer.<br /><em>Understand</em> more.</h1>
            <p className="gx-learning-lede">
              A considered guide to the world of gemstones — from the science inside a crystal to the knowledge behind a confident purchase.
            </p>
            <div className="gx-learning-hero-actions">
              <a href="#learning-paths" className="gx-learning-primary">Explore learning paths <ArrowRight size={16} /></a>
              <a href="#sinhala-library" className="gx-learning-text-link">සිංහලෙන් ඉගෙන ගන්න <ArrowUpRight size={15} /></a>
            </div>
            <div className="gx-learning-stats">
              <div><strong>{totalGuides.toString().padStart(2, "0")}</strong><span>Curated English guides</span></div>
              <div><strong>{sinhalaGuides.length.toString().padStart(2, "0")}</strong><span>Sinhala guides</span></div>
              <div><strong>02</strong><span>Languages</span></div>
            </div>
          </div>
          <div className="gx-learning-hero-visual">
            <Image
              src="/images/homepage/04_gem_inspection_gemologist_examining_sapphire.png"
              alt="A gemologist examining a sapphire with professional inspection equipment"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 48vw"
            />
            <div className="gx-learning-image-caption">
              <span>01 / THE ART OF EXAMINATION</span>
              <span>Observe · Compare · Understand</span>
            </div>
          </div>
        </div>
        <div className="gx-learning-hero-foot">
          <span>KNOWLEDGE, SCIENCE, INTEGRITY</span>
          <span>AN OPEN LEARNING RESOURCE <i>✳</i></span>
        </div>
      </section>

      <section id="learning-paths" className="gx-learning-paths">
        <div className="gx-learning-section-intro">
          <div>
            <p className="gx-learning-eyebrow">CHOOSE YOUR STARTING POINT</p>
            <h2>Explore by <em>interest.</em></h2>
          </div>
          <p>Whether you are beginning to learn, comparing a gemstone or studying identification, start with the subject that matters to you.</p>
        </div>

        <div className="gx-learning-path-grid">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <article className="gx-learning-path" key={category.number}>
                <div className="gx-learning-path-top">
                  <span className="gx-learning-number">{category.number}</span>
                  <Icon size={21} strokeWidth={1.35} />
                </div>
                <p className="gx-learning-eyebrow">{category.eyebrow}</p>
                <h3>{category.name}</h3>
                <p className="gx-learning-path-description">{category.description}</p>
                <div className="gx-learning-path-links">
                  {category.links.map(([label, href]) => (
                    <Link href={href} key={href}>
                      <span>{label}</span><ArrowUpRight size={15} />
                    </Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="sinhala-library" className="gx-learning-sinhala">
        <div className="gx-learning-sinhala-image">
          <Image
            src="/images/homepage/Sri lanka.jpg"
            alt="Landscape in Sri Lanka, the home of Ceylon gemstones"
            fill
            sizes="(max-width: 800px) 100vw, 42vw"
          />
          <span>GEM KNOWLEDGE · SRI LANKA</span>
        </div>
        <div className="gx-learning-sinhala-copy">
          <p className="gx-learning-eyebrow">THE SRI LANKAN COLLECTION · සිංහල</p>
          <h2>මැණික් ලෝකය,<br /><em>සිංහලෙන්.</em></h2>
          <p className="gx-learning-sinhala-lede">
            ශ්‍රී ලංකාවේ මැණික්, පතල් කර්මාන්තය, වෙළෙඳාම, සහ මිලදී ගැනීම පිළිබඳ දැනුම — සිංහලෙන්, පැහැදිලිව සහ වගකීමෙන්.
          </p>
          <Link href="/si/learn" className="gx-learning-sinhala-cta">සිංහල පුස්තකාලයට පිවිසෙන්න <ArrowUpRight size={16} /></Link>
          <div className="gx-learning-sinhala-list">
            {sinhalaGuides.slice(0, 4).map((guide, index) => (
              <Link href={guide.href} key={guide.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{guide.title}</strong>
                <ArrowUpRight size={15} />
              </Link>
            ))}
          </div>
          <p className="gx-learning-more-sinhala"><Link href="/si/learn">Explore all {sinhalaGuides.length} featured Sinhala guides <ArrowRight size={14} /></Link></p>
        </div>
      </section>

      <section className="gx-learning-featured">
        <div className="gx-learning-featured-image">
          <Image
            src="/images/homepage/03_private_gem_atelier_inspection_setup_macro.png"
            alt="Close-up of a professional gemstone inspection setup"
            fill
            sizes="(max-width: 800px) 100vw, 42vw"
          />
        </div>
        <div className="gx-learning-featured-copy">
          <p className="gx-learning-eyebrow">BEYOND THE READING</p>
          <h2>Knowledge you can <em>put to work.</em></h2>
          <p>Take what you learn into practical reference tools for gemstone measurements, optical properties, colour and identification.</p>
          <div className="gx-learning-featured-links">
            <Link href="/tools">Explore gemology tools <ArrowUpRight size={16} /></Link>
            <Link href="/equipment">Meet the instruments <ArrowUpRight size={16} /></Link>
            <Link href="/gemstones">Browse gemstone profiles <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <footer className="gx-learning-footer">
        <Sparkles size={18} strokeWidth={1.4} />
        <p>Good gemology begins with careful observation — and the habit of asking better questions.</p>
        <span>GEMOLOGYX · LEARN WITH CLARITY</span>
      </footer>
    </main>
  );
}

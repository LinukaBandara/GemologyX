import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Gem } from "lucide-react";

export const metadata: Metadata = {
  title: "Learn Gemology | GemologyX",
  description:
    "Explore general gemology reference guides in English, plus a dedicated Sinhala collection about Sri Lankan gems, trade and local knowledge.",
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
    name: "Sapphire",
    label: "01",
    items: [
      ["What Is Ceylon Sapphire?", "/learn/sapphire/what-is-ceylon-sapphire"],
      ["What Makes a Sapphire Valuable?", "/learn/sapphire/sapphire-value-factors"],
      ["Natural vs Synthetic Sapphire", "/learn/natural-vs-synthetic-gemstones"],
      ["Heated vs Unheated Sapphire", "/learn/heated-vs-unheated"],
      ["Padparadscha in the gemstone directory", "/gemstones"],
    ],
  },
  {
    name: "Gemstone Basics",
    label: "02",
    items: [
      ["Natural vs Synthetic Gemstones", "/learn/natural-vs-synthetic-gemstones"],
      ["Heated vs Unheated Gemstones", "/learn/heated-vs-unheated"],
      ["Interactive Gemstone Treatment Guide", "/learn/gemstone-treatments"],
      ["How to Care for Gemstones", "/learn/gemstone-care"],
    ],
  },
  {
    name: "Buying Guides",
    label: "03",
    items: [
      ["How Gemstone Certification Works", "/learn/gemstone-certification"],
      ["How to Read a Gemstone Report", "/learn/how-to-read-a-gemstone-report"],
      ["Treatment Disclosure and Reports", "/learn/gemstone-treatments/treatment-disclosure"],
      ["How to Care for Gemstones", "/learn/gemstone-care"],
      ["Questions to Ask a Gem Dealer", "/learn/questions-to-ask-gem-dealer"],
      ["Interactive Gemstone Buyer’s Desk", "/learn/buying-gemstones"],
      ["Buy Gemstones Online", "/learn/buying-gemstones/buying-gemstones-online"],
      ["Gemstone Price per Carat", "/learn/buying-gemstones/gemstone-price-per-carat"],
    ],
  },
  {
    name: "Science",
    label: "04",
    items: [
      ["What Is the Mohs Hardness Scale?", "/tools/mohs-hardness"],
      ["What Is Refractive Index?", "/learn/refractive-index"],
      ["Interactive Gemstone Cut & Light Lab", "/learn/gemstone-cut"],
      ["Interactive Gem Formation Explorer", "/learn/gem-formation"],
      ["How to Use a Gem Loupe", "/learn/using-a-gem-loupe"],
      ["Using a Microscope in Gemology", "/learn/gemstone-microscope-guide"],
      ["How a Gem Refractometer Works", "/learn/gemstone-refractometer-guide"],
      ["Using a Polariscope in Gemology", "/learn/using-a-polariscope"],
        ["Using a Spectroscope in Gemology", "/learn/gemstone-spectroscope-guide"],
        ["Specific Gravity and Hydrostatic Weighing", "/learn/specific-gravity-guide"],
        ["Using a Dichroscope in Gemology", "/learn/dichroscope-guide"],
        ["Observing Gemstones Under UV Light", "/learn/uv-fluorescence-guide"],
      ["What Is Pleochroism?", "/glossary/pleochroism"],
    ],
  },
] as const;

export default function LearnPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <header className="directory-hero">
        <div className="luxury-eyebrow"><span /> THE GEMOLOGY JOURNAL</div>
        <h1>Learn Gemology</h1>
        <p>
          Clear, practical global gemology guides in English, alongside a dedicated Sinhala collection about Sri Lankan gems, trade, and local knowledge.
        </p>
        <div className="directory-rule">
          <span /> ENGLISH GLOBAL LIBRARY · සිංහල SRI LANKA COLLECTION <span />
        </div>
      </header>

      <section className="learn-sinhala mt-10" aria-labelledby="sinhala-guides-title">
        <div className="learn-section-heading">
          <span>සිං</span>
          <h2 id="sinhala-guides-title">ශ්‍රී ලංකාව ගැන සිංහල දැනුම ({sinhalaGuides.length})</h2>
        </div>
        <p className="mb-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">
          ශ්‍රී ලංකාවේ මැණික්, දේශීය වෙළෙඳාම, පද, වාර්තා සහ මෙරටදී ගැනුම් ගැන පමණක් සිංහලෙන්. ජාත්‍යන්තර මැණික් විද්‍යා මාතෘකා සඳහා පහත ඉංග්‍රීසි පුස්තකාලය භාවිත කරන්න.
        </p>
        <div className="mb-5 flex items-center justify-between gap-3 rounded-xl bg-teal-soft p-4 text-sm">
          <span>ශ්‍රී ලංකාවට අදාළ සිංහල මාර්ගෝපදේශ සියල්ල</span>
          <Link href="/si/learn" className="inline-flex items-center gap-1 font-semibold text-accent">සිංහල අංශයට යන්න <ArrowUpRight size={14} /></Link>
        </div>
        <div className="learn-list">
          {sinhalaGuides.map((guide, i) => (
            <Link key={guide.href} href={guide.href} className="learn-item">
              <span className="learn-index">{String(i + 1).padStart(2, "0")}</span>
              <span className="min-w-0 flex-1">
                <span className="block">{guide.title}</span>
                <span className="mt-1 block text-sm font-normal leading-6 text-[var(--muted)]">
                  {guide.description}
                </span>
              </span>
              <span className="hidden shrink-0 text-xs text-[var(--muted)] sm:inline">{guide.readTime}</span>
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="english-guides-title">
        <div className="learn-section-heading">
          <span><BookOpen size={15} /></span>
          <h2 id="english-guides-title">Explore the English guides</h2>
        </div>
        <div className="learn-grid mt-6">
          {categories.map((cat) => (
            <section key={cat.name} className="learn-section">
              <div className="learn-section-heading">
                <span>{cat.label}</span>
                <h3>{cat.name}</h3>
              </div>
              <div className="learn-list">
                {cat.items.map(([title, href], i) => (
                  <Link key={title} href={href} className="learn-item">
                    <span className="learn-index">{String(i + 1).padStart(2, "0")}</span>
                    <span>{title}</span>
                    <ArrowUpRight size={16} />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-[var(--border)] p-6 md:p-8">
        <div className="flex items-start gap-4">
          <Gem size={22} aria-hidden="true" />
          <div>
            <h2 className="text-xl font-semibold">Explore gemstone profiles</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              Browse gemstone profiles and compare characteristics, colours, and hardness.
            </p>
            <Link href="/gemstones" className="mt-4 inline-flex items-center gap-2 underline underline-offset-4">
              Browse the gemstone directory <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

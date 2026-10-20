import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Gem } from "lucide-react";

export const metadata: Metadata = {
  title: "Learn Gemology | GemologyX",
  description:
    "Explore clear gemstone education guides in English and Sinhala, covering sapphire, gemstone buying, identification, reports, and gemological science.",
};

const sinhalaGuides = [
  {
    title: "පුෂ්පරාග රළු මැණික් ගලක මිල තක්සේරු කිරීම",
    description: "රළු ගලක වටිනාකමට බලපාන කරුණු සහ මිලදී ගැනීමට පෙර කළ යුතු පරීක්ෂා.",
    href: "/si/learn/rough-yellow-sapphire-value",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "මැණික් පරීක්ෂණ වාර්තාවක් කියවීම",
    description: "වාර්තා අංකය, ගල් වර්ගය, ස්වභාවික බව සහ ප්‍රතිකාර පිළිබඳ සටහන් තේරුම් ගන්න.",
    href: "/si/learn/how-to-read-gem-report",
    readTime: "මිනිත්තු 4",
  },
  {
    title: "මැණික්වල කැරට් සහ ග්‍රෑම් අතර වෙනස",
    description: "බර ඒකක දෙක අතර පරිවර්තනය සහ බර පමණක් මිල තීරණය නොකරන්නේ ඇයි?",
    href: "/si/learn/carat-vs-gram",
    readTime: "මිනිත්තු 3",
  },
  {
    title: "රළු මැණික් ගලක් මිලදී ගැනීමට පෙර",
    description: "ගලේ අනන්‍යතාව, ඉරිතැලීම්, කැපීමේ හැකියාව සහ ගනුදෙනු කොන්දේසි පරීක්ෂා කරන්න.",
    href: "/si/learn/buying-rough-gemstones",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "ස්වභාවික සහ කෘත්‍රිම මැණික් අතර වෙනස",
    description: "ස්වභාවික, රසායනාගාරයේ නිපදවූ සහ අනුකරණ ගල් අතර වෙනස්කම් ඉගෙන ගන්න.",
    href: "/si/learn/natural-vs-synthetic-gemstones",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "නිල් නිල්මැණිකක වටිනාකමට බලපාන කරුණු",
    description: "වර්ණය, පැහැදිලි බව, කැපීම සහ ප්‍රතිකාර ගැන මූලික දැනුම.",
    href: "/si/learn/blue-sapphire-value-factors",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "මැණික් ගනුදෙනුවල වංචා අවදානම්",
    description: "අනතුරු ඇඟවීම් හඳුනාගෙන ආරක්ෂිත ගනුදෙනුවක් සඳහා සූදානම් වන්න.",
    href: "/si/learn/avoid-gemstone-scams",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "රළු නිල්මැණික් ගලක ඇතුළත ලක්ෂණ",
    description: "ඇතුළත ලක්ෂණ, ඉරිතැලීම් සහ පරීක්ෂාවේ සීමාවන් ගැන දැනගන්න.",
    href: "/si/learn/rough-sapphire-inclusions",
    readTime: "මිනිත්තු 4",
  },
] as const;

const categories = [
  {
    name: "Sapphire",
    label: "01",
    items: [
      ["What Is Ceylon Sapphire?", "/learn/sapphire/what-is-ceylon-sapphire", true],
      ["What Makes a Sapphire Valuable?", "/learn/sapphire/sapphire-value-factors", true],
      ["Natural vs Synthetic Sapphire", "/learn/natural-vs-synthetic-gemstones", true],
      ["Heated vs Unheated Sapphire", "/learn/heated-vs-unheated", true],
      ["What Is Padparadscha Sapphire?", "#", false],
    ],
  },
  {
    name: "Gemstone Basics",
    label: "02",
    items: [
      ["Natural vs Synthetic Gemstones", "/learn/natural-vs-synthetic-gemstones", true],
      ["Heated vs Unheated Gemstones", "/learn/heated-vs-unheated", true],
      ["Understanding Gemstone Inclusions", "#", false],
    ],
  },
  {
    name: "Buying Guides",
    label: "03",
    items: [
      ["How Gemstone Certification Works", "/learn/gemstone-certification", true],
      ["How to Read a Gemstone Report", "/learn/how-to-read-a-gemstone-report", true],
      ["How to Care for Gemstones", "/learn/gemstone-care", true],
      ["Questions to Ask a Gem Dealer", "/learn/questions-to-ask-gem-dealer", true],
    ],
  },
  {
    name: "Science",
    label: "04",
    items: [
      ["What Is the Mohs Hardness Scale?", "/tools/mohs-hardness", true],
      ["What Is Refractive Index?", "#", false],
      ["What Is Pleochroism?", "#", false],
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
          Clear, practical gemstone guides to help you understand gem
          identification, quality, reports, buying decisions, and the science
          behind gemstones.
        </p>
        <div className="directory-rule">
          <span /> ENGLISH &amp; සිංහල <span />
        </div>
      </header>

      <section className="learn-sinhala mt-10" aria-labelledby="sinhala-guides-title">
        <div className="learn-section-heading">
          <span>සිං</span>
          <h2 id="sinhala-guides-title">සිංහල මැණික් දැනුම</h2>
        </div>
        <p className="mb-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">
          මැණික් හඳුනාගැනීම, වාර්තා කියවීම සහ මිලදී ගැනීම ගැන සරල සිංහලෙන්
          ඉගෙන ගන්න. මෙම ලිපි අධ්‍යාපනික මාර්ගෝපදේශ වන අතර ගලක මිල හෝ ලාභය
          සහතික නොකරයි.
        </p>
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
                {cat.items.map(([title, href, ready], i) =>
                  ready ? (
                    <Link key={title} href={href} className="learn-item">
                      <span className="learn-index">{String(i + 1).padStart(2, "0")}</span>
                      <span>{title}</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  ) : (
                    <div key={title} className="learn-item learn-disabled">
                      <span className="learn-index">{String(i + 1).padStart(2, "0")}</span>
                      <span>{title}</span>
                      <small>COMING SOON</small>
                    </div>
                  ),
                )}
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
              Browse gemstone profiles and compare their key characteristics,
              colours, mineral families, and hardness.
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

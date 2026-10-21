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
    title: "නිල්මැණික් ගැන සම්පූර්ණ මාර්ගෝපදේශය",
    description: "හඳුනාගැනීමේ සිට ගුණාත්මකභාවය, ප්‍රතිකාර සහ ආරක්ෂිත මිලදී ගැනීම දක්වා සියලුම නිල්මැණික් ලිපි.",
    href: "/si/learn/blue-sapphire-complete-guide",
    readTime: "මිනිත්තු 8",
  },
  {
    title: "මැණික් වෙළෙන්දාගෙන් අසන්න ඕනේ ප්‍රශ්න",
    description: "අනන්‍යතාව, ප්‍රතිකාර, වාර්තා, මිල සහ කොන්දේසි — ගනුදෙනුවට පෙර අසිය යුතු ප්‍රශ්න.",
    href: "/si/learn/questions-to-ask-gem-dealer",
    readTime: "මිනිත්තු 7",
  },
  {
    title: "නිල්මැණික් මිලදී ගැනීමේ checklist",
    description: "නිල්මැණික් ගලක් මිලදී ගැනීමට පෙර පරීක්ෂා කළ යුතු සම්පූර්ණ ලැයිස්තුව.",
    href: "/si/learn/blue-sapphire-buying-checklist",
    readTime: "මිනිත්තු 6",
  },
  {
    title: "නිල්මැණික් lab report එකක බලන්න ඕනේ දේ",
    description: "ප්‍රතිකාර සටහන්, origin notes සහ වාර්තාව ගල සමඟ ගැළපේද යන්න.",
    href: "/si/learn/blue-sapphire-lab-report",
    readTime: "මිනිත්තු 7",
  },
  {
    title: "Origin opinion සහ origin guarantee",
    description: "වාර්තාවල origin notes යනු opinion එකකි — guarantee නොවේ.",
    href: "/si/learn/origin-opinion-vs-guarantee",
    readTime: "මිනිත්තු 6",
  },
  {
    title: "මැණික්වල උණුසුම් ප්‍රතිකාරය",
    description: "Heat treatment යනු කුමක්ද, වටිනාකමට බලපාන ආකාරය සහ හෙළිදරව් කිරීම.",
    href: "/si/learn/heat-treatment-guide",
    readTime: "මිනිත්තු 7",
  },
  {
    title: "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම — හැඳින්වීම",
    description: "දේශීය වෙළෙඳපොළ, ගනුදෙනු වර්ග සහ ගැනුම්කරුවන් දැනගත යුතු කරුණු.",
    href: "/si/learn/sri-lanka-gem-trade-intro",
    readTime: "මිනිත්තු 7",
  },
  {
    title: "Online සහ දේශීය වෙළෙඳපොළෙන් මිලදී ගැනීම",
    description: "වාසි, අවදානම් සහ ආරක්ෂිත පියවර.",
    href: "/si/learn/online-vs-local-gem-buying",
    readTime: "මිනිත්තු 6",
  },
  {
    title: "රළු මැණික් මිලදී ගන්නා විට අසන්න ඕනේ ප්‍රශ්න",
    description: "ඉරිතැලීම්, කැපීමේ අවදානම, බර සහ කොන්දේසි.",
    href: "/si/learn/rough-gem-questions",
    readTime: "මිනිත්තු 6",
  },
  {
    title: "නිල්මැණික් red flags",
    description: "අතිශය සහතික, පීඩනය, ලේඛන ගැටලු සහ සැක සහිත මිල.",
    href: "/si/learn/blue-sapphire-red-flags",
    readTime: "මිනිත්තු 6",
  },
  {
    title: "නිල්මැණික් රැකවරණය",
    description: "පිරිසිදු කිරීම, ගබඩා කිරීම සහ එදිනෙදා භාවිතය.",
    href: "/si/learn/blue-sapphire-care",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "නිල්මැණික් කැරට් එකක මිල තේරුම් ගැනීම",
    description: "කැරට් බර පමණක් නොව ගුණාත්මකභාවය, ප්‍රතිකාර සහ වාර්තා මත මිල සසඳන්න.",
    href: "/si/learn/blue-sapphire-price-per-carat",
    readTime: "මිනිත්තු 6",
  },
  {
    title: "නිල්මැණිකක වටිනාකමට බලපාන කරුණු",
    description: "වර්ණය, පැහැදිලි බව, කැපීම සහ ප්‍රතිකාර ගැන මූලික දැනුම.",
    href: "/si/learn/blue-sapphire-value-factors",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "නිල්මැණික් වර්ණය සහ ගුණාත්මකභාවය",
    description: "වර්ණ ස්වරය, තීව්‍රතාව, ආලෝකය සහ වර්ණයේ ඒකාකාර බව.",
    href: "/si/learn/blue-sapphire-colour-quality",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "උණුසුම් කළ සහ නොකළ නිල්මැණික්",
    description: "ප්‍රතිකාර තත්ත්වය, පරීක්ෂණ වාර්තා සහ මිලදී ගැනීමේදී අසන්න ඕනෑ දේ.",
    href: "/si/learn/heated-vs-unheated-blue-sapphire",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "මැණික් පරීක්ෂණ වාර්තාවක් කියවීම",
    description: "වාර්තා අංකය, ගල් වර්ගය, ස්වභාවික බව සහ ප්‍රතිකාර පිළිබඳ සටහන්.",
    href: "/si/learn/how-to-read-gem-report",
    readTime: "මිනිත්තු 4",
  },
  {
    title: "රළු මැණික් ගලක් මිලදී ගැනීමට පෙර",
    description: "ගලේ අනන්‍යතාව, ඉරිතැලීම්, කැපීමේ හැකියාව සහ ගනුදෙනු කොන්දේසි.",
    href: "/si/learn/buying-rough-gemstones",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "මැණික් මිලදී ගැනීමට පෙර checklist",
    description: "අනන්‍යතාව, ප්‍රතිකාර, වාර්තා, මිල සහ ගනුදෙනු කොන්දේසි.",
    href: "/si/learn/gemstone-buying-checklist",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "මැණික් ගනුදෙනුවල වංචා අවදානම්",
    description: "අනතුරු ඇඟවීම් හඳුනාගෙන ආරක්ෂිත ගනුදෙනුවක් සඳහා සූදානම් වන්න.",
    href: "/si/learn/avoid-gemstone-scams",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "ස්වභාවික සහ කෘත්‍රිම මැණික් අතර වෙනස",
    description: "ස්වභාවික, lab-grown සහ අනුකරණ ගල් අතර වෙනස්කම්.",
    href: "/si/learn/natural-vs-synthetic-gemstones",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "ශ්‍රී ලංකාවේ නිල්මැණික්",
    description: "Ceylon sapphire නාමය, මූලාරම්භ ප්‍රකාශ සහ ස්වාධීන පරීක්ෂණ.",
    href: "/si/learn/sri-lankan-blue-sapphire",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "තරු නිල්මැණික්",
    description: "තරු ආචරණය, cabochon කැපීම සහ පරීක්ෂා කරන ආකාරය.",
    href: "/si/learn/star-sapphire-guide",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "රළු නිල්මැණික් ගලක වටිනාකම",
    description: "ඉරිතැලීම්, කැපීමේ අවදානම සහ අවසාන බර.",
    href: "/si/learn/rough-blue-sapphire-value",
    readTime: "මිනිත්තු 6",
  },
  {
    title: "රළු නිල්මැණික් ඇතුළත ලක්ෂණ",
    description: "Inclusions, ඉරිතැලීම් සහ පරීක්ෂාවේ සීමාවන්.",
    href: "/si/learn/rough-sapphire-inclusions",
    readTime: "මිනිත්තු 4",
  },
  {
    title: "නිල්මැණික් හඳුනාගැනීම",
    description: "වර්ණය, භෞතික ලක්ෂණ සහ වෘත්තීය පරීක්ෂණ.",
    href: "/si/learn/identify-sapphire",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "මැණික්වල කැරට් සහ ග්‍රෑම්",
    description: "බර ඒකක දෙක අතර පරිවර්තනය.",
    href: "/si/learn/carat-vs-gram",
    readTime: "මිනිත්තු 3",
  },
  {
    title: "රතු මැණික් සහ රතු ස්පිනල්",
    description: "සමාන පෙනුම සහ හඳුනාගැනීමේ සීමා.",
    href: "/si/learn/ruby-vs-spinel",
    readTime: "මිනිත්තු 4",
  },
  {
    title: "පුෂ්පරාග සහ කහ ටොපාස්",
    description: "ඛනිජ වෙනස සහ මිලදී ගැනීමේ උපදෙස්.",
    href: "/si/learn/yellow-sapphire-vs-topaz",
    readTime: "මිනිත්තු 4",
  },
  {
    title: "පුෂ්පරාග රළු ගලක මිල",
    description: "රළු කහ sapphire වටිනාකම තක්සේරු කිරීම.",
    href: "/si/learn/rough-yellow-sapphire-value",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "ස්වභාවික, කෘත්‍රිම සහ අනුකරණ",
    description: "වෙළෙඳාමේ පද තේරුම් ගනිමු.",
    href: "/si/learn/natural-synthetic-imitation-gems",
    readTime: "මිනිත්තු 5",
  },
  {
    title: "ප්‍රතිකාර තොරතුරු හෙළි කිරීම",
    description: "විකුණුම්කරුගේ ප්‍රකාශ සහ වාර්තා.",
    href: "/si/learn/gemstone-treatment-disclosure",
    readTime: "මිනිත්තු 4",
  },
  {
    title: "වාර්තාවක ප්‍රධාන තොරතුරු",
    description: "ගල් වර්ගය, බර, මානයන්, ප්‍රතිකාර සටහන්.",
    href: "/si/learn/gem-lab-report-details",
    readTime: "මිනිත්තු 4",
  },
  {
    title: "උණුසුම් ප්‍රතිකාර කළ නිල්මැණික්",
    description: "ප්‍රතිකාර තත්ත්වය හඳුනාගැනීමේ සීමා.",
    href: "/si/learn/heated-sapphire-guide",
    readTime: "මිනිත්තු 5",
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

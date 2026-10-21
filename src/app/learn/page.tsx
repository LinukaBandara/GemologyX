import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Gem } from "lucide-react";

export const metadata: Metadata = {
  title: "Learn Gemology | GemologyX",
  description:
    "Explore clear gemstone education guides in English and Sinhala, covering sapphire, gemstone buying, identification, reports, and gemological science.",
};

const sinhalaGuides = [
  // —— Hub & buying (highest intent) ——
  { title: "නිල්මැණික් ගැන සම්පූර්ණ මාර්ගෝපදේශය", description: "හඳුනාගැනීමේ සිට ගුණාත්මකභාවය, ප්‍රතිකාර සහ ආරක්ෂිත මිලදී ගැනීම දක්වා.", href: "/si/learn/blue-sapphire-complete-guide", readTime: "මිනිත්තු 8" },
  { title: "මැණික් වෙළෙන්දාගෙන් අසන්න ඕනේ ප්‍රශ්න", description: "අනන්‍යතාව, ප්‍රතිකාර, වාර්තා, මිල සහ කොන්දේසි.", href: "/si/learn/questions-to-ask-gem-dealer", readTime: "මිනිත්තු 7" },
  { title: "මැණික් මිල සාකච්ඡා කරන ආකාරය", description: "තොරතුරු සහිත සාකච්ඡාව, budget සහ ආරක්ෂිත සීමා.", href: "/si/learn/negotiate-gem-price", readTime: "මිනිත්තු 6" },
  { title: "මැණික් මිලදී ගැනීමට පෙර checklist", description: "අනන්‍යතාව, ප්‍රතිකාර, වාර්තා, මිල සහ ගනුදෙනු කොන්දේසි.", href: "/si/learn/gemstone-buying-checklist", readTime: "මිනිත්තු 5" },
  { title: "නිල්මැණික් මිලදී ගැනීමේ checklist", description: "නිල්මැණික් ගලක් මිලදී ගැනීමට පෙර පරීක්ෂා කළ යුතු ලැයිස්තුව.", href: "/si/learn/blue-sapphire-buying-checklist", readTime: "මිනිත්තු 6" },
  { title: "මැණික් සහිත ආභරණ මිලදී ගැනීම", description: "ගල, ලෝහ, සැකසුම සහ ලේඛන පරීක්ෂා කරන ආකාරය.", href: "/si/learn/jewelry-with-gems-buying", readTime: "මිනිත්තු 7" },
  { title: "Online සහ දේශීය වෙළෙඳපොළෙන් මිලදී ගැනීම", description: "වාසි, අවදානම් සහ ආරක්ෂිත පියවර.", href: "/si/learn/online-vs-local-gem-buying", readTime: "මිනිත්තු 6" },
  { title: "මැණික් ගනුදෙනුවල වංචා අවදානම්", description: "Red flags හඳුනාගෙන ආරක්ෂිත ගනුදෙනුවක්.", href: "/si/learn/avoid-gemstone-scams", readTime: "මිනිත්තු 5" },
  { title: "නිල්මැණික් red flags", description: "අතිශය සහතික, පීඩනය, ලේඛන ගැටලු.", href: "/si/learn/blue-sapphire-red-flags", readTime: "මිනිත්තු 6" },

  // —— Reports & treatments ——
  { title: "මැණික් පරීක්ෂණ වාර්තාවක් කියවීම", description: "වාර්තා අංකය, ගල් වර්ගය, ප්‍රතිකාර සටහන්.", href: "/si/learn/how-to-read-gem-report", readTime: "මිනිත්තු 4" },
  { title: "නිල්මැණික් lab report", description: "ප්‍රතිකාර, origin notes සහ ගල සමඟ ගැළපීම.", href: "/si/learn/blue-sapphire-lab-report", readTime: "මිනිත්තු 7" },
  { title: "Origin opinion සහ origin guarantee", description: "වාර්තාවල origin notes යනු opinion එකකි.", href: "/si/learn/origin-opinion-vs-guarantee", readTime: "මිනිත්තු 6" },
  { title: "මැණික් පරීක්ෂණාගාර (Labs)", description: "වාර්තාවක අර්ථය, සීමාවන් සහ සත්‍යාපනය.", href: "/si/learn/gem-labs-overview", readTime: "මිනිත්තු 7" },
  { title: "වාර්තාවක ප්‍රධාන තොරතුරු", description: "ගල් වර්ගය, බර, මානයන්, ප්‍රතිකාර සටහන්.", href: "/si/learn/gem-lab-report-details", readTime: "මිනිත්තු 4" },
  { title: "මැණික්වල උණුසුම් ප්‍රතිකාරය", description: "Heat treatment — වටිනාකම සහ හෙළිදරව් කිරීම.", href: "/si/learn/heat-treatment-guide", readTime: "මිනිත්තු 7" },
  { title: "Diffusion ප්‍රතිකාරය", description: "Diffusion treatment සහ heat සමඟ වෙනස.", href: "/si/learn/diffusion-treatment-guide", readTime: "මිනිත්තු 6" },
  { title: "Fracture filling / glass filling", description: "Clarity enhancement, හෙළිදරව් කිරීම සහ රැකවරණය.", href: "/si/learn/fracture-filling-guide", readTime: "මිනිත්තු 6" },
  { title: "ප්‍රතිකාර තොරතුරු හෙළි කිරීම", description: "විකුණුම්කරුගේ ප්‍රකාශ සහ වාර්තා.", href: "/si/learn/gemstone-treatment-disclosure", readTime: "මිනිත්තු 4" },
  { title: "උණුසුම් කළ සහ නොකළ නිල්මැණික්", description: "ප්‍රතිකාර තත්ත්වය සහ වාර්තා.", href: "/si/learn/heated-vs-unheated-blue-sapphire", readTime: "මිනිත්තු 5" },

  // —— Sri Lanka ——
  { title: "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම", description: "දේශීය වෙළෙඳපොළ සහ ගනුදෙනු වර්ග.", href: "/si/learn/sri-lanka-gem-trade-intro", readTime: "මිනිත්තු 7" },
  { title: "ශ්‍රී ලංකාවේ මැණික් පද — Geuda", description: "Geuda, රළු ගල් සහ දේශීය පද.", href: "/si/learn/sri-lanka-gem-terms", readTime: "මිනිත්තු 7" },
  { title: "ශ්‍රී ලංකාවේ නිල්මැණික්", description: "Ceylon sapphire නාමය සහ මූලාරම්භ ප්‍රකාශ.", href: "/si/learn/sri-lankan-blue-sapphire", readTime: "මිනිත්තු 5" },

  // —— Rough ——
  { title: "රළු මැණික් මිලදී ගන්නා විට අසන්න ඕනේ ප්‍රශ්න", description: "ඉරිතැලීම්, කැපීමේ අවදානම, බර.", href: "/si/learn/rough-gem-questions", readTime: "මිනිත්තු 6" },
  { title: "රළු මැණික් ගලක් මිලදී ගැනීමට පෙර", description: "අනන්‍යතාව, ඉරිතැලීම්, කැපීමේ හැකියාව.", href: "/si/learn/buying-rough-gemstones", readTime: "මිනිත්තු 5" },
  { title: "රළු නිල්මැණික් ගලක වටිනාකම", description: "ඉරිතැලීම්, කැපීමේ අවදානම, අවසාන බර.", href: "/si/learn/rough-blue-sapphire-value", readTime: "මිනිත්තු 6" },
  { title: "රළු නිල්මැණික් ඇතුළත ලක්ෂණ", description: "Inclusions සහ පරීක්ෂාවේ සීමාවන්.", href: "/si/learn/rough-sapphire-inclusions", readTime: "මිනිත්තු 4" },

  // —— Blue sapphire cluster ——
  { title: "නිල්මැණික් වර්ණය සහ ගුණාත්මකභාවය", description: "වර්ණ ස්වරය, තීව්‍රතාව, ආලෝකය.", href: "/si/learn/blue-sapphire-colour-quality", readTime: "මිනිත්තු 5" },
  { title: "නිල්මැණිකක වටිනාකමට බලපාන කරුණු", description: "වර්ණය, පැහැදිලි බව, කැපීම, ප්‍රතිකාර.", href: "/si/learn/blue-sapphire-value-factors", readTime: "මිනිත්තු 5" },
  { title: "නිල්මැණික් කැරට් එකක මිල", description: "බර පමණක් නොව ගුණාත්මකභාවය මත මිල.", href: "/si/learn/blue-sapphire-price-per-carat", readTime: "මිනිත්තු 6" },
  { title: "නිල්මැණික් හඳුනාගැනීම", description: "වර්ණය, භෞතික ලක්ෂණ, වෘත්තීය පරීක්ෂණ.", href: "/si/learn/identify-sapphire", readTime: "මිනිත්තු 5" },
  { title: "තරු නිල්මැණික්", description: "තරු ආචරණය සහ cabochon කැපීම.", href: "/si/learn/star-sapphire-guide", readTime: "මිනිත්තු 5" },
  { title: "Padparadscha sapphire", description: "වර්ණ පරාසය සහ හඳුනාගැනීමේ සීමා.", href: "/si/learn/padparadscha-intro", readTime: "මිනිත්තු 6" },
  { title: "නිල්මැණික් රැකවරණය", description: "පිරිසිදු කිරීම, ගබඩා කිරීම.", href: "/si/learn/blue-sapphire-care", readTime: "මිනිත්තු 5" },
  { title: "උණුසුම් ප්‍රතිකාර කළ නිල්මැණික්", description: "ප්‍රතිකාර තත්ත්වය හඳුනාගැනීමේ සීමා.", href: "/si/learn/heated-sapphire-guide", readTime: "මිනිත්තු 5" },

  // —— Species intros ——
  { title: "මරකත (Emerald)", description: "Inclusions, oil treatment, මිලදී ගැනීම.", href: "/si/learn/emerald-intro", readTime: "මිනිත්තු 7" },
  { title: "Spinel (ස්පිනල්)", description: "Ruby සමඟ වෙනස, වර්ණ, හඳුනාගැනීම.", href: "/si/learn/spinel-intro", readTime: "මිනිත්තු 6" },
  { title: "Garnet (ගානට්)", description: "වර්ණ විවිධත්වය, ruby සමඟ වෙනස.", href: "/si/learn/garnet-intro", readTime: "මිනිත්තු 6" },
  { title: "Tourmaline", description: "වර්ණ පරාසය, paraiba, rubellite.", href: "/si/learn/tourmaline-intro", readTime: "මිනිත්තු 6" },
  { title: "Aquamarine", description: "නිල් beryl, heat treatment, sapphire සමඟ වෙනස.", href: "/si/learn/aquamarine-intro", readTime: "මිනිත්තු 5" },
  { title: "Morganite", description: "රෝස beryl, heat treatment.", href: "/si/learn/morganite-intro", readTime: "මිනිත්තු 5" },
  { title: "Tanzanite", description: "නිල්-දම් zoisite, heat, දෘඪතාව.", href: "/si/learn/tanzanite-intro", readTime: "මිනිත්තු 6" },
  { title: "Opal", description: "Play-of-colour, රැකවරණය, අවදානම්.", href: "/si/learn/opal-intro", readTime: "මිනිත්තු 6" },
  { title: "Peridot", description: "කොළ olivine, emerald සමඟ වෙනස.", href: "/si/learn/peridot-intro", readTime: "මිනිත්තු 5" },
  { title: "Amethyst", description: "දම් quartz, heat, synthetic.", href: "/si/learn/amethyst-intro", readTime: "මිනිත්තු 5" },
  { title: "Citrine", description: "කහ quartz, heat-treated amethyst.", href: "/si/learn/citrine-intro", readTime: "මිනිත්තු 5" },
  { title: "Topaz", description: "Blue topaz treatments, cleavage.", href: "/si/learn/topaz-intro", readTime: "මිනිත්තු 5" },
  { title: "Jade — Jadeite සහ Nephrite", description: "වර්ග දෙක, treatments, හඳුනාගැනීම.", href: "/si/learn/jade-intro", readTime: "මිනිත්තු 7" },

  // —— Comparisons & basics ——
  { title: "රතු මැණික් සහ රතු ස්පිනල්", description: "සමාන පෙනුම සහ හඳුනාගැනීමේ සීමා.", href: "/si/learn/ruby-vs-spinel", readTime: "මිනිත්තු 4" },
  { title: "රතු මැණික් සහ ගානට්", description: "Ruby vs Garnet — ඛනිජ වෙනස.", href: "/si/learn/ruby-vs-garnet", readTime: "මිනිත්තු 5" },
  { title: "පුෂ්පරාග සහ කහ ටොපාස්", description: "ඛනිජ වෙනස සහ මිලදී ගැනීම.", href: "/si/learn/yellow-sapphire-vs-topaz", readTime: "මිනිත්තු 4" },
  { title: "ස්වභාවික සහ කෘත්‍රිම මැණික්", description: "Natural, lab-grown, imitation.", href: "/si/learn/natural-vs-synthetic-gemstones", readTime: "මිනිත්තු 5" },
  { title: "ස්වභාවික, කෘත්‍රිම සහ අනුකරණ", description: "වෙළෙඳාමේ පද තේරුම් ගනිමු.", href: "/si/learn/natural-synthetic-imitation-gems", readTime: "මිනිත්තු 5" },
  { title: "මැණික්වල ඇතුළත ලක්ෂණ (Inclusions)", description: "Inclusions යනු කුමක්ද, ගුණාත්මකභාවයට බලපෑම.", href: "/si/learn/gemstone-inclusions-guide", readTime: "මිනිත්තු 6" },
  { title: "Mohs දෘඪතා පරිමාණය", description: "Hardness vs toughness, රැකවරණයට අර්ථය.", href: "/si/learn/mohs-hardness-guide", readTime: "මිනිත්තු 5" },
  { title: "මැණික් රැකවරණය — සාමාන්‍ය", description: "පිරිසිදු කිරීම, ගබඩා කිරීම, භාවිතය.", href: "/si/learn/gemstone-care-general", readTime: "මිනිත්තු 6" },
  { title: "මැණික්වල කැරට් සහ ග්‍රෑම්", description: "බර ඒකක දෙක අතර පරිවර්තනය.", href: "/si/learn/carat-vs-gram", readTime: "මිනිත්තු 3" },
  { title: "පුෂ්පරාග රළු ගලක මිල", description: "රළු කහ sapphire වටිනාකම.", href: "/si/learn/rough-yellow-sapphire-value", readTime: "මිනිත්තු 5" },
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
      ["What Is Padparadscha Sapphire?", "/si/learn/padparadscha-intro", true],
    ],
  },
  {
    name: "Gemstone Basics",
    label: "02",
    items: [
      ["Natural vs Synthetic Gemstones", "/learn/natural-vs-synthetic-gemstones", true],
      ["Heated vs Unheated Gemstones", "/learn/heated-vs-unheated", true],
      ["Understanding Gemstone Inclusions", "/si/learn/gemstone-inclusions-guide", true],
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
          <span /> ENGLISH & සිංහල <span />
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

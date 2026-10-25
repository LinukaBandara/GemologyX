import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Gem } from "lucide-react";

export const metadata: Metadata = {
  title: "Learn Gemology | GemologyX",
  description:
    "Explore clear gemstone education guides in English and Sinhala — 100+ Sinhala guides on buying, treatments, reports, and Sri Lankan gem knowledge.",
};

const sinhalaGuides = [
  // —— Hub & buying ——
  { title: "නිල්මැණික් ගැන සම්පූර්ණ මාර්ගෝපදේශය", description: "හඳුනාගැනීමේ සිට ගුණාත්මකභාවය, ප්‍රතිකාර සහ ආරක්ෂිත මිලදී ගැනීම.", href: "/si/learn/blue-sapphire-complete-guide", readTime: "මිනිත්තු 8" },
  { title: "මැණික් වෙළෙන්දාගෙන් අසන්න ඕනේ ප්‍රශ්න", description: "අනන්‍යතාව, ප්‍රතිකාර, වාර්තා, මිල සහ කොන්දේසි.", href: "/si/learn/questions-to-ask-gem-dealer", readTime: "මිනිත්තු 7" },
  { title: "මැණික් මිල සාකච්ඡා කරන ආකාරය", description: "තොරතුරු සහිත සාකච්ඡාව සහ ආරක්ෂිත සීමා.", href: "/si/learn/negotiate-gem-price", readTime: "මිනිත්තු 6" },
  { title: "මැණික් මිලදී ගැනීමට පෙර checklist", description: "අනන්‍යතාව, ප්‍රතිකාර, වාර්තා, මිල, කොන්දේසි.", href: "/si/learn/gemstone-buying-checklist", readTime: "මිනිත්තු 5" },
  { title: "නිල්මැණික් මිලදී ගැනීමේ checklist", description: "නිල්මැණික් ගලක් මිලදී ගැනීමට පෙර ලැයිස්තුව.", href: "/si/learn/blue-sapphire-buying-checklist", readTime: "මිනිත්තු 6" },
  { title: "මැණික් සහිත ආභරණ මිලදී ගැනීම", description: "ගල, ලෝහ, සැකසුම සහ ලේඛන.", href: "/si/learn/jewelry-with-gems-buying", readTime: "මිනිත්තු 7" },
  { title: "Online සහ දේශීය වෙළෙඳපොළෙන් මිලදී ගැනීම", description: "වාසි, අවදානම් සහ ආරක්ෂිත පියවර.", href: "/si/learn/online-vs-local-gem-buying", readTime: "මිනිත්තු 6" },
  { title: "Photos වලින් මැණික් මිලදී ගැනීම", description: "වර්ණ distortion, scale, return policy.", href: "/si/learn/buying-gems-from-photos", readTime: "මිනිත්තු 6" },
  { title: "Secondhand ආභරණ සහ මැණික්", description: "Used jewelry — identity, wear, docs.", href: "/si/learn/secondhand-jewelry-gems", readTime: "මිනිත්තු 6" },
  { title: "මැණික් ගනුදෙනුවල වංචා අවදානම්", description: "Red flags සහ ආරක්ෂිත ගනුදෙනු.", href: "/si/learn/avoid-gemstone-scams", readTime: "මිනිත්තු 5" },
  { title: "නිල්මැණික් red flags", description: "අතිශය සහතික, පීඩනය, ලේඛන ගැටලු.", href: "/si/learn/blue-sapphire-red-flags", readTime: "මිනිත්තු 6" },
  { title: "මැණික් තෑග්ගක් මිලදී ගැනීම", description: "Budget, durability, return policy.", href: "/si/learn/gemstone-gift-buying", readTime: "මිනිත්තු 6" },
  { title: "Birthstones (උපන් මාස මැණික්)", description: "Lists, durability, alternatives.", href: "/si/learn/birthstones-guide", readTime: "මිනිත්තු 6" },
  { title: "මැණික් Auction එකකින් මිලදී ගැනීම", description: "Inspection, premium, conditions.", href: "/si/learn/buying-at-gem-auction", readTime: "මිනිත්තු 6" },

  // —— Reports & treatments ——
  { title: "මැණික් පරීක්ෂණ වාර්තාවක් කියවීම", description: "අංකය, species, ප්‍රතිකාර, සත්‍යාපනය.", href: "/si/learn/how-to-read-gem-report", readTime: "මිනිත්තු 6" },
  { title: "නිල්මැණික් lab report", description: "ප්‍රතිකාර, origin, ගල සමඟ ගැළපීම.", href: "/si/learn/blue-sapphire-lab-report", readTime: "මිනිත්තු 7" },
  { title: "Origin opinion සහ origin guarantee", description: "වාර්තා origin = opinion.", href: "/si/learn/origin-opinion-vs-guarantee", readTime: "මිනිත්තු 6" },
  { title: "මැණික් පරීක්ෂණාගාර (Labs)", description: "වාර්තා අර්ථය, සීමා, සත්‍යාපනය.", href: "/si/learn/gem-labs-overview", readTime: "මිනිත්තු 7" },
  { title: "වාර්තාවක ප්‍රධාන තොරතුරු", description: "වර්ගය, බර, මානයන්, ප්‍රතිකාර.", href: "/si/learn/gem-lab-report-details", readTime: "මිනිත්තු 5" },
  { title: "මැණික් Certificate පිළිබඳ මිත්‍යා", description: "Guarantee නොවීම, lab differences.", href: "/si/learn/gem-certification-myths", readTime: "මිනිත්තු 6" },
  { title: "ව්‍යාජ Lab Reports", description: "Verify number, match stone.", href: "/si/learn/fake-lab-reports", readTime: "මිනිත්තු 6" },
  { title: "මැණික්වල උණුසුම් ප්‍රතිකාරය", description: "Heat — වටිනාකම සහ හෙළිදරව්.", href: "/si/learn/heat-treatment-guide", readTime: "මිනිත්තු 7" },
  { title: "Diffusion ප්‍රතිකාරය", description: "Diffusion vs heat.", href: "/si/learn/diffusion-treatment-guide", readTime: "මිනිත්තු 6" },
  { title: "Fracture filling / glass filling", description: "Clarity enhancement සහ රැකවරණය.", href: "/si/learn/fracture-filling-guide", readTime: "මිනිත්තු 6" },
  { title: "Heat vs Diffusion vs Filling", description: "තුන් වර්ගයේ වෙනස සහ disclosure.", href: "/si/learn/heat-vs-diffusion-vs-filling", readTime: "මිනිත්තු 7" },
  { title: "ප්‍රතිකාර තොරතුරු හෙළි කිරීම", description: "විකුණුම්කරු ප්‍රකාශ සහ වාර්තා.", href: "/si/learn/gemstone-treatment-disclosure", readTime: "මිනිත්තු 5" },
  { title: "උණුසුම් කළ සහ නොකළ නිල්මැණික්", description: "ප්‍රතිකාර තත්ත්වය සහ වාර්තා.", href: "/si/learn/heated-vs-unheated-blue-sapphire", readTime: "මිනිත්තු 5" },
  { title: "Synthetic / Lab-grown Sapphire", description: "Natural සමඟ වෙනස, disclosure.", href: "/si/learn/synthetic-sapphire-guide", readTime: "මිනිත්තු 6" },

  // —— Sri Lanka ——
  { title: "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම", description: "දේශීය වෙළෙඳපොළ සහ ගනුදෙනු වර්ග.", href: "/si/learn/sri-lanka-gem-trade-intro", readTime: "මිනිත්තු 7" },
  { title: "ශ්‍රී ලංකාවේ මැණික් පද — Geuda", description: "Geuda, රළු ගල්, දේශීය පද.", href: "/si/learn/sri-lanka-gem-terms", readTime: "මිනිත්තු 7" },
  { title: "ශ්‍රී ලංකාවේ නිල්මැණික්", description: "Ceylon sapphire නාමය.", href: "/si/learn/sri-lankan-blue-sapphire", readTime: "මිනිත්තු 5" },
  { title: "Ceylon Sapphire කියන්නේ මොකක්ද?", description: "Trade name vs lab origin opinion.", href: "/si/learn/what-ceylon-means", readTime: "මිනිත්තු 6" },
  { title: "Geuda මිලදී ගැනීම", description: "Heat potential vs guarantee.", href: "/si/learn/buying-geuda", readTime: "මිනිත්තු 6" },
  { title: "SL මැණික් මිලදී ගන්නා දිනයකට", description: "ලේඛන, පීඩනය, independent check.", href: "/si/learn/sri-lanka-buying-day-tips", readTime: "මිනිත්තු 7" },
  { title: "SL මැණික් වෙළෙන්දන් වර්ග", description: "Rough, cutters, brokers, retail.", href: "/si/learn/sri-lanka-dealer-types", readTime: "මිනිත්තු 6" },
  { title: "Export / රේගු ලේඛන — මූලික", description: "General awareness only.", href: "/si/learn/export-documents-intro", readTime: "මිනිත්තු 6" },

  // —— Rough ——
  { title: "රළු මැණික් — අසන්න ඕනේ ප්‍රශ්න", description: "ඉරිතැලීම්, කැපීම, බර.", href: "/si/learn/rough-gem-questions", readTime: "මිනිත්තු 6" },
  { title: "රළු මැණික් මිලදී ගැනීමට පෙර", description: "අනන්‍යතාව, අවදානම්, කොන්දේසි.", href: "/si/learn/buying-rough-gemstones", readTime: "මිනිත්තු 6" },
  { title: "රළු නිල්මැණික් වටිනාකම", description: "ඉරිතැලීම්, yield, අවසාන බර.", href: "/si/learn/rough-blue-sapphire-value", readTime: "මිනිත්තු 6" },
  { title: "රළු නිල්මැණික් inclusions", description: "Inclusions සහ පරීක්ෂා සීමා.", href: "/si/learn/rough-sapphire-inclusions", readTime: "මිනිත්තු 4" },
  { title: "කැපීමේදී බර අහිමි වීම", description: "Yield estimates vs reality.", href: "/si/learn/cutting-weight-loss", readTime: "මිනිත්තු 5" },
  { title: "පුෂ්පරාග රළු ගලක මිල", description: "රළු කහ sapphire.", href: "/si/learn/rough-yellow-sapphire-value", readTime: "මිනිත්තු 5" },

  // —— Blue sapphire cluster ——
  { title: "නිල්මැණික් වර්ණය සහ ගුණාත්මකභාවය", description: "Hue, tone, saturation.", href: "/si/learn/blue-sapphire-colour-quality", readTime: "මිනිත්තු 5" },
  { title: "නිල්මැණිකක වටිනාකමට බලපාන කරුණු", description: "වර්ණය, clarity, cut, ප්‍රතිකාර.", href: "/si/learn/blue-sapphire-value-factors", readTime: "මිනිත්තු 5" },
  { title: "නිල්මැණික් කැරට් එකක මිල", description: "Per-carat vs total quality.", href: "/si/learn/blue-sapphire-price-per-carat", readTime: "මිනිත්තු 6" },
  { title: "නිල්මැණික් හඳුනාගැනීම", description: "වර්ණය, භෞතික ලක්ෂණ, lab.", href: "/si/learn/identify-sapphire", readTime: "මිනිත්තු 5" },
  { title: "තරු නිල්මැණික්", description: "Asterism, cabochon.", href: "/si/learn/star-sapphire-guide", readTime: "මිනිත්තු 5" },
  { title: "Padparadscha sapphire", description: "වර්ණ පරාසය සහ සීමා.", href: "/si/learn/padparadscha-intro", readTime: "මිනිත්තු 6" },
  { title: "නිල්මැණික් රැකවරණය", description: "පිරිසිදු කිරීම, ගබඩා.", href: "/si/learn/blue-sapphire-care", readTime: "මිනිත්තු 5" },
  { title: "උණුසුම් ප්‍රතිකාර කළ නිල්මැණික්", description: "හඳුනාගැනීමේ සීමා.", href: "/si/learn/heated-sapphire-guide", readTime: "මිනිත්තු 5" },

  // —— Species ——
  { title: "Ruby (රතු මැණික්)", description: "Corundum, heat, look-alikes.", href: "/si/learn/ruby-intro", readTime: "මිනිත්තු 7" },
  { title: "මරකත (Emerald)", description: "Inclusions, oil, මිලදී ගැනීම.", href: "/si/learn/emerald-intro", readTime: "මිනිත්තු 7" },
  { title: "Spinel", description: "Ruby සමඟ වෙනස.", href: "/si/learn/spinel-intro", readTime: "මිනිත්තු 6" },
  { title: "Garnet", description: "වර්ණ විවිධත්වය.", href: "/si/learn/garnet-intro", readTime: "මිනිත්තු 6" },
  { title: "Tourmaline", description: "Paraiba, rubellite, වර්ණ.", href: "/si/learn/tourmaline-intro", readTime: "මිනිත්තු 6" },
  { title: "Aquamarine", description: "නිල් beryl, heat.", href: "/si/learn/aquamarine-intro", readTime: "මිනිත්තු 5" },
  { title: "Morganite", description: "රෝස beryl.", href: "/si/learn/morganite-intro", readTime: "මිනිත්තු 5" },
  { title: "Tanzanite", description: "Zoisite, heat, දෘඪතාව.", href: "/si/learn/tanzanite-intro", readTime: "මිනිත්තු 6" },
  { title: "Opal", description: "Play-of-colour, රැකවරණය.", href: "/si/learn/opal-intro", readTime: "මිනිත්තු 6" },
  { title: "Peridot", description: "කොළ olivine.", href: "/si/learn/peridot-intro", readTime: "මිනිත්තු 5" },
  { title: "Amethyst", description: "දම් quartz.", href: "/si/learn/amethyst-intro", readTime: "මිනිත්තු 5" },
  { title: "Citrine", description: "කහ quartz, heat-treated amethyst.", href: "/si/learn/citrine-intro", readTime: "මිනිත්තු 5" },
  { title: "Topaz", description: "Treatments, cleavage.", href: "/si/learn/topaz-intro", readTime: "මිනිත්තු 5" },
  { title: "Jade — Jadeite / Nephrite", description: "වර්ග දෙක, treatments.", href: "/si/learn/jade-intro", readTime: "මිනිත්තු 7" },
  { title: "Zircon", description: "vs cubic zirconia.", href: "/si/learn/zircon-intro", readTime: "මිනිත්තු 5" },
  { title: "Kunzite", description: "Light sensitivity.", href: "/si/learn/kunzite-intro", readTime: "මිනිත්තු 5" },
  { title: "Alexandrite", description: "Colour-change chrysoberyl.", href: "/si/learn/alexandrite-intro", readTime: "මිනිත්තු 6" },
  { title: "Chrysoberyl", description: "Alexandrite සහ cat’s-eye.", href: "/si/learn/chrysoberyl-intro", readTime: "මිනිත්තු 5" },
  { title: "Moonstone", description: "Adularescence.", href: "/si/learn/moonstone-intro", readTime: "මිනිත්තු 5" },
  { title: "Lapis lazuli", description: "Rock, dye, රැකවරණය.", href: "/si/learn/lapis-lazuli-intro", readTime: "මිනිත්තු 5" },
  { title: "Turquoise", description: "Stabilized / dyed.", href: "/si/learn/turquoise-intro", readTime: "මිනිත්තු 5" },
  { title: "Amber", description: "Fossil resin vs imitations.", href: "/si/learn/amber-intro", readTime: "මිනිත්තු 5" },
  { title: "Pearl (මුතු)", description: "Natural vs cultured.", href: "/si/learn/pearl-intro", readTime: "මිනිත්තු 6" },
  { title: "Coral", description: "Dye, care, legal notes.", href: "/si/learn/coral-intro", readTime: "මිනිත්තු 5" },
  { title: "Fluorite", description: "මෘදු, collector wear.", href: "/si/learn/fluorite-intro", readTime: "මිනිත්තු 5" },
  { title: "Quartz පවුල", description: "Amethyst, citrine, rose, smoky.", href: "/si/learn/quartz-family-intro", readTime: "මිනිත්තු 6" },
  { title: "Diamond — මූලික", description: "4Cs, lab-grown, simulants.", href: "/si/learn/diamond-basics", readTime: "මිනිත්තු 7" },

  // —— Comparisons & science ——
  { title: "Ruby vs Spinel", description: "සමාන පෙනුම, ඛනිජ වෙනස.", href: "/si/learn/ruby-vs-spinel", readTime: "මිනිත්තු 5" },
  { title: "Ruby vs Garnet", description: "ඛනිජ වෙනස.", href: "/si/learn/ruby-vs-garnet", readTime: "මිනිත්තු 5" },
  { title: "පුෂ්පරාග vs Topaz", description: "කහ sapphire vs topaz.", href: "/si/learn/yellow-sapphire-vs-topaz", readTime: "මිනිත්තු 5" },
  { title: "Sapphire vs Tanzanite", description: "දෘඪතාව සහ ඛනිජය.", href: "/si/learn/sapphire-vs-tanzanite", readTime: "මිනිත්තු 5" },
  { title: "ස්වභාවික vs කෘත්‍රිම", description: "Natural, lab-grown, imitation.", href: "/si/learn/natural-vs-synthetic-gemstones", readTime: "මිනිත්තු 6" },
  { title: "ස්වභාවික / කෘත්‍රිම / අනුකරණ පද", description: "වෙළෙඳ පද.", href: "/si/learn/natural-synthetic-imitation-gems", readTime: "මිනිත්තු 6" },
  { title: "Glass vs මැණික්", description: "Imitation clues සහ සීමා.", href: "/si/learn/glass-vs-gemstone", readTime: "මිනිත්තු 5" },
  { title: "Inclusions", description: "ඇතුළත ලක්ෂණ.", href: "/si/learn/gemstone-inclusions-guide", readTime: "මිනිත්තු 6" },
  { title: "Mohs දෘඪතාව", description: "Hardness vs toughness.", href: "/si/learn/mohs-hardness-guide", readTime: "මිනිත්තු 5" },
  { title: "මැණික් වර්ණය", description: "Hue, tone, saturation.", href: "/si/learn/gemstone-colour-guide", readTime: "මිනිත්තු 6" },
  { title: "Clarity (පැහැදිලි බව)", description: "Eye-clean, grades.", href: "/si/learn/gemstone-clarity-guide", readTime: "මිනිත්තු 6" },
  { title: "කැරට් බර", description: "Size vs weight, per-carat.", href: "/si/learn/carat-weight-guide", readTime: "මිනිත්තු 5" },
  { title: "කැරට් vs ග්‍රෑම්", description: "0.2 g = 1 ct.", href: "/si/learn/carat-vs-gram", readTime: "මිනිත්තු 4" },
  { title: "කැපුම් හැඩ (Cut shapes)", description: "Round, oval, cabochon…", href: "/si/learn/gemstone-cut-shapes", readTime: "මිනිත්තු 6" },
  { title: "UV light මිත්‍යා", description: "Fluorescence ≠ full ID.", href: "/si/learn/uv-light-gem-myths", readTime: "මිනිත්තු 5" },
  { title: "මැණික් පද 20ක් — Glossary", description: "කෙටි පද මාලාව.", href: "/si/learn/gem-terms-glossary-si", readTime: "මිනිත්තු 8" },

  // —— Care & jewelry life ——
  { title: "මැණික් රැකවරණය — සාමාන්‍ය", description: "පිරිසිදු කිරීම, ගබඩා, භාවිතය.", href: "/si/learn/gemstone-care-general", readTime: "මිනිත්තු 6" },
  { title: "මැණික් පිරිසිදු කිරීමේ ක්‍රම", description: "Soap vs ultrasonic risks.", href: "/si/learn/gemstone-cleaning-methods", readTime: "මිනිත්තු 6" },
  { title: "Setting වර්ග", description: "Prong, bezel, channel, pave.", href: "/si/learn/jewelry-setting-types", readTime: "මිනිත්තු 6" },
  { title: "මුද්ද vs පෙන්ඩන්ට් දෘඪතාව", description: "Daily wear match.", href: "/si/learn/ring-vs-pendant-durability", readTime: "මිනිත්තු 5" },
  { title: "මැණික් සමඟ ගමන් කිරීම", description: "Carry-on, docs, security.", href: "/si/learn/travel-with-gemstones", readTime: "මිනිත්තු 5" },
  { title: "Insurance සහ Appraisal", description: "Report vs replacement value.", href: "/si/learn/gem-insurance-appraisal", readTime: "මිනිත්තු 6" },
  { title: "Pawn සහ නැවත විකිණීම", description: "Retail ≠ exit price.", href: "/si/learn/pawn-and-resale-reality", readTime: "මිනිත්තු 5" },
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
          Clear, practical gemstone guides — including 100 Sinhala educational
          articles on identification, reports, buying, and Sri Lankan gem knowledge.
        </p>
        <div className="directory-rule">
          <span /> ENGLISH & සිංහල <span />
        </div>
      </header>

      <section className="learn-sinhala mt-10" aria-labelledby="sinhala-guides-title">
        <div className="learn-section-heading">
          <span>සිං</span>
          <h2 id="sinhala-guides-title">සිංහල මැණික් දැනුම ({sinhalaGuides.length})</h2>
        </div>
        <p className="mb-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">
          මැණික් හඳුනාගැනීම, වාර්තා කියවීම සහ මිලදී ගැනීම ගැන සරල සිංහලෙන්.
          අධ්‍යාපනික මාර්ගෝපදේශ — ගලක මිල හෝ ලාභය සහතික නොකරයි.
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

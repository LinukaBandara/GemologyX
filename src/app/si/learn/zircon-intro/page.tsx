import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Zircon (සර්කන්) — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Zircon යනු කුමක්ද, cubic zirconia සමඟ වෙනස, වර්ණ, heat treatment සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Zircon (සර්කන්) — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/natural-vs-synthetic-gemstones"
      crumbLabel="ස්වභාවික vs කෘත්‍රිම"
      lastReviewed="2026-10-24"
      related={[
        { label: "ස්වභාවික vs කෘත්‍රිම", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "Heat treatment", href: "/si/learn/heat-treatment-guide" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Zircon යනු ස්වභාවික ඛනිජයකි. Cubic zirconia (CZ) යනු වෙනස්, lab-made
          material එකකි — zircon නොවේ. Zircon වර්ණ නිල්, කහ, දුඹුරු, රතු ආදිය.
          බොහෝ blue zircon heat treated. පෙනුමෙන් පමණක් CZ සමඟ වෙනස් කළ නොහැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Zircon ≠ Cubic zirconia">
        <p>
          Zircon = natural mineral (zirconium silicate). Cubic zirconia =
          synthetic diamond simulant. නම සමාන නමුත් ද්‍රව්‍යය සම්පූර්ණයෙන් වෙනස්.
        </p>
      </ArticleSection>

      <ArticleSection heading="වර්ණ සහ ප්‍රතිකාර">
        <p>
          Blue zircon බොහෝ විට heat treated. Treatment තත්ත්වය ලිඛිතව විමසන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="දෘඪතාව">
        <p>Mohs ~6–7.5. දෛනික භාවිතයේදී සීරීම් අවදානම් තිබිය හැකියි. වෙනම ගබඩා කරන්න.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Zircon ද CZ ද ලිඛිතව පැහැදිලිද?",
          "ප්‍රතිකාර තත්ත්වය විමසුවාද?",
          "රැකවරණ අවදානම් තේරුම් ගත්තාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Zircon = cubic zirconia — නැහැ; වෙනස් ද්‍රව්‍ය.",
          "සියලුම blue zircon untreated — බොහෝ විට heat treated.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

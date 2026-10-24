import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Turquoise — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Turquoise යනු කුමක්ද, treatments (stabilized / dyed), රැකවරණය සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Turquoise — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/lapis-lazuli-intro"
      crumbLabel="Lapis lazuli"
      lastReviewed="2026-10-24"
      related={[
        { label: "Lapis lazuli", href: "/si/learn/lapis-lazuli-intro" },
        { label: "ප්‍රතිකාර හෙළි කිරීම", href: "/si/learn/gemstone-treatment-disclosure" },
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
      ]}
    >
      <QuickAnswer>
        <p>
          Turquoise යනු නිල්-කොළ hydrated phosphate mineral එකකි. බොහෝ වෙළෙඳ
          turquoise stabilized (impregnated) හෝ dyed විය හැකියි. දෘඪතාව ~5–6;
          මෘදුය. Treatment තත්ත්වය ලිඛිතව විමසන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="ප්‍රතිකාර">
        <p>
          Natural porous turquoise බොහෝ විට resin impregnation (stabilized)
          කරයි. Dye ද තිබිය හැකියි. “Natural” යන වචනය treatment නැති බව අදහස්
          නොකරන අවස්ථා තිබේ — අර්ථය පැහැදිලි කරගන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="රැකවරණය">
        <p>
          රසායනික ද්‍රව්‍ය, perfume, ultrasonic වලින් වළකින්න. මෘදු රෙද්දකින්
          පිරිසිදු කරන්න. වෙනම ගබඩා කරන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම (turquoise) ලිඛිතව තියෙනවාද?",
          "Stabilized / dyed / untreated පැහැදිලිද?",
          "රැකවරණ උපදෙස් ලබාගත්තාද?",
        ]}
      />

      <Misconceptions
        items={[
          "නිල්-කොළ = untreated turquoise — බොහෝ විට stabilized / dyed.",
          "Turquoise ඉතා දෘඪයි — මෘදු; සැලකිලිමත් වන්න.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක treatment සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

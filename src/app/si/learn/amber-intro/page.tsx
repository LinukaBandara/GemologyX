import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Amber (ඇම්බර්) — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Amber යනු කුමක්ද, fossil resin, imitations (plastic / copal), රැකවරණය සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Amber (ඇම්බර්) — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/natural-vs-synthetic-gemstones"
      crumbLabel="ස්වභාවික vs කෘත්‍රිම"
      lastReviewed="2026-10-24"
      related={[
        { label: "ස්වභාවික vs කෘත්‍රිම", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Amber යනු fossilized tree resin එකකි (ඛනිජයක් නොවේ). ඉතා මෘදු (Mohs
          ~2–2.5). Plastic, glass, copal (younger resin) අනුකරණ බහුලය. පෙනුමෙන්
          පමණක් natural තීරණය නොකරන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Amber යනු කුමක්ද?">
        <p>කාබනික, fossil resin. Inclusions (insects ආදිය) තිබිය හැකියි — නමුත් inclusions පමණක් authenticity සහතික නොකරයි.</p>
      </ArticleSection>

      <ArticleSection heading="Imitations">
        <p>Plastic, glass, copal බහුලය. Pressed / reconstructed amber ද තිබිය හැකියි. නම සහ origin of material ලිඛිතව විමසන්න.</p>
      </ArticleSection>

      <ArticleSection heading="රැකවරණය">
        <p>ඉතා මෘදු. රසායනික ද්‍රව්‍ය, heat, ultrasonic වලින් වළකින්න. වෙනම ගබඩා කරන්න.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Natural amber ද imitation ද ලිඛිතව පැහැදිලිද?",
          "රැකවරණ අවදානම් තේරුම් ගත්තාද?",
          "පෙනුම පමණක් මත තීරණය නොකළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Insect inclusion = සෑම විටම real amber — නැහැ; fakes ද තියෙනවා.",
          "Amber දෘඪයි — ඉතා මෘදු.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

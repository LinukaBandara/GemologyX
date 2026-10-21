import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Jade (ජේඩ්) — Jadeite සහ Nephrite | GemologyX",
  description:
    "Jade යනු කුමක්ද, jadeite vs nephrite, treatments, හඳුනාගැනීමේ සීමා සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="Jade (ජේඩ්) — Jadeite සහ Nephrite"
      crumbHref="/si/learn/natural-vs-synthetic-gemstones"
      crumbLabel="ස්වභාවික vs කෘත්‍රිම"
      lastReviewed="2026-10-21"
      related={[
        { label: "ප්‍රතිකාර හෙළි කිරීම", href: "/si/learn/gemstone-treatment-disclosure" },
        { label: "මැණික් පරීක්ෂණ වාර්තාව", href: "/si/learn/how-to-read-gem-report" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          “Jade” යනු ඛනිජ දෙකකට භාවිත වන නාමයකි: jadeite සහ nephrite. ඒවා
          වෙනස් ඛනිජයන්. Jadeite (විශේෂයෙන් imperial green) බොහෝ විට වැඩි
          වෙළෙඳ අවධානයක් ලබයි. Treatments (bleach, polymer හෝ dye) තිබිය හැකියි —
          හෙළිදරව් කළ යුතුය. පෙනුමෙන් පමණක් type හෝ treatment තීරණය නොකරන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Jadeite vs Nephrite">
        <p>
          Jadeite සහ nephrite වෙනස් රසායනික / ඛනිජ සංයුතියක් ඇත. දෙකම “jade”
          ලෙස හැඳින්වේ. වෙළෙඳපොළේ jadeite බොහෝ විට වැඩි මිලකට සම්බන්ධ වේ —
          නමුත් ගුණාත්මකභාවය තීරණය කරයි.
        </p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර">
        <p>
          සමහර jade bleach, polymer impregnation, හෝ dye කර තිබේ. Type A / B /
          C වැනි වෙළෙඳ වර්ගීකරණ භාවිත විය හැකියි — අර්ථය lab / වෙළෙඳපොළ අනුව
          වෙනස් විය හැකියි. ලිඛිතව විමසන්න සහ වාර්තාව කියවන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <ul>
          <li>Jadeite ද nephrite ද?</li>
          <li>Treatment තත්ත්වය ලිඛිතව</li>
          <li>වාර්තාවක් තිබේ නම් සත්‍යාපනය</li>
          <li>වර්ණය විවිධ ආලෝකයේ බැලීම</li>
        </ul>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Jadeite / nephrite ලිඛිතව පැහැදිලිද?",
          "Treatment තත්ත්වය විමසුවාද?",
          "වාර්තාව සත්‍යාපනය කළාද?",
          "පෙනුම පමණක් මත තීරණය නොකළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Jade = එකම ඛනිජය — නැහැ; jadeite සහ nephrite දෙකක්.",
          "කොළ පැහැය = ඉහළම ගුණාත්මකභාවය — වර්ණය පමණක් නොවේ.",
          "Treatment නැති බව පෙනුමෙන් පැහැදිලියි — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ හෝ මිල සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

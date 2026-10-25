import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Synthetic / Lab-grown Sapphire | GemologyX",
  description:
    "Lab-grown sapphire යනු කුමක්ද, natural සමඟ වෙනස, disclosure සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Synthetic / Lab-grown Sapphire — මූලික"
      crumbHref="/si/learn/natural-vs-synthetic-gemstones"
      crumbLabel="ස්වභාවික vs කෘත්‍රිම"
      lastReviewed="2026-10-25"
      related={[
        { label: "ස්වභාවික vs කෘත්‍රිම", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "නිල්මැණික් මාර්ගෝපදේශය", href: "/si/learn/blue-sapphire-complete-guide" },
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
      ]}
    >
      <QuickAnswer>
        <p>
          Lab-grown / synthetic sapphire = chemically corundum, lab හි
          වර්ධනය වූ. Natural sapphire නොවේ; glass හෝ CZ ද නොවේ. Mohs 9 —
          durability සමාන විය හැකියි. මිල සහ rarity expectations වෙනස්. නම
          ලිඛිතව “laboratory-grown” / “synthetic” ලෙස හෙළි කළ යුතුය.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Same mineral, different origin">
        <p>Flame-fusion, hydrothermal, other methods. Visual separation often needs lab equipment.</p>
      </ArticleSection>

      <ArticleSection heading="Disclosure">
        <p>“Sapphire” alone can mislead if synthetic. Ask in writing. Report should state laboratory-grown when applicable.</p>
      </ArticleSection>

      <ArticleSection heading="Value context">
        <p>Usually lower price than comparable natural. Resale / collectible markets differ. Not “fake” — different category.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Natural / lab-grown ලිඛිතව පැහැදිලිද?",
          "වාර්තාවේ wording කියවුවාද?",
          "Price expectations natural සමඟ පටලවා නැද්ද?",
        ]}
      />

      <Misconceptions
        items={[
          "Synthetic sapphire = glass — නැහැ; real corundum.",
          "පෙනුමෙන් natural කියලා කිව හැකියි — බොහෝ විට නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Glass සහ මැණික් අතර වෙනස | GemologyX",
  description:
    "Glass imitations, common signs, limits of home tests සහ මිලදී ගැනීමේ ආරක්ෂාව.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Glass සහ මැණික් අතර වෙනස"
      crumbHref="/si/learn/natural-synthetic-imitation-gems"
      crumbLabel="ස්වභාවික / කෘත්‍රිම / අනුකරණ"
      lastReviewed="2026-10-25"
      related={[
        { label: "ස්වභාවික / කෘත්‍රිම / අනුකරණ", href: "/si/learn/natural-synthetic-imitation-gems" },
        { label: "වංචා අවදානම්", href: "/si/learn/avoid-gemstone-scams" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Glass = common imitation for many coloured stones. Bubbles, mould
          marks, low hardness can be clues — නමුත් home tests unreliable සහ
          damaging විය හැකියි. ලිඛිත identity + return policy + (මිල ඉහළ නම්)
          lab check.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Why glass is used">
        <p>Cheap, any colour, easy to mould. Sold honestly as glass හෝ misrepresented as gem.</p>
      </ArticleSection>

      <ArticleSection heading="Clues (not proof)">
        <p>Gas bubbles, rounded facet junctions, warm-to-touch myths — none are definitive alone. Scratch tests can destroy the item and still mislead.</p>
      </ArticleSection>

      <ArticleSection heading="Safe approach">
        <p>Buy from sellers who state material in writing. High price → independent testing. If unlabeled “blue stone” at gem prices — walk away.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Material නම ලිඛිතව තියෙනවාද?",
          "Price gem-level නම් — testing plan තියෙනවාද?",
          "Home scratch / flame tests avoid කළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Cold stone = real gem — glass ද cold විය හැකියි.",
          "Bubbles නැති නම් gem — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ID test එකක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

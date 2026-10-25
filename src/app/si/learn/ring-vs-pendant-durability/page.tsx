import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මුද්ද vs පෙන්ඩන්ට් — දෘඪතාව | GemologyX",
  description:
    "Daily ring vs pendant / earrings — which gems suit which jewelry type based on hardness and wear.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="මුද්ද vs පෙන්ඩන්ට් — ගලේ දෘඪතාව අනුව"
      crumbHref="/si/learn/mohs-hardness-guide"
      crumbLabel="Mohs දෘඪතාව"
      lastReviewed="2026-10-25"
      related={[
        { label: "Mohs දෘඪතාව", href: "/si/learn/mohs-hardness-guide" },
        { label: "Setting වර්ග", href: "/si/learn/jewelry-setting-types" },
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
      ]}
    >
      <QuickAnswer>
        <p>
          Daily rings take knocks and abrasion. Prefer harder stones (e.g.
          sapphire, ruby, diamond) and protective settings. Softer or cleaved
          gems (opal, emerald, tanzanite, pearl) often safer as pendants,
          earrings, or occasional-wear rings. Hardness is only one factor —
          toughness and treatment matter too.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Ring reality">
        <p>Desk work, gym, groceries — impact risk. Prongs wear. Soft gems abrade against quartz dust (everywhere).</p>
      </ArticleSection>

      <ArticleSection heading="Pendant / earring advantage">
        <p>Less contact with surfaces. Still avoid perfume on pearls/opal; still check bails and hooks.</p>
      </ArticleSection>

      <ArticleSection heading="Exceptions">
        <p>A bezel-set harder sapphire can be daily-friendly; a soft stone in a high-prong ring is a risk even if “pretty.”</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Wear frequency (daily vs occasional) decide කළාද?",
          "Stone hardness / toughness match ද?",
          "Setting protection enough ද?",
        ]}
      />

      <Misconceptions
        items={[
          "Any gem is fine in a ring if gold is expensive — metal ≠ gem durability.",
          "Hardness 7+ = unbreakable — cleavage and blows still matter.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ආභරණ design warranty එකක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Secondhand ආභරණ සහ මැණික් | GemologyX",
  description:
    "Used jewelry මිලදී ගැනීම — identity risk, wear, resizing, documentation සහ inspection tips.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Secondhand ආභරණ සහ මැණික් මිලදී ගැනීම"
      crumbHref="/si/learn/jewelry-with-gems-buying"
      crumbLabel="මැණික් සහිත ආභරණ"
      lastReviewed="2026-10-25"
      related={[
        { label: "මැණික් සහිත ආභරණ", href: "/si/learn/jewelry-with-gems-buying" },
        { label: "Setting වර්ග", href: "/si/learn/jewelry-setting-types" },
        { label: "වංචා අවදානම්", href: "/si/learn/avoid-gemstone-scams" },
      ]}
    >
      <QuickAnswer>
        <p>
          Secondhand can be good value — but identity, treatment, and condition
          are uncertain. Check prongs, wear, cracks, replacement stones.
          Old “certificate” may not match the current stone. Budget for
          independent inspection on significant purchases.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Condition">
        <p>Loose stones, thin prongs, worn shanks, repaired areas. Soft gems may show abrasion.</p>
      </ArticleSection>

      <ArticleSection heading="Documentation gaps">
        <p>Heirloom stories ≠ lab ID. Re-tipping / stone swaps happen. Verify any report number against the stone.</p>
      </ArticleSection>

      <ArticleSection heading="Resizing & service">
        <p>Ask whether ring can be resized safely (eternity, tension, full pave harder). Factor jeweler inspection cost into price.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Setting stability බැලුවාද?",
          "Stone identity assumed නොකළාද?",
          "Significant value නම් independent check plan තියෙනවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Old = always natural untreated — නැහැ.",
          "Family story = species proof — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. තක්සේරු හෝ authentication සේවාවක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

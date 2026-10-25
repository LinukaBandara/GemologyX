import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Geuda මිලදී ගැනීම | GemologyX",
  description:
    "Geuda යනු කුමක්ද, heat potential vs guarantee, risks when buying milky/untreated-looking corundum rough or preform.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Geuda මිලදී ගන්නා විට — ප්‍රායෝගික උපදෙස්"
      crumbHref="/si/learn/sri-lanka-gem-terms"
      crumbLabel="SL මැණික් පද"
      lastReviewed="2026-10-25"
      related={[
        { label: "SL මැණික් පද — Geuda", href: "/si/learn/sri-lanka-gem-terms" },
        { label: "Heat treatment", href: "/si/learn/heat-treatment-guide" },
        { label: "රළු මැණික් මිලදී ගැනීම", href: "/si/learn/buying-rough-gemstones" },
        { label: "රළු ගල් — ප්‍රශ්න", href: "/si/learn/rough-gem-questions" },
      ]}
    >
      <QuickAnswer>
        <p>
          Geuda = trade term often used in Sri Lanka for milky / included
          corundum that *may* improve with heat — not a guarantee of final
          colour or yield. Buying geuda is speculative. Price the risk, not the
          dream stone after heating.
        </p>
      </QuickAnswer>

      <ArticleSection heading="What sellers imply vs what is sure">
        <p>“This will come blue” is an opinion. Heating results vary by material. Weight loss and breakage are real.</p>
      </ArticleSection>

      <ArticleSection heading="Before you pay">
        <ul>
          <li>Identity as corundum confirmed how?</li>
          <li>Who heats, who pays, who bears loss?</li>
          <li>Written description of current state only</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Risk framing">
        <p>Treat budget as experiment capital unless you have proven process and trusted partners. Beginners overpay for stories.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Current appearance documented (not future fantasy)?",
          "Heat outcome not treated as guaranteed?",
          "Loss / yield risk accepted in writing mentally?",
        ]}
      />

      <Misconceptions
        items={[
          "Geuda = guaranteed fine blue after heat — නැහැ.",
          "Milky = always valuable potential — often not.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. Geuda heating result සහතික නොකරයි.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "UV Light සහ මැණික් — මිත්‍යා | GemologyX",
  description:
    "What UV fluorescence can and cannot prove about gem identity and treatments.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="UV Light සහ මැණික් — මිත්‍යාවන්"
      crumbHref="/si/learn/identify-sapphire"
      crumbLabel="නිල්මැණික් හඳුනාගැනීම"
      lastReviewed="2026-10-25"
      related={[
        { label: "නිල්මැණික් හඳුනාගැනීම", href: "/si/learn/identify-sapphire" },
        { label: "ස්වභාවික vs කෘත්‍රිම", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
      ]}
    >
      <QuickAnswer>
        <p>
          UV fluorescence is a clue, not a complete ID. Some natural stones glow,
          some synthetics glow, some of both stay inert. Colour of glow varies.
          Do not accept “UV test passed = real/unheated” as proof. Labs use UV
          with other tests.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Useful but limited">
        <p>Can support a hypothesis (e.g. certain fillers, some synthetics). Alone it cannot replace refractive, spectroscopic, or microscopic work.</p>
      </ArticleSection>

      <ArticleSection heading="Buyer takeaway">
        <p>Phone UV torch demos are entertainment until documented by a competent lab for the stone you are buying.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "UV result only evidence ලෙස භාවිත නොකළාද?",
          "High value නම් full lab path සලකා බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Glows under UV = synthetic — often false.",
          "No glow = natural unheated — often false.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. Diagnostic test protocol එකක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

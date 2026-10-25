import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "කැපීමේදී බර අහිමි වීම | GemologyX",
  description:
    "Rough to cut yield — why weight loss happens and how to think about cutter estimates.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="කැපීමේදී බර අහිමි වීම — තේරුම් ගැනීම"
      crumbHref="/si/learn/buying-rough-gemstones"
      crumbLabel="රළු මැණික් මිලදී ගැනීම"
      lastReviewed="2026-10-25"
      related={[
        { label: "රළු මැණික් මිලදී ගැනීම", href: "/si/learn/buying-rough-gemstones" },
        { label: "රළු නිල්මැණික් වටිනාකම", href: "/si/learn/rough-blue-sapphire-value" },
        { label: "කැරට් බර", href: "/si/learn/carat-weight-guide" },
      ]}
    >
      <QuickAnswer>
        <p>
          Cutting removes material for shape, clarity windows, and optics.
          Yield might be a fraction of rough weight. Cutter estimates are not
          contracts unless written. Plan value on conservative yield, not best-
          case Instagram outcomes.
        </p>
      </QuickAnswer>

      <ArticleSection heading="What drives loss">
        <p>Shape choice, inclusion placement, breakage risk, and fashion dimensions (e.g. calibrated sizes).</p>
      </ArticleSection>

      <ArticleSection heading="Talking to cutters">
        <p>Ask for range (low/mid/high), risks, and who owns loss if the stone breaks. Get expectations in writing when money is significant.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Yield estimate range (not single fantasy number)?",
          "Breakage responsibility clear ද?",
          "Pre-cut photos / weight logged ද?",
        ]}
      />

      <Misconceptions
        items={[
          "Rough carat ≈ finished carat — rarely.",
          "Higher paid cutter = guaranteed yield — skill helps; physics still applies.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. Cutting yield සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

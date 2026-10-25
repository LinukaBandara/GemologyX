import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "ව්‍යාජ Lab Reports හඳුනාගැනීම | GemologyX",
  description:
    "Fake or mismatched gem reports — verification, red flags, and what to do before trusting paperwork.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="ව්‍යාජ හෝ නොගැලපෙන Lab Reports"
      crumbHref="/si/learn/gem-certification-myths"
      crumbLabel="Certificate myths"
      lastReviewed="2026-10-25"
      related={[
        { label: "Certificate myths", href: "/si/learn/gem-certification-myths" },
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "වංචා අවදානම්", href: "/si/learn/avoid-gemstone-scams" },
      ]}
    >
      <QuickAnswer>
        <p>
          Fake reports exist: copied PDFs, edited numbers, real-looking logos.
          Always verify the report number on the *issuing lab’s official*
          website/portal. Match weight, shape, and plot to the stone in hand.
          No verify link + pressure to pay = walk away.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Verification steps">
        <ol>
          <li>Find official lab URL yourself (not only seller link)</li>
          <li>Enter report number</li>
          <li>Compare every field to the stone</li>
          <li>Beware “similar” photos or rounded weights</li>
        </ol>
      </ArticleSection>

      <ArticleSection heading="Red flags">
        <ul>
          <li>Lab name you cannot find independently</li>
          <li>Blurry seals, inconsistent fonts</li>
          <li>Seller refuses independent check time</li>
          <li>Report older than sensible + stone looks altered</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Real lab, wrong stone">
        <p>Paper can be authentic for a *different* gem. Matching is mandatory.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Official portal verify කළාද?",
          "Weight / shape / comments match ද?",
          "Independent check time තියෙනවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Hologram sticker = impossible to fake — not reliable alone.",
          "Famous lab name on paper = this stone is fine — verify number + match.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. Forensic document examination සේවාවක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

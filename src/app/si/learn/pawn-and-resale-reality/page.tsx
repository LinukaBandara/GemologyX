import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Pawn සහ නැවත විකිණීමේ යථාර්ථය | GemologyX",
  description:
    "Why resale and pawn offers are often far below retail — and how to think about exit value.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Pawn සහ නැවත විකිණීමේ යථාර්ථය"
      crumbHref="/si/learn/gem-insurance-appraisal"
      crumbLabel="Insurance / appraisal"
      lastReviewed="2026-10-25"
      related={[
        { label: "Insurance / appraisal", href: "/si/learn/gem-insurance-appraisal" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
        { label: "Certificate myths", href: "/si/learn/gem-certification-myths" },
      ]}
    >
      <QuickAnswer>
        <p>
          Retail price ≠ what you get when selling quickly. Pawn and many buy-
          back channels price risk, authentication cost, and their margin.
          Appraisal / replacement value is not a cash offer. Buy for use and
          knowledge first; treat resale as uncertain.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Why the gap exists">
        <p>Dealer must authenticate, hold, and resell. Soft market for niche stones. Documentation gaps lower offers.</p>
      </ArticleSection>

      <ArticleSection heading="Better exit habits">
        <p>Keep reports and receipts. Realistic timeline. Multiple quotes. Emotional “I paid X so it’s worth X” blocks clear decisions.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Purchase docs retained ද?",
          "Resale expectations retail ට පහළින් set කළාද?",
          "Urgent cash need නම් — separate emergency plan තියෙනවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Certificate value = pawn offer — නැහැ.",
          "Gold price alone sets gem jewelry buy-back — gems often discounted hard.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. මිල උපදෙස් හෝ තක්සේරුවක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

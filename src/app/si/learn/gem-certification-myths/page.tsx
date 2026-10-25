import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් Certificate පිළිබඳ මිත්‍යා | GemologyX",
  description:
    "Certificate / report myths — guarantee නොවීම, fake papers, lab differences සහ ගැනුම්කරුවන් දැනගත යුතු කරුණු.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික් Certificate පිළිබඳ මිත්‍යාවන්"
      crumbHref="/si/learn/how-to-read-gem-report"
      crumbLabel="වාර්තාවක් කියවීම"
      lastReviewed="2026-10-25"
      related={[
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "Labs මූලික", href: "/si/learn/gem-labs-overview" },
        { label: "Fake lab reports", href: "/si/learn/fake-lab-reports" },
      ]}
    >
      <QuickAnswer>
        <p>
          “Certificate” බොහෝ විට lab report එකකි — identity / treatment opinion
          මිස permanent value හෝ resale guarantee නොවේ. සියලු labs එකම
          නොවේ. Paper එකක් තිබීම = ගලේ quality automatic නැහැ. අංකය verify
          කරන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Report ≠ insurance policy">
        <p>Report describes what was tested. Market price moves. Damage, market, fashion change value.</p>
      </ArticleSection>

      <ArticleSection heading="Not all papers equal">
        <p>Lab reputation, methods, and wording differ. Unknown “institute” printouts need extra skepticism.</p>
      </ArticleSection>

      <ArticleSection heading="Match the stone">
        <p>Weight, dimensions, photo must fit. Mismatched paperwork is a hard stop.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Report number online verify කළාද?",
          "Stone measurements match ද?",
          "Value guarantee ලෙස interpret නොකළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Any certificate = real valuable gem — නැහැ.",
          "Certificate = can always resell at that price — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. තක්සේරු හෝ රක්ෂණ උපදෙස් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

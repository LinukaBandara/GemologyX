import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් Insurance සහ Appraisal | GemologyX",
  description:
    "Insurance appraisal යනු කුමක්ද, lab report සමඟ වෙනස, replacement value සහ ගැනුම්කරුවන් දැනගත යුතු කරුණු.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික් Insurance සහ Appraisal — මූලික"
      crumbHref="/si/learn/how-to-read-gem-report"
      crumbLabel="වාර්තාවක් කියවීම"
      lastReviewed="2026-10-25"
      related={[
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "Labs මූලික", href: "/si/learn/gem-labs-overview" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Lab report = identity / treatment opinion. Insurance appraisal =
          often replacement value for coverage. ඒවා එකම දෙයක් නොවේ. Appraisal
          value ≠ ඔබ ගෙවූ මිල හෝ resale price. Policy details insurer සමඟ
          පැහැදිලි කරගන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Lab report vs appraisal">
        <p>Report: species, treatment, measurements. Appraisal: described value for insurance. වෙනස් අරමුණු.</p>
      </ArticleSection>

      <ArticleSection heading="Replacement value">
        <p>බොහෝ appraisals retail replacement estimate එකක්. Market changes; update periodically. Resale / pawn value බොහෝ විට අඩුය.</p>
      </ArticleSection>

      <ArticleSection heading="Practical steps">
        <ul>
          <li>Photos + documents තබාගන්න</li>
          <li>Insurer requirements අසන්න</li>
          <li>Scheduled personal property vs homeowners limits</li>
          <li>Update after major purchase or market shift</li>
        </ul>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Lab report සහ purchase receipt තියෙනවාද?",
          "Insurer appraisal requirements දැනගත්තාද?",
          "Appraisal value = resale price නොවන බව තේරුම් ගත්තාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Appraisal value = ඔබට ලැබෙන cash — බොහෝ විට replacement estimate.",
          "Lab report = automatic insurance — policy වෙනම.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. රක්ෂණ හෝ නීති උපදෙස් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

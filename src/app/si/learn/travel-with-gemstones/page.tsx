import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් සමඟ ගමන් කිරීම | GemologyX",
  description:
    "ගුවන් ගමන්, ආරක්ෂාව, ලේඛන, හානි අවදානම් — මැණික් / ආභරණ රැගෙන යන විට.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="මැණික් සහ ආභරණ සමඟ ගමන් කිරීම"
      crumbHref="/si/learn/gemstone-care-general"
      crumbLabel="මැණික් රැකවරණය"
      lastReviewed="2026-10-25"
      related={[
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
        { label: "Insurance / appraisal", href: "/si/learn/gem-insurance-appraisal" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          වටිනා ආභරණ carry-on හි තබන්න — checked baggage නොවේ. Soft pouch /
          separate compartments. Documents (receipts, reports) copies. Hotel
          safe / insurance limits පරීක්ෂා කරන්න. Local laws on undeclared
          valuables වෙනස් විය හැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Transport">
        <p>Carry-on. Soft lining, stones not rubbing each other. Avoid extreme heat in cars.</p>
      </ArticleSection>

      <ArticleSection heading="Documents">
        <p>Photos, receipts, lab reports (copies). High-value: check customs / declaration rules for origin and destination countries.</p>
      </ArticleSection>

      <ArticleSection heading="Security">
        <p>Minimize flashing valuables. Hotel safe limitations. Travel insurance vs home policy — confirm coverage away from home.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Carry-on හි තියෙනවාද (checked නොවේ)?",
          "Documents / photos තියෙනවාද?",
          "Insurance coverage travel සඳහා තහවුරු කළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Checked bag safer — loss / theft / rough handling අවදානම්.",
          "Hotel safe = full insurance — limits කියවන්න.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. රක්ෂණ හෝ රේගු නීති උපදෙස් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

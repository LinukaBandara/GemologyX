import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Fluorite — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Fluorite යනු කුමක්ද, වර්ණ විවිධත්වය, අඩු දෘඪතාව, රැකවරණය සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Fluorite — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/mohs-hardness-guide"
      crumbLabel="Mohs දෘඪතාව"
      lastReviewed="2026-10-24"
      related={[
        { label: "Mohs දෘඪතාව", href: "/si/learn/mohs-hardness-guide" },
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Fluorite යනු වර්ණ බහුල ඛනිජයකි (දම්, කොළ, නිල්, කහ…). දෘඪතාව Mohs 4
          — ඉතා මෘදු; දෛනික මුදු සඳහා සාමාන්‍යයෙන් නුසුදුසු. Cleavage තිබේ.
          Collector / occasional-wear ගලක් ලෙස සලකන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="වර්ණ">
        <p>ඉතා විවිධ. Banding සහ colour zoning බහුලය. පෙනුමෙන් අනෙකුත් ගල් සමඟ පටලවා ගත හැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="දෘඪතාව සහ රැකවරණය">
        <p>Mohs 4 + perfect cleavage = සීරීම් සහ බිඳීම් අවදානම් ඉහළයි. වෙනම ගබඩා කරන්න. Ultrasonic / hard knocks වලින් වළකින්න.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම (fluorite) ලිඛිතව තියෙනවාද?",
          "දෘඪතා අවදානම් තේරුම් ගත්තාද?",
          "දෛනික භාවිතයට සුදුසුදැයි සලකා බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "ලස්සන වර්ණය = දෛනික මුදුවට OK — fluorite මෘදුයි.",
          "Fluorite = fluorite glass / slag — වෙනස් ද්‍රව්‍ය විය හැකියි; නම පැහැදිලි කරගන්න.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක durability සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

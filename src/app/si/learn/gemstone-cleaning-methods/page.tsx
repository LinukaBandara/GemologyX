import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් පිරිසිදු කිරීමේ ක්‍රම | GemologyX",
  description:
    "කුමන ගල්වලට warm water + mild soap OK ද, ultrasonic / steam අවදානම් ද — සාමාන්‍ය මාර්ගෝපදේශය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික් පිරිසිදු කිරීමේ ක්‍රම — සාමාන්‍ය මාර්ගෝපදේශය"
      crumbHref="/si/learn/gemstone-care-general"
      crumbLabel="මැණික් රැකවරණය"
      lastReviewed="2026-10-25"
      related={[
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
        { label: "නිල්මැණික් රැකවරණය", href: "/si/learn/blue-sapphire-care" },
        { label: "Opal හැඳින්වීම", href: "/si/learn/opal-intro" },
      ]}
    >
      <QuickAnswer>
        <p>
          බොහෝ hard, untreated stones: lukewarm water + mild soap + soft brush.
          Ultrasonic / steam: emerald (oiled), opal, pearl, coral, turquoise,
          fracture-filled stones වලට අවදානම්. ගලේ identity සහ treatment නොදන්නේ
          නම් gentle method පමණක්.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Safe default">
        <p>Warm water, drop of mild dish soap, soft toothbrush, rinse, soft cloth dry. Jewelry වෙනම — metal settings ද සලකන්න.</p>
      </ArticleSection>

      <ArticleSection heading="Avoid හෝ caution">
        <ul>
          <li>Ultrasonic — filled, porous, brittle stones</li>
          <li>Steam — same group + sudden heat</li>
          <li>Harsh chemicals, bleach, acetone (unless pro advice)</li>
          <li>Toothpaste / baking soda abrasives</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="When in doubt">
        <p>Jeweler / gemologist ගෙන් treatment-aware cleaning ඉල්ලන්න. Home experiments අවදානම්.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ identity සහ treatment දන්නවාද?",
          "Ultrasonic භාවිතයට පෙර safe දැයි තහවුරු කළාද?",
          "Harsh chemicals avoid කළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "සියලුම මැණික් ultrasonic OK — නැහැ.",
          "වඩා ශක්තිමත් cleaner = හොඳයි — abrasives / chemicals හානි කරයි.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය සාමාන්‍ය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක cleaning warranty එකක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

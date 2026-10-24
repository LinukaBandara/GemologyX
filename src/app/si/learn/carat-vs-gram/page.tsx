import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික්වල කැරට් සහ ග්‍රෑම් අතර වෙනස | GemologyX",
  description:
    "කැරට් සහ ග්‍රෑම් අතර වෙනස, පරිවර්තනය, සහ බර පමණක් මිල තීරණය නොකරන්නේ ඇයි.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 4"
      title="මැණික්වල කැරට් සහ ග්‍රෑම් අතර වෙනස"
      crumbHref="/si/learn/gemstone-buying-checklist"
      crumbLabel="මිලදී ගැනීමේ checklist"
      lastReviewed="2026-10-24"
      related={[
        { label: "නිල්මැණික් කැරට් මිල", href: "/si/learn/blue-sapphire-price-per-carat" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
        { label: "රළු මැණික් මිලදී ගැනීම", href: "/si/learn/buying-rough-gemstones" },
      ]}
    >
      <QuickAnswer>
        <p>
          1 කැරට් = ග්‍රෑම් 0.2. 5 කැරට් = ග්‍රෑම් 1. මැණික් වෙළෙඳාමේදී බර
          සාමාන්‍යයෙන් කැරට් වලින්. බර වැඩි වුණා කියලා වටිනාකම අනිවාර්යයෙන්
          වැඩි වෙන්නේ නැහැ — වර්ණය, පැහැදිලි බව, ප්‍රතිකාර, කැපීමද වැදගත්.
        </p>
      </QuickAnswer>

      <ArticleSection heading="කැරට් කියන්නේ මොකක්ද?">
        <p>
          මැණික් බර සඳහන් කිරීමට බහුල ඒකකය. 1 carat = 0.2 gram.
        </p>
      </ArticleSection>

      <ArticleSection heading="සරල පරිවර්තන">
        <ul>
          <li>1 කැරට් = ග්‍රෑම් 0.2</li>
          <li>5 කැරට් = ග්‍රෑම් 1</li>
          <li>10 කැරට් = ග්‍රෑම් 2</li>
          <li>1 ග්‍රෑම් = කැරට් 5</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="බර ≠ වටිනාකම">
        <p>
          බර සමාන ගල් දෙකක වර්ණය, පැහැදිලි බව, ගල් වර්ගය, ප්‍රතිකාර, කැපීම
          වෙනස් විය හැකියි. බර පමණක් බලා මිල තීරණය නොකරන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "බර කුමන ඒකකයෙන්ද (කැරට් / ග්‍රෑම්) පැහැදිලිද?",
          "බර ලිඛිතව / රිසිට්පතේ තියෙනවාද?",
          "බර පමණක් මත මිල තීරණය නොකළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "බර වැඩි = සෑම විටම මිල වැඩි — නැහැ; ගුණාත්මකභාවය තීරණය කරයි.",
          "කැරට් සහ ග්‍රෑම් එකම දෙයක් — නැහැ; 5:1 අනුපාතය.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක මිල සහතික නොකරයි.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

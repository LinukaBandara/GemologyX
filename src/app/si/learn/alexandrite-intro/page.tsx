import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Alexandrite — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Alexandrite යනු කුමක්ද, colour-change, chrysoberyl පවුල, synthetic සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Alexandrite — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/chrysoberyl-intro"
      crumbLabel="Chrysoberyl හැඳින්වීම"
      lastReviewed="2026-10-24"
      related={[
        { label: "Chrysoberyl හැඳින්වීම", href: "/si/learn/chrysoberyl-intro" },
        { label: "ස්වභාවික vs කෘත්‍රිම", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Alexandrite යනු colour-change chrysoberyl. දිවා ආලෝකයේ කොළ / රාත්‍රී
          (incandescent) ආලෝකයේ රතු-දම් වැනි වෙනසක් පෙනිය හැකියි. Synthetic
          alexandrite සහ colour-change sapphire / glass ද තිබේ. පෙනුමෙන් පමණක්
          natural තීරණය නොකරන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Colour-change">
        <p>ආලෝක මූලාශ්‍රය අනුව වර්ණය වෙනස් වීම alexandrite හි ප්‍රධාන ලක්ෂණයයි. ශක්තිය සහ වර්ණ පරාසය ගලෙන් ගලට වෙනස්.</p>
      </ArticleSection>

      <ArticleSection heading="Chrysoberyl පවුල">
        <p>Alexandrite = variety of chrysoberyl. Cat’s-eye chrysoberyl වෙනම ප්‍රභේදයකි.</p>
      </ArticleSection>

      <ArticleSection heading="Synthetic සහ look-alikes">
        <p>Lab-grown alexandrite සහ colour-change sapphire / synthetic corundum / glass තිබිය හැකියි. නම සහ species ලිඛිතව විමසන්න. වාර්තාව සත්‍යාපනය කරන්න.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම (alexandrite / chrysoberyl) ලිඛිතව තියෙනවාද?",
          "Natural / synthetic පැහැදිලිද?",
          "Colour-change විවිධ ආලෝකයේ බැලුවාද?",
          "වාර්තාව සත්‍යාපනය කළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Colour-change = සෑම විටම natural alexandrite — නැහැ.",
          "මිල ඉහළ නම් natural — නිශ්චිත නීතියක් නැහැ; වාර්තාව බලන්න.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ හෝ මිල සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

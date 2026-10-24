import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Chrysoberyl — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Chrysoberyl යනු කුමක්ද, alexandrite සහ cat’s-eye, දෘඪතාව සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Chrysoberyl — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/alexandrite-intro"
      crumbLabel="Alexandrite හැඳින්වීම"
      lastReviewed="2026-10-24"
      related={[
        { label: "Alexandrite හැඳින්වීම", href: "/si/learn/alexandrite-intro" },
        { label: "Mohs දෘඪතාව", href: "/si/learn/mohs-hardness-guide" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Chrysoberyl යනු දෘඪ (Mohs ~8.5) ඛනිජයකි. Alexandrite (colour-change) සහ
          cat’s-eye chrysoberyl එහි ප්‍රසිද්ධ ප්‍රභේදයන්. සාමාන්‍ය chrysoberyl
          කහ-කොළ / දුඹුරු විය හැකියි. පෙනුමෙන් පමණක් variety තීරණය නොකරන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Chrysoberyl යනු කුමක්ද?">
        <p>BeAl₂O₄ mineral. දෘඪතාව ඉහළ (~8.5) — බොහෝ දෛනික භාවිතයට සුදුසුය.</p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රභේද">
        <ul>
          <li>Alexandrite — colour-change</li>
          <li>Cat’s-eye chrysoberyl — chatoyancy</li>
          <li>Ordinary chrysoberyl — කහ / කොළ / දුඹුරු</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <p>Variety නම ලිඛිතව. Natural / synthetic. වාර්තාව (මිල ඉහළ නම්).</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම / variety ලිඛිතව තියෙනවාද?",
          "Natural / synthetic පැහැදිලිද?",
          "Alexandrite නම් — colour-change බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Chrysoberyl = සෑම විටම alexandrite — නැහැ; variety කිහිපයක්.",
          "Cat’s-eye = සෑම විටම chrysoberyl — වෙනත් ගල්වලද chatoyancy තියෙනවා.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

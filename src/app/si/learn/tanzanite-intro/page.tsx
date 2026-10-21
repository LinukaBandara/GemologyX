import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Tanzanite — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Tanzanite යනු කුමක්ද, වර්ණය, heat treatment, දෘඪතාව සහ මිලදී ගැනීමේදී සැලකිලිමත් විය යුතු දේ.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Tanzanite — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/blue-sapphire-complete-guide"
      crumbLabel="නිල්මැණික් මාර්ගෝපදේශය"
      lastReviewed="2026-10-21"
      related={[
        { label: "නිල්මැණික් මාර්ගෝපදේශය", href: "/si/learn/blue-sapphire-complete-guide" },
        { label: "Heat treatment", href: "/si/learn/heat-treatment-guide" },
        { label: "Mohs දෘඪතාව", href: "/si/learn/mohs-hardness-guide" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Tanzanite යනු නිල්-දම් පැහැති zoisite ප්‍රභේදයකි. Sapphire නොවේ.
          බොහෝ tanzanite heat treated. දෘඪතාව ~6–7 — දෛනික මුදු සඳහා sapphire
          ට වඩා සැලකිලිමත් විය යුතුය. පෙනුමෙන් පමණක් හඳුනාගත නොහැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Tanzanite යනු කුමක්ද?">
        <p>
          Tanzanite = blue-violet variety of zoisite. ප්‍රධාන මූලාරම්භය Tanzania.
          නිල් sapphire සමඟ පෙනුමෙන් පටලවා ගත හැකියි නමුත් ඛනිජය වෙනස්.
        </p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර">
        <p>
          බොහෝ tanzanite heat treated වර්ණය වැඩිදියුණු කිරීමට. Treatment
          තත්ත්වය ලිඛිතව විමසන්න. වාර්තාවේ notes කියවන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="දෘඪතාව සහ රැකවරණය">
        <p>
          Mohs ~6–7. Sapphire (9) ට වඩා මෘදුය. සීරීම් සහ බිඳීම් අවදානම්.
          දෛනික භාවිත මුදු සඳහා සැලකිලිමත් වන්න. වෙනම ගබඩා කරන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම (tanzanite / zoisite) ලිඛිතව තියෙනවාද?",
          "ප්‍රතිකාර තත්ත්වය විමසුවාද?",
          "දෘඪතාව / රැකවරණය තේරුම් ගත්තාද?",
          "Sapphire ලෙස වැරදියට නොගත්තාද?",
        ]}
      />

      <Misconceptions
        items={[
          "නිල් පැහැය = sapphire — නැහැ; tanzanite ද තියෙනවා.",
          "Tanzanite sapphire තරම් දෘඪයි — නැහැ.",
          "සියලුම tanzanite untreated — බොහෝ විට heat treated.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ හෝ මිල සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

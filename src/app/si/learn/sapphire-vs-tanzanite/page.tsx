import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "නිල්මැණික් සහ Tanzanite අතර වෙනස | GemologyX",
  description:
    "Blue sapphire සහ tanzanite — ඛනිජ වෙනස, දෘඪතාව, heat treatment සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="නිල්මැණික් සහ Tanzanite අතර වෙනස"
      crumbHref="/si/learn/tanzanite-intro"
      crumbLabel="Tanzanite හැඳින්වීම"
      lastReviewed="2026-10-25"
      related={[
        { label: "Tanzanite හැඳින්වීම", href: "/si/learn/tanzanite-intro" },
        { label: "නිල්මැණික් මාර්ගෝපදේශය", href: "/si/learn/blue-sapphire-complete-guide" },
        { label: "Mohs දෘඪතාව", href: "/si/learn/mohs-hardness-guide" },
      ]}
    >
      <QuickAnswer>
        <p>
          Blue sapphire = corundum (Mohs 9). Tanzanite = zoisite (Mohs ~6–7).
          දෙකම නිල් පැහැයක් දැක්විය හැකි නමුත් ඛනිජය සහ durability වෙනස්.
          Tanzanite බොහෝ විට heat treated. පෙනුමෙන් පමණක් වෙනස් කළ නොහැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="ඛනිජ සහ දෘඪතාව">
        <p>Sapphire දෘඪතාව ඉහළ; tanzanite මධ්‍යස්ථ + cleavage අවදානම්. දෛනික මුදු සඳහා sapphire බොහෝ විට වඩා ඔරොත්තු දෙයි.</p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර">
        <p>දෙකටම heat තිබිය හැකියි. Treatment තත්ත්වය ලිඛිතව විමසන්න.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම (sapphire / tanzanite) ලිඛිතව තියෙනවාද?",
          "ප්‍රතිකාර තත්ත්වය විමසුවාද?",
          "දෘඪතා / රැකවරණ වෙනස තේරුම් ගත්තාද?",
        ]}
      />

      <Misconceptions
        items={[
          "නිල් පැහැය = sapphire — tanzanite ද තියෙනවා.",
          "Tanzanite = rare sapphire — වෙනම ඛනිජයකි.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

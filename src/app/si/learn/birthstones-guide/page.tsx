import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Birthstones (උපන් මාස මැණික්) | GemologyX",
  description:
    "Traditional / modern birthstone lists, durability, alternatives සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Birthstones (උපන් මාස මැණික්) — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/gemstone-gift-buying"
      crumbLabel="තෑග්ගක් මිලදී ගැනීම"
      lastReviewed="2026-10-25"
      related={[
        { label: "තෑග්ගක් මිලදී ගැනීම", href: "/si/learn/gemstone-gift-buying" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
        { label: "Mohs දෘඪතාව", href: "/si/learn/mohs-hardness-guide" },
      ]}
    >
      <QuickAnswer>
        <p>
          Birthstone lists traditional සහ modern වශයෙන් වෙනස් විය හැකියි.
          එක් මාසයකට ගල් කිහිපයක් assign වී තිබිය හැකියි. Symbolism පුද්ගලිකයි
          — gemological quality, durability සහ budget තවමත් වැදගත්. Soft
          birthstones daily rings වලට නුසුදුසු විය හැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Lists vary">
        <p>US, UK, older traditional lists වෙනස්. “Official” එකක් ගෝලීයව එකක් නැත. Seller list එකක් = marketing frame එකක් විය හැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="Durability first">
        <p>Opal, pearl, peridot වැනි softer stones — protective settings හෝ occasional wear. Sapphire / ruby — daily friendlier.</p>
      </ArticleSection>

      <ArticleSection heading="Buying tips">
        <p>Same checklist as any gem: identity, treatment, return policy. Birthstone label ≠ quality guarantee.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "List / tradition තේරුම් ගත්තාද (marketing vs preference)?",
          "Durability lifestyle ට ගැළපේද?",
          "Identity + treatment documented ද?",
        ]}
      />

      <Misconceptions
        items={[
          "Birthstone = automatic high value — නැහැ.",
          "එක මාසයකට එක ගලක් පමණයි — lists වල alternatives තියෙනවා.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. සංකේතාත්මක හෝ ආධ්‍යාත්මික claim එකක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

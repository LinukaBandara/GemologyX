import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Mohs දෘඪතා පරිමාණය — මැණික්වලට ඇති අර්ථය | GemologyX",
  description:
    "Mohs hardness scale යනු කුමක්ද, මැණික් රැකවරණයට සහ භාවිතයට එය බලපාන ආකාරය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Mohs දෘඪතා පරිමාණය — මැණික්වලට ඇති අර්ථය"
      crumbHref="/si/learn/gemstone-care-general"
      crumbLabel="මැණික් රැකවරණය"
      lastReviewed="2026-10-21"
      related={[
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
        { label: "නිල්මැණික් රැකවරණය", href: "/si/learn/blue-sapphire-care" },
        { label: "කැරට් vs ග්‍රෑම්", href: "/si/learn/carat-vs-gram" },
      ]}
    >
      <QuickAnswer>
        <p>
          Mohs scale යනු ඛනිජවල සාපේක්ෂ දෘඪතාව (scratch resistance) මනින 1–10
          පරිමාණයකි. Diamond = 10, Corundum (ruby/sapphire) = 9. දෘඪතාව ඉහළ
          නමුත් ඉරිතැලීම් තිබේ නම් ගල බිඳිය හැකියි — hardness ≠ toughness.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Mohs scale යනු කුමක්ද?">
        <p>
          එක් ඛනිජයක් තවත් එකක් සීරීමට හැකිද යන්න මත පදනම් වූ සාපේක්ෂ පරිමාණයකි.
          එය absolute measurement එකක් නොවේ. 1 (talc) සිට 10 (diamond) දක්වාය.
        </p>
      </ArticleSection>

      <ArticleSection heading="පොදු මැණික් අගයන් (ආසන්න)">
        <ul>
          <li>Diamond — 10</li>
          <li>Ruby / Sapphire (corundum) — 9</li>
          <li>Topaz — 8</li>
          <li>Spinel — ~8</li>
          <li>Emerald (beryl) — 7.5–8</li>
          <li>Quartz / Amethyst — 7</li>
          <li>Opal — ~5–6.5</li>
        </ul>
        <p>මේවා පොදු අගයන්ය; වෙනස්කම් තිබිය හැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="Hardness vs Toughness">
        <p>
          Hardness = සීරීමට ඇති ප්‍රතිරෝධය. Toughness = බිඳීමට / පැලීමට ඇති
          ප්‍රතිරෝධය. දෘඪතාව ඉහළ ගලක්ද ඉරිතැලීම් තිබේ නම් පහසුවෙන් බිඳිය හැකියි
          (උදා: සමහර emerald).
        </p>
      </ArticleSection>

      <ArticleSection heading="රැකවරණයට ඇති අර්ථය">
        <p>
          දෘඪතාව අඩු ගල් දෘඪතාව ඉහළ ගල් සමඟ ගැටී සීරී යා හැකියි. ඒ නිසා ගල්
          වෙනම ගබඩා කරන්න. දෛනික භාවිතයේදී (මුදු) දෘඪතාව සහ toughness දෙකම
          සලකා බලන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ වර්ගයේ දෘඪතාව ගැන අදහසක් තියෙනවාද?",
          "ගල් වෙනම ගබඩා කරනවාද?",
          "දෛනික භාවිතයට ගලේ toughness ගැන සිතුවාද?",
          "Hardness = කිසිම හානියක් නැහැ කියලා උපකල්පනය නොකළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Mohs 9 නම් කිසිම හානියක් නොවේ — ඉරිතැලීම් තියෙනවා නම් බිඳිය හැකියි.",
          "Hardness = toughness — නැහැ; වෙනස් ගුණාංග දෙකකි.",
          "සියලුම ‘hard’ ගල් දෛනික මුදු සඳහා සමානව සුදුසුයි — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක durability සහතිකයක්
          නොවේ.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

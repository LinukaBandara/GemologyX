import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Moonstone — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Moonstone යනු කුමක්ද, adularescence, දෘඪතාව, රැකවරණය සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Moonstone — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/opal-intro"
      crumbLabel="Opal හැඳින්වීම"
      lastReviewed="2026-10-24"
      related={[
        { label: "Opal හැඳින්වීම", href: "/si/learn/opal-intro" },
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
        { label: "Mohs දෘඪතාව", href: "/si/learn/mohs-hardness-guide" },
      ]}
    >
      <QuickAnswer>
        <p>
          Moonstone යනු feldspar පවුලේ ගලකි. Adularescence (අභ්‍යන්තර ආලෝක
          දිලිසීම / billowy sheen) ප්‍රධාන ලක්ෂණයකි. දෘඪතාව ~6–6.5; cleavage
          තිබිය හැකියි. දෛනික මුදු සඳහා සැලකිලිමත් රැකවරණය අවශ්‍යය.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Adularescence">
        <p>ආලෝකය වෙනස් වන විට ඇතුළතින් පාවෙන වගේ sheen එකක්. Rainbow moonstone වැනි නාම වෙළෙඳ භාවිතයේදී labradorite ආදියටද යෙදිය හැකියි — නම පැහැදිලි කරගන්න.</p>
      </ArticleSection>

      <ArticleSection heading="දෘඪතාව සහ රැකවරණය">
        <p>Mohs ~6–6.5. සීරීම් සහ බිඳීම් අවදානම්. Ultrasonic / steam සාමාන්‍යයෙන් නුසුදුසු. වෙනම ගබඩා කරන්න.</p>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <p>Sheen ශක්තිය විවිධ ආලෝකයේ බලන්න. ඉරිතැලීම් / කැඩුණු කොන් පරීක්ෂා කරන්න. නම (moonstone / labradorite ආදිය) ලිඛිතව.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම ලිඛිතව තියෙනවාද?",
          "Adularescence / sheen බැලුවාද?",
          "රැකවරණ අවදානම් තේරුම් ගත්තාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Moonstone ඉතා දෘඪයි — මධ්‍යස්ථ; සැලකිලිමත් වන්න.",
          "Rainbow moonstone = සෑම විටම classic moonstone — නාමය වෙනස් ගල්වලටද යෙදිය හැකියි.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක durability සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "ස්වභාවික, කෘත්‍රිම සහ අනුකරණ මැණික් පද | GemologyX",
  description:
    "Natural, lab-grown, synthetic, imitation සහ assembled ගල් ගැන වෙළෙඳාමේ පද තේරුම් ගනිමු.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික් විකිණීමේදී භාවිත වන පද තේරුම් ගනිමු"
      crumbHref="/si/learn/natural-vs-synthetic-gemstones"
      crumbLabel="ස්වභාවික vs කෘත්‍රිම"
      lastReviewed="2026-10-24"
      related={[
        { label: "ස්වභාවික vs කෘත්‍රිම", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Natural = ස්වභාවික. Lab-grown / synthetic = රසායනාගාරයේ නිපදවූ.
          Imitation = පෙනුමෙන් සමාන වෙනත් ද්‍රව්‍යයක්. Assembled = කොටස් දෙකක්
          හෝ වැඩි ගණනක් එකතු කළ (doublet / triplet). පදයක් අසන විට අර්ථය
          ලිඛිතව පැහැදිලි කරගන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Natural">
        <p>පෘථිවියේ සෑදුණු. ප්‍රතිකාර කර තිබිය හැකියි — එය වෙනම කාරණයකි.</p>
      </ArticleSection>

      <ArticleSection heading="Lab-grown / Synthetic">
        <p>රසායනාගාරයේ නිපදවූ; බොහෝ විට රසායනිකව සමාන. Imitation නොවේ.</p>
      </ArticleSection>

      <ArticleSection heading="Imitation">
        <p>පෙනුමෙන් සමාන වෙනත් ද්‍රව්‍යයක් (උදා: වීදුරු). Species එකම නොවේ.</p>
      </ArticleSection>

      <ArticleSection heading="Assembled (doublet / triplet)">
        <p>කොටස් කිහිපයක් එකතු කළ ගල්. විශේෂයෙන් opal වෙළෙඳපොළේ බහුල විය හැකියි.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "පදයේ අර්ථය ලිඛිතව පැහැදිලිද?",
          "Natural / synthetic / imitation වෙනස තේරුම් ගත්තාද?",
          "වාර්තාවේ terminology කියවුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Synthetic = ව්‍යාජ / වීදුරු — නැහැ.",
          "පදයක් දන්නවා නම් ගලේ වටිනාකම තීරණය කළ හැකියි — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

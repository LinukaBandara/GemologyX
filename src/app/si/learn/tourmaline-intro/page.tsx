import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Tourmaline — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Tourmaline යනු කුමක්ද, වර්ණ විවිධත්වය (paraiba, indicolite, rubellite), හඳුනාගැනීමේ සීමා සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Tourmaline — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/garnet-intro"
      crumbLabel="Garnet හැඳින්වීම"
      lastReviewed="2026-10-21"
      related={[
        { label: "Garnet හැඳින්වීම", href: "/si/learn/garnet-intro" },
        { label: "Heat treatment", href: "/si/learn/heat-treatment-guide" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Tourmaline යනු වර්ණ බහුල ඛනිජ කාණ්ඩයකි — කොළ, නිල්, රෝස, රතු, බහු-වර්ණ
          (watermelon) ආදිය. Paraiba, indicolite, rubellite වැනි නාම වර්ණ /
          වර්ග සමඟ සම්බන්ධ වේ. පෙනුමෙන් පමණක් species හෝ origin තීරණය නොකරන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Tourmaline යනු කුමක්ද?">
        <p>
          Tourmaline = complex borosilicate mineral group. වර්ණ පරාසය ඉතා
          පුළුල්. එක් ගලක වර්ණ කිහිපයක් (bi-color, watermelon) තිබිය හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="පොදු නාම">
        <ul>
          <li>Rubellite — රතු / රෝස-රතු</li>
          <li>Indicolite — නිල්</li>
          <li>Paraiba — තඹ-අන්තර්ගත, දීප්තිමත් නිල්-කොළ (origin/type සීමා තිබිය හැකියි)</li>
          <li>Watermelon — කොළ පිටත, රෝස මැද</li>
        </ul>
        <p>නාමයක් පමණක් origin හෝ ගුණාත්මකභාවය සහතික නොකරයි.</p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර">
        <p>
          Heat සහ අනෙකුත් ප්‍රතිකාර තිබිය හැකියි. Treatment තත්ත්වය ලිඛිතව
          විමසන්න. වාර්තාවේ notes කියවන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම / වර්ගය ලිඛිතව තියෙනවාද?",
          "ප්‍රතිකාර තත්ත්වය විමසුවාද?",
          "Paraiba වැනි නාමයක් තිබේ නම් — වාර්තාව / සීමාවන් බැලුවාද?",
          "වර්ණය විවිධ ආලෝකයේ බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Tourmaline = එක වර්ණයක් පමණයි — නැහැ; ඉතා විවිධ.",
          "Paraiba නාමය = සෑම විටම එකම origin — සීමා සහ definitions වෙනස් විය හැකියි.",
          "පෙනුමෙන් species තීරණය කළ හැකියි — බොහෝ විට නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ හෝ origin සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

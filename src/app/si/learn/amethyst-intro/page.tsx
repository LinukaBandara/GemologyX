import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Amethyst (නීලකාන්ත) — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Amethyst යනු කුමක්ද, දම් පැහැය, heat treatment, දෘඪතාව සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Amethyst (නීලකාන්ත) — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/natural-vs-synthetic-gemstones"
      crumbLabel="ස්වභාවික vs කෘත්‍රිම"
      lastReviewed="2026-10-21"
      related={[
        { label: "Heat treatment", href: "/si/learn/heat-treatment-guide" },
        { label: "Mohs දෘඪතාව", href: "/si/learn/mohs-hardness-guide" },
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Amethyst යනු දම් පැහැති quartz. දෘඪතාව 7 — සාමාන්‍ය භාවිතයට සුදුසුය.
          Heat treatment මගින් වර්ණය වෙනස් කළ හැකියි (සමහර විට citrine බවට).
          Synthetic amethyst ද තිබේ. පෙනුමෙන් පමණක් natural / synthetic තීරණය
          නොකරන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Amethyst යනු කුමක්ද?">
        <p>
          Amethyst = purple variety of quartz. වර්ණය ලා දම් සිට ගැඹුරු දම්
          දක්වා. Quartz පවුලේ අනෙකුත් ප්‍රභේද (citrine, smoky quartz) සමඟ
          සම්බන්ධය.
        </p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර">
        <p>
          Heat මගින් වර්ණය වෙනස් කළ හැකියි. සමහර amethyst heat කළ විට citrine
          වැනි වර්ණයක් ලැබේ. Treatment තත්ත්වය අසන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="රැකවරණය">
        <p>
          Mohs 7 — බොහෝ දෛනික භාවිතයට ප්‍රමාණවත්. තවමත් දෘඪ ගල් (sapphire,
          diamond) සමඟ ගැටීමෙන් සීරී යා හැකියි. වෙනම ගබඩා කරන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම (amethyst / quartz) ලිඛිතව තියෙනවාද?",
          "Natural / synthetic ගැන විමසුවාද?",
          "ප්‍රතිකාර තත්ත්වය අසුවාද?",
          "වර්ණය විවිධ ආලෝකයේ බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "දම් පැහැය = සෑම විටම මිල අධික — ගුණාත්මකභාවය සහ ප්‍රමාණය තීරණය කරයි.",
          "Amethyst හට ප්‍රතිකාර නැහැ — heat භාවිත විය හැකියි.",
          "Synthetic amethyst නැහැ — තියෙනවා.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

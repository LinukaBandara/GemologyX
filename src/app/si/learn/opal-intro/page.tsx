import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Opal — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Opal යනු කුමක්ද, play-of-colour, රැකවරණය, ජලය / උෂ්ණත්වය අවදානම් සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Opal — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/gemstone-care-general"
      crumbLabel="මැණික් රැකවරණය"
      lastReviewed="2026-10-21"
      related={[
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
        { label: "Mohs දෘඪතාව", href: "/si/learn/mohs-hardness-guide" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Opal යනු hydrated silica. Play-of-colour (වර්ණ දිස්වීම) ප්‍රධාන
          ලක්ෂණයකි. දෘඪතාව ~5.5–6.5 — මෘදුය. ජලය, උෂ්ණත්ව වෙනස්කම් සහ බලපෑම්
          වලට සංවේදී. රැකවරණය විශේෂයෙන් වැදගත්.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Opal යනු කුමක්ද?">
        <p>
          Opal = amorphous hydrated silica. Precious opal හි play-of-colour තිබේ.
          Common opal හි එය නොතිබිය හැකියි. Black, white, boulder, crystal වැනි
          වර්ග තිබේ.
        </p>
      </ArticleSection>

      <ArticleSection heading="Play-of-colour">
        <p>
          ආලෝකය වෙනස් වන විට වර්ණ දිස්වීම. මෙය opal හි ප්‍රධාන ආකර්ෂණයයි.
          විවිධ ආලෝකයේ බලන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="රැකවරණය — වැදගත්">
        <ul>
          <li>දෘඪතාව අඩු — සීරීම් / බිඳීම් අවදානම්</li>
          <li>ජලය හා උෂ්ණත්ව වෙනස්කම් වලට සංවේදී විය හැකියි</li>
          <li>Ultrasonic / steam සාමාන්‍යයෙන් නුසුදුසු</li>
          <li>දෘඪ ගල් සමඟ ගැටී නොයන ලෙස ගබඩා කරන්න</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <p>
          Play-of-colour විවිධ ආලෝකයේ බලන්න. ඉරිතැලීම් / කැඩුණු කොන් පරීක්ෂා
          කරන්න. Natural / treated / synthetic / doublet-triplet ගැන ලිඛිතව
          විමසන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Play-of-colour විවිධ ආලෝකයේ බැලුවාද?",
          "Natural / treated / assembled ගැන ලිඛිතව තියෙනවාද?",
          "රැකවරණ අවදානම් තේරුම් ගත්තාද?",
          "ඉරිතැලීම් / හානි පරීක්ෂා කළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Opal සියල්ලම එකම දෘඪතාවක් ඇත — වර්ග අනුව වෙනස්.",
          "ජලයෙන් සෝදන එක සෑම විටම ආරක්ෂිතයි — සැලකිලිමත් වන්න.",
          "Play-of-colour නැති නම් opal නොවේ — common opal තියෙනවා.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක durability සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

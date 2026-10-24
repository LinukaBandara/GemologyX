import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Kunzite — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Kunzite යනු කුමක්ද, රෝස පැහැය, light sensitivity, දෘඪතාව සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Kunzite — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/morganite-intro"
      crumbLabel="Morganite හැඳින්වීම"
      lastReviewed="2026-10-24"
      related={[
        { label: "Morganite හැඳින්වීම", href: "/si/learn/morganite-intro" },
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Kunzite යනු රෝස සිට දම්-රෝස පැහැති spodumene. ආලෝකයට (විශේෂයෙන් UV /
          හිරු) දිගු කාලයක් නිරාවරණය වුවහොත් වර්ණය අඩු විය හැකියි. දෘඪතාව ~6.5–7;
          cleavage තිබිය හැකියි. රැකවරණය වැදගත්.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Kunzite යනු කුමක්ද?">
        <p>Spodumene පවුලේ රෝස ප්‍රභේදයකි. Morganite / pink sapphire සමඟ පෙනුමෙන් පටලවා ගත හැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="Light sensitivity">
        <p>දිගු හිරු / ශක්තිමත් ආලෝක නිරාවරණයෙන් වර්ණය fade විය හැකියි. ආභරණයක් නම් රාත්‍රී භාවිතය හෝ සීමිත නිරාවරණය සලකා බලන්න.</p>
      </ArticleSection>

      <ArticleSection heading="දෘඪතාව සහ cleavage">
        <p>Mohs ~6.5–7. Cleavage නිසා බලපෑමකදී බිඳිය හැකියි. දෛනික මුදු සඳහා සැලකිලිමත් වන්න.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම (kunzite / spodumene) ලිඛිතව තියෙනවාද?",
          "Light sensitivity ගැන දැනුවත්ද?",
          "රැකවරණ උපදෙස් ලබාගත්තාද?",
        ]}
      />

      <Misconceptions
        items={[
          "රෝස පැහැය = සෑම විටම morganite / sapphire — kunzite ද තියෙනවා.",
          "වර්ණය කිසිවිට fade නොවේ — ආලෝකයට සංවේදී විය හැකියි.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක durability සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

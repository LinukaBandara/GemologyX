import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Morganite — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Morganite යනු කුමක්ද, රෝස පැහැය, heat treatment, beryl පවුල සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Morganite — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/aquamarine-intro"
      crumbLabel="Aquamarine හැඳින්වීම"
      lastReviewed="2026-10-21"
      related={[
        { label: "Aquamarine හැඳින්වීම", href: "/si/learn/aquamarine-intro" },
        { label: "Emerald හැඳින්වීම", href: "/si/learn/emerald-intro" },
        { label: "Heat treatment", href: "/si/learn/heat-treatment-guide" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Morganite යනු රෝස සිට peach-pink පැහැති beryl (emerald / aquamarine
          ගේ පවුල). බොහෝ morganite heat treated. දෘඪතාව ~7.5–8. පෙනුමෙන් පමණක්
          pink sapphire හෝ අනෙකුත් රෝස ගල් සමඟ වෙනස් කළ නොහැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Morganite යනු කුමක්ද?">
        <p>
          Morganite = pink to peach variety of beryl. Aquamarine (blue) සහ
          emerald (green) සමඟ එකම ඛනිජ පවුල.
        </p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර">
        <p>
          Heat treatment වර්ණය වැඩිදියුණු කිරීමට බහුලය. Treatment තත්ත්වය
          ලිඛිතව විමසන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="අනෙකුත් රෝස ගල් සමඟ">
        <p>
          Pink sapphire, pink tourmaline, kunzite ආදිය සමඟ පෙනුමෙන් පටලවා ගත
          හැකියි. නම / species ලිඛිතව විමසන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම (morganite / beryl) ලිඛිතව තියෙනවාද?",
          "ප්‍රතිකාර තත්ත්වය විමසුවාද?",
          "Pink sapphire ආදිය සමඟ නොපටලවා ගත්තාද?",
        ]}
      />

      <Misconceptions
        items={[
          "රෝස පැහැය = pink sapphire — නැහැ; morganite ද තියෙනවා.",
          "සියලුම morganite untreated — බොහෝ විට heat treated.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

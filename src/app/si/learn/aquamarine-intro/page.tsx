import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Aquamarine (නීලවර්ණ) — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Aquamarine යනු කුමක්ද, නිල් පැහැය, heat treatment, sapphire සමඟ වෙනස සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Aquamarine (නීලවර්ණ) — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/emerald-intro"
      crumbLabel="Emerald හැඳින්වීම"
      lastReviewed="2026-10-21"
      related={[
        { label: "Emerald හැඳින්වීම", href: "/si/learn/emerald-intro" },
        { label: "නිල්මැණික් මාර්ගෝපදේශය", href: "/si/learn/blue-sapphire-complete-guide" },
        { label: "Heat treatment", href: "/si/learn/heat-treatment-guide" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Aquamarine යනු නිල්-කොළ පැහැති beryl (emerald ගේ එකම පවුල). Sapphire
          නොවේ. බොහෝ aquamarine heat treated. දෘඪතාව ~7.5–8. පෙනුමෙන් පමණක්
          sapphire සමඟ වෙනස් කළ නොහැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Aquamarine යනු කුමක්ද?">
        <p>
          Aquamarine = blue to blue-green variety of beryl. Emerald = green
          beryl. දෙකම beryl පවුලේ නමුත් වර්ණය සහ වෙළෙඳ වටිනාකම වෙනස්.
        </p>
      </ArticleSection>

      <ArticleSection heading="Sapphire සමඟ වෙනස">
        <p>
          නිල් sapphire = corundum (Mohs 9). Aquamarine = beryl (Mohs ~7.5–8).
          ඛනිජය, දෘඪතාව සහ බොහෝ විට මිල වෙනස්. නම ලිඛිතව විමසන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර">
        <p>
          බොහෝ aquamarine heat treated වර්ණය වැඩිදියුණු කිරීමට. Treatment
          තත්ත්වය ලිඛිතව විමසන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම (aquamarine / beryl) ලිඛිතව තියෙනවාද?",
          "Sapphire ලෙස වැරදියට නොගත්තාද?",
          "ප්‍රතිකාර තත්ත්වය විමසුවාද?",
          "වර්ණය විවිධ ආලෝකයේ බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "නිල් පැහැය = sapphire — නැහැ; aquamarine ද තියෙනවා.",
          "Aquamarine සහ emerald සම්පූර්ණයෙන් වෙනස් පවුල් — නැහැ; දෙකම beryl.",
          "සියලුම aquamarine untreated — බොහෝ විට heat treated.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

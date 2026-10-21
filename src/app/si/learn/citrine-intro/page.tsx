import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Citrine — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Citrine යනු කුමක්ද, කහ පැහැය, heat-treated amethyst, topaz සමඟ වෙනස සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Citrine — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/amethyst-intro"
      crumbLabel="Amethyst හැඳින්වීම"
      lastReviewed="2026-10-21"
      related={[
        { label: "Amethyst හැඳින්වීම", href: "/si/learn/amethyst-intro" },
        { label: "Topaz හැඳින්වීම", href: "/si/learn/topaz-intro" },
        { label: "පුෂ්පරාග vs Topaz", href: "/si/learn/yellow-sapphire-vs-topaz" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Citrine යනු කහ සිට තැඹිලි-කහ පැහැති quartz. බොහෝ වෙළෙඳපොළේ citrine
          heat-treated amethyst වේ. Topaz හෝ yellow sapphire නොවේ. දෘඪතාව 7.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Citrine යනු කුමක්ද?">
        <p>
          Citrine = yellow to orange-yellow variety of quartz. Natural citrine
          තිබේ නමුත් වෙළෙඳපොළේ බොහෝ ප්‍රමාණය heat-treated amethyst වේ.
        </p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර">
        <p>
          Amethyst heat කළ විට citrine-like වර්ණයක් ලැබිය හැකියි. Treatment
          තත්ත්වය අසන්න. “Natural citrine” යන වචනය භාවිත වේ නම් — තේරුම් ගන්න
          කුමක් අදහස්ද කියා.
        </p>
      </ArticleSection>

      <ArticleSection heading="Topaz / Sapphire සමඟ වෙනස">
        <p>
          කහ topaz සහ yellow sapphire පෙනුමෙන් සමාන විය හැකියි. ඛනිජය වෙනස්.
          නම ලිඛිතව විමසන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම (citrine / quartz) ලිඛිතව තියෙනවාද?",
          "Heat-treated amethyst ද natural citrine ද විමසුවාද?",
          "Topaz / sapphire සමඟ නොපටලවා ගත්තාද?",
        ]}
      />

      <Misconceptions
        items={[
          "සියලුම citrine natural untreated — බොහෝ විට heat-treated amethyst.",
          "කහ පැහැය = topaz හෝ sapphire — නැහැ; citrine ද තියෙනවා.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

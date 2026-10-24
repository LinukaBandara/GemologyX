import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Lapis lazuli — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Lapis lazuli යනු කුමක්ද, rock vs mineral, dye treatments, රැකවරණය සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Lapis lazuli — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/gemstone-care-general"
      crumbLabel="මැණික් රැකවරණය"
      lastReviewed="2026-10-24"
      related={[
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
        { label: "ප්‍රතිකාර හෙළි කිරීම", href: "/si/learn/gemstone-treatment-disclosure" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Lapis lazuli යනු ඛනිජ මිශ්‍රණයකින් සෑදුණු rock එකකි (ප්‍රධාන වශයෙන්
          lazurite). නිල් පැහැය සහ pyrite flecks පොදුය. Dye / impregnation තිබිය
          හැකියි — හෙළිදරව් කළ යුතුය. දෘඪතාව ~5–6; මෘදුය.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Lapis යනු කුමක්ද?">
        <p>තනි ඛනිජයක් නොව rock එකකි. Lazurite, calcite, pyrite ආදිය මිශ්‍ර විය හැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර">
        <p>Dye සහ polymer impregnation බහුල විය හැකියි. Treatment තත්ත්වය ලිඛිතව විමසන්න.</p>
      </ArticleSection>

      <ArticleSection heading="රැකවරණය">
        <p>දෘඪතාව අඩු. රසායනික ද්‍රව්‍ය, ultrasonic, දැඩි බලපෑම් වලින් වළකින්න. මෘදු පිරිසිදු කිරීම.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම (lapis lazuli) ලිඛිතව තියෙනවාද?",
          "Dye / treatment ගැන විමසුවාද?",
          "රැකවරණ උපදෙස් ලබාගත්තාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Lapis = තනි ඛනිජය — නැහැ; rock / mixture.",
          "නිල් පැහැය = untreated — dye තිබිය හැකියි.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක treatment හෝ durability සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

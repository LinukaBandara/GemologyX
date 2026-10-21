import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Peridot (පෙරිඩොට්) — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Peridot යනු කුමක්ද, කොළ පැහැය, emerald සමඟ වෙනස, හඳුනාගැනීමේ සීමා සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Peridot (පෙරිඩොට්) — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/emerald-intro"
      crumbLabel="Emerald හැඳින්වීම"
      lastReviewed="2026-10-21"
      related={[
        { label: "Emerald හැඳින්වීම", href: "/si/learn/emerald-intro" },
        { label: "Mohs දෘඪතාව", href: "/si/learn/mohs-hardness-guide" },
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Peridot යනු කොළ-කහ / olive කොළ පැහැති olivine ඛනිජයකි. Emerald
          (beryl) නොවේ. දෘඪතාව ~6.5–7 — දෛනික භාවිතයේදී සීරීම් අවදානම්. පෙනුමෙන්
          පමණක් හඳුනාගත නොහැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Peridot යනු කුමක්ද?">
        <p>
          Peridot = gem-quality olivine. වර්ණය කොළ සිට කහ-කොළ දක්වා. Emerald
          සමඟ පෙනුමෙන් පටලවා ගත හැකි නමුත් ඛනිජය වෙනස්.
        </p>
      </ArticleSection>

      <ArticleSection heading="Emerald සමඟ වෙනස">
        <p>
          Emerald = green beryl. Peridot = olivine. වර්ණය, inclusions, දෘඪතාව
          සහ ප්‍රතිකාර රටා වෙනස් විය හැකියි. නම ලිඛිතව විමසන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="රැකවරණය">
        <p>
          දෘඪතාව මධ්‍යස්ථය. දෘඪ ගල් සමඟ ගැටීමෙන් සීරී යා හැකියි. මෘදු පිරිසිදු
          කිරීම සහ වෙනම ගබඩා කිරීම නිර්දේශිතය.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම (peridot / olivine) ලිඛිතව තියෙනවාද?",
          "Emerald ලෙස වැරදියට නොගත්තාද?",
          "රැකවරණ උපදෙස් ලබාගත්තාද?",
          "මිල ඉහළ නම් වාර්තාව / ස්වාධීන පරීක්ෂාව සලකා බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "කොළ පැහැය = emerald — නැහැ; peridot ද තියෙනවා.",
          "Peridot ඉතා දෘඪයි — මධ්‍යස්ථ; සීරීම් අවදානම්.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Garnet (ගානට්) — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Garnet යනු කුමක්ද, වර්ණ විවිධත්වය, ruby සමඟ වෙනස, හඳුනාගැනීමේ සීමා සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Garnet (ගානට්) — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/ruby-vs-garnet"
      crumbLabel="Ruby vs Garnet"
      lastReviewed="2026-10-21"
      related={[
        { label: "Ruby vs Garnet", href: "/si/learn/ruby-vs-garnet" },
        { label: "Ruby vs Spinel", href: "/si/learn/ruby-vs-spinel" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Garnet යනු ඛනිජ කාණ්ඩයකි (pyrope, almandine, spessartine, tsavorite,
          demantoid ආදිය). රතු පමණක් නොව කොළ, තැඹිලි, දම් වර්ණද තිබේ. රතු
          garnet ruby සමඟ පටලවා ගත හැකියි. පෙනුමෙන් පමණක් හඳුනාගත නොහැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Garnet යනු කුමක්ද?">
        <p>
          Garnet = group of silicate minerals. වර්ණ සහ විවිධතා බහුලය. රතු
          (pyrope, almandine), කොළ (tsavorite, demantoid), තැඹිලි (spessartine)
          ආදිය.
        </p>
      </ArticleSection>

      <ArticleSection heading="Ruby සමඟ පටලවීම">
        <p>
          රතු garnet ruby ලෙස වැරදියට හඳුනාගත හැකියි. නම සහ species ලිඛිතව
          විමසන්න. වාර්තාවේ species කියවන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="දෘඪතාව">
        <p>
          බොහෝ garnet ~6.5–7.5. වර්ගය අනුව වෙනස්. දෛනික භාවිතයට බොහෝ විට
          සුදුසුය නමුත් සීරීම් අවදානම් තිබිය හැකියි.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම / වර්ගය (garnet species) ලිඛිතව තියෙනවාද?",
          "Ruby ලෙස වැරදියට නොගත්තාද?",
          "වර්ණය විවිධ ආලෝකයේ බැලුවාද?",
          "මිල ඉහළ නම් වාර්තාව සලකා බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Garnet = රතු පමණයි — නැහැ; කොළ, තැඹිලි ආදිය තියෙනවා.",
          "රතු පැහැය = ruby — නැහැ; garnet ද තියෙනවා.",
          "සියලුම garnet එකම මිල — වර්ගය සහ ගුණාත්මකභාවය අනුව වෙනස්.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

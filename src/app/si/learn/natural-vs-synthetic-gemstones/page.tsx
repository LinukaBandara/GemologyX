import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "ස්වභාවික සහ කෘත්‍රිම මැණික් අතර වෙනස | GemologyX",
  description:
    "ස්වභාවික, lab-grown / synthetic සහ imitation මැණික් අතර වෙනස — හඳුනාගැනීමේ සීමා සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="ස්වභාවික සහ කෘත්‍රිම මැණික් අතර වෙනස"
      crumbHref="/si/learn/natural-synthetic-imitation-gems"
      crumbLabel="ස්වභාවික / කෘත්‍රිම / අනුකරණ"
      lastReviewed="2026-10-24"
      related={[
        { label: "ස්වභාවික, කෘත්‍රිම, අනුකරණ පද", href: "/si/learn/natural-synthetic-imitation-gems" },
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Natural = පෘථිවියේ සෑදුණු. Lab-grown / synthetic = රසායනාගාරයේ නිපදවූ,
          බොහෝ විට රසායනිකව සමාන. Imitation = පෙනුමෙන් සමාන වෙනත් ද්‍රව්‍යයක්.
          පෙනුමෙන් පමණක් වෙනස් කළ නොහැකියි — වාර්තාව / වෘත්තීය පරීක්ෂණයක් අවශ්‍ය
          විය හැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="ස්වභාවික">
        <p>
          භූගර්භීය ක්‍රියාවලීන් හරහා සෑදෙන ඛනිජ / කාබනික මූලාරම්භය. Inclusions
          සහ වර්ධන රටා ගලෙන් ගලට වෙනස්.
        </p>
      </ArticleSection>

      <ArticleSection heading="Lab-grown / Synthetic">
        <p>
          රසායනික සංයුතිය සහ භෞතික ගුණාංග ස්වභාවික සමාන ගල්වලට බොහෝ විට සමාන.
          ප්‍රධාන වෙනස සෑදුණු ආකාරයයි. “වීදුරු” හෝ “ව්‍යාජ” යන්නට සමාන නොවේ.
        </p>
      </ArticleSection>

      <ArticleSection heading="Imitation (අනුකරණ)">
        <p>
          පෙනුමෙන් වෙනත් මැණික් වර්ගයක් වගේ පෙනීමට භාවිත කරන වෙනත් ද්‍රව්‍යයක්
          (උදා: වීදුරු). පෙනුම සමාන වීමෙන් ද්‍රව්‍යය එකම බව අදහස් නොවේ.
        </p>
      </ArticleSection>

      <ArticleSection heading="පෙනුමෙන් පමණක් නොවේ">
        <p>
          වර්ණය, බර හෝ දීප්තිය පමණක් මත ස්වභාවික බව තහවුරු කළ නොහැකියි. මිල
          අධික ගනුදෙනුවකට පෙර වාර්තාවක් / ස්වාධීන පරීක්ෂාවක් සලකා බලන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Natural / lab-grown / imitation ලිඛිතව පැහැදිලිද?",
          "ප්‍රතිකාර තත්ත්වය විමසුවාද?",
          "වාර්තාවක් තිබේ නම් සත්‍යාපනය කළාද?",
          "පෙනුම පමණක් මත තීරණය නොකළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Lab-grown = වීදුරු / ව්‍යාජ — නැහැ; වෙනම කාණ්ඩයකි.",
          "පෙනුමෙන් natural හඳුනාගත හැකියි — බොහෝ විට නැහැ.",
          "Inclusions නැති නම් synthetic — නිශ්චිත නීතියක් නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක්
          නොවේ.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

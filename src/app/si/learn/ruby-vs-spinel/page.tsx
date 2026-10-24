import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "රතු මැණික් සහ රතු ස්පිනල් අතර වෙනස | GemologyX",
  description:
    "Ruby (corundum) සහ red spinel අතර ඛනිජ වෙනස, සමාන පෙනුම සහ හඳුනාගැනීමේ සීමා.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="රතු මැණික් සහ රතු ස්පිනල් අතර වෙනස"
      crumbHref="/si/learn/spinel-intro"
      crumbLabel="Spinel හැඳින්වීම"
      lastReviewed="2026-10-24"
      related={[
        { label: "Spinel හැඳින්වීම", href: "/si/learn/spinel-intro" },
        { label: "Ruby vs Garnet", href: "/si/learn/ruby-vs-garnet" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Ruby = red corundum. Spinel = වෙනම ඛනිජයකි. රතු පැහැය දෙකටම තිබිය
          හැකි නිසා පෙනුමෙන් පමණක් වෙනස් කළ නොහැකියි. නම ලිඛිතව විමසන්න;
          වාර්තාවේ species කියවන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="ඛනිජ වෙනස">
        <p>Ruby = corundum (Mohs 9). Spinel = වෙනම mineral (Mohs ~8). භෞතික ගුණාංග වෙනස්.</p>
      </ArticleSection>

      <ArticleSection heading="පෙනුම සමාන විය හැකියි">
        <p>ඉතිහාසයේ සමහර “ruby” පසුව spinel ලෙස හඳුනාගත් අවස්ථා තිබේ. වර්ණය පමණක් ප්‍රමාණවත් නොවේ.</p>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <p>නිවැරදි නම ලිඛිතව. වාර්තාවේ species. මිල ඉහළ නම් ස්වාධීන පරීක්ෂාවක්.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම (ruby / spinel) ලිඛිතව තියෙනවාද?",
          "වාර්තාවේ species කියවුවාද?",
          "වර්ණය පමණක් මත තීරණය නොකළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "රතු පැහැය = ruby — නැහැ; spinel ද තියෙනවා.",
          "ඇසින් පහසුවෙන් වෙනස් කළ හැකියි — බොහෝ විට නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

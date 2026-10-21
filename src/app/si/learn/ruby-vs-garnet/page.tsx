import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "රතු මැණික් (Ruby) සහ ගානට් (Garnet) අතර වෙනස | GemologyX",
  description:
    "රතු පැහැති ruby සහ garnet අතර ඛනිජ වෙනස, සමාන පෙනුම සහ මිලදී ගැනීමේදී සැලකිලිමත් විය යුතු දේ.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="රතු මැණික් (Ruby) සහ ගානට් (Garnet) අතර වෙනස"
      crumbHref="/si/learn/ruby-vs-spinel"
      crumbLabel="Ruby vs Spinel"
      lastReviewed="2026-10-21"
      related={[
        { label: "Ruby vs Spinel", href: "/si/learn/ruby-vs-spinel" },
        { label: "ස්වභාවික vs කෘත්‍රිම", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "මැණික් හඳුනාගැනීම", href: "/si/learn/identify-sapphire" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Ruby යනු කොරන්ඩම් (corundum) වන අතර garnet වෙනම ඛනිජ පවුලකි. රතු
          පැහැය දෙකටම තිබිය හැකි නිසා පෙනුමෙන් පමණක් වෙනස් කළ නොහැකියි.
          නිශ්චිත හඳුනාගැනීමට වෘත්තීය පරීක්ෂණයක් අවශ්‍ය විය හැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="ඛනිජ වෙනස">
        <p>
          Ruby = red corundum. Garnet = වෙනම ඛනිජ කාණ්ඩයකි (උදා: pyrope,
          almandine ආදිය). දෘඪතාව, ඝනත්වය සහ අනෙකුත් භෞතික ගුණාංග වෙනස් විය
          හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="පෙනුම සමාන විය හැකියි">
        <p>
          රතු පැහැති garnet සමහර විට ruby ලෙස වැරදියට හඳුනාගත හැකියි හෝ
          අලෙවි කළ හැකියි. වර්ණය පමණක් ප්‍රමාණවත් නොවේ.
        </p>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <p>
          විකුණුම්කරුගෙන් නිවැරදි නම සහ අනන්‍යතාව ලිඛිතව විමසන්න. වාර්තාවක්
          තිබේ නම් ගල් වර්ගය (species) කියවන්න. මිල ඉහළ නම් ස්වාධීන පරීක්ෂාවක්
          සලකා බලන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නිවැරදි නම / ඛනිජය ලිඛිතව තියෙනවාද?",
          "වාර්තාවක් තිබේ නම් species කියවුවාද?",
          "වර්ණය පමණක් මත තීරණය නොකළාද?",
          "මිල ඉහළ නම් ස්වාධීන පරීක්ෂාවක් සලකා බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "රතු පැහැය = ruby — නැහැ; garnet ද තියෙනවා.",
          "මිල අඩු නම් garnet, වැඩි නම් ruby — නිශ්චිත නීතියක් නැහැ.",
          "ඇසින් පහසුවෙන් වෙනස් කළ හැකියි — බොහෝ විට නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ
          සහතිකයක් නොවේ.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

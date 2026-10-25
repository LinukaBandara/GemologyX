import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Ruby (රතු මැණික්) — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Ruby යනු කුමක්ද, corundum, heat treatment, spinel/garnet සමඟ වෙනස සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="Ruby (රතු මැණික්) — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/ruby-vs-spinel"
      crumbLabel="Ruby vs Spinel"
      lastReviewed="2026-10-25"
      related={[
        { label: "Ruby vs Spinel", href: "/si/learn/ruby-vs-spinel" },
        { label: "Ruby vs Garnet", href: "/si/learn/ruby-vs-garnet" },
        { label: "Heat treatment", href: "/si/learn/heat-treatment-guide" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Ruby = red variety of corundum (sapphire ගේ එකම ඛනිජය; වර්ණයෙන්
          වෙනස්). Mohs 9. බොහෝ rubies heat treated. Red spinel සහ garnet
          පෙනුමෙන් පටලවා ගත හැකියි. නම, ප්‍රතිකාර සහ වාර්තාව ලිඛිතව විමසන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Ruby යනු කුමක්ද?">
        <p>
          Corundum (Al₂O₃) හි රතු ප්‍රභේදය. Pink-red සීමාව lab / trade අනුව
          වෙනස් විය හැකියි — “ruby” නාමය සෑම රෝස-රතු ගලකටම යෙදෙන්නේ නැත.
        </p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර">
        <p>
          Heat treatment බහුලය. Fracture filling / glass filling ද තිබිය හැකියි
          — හෙළිදරව් කළ යුතුය. Treatment තත්ත්වය වාර්තාවේ notes කියවන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="Look-alikes">
        <p>
          Red spinel, red garnet, glass, synthetic ruby. පෙනුමෙන් පමණක් වෙනස්
          කළ නොහැකියි.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම (ruby / corundum) ලිඛිතව තියෙනවාද?",
          "ප්‍රතිකාර තත්ත්වය විමසුවාද?",
          "වාර්තාව සත්‍යාපනය + ගලට ගැළපේද?",
          "Spinel / garnet සමඟ නොපටලවා ගත්තාද?",
        ]}
      />

      <Misconceptions
        items={[
          "රතු පැහැය = ruby — නැහැ; spinel සහ garnet ද තියෙනවා.",
          "සියලුම ruby untreated — බොහෝ heat treated.",
          "Pigeon blood = lab-independent absolute grade — definitions වෙනස්.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ හෝ මිල සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

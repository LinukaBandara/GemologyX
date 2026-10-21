import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මරකත (Emerald) — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "මරකත (emerald) යනු කුමක්ද, inclusions, oil treatment, හඳුනාගැනීමේ සීමා සහ මිලදී ගැනීමේදී සැලකිලිමත් විය යුතු දේ.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="මරකත (Emerald) — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/natural-vs-synthetic-gemstones"
      crumbLabel="ස්වභාවික vs කෘත්‍රිම"
      lastReviewed="2026-10-21"
      related={[
        { label: "Fracture filling", href: "/si/learn/fracture-filling-guide" },
        { label: "ප්‍රතිකාර හෙළි කිරීම", href: "/si/learn/gemstone-treatment-disclosure" },
        { label: "මැණික් පරීක්ෂණ වාර්තාව", href: "/si/learn/how-to-read-gem-report" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Emerald යනු කොළ පැහැති beryl වේ. බොහෝ emeralds වල inclusions (jardin)
          තිබේ. Oil / resin clarity enhancement පොදුය — හෙළිදරව් කළ යුතුය.
          පෙනුමෙන් පමණක් natural / treated / synthetic තීරණය නොකරන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Emerald යනු කුමක්ද?">
        <p>
          Emerald = green beryl (chromium / vanadium නිසා කොළ පැහැය). වෙනත් කොළ
          ගල් (peridot, tsavorite, glass ආදිය) සමඟ පෙනුමෙන් පටලවා ගත හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="Inclusions (Jardin)">
        <p>
          බොහෝ emeralds වල අභ්‍යන්තර ලක්ෂණ තිබේ. ඒවා “jardin” ලෙසද හැඳින්වේ.
          Inclusions තිබීම පමණක් ගල ව්‍යාජ බවට පත් නොකරයි. නමුත් durability සහ
          පෙනුමට බලපාන්න පුළුවන්.
        </p>
      </ArticleSection>

      <ArticleSection heading="Clarity enhancement (oil / resin)">
        <p>
          බොහෝ emeralds වලට oil හෝ resin වැනි materials භාවිතයෙන් clarity
          enhancement කර තිබේ. මෙය fracture filling හා සම්බන්ධ විය හැකියි.
          Treatment level වාර්තාවේ සඳහන් විය හැකියි. හෙළිදරව් කිරීම අත්‍යවශ්‍යය.
        </p>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <ul>
          <li>අනන්‍යතාව (emerald / beryl) ලිඛිතව</li>
          <li>Clarity enhancement / filling තත්ත්වය</li>
          <li>වාර්තාව සත්‍යාපනය</li>
          <li>වර්ණය විවිධ ආලෝකයේ බැලීම</li>
          <li>රැකවරණ උපදෙස් (ultrasonic ආදිය)</li>
        </ul>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම / species ලිඛිතව තියෙනවාද?",
          "Clarity enhancement ගැන විමසුවාද?",
          "වාර්තාව සත්‍යාපනය කළාද?",
          "රැකවරණ උපදෙස් ලබාගත්තාද?",
          "මිල ඉහළ නම් ස්වාධීන පරීක්ෂාවක් සලකා බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Inclusions තියෙනවා නම් ව්‍යාජයි — නැහැ.",
          "සියලුම emerald untreated — නැහැ; enhancement පොදුය.",
          "කොළ පැහැය = emerald — වෙනත් කොළ ගල්ද තියෙනවා.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය මූලික අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ
          හෝ මිල සහතිකයක් නොවේ.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

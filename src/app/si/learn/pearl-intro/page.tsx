import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Pearl (මුතු) — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Natural vs cultured pearls, imitations, රැකවරණය සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Pearl (මුතු) — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/amber-intro"
      crumbLabel="Amber හැඳින්වීම"
      lastReviewed="2026-10-24"
      related={[
        { label: "Amber හැඳින්වීම", href: "/si/learn/amber-intro" },
        { label: "Coral හැඳින්වීම", href: "/si/learn/coral-intro" },
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Pearl = molluscs තුළ සෑදෙන organic gem. Natural (wild) pearls ඉතා
          දුර්ලභය; වෙළෙඳපොළේ බොහෝ pearls cultured. Plastic / glass / shell-based
          imitations තිබේ. Natural / cultured / imitation ලිඛිතව පැහැදිලි කරගන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Natural vs cultured">
        <p>
          Natural = human intervention නැතිව සෑදුණු. Cultured = human-assisted
          (nucleus insert ආදිය). දෙකම “real pearl” ලෙස සැලකිය හැකි නමුත් origin
          of formation වෙනස්. මිල සහ rarity වෙනස්.
        </p>
      </ArticleSection>

      <ArticleSection heading="Imitations">
        <p>Plastic, glass, coated beads. Surface, weight, drill-hole edges බලන්න — නමුත් පෙනුමෙන් පමණක් නිශ්චිත නොවේ.</p>
      </ArticleSection>

      <ArticleSection heading="රැකවරණය">
        <p>මෘදු. Perfume, cosmetics, ultrasonic, harsh chemicals වලින් වළකින්න. අවසානයට පැළඳ, මෘදු රෙද්දකින් පිස දමන්න.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Natural / cultured / imitation ලිඛිතව පැහැදිලිද?",
          "රැකවරණ උපදෙස් ලබාගත්තාද?",
          "මිල ඉහළ නම් — වාර්තාව / විශේෂඥ උපදෙස් සලකා බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "සියලුම pearls natural wild — බොහෝ cultured.",
          "Cultured = fake — නැහැ; real pearl නමුත් formation වෙනස්.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත මුතුවල වර්ගය හෝ මිල සහතික නොකරයි.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

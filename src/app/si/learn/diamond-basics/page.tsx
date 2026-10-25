import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Diamond (දියමන්ති) — මූලික දැනුම | GemologyX",
  description:
    "Diamond 4Cs, natural vs lab-grown, simulants (CZ, moissanite) සහ මිලදී ගැනීමේ මූලික උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="Diamond (දියමන්ති) — මූලික දැනුම"
      crumbHref="/si/learn/natural-vs-synthetic-gemstones"
      crumbLabel="ස්වභාවික vs කෘත්‍රිම"
      lastReviewed="2026-10-25"
      related={[
        { label: "ස්වභාවික vs කෘත්‍රිම", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Diamond = carbon, Mohs 10. 4Cs = Cut, Colour, Clarity, Carat weight.
          Natural සහ lab-grown diamond දෙකම සැබෑ diamond; formation වෙනස්.
          CZ සහ moissanite = simulants (diamond නොවේ). වාර්තාවේ natural /
          laboratory-grown කියවන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="4Cs (සංක්ෂිප්ත)">
        <ul>
          <li>Cut — ආකෘතිය සහ light performance</li>
          <li>Colour — D (colourless) සිට Z දක්වා scale (වෙනත් scales ද තිබේ)</li>
          <li>Clarity — inclusions / blemishes</li>
          <li>Carat — බර (1 ct = 0.2 g)</li>
        </ul>
        <p>එක Cs එකක් පමණක් මිල තීරණය නොකරයි.</p>
      </ArticleSection>

      <ArticleSection heading="Natural vs lab-grown">
        <p>
          Lab-grown diamond = chemically diamond. මිල සහ resale expectations
          වෙනස් විය හැකියි. “Synthetic diamond” / “laboratory-grown” ලිඛිතව
          පැහැදිලි කළ යුතුය.
        </p>
      </ArticleSection>

      <ArticleSection heading="Simulants">
        <p>Cubic zirconia, moissanite, glass — diamond නොවේ. පෙනුමෙන් පමණක් වෙනස් කළ නොහැකියි.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Natural / lab-grown / simulant ලිඛිතව පැහැදිලිද?",
          "වාර්තාව (GIA ආදිය) සත්‍යාපනය කළාද?",
          "4Cs තේරුම් ගත්තාද — එකක් පමණක් නොවේ?",
        ]}
      />

      <Misconceptions
        items={[
          "Lab-grown = fake diamond — නැහැ; real diamond, different origin.",
          "CZ = cheap diamond — CZ is not diamond.",
          "Carat වැඩි = සෑම විටම වඩා හොඳ — cut/colour/clarity ද වැදගත්.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක මිල හෝ ශ්‍රේණිය සහතික නොකරයි.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

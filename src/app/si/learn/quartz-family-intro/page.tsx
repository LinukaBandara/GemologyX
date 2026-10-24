import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Quartz පවුල — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Quartz family: amethyst, citrine, rose quartz, smoky, rock crystal — වර්ණ, treatments සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Quartz පවුල — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/amethyst-intro"
      crumbLabel="Amethyst හැඳින්වීම"
      lastReviewed="2026-10-24"
      related={[
        { label: "Amethyst", href: "/si/learn/amethyst-intro" },
        { label: "Citrine", href: "/si/learn/citrine-intro" },
        { label: "Heat treatment", href: "/si/learn/heat-treatment-guide" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Quartz (SiO₂) = බහුල මැණික් පවුලක්. Amethyst (දම්), citrine (කහ),
          rose quartz (රෝස), smoky quartz, rock crystal (පැහැදිලි) ආදිය.
          දෘඪතාව 7. බොහෝ citrine heat-treated amethyst. Synthetic quartz ද
          තිබේ.
        </p>
      </QuickAnswer>

      <ArticleSection heading="ප්‍රධාන varieties">
        <ul>
          <li>Amethyst — දම්</li>
          <li>Citrine — කහ / තැඹිලි-කහ (බොහෝ heat-treated)</li>
          <li>Rose quartz — රෝස</li>
          <li>Smoky quartz — දුඹුරු / අළු</li>
          <li>Rock crystal — පැහැදිලි</li>
          <li>Ametrine — amethyst + citrine zones</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර සහ synthetic">
        <p>Heat (විශේෂයෙන් citrine), irradiation (සමහර smoky), synthetic quartz. Treatment / origin of colour ලිඛිතව විමසන්න.</p>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <p>Variety නම. Natural / treated / synthetic. වර්ණය විවිධ ආලෝකයේ බලන්න. මිල sapphire / topaz මට්ටමේ නම් — species නැවත තහවුරු කරන්න.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Variety නම ලිඛිතව තියෙනවාද?",
          "ප්‍රතිකාර / synthetic තත්ත්වය විමසුවාද?",
          "වෙනත් ඛනිජයක් (topaz / sapphire) සමඟ නොපටලවා ගත්තාද?",
        ]}
      />

      <Misconceptions
        items={[
          "සියලුම citrine natural untreated — බොහෝ heat-treated amethyst.",
          "Quartz = අඩු වටිනාකමක් ඇති නිසා treatment නැහැ — treatments තියෙනවා.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

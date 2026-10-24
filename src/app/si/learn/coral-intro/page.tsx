import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Coral (කොරල්) — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Gem coral යනු කුමක්ද, dye treatments, රැකවරණය, නීතිමය / conservation සීමා සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Coral (කොරල්) — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/pearl-intro"
      crumbLabel="Pearl හැඳින්වීම"
      lastReviewed="2026-10-24"
      related={[
        { label: "Pearl හැඳින්වීම", href: "/si/learn/pearl-intro" },
        { label: "ප්‍රතිකාර හෙළි කිරීම", href: "/si/learn/gemstone-treatment-disclosure" },
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
      ]}
    >
      <QuickAnswer>
        <p>
          Gem coral = marine organism skeletons (කාබනික). Dye බහුලය. දෘඪතාව
          අඩු (~3–4). සමහර coral species ආරක්ෂිත / වෙළෙඳ සීමා යටතේ — නීතිමය
          තත්ත්වය දේශීය නීති අනුව වෙනස්. Treatment සහ origin ලිඛිතව විමසන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="ප්‍රතිකාර">
        <p>Dye සහ impregnation තිබිය හැකියි. වර්ණය පමණක් natural බව තීරණය නොකරයි.</p>
      </ArticleSection>

      <ArticleSection heading="රැකවරණය">
        <p>මෘදු. Acids, perfume, ultrasonic වලින් වළකින්න. මෘදු පිරිසිදු කිරීම.</p>
      </ArticleSection>

      <ArticleSection heading="නීති / conservation">
        <p>සමහර coral වර්ග CITES හෝ දේශීය නීති යටතේ. මිලදී ගැනීමට / ගෙනයාමට පෙර දේශීය නීති පරීක්ෂා කරන්න. මෙම ලිපිය නීති උපදෙස් නොවේ.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම / වර්ගය ලිඛිතව තියෙනවාද?",
          "Dye / treatment විමසුවාද?",
          "දේශීය නීති / import-export සීමා ගැන දැනුවත්ද?",
        ]}
      />

      <Misconceptions
        items={[
          "රතු පැහැය = untreated — dye තිබිය හැකියි.",
          "Coral = ඛනිජ මැණික් — කාබනික.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නීති හෝ conservation උපදෙස් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

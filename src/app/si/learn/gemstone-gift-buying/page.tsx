import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් තෑග්ගක් මිලදී ගැනීම | GemologyX",
  description:
    "තෑග්ගක් ලෙස මැණික් / ආභරණ තෝරන විට budget, durability, return policy සහ documentation.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික් තෑග්ගක් මිලදී ගන්නා විට"
      crumbHref="/si/learn/gemstone-buying-checklist"
      crumbLabel="මිලදී ගැනීමේ checklist"
      lastReviewed="2026-10-25"
      related={[
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
        { label: "මැණික් සහිත ආභරණ", href: "/si/learn/jewelry-with-gems-buying" },
        { label: "වෙළෙන්දාගෙන් අසන්න ඕනේ ප්‍රශ්න", href: "/si/learn/questions-to-ask-gem-dealer" },
      ]}
    >
      <QuickAnswer>
        <p>
          Budget fix කරන්න. Recipient ගේ lifestyle (daily ring vs occasional)
          අනුව durability තෝරන්න. Return / exchange policy ලිඛිතව. Identity +
          treatment documentation. Surprise sizing risky — adjustable / necklace
          / earrings easier than rings.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Lifestyle fit">
        <p>
          Daily wear → harder stones (sapphire, ruby, diamond). Soft / sensitive
          (opal, pearl, emerald) → occasional or protective setting.
        </p>
      </ArticleSection>

      <ArticleSection heading="Budget honesty">
        <p>
          Quality over size. Small well-chosen stone is better than a large
          treated or unclear-identity piece at the same price.
        </p>
      </ArticleSection>

      <ArticleSection heading="Practical gift tips">
        <ul>
          <li>Return window</li>
          <li>Written description of stone + metal</li>
          <li>Care card</li>
          <li>Ring size plan (resize cost?)</li>
        </ul>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Budget සහ lifestyle fit සලකා බැලුවාද?",
          "Return / exchange ලිඛිතව තියෙනවාද?",
          "Identity + treatment documented ද?",
          "Sizing / resize plan තියෙනවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Biggest stone = best gift — quality සහ meaning වැදගත්.",
          "Gift = documentation අනවශ්‍ය — later service / insurance වලට ඕනේ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක මිල හෝ suitability
          සහතික නොකරයි.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

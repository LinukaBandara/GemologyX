import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "ශ්‍රී ලංකාවේ මැණික් වෙළෙන්දන් වර්ග | GemologyX",
  description:
    "Rough sellers, cutters, brokers, retailers — roles in the Sri Lankan gem trade and buyer implications.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="ශ්‍රී ලංකාවේ මැණික් වෙළෙන්දන් වර්ග — මූලික"
      crumbHref="/si/learn/sri-lanka-gem-trade-intro"
      crumbLabel="SL මැණික් වෙළෙඳාම"
      lastReviewed="2026-10-25"
      related={[
        { label: "SL මැණික් වෙළෙඳාම", href: "/si/learn/sri-lanka-gem-trade-intro" },
        { label: "SL buying day tips", href: "/si/learn/sri-lanka-buying-day-tips" },
        { label: "වෙළෙන්දාගෙන් අසන්න ඕනේ ප්‍රශ්න", href: "/si/learn/questions-to-ask-gem-dealer" },
      ]}
    >
      <QuickAnswer>
        <p>
          Trade roles differ: miners/rough suppliers, cutters, brokers,
          exporters, retail jewellers. Each has different incentives and
          knowledge. Knowing who you are talking to helps you ask the right
          questions — it does not automatically mean good or bad character.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Rough-focused">
        <p>May price potential after heat/cut. Higher uncertainty for beginners.</p>
      </ArticleSection>

      <ArticleSection heading="Cut-stone dealers">
        <p>Finished goods; still ask treatment and reports. Inventory quality varies widely.</p>
      </ArticleSection>

      <ArticleSection heading="Brokers">
        <p>Connect buyers and goods; fee structures differ. Clarify who is responsible for representation accuracy.</p>
      </ArticleSection>

      <ArticleSection heading="Retail / jewellery">
        <p>Settings, brands, after-sales. Markup structures differ from parcel trade.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Seller role (rough / cut / retail) පැහැදිලිද?",
          "Representations written ද?",
          "Same checklist applied regardless of friendliness?",
        ]}
      />

      <Misconceptions
        items={[
          "Exporter = always highest ethics — verify deals the same way.",
          "Small local seller = always cheaper fair goods — quality varies.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත වෙළෙන්දන් rank කරන්නේ නැත.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

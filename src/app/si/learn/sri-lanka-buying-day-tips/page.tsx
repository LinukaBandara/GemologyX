import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "ශ්‍රී ලංකාවේ මැණික් මිලදී ගන්නා දිනයකට | GemologyX",
  description:
    "දේශීය වෙළෙඳපොළේ මිලදී ගැනීම — ලේඛන, කාලය, පීඩනය, independent check සහ realistic expectations.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="ශ්‍රී ලංකාවේ මැණික් මිලදී ගන්නා දිනයකට — ප්‍රායෝගික උපදෙස්"
      crumbHref="/si/learn/sri-lanka-gem-trade-intro"
      crumbLabel="SL මැණික් වෙළෙඳාම"
      lastReviewed="2026-10-25"
      related={[
        { label: "SL මැණික් වෙළෙඳාම", href: "/si/learn/sri-lanka-gem-trade-intro" },
        { label: "SL මැණික් පද", href: "/si/learn/sri-lanka-gem-terms" },
        { label: "වෙළෙන්දාගෙන් අසන්න ඕනේ ප්‍රශ්න", href: "/si/learn/questions-to-ask-gem-dealer" },
        { label: "Negotiate", href: "/si/learn/negotiate-gem-price" },
      ]}
    >
      <QuickAnswer>
        <p>
          කාලය ගන්න — same-day pressure red flag එකක් විය හැකියි. ලිඛිතව:
          identity, treatment, weight, price, seller details. “Ceylon” =
          marketing term නම් origin proof අසන්න. High value → independent lab
          before final payment when possible. Budget ට වඩා “deal” chase නොකරන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Before you go">
        <p>Know your budget ceiling. Read basic treatment and report vocabulary. Decide must-have vs nice-to-have (unheated, size, colour).</p>
      </ArticleSection>

      <ArticleSection heading="On the day">
        <ul>
          <li>Compare more than one option</li>
          <li>Ask for daylight viewing</li>
          <li>Write down what was promised</li>
          <li>Receipt with description</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Local realities">
        <p>Trade hubs are active; not every seller is bad, not every friendly seller is safe. Process over personality. Geuda / heated material is normal in the market — disclosure is the issue.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Budget ceiling fix කළාද?",
          "ලිඛිත description + receipt තියෙනවාද?",
          "High value නම් independent check plan තියෙනවාද?",
          "Pressure decision avoid කළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "SL = automatically unheated Ceylon sapphire — නැහැ.",
          "Street price always lower than fair — quality varies widely.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත වෙළෙන්දන් හෝ මිල නිර්දේශ නොකරයි.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

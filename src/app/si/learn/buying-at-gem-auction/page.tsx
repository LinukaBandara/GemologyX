import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් Auction එකකින් මිලදී ගැනීම | GemologyX",
  description:
    "Gem auctions — inspection windows, premiums, conditions, and risks for buyers.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික් Auction එකකින් මිලදී ගන්නා විට"
      crumbHref="/si/learn/gemstone-buying-checklist"
      crumbLabel="මිලදී ගැනීමේ checklist"
      lastReviewed="2026-10-25"
      related={[
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "වංචා අවදානම්", href: "/si/learn/avoid-gemstone-scams" },
      ]}
    >
      <QuickAnswer>
        <p>
          Auction = time pressure + competition. Preview / inspection period is
          critical. Buyer’s premium adds to hammer price. Conditions and returns
          are often strict or none. If you cannot inspect or verify reports,
          pass.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Before bidding">
        <ul>
          <li>Read lot description and conditions of sale</li>
          <li>Inspect in person when possible</li>
          <li>Verify any report numbers</li>
          <li>Set a max bid including premium and taxes</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Risks">
        <p>Emotional bidding, incomplete disclosure in older catalogues, limited recourse after fall of hammer.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Conditions of sale කියවුවාද?",
          "Max bid (premium එක්ක) fix කළාද?",
          "Inspection / report verify කළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Auction price = wholesale fair value — not always.",
          "Catalogue photo = full disclosure — inspect.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත auction නීති උපදෙස් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

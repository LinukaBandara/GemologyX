import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් Export / රේගු ලේඛන — මූලික | GemologyX",
  description:
    "මැණික් රටින් රටට ගෙනයන විට ලේඛන, valuation, rules — general education only, not legal advice.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික් Export සහ රේගු ලේඛන — මූලික හැඳින්වීම"
      crumbHref="/si/learn/sri-lanka-gem-trade-intro"
      crumbLabel="SL මැණික් වෙළෙඳාම"
      lastReviewed="2026-10-25"
      related={[
        { label: "SL මැණික් වෙළෙඳාම", href: "/si/learn/sri-lanka-gem-trade-intro" },
        { label: "Travel with gems", href: "/si/learn/travel-with-gemstones" },
        { label: "Insurance / appraisal", href: "/si/learn/gem-insurance-appraisal" },
      ]}
    >
      <QuickAnswer>
        <p>
          Crossing borders with gems may require invoices, permits, or
          declarations depending on country and value. Rules change. Personal
          jewelry vs commercial export are different. This page is general
          awareness only — verify with official customs / licensed exporters.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Why paperwork exists">
        <p>Duty, origin controls, endangered materials (some coral), anti-smuggling. Informal “just wear it” advice can fail at the airport.</p>
      </ArticleSection>

      <ArticleSection heading="Typical documents people discuss">
        <ul>
          <li>Commercial invoice / valuation</li>
          <li>Lab reports (support, not always sufficient alone)</li>
          <li>Export permits where required</li>
          <li>Receipts matching the goods</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Practical stance">
        <p>High value or commercial quantity → use licensed channels. Tourist-level pieces still check destination country rules. Never rely on a seller’s verbal “no problem.”</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Personal vs commercial intent පැහැදිලිද?",
          "Official source එකකින් rules check කළාද?",
          "Value + description documents match ද?",
        ]}
      />

      <Misconceptions
        items={[
          "Small stone = no rules ever — value and local law matter.",
          "Seller said OK = legal — only authorities define compliance.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික හැඳින්වීමකි. නීතිමය හෝ රේගු උපදෙස් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

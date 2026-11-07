import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Buying at the Ratnapura Gem Market | GemologyX",
  description:
    "How the Ratnapura gem trade works for visitors and buyers — process, pressure, paperwork, and how to reduce risk. Educational guide, not a dealer directory.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="Sri Lanka · Buying"
      readTime="7 min"
      title="Buying at the Ratnapura Gem Market"
      crumbHref="/sri-lanka"
      crumbLabel="Sri Lanka"
      lastReviewed="2026-11-07"
      related={[
        { label: "Ratnapura region", href: "/sri-lanka/regions/ratnapura" },
        { label: "Gemstone scams", href: "/sri-lanka/buying/gemstone-scams" },
        { label: "Ceylon sapphire", href: "/sri-lanka/gems/ceylon-sapphire" },
        { label: "Sri Lanka hub", href: "/sri-lanka" },
      ]}
    >
      <QuickAnswer>
        <p>
          Ratnapura is a major gem trade centre. Stones move through dealers,
          cutters, and brokers as well as street-level trade. Buying well depends
          less on “finding a secret mine” and more on written description,
          treatment clarity, time to verify, and the ability to walk away. This
          page is educational — not a list of recommended sellers.
        </p>
      </QuickAnswer>

      <ArticleSection heading="What the market is">
        <p>
          Visitors often meet a mix of retail-facing dealers, brokers, and people
          connected to cutting or mining. Material on the table may come from the
          local district, other Sri Lankan fields, or further afield. A purchase in
          Ratnapura is not automatically a “Ratnapura mine” stone.
        </p>
        <p>
          For district context see{" "}
          <Link href="/sri-lanka/regions/ratnapura">Ratnapura region</Link>.
        </p>
      </ArticleSection>

      <ArticleSection heading="Before you pay — process">
        <ol>
          <li>Decide what you are shopping for (species, budget, jewellery use).</li>
          <li>Ask for species and treatment in plain language, then in writing.</li>
          <li>Separate origin stories from laboratory language.</li>
          <li>If a report is part of the price, verify the report number.</li>
          <li>Agree returns, holds, or next steps before money moves.</li>
        </ol>
      </ArticleSection>

      <ArticleSection heading="Pressure and pace">
        <p>
          Fast rooms favour the prepared seller. Legitimate urgency is rare;
          manufactured urgency is common. You are allowed to pause, compare, or
          leave. If that is treated as an insult, treat it as information.
        </p>
      </ArticleSection>

      <ArticleSection heading="Payment and paperwork">
        <p>
          Prefer a clear receipt: seller identity, date, description of the stone
          (species, weight if stated, treatment claim), and price. Cash-only deals
          with no paper trail raise the cost of any later dispute. Currency,
          cards, and export paperwork are separate topics — large export moves
          need their own compliance path (see trade/export pages when published
          from official sources).
        </p>
      </ArticleSection>

      <ArticleSection heading="Link to risk guide">
        <p>
          Red flags, certificate theatre, and common misconceptions are covered
          in{" "}
          <Link href="/sri-lanka/buying/gemstone-scams">
            Gemstone scams in Sri Lanka and how to avoid them
          </Link>
          .
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Species and treatment in writing",
          "You can leave without paying",
          "Report number checked if a report is in the deal",
          "Receipt with seller identity and stone description",
          "Budget fixed before negotiation",
        ]}
      />

      <Misconceptions
        items={[
          "Buying in Ratnapura always means local gravel origin — trade hubs concentrate stones from many places.",
          "The lowest cash price is automatically the best deal — undocumented treatment can erase the ‘saving’.",
          "A friendly guide is a substitute for verification — incentives may not match yours.",
        ]}
      />

      <ArticleSection heading="FAQ">
        <p>
          <strong>Should tourists buy loose stones here?</strong>
          <br />
          Only with the same discipline as any high-value purchase: identity,
          treatment, documentation, and an exit option. Jewellery with clear
          retail terms can be simpler for some travellers.
        </p>
        <p>
          <strong>Can GemologyX recommend a dealer?</strong>
          <br />
          No. We publish process education, not seller rankings.
        </p>
      </ArticleSection>

      <ArticleSection heading="Related Sinhala guides">
        <ul>
          <li>
            <Link href="/si/learn/gemstone-buying-checklist">
              මැණික් මිලදී ගැනීමේ checklist
            </Link>
          </li>
          <li>
            <Link href="/si/learn/avoid-gemstone-scams">වංචා අවදානම්</Link>
          </li>
          <li>
            <Link href="/si/learn/questions-to-ask-gem-dealer">
              Dealer ගෙන් අහන්න ඕනේ ප්‍රශ්න
            </Link>
          </li>
        </ul>
      </ArticleSection>
    </ArticleLayout>
  );
}

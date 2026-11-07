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
  title: "Gemstone Scams in Sri Lanka and How to Avoid Them | GemologyX",
  description:
    "Common gemstone buying risks in Sri Lanka — misrepresented treatment and origin, pressure selling, mismatched certificates — and practical ways to reduce them.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="Sri Lanka · Buying"
      readTime="7 min"
      title="Gemstone Scams in Sri Lanka and How to Avoid Them"
      crumbHref="/sri-lanka"
      crumbLabel="Sri Lanka"
      lastReviewed="2026-11-07"
      related={[
        { label: "Sri Lanka hub", href: "/sri-lanka" },
        { label: "Ratnapura market", href: "/sri-lanka/buying/ratnapura-gem-market" },
        { label: "Ceylon sapphire", href: "/sri-lanka/gems/ceylon-sapphire" },
        { label: "Buying checklist (Sinhala)", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Common risks include misrepresented treatment or origin, pressure
          selling, and certificates that do not match the stone. Mitigation is
          mostly process: slow down, get terms in writing, separate marketing
          stories from laboratory language, and use an independent report when
          the price justifies it. This page is educational — not an accusation
          against any named dealer.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Why buyers get hurt">
        <p>
          Sri Lanka has a real gem industry and many legitimate traders. The same
          density of stones, tourists, and high-value transactions attracts
          misrepresentation. Harm usually comes from speed and opacity: a buyer
          pays for a story (unheated, pure Ceylon, investment grade) that was
          never documented.
        </p>
      </ArticleSection>

      <ArticleSection heading="Red flags">
        <ul>
          <li>
            <strong>Pressure</strong> — “price only valid today,” refusal to let
            you think overnight, or blocking independent advice.
          </li>
          <li>
            <strong>Vague identity</strong> — “blue stone,” “Ceylon” without
            species or treatment in writing.
          </li>
          <li>
            <strong>Treatment denial by default</strong> — “all our stones are
            unheated” as a blanket line without reports.
          </li>
          <li>
            <strong>Certificate theatre</strong> — laminated paper that cannot be
            verified online, name on the report not matching the seller’s claim,
            or a report for a different weight/colour.
          </li>
          <li>
            <strong>Origin as the whole pitch</strong> — premium demanded only for
            the word “Ceylon” while quality and treatment stay fuzzy.
          </li>
          <li>
            <strong>No return path</strong> — cash-only, no written receipt, no
            way to revisit the deal if the stone fails a check.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Certificate-related risks">
        <p>
          A laboratory report can be useful. It is not magic. Problems include
          outdated reports, reports for a different stone, altered copies, and
          buyers who never check the report number on the lab’s site. Learn what
          the report actually says about species, treatment, and (if present)
          origin opinion. See related guides on reading reports under Learn.
        </p>
      </ArticleSection>

      <ArticleSection heading="Market vs private sale">
        <p>
          Busy markets move fast; private introductions can feel exclusive and
          still be high-risk. In both cases, your protection is the same: written
          description, clear price, time to verify, and a willingness to walk
          away. For Ratnapura-specific context, see{" "}
          <Link href="/sri-lanka/buying/ratnapura-gem-market">
            Buying at the Ratnapura gem market
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection heading="What a report can and cannot prove">
        <ul>
          <li>
            <strong>Can support:</strong> species/variety language, often
            treatment detection within that lab’s methods, measurements, and
            sometimes an origin opinion.
          </li>
          <li>
            <strong>Cannot replace:</strong> your budget discipline, return terms,
            or judging whether the price fits the quality you see.
          </li>
        </ul>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Species and treatment stated in writing before payment",
          "Pressure tactics absent — you can pause the deal",
          "Report number verified on the lab site when a report is part of the price",
          "Weight, colour, and description match the stone in hand",
          "Receipt or invoice with seller identity and date",
          "You are willing to walk away",
        ]}
      />

      <Misconceptions
        items={[
          "Buying in Sri Lanka is automatically a scam — no; process failure is the usual problem.",
          "A certificate alone makes a high price safe — only if it matches the stone and you understand it.",
          "Unheated + Ceylon always means a bargain — marketing labels are not a substitute for quality assessment.",
        ]}
      />

      <ArticleSection heading="Related Sinhala guides">
        <ul>
          <li>
            <Link href="/si/learn/avoid-gemstone-scams">
              මැණික් ගනුදෙනුවල වංචා අවදානම්
            </Link>
          </li>
          <li>
            <Link href="/si/learn/blue-sapphire-red-flags">
              නිල්මැණික් red flags
            </Link>
          </li>
          <li>
            <Link href="/si/learn/fake-lab-reports">ව්‍යාජ lab reports</Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Disclaimer">
        <p>
          This article is an educational guide. It is not legal advice, not an
          accusation against any person or business, and not a substitute for
          independent laboratory testing or professional counsel on a specific
          purchase.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

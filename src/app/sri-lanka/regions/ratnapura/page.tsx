import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Ratnapura: Sri Lanka's Gem City and Its Mines | GemologyX",
  description:
    "Ratnapura — Sri Lanka’s best-known gem centre. Location, gem-bearing gravels, stones found, mining style, and buying context. Educational guide with sources to expand.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="Sri Lanka · Regions"
      readTime="7 min"
      title="Ratnapura: Sri Lanka’s Gem City and Its Mines"
      crumbHref="/sri-lanka"
      crumbLabel="Sri Lanka"
      lastReviewed="2026-11-07"
      related={[
        { label: "Sri Lanka hub", href: "/sri-lanka" },
        { label: "Ceylon sapphire", href: "/sri-lanka/gems/ceylon-sapphire" },
        { label: "Gemstone scams", href: "/sri-lanka/buying/gemstone-scams" },
        { label: "Ratnapura market", href: "/sri-lanka/buying/ratnapura-gem-market" },
      ]}
    >
      <QuickAnswer>
        <p>
          Ratnapura (often translated as “city of gems”) is the best-known gem
          centre in south-western Sri Lanka. The surrounding area is historically
          tied to alluvial gem-gravel mining and a large local trade. This page
          summarises location, geology in plain language, gems reported from the
          district, mining style, and buying context — not a mine-visit booking
          service.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Location">
        <p>
          Ratnapura is the capital of Sabaragamuwa Province, inland from Sri
          Lanka’s south-west coast, and a long-standing hub for gem dealing and
          services linked to the industry. Neighbouring gem localities in the
          wider belt are covered on their own region pages as they are published
          (for example Balangoda).
        </p>
        <p className="text-sm text-muted">
          <strong>Original asset pending:</strong> district map showing Ratnapura
          relative to other gem towns. Add before calling this page “complete.”
        </p>
      </ArticleSection>

      <ArticleSection heading="Geology in plain language">
        <p>
          Much of Sri Lanka’s gem production is associated with{
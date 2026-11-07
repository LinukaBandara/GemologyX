import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Editorial Policy | GemologyX",
  description:
    "How GemologyX researches, reviews, and updates gemology content — sources, corrections, and what we never claim.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="About"
      readTime="5 min"
      title="Editorial Policy"
      crumbHref="/about"
      crumbLabel="About"
      lastReviewed="2026-11-07"
      related={[
        { label: "About GemologyX", href: "/about" },
        { label: "Authors", href: "/authors" },
        { label: "Contact", href: "/contact" },
        { label: "Sri Lanka hub", href: "/sri-lanka" },
      ]}
    >
      <QuickAnswer>
        <p>
          GemologyX publishes educational gemology content with a depth focus on
          Sri Lanka. Accuracy over volume. Fact, opinion, and marketing language
          are kept separate — especially for origin, treatment, and price talk.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Purpose">
        <p>
          This policy explains how we handle evidence, uncertainty, commercial
          pressure, and corrections. It is the trust contract behind every guide
          on the site.
        </p>
      </ArticleSection>

      <ArticleSection heading="Principles">
        <ul>
          <li>
            <strong>Accuracy over volume</strong> — a thin page is worse than no
            page.
          </li>
          <li>
            <strong>Answer first</strong> — the main question is answered near
            the top, then expanded.
          </li>
          <li>
            <strong>Separate fact, opinion, and marketing</strong> — especially
            for origin, treatment, and investment language.
          </li>
          <li>
            <strong>Show uncertainty</strong> — when labs disagree or data is
            incomplete, we say so.
          </li>
          <li>
            <strong>No substitute for a laboratory</strong> — field tips and
            instrument guides state limits clearly.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Sources we prefer">
        <ul>
          <li>
            <strong>Primary / official</strong> — NGJA and other government
            publications, statutes, official forms.
          </li>
          <li>
            <strong>Specialist institutions</strong> — GIA and similar public
            educational material; national survey-style references where
            relevant.
          </li>
          <li>
            <strong>Peer-reviewed / textbooks</strong> — established mineralogy
            and gemmology references.
          </li>
          <li>
            <strong>Trade documentation</strong> — clearly labelled as trade
            context, not laboratory proof.
          </li>
        </ul>
        <p>
          Numeric or legal claims on a page should be traceable to sources listed
          on that page. Infobox figures on gem profiles must map to the page
          source list.
        </p>
      </ArticleSection>

      <ArticleSection heading="What we never claim">
        <ul>
          <li>Guaranteed future price performance or investment promises</li>
          <li>Medical, healing, or supernatural properties as fact</li>
          <li>
            That a photo-only assessment replaces instrumental testing or a lab
            report
          </li>
          <li>Undated price lists presented as current market truth</li>
          <li>
            Licence or export steps that have not been checked against a current
            official source
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Treatments, origin, and synthetics">
        <p>
          Treatment is described neutrally; disclosure is treated as essential to
          fair trade language. Origin statements are framed as claims or lab
          opinions, not GPS certificates, unless a source supports stronger
          wording. Synthetic and imitation material is named plainly.
        </p>
      </ArticleSection>

      <ArticleSection heading="Review and updates">
        <p>
          Substantive pages show a last-reviewed date. Pages on law, licences,
          export, and safety are prioritised for re-review at least annually, or
          sooner when rules change. Material errors are corrected when
          identified.
        </p>
      </ArticleSection>

      <ArticleSection heading="Independence and monetisation">
        <p>
          Editorial conclusions are not sold. Advertising and affiliate links,
          where present, must be disclosed. Affiliate links are only used where
          they do not require misleading claims.
        </p>
      </ArticleSection>

      <ArticleSection heading="AI-assisted drafting">
        <p>
          Tools may assist outline or draft prose. No article is published
          without human review against this policy, source checks, and the page
          originality requirement (table, diagram, map, photo, or working tool).
        </p>
      </ArticleSection>

      <ArticleSection heading="Corrections">
        <p>
          Report errors via the contact page. Include the URL and what should
          change. We prioritise factual and safety-related corrections.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

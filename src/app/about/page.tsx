import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About GemologyX",
  description:
    "Who runs GemologyX, what we cover, Sri Lanka focus, and how content is researched — independent educational gemology reference.",
};

export default function AboutPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <p className="gx-eyebrow">
        <span /> About
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        About GemologyX
      </h1>
      <p className="mt-2 text-sm text-muted">Last reviewed: 2026-11-07</p>

      <div className="prose-content mt-8 space-y-5 text-sm leading-relaxed text-foreground/90 md:text-base">
        <p>
          GemologyX is an independent educational platform for gemology — clear
          explanations, practical buying process guides, and a depth focus on Sri
          Lankan gem knowledge. We are not a jewellery store or marketplace. We do
          not buy or sell gemstones, and we do not issue laboratory reports.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground">
          Why we exist
        </h2>
        <p>
          Most public gem content is either too shallow for real decisions or too
          commercial to trust. GemologyX aims for answer-first guides with stated
          limits: what a home test can show, what a report can support, and what
          remains marketing language.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground">
          Sri Lanka focus
        </h2>
        <p>
          Sri Lanka is a historic and active gem source. Our{" "}
          <Link href="/sri-lanka" className="text-accent hover:text-accent-strong">
            Sri Lanka hub
          </Link>{" "}
          covers regions, flagship stones such as{" "}
          <Link
            href="/sri-lanka/gems/ceylon-sapphire"
            className="text-accent hover:text-accent-strong"
          >
            Ceylon sapphire
          </Link>
          , mining context, and safer-buying process. Local depth is a
          differentiation choice, not a claim that every stone sold in Sri Lanka
          is local or untreated.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground">
          What we cover — and what we don’t
        </h2>
        <ul>
          <li>Species, treatments, identification limits, care</li>
          <li>Buying process and common risk patterns</li>
          <li>Sri Lanka regions, industry context, and trade education</li>
          <li>Tools and reference charts where we can keep them accurate</li>
        </ul>
        <p>
          We do not publish undated price lists as current market truth, medical
          or healing claims as fact, or licence steps that have not been checked
          against official sources.
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground">
          How content is reviewed
        </h2>
        <p>
          Substantive pages show a last-reviewed date. Legal, licence, and safety
          topics are prioritised for re-check. Full rules are in our{" "}
          <Link
            href="/editorial-policy"
            className="text-accent hover:text-accent-strong"
          >
            editorial policy
          </Link>{" "}
          (also see{" "}
          <Link
            href="/editorial-standards"
            className="text-accent hover:text-accent-strong"
          >
            editorial standards
          </Link>
          ).
        </p>

        <h2 className="font-serif text-xl font-semibold text-foreground">
          Contact
        </h2>
        <p>
          Corrections, press, and partnerships:{" "}
          <Link href="/contact" className="text-accent hover:text-accent-strong">
            Contact
          </Link>
          . We do not identify stones from photos as a lab substitute.
        </p>
      </div>
    </div>
  );
}

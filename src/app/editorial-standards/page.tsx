import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Standards",
  description: "How GemologyX selects sources, checks technical claims, updates content, and handles commercial interests.",
};

export default function EditorialStandardsPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">Editorial Standards</h1>
      <div className="prose-content mt-6 space-y-6 text-sm leading-relaxed text-foreground/90 md:text-base">
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">How we select sources</h2>
          <p className="mt-2">
            Factual claims are grounded in recognized gemological and geological references —
            including gemological laboratories, national gem authorities, academic geological
            literature, and reputable museum or institutional sources — rather than unverified
            trade anecdotes.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">How we check technical claims</h2>
          <p className="mt-2">
            We avoid presenting subjective trade convention as scientific fact, and we avoid
            fabricating statistics, prices, or quotes. Where information cannot be confidently
            established from a reliable source, we either omit it or state it cautiously rather
            than presenting it as settled.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">How we update content</h2>
          <p className="mt-2">
            Gemological understanding and treatment practices evolve. Articles are revisited and
            corrected as better information becomes available.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">Commercial interests</h2>
          <p className="mt-2">
            GemologyX is not a marketplace and does not sell gemstones. Any future advertising or
            affiliate relationships will be disclosed and kept separate from editorial judgment —
            content is not written to favor any product or seller.
          </p>
        </section>
      </div>
    </div>
  );
}

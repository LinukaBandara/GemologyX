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
            Our editorial approach prioritizes gemological laboratories, national gem authorities,
            academic geological literature, and reputable museum or institutional references. For
            local rules and procedures, start with the responsible authority. Trade accounts can
            provide context, but they are not treated as scientific evidence on their own.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">How we check technical claims</h2>
          <p className="mt-2">
            We aim to distinguish measured findings from interpretation, trade language, and
            uncertainty. We do not invent statistics, prices, or quotations. Where a claim cannot
            be established from a reliable source, it should be omitted or described with its limits
            instead of presented as settled fact.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">How we update content</h2>
          <p className="mt-2">
            Gemological understanding, laboratory services, and local requirements can change.
            Pages are reviewed in batches, with priority for technical claims and information that
            changes over time. The full library has not yet completed an editorial and factual review;
            a page being live does not mean every statement has been independently verified. Readers
            should check linked sources and seek professional advice where a decision depends on it.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">Commercial interests</h2>
          <p className="mt-2">
            GemologyX is not a marketplace and does not sell gemstones through this site. If
            advertising or affiliate relationships are introduced, they should be clearly disclosed
            and kept separate from editorial decisions.
          </p>
        </section>
      </div>
    </div>
  );
}

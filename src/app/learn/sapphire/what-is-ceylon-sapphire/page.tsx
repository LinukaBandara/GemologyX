import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Ceylon Sapphire?",
  description:
    "What 'Ceylon sapphire' means, how origin is actually determined, and why the term is often used loosely in the trade.",
};

export default function CeylonSapphirePage() {
  return (
    <article className="container-page max-w-2xl py-14">
      <nav className="text-xs text-muted">
        <Link href="/learn" className="hover:text-accent">Learn</Link>
        <span className="mx-1.5">/</span>
        <span>Sapphire</span>
      </nav>

      <p className="mt-3 text-xs uppercase tracking-wide text-teal">Sapphire · 6 min read</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        What Is Ceylon Sapphire?
      </h1>

      <div className="prose-content mt-8 space-y-6 text-sm leading-relaxed text-foreground/90 md:text-base">
        <p>
          &ldquo;Ceylon sapphire&rdquo; refers to sapphire mined in Sri Lanka, historically known
          as Ceylon until 1972. The term is used both as a straightforward geographic descriptor
          and, informally in parts of the trade, as a loose stand-in for a particular lighter,
          vivid blue tone — even when applied to stones from elsewhere. This is worth understanding
          before treating &ldquo;Ceylon&rdquo; as a guarantee of either origin or colour.
        </p>

        <h2 className="font-serif text-xl font-semibold text-accent-strong">
          Origin vs colour: two different claims
        </h2>
        <p>
          Geographic origin — where a stone was actually mined — is a factual claim that can, in
          many cases, be supported by a gemological laboratory through trace-element chemistry and
          inclusion analysis. Colour description, by contrast, is a subjective and stylistic
          shorthand. When a seller describes a non-Sri Lankan stone as having a &ldquo;Ceylon
          colour,&rdquo; they are making a colour comparison, not an origin claim — and the two
          should not be confused.
        </p>

        <h2 className="font-serif text-xl font-semibold text-accent-strong">
          How origin is actually determined
        </h2>
        <p>
          A gemological laboratory forms an origin opinion by examining a stone&rsquo;s internal
          inclusions and, often, its trace-element chemistry via non-destructive spectroscopic
          methods, then comparing the results against reference databases built from stones of
          confirmed provenance. This is a specialist determination — it is not something a buyer,
          or even an experienced dealer, can reliably assess by eye.
        </p>

        <h2 className="font-serif text-xl font-semibold text-accent-strong">
          Why Sri Lanka is closely associated with sapphire
        </h2>
        <p>
          Sri Lanka has one of the longest continuous histories of gem mining in the world,
          concentrated around Ratnapura and Balangoda, and has historically produced significant
          quantities of fine blue and padparadscha sapphire. That long track record is part of why
          the name carries weight in the trade — but it does not mean every fine sapphire is
          Sri Lankan, nor that every Sri Lankan sapphire is exceptional. Quality varies by
          individual stone regardless of origin.
        </p>

        <h2 className="font-serif text-xl font-semibold text-accent-strong">
          What this means if you&rsquo;re buying
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>An origin claim on a listing without a laboratory report is a seller&rsquo;s representation, not a verified fact.</li>
          <li>A laboratory report on origin is typically an opinion based on the available evidence, not an absolute certainty in every case.</li>
          <li>Evaluate the stone itself — colour, clarity, cut — rather than relying on origin terminology alone.</li>
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-6 text-sm">
        <Link href="/gemstones/sapphire" className="rounded-full border border-border px-3 py-1 hover:border-accent hover:text-accent">Sapphire overview →</Link>
        <Link href="/origins/sri-lanka" className="rounded-full border border-border px-3 py-1 hover:border-accent hover:text-accent">Sri Lanka origin page →</Link>
        <Link href="/glossary" className="rounded-full border border-border px-3 py-1 hover:border-accent hover:text-accent">Glossary →</Link>
      </div>

      <Link href="/learn" className="mt-8 inline-block text-sm font-medium text-accent hover:text-accent-strong">
        &larr; Back to Learn
      </Link>
    </article>
  );
}

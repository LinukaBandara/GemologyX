import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Ceylon Sapphire?",
  description:
    "What 'Ceylon sapphire' means, how origin is actually determined, and why the term is often used loosely in the trade.",

  alternates: { canonical: "/learn/sapphire/what-is-ceylon-sapphire" },
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
          &ldquo;Ceylon sapphire&rdquo; is a familiar trade expression associated with Sri Lankan
          sapphire. On a specific listing, however, the word alone does not show what evidence
          supports the seller&rsquo;s origin claim. Separate the description on the listing from
          any independent laboratory report, and read exactly what that report concludes.
        </p>

        <h2 className="font-serif text-xl font-semibold text-accent-strong">
          Origin vs colour: two different claims
        </h2>
        <p>
          Origin and colour are different questions. A seller may use a regional name in a product
          description, while a laboratory may issue an origin opinion after examining the stone.
          GIA notes that identification reports describe characteristics such as weight, shape,
          cutting style and colour, and may include a geographic-origin opinion when requested and
          possible. Neither a colour impression nor the listing&rsquo;s wording is a substitute for
          checking the report.
        </p>

        <h2 className="font-serif text-xl font-semibold text-accent-strong">
          How origin is actually determined
        </h2>
        <p>
          Origin work can draw on inclusions, trace-element chemistry and other gemological data,
          compared with reference material. For blue sapphire, published GIA research describes
          overlap between localities and cases where the evidence is ambiguous. A report can
          therefore express an expert opinion, or be inconclusive; it is not a GPS record of the
          mine and should be read using the laboratory&rsquo;s own wording and limitations.
        </p>

        <h2 className="font-serif text-xl font-semibold text-accent-strong">
          Why Sri Lanka is closely associated with sapphire
        </h2>
        <p>
          Sri Lanka has a substantial gem and jewellery sector and is known in the international
          trade for a range of sapphires. The Export Development Board describes exports that
          include blue, padparadscha, star and fancy sapphires. A country&rsquo;s reputation provides
          useful context, but it cannot identify the origin or quality of an individual stone.
        </p>

        <h2 className="font-serif text-xl font-semibold text-accent-strong">
          What this means if you&rsquo;re buying
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Ask the seller to put the claimed origin and treatment disclosure in writing.</li>
          <li>Check that the report matches the stone and read the lab&rsquo;s conclusion, treatment comments and limitations.</li>
          <li>Compare the individual stone&rsquo;s colour, clarity, cut and treatment; origin terminology by itself is not a complete quality assessment.</li>
        </ul>
        <h2 className="font-serif text-xl font-semibold text-accent-strong">Primary references</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><a className="text-accent underline underline-offset-4" href="https://www.gia.edu/sapphire/buyers-guide" target="_blank" rel="noreferrer">GIA Sapphire Buyer&rsquo;s Guide</a> — report scope, origin opinions and treatment information.</li>
          <li><a className="text-accent underline underline-offset-4" href="https://www.gia.edu/gems-gemology/winter-2019-blue-sapphire-geographic-origin-determination" target="_blank" rel="noreferrer">GIA Gems &amp; Gemology: Geographic Origin Determination of Blue Sapphire</a> — research on methods and challenges.</li>
          <li><a className="text-accent underline underline-offset-4" href="https://www.srilankabusiness.com/gem-diamond-and-jewellery/about-sri-lanka-gems/sri-lanka-gemstones.html" target="_blank" rel="noreferrer">Sri Lanka Export Development Board: Sri Lanka Gemstones</a> — the country&rsquo;s gem-sector context.</li>
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

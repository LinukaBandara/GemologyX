import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { gemstones, getGemstoneBySlug } from "@/data/gemstones";
import { AdSlot } from "@/components/ad-slot";

export function generateStaticParams() {
  return gemstones.map((g) => ({ slug: g.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const gem = getGemstoneBySlug(slug);
  if (!gem) return {};
  return {
    title: gem.name,
    description: gem.description,
  };
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-muted">{label}</dt>
      <dd className="mt-0.5 text-sm font-medium">{value}</dd>
    </div>
  );
}

export default async function GemstonePage({ params }: { params: Params }) {
  const { slug } = await params;
  const gem = getGemstoneBySlug(slug);
  if (!gem) notFound();

  const d = gem.detail;

  return (
    <article className="container-page max-w-3xl py-14">
      <nav className="text-xs text-muted">
        <Link href="/gemstones" className="hover:text-accent">Gemstones</Link>
        <span className="mx-1.5">/</span>
        <span>{gem.name}</span>
      </nav>

      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        {gem.name}
      </h1>
      <p className="mt-3 text-base text-muted">{gem.description}</p>

      <dl className="mt-8 grid grid-cols-2 gap-5 rounded-xl border border-border bg-surface p-6 sm:grid-cols-3">
        <Fact label="Mineral family" value={gem.mineralFamily} />
        {gem.chemicalFormula && <Fact label="Chemical composition" value={gem.chemicalFormula} />}
        <Fact label="Mohs hardness" value={gem.hardness} />
        {gem.crystalSystem && <Fact label="Crystal system" value={gem.crystalSystem} />}
        <Fact label="Typical colours" value={gem.colors.join(", ")} />
        {gem.birthstoneMonth && <Fact label="Birthstone" value={gem.birthstoneMonth} />}
        {gem.commonTreatments && (
          <Fact label="Common treatments" value={gem.commonTreatments.join(", ")} />
        )}
      </dl>

      {d ? (
        <div className="prose-content mt-10 space-y-8 text-sm leading-relaxed text-foreground/90 md:text-base">
          <section>
            <h2 className="font-serif text-xl font-semibold text-accent-strong">What Is {gem.name}?</h2>
            <p className="mt-2">{d.whatIsIt}</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-accent-strong">{gem.name} Colours</h2>
            <p className="mt-2">{d.colorNotes}</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-accent-strong">{gem.name} Origins</h2>
            <p className="mt-2">{d.origins}</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-accent-strong">Natural vs Synthetic</h2>
            <p className="mt-2">{d.naturalVsSynthetic}</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-accent-strong">Treatments</h2>
            <p className="mt-2">{d.treatments}</p>
          </section>
          <AdSlot variant="in-content" />
          <section>
            <h2 className="font-serif text-xl font-semibold text-accent-strong">Inclusions</h2>
            <p className="mt-2">{d.inclusions}</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-accent-strong">Value Factors</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {d.valueFactors.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-accent-strong">Certification</h2>
            <p className="mt-2">{d.certification}</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-accent-strong">Care</h2>
            <p className="mt-2">{d.care}</p>
          </section>
        </div>
      ) : (
        <div className="mt-10 rounded-lg border border-dashed border-border bg-surface p-6 text-sm text-muted">
          A full educational write-up for {gem.name} — covering colour varieties, origins,
          treatments, inclusions, value factors, and care — is in editorial preparation. The quick
          facts above are accurate and sourced; the longer guide will follow the same standard as
          our Sapphire page.
        </div>
      )}

      <p className="mt-10 text-xs text-muted">
        GemologyX provides educational information. It is not a substitute for professional
        gemological examination or a laboratory report.
      </p>

      <Link href="/gemstones" className="mt-8 inline-block text-sm font-medium text-accent hover:text-accent-strong">
        &larr; Back to all gemstones
      </Link>
    </article>
  );
}

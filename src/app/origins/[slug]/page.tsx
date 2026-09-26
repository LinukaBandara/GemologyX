import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { origins, getOriginBySlug } from "@/data/origins";
import { AdSlot } from "@/components/ad-slot";

export function generateStaticParams() {
  return origins.map((o) => ({ slug: o.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const origin = getOriginBySlug(slug);
  if (!origin) return {};
  return { title: origin.name, description: origin.summary };
}

export default async function OriginPage({ params }: { params: Params }) {
  const { slug } = await params;
  const origin = getOriginBySlug(slug);
  if (!origin) notFound();

  const d = origin.detail;

  return (
    <article className="container-page max-w-3xl py-14">
      <nav className="text-xs text-muted">
        <Link href="/origins" className="hover:text-accent">Origins</Link>
        <span className="mx-1.5">/</span>
        <span>{origin.name}</span>
      </nav>

      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        {origin.name}
      </h1>
      <p className="mt-3 text-base text-muted">{origin.summary}</p>

      {origin.gemstones && (
        <div className="mt-6 flex flex-wrap gap-2">
          {origin.gemstones.map((g) => (
            <span key={g} className="rounded-full border border-border bg-surface px-3 py-1 text-xs">
              {g}
            </span>
          ))}
        </div>
      )}

      {d ? (
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90 md:text-base">
          <section>
            <h2 className="font-serif text-xl font-semibold text-accent-strong">Overview</h2>
            <p className="mt-2">{d.overview}</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-accent-strong">Geological Context</h2>
            <p className="mt-2">{d.geology}</p>
          </section>
          <AdSlot variant="in-content" />
          <section>
            <h2 className="font-serif text-xl font-semibold text-accent-strong">History</h2>
            <p className="mt-2">{d.history}</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-accent-strong">Common Misconceptions</h2>
            <p className="mt-2">{d.misconceptions}</p>
          </section>
        </div>
      ) : (
        <div className="mt-10 rounded-lg border border-dashed border-border bg-surface p-6 text-sm text-muted">
          A full write-up on {origin.name}&rsquo;s gemstone geology and history is in editorial
          preparation, to the same standard as our Sri Lanka page.
        </div>
      )}

      <Link href="/origins" className="mt-10 inline-block text-sm font-medium text-accent hover:text-accent-strong">
        &larr; Back to all origins
      </Link>
    </article>
  );
}

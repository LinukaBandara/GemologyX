import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { glossaryTerms, getGlossaryTermBySlug } from "@/data/glossary";

type Params = Promise<{ term: string }>;

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ term: t.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { term } = await params;
  const entry = getGlossaryTermBySlug(term);
  if (!entry) return {};
  return { title: entry.term, description: entry.definition };
}

export default async function GlossaryTermPage({ params }: { params: Params }) {
  const { term } = await params;
  const entry = getGlossaryTermBySlug(term);
  if (!entry) notFound();

  return (
    <article className="container-page max-w-xl py-14">
      <nav className="text-xs text-muted">
        <Link href="/glossary" className="hover:text-accent">Glossary</Link>
        <span className="mx-1.5">/</span>
        <span>{entry.term}</span>
      </nav>
      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight">{entry.term}</h1>
      <p className="mt-4 text-base text-foreground/90">{entry.definition}</p>

      <Link href="/glossary" className="mt-10 inline-block text-sm font-medium text-accent hover:text-accent-strong">
        &larr; Back to glossary
      </Link>
    </article>
  );
}

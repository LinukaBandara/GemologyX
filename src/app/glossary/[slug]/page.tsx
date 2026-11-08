import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import { glossaryTerms, getGlossaryTermBySlug } from "@/data/glossary";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);

  if (!term) return {};

  return {
    title: `${term.term} | Gemology Glossary`,
    description: term.definition,
    alternates: { canonical: `/glossary/${term.slug}` },
    openGraph: {
      title: `${term.term} | Gemology Glossary`,
      description: term.definition,
      type: "article", images: ["/gemologyx-social.svg"],
      url: `https://gemologyx.com/glossary/${term.slug}`,
    },
    twitter: {
      card: "summary_large_image", images: ["/gemologyx-social.svg"],
      title: `${term.term} | Gemology Glossary`,
      description: term.definition,
    },
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const term = getGlossaryTermBySlug(slug);

  if (!term) notFound();

  const relatedTerms = glossaryTerms
    .filter((item) => item.slug !== term.slug)
    .filter((item) => {
      const words = term.term.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
      const haystack = `${item.term} ${item.definition}`.toLowerCase();
      return words.some((word) => word.length > 4 && haystack.includes(word));
    })
    .slice(0, 4);

  const definedTermStructuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "GemologyX Gemological Glossary",
      url: "https://gemologyx.com/glossary",
    },
  };

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://gemologyx.com/" }, { name: "Glossary", url: "https://gemologyx.com/glossary" }, { name: term.term, url: `https://gemologyx.com/glossary/${term.slug}` }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(definedTermStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <article className="container-page max-w-3xl py-12 md:py-16">
      <nav aria-label="Breadcrumb" className="luxury-breadcrumb">
        <Link href="/glossary">Glossary</Link>
        <span>/</span>
        <span aria-current="page">{term.term}</span>
      </nav>

      <header className="mt-8 border-b border-border pb-8">
        <div className="gx-eyebrow"><span /> Gemological Reference</div>
        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-5xl">
          {term.term}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
          {term.definition}
        </p>
      </header>

      <section className="mt-8 rounded-2xl border border-border bg-white p-6 md:p-8">
        <div className="flex items-center gap-3">
          <BookOpen size={18} aria-hidden="true" />
          <h2 className="font-serif text-xl font-semibold">In gemology</h2>
        </div>
        <p className="mt-4 leading-7 text-muted">
          This term is part of the language used to describe, identify, assess or care for
          gemstones. Its significance depends on the gemstone and the context in which it
          is observed. Where identification or a purchase decision depends on a technical
          result, use suitable gemological testing and an independent report rather than
          relying on a description alone.
        </p>
      </section>

      {relatedTerms.length > 0 && (
        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold">Related terms</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedTerms.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/glossary/${item.slug}`}
                  className="block rounded-xl border border-border p-4 transition-colors hover:border-accent"
                >
                  <span className="font-semibold">{item.term}</span>
                  <span className="mt-1 block text-sm leading-6 text-muted">
                    {item.definition}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-10">
        <Link href="/glossary" className="luxury-back-link">
          <ArrowLeft size={14} aria-hidden="true" /> Back to glossary
        </Link>
      </div>
      <p className="mt-8 text-xs leading-5 text-muted">
        GemologyX is an educational reference. A glossary definition is not a substitute
        for examination by a qualified gemologist or a laboratory report.
      </p>
      </article>
    </>
  );
}

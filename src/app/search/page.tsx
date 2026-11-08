import type { Metadata } from "next";
import Link from "next/link";
import { SearchExperience } from "@/components/search-experience";

export const metadata: Metadata = {
  title: "Search GemologyX",
  description: "Search gemstone profiles, origins, gemological terminology and selected educational guides.",
  robots: { index: false, follow: true },
};

type SearchPageProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const initialQuery = Array.isArray(params.q) ? params.q[0] ?? "" : params.q ?? "";

  return (
    <div className="container-page max-w-4xl py-12 md:py-16">
      <nav className="luxury-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Search</span></nav>
      <header className="border-b border-border pb-8">
        <div className="gx-eyebrow"><span /> EXPLORE THE LIBRARY</div>
        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">Search GemologyX</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">Search gemstone profiles, geographic origins, glossary definitions and selected practical guides.</p>
      </header>
      <SearchExperience initialQuery={initialQuery} />
    </div>
  );
}

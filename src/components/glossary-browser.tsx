"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { glossaryTerms } from "@/data/glossary";

export function GlossaryBrowser() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    return glossaryTerms.filter((term) =>
      `${term.term} ${term.definition}`.toLocaleLowerCase().includes(normalized)
    );
  }, [query]);

  return (
    <>
      <label className="relative mt-6 flex min-h-14 w-full max-w-xl items-center gap-3 rounded-full border border-border bg-white px-4 py-3 shadow-sm focus-within:border-accent">
        <Search size={17} className="shrink-0 text-muted" aria-hidden="true" />
        <span className="sr-only">Search glossary terms and definitions</span>
        <input
          type="search"
          placeholder="Search a term or definition…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full min-w-0 border-0 bg-transparent text-base outline-none placeholder:text-muted"
        />
      </label>

      <div className="mt-4 flex items-center justify-between text-xs text-muted" aria-live="polite">
        <span>{filtered.length} of {glossaryTerms.length} terms</span>
        <span>Choose a term for its reference page</span>
      </div>

      <dl className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">
        {filtered.map((term) => (
          <div key={term.slug} className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <dt className="font-serif text-base font-semibold text-foreground">{term.term}</dt>
              <dd className="mt-1 max-w-3xl text-sm leading-relaxed text-muted">{term.definition}</dd>
            </div>
            <Link href={`/glossary/${term.slug}`} className="shrink-0 text-sm font-semibold text-accent hover:text-accent-strong">
              Open reference →
            </Link>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="px-5 py-10 text-center">
            <p className="font-medium text-foreground">No matching terms</p>
            <p className="mt-1 text-sm text-muted">Try another spelling or a related gemological word.</p>
          </div>
        )}
      </dl>
    </>
  );
}

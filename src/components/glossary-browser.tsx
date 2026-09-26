"use client";

import { useState } from "react";
import { glossaryTerms } from "@/data/glossary";

export function GlossaryBrowser() {
  const [query, setQuery] = useState("");
  const filtered = glossaryTerms.filter((t) =>
    t.term.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search terms…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mt-6 w-full max-w-sm rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
      />

      <dl className="mt-8 divide-y divide-border rounded-lg border border-border bg-surface">
        {filtered.map((t) => (
          <div key={t.slug} className="px-5 py-4">
            <dt className="font-serif text-base font-semibold">{t.term}</dt>
            <dd className="mt-1 text-sm text-muted">{t.definition}</dd>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="px-5 py-6 text-sm text-muted">No terms match &ldquo;{query}&rdquo;.</p>
        )}
      </dl>
    </>
  );
}

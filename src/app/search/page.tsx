"use client";

import { useState } from "react";
import Link from "next/link";
import { gemstones } from "@/data/gemstones";
import { origins } from "@/data/origins";
import { glossaryTerms } from "@/data/glossary";

export default function SearchPage() {
  const [q, setQ] = useState("");
  const query = q.toLowerCase();

  const gemResults = query ? gemstones.filter((g) => g.name.toLowerCase().includes(query)) : [];
  const originResults = query ? origins.filter((o) => o.name.toLowerCase().includes(query)) : [];
  const glossaryResults = query ? glossaryTerms.filter((t) => t.term.toLowerCase().includes(query)) : [];
  const hasResults = gemResults.length || originResults.length || glossaryResults.length;

  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">Search</h1>
      <input
        autoFocus
        type="text"
        placeholder="Search gemstones, origins, glossary…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="mt-6 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
      />

      {query && !hasResults && (
        <p className="mt-8 text-sm text-muted">No results for &ldquo;{q}&rdquo;. Try a gemstone name, country, or gemological term.</p>
      )}

      {gemResults.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xs font-medium uppercase tracking-wide text-muted">Gemstones</h2>
          <ul className="mt-2 space-y-1">
            {gemResults.map((g) => (
              <li key={g.slug}><Link href={`/gemstones/${g.slug}`} className="text-sm font-medium hover:text-accent">{g.name}</Link></li>
            ))}
          </ul>
        </div>
      )}
      {originResults.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xs font-medium uppercase tracking-wide text-muted">Origins</h2>
          <ul className="mt-2 space-y-1">
            {originResults.map((o) => (
              <li key={o.slug}><Link href={`/origins/${o.slug}`} className="text-sm font-medium hover:text-accent">{o.name}</Link></li>
            ))}
          </ul>
        </div>
      )}
      {glossaryResults.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xs font-medium uppercase tracking-wide text-muted">Glossary</h2>
          <ul className="mt-2 space-y-1">
            {glossaryResults.map((t) => (
              <li key={t.slug} className="text-sm font-medium">{t.term}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

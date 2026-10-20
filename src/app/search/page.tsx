"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { gemstones } from "@/data/gemstones";
import { origins } from "@/data/origins";
import { glossaryTerms } from "@/data/glossary";

export default function SearchPage() {
  const [q, setQ] = useState("");
  const query = q.toLowerCase().trim();
  const gemResults = query
    ? gemstones.filter((g) => g.name.toLowerCase().includes(query))
    : [];
  const originResults = query
    ? origins.filter((o) => o.name.toLowerCase().includes(query))
    : [];
  const glossaryResults = query
    ? glossaryTerms.filter((t) => t.term.toLowerCase().includes(query))
    : [];
  const hasResults =
    gemResults.length || originResults.length || glossaryResults.length;

  return (
    <div className="container-page max-w-3xl py-12 md:py-16">
      <header className="border-b border-border pb-8">
        <div className="gx-eyebrow"><span /> Explore the Library</div>
        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Search GemologyX
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          Find gemstone profiles, geographic origins, and gemological terminology.
        </p>
      </header>

      <div className="mt-8 flex items-center gap-3 rounded-full border border-border bg-white px-4 py-3 shadow-sm focus-within:border-[rgba(30,58,95,0.4)] focus-within:shadow-md transition-shadow">
        <Search size={18} className="shrink-0 text-muted" />
        <input
          autoFocus
          placeholder="Search gemstones, origins, glossary…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-muted"
        />
      </div>

      {query && !hasResults && (
        <div className="mt-8 rounded-2xl border border-dashed border-border bg-white/60 px-6 py-10 text-center text-sm text-muted">
          No results for “{q}”. Try a gemstone name, country, or gemological term.
        </div>
      )}

      {gemResults.length > 0 && (
        <SearchGroup title="Gemstones">
          {gemResults.map((g) => (
            <Link
              key={g.slug}
              href={`/gemstones/${g.slug}`}
              className="flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium transition-colors hover:border-[rgba(30,58,95,0.3)] hover:bg-accent-soft"
            >
              <span>{g.name}</span>
              <ArrowUpRight size={15} className="text-accent" />
            </Link>
          ))}
        </SearchGroup>
      )}

      {originResults.length > 0 && (
        <SearchGroup title="Origins">
          {originResults.map((o) => (
            <Link
              key={o.slug}
              href={`/origins/${o.slug}`}
              className="flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium transition-colors hover:border-[rgba(30,58,95,0.3)] hover:bg-accent-soft"
            >
              <span>{o.name}</span>
              <ArrowUpRight size={15} className="text-accent" />
            </Link>
          ))}
        </SearchGroup>
      )}

      {glossaryResults.length > 0 && (
        <SearchGroup title="Glossary">
          {glossaryResults.map((t) => (
            <div
              key={t.slug}
              className="rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium"
            >
              {t.term}
            </div>
          ))}
        </SearchGroup>
      )}
    </div>
  );
}

function SearchGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted">
          {title}
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <div className="space-y-2">{children}</div>
    </section>
  );
}

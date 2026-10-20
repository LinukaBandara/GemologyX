"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { GemstoneCard } from "@/components/gemstone-card";
import type { Gemstone } from "@/data/gemstones";

const categories = ["All", "Precious", "Semi-Precious", "Organic"] as const;

export function GemstoneDirectory({ gemstones }: { gemstones: Gemstone[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [sort, setSort] = useState("name");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    return gemstones
      .filter((gem) => category === "All" || gem.category === category)
      .filter((gem) => {
        if (!normalized) return true;
        const searchable = [
          gem.name,
          gem.mineralFamily,
          gem.chemicalFormula ?? "",
          gem.description,
          ...gem.colors,
          ...(gem.commonTreatments ?? []),
        ]
          .join(" ")
          .toLocaleLowerCase();
        return searchable.includes(normalized);
      })
      .sort((a, b) => {
        if (sort === "hardness") {
          const hardness = (value: string) =>
            Number(value.match(/[0-9]+(?:\.[0-9]+)?/)?.[0] ?? 0);
          return hardness(b.hardness) - hardness(a.hardness) || a.name.localeCompare(b.name);
        }
        return a.name.localeCompare(b.name);
      });
  }, [gemstones, query, category, sort]);

  return (
    <section aria-label="Search gemstone profiles" className="mt-8">
      {/* Controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative flex flex-1 items-center gap-2.5 rounded-full border border-border bg-white px-4 py-2.5 shadow-sm focus-within:border-[rgba(30,58,95,0.35)]">
          <Search size={16} className="shrink-0 text-muted" aria-hidden="true" />
          <span className="sr-only">Search gemstones</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a gemstone, colour, mineral or treatment…"
            className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-muted"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="rounded-full p-0.5 text-muted hover:text-foreground"
            >
              <X size={15} />
            </button>
          )}
        </label>

        <label className="flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-2.5 text-sm shadow-sm">
          <SlidersHorizontal size={15} className="text-muted" aria-hidden="true" />
          <span className="sr-only">Sort gemstone profiles</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border-0 bg-transparent text-sm outline-none"
          >
            <option value="name">Name A–Z</option>
            <option value="hardness">Hardness: highest first</option>
          </select>
        </label>
      </div>

      {/* Filters */}
      <div className="mt-4 flex flex-wrap items-center gap-2" aria-label="Filter by category">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={
              category === item
                ? "rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-white"
                : "rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-muted hover:border-[rgba(30,58,95,0.3)] hover:text-accent"
            }
            aria-pressed={category === item}
          >
            {item}
          </button>
        ))}
        <p className="ml-auto text-xs text-muted" aria-live="polite">
          <strong className="text-foreground">{filtered.length}</strong> of {gemstones.length} profiles
        </p>
      </div>

      {/* Grid */}
      {filtered.length ? (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((gem) => (
            <GemstoneCard key={gem.slug} gem={gem} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-border bg-white/60 px-6 py-12 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
            <Search size={20} />
          </div>
          <h2 className="font-serif text-lg font-semibold">No matching gemstones</h2>
          <p className="mt-1 text-sm text-muted">
            Try a different spelling, colour, mineral family or category.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="gx-btn gx-btn-secondary mt-5"
          >
            Clear filters filters
          </button>
        </div>
      )}
    </section>
  );
}

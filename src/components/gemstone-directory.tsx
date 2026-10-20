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
        ].join(" ").toLocaleLowerCase();
        return searchable.includes(normalized);
      })
      .sort((a, b) => {
        if (sort === "hardness") {
          const hardness = (value: string) => Number(value.match(/[0-9]+(?:\.[0-9]+)?/)?.[0] ?? 0);
          return hardness(b.hardness) - hardness(a.hardness) || a.name.localeCompare(b.name);
        }
        return a.name.localeCompare(b.name);
      });
  }, [gemstones, query, category, sort]);

  return (
    <section aria-label="Search gemstone profiles" className="mt-8">
      <div className="directory-controls">
        <label className="directory-search">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search gemstones</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a gemstone, colour, mineral or treatment…"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="directory-clear">
              <X size={16} />
            </button>
          )}
        </label>
        <label className="directory-sort">
          <SlidersHorizontal size={16} aria-hidden="true" />
          <span className="sr-only">Sort gemstone profiles</span>
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="name">Name A–Z</option>
            <option value="hardness">Hardness: highest first</option>
          </select>
        </label>
      </div>

      <div className="directory-filters" aria-label="Filter by category">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={category === item ? "directory-filter is-active" : "directory-filter"}
            aria-pressed={category === item}
          >
            {item}
          </button>
        ))}
        <p className="directory-result-count" aria-live="polite">
          <strong>{filtered.length}</strong> of {gemstones.length} profiles
        </p>
      </div>

      {filtered.length ? (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((gem) => <GemstoneCard key={gem.slug} gem={gem} />)}
        </div>
      ) : (
        <div className="directory-empty">
          <div className="directory-empty-icon"><Search size={22} /></div>
          <h2>No matching gemstones</h2>
          <p>Try a different spelling, colour, mineral family or category.</p>
          <button type="button" onClick={() => { setQuery(""); setCategory("All"); }} className="luxury-button luxury-button-secondary">
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}

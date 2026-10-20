"use client";

import { useMemo, useState } from "react";
import { Gem, Search, SlidersHorizontal, X } from "lucide-react";
import type { Gemstone } from "@/data/gemstones";
import { GemstoneCard } from "@/components/gemstone-card";

type CategoryFilter = "All" | Gemstone["category"];

const categories: CategoryFilter[] = ["All", "Precious", "Semi-Precious", "Organic"];

export function GemstoneDirectory({ gemstones }: { gemstones: Gemstone[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [sort, setSort] = useState<"featured" | "name">("featured");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const results = gemstones.filter((gem) => {
      const searchable = [
        gem.name,
        gem.category,
        gem.mineralFamily,
        gem.chemicalFormula ?? "",
        gem.hardness,
        gem.crystalSystem ?? "",
        gem.description,
        ...gem.colors,
        ...(gem.commonTreatments ?? []),
      ].join(" ").toLocaleLowerCase();

      return (category === "All" || gem.category === category)
        && (!normalizedQuery || searchable.includes(normalizedQuery));
    });

    if (sort === "name") {
      return [...results].sort((a, b) => a.name.localeCompare(b.name));
    }

    return results;
  }, [category, gemstones, query, sort]);

  const hasFilters = query.length > 0 || category !== "All" || sort !== "featured";

  function resetFilters() {
    setQuery("");
    setCategory("All");
    setSort("featured");
  }

  return (
    <section aria-label="Search and explore gemstone profiles">
      <div className="directory-explorer">
        <div className="directory-search-wrap">
          <Search aria-hidden="true" size={19} />
          <label className="sr-only" htmlFor="gemstone-search">Search gemstones</label>
          <input
            id="gemstone-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, colour, mineral, hardness…"
            autoComplete="off"
          />
          {query && (
            <button className="directory-clear" type="button" onClick={() => setQuery("")} aria-label="Clear search">
              <X size={16} />
            </button>
          )}
        </div>

        <div className="directory-controls">
          <div className="directory-filter-label"><SlidersHorizontal size={14} /> CATEGORY</div>
          <div className="directory-filter-options" role="group" aria-label="Filter by gemstone category">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={`directory-filter-chip ${category === item ? "is-active" : ""}`}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <label className="directory-sort">
            <span>SORT</span>
            <select value={sort} onChange={(event) => setSort(event.target.value as "featured" | "name")}>
              <option value="featured">Featured order</option>
              <option value="name">Name A–Z</option>
            </select>
          </label>
        </div>
      </div>

      <div className="directory-results-bar" aria-live="polite">
        <p><strong>{filtered.length}</strong> {filtered.length === 1 ? "gemstone" : "gemstones"} found</p>
        {hasFilters && (
          <button type="button" onClick={resetFilters} className="directory-reset">
            <X size={13} /> Reset filters
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((gem) => <GemstoneCard key={gem.slug} gem={gem} />)}
        </div>
      ) : (
        <div className="directory-empty">
          <span className="directory-empty-icon"><Gem size={23} /></span>
          <h2>No gemstones match that search</h2>
          <p>Try a different name, colour, mineral family, or category.</p>
          <button type="button" onClick={resetFilters} className="luxury-button luxury-button-primary">Show all gemstones</button>
        </div>
      )}
    </section>
  );
}

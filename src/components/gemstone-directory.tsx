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
        gem.name, gem.category, gem.mineralFamily, gem.chemicalFormula ?? "",
        gem.hardness, gem.crystalSystem ?? "", gem.description, ...gem.colors,
        ...(gem.commonTreatments ?? []),
      ].join(" ").toLocaleLowerCase();
      return (category === "All" || gem.category === category)
        && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
    return sort === "name" ? [...results].sort((a, b) => a.name.localeCompare(b.name)) : results;
  }, [category, gemstones, query, sort]);

  const hasFilters = query.length > 0 || category !== "All" || sort !== "featured";
  function resetFilters() {
    setQuery("");
    setCategory("All");
    setSort("featured");
  }

  return (
    <section aria-label="Search and explore gemstone profiles">
      <div className="rounded-2xl border border-[#e9e1ee] bg-white/90 p-4 shadow-[0_12px_35px_rgba(58,32,78,0.06)] sm:p-6">
        <div className="flex items-center gap-3 rounded-xl border border-[#e9e1ee] bg-[#fbf9fc] px-4 py-3.5 focus-within:border-[#7651a8] focus-within:ring-4 focus-within:ring-[#7651a8]/10">
          <Search aria-hidden="true" size={19} className="shrink-0 text-[#7651a8]" />
          <label className="sr-only" htmlFor="gemstone-search">Search gemstones</label>
          <input
            id="gemstone-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, colour, mineral, hardness…"
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent text-sm text-[#211827] outline-none placeholder:text-[#93899a]"
          />
          {query && (
            <button className="rounded-full p-1.5 text-[#746b7c] transition hover:bg-[#f1eaf7] hover:text-[#4d2b70]" type="button" onClick={() => setQuery("")} aria-label="Clear search">
              <X size={16} />
            </button>
          )}
        </div>

        <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-[#746b7c]">
            <SlidersHorizontal size={14} className="text-[#7651a8]" /> CATEGORY
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by gemstone category">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7651a8] ${category === item ? "border-[#4d2b70] bg-[#4d2b70] text-white shadow-md shadow-[#4d2b70]/15" : "border-[#e9e1ee] bg-white text-[#746b7c] hover:border-[#bca6d1] hover:bg-[#f8f3fb] hover:text-[#4d2b70]"}`}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 lg:ml-auto">
            <span className="text-[10px] font-bold tracking-[0.18em] text-[#746b7c]">SORT</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as "featured" | "name")}
              className="min-h-10 rounded-full border border-[#e9e1ee] bg-white px-3 text-xs font-semibold text-[#211827] outline-none transition focus:border-[#7651a8] focus:ring-4 focus:ring-[#7651a8]/10"
            >
              <option value="featured">Featured order</option>
              <option value="name">Name A–Z</option>
            </select>
          </label>
        </div>
      </div>

      <div className="mt-7 flex min-h-7 items-center justify-between gap-3">
        <p className="text-sm text-[#746b7c]" aria-live="polite">
          <strong className="font-semibold text-[#211827]">{filtered.length}</strong> {filtered.length === 1 ? "gemstone" : "gemstones"} found
        </p>
        {hasFilters && (
          <button type="button" onClick={resetFilters} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7651a8] transition hover:text-[#4d2b70]">
            <X size={13} /> Reset filters
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((gem) => <GemstoneCard key={gem.slug} gem={gem} />)}
        </div>
      ) : (
        <div className="mt-4 flex flex-col items-center rounded-2xl border border-dashed border-[#d8c9e3] bg-white/70 px-6 py-16 text-center">
          <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f1eaf7] text-[#7651a8]"><Gem size={23} /></span>
          <h2 className="font-serif text-2xl text-[#211827]">No gemstones match that search</h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-[#746b7c]">Try a different name, colour, mineral family, or category.</p>
          <button type="button" onClick={resetFilters} className="luxury-button luxury-button-primary mt-5">Show all gemstones</button>
        </div>
      )}
    </section>
  );
}

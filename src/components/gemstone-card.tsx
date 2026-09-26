import Link from "next/link";
import type { Gemstone } from "@/data/gemstones";

export function GemstoneCard({ gem }: { gem: Gemstone }) {
  return (
    <Link
      href={`/gemstones/${gem.slug}`}
      className="card-hover group flex flex-col rounded-xl border border-border bg-surface p-5"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-lg font-semibold">{gem.name}</h3>
        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-accent">
          {gem.category}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted line-clamp-3">{gem.description}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-muted">
        <span>Mohs {gem.hardness}</span>
        <span className="text-accent opacity-0 transition-opacity group-hover:opacity-100">
          Explore →
        </span>
      </div>
    </Link>
  );
}

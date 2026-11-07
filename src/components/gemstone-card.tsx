import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Gemstone } from "@/data/gemstones";
import { GemstoneIllustration } from "@/components/gemstone-illustration";

export function GemstoneCard({ gem }: { gem: Gemstone }) {
  return (
    <Link
      href={`/gemstones/${gem.slug}`}
      className="group flex flex-col overflow-hidden rounded-[2px] border border-border bg-surface transition-colors duration-200 hover:border-[rgba(166,132,86,0.75)]"
    >
      {/* Visual header */}
      <div className="relative flex min-h-[190px] items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-[#f7f3eb] via-[#efe8dc] to-[#e7efe9]">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "radial-gradient(circle at 70% 30%, rgba(30,58,95,0.08), transparent 55%)"
        }} />
        <GemstoneIllustration gem={gem} />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gold">
          Gemstone Profile
        </p>
        <h3 className="mt-1.5 font-serif text-xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
          {gem.name}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
          {gem.description}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-3.5">
          <span className="text-xs font-medium text-muted">
            <span className="font-semibold text-foreground">Mohs</span> {gem.hardness}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
            View profile <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Gemstone } from "@/data/gemstones";

export function GemstoneCard({ gem }: { gem: Gemstone }) {
  return (
    <Link
      href={`/gemstones/${gem.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(30,58,95,0.25)] hover:shadow-[0_16px_40px_rgba(15,28,46,0.08)]"
    >
      {/* Visual header */}
      <div className="relative flex min-h-[160px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#f7f5f1] via-[#eef3f9] to-[#f7f0e4]">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "radial-gradient(circle at 70% 30%, rgba(30,58,95,0.08), transparent 55%)"
        }} />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(30,58,95,0.12)] bg-white/80 shadow-sm backdrop-blur-sm">
          <span className="font-serif text-xl font-semibold text-accent">{gem.name.charAt(0)}</span>
        </div>
        <span className="absolute left-3.5 top-3.5 rounded-full border border-border/80 bg-white/80 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-muted backdrop-blur-sm">
          {gem.category}
        </span>
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

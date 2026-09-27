import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Gemstone } from "@/data/gemstones";

export function GemstoneCard({ gem }: { gem: Gemstone }) {
  return (
    <Link href={`/gemstones/${gem.slug}`} className="gem-card group">
      <div className="gem-card-art">
        <div className="gem-card-art-glow" />
        <div className="mini-gem"><i /><b /><em /></div>
        <span className="gem-card-category">{gem.category}</span>
        <span className="gem-card-index">PROFILE</span>
      </div>

      <div className="gem-card-body">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="gem-card-kicker"><Sparkles size={11} /> GEMSTONE PROFILE</p>
            <h3>{gem.name}</h3>
          </div>
          <span className="gem-card-arrow">
            <ArrowUpRight size={17} />
          </span>
        </div>

        <p className="gem-card-description">{gem.description}</p>

        <div className="gem-card-meta">
          <span><b>MOHS</b> {gem.hardness}</span>
          <span>VIEW PROFILE <ArrowUpRight size={12} /></span>
        </div>
      </div>
    </Link>
  );
}

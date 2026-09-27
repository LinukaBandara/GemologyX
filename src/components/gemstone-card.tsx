import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Gemstone } from "@/data/gemstones";

export function GemstoneCard({ gem }: { gem: Gemstone }) {
  return (
    <Link href={`/gemstones/${gem.slug}`} className="gem-card group">
      <div className="gem-card-art"><div className="mini-gem"><i /><b /><em /></div><span className="gem-card-category">{gem.category}</span></div>
      <div className="gem-card-body">
        <div><p className="gem-card-kicker"><Sparkles size={11} /> GEMSTONE</p><h3>{gem.name}</h3></div>
        <ArrowUpRight size={18} className="gem-card-arrow" />
        <p className="gem-card-description">{gem.description}</p>
        <div className="gem-card-meta"><span>MOHS {gem.hardness}</span><span>EXPLORE PROFILE</span></div>
      </div>
    </Link>
  );
}

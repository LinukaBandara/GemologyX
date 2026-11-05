import Link from "next/link";
import type { Gemstone } from "@/data/gemstones";
import { ArrowUpRight } from "lucide-react";

const STONE_ART: Record<string, string> = {
  sapphire: "/images/gx-sapphire.svg",
  ruby: "/images/gx-ruby.svg",
  emerald: "/images/gx-emerald.svg",
};

export function GemstoneCard({ gem }: { gem: Gemstone }) {
  const image = STONE_ART[gem.slug];
  return (
    <Link href={`/gemstones/${gem.slug}`} className="gx-gem-card group">
      <div className="gx-gem-art">
        {image ? <img src={image} alt={`${gem.name} faceted gemstone illustration`} width="360" height="240" loading="lazy" /> : <span className="gx-gem-letter" aria-hidden="true">{gem.name.charAt(0)}</span>}
        <span style={{ position: "absolute", left: 28, top: 27, color: "rgba(255,255,255,.55)", fontSize: 8, letterSpacing: ".18em", textTransform: "uppercase" }}>{gem.category}</span>
      </div>
      <div className="gx-gem-card-body">
        <div className="gx-gem-card-meta">{gem.mineralFamily} · GEMSTONE PROFILE</div>
        <h3>{gem.name}</h3>
        <p>{gem.description}</p>
        <div className="gx-gem-card-foot">
          <span>MOHS HARDNESS <strong>{gem.hardness}</strong></span>
          <span>Explore <ArrowUpRight size={13} style={{ display: "inline", verticalAlign: "-2px" }} /></span>
        </div>
      </div>
    </Link>
  );
}

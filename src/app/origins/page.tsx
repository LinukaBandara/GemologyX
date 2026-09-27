import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { origins } from "@/data/origins";

export const metadata: Metadata = {
  title: "Gemstone Origins",
  description: "Explore where gemstones come from, country by country, with geological and historical context.",
};

export default function OriginsPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <header className="directory-hero">
        <div className="luxury-eyebrow"><span /> GEOLOGICAL ATLAS</div>
        <h1>Where Do Gemstones Come From?</h1>
        <p>Explore geographic origins with geological and historical context. Origin cannot reliably be determined from appearance alone.</p>
      </header>
      <div className="origin-grid mt-10">
        {origins.map((o, i) => (
          <Link key={o.slug} href={`/origins/${o.slug}`} className="origin-card card-hover">
            <span className="origin-number">0{i + 1}</span>
            <div><h2>{o.name}</h2><p>{o.summary}</p></div>
            <ArrowUpRight className="origin-arrow" size={18} />
          </Link>
        ))}
      </div>
    </div>
  );
}

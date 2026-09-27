import type { Metadata } from "next";
import { gemstones } from "@/data/gemstones";
import { GemstoneCard } from "@/components/gemstone-card";

export const metadata: Metadata = {
  title: "Gemstone Directory",
  description: "Browse a reference directory of gemstones with mineral family, hardness, colour range, and key characteristics for each.",
};

export default function GemstonesPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <header className="directory-hero">
        <div className="luxury-eyebrow"><span /> REFERENCE LIBRARY</div>
        <h1>Gemstone Directory</h1>
        <p>Explore gemstone profiles covering mineral family, hardness, colour range, and key characteristics.</p>
        <div className="directory-rule"><span /> {gemstones.length} profiles <span /></div>
      </header>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gemstones.map((gem) => <GemstoneCard key={gem.slug} gem={gem} />)}
      </div>
    </div>
  );
}

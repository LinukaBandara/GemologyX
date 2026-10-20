import type { Metadata } from "next";
import { allGemstones as gemstones } from "@/data/all-gemstones";
import { GemstoneDirectory } from "@/components/gemstone-directory";

export const metadata: Metadata = {
  title: "Gemstone Directory",
  description:
    "Browse a reference directory of gemstones with mineral family, hardness, colour range, and key characteristics for each.",
};

export default function GemstonesPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <header className="directory-hero">
        <div className="luxury-eyebrow"><span /> REFERENCE LIBRARY</div>
        <h1>Gemstone Directory</h1>
        <p>
          Explore gemstone profiles covering mineral family, hardness, colour
          range, and key characteristics.
        </p>
        <div className="directory-rule">
          <span /> {gemstones.length} profiles <span />
        </div>
      </header>
      <GemstoneDirectory gemstones={gemstones} />
    </div>
  );
}

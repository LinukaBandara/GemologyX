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
      <header className="border-b border-border pb-8">
        <div className="gx-eyebrow"><span /> Reference Library</div>
        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Gemstone Directory
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          Explore gemstone profiles covering mineral family, hardness, colour range, and key characteristics.
        </p>
        <p className="mt-4 text-xs font-medium tracking-wide text-muted">
          {gemstones.length} profiles
        </p>
      </header>
      <GemstoneDirectory gemstones={gemstones} />
    </div>
  );
}

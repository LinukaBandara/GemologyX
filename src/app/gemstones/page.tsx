import type { Metadata } from "next";
import { gemstones } from "@/data/gemstones";
import { GemstoneCard } from "@/components/gemstone-card";

export const metadata: Metadata = {
  title: "Gemstone Directory",
  description:
    "Browse a reference directory of gemstones with mineral family, hardness, colour range, and key characteristics for each.",
};

export default function GemstonesPage() {
  return (
    <div className="container-page py-14">
      <p className="text-xs font-medium tracking-[0.16em] text-teal uppercase">Reference</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        Gemstone Directory
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-muted md:text-base">
        Mineral family, hardness, colour range, and key characteristics for each gemstone in our
        reference library.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gemstones.map((gem) => (
          <GemstoneCard key={gem.slug} gem={gem} />
        ))}
      </div>
    </div>
  );
}

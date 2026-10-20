import type { Metadata } from "next";
import { gemstones } from "@/data/gemstones";
import { GemstoneDirectory } from "@/components/gemstone-directory";

export const metadata: Metadata = {
  title: "Gemstone Directory",
  description: "Explore gemstone profiles by name, colour, mineral family, hardness, and category. Learn about gemstone properties, treatments, and origins.",
};

export default function GemstonesPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <header className="directory-hero">
        <div className="luxury-eyebrow"><span /> REFERENCE LIBRARY</div>
        <h1>Gemstone Directory</h1>
        <p>Explore the details that make every gemstone unique. Search by colour, mineral family, hardness, or name.</p>
        <div className="directory-rule"><span /> {gemstones.length} profiles <span /></div>
      </header>
      <div className="mt-10">
        <GemstoneDirectory gemstones={gemstones} />
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { ToolShell } from "@/components/tool-shell";

export const metadata: Metadata = {
  title: "Mohs Hardness Reference",
  description: "The Mohs hardness scale from 1 to 10, with common mineral and gemstone examples at each level.",
};

const SCALE = [
  { n: 1, mineral: "Talc", examples: "—" },
  { n: 2, mineral: "Gypsum", examples: "Pearl (~2.5–4.5), amber" },
  { n: 3, mineral: "Calcite", examples: "—" },
  { n: 4, mineral: "Fluorite", examples: "—" },
  { n: 5, mineral: "Apatite", examples: "—" },
  { n: 6, mineral: "Orthoclase", examples: "Moonstone, opal (~5.5–6.5)" },
  { n: 7, mineral: "Quartz", examples: "Amethyst, citrine, tourmaline (~7–7.5)" },
  { n: 8, mineral: "Topaz", examples: "Spinel (~8), aquamarine/emerald (~7.5–8)" },
  { n: 9, mineral: "Corundum", examples: "Sapphire, ruby" },
  { n: 10, mineral: "Diamond", examples: "—" },
];

export default function MohsHardnessPage() {
  return (
    <ToolShell
      title="Mohs Hardness Reference"
      intro="A relative scale of scratch resistance from 1 (softest) to 10 (hardest), developed by Friedrich Mohs in 1812."
      note="Mohs hardness measures scratch resistance, not overall toughness or durability — some harder gemstones can still chip or cleave more easily than softer ones."
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs uppercase text-muted">
              <th className="py-2 pr-4">Level</th>
              <th className="py-2 pr-4">Reference mineral</th>
              <th className="py-2">Gemstone examples</th>
            </tr>
          </thead>
          <tbody>
            {SCALE.map((row) => (
              <tr key={row.n} className="border-b border-border/60">
                <td className="py-2 pr-4 font-medium">{row.n}</td>
                <td className="py-2 pr-4">{row.mineral}</td>
                <td className="py-2 text-muted">{row.examples}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ToolShell>
  );
}

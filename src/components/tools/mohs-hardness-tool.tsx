"use client";

import { useState } from "react";
import { Info, Layers3 } from "lucide-react";
import { ToolShell } from "@/components/tool-shell";

const SCALE = [
  { level: 1, mineral: "Talc", examples: "A reference mineral; rarely used as a faceted gemstone.", note: "Very soft. Easily scratched by many everyday materials." },
  { level: 2, mineral: "Gypsum", examples: "Gypsum varieties are mainly ornamental or collector materials.", note: "Soft and easily marked; avoid abrasive contact." },
  { level: 3, mineral: "Calcite", examples: "Calcite is sometimes cut as a collector or ornamental stone.", note: "Can be scratched by a copper coin; handle with care." },
  { level: 4, mineral: "Fluorite", examples: "Fluorite is popular with collectors and occasionally cut as a gem.", note: "Relatively soft for jewellery and can be scratched by harder dust or minerals." },
  { level: 5, mineral: "Apatite", examples: "Apatite is occasionally faceted, but needs protective wear.", note: "Moderate-low scratch resistance compared with common jewellery gems." },
  { level: 6, mineral: "Orthoclase feldspar", examples: "Moonstone and some other feldspars are around this range.", note: "Can be scratched by quartz, which is level 7." },
  { level: 7, mineral: "Quartz", examples: "Amethyst, citrine and many other quartz varieties.", note: "A common benchmark; quartz can scratch minerals below it." },
  { level: 8, mineral: "Topaz", examples: "Topaz; spinel is also approximately 8.", note: "Hard, but cleavage can make some stones vulnerable to impact." },
  { level: 9, mineral: "Corundum", examples: "Ruby and sapphire are varieties of corundum.", note: "Very high scratch resistance; still can chip or fracture." },
  { level: 10, mineral: "Diamond", examples: "Diamond.", note: "Hardest on the Mohs scale, but not immune to chipping or cleavage." },
];

export default function MohsHardnessTool() {
  const [selected, setSelected] = useState(9);
  const item = SCALE.find((entry) => entry.level === selected) ?? SCALE[8];

  return (
    <ToolShell
      title="Mohs Hardness Reference"
      intro="Explore the ten reference minerals of the Mohs scale and see where familiar gemstones sit in relation to them."
      note="Mohs hardness measures resistance to scratching. It does not measure toughness, brittleness, cleavage or resistance to breaking. A hard gemstone can still chip or fracture."
    >
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted">
          <Layers3 size={15} className="text-[var(--gold)]" />
          Select a hardness level
        </div>

        <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
          {SCALE.map((entry) => (
            <button
              key={entry.level}
              type="button"
              onClick={() => setSelected(entry.level)}
              aria-pressed={selected === entry.level}
              className="flex min-h-14 flex-col items-center justify-center gap-1 border border-border bg-background text-foreground transition-colors hover:border-[var(--gold)] aria-pressed:border-[var(--gold)] aria-pressed:bg-[var(--gold-soft)]"
            >
              <span className="font-serif text-xl">{entry.level}</span>
              <span className="text-[9px] uppercase tracking-[0.1em] text-muted">Mohs</span>
            </button>
          ))}
        </div>

        <div aria-live="polite" className="border border-[var(--gold)]/40 bg-[var(--gold-soft)] p-5 sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Mohs level {item.level}</p>
          <h3 className="mt-2 font-serif text-2xl font-medium text-foreground sm:text-3xl">{item.mineral}</h3>
          <p className="mt-3 text-sm leading-6 text-foreground">{item.examples}</p>
          <p className="mt-4 border-t border-[var(--gold)]/30 pt-4 text-xs leading-6 text-muted">{item.note}</p>
        </div>

        <div>
          <h3 className="font-serif text-lg font-medium text-foreground">The ten reference minerals</h3>
          <div className="mt-3 overflow-x-auto border border-border">
            <table className="w-full min-w-[440px] border-collapse text-left text-xs">
              <thead className="bg-background text-[10px] uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th className="px-3 py-3 font-semibold">Level</th>
                  <th className="px-3 py-3 font-semibold">Reference mineral</th>
                  <th className="px-3 py-3 font-semibold">Gemstone context</th>
                </tr>
              </thead>
              <tbody>
                {SCALE.map((entry) => (
                  <tr key={entry.level} className={`border-t border-border ${selected === entry.level ? "bg-[var(--gold-soft)]" : ""}`}>
                    <td className="px-3 py-3 font-medium">{entry.level}</td>
                    <td className="px-3 py-3">{entry.mineral}</td>
                    <td className="px-3 py-3 leading-5 text-muted">{entry.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex gap-3 border border-border p-4">
          <Info size={17} className="mt-0.5 shrink-0 text-[var(--gold)]" />
          <p className="text-xs leading-6 text-muted">
            The scale is ordinal, not linear: a level 10 mineral is not simply twice as hard as a level 5 mineral. Do not perform scratch tests on finished gemstones or jewellery; they can cause permanent damage. Use this chart as an educational reference, not an identification test.
          </p>
        </div>
      </div>
    </ToolShell>
  );
}

"use client";

import { useMemo, useState } from "react";
import { Search, Info } from "lucide-react";
import { ToolShell } from "@/components/tool-shell";

const VALUES = [
  { name: "Diamond", ri: "2.417", birefringence: "None", character: "Isotropic", note: "Above the range of a standard contact refractometer." },
  { name: "Ruby / sapphire (corundum)", ri: "1.762–1.770", birefringence: "0.008", character: "Uniaxial", note: "Ruby and sapphire are colour varieties of the same mineral species." },
  { name: "Chrysoberyl", ri: "1.746–1.755", birefringence: "0.008–0.010", character: "Biaxial", note: "Includes alexandrite and chrysoberyl cat’s-eye varieties." },
  { name: "Spinel", ri: "1.718–1.720", birefringence: "None", character: "Isotropic", note: "A useful comparison with corundum; confirm with multiple tests." },
  { name: "Garnet group", ri: "1.714–1.888", birefringence: "Usually none", character: "Usually isotropic", note: "The group spans several species; this broad range is not a single species value." },
  { name: "Tanzanite", ri: "1.691–1.700", birefringence: "0.009", character: "Biaxial", note: "A variety of zoisite with noticeable pleochroism." },
  { name: "Peridot", ri: "1.654–1.690", birefringence: "0.035–0.038", character: "Biaxial", note: "Its relatively high birefringence can produce visible doubling in some views." },
  { name: "Tourmaline", ri: "1.624–1.644", birefringence: "0.018–0.020", character: "Uniaxial", note: "Composition causes variation across the tourmaline group." },
  { name: "Topaz", ri: "1.619–1.627", birefringence: "0.008–0.010", character: "Biaxial", note: "Published values can differ slightly with source and composition." },
  { name: "Emerald / aquamarine (beryl)", ri: "1.577–1.583", birefringence: "0.005–0.009", character: "Uniaxial", note: "Emerald and aquamarine are varieties of beryl." },
  { name: "Quartz (amethyst / citrine)", ri: "1.544–1.553", birefringence: "0.009", character: "Uniaxial", note: "Amethyst and citrine are varieties of quartz." },
  { name: "Moonstone (orthoclase)", ri: "1.518–1.526", birefringence: "0.005–0.008", character: "Biaxial", note: "Feldspar optical effects require careful interpretation." },
  { name: "Opal", ri: "1.370–1.470", birefringence: "None", character: "Amorphous", note: "Hydrated silica; values vary with type and water content." },
  { name: "Zircon (high type)", ri: "1.925–1.984", birefringence: "Up to 0.059", character: "Uniaxial", note: "Above the range of a standard contact refractometer." },
];

export default function RefractiveIndexReference() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("Ruby / sapphire (corundum)");
  const filtered = useMemo(() => VALUES.filter((item) => `${item.name} ${item.ri} ${item.character}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const active = VALUES.find((item) => item.name === selected) ?? VALUES[1];

  return (
    <ToolShell
      title="Refractive Index Reference"
      intro="Compare typical refractive-index ranges and birefringence values for commonly encountered gemstones."
      note="These are reference ranges, not identification verdicts. Composition, variety, direction of measurement, instrument limits and published sources can cause differences. Always combine RI with other observations and tests."
    >
      <div className="space-y-6">
        <label className="block">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Find a gemstone or value</span>
          <span className="mt-2 flex min-h-12 items-center gap-3 border border-border bg-background px-3 focus-within:border-[var(--gold)]">
            <Search size={16} className="shrink-0 text-muted" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search sapphire, quartz, 1.76…" className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted" />
          </span>
        </label>

        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="max-h-[420px] overflow-y-auto border border-border">
            {filtered.map((item) => (
              <button key={item.name} type="button" onClick={() => setSelected(item.name)} aria-pressed={selected === item.name} className="flex min-h-14 w-full items-center justify-between gap-3 border-b border-border px-4 py-3 text-left last:border-b-0 hover:bg-[var(--surface)] aria-pressed:bg-[var(--gold-soft)]">
                <span className="text-xs font-medium text-foreground">{item.name}</span>
                <span className="shrink-0 font-serif text-sm text-muted">{item.ri}</span>
              </button>
            ))}
            {filtered.length === 0 && <p className="p-4 text-xs text-muted">No matching entries. Try a mineral or RI value.</p>}
          </div>

          <div aria-live="polite" className="border border-[var(--gold)]/40 bg-[var(--gold-soft)] p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Selected reference</p>
            <h3 className="mt-2 font-serif text-2xl font-medium text-foreground">{active.name}</h3>
            <p className="mt-4 font-serif text-4xl text-foreground">{active.ri}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted">Refractive index (typical)</p>
            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-[var(--gold)]/30 pt-4">
              <div><p className="text-[10px] uppercase tracking-[0.12em] text-muted">Birefringence</p><p className="mt-1 text-sm font-medium text-foreground">{active.birefringence}</p></div>
              <div><p className="text-[10px] uppercase tracking-[0.12em] text-muted">Optical character</p><p className="mt-1 text-sm font-medium text-foreground">{active.character}</p></div>
            </div>
            <p className="mt-4 text-xs leading-6 text-muted">{active.note}</p>
          </div>
        </div>

        <div className="border-t border-border pt-5">
          <h3 className="font-serif text-lg font-medium text-foreground">How to interpret RI</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="border border-border p-4"><p className="font-serif text-base text-foreground">Single reading</p><p className="mt-1 text-xs leading-5 text-muted">Common in isotropic materials. Some anisotropic stones may show one reading depending on orientation and instrument conditions.</p></div>
            <div className="border border-border p-4"><p className="font-serif text-base text-foreground">Two shadow edges</p><p className="mt-1 text-xs leading-5 text-muted">Anisotropic gems can show a range of readings. The difference between the highest and lowest principal values is birefringence.</p></div>
          </div>
        </div>

        <div className="flex gap-3 border border-border p-4">
          <Info size={17} className="mt-0.5 shrink-0 text-[var(--gold)]" />
          <p className="text-xs leading-6 text-muted">Many standard gem refractometers have a practical upper limit around 1.81. Diamond, high-type zircon and other high-RI materials may be over the limit; an over-limit reading does not identify a stone by itself. Refractometer contact liquids and exposed stone surfaces also require suitable handling.</p>
        </div>
        <p className="text-[10px] leading-5 text-muted">Reference basis: International Gem Society’s refractive-index and double-refraction reference; GIA gem facts as collated in published gem-reference tables. Values are rounded and intended for study, not certification.</p>
      </div>
    </ToolShell>
  );
}

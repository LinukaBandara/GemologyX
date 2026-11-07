"use client";

import { useMemo, useState } from "react";
import { Calculator, Info } from "lucide-react";
import { ToolShell } from "@/components/tool-shell";

function validNumber(value: string) {
  if (value.trim() === "") return null;
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : null;
}

export default function BirefringenceTool() {
  const [low, setLow] = useState("1.762");
  const [high, setHigh] = useState("1.770");
  const a = validNumber(low);
  const b = validNumber(high);
  const result = useMemo(() => a !== null && b !== null && b >= a ? b - a : null, [a, b]);
  const invalid = low.trim() !== "" && high.trim() !== "" && (a === null || b === null || (a !== null && b !== null && b < a));

  return (
    <ToolShell
      title="Birefringence Calculator"
      intro="Calculate the numerical difference between a gemstone’s highest and lowest refractive-index readings."
      note="This calculation only subtracts two readings. It does not determine optical character or identify a gemstone. Measurements must be obtained correctly with suitable gemological equipment."
    >
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted"><Calculator size={15} className="text-[var(--gold)]" /> RI difference</div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block border border-border bg-background p-4 focus-within:border-[var(--gold)]">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Lowest RI</span>
            <input aria-label="Lowest refractive index" type="number" step="0.001" min="0" inputMode="decimal" value={low} onChange={(e) => setLow(e.target.value)} className="mt-2 min-h-12 w-full bg-transparent font-serif text-3xl text-foreground outline-none" />
          </label>
          <label className="block border border-border bg-background p-4 focus-within:border-[var(--gold)]">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Highest RI</span>
            <input aria-label="Highest refractive index" type="number" step="0.001" min="0" inputMode="decimal" value={high} onChange={(e) => setHigh(e.target.value)} className="mt-2 min-h-12 w-full bg-transparent font-serif text-3xl text-foreground outline-none" />
          </label>
        </div>
        {result !== null ? (
          <div aria-live="polite" className="border border-[var(--gold)]/40 bg-[var(--gold-soft)] p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Calculated birefringence (Δn)</p>
            <p className="mt-2 font-serif text-4xl text-foreground">{result.toFixed(3)}</p>
            <p className="mt-2 text-xs leading-5 text-muted">{b.toFixed(3)} − {a.toFixed(3)} = {result.toFixed(3)}</p>
          </div>
        ) : (
          <p role="status" className="border border-border p-4 text-xs leading-6 text-muted">{invalid ? "Enter two positive readings, with the highest RI equal to or greater than the lowest." : "Enter both refractive-index readings to calculate their difference."}</p>
        )}
        <div className="border border-border p-4">
          <h3 className="font-serif text-lg text-foreground">Formula</h3>
          <p className="mt-2 font-serif text-xl text-foreground">Δn = n(high) − n(low)</p>
          <p className="mt-2 text-xs leading-5 text-muted">Example: corundum values 1.770 and 1.762 give a birefringence of 0.008.</p>
        </div>
        <div className="flex gap-3 border border-border p-4">
          <Info size={17} className="mt-0.5 shrink-0 text-[var(--gold)]" />
          <p className="text-xs leading-6 text-muted">A measured difference can vary with orientation, instrument resolution, surface quality and reading technique. Isotropic stones generally have no birefringence, while anisotropic stones have direction-dependent refractive indices. Do not infer a species from this number alone.</p>
        </div>
      </div>
    </ToolShell>
  );
}

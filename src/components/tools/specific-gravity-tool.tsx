"use client";

import { useMemo, useState } from "react";
import { Calculator, RotateCcw } from "lucide-react";
import { ToolShell } from "@/components/tool-shell";

function parsePositive(value: string) {
  if (value.trim() === "") return null;
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : null;
}

export default function SpecificGravityTool() {
  const [airMass, setAirMass] = useState("1.00");
  const [waterMass, setWaterMass] = useState("0.80");
  const [unit, setUnit] = useState("g");

  const air = parsePositive(airMass);
  const water = parsePositive(waterMass);
  const result = useMemo(() => {
    if (air === null || water === null || water >= air) return null;
    return air / (air - water);
  }, [air, water]);

  const hasInput = airMass.trim() !== "" && waterMass.trim() !== "";
  const invalid = hasInput && (air === null || water === null || water >= air);

  function reset() {
    setAirMass("1.00");
    setWaterMass("0.80");
    setUnit("g");
  }

  return (
    <ToolShell
      title="Specific Gravity Calculator"
      intro="Estimate a material’s relative density from its measured mass in air and apparent mass while suspended in water."
      note="This simplified educational calculation assumes a suitable hydrostatic setup and comparable mass units. It is not a gemstone identification result or a substitute for a properly controlled laboratory measurement."
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted">
            <Calculator size={15} className="text-[var(--gold)]" />
            Hydrostatic method
          </div>
          <button type="button" onClick={reset} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-3 text-xs font-medium text-muted hover:border-[var(--gold)] hover:text-foreground">
            <RotateCcw size={13} /> Reset
          </button>
        </div>

        <label className="block">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Measurement unit</span>
          <select value={unit} onChange={(event) => setUnit(event.target.value)} className="mt-2 min-h-12 w-full border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-[var(--gold)]">
            <option value="g">Grams (g)</option>
            <option value="ct">Carats (ct)</option>
          </select>
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block border border-border bg-background p-4 focus-within:border-[var(--gold)]">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Mass in air</span>
            <div className="mt-2 flex items-baseline gap-2">
              <input aria-label={`Mass in air in ${unit}`} type="number" min="0" step="any" inputMode="decimal" value={airMass} onChange={(event) => setAirMass(event.target.value)} className="min-w-0 w-full bg-transparent font-serif text-3xl text-foreground outline-none" />
              <span className="text-sm text-muted">{unit}</span>
            </div>
          </label>
          <label className="block border border-border bg-background p-4 focus-within:border-[var(--gold)]">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Apparent mass in water</span>
            <div className="mt-2 flex items-baseline gap-2">
              <input aria-label={`Apparent mass in water in ${unit}`} type="number" min="0" step="any" inputMode="decimal" value={waterMass} onChange={(event) => setWaterMass(event.target.value)} className="min-w-0 w-full bg-transparent font-serif text-3xl text-foreground outline-none" />
              <span className="text-sm text-muted">{unit}</span>
            </div>
          </label>
        </div>

        {result !== null ? (
          <div aria-live="polite" className="border border-[var(--gold)]/40 bg-[var(--gold-soft)] p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Calculated specific gravity</p>
            <p className="mt-2 font-serif text-4xl font-medium text-foreground">{result.toFixed(3)}</p>
            <p className="mt-2 text-xs leading-5 text-muted">Relative density compared with water under the assumptions of this simplified calculation. Specific gravity is dimensionless.</p>
          </div>
        ) : (
          <p role="status" className="border border-border bg-background p-4 text-xs leading-6 text-muted">
            {invalid ? "Check the measurements: both values must be positive, and the apparent mass in water must be lower than the mass in air." : "Enter both measurements to calculate the result."}
          </p>
        )}

        <div className="border-t border-border pt-5">
          <h3 className="font-serif text-lg font-medium text-foreground">Formula</h3>
          <p className="mt-2 border border-border bg-background p-4 font-serif text-lg text-foreground">SG = mass in air ÷ (mass in air − apparent mass in water)</p>
          <p className="mt-3 text-xs leading-6 text-muted">Example: 1.00 g in air and 0.80 g in water gives 1.00 ÷ (1.00 − 0.80) = 5.00.</p>
        </div>

        <div className="border border-border p-4">
          <h3 className="font-serif text-base font-medium text-foreground">Measurement considerations</h3>
          <ul className="mt-2 list-disc space-y-2 pl-4 text-xs leading-5 text-muted">
            <li>Use the same unit for both readings and a suitable calibrated balance.</li>
            <li>Ensure the stone is fully submerged without touching the vessel.</li>
            <li>Remove trapped air bubbles and account for the suspension wire or basket as required by the method.</li>
            <li>Porous, fractured, treated, mounted or water-sensitive materials may produce unreliable results or be unsuitable for this method.</li>
            <li>Water temperature and instrument procedure affect precision; a gem laboratory may apply corrections.</li>
          </ul>
        </div>
      </div>
    </ToolShell>
  );
}

"use client";

import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";

const CARAT_TO_GRAM = 0.2;

export default function CaratToGramPage() {
  const [carats, setCarats] = useState("1");
  const [grams, setGrams] = useState((1 * CARAT_TO_GRAM).toString());

  function onCaratsChange(value: string) {
    setCarats(value);
    const n = parseFloat(value);
    setGrams(Number.isFinite(n) ? (n * CARAT_TO_GRAM).toFixed(4).replace(/0+$/, "").replace(/\.$/, "") : "");
  }

  function onGramsChange(value: string) {
    setGrams(value);
    const n = parseFloat(value);
    setCarats(Number.isFinite(n) ? (n / CARAT_TO_GRAM).toFixed(4).replace(/0+$/, "").replace(/\.$/, "") : "");
  }

  return (
    <ToolShell
      title="Carat ↔ Gram Converter"
      intro="1 carat is defined as exactly 0.2 grams. Enter a value in either field."
      note="This is a unit conversion, not an estimate — carat is simply a fixed unit of mass used for gemstones and pearls."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">Carats (ct)</span>
          <input
            type="number"
            value={carats}
            onChange={(e) => onCaratsChange(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">Grams (g)</span>
          <input
            type="number"
            value={grams}
            onChange={(e) => onGramsChange(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </label>
      </div>

      <div className="mt-6 rounded-md bg-background p-4 text-sm">
        <p><strong>Formula:</strong> grams = carats × 0.2</p>
        <p className="mt-1"><strong>Example:</strong> A 2.5 ct sapphire weighs 0.5 g.</p>
      </div>
    </ToolShell>
  );
}

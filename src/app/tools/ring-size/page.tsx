"use client";

import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";

// Standard published ring-size correspondence (US, UK, EU, circumference in mm)
const SIZES = [
  { us: "4", uk: "H", eu: "46.8", mm: "14.9" },
  { us: "5", uk: "J½", eu: "49.3", mm: "15.7" },
  { us: "6", uk: "L½", eu: "51.9", mm: "16.5" },
  { us: "7", uk: "N½", eu: "54.4", mm: "17.3" },
  { us: "8", uk: "P½", eu: "57.0", mm: "18.1" },
  { us: "9", uk: "R½", eu: "59.5", mm: "19.0" },
  { us: "10", uk: "T½", eu: "62.1", mm: "19.8" },
  { us: "11", uk: "V½", eu: "64.6", mm: "20.6" },
];

export default function RingSizePage() {
  const [selected, setSelected] = useState("7");
  const row = SIZES.find((s) => s.us === selected) ?? SIZES[2];

  return (
    <ToolShell
      title="Ring Size Converter"
      intro="Convert between US, UK, and EU ring sizing systems."
      note="Ring sizing standards can vary slightly between manufacturers and countries. When precision matters, measure with a physical ring sizer or have a jeweller measure your finger."
    >
      <label className="block">
        <span className="text-xs font-medium uppercase tracking-wide text-muted">US size</span>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        >
          {SIZES.map((s) => (
            <option key={s.us} value={s.us}>{s.us}</option>
          ))}
        </select>
      </label>

      <div className="mt-6 grid grid-cols-3 gap-4 rounded-md bg-background p-4 text-sm">
        <div><dt className="text-xs uppercase text-muted">UK</dt><dd className="font-medium">{row.uk}</dd></div>
        <div><dt className="text-xs uppercase text-muted">EU</dt><dd className="font-medium">{row.eu}</dd></div>
        <div><dt className="text-xs uppercase text-muted">Circumference</dt><dd className="font-medium">{row.mm} mm</dd></div>
      </div>
    </ToolShell>
  );
}

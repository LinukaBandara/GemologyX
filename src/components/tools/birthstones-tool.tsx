"use client";

import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";

const MONTHS = [
  { month: "January", stones: "Garnet" },
  { month: "February", stones: "Amethyst" },
  { month: "March", stones: "Aquamarine, Bloodstone" },
  { month: "April", stones: "Diamond" },
  { month: "May", stones: "Emerald" },
  { month: "June", stones: "Pearl, Alexandrite, Moonstone" },
  { month: "July", stones: "Ruby" },
  { month: "August", stones: "Peridot, Spinel, Sardonyx" },
  { month: "September", stones: "Sapphire" },
  { month: "October", stones: "Opal, Tourmaline" },
  { month: "November", stones: "Topaz, Citrine" },
  { month: "December", stones: "Turquoise, Tanzanite, Zircon" },
];

export default function BirthstonesPage() {
  const [monthIndex, setMonthIndex] = useState(8); // September default

  return (
    <ToolShell
      title="Birthstone Finder"
      intro="Select a month to see its traditional birthstones."
      note="Birthstone lists vary by cultural tradition and by the jewellery trade association that published them — the list shown here reflects commonly cited modern (US trade association) tradition, not a single universal standard."
    >
      <label className="block">
        <span className="text-xs font-medium uppercase tracking-wide text-muted">Month</span>
        <select
          value={monthIndex}
          onChange={(e) => setMonthIndex(Number(e.target.value))}
          className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
        >
          {MONTHS.map((m, i) => (
            <option key={m.month} value={i}>{m.month}</option>
          ))}
        </select>
      </label>

      <div className="mt-6 rounded-md bg-background p-4 text-sm">
        <p className="text-xs uppercase text-muted">{MONTHS[monthIndex].month}</p>
        <p className="mt-1 text-lg font-medium">{MONTHS[monthIndex].stones}</p>
      </div>
    </ToolShell>
  );
}

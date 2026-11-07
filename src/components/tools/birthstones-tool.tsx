"use client";

import { useState } from "react";
import { CalendarDays, Info } from "lucide-react";
import { ToolShell } from "@/components/tool-shell";

const MONTHS = [
  { month: "January", stones: ["Garnet"], note: "Garnet is the widely recognised modern birthstone for January." },
  { month: "February", stones: ["Amethyst"], note: "Amethyst is the widely recognised modern birthstone for February." },
  { month: "March", stones: ["Aquamarine", "Bloodstone"], note: "Aquamarine and bloodstone are both commonly listed for March." },
  { month: "April", stones: ["Diamond"], note: "Diamond is the widely recognised modern birthstone for April." },
  { month: "May", stones: ["Emerald"], note: "Emerald is the widely recognised modern birthstone for May." },
  { month: "June", stones: ["Pearl", "Alexandrite", "Moonstone"], note: "June has several recognised options, including pearl, alexandrite and moonstone." },
  { month: "July", stones: ["Ruby"], note: "Ruby is the widely recognised modern birthstone for July." },
  { month: "August", stones: ["Peridot", "Spinel", "Sardonyx"], note: "August is associated with peridot, spinel and the traditional stone sardonyx." },
  { month: "September", stones: ["Sapphire"], note: "Sapphire is the widely recognised modern birthstone for September." },
  { month: "October", stones: ["Opal", "Tourmaline"], note: "Opal and tourmaline are both commonly listed for October." },
  { month: "November", stones: ["Topaz", "Citrine"], note: "Topaz and citrine are commonly listed for November." },
  { month: "December", stones: ["Turquoise", "Tanzanite", "Zircon"], note: "December has several recognised options: turquoise, tanzanite and zircon." },
];

export default function BirthstonesTool() {
  const [monthIndex, setMonthIndex] = useState(8);
  const selected = MONTHS[monthIndex];

  return (
    <ToolShell
      title="Birthstone Finder"
      intro="Choose a month to explore its commonly recognised modern birthstones and traditional alternatives."
      note="Birthstone lists have evolved across cultures and jewellery traditions. This reference brings together commonly cited modern choices and well-known traditional alternatives; it is not a universal or historical authority for every region."
    >
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted">
          <CalendarDays size={15} className="text-[var(--gold)]" />
          Choose a birth month
        </div>

        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {MONTHS.map((month, index) => (
            <button
              key={month.month}
              type="button"
              onClick={() => setMonthIndex(index)}
              aria-pressed={monthIndex === index}
              className="min-h-12 border border-border bg-background px-2 text-xs font-medium text-foreground transition-colors hover:border-[var(--gold)] aria-pressed:border-[var(--gold)] aria-pressed:bg-[var(--gold-soft)]"
            >
              {month.month}
            </button>
          ))}
        </div>

        <div aria-live="polite" className="border border-[var(--gold)]/40 bg-[var(--gold-soft)] p-5 sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Your selected month</p>
          <h3 className="mt-2 font-serif text-3xl font-medium text-foreground">{selected.month}</h3>
          <p className="mt-2 text-xs leading-6 text-muted">{selected.note}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {selected.stones.map((stone) => (
              <span key={stone} className="inline-flex min-h-10 items-center border border-[var(--gold)]/40 bg-[var(--surface)] px-4 text-sm font-medium text-foreground">
                {stone}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg font-medium text-foreground">Birthstones throughout the year</h3>
          <div className="mt-3 divide-y divide-border border-y border-border">
            {MONTHS.map((month, index) => (
              <button
                key={month.month}
                type="button"
                onClick={() => setMonthIndex(index)}
                className="flex min-h-12 w-full items-center justify-between gap-4 py-3 text-left hover:bg-[var(--surface)]"
              >
                <span className="w-24 shrink-0 text-xs font-medium text-foreground">{month.month}</span>
                <span className="flex-1 text-right text-xs leading-5 text-muted">{month.stones.join(" · ")}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3 border border-border p-4">
          <Info size={17} className="mt-0.5 shrink-0 text-[var(--gold)]" />
          <p className="text-xs leading-6 text-muted">
            A birthstone is a cultural and jewellery tradition, not a gemological classification. A stone’s suitability for daily wear depends on more than its birth-month association; hardness, toughness, cleavage and setting all matter.
          </p>
        </div>
      </div>
    </ToolShell>
  );
}

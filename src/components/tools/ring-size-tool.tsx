"use client";

import { useMemo, useState } from "react";
import { Ruler, RotateCcw } from "lucide-react";
import { ToolShell } from "@/components/tool-shell";

const SIZES = [
  { us: "4", uk: "H", eu: "46.8", circumference: 46.8, diameter: 14.9 },
  { us: "5", uk: "J½", eu: "49.3", circumference: 49.3, diameter: 15.7 },
  { us: "6", uk: "L½", eu: "51.9", circumference: 51.9, diameter: 16.5 },
  { us: "7", uk: "N½", eu: "54.4", circumference: 54.4, diameter: 17.3 },
  { us: "8", uk: "P½", eu: "57.0", circumference: 57.0, diameter: 18.1 },
  { us: "9", uk: "R½", eu: "59.5", circumference: 59.5, diameter: 19.0 },
  { us: "10", uk: "T½", eu: "62.1", circumference: 62.1, diameter: 19.8 },
  { us: "11", uk: "V½", eu: "64.6", circumference: 64.6, diameter: 20.6 },
];

type System = "us" | "uk" | "eu";

export default function RingSizeTool() {
  const [system, setSystem] = useState<System>("us");
  const [value, setValue] = useState("7");

  const row = useMemo(
    () => SIZES.find((size) => size[system] === value) ?? null,
    [system, value],
  );

  function changeSystem(next: System) {
    const currentRow = row ?? SIZES[2];
    setSystem(next);
    setValue(currentRow[next]);
  }

  function reset() {
    setSystem("us");
    setValue("7");
  }

  return (
    <ToolShell
      title="Ring Size Converter"
      intro="Compare common US, UK and European ring-size references, with the approximate inner diameter and finger circumference in millimetres."
      note="This is a reference chart, not a precision fitting service. Ring profiles, band width, temperature, time of day and individual sizing standards can affect fit. Confirm the size with a jeweller before ordering."
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted">
            <Ruler size={15} className="text-[var(--gold)]" />
            Size reference
          </div>
          <button type="button" onClick={reset} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-3 text-xs font-medium text-muted hover:border-[var(--gold)] hover:text-foreground">
            <RotateCcw size={13} /> Reset
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Sizing system</span>
            <select
              value={system}
              onChange={(event) => changeSystem(event.target.value as System)}
              className="mt-2 min-h-12 w-full border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-[var(--gold)]"
            >
              <option value="us">United States (US)</option>
              <option value="uk">United Kingdom (UK)</option>
              <option value="eu">European (EU)</option>
            </select>
          </label>
          <label className="block">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Ring size</span>
            <select
              value={value}
              onChange={(event) => setValue(event.target.value)}
              className="mt-2 min-h-12 w-full border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-[var(--gold)]"
            >
              {SIZES.map((size) => (
                <option key={size.us} value={size[system]}>{size[system]}</option>
              ))}
            </select>
          </label>
        </div>

        {row && (
          <div aria-live="polite" className="border border-[var(--gold)]/40 bg-[var(--gold-soft)] p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Approximate equivalent sizes</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-muted">US</p>
                <p className="mt-1 font-serif text-2xl text-foreground">{row.us}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-muted">UK</p>
                <p className="mt-1 font-serif text-2xl text-foreground">{row.uk}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-muted">EU</p>
                <p className="mt-1 font-serif text-2xl text-foreground">{row.eu}</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[var(--gold)]/30 pt-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-muted">Inner diameter</p>
                <p className="mt-1 text-lg font-medium text-foreground">{row.diameter.toFixed(1)} mm</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-muted">Inner circumference</p>
                <p className="mt-1 text-lg font-medium text-foreground">{row.circumference.toFixed(1)} mm</p>
              </div>
            </div>
          </div>
        )}

        <div>
          <h3 className="font-serif text-lg font-medium text-foreground">Available reference sizes</h3>
          <div className="mt-3 overflow-x-auto border border-border">
            <table className="w-full min-w-[420px] border-collapse text-left text-xs">
              <thead className="bg-background text-[10px] uppercase tracking-[0.12em] text-muted">
                <tr>
                  <th className="px-3 py-3 font-semibold">US</th>
                  <th className="px-3 py-3 font-semibold">UK</th>
                  <th className="px-3 py-3 font-semibold">EU</th>
                  <th className="px-3 py-3 font-semibold">Diameter</th>
                  <th className="px-3 py-3 font-semibold">Circumference</th>
                </tr>
              </thead>
              <tbody>
                {SIZES.map((size) => (
                  <tr key={size.us} className="border-t border-border">
                    <td className="px-3 py-3">{size.us}</td>
                    <td className="px-3 py-3">{size.uk}</td>
                    <td className="px-3 py-3">{size.eu}</td>
                    <td className="px-3 py-3">{size.diameter.toFixed(1)} mm</td>
                    <td className="px-3 py-3">{size.circumference.toFixed(1)} mm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-6 text-muted">The EU values shown are approximate inner circumferences in millimetres. Published conversion charts can differ by rounding and standard.</p>
        </div>
      </div>
    </ToolShell>
  );
}

"use client";

import { useMemo, useState } from "react";
import { ArrowLeftRight, RotateCcw, Scale } from "lucide-react";
import { ToolShell } from "@/components/tool-shell";

const CARAT_IN_GRAMS = 0.2;
const QUICK_VALUES = [0.25, 0.5, 1, 1.5, 2, 5, 10];

function formatValue(value: number, maximumFractionDigits = 4) {
  return new Intl.NumberFormat("en", {
    maximumFractionDigits,
    useGrouping: true,
  }).format(value);
}

function parseNonNegative(value: string) {
  if (value.trim() === "") return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
}

export default function CaratToGramTool() {
  const [carats, setCarats] = useState("1");
  const [grams, setGrams] = useState("0.2");
  const [activeField, setActiveField] = useState<"carats" | "grams">("carats");

  const caratValue = parseNonNegative(carats);
  const gramValue = parseNonNegative(grams);
  const result = useMemo(() => {
    if (activeField === "carats" && caratValue !== null) {
      return { source: caratValue, converted: caratValue * CARAT_IN_GRAMS, unit: "g" };
    }
    if (activeField === "grams" && gramValue !== null) {
      return { source: gramValue, converted: gramValue / CARAT_IN_GRAMS, unit: "ct" };
    }
    return null;
  }, [activeField, caratValue, gramValue]);

  function updateCarats(value: string) {
    setActiveField("carats");
    setCarats(value);
    const parsed = parseNonNegative(value);
    setGrams(parsed === null ? "" : String(parsed * CARAT_IN_GRAMS));
  }

  function updateGrams(value: string) {
    setActiveField("grams");
    setGrams(value);
    const parsed = parseNonNegative(value);
    setCarats(parsed === null ? "" : String(parsed / CARAT_IN_GRAMS));
  }

  function reset() {
    setCarats("1");
    setGrams("0.2");
    setActiveField("carats");
  }

  return (
    <ToolShell
      title="Carat ↔ Gram Converter"
      intro="Convert gemstone mass in either direction using the internationally defined metric carat."
      note="This is an exact unit conversion. It does not estimate a gemstone’s value, dimensions or identity."
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted">
            <Scale size={15} className="text-[var(--gold)]" />
            Mass conversion
          </div>
          <button type="button" onClick={reset} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-3 text-xs font-medium text-muted transition-colors hover:border-[var(--gold)] hover:text-foreground">
            <RotateCcw size={13} /> Reset
          </button>
        </div>

        <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <label className="block min-w-0 border border-border bg-background p-4 focus-within:border-[var(--gold)] sm:p-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Carat weight</span>
            <div className="mt-2 flex items-baseline gap-2">
              <input
                aria-label="Weight in carats"
                type="number"
                min="0"
                step="any"
                inputMode="decimal"
                value={carats}
                onChange={(event) => updateCarats(event.target.value)}
                className="min-w-0 w-full bg-transparent font-serif text-3xl text-foreground outline-none sm:text-4xl"
                placeholder="0"
              />
              <span className="font-serif text-lg text-muted">ct</span>
            </div>
            <p className="mt-2 text-[11px] text-muted">One carat = 100 points</p>
          </label>

          <div className="mx-auto grid h-9 w-9 place-items-center rounded-full border border-border text-[var(--gold)] sm:h-10 sm:w-10">
            <ArrowLeftRight size={17} />
          </div>

          <label className="block min-w-0 border border-border bg-background p-4 focus-within:border-[var(--gold)] sm:p-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">Metric mass</span>
            <div className="mt-2 flex items-baseline gap-2">
              <input
                aria-label="Weight in grams"
                type="number"
                min="0"
                step="any"
                inputMode="decimal"
                value={grams}
                onChange={(event) => updateGrams(event.target.value)}
                className="min-w-0 w-full bg-transparent font-serif text-3xl text-foreground outline-none sm:text-4xl"
                placeholder="0"
              />
              <span className="font-serif text-lg text-muted">g</span>
            </div>
            <p className="mt-2 text-[11px] text-muted">1 gram = 5 carats</p>
          </label>
        </div>

        {result ? (
          <div aria-live="polite" className="border border-[var(--gold)]/40 bg-[var(--gold-soft)] p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Converted result</p>
            <p className="mt-2 font-serif text-3xl font-medium text-foreground sm:text-4xl">
              {formatValue(result.converted)} <span className="text-xl text-muted">{result.unit}</span>
            </p>
            <p className="mt-2 text-xs leading-5 text-muted">
              {formatValue(result.source)} {activeField === "carats" ? "ct" : "g"} is equal to {formatValue(result.converted)} {result.unit}.
            </p>
          </div>
        ) : (
          <p role="status" className="border border-border bg-background p-4 text-xs leading-5 text-muted">
            Enter a valid non-negative number to see the conversion. Use a decimal point for fractional values.
          </p>
        )}

        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-serif text-lg font-medium text-foreground">Quick carat references</h3>
            <span className="text-[10px] uppercase tracking-[0.14em] text-muted">Tap to calculate</span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7">
            {QUICK_VALUES.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => updateCarats(String(value))}
                aria-pressed={carats === String(value) && activeField === "carats"}
                className="min-h-11 border border-border bg-background px-2 text-xs font-medium text-foreground transition-colors hover:border-[var(--gold)] aria-pressed:border-[var(--gold)] aria-pressed:bg-[var(--gold-soft)]"
              >
                {value} ct
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-5">
          <h3 className="font-serif text-lg font-medium text-foreground">How the conversion works</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="border border-border p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Carats to grams</p>
              <p className="mt-2 font-serif text-xl text-foreground">g = ct × 0.2</p>
              <p className="mt-1 text-xs leading-5 text-muted">Multiply the carat value by 0.2.</p>
            </div>
            <div className="border border-border p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Grams to carats</p>
              <p className="mt-2 font-serif text-xl text-foreground">ct = g × 5</p>
              <p className="mt-1 text-xs leading-5 text-muted">Multiply the gram value by 5.</p>
            </div>
          </div>
          <p className="mt-4 text-xs leading-6 text-muted">
            The metric carat is exactly 200 milligrams (0.2 grams). The displayed result is rounded for readability; the conversion itself uses the exact factor.
          </p>
        </div>
      </div>
    </ToolShell>
  );
}

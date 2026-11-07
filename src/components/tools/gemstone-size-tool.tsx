"use client";

import { useMemo, useState } from "react";
import { ToolShell } from "@/components/tool-shell";
import { ArrowDownRight, Ruler, Sparkles } from "lucide-react";

// Shape factors are approximate educational constants, not a calibrated weighing model.
const SHAPES: Record<string, { label: string; factor: number; note: string }> = {
  round: { label: "Round brilliant", factor: 0.0061, note: "A standard round outline with a typical brilliant-style profile." },
  oval: { label: "Oval", factor: 0.0062, note: "An elongated outline; actual pavilion depth and outline affect the result." },
  cushion: { label: "Cushion", factor: 0.0068, note: "A rounded-corner rectangular or square outline." },
  emerald: { label: "Emerald / step cut", factor: 0.008, note: "A rectangular step-cut outline; depth and corner shape vary." },
  pear: { label: "Pear", factor: 0.0062, note: "A tapered outline; the estimate depends on the exact outline and cut." },
};

function positiveNumber(value: string) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : 0;
}

export default function GemstoneSizePage() {
  const [shape, setShape] = useState("round");
  const [length, setLength] = useState("6");
  const [width, setWidth] = useState("6");
  const [depth, setDepth] = useState("4");

  const dimensions = useMemo(() => ({
    length: positiveNumber(length),
    width: positiveNumber(width),
    depth: positiveNumber(depth),
  }), [length, width, depth]);

  const shapeInfo = SHAPES[shape] ?? SHAPES.round;
  const valid = dimensions.length > 0 && dimensions.width > 0 && dimensions.depth > 0;
  const estimate = valid
    ? dimensions.length * dimensions.width * dimensions.depth * shapeInfo.factor
    : null;

  const inputClass = "mt-2 min-h-12 w-full rounded-none border border-border bg-[var(--surface)] px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/10";
  const labelClass = "block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted";

  return (
    <ToolShell
      title="Gemstone Size Calculator"
      intro="Enter a loose gemstone’s length, width and depth to see an educational estimate of its approximate carat weight."
      note="This is a rough dimensional estimate, not a weighing result or valuation. Shape factors are approximations and do not account for the exact cut profile, girdle, culet, inclusions or the specific gemstone’s density. Use a calibrated carat balance for the actual weight."
    >
      <div className="flex items-center gap-3 border-b border-border pb-5">
        <span className="grid h-11 w-11 place-items-center rounded-full border border-border text-accent"><Ruler size={19} strokeWidth={1.5} /></span>
        <div>
          <p className="font-serif text-lg font-medium text-foreground">Stone dimensions</p>
          <p className="mt-0.5 text-xs text-muted">Measure in millimetres (mm)</p>
        </div>
      </div>

      <div className="mt-6">
        <label className={labelClass} htmlFor="gem-shape">Cut shape</label>
        <select id="gem-shape" value={shape} onChange={(event) => setShape(event.target.value)} className={inputClass}>
          {Object.entries(SHAPES).map(([value, item]) => (
            <option key={value} value={value}>{item.label}</option>
          ))}
        </select>
        <p className="mt-2 text-xs leading-5 text-muted">{shapeInfo.note}</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <label className={labelClass} htmlFor="gem-length">
          Length · mm
          <input id="gem-length" type="number" min="0" max="100" step="0.01" inputMode="decimal" value={length} onChange={(event) => setLength(event.target.value)} placeholder="e.g. 6.00" className={inputClass} />
        </label>
        <label className={labelClass} htmlFor="gem-width">
          Width · mm
          <input id="gem-width" type="number" min="0" max="100" step="0.01" inputMode="decimal" value={width} onChange={(event) => setWidth(event.target.value)} placeholder="e.g. 6.00" className={inputClass} />
        </label>
        <label className={labelClass} htmlFor="gem-depth">
          Depth · mm
          <input id="gem-depth" type="number" min="0" max="100" step="0.01" inputMode="decimal" value={depth} onChange={(event) => setDepth(event.target.value)} placeholder="e.g. 4.00" className={inputClass} />
        </label>
      </div>

      <section aria-live="polite" className="mt-8 border border-border bg-[var(--gold-soft)]/35 p-5 sm:p-6">
        <div className="flex items-center gap-2 text-[var(--gold)]">
          <Sparkles size={16} />
          <p className="text-[10px] font-semibold uppercase tracking-[0.17em]">Estimated weight</p>
        </div>
        {estimate !== null ? (
          <div className="mt-3 flex flex-wrap items-end gap-x-3 gap-y-1">
            <p className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">{estimate.toFixed(2)}</p>
            <p className="pb-1 text-sm font-medium text-muted">carats (ct)</p>
          </div>
        ) : (
          <p className="mt-3 font-serif text-2xl text-muted">Enter all three dimensions</p>
        )}
        <p className="mt-3 text-xs leading-5 text-muted">
          {valid
            ? `Based on ${dimensions.length.toFixed(2)} × ${dimensions.width.toFixed(2)} × ${dimensions.depth.toFixed(2)} mm and the ${shapeInfo.label.toLowerCase()} approximation factor.`
            : "All dimensions must be greater than zero."}
        </p>
      </section>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="border border-border p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">Calculation</p>
          <p className="mt-2 font-serif text-lg text-foreground">L × W × D × factor</p>
          <p className="mt-1 text-xs leading-5 text-muted">A simplified shape-based estimate using millimetre dimensions.</p>
        </div>
        <div className="border border-border p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">Next step</p>
          <p className="mt-2 flex items-center gap-2 font-serif text-lg text-foreground">Confirm on a carat balance <ArrowDownRight size={15} /></p>
          <p className="mt-1 text-xs leading-5 text-muted">Actual weight must be measured with a suitable calibrated instrument.</p>
        </div>
      </div>
    </ToolShell>
  );
}

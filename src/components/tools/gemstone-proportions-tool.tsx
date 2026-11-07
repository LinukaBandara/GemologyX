"use client";

import { useMemo, useState } from "react";
import { Ruler, Info } from "lucide-react";
import { ToolShell } from "@/components/tool-shell";

function parse(value: string) {
  if (value.trim() === "") return null;
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : null;
}

export default function CutProportionTool() {
  const [length, setLength] = useState("8.0");
  const [width, setWidth] = useState("6.0");
  const [depth, setDepth] = useState("3.8");
  const l = parse(length), w = parse(width), d = parse(depth);
  const result = useMemo(() => l !== null && w !== null && d !== null ? { ratio: l / w, depthPercent: d / w } : null, [l, w, d]);

  return (
    <ToolShell
      title="Gemstone Proportion Calculator"
      intro="Calculate a gemstone’s length-to-width ratio and depth percentage from measured dimensions."
      note="These are dimensional descriptors only. They do not grade cut quality, predict brilliance or establish value. Proportion assessment depends on shape, facet design, girdle, culet and viewing conditions."
    >
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted"><Ruler size={15} className="text-[var(--gold)]" /> Enter dimensions in millimetres</div>
        <div className="grid gap-3 sm:grid-cols-3">
          {([{label:"Length",value:length,set:setLength},{label:"Width",value:width,set:setWidth},{label:"Depth",value:depth,set:setDepth}] as const).map((field) => (
            <label key={field.label} className="block border border-border bg-background p-4 focus-within:border-[var(--gold)]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">{field.label} · mm</span>
              <input aria-label={`${field.label} in millimetres`} type="number" min="0" step="0.01" inputMode="decimal" value={field.value} onChange={(e) => field.set(e.target.value)} className="mt-2 min-h-12 w-full bg-transparent font-serif text-3xl text-foreground outline-none" />
            </label>
          ))}
        </div>
        {result ? (
          <div aria-live="polite" className="grid gap-3 sm:grid-cols-2">
            <div className="border border-[var(--gold)]/40 bg-[var(--gold-soft)] p-5"><p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Length-to-width ratio</p><p className="mt-2 font-serif text-4xl text-foreground">{result.ratio.toFixed(2)} : 1</p><p className="mt-2 text-xs text-muted">Length divided by width.</p></div>
            <div className="border border-[var(--gold)]/40 bg-[var(--gold-soft)] p-5"><p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Depth percentage</p><p className="mt-2 font-serif text-4xl text-foreground">{(result.depthPercent * 100).toFixed(1)}%</p><p className="mt-2 text-xs text-muted">Depth divided by width, expressed as a percentage.</p></div>
          </div>
        ) : <p role="status" className="border border-border p-4 text-xs text-muted">Enter positive length, width and depth values.</p>}
        <div className="border border-border p-4">
          <h3 className="font-serif text-lg text-foreground">Calculation method</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div><p className="font-serif text-base text-foreground">L ÷ W</p><p className="text-xs leading-5 text-muted">Length-to-width ratio describes outline elongation.</p></div>
            <div><p className="font-serif text-base text-foreground">(D ÷ W) × 100</p><p className="text-xs leading-5 text-muted">Depth percentage uses width as the reference dimension in this general-purpose tool.</p></div>
          </div>
        </div>
        <div className="flex gap-3 border border-border p-4"><Info size={17} className="mt-0.5 shrink-0 text-[var(--gold)]" /><p className="text-xs leading-6 text-muted">For round brilliant diamonds, industry depth percentage is generally calculated against average girdle diameter. For fancy shapes, conventions vary. This calculator uses width as a simple consistent reference and should not be treated as a formal cut-grading metric.</p></div>
      </div>
    </ToolShell>
  );
}

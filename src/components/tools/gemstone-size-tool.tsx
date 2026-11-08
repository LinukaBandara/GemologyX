"use client";

import { useState } from "react";
import { ToolShell } from "@/components/tool-shell";

// Approximate, widely-published density-based estimation factors (mm^3 to carats)
// for common shapes, used only to produce a rough estimate.
const SHAPE_FACTORS: Record<string, number> = {
  round: 0.0061,
  oval: 0.0062,
  cushion: 0.0068,
  emerald: 0.0080,
  pear: 0.0062,
};

export default function GemstoneSizePage() {
  const [shape, setShape] = useState("round");
  const [length, setLength] = useState("6");
  const [width, setWidth] = useState("6");
  const [depth, setDepth] = useState("4");

  const L = parseFloat(length) || 0;
  const W = parseFloat(width) || 0;
  const D = parseFloat(depth) || 0;
  const factor = SHAPE_FACTORS[shape] ?? 0.0061;
  const estimate = L && W && D ? (L * W * D * factor).toFixed(2) : "";

  return (
    <ToolShell
      title="Gemstone Size Calculator"
      intro="Estimate an approximate carat weight from a stone's dimensions and shape."
      note="This is an estimate for corundum-like density material (roughly quartz–corundum range). Actual weight depends on the specific gemstone's density and exact cutting proportions — always confirm with a scale where precision matters."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">Shape</span>
          <select
            value={shape}
            onChange={(e) => setShape(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
          >
            <option value="round">Round</option>
            <option value="oval">Oval</option>
            <option value="cushion">Cushion</option>
            <option value="emerald">Emerald-cut</option>
            <option value="pear">Pear</option>
          </select>
        </label>
        <div />
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">Length (mm)</span>
          <input type="number" value={length} onChange={(e) => setLength(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent" />
        </label>
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">Width (mm)</span>
          <input type="number" value={width} onChange={(e) => setWidth(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent" />
        </label>
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">Depth (mm)</span>
          <input type="number" value={depth} onChange={(e) => setDepth(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent" />
        </label>
      </div>

      <div className="mt-6 rounded-md bg-background p-4 text-sm">
        <p><strong>Estimated weight:</strong> {estimate ? `${estimate} ct` : "—"}</p>
        <p className="mt-1 text-muted">Method: length × width × depth × shape-specific factor. Not a substitute for scale measurement.</p>
      </div>
    </ToolShell>
  );
}

"use client";

import { useState } from "react";

const patterns = [
  { id: "broad", label: "Broad absorption band", detail: "A wider dark region represents a range of visible wavelengths absorbed more strongly. Its appearance depends on the material and the observation conditions." },
  { id: "lines", label: "Narrow absorption lines", detail: "Narrow dark marks represent selective absorption in smaller wavelength regions. Real features vary in strength and position; a visual pattern alone is not an identification." },
  { id: "clear", label: "No clear feature in this view", detail: "A feature may be too weak, outside visible wavelengths, obscured, or difficult to see with this setup. A blank-looking view does not prove that absorption is absent." },
] as const;

type PatternId = (typeof patterns)[number]["id"];

export function SpectroscopeExplorer() {
  const [pattern, setPattern] = useState<PatternId>("broad");
  const selected = patterns.find((item) => item.id === pattern)!;
  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-[#102b38] text-white shadow-[0_24px_70px_rgba(14,42,56,0.16)]" aria-labelledby="spectroscope-explorer-title">
      <div className="grid min-w-0 md:grid-cols-[.9fr_1.1fr]">
        <div className="min-w-0 p-5 md:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">Visible spectrum practice model</p>
          <h2 id="spectroscope-explorer-title" className="mt-2 font-serif text-2xl font-semibold">Explore an absorption pattern</h2>
          <p className="mt-3 text-sm leading-6 text-white/75">Choose a conceptual pattern. The dark marks show parts of visible light absorbed in this illustration.</p>
          <div className="mt-5 grid gap-2" role="group" aria-label="Illustrative absorption patterns">
            {patterns.map((item) => <button key={item.id} type="button" aria-pressed={pattern === item.id} onClick={() => setPattern(item.id)} className={`min-h-11 rounded-xl border px-3 py-2 text-left text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200 ${pattern === item.id ? "border-teal-200 bg-teal-200 text-[#102b38]" : "border-white/20 bg-white/5 text-white hover:bg-white/10"}`}>{item.label}</button>)}
          </div>
          <p className="mt-5 min-h-[7rem] rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/80" aria-live="polite">{selected.detail}</p>
        </div>
        <div className="flex min-h-[300px] min-w-0 flex-col justify-center bg-[#173b49] p-4 sm:p-5 md:p-8">
          <svg viewBox="0 0 640 220" role="img" aria-labelledby="spectrum-title spectrum-desc" className="h-auto w-full max-w-full">
            <title id="spectrum-title">Conceptual visible spectrum with absorption features</title>
            <desc id="spectrum-desc">A rainbow band runs from violet through red. {pattern === "broad" ? "A wide dark band illustrates the selected absorption pattern." : pattern === "lines" ? "Several narrow dark lines illustrate the selected absorption pattern." : "No dark feature illustrates the selected absorption pattern."} This is not measured data.</desc>
            <defs><linearGradient id="spectrum-rainbow"><stop stopColor="#7654cf"/><stop offset=".17" stopColor="#416de0"/><stop offset=".35" stopColor="#40b7df"/><stop offset=".53" stopColor="#56c878"/><stop offset=".69" stopColor="#e6d34f"/><stop offset=".84" stopColor="#ef9c40"/><stop offset="1" stopColor="#db5360"/></linearGradient></defs>
            <text x="320" y="28" fill="#d6e7e7" fontSize="13" textAnchor="middle" letterSpacing="2">LIGHT SPLIT INTO VISIBLE COLORS</text>
            <rect x="40" y="60" width="560" height="75" rx="13" fill="url(#spectrum-rainbow)" />
            {pattern === "broad" && <rect x="300" y="57" width="62" height="81" rx="4" fill="#10212a" opacity=".88" />}
            {pattern === "lines" && <g fill="#10212a" opacity=".9"><rect x="172" y="57" width="7" height="81"/><rect x="326" y="57" width="5" height="81"/><rect x="455" y="57" width="8" height="81"/></g>}
            <text x="40" y="166" fill="#d6e7e7" fontSize="12">VIOLET</text><text x="600" y="166" fill="#d6e7e7" fontSize="12" textAnchor="end">RED</text>
            <path d="M40 181h560" stroke="#8aa6a8" strokeWidth="1"/><path d="M40 177v8m112-8v8m112-8v8m112-8v8m112-8v8m112-8v8" stroke="#8aa6a8"/>
          </svg>
          <p className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-5 text-white/65">Conceptual artwork only. It does not represent a real stone, a wavelength scale or laboratory data.</p>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-3 text-xs leading-5 text-white/60 md:px-7">Visible absorption can be one clue for a trained gemologist. Interpretation depends on the full pattern and other evidence.</p>
    </section>
  );
}

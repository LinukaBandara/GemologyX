"use client";

import { useState } from "react";

const observations = [
  { id: "surface", label: "Surface", note: "Look for dust, polish lines, chips or wear. A surface feature can sit above or cut into the gem; clean, safe conditions help avoid confusing debris with an internal feature." },
  { id: "junctions", label: "Facet junctions", note: "Trace where polished facets meet. Consistent, sharp junctions and wear are observations to record, not a standalone test of identity or quality." },
  { id: "interior", label: "Internal scene", note: "Tilt the stone and change the light direction. A feature may appear, disappear or change contrast. One view cannot reveal its full shape or prove what it is." },
  { id: "whole", label: "Whole stone", note: "Pause magnification and look at the entire stone. Record colour, transparency, cut and visible condition separately from any interpretation of small features." },
] as const;

type ObservationId = (typeof observations)[number]["id"];

export function LoupeObservationExplorer() {
  const [active, setActive] = useState<ObservationId>("surface");
  const selected = observations.find((item) => item.id === active)!;
  const emphasis = (id: ObservationId) => active === id ? 1 : 0.26;

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-[#102b38] text-white shadow-[0_24px_70px_rgba(14,42,56,0.16)]" aria-labelledby="loupe-explorer-title">
      <div className="grid min-w-0 md:grid-cols-[1.08fr_.92fr]">
        <div className="min-w-0 bg-[#173b49] p-5 md:p-7">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">Conceptual observation map</p>
              <h2 id="loupe-explorer-title" className="mt-2 font-serif text-2xl font-semibold">Choose what to inspect</h2>
            </div>
            <svg aria-hidden="true" viewBox="0 0 64 64" className="h-12 w-12 shrink-0 text-teal-200"><circle cx="27" cy="25" r="16" fill="none" stroke="currentColor" strokeWidth="4"/><path d="m39 37 15 15" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/><circle cx="27" cy="25" r="9" fill="currentColor" opacity=".12"/></svg>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2" role="group" aria-label="Gemstone observation areas">
            {observations.map((item) => (
              <button key={item.id} type="button" aria-pressed={active === item.id} onClick={() => setActive(item.id)} className={`min-h-11 rounded-xl border px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200 ${active === item.id ? "border-teal-200 bg-teal-200 text-[#102b38]" : "border-white/20 bg-white/5 text-white hover:bg-white/10"}`}>
                {item.label}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-white/80" aria-live="polite">{selected.note}</p>
          <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-xs leading-5 text-white/65">
            <span className="shrink-0 rounded-lg bg-white/10 px-2 py-1 font-mono text-teal-100">10×</span>
            A common gemological hand-loupe power. A corrected triplet lens helps reduce edge distortion; keep the feature near the centre of view.
          </div>
        </div>
        <div className="flex min-h-[270px] min-w-0 items-center justify-center p-4 sm:p-5 md:p-7">
          <svg viewBox="0 0 420 300" role="img" aria-labelledby="loupe-diagram-title loupe-diagram-desc" className="h-auto w-full max-w-full md:max-w-[440px]">
            <title id="loupe-diagram-title">Conceptual faceted gemstone and loupe observation areas</title>
            <desc id="loupe-diagram-desc">An original diagram highlights the {selected.label.toLowerCase()} of a faceted gemstone. It is not a photograph or diagnostic specimen.</desc>
            <defs><linearGradient id="loupe-gem-fill" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#72d4cf" stopOpacity=".34"/><stop offset="1" stopColor="#8274cf" stopOpacity=".16"/></linearGradient></defs>
            <path d="M210 42 305 85 334 170 272 245 148 245 86 170 115 85Z" fill="url(#loupe-gem-fill)" stroke="#a8e5dc" strokeWidth="2" />
            <path d="m115 85 95 27 95-27m-219 85 124-58 124 58m-248 0 124 75 124-75m-186-85 62 85 62-85m-124 85 62 75 62-75m-124 0h248" fill="none" stroke="#b6cfdf" strokeWidth="1.3" opacity=".65" />
            <path d="m148 245 62-133 62 133" fill="none" stroke="#dceff2" strokeWidth="1.2" opacity=".6" />
            <path d="m113 82 8-5 4 8" fill="none" stroke="#ffd27c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity={emphasis("surface")} />
            <path d="m300 83 7 3-3 7" fill="none" stroke="#ffd27c" strokeWidth="3" strokeLinecap="round" opacity={emphasis("junctions")} />
            <path d="m169 142 25 17-8 18 27 10" fill="none" stroke="#ffc5d5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity={emphasis("interior")} />
            <circle cx="208" cy="119" r="5" fill="#fff" opacity={emphasis("whole")} />
            <circle cx="210" cy="151" r="95" fill="none" stroke="#73dfd0" strokeWidth="2" strokeDasharray="5 7" opacity=".76" />
            <path d="M282 218 353 265" stroke="#73dfd0" strokeWidth="2" strokeDasharray="5 6" opacity=".7" />
            <circle cx="363" cy="257" r="35" fill="#173b49" stroke="#73dfd0" strokeWidth="3" />
            <circle cx="363" cy="257" r="23" fill="none" stroke="#d8f6ed" strokeWidth="1" opacity=".7" />
            <path d="m350 253 9-7 8 12 10-6" fill="none" stroke="#ffc5d5" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity={active === "interior" ? .9 : .18} />
            <path d="m345 238 4-3 3 5" fill="none" stroke="#ffd27c" strokeWidth="2" opacity={active === "surface" ? .9 : .18} />
            <text x="210" y="286" textAnchor="middle" fill="#d6e7e7" fontSize="11">ILLUSTRATION ONLY · NOT A REAL GEMSTONE</text>
          </svg>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-3 text-xs leading-5 text-white/60 md:px-7">Illustrative map, not a microscope image, grading exercise or identification result. Actual features depend on the stone, viewing angle and lighting.</p>
    </section>
  );
}

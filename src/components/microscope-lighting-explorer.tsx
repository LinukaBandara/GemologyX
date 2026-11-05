"use client";

import { useState } from "react";

const modes = [
  { id: "darkfield", name: "Darkfield", color: "#c4fff2", summary: "GIA describes darkfield as a way to make inclusions stand out. Contrast can also make dust and surface marks conspicuous." },
  { id: "diffused", name: "Diffused", color: "#f7d992", summary: "Diffused illumination can help show colour zoning across the gem. Compare the pattern under controlled, even light." },
  { id: "reflected", name: "Reflected", color: "#8ed6ff", summary: "Reflected light is useful for examining surface features such as scratches, cavities, coatings or facet wear." },
  { id: "fiber", name: "Fiber optic", color: "#ffb6c9", summary: "A movable fiber-optic beam can be directed from different angles to reveal how a feature responds as the lighting changes." },
  { id: "polarized", name: "Polarized", color: "#d6b9ff", summary: "Polarized light can reveal optical alignment and strain patterns. Interpreting these observations requires training and other evidence." },
] as const;

type ModeId = (typeof modes)[number]["id"];

export function MicroscopeLightingExplorer() {
  const [active, setActive] = useState<ModeId>("darkfield");
  const mode = modes.find((item) => item.id === active)!;

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-[#102b38] text-white shadow-[0_24px_70px_rgba(14,42,56,0.16)]" aria-labelledby="microscope-explorer-title">
      <div className="grid min-w-0 md:grid-cols-[.92fr_1.08fr]">
        <div className="min-w-0 p-5 md:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">Interactive illumination guide</p>
          <h2 id="microscope-explorer-title" className="mt-2 font-serif text-2xl font-semibold">One gem, different views</h2>
          <p className="mt-3 text-sm leading-6 text-white/75">Select a lighting mode to see which part of this conceptual diagram is emphasized. Real specimens can look different; the drawing does not simulate an actual test.</p>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2" role="group" aria-label="Microscope illumination modes">
            {modes.map((item) => (
              <button key={item.id} type="button" aria-pressed={active === item.id} onClick={() => setActive(item.id)} className={`min-h-11 rounded-xl border px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200 ${active === item.id ? "border-teal-200 bg-teal-200 text-[#102b38]" : "border-white/20 bg-white/5 text-white hover:bg-white/10"}`}>
                {item.name}
              </button>
            ))}
          </div>
          <p className="mt-4 min-h-[5.5rem] rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/80" aria-live="polite">{mode.summary}</p>
        </div>
        <div className="flex min-h-[290px] min-w-0 items-center justify-center overflow-hidden bg-[#173b49] p-4 md:p-6">
          <svg viewBox="0 0 440 310" role="img" aria-labelledby="microscope-diagram-title microscope-diagram-desc" className="h-auto w-full max-w-full md:max-w-[470px]">
            <title id="microscope-diagram-title">Conceptual gem under {mode.name.toLowerCase()} illumination</title>
            <desc id="microscope-diagram-desc">Original instructional diagram highlighting {mode.name.toLowerCase()} lighting on a faceted gemstone. This is not a specimen photograph or test result.</desc>
            <defs><linearGradient id="microscope-stone" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#55bdc1" stopOpacity=".28"/><stop offset="1" stopColor="#9c83d8" stopOpacity=".22"/></linearGradient></defs>
            <path d="M220 44 328 91 354 188 283 263 157 263 86 188 112 91Z" fill="url(#microscope-stone)" stroke="#a8e5dc" strokeWidth="2" />
            <path d="m112 91 108 33 108-33M86 188l134-64 134 64M86 188l134 75 134-75m-208-97 74 97 74-97m-148 97 74 75 74-75m-148 0h282m-208 75 74-139 74 139" fill="none" stroke="#b6cfdf" strokeWidth="1.2" opacity=".48" />
            <path d="m185 142 24 20-10 18 29 13m15-51-8 23 16 9" fill="none" stroke={mode.color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity={active === "darkfield" || active === "polarized" ? .95 : .18} />
            <path d="M151 118h138M151 145h138M151 172h138" stroke={mode.color} strokeWidth="5" opacity={active === "diffused" ? .34 : .06} />
            <path d="m87 185 42-18 18 9m207 14-42-18-18 9" fill="none" stroke={mode.color} strokeWidth="5" strokeLinecap="round" opacity={active === "darkfield" ? .92 : .12} />
            <path d="m79 123 62 36m218-61-63 41" fill="none" stroke={mode.color} strokeWidth="4" strokeLinecap="round" opacity={active === "fiber" ? .95 : .1} />
            <path d="M205 43v31m30-31v31M205 49h30" fill="none" stroke={mode.color} strokeWidth="3" strokeLinecap="round" opacity={active === "reflected" ? .95 : .1} />
            <path d="M117 77 325 230M325 77 117 230" fill="none" stroke={mode.color} strokeWidth="2" strokeDasharray="7 7" opacity={active === "polarized" ? .8 : .08} />
            <circle cx="220" cy="158" r="75" fill="none" stroke={mode.color} strokeWidth="2" strokeDasharray="4 7" opacity=".52" />
            <text x="220" y="295" textAnchor="middle" fill="#d6e7e7" fontSize="11">CONCEPTUAL VIEW · {mode.name.toUpperCase()}</text>
          </svg>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-3 text-xs leading-5 text-white/60 md:px-7">Conceptual educational graphic only. The coloured marks are not actual inclusions, microscope imagery, or diagnostic evidence.</p>
    </section>
  );
}

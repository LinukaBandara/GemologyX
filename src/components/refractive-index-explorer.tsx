"use client";

import { useState } from "react";

export function RefractiveIndexExplorer() {
  const [index, setIndex] = useState(1.6);
  const incident = 45;
  const refracted = Math.asin(Math.sin((incident * Math.PI) / 180) / index) * (180 / Math.PI);
  const start = { x: 116, y: 36 };
  const hit = { x: 210, y: 130 };
  const length = 118;
  const end = { x: hit.x + Math.sin((refracted * Math.PI) / 180) * length, y: hit.y + Math.cos((refracted * Math.PI) / 180) * length };

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-[#102b38] text-white shadow-[0_24px_70px_rgba(14,42,56,0.16)]" aria-labelledby="ri-demo-title">
      <div className="grid md:grid-cols-[0.9fr_1.1fr]">
        <div className="p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">Interactive optics</p>
          <h2 id="ri-demo-title" className="mt-2 font-serif text-2xl font-semibold">Watch a ray bend</h2>
          <p className="mt-3 text-sm leading-6 text-white/75">Change the demonstration material&apos;s refractive index. The incoming ray stays fixed; the ray inside the material bends toward the normal as the index rises.</p>
          <label htmlFor="ri-slider" className="mt-7 flex items-center justify-between text-sm font-medium">
            <span>Demonstration refractive index</span><output htmlFor="ri-slider" className="rounded-lg bg-white/10 px-3 py-1 font-mono text-teal-100">{index.toFixed(2)}</output>
          </label>
          <input id="ri-slider" className="mt-3 h-11 w-full touch-pan-x accent-teal-300" type="range" min="1" max="2.5" step="0.01" value={index} onChange={(event) => setIndex(Number(event.target.value))} aria-label="Demonstration refractive index" />
          <div className="mt-1 flex justify-between text-xs text-white/55"><span>1.00</span><span>2.50</span></div>
          <p className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3 text-sm">At a fixed 45° incidence, this idealized model gives a refracted angle of <strong className="text-teal-100">{refracted.toFixed(1)}°</strong> from the normal.</p>
        </div>
        <div className="flex min-h-[280px] items-center bg-[#173b49] p-3 md:p-5">
          <svg viewBox="0 0 360 270" role="img" aria-labelledby="ray-title ray-desc" className="h-auto w-full">
            <title id="ray-title">Interactive ray refraction diagram</title>
            <desc id="ray-desc">A ray enters a material at 45 degrees and bends to {refracted.toFixed(1)} degrees from the normal when the selected refractive index is {index.toFixed(2)}.</desc>
            <rect x="18" y="130" width="324" height="120" rx="12" fill="#205463" opacity=".72" />
            <line x1="18" y1="130" x2="342" y2="130" stroke="#80c8c5" strokeWidth="2" />
            <line x1="210" y1="34" x2="210" y2="238" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="5 6" opacity=".6" />
            <line x1={start.x} y1={start.y} x2={hit.x} y2={hit.y} stroke="#f5c96a" strokeWidth="4" strokeLinecap="round" />
            <polygon points={`${hit.x},${hit.y} ${hit.x-8},${hit.y-13} ${hit.x+7},${hit.y-8}`} fill="#f5c96a" />
            <line x1={hit.x} y1={hit.y} x2={end.x} y2={end.y} stroke="#7ce0d0" strokeWidth="4" strokeLinecap="round" />
            <polygon points={`${end.x},${end.y} ${end.x-9},${end.y+12} ${end.x+6},${end.y+10}`} fill="#7ce0d0" />
            <circle cx={hit.x} cy={hit.y} r="5" fill="white" />
            <text x="26" y="55" fill="#f5c96a" fontSize="12" fontWeight="700">INCIDENT RAY</text>
            <text x="26" y="157" fill="#d7f5f1" fontSize="12" fontWeight="700">MATERIAL · n = {index.toFixed(2)}</text>
            <text x="218" y="50" fill="#ffffff" fontSize="11" opacity=".8">NORMAL</text>
            <text x="126" y="111" fill="#ffffff" fontSize="11">45°</text>
            <text x={Math.min(end.x + 8, 295)} y={Math.min(end.y + 20, 232)} fill="#7ce0d0" fontSize="11">{refracted.toFixed(1)}°</text>
          </svg>
        </div>
      </div>
      <p className="border-t border-white/10 px-6 py-3 text-xs leading-5 text-white/60 md:px-8">Teaching model only: air is treated as n = 1, the boundary is flat, and wavelength effects are omitted. This is not a gemstone test or an instrument simulation.</p>
    </section>
  );
}

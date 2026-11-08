"use client";

import { useState } from "react";

type Mode = "longwave" | "shortwave" | "afterglow";

const modes: { id: Mode; label: string; wavelength: string; note: string }[] = [
  { id: "longwave", label: "Longwave UV", wavelength: "365 nm", note: "A controlled longwave source is selected. The conceptual sample emits visible light while the UV is on." },
  { id: "shortwave", label: "Shortwave UV", wavelength: "254 nm", note: "A controlled shortwave source is selected. A real gem may react differently under a different excitation wavelength." },
  { id: "afterglow", label: "After the UV is off", wavelength: "Source off", note: "Fluorescence stops when excitation ends. A visible glow that continues briefly is called phosphorescence." },
];

export function UVResponseExplorer() {
  const [mode, setMode] = useState<Mode>("longwave");
  const selected = modes.find((item) => item.id === mode)!;
  const active = mode !== "afterglow";
  const glow = mode === "longwave" ? "#72f1ce" : mode === "shortwave" ? "#b9a2ff" : "#f3c76c";

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-[#102b38] text-white shadow-[0_24px_70px_rgba(14,42,56,0.16)]" aria-labelledby="uv-explorer-title">
      <div className="grid min-w-0 md:grid-cols-[.92fr_1.08fr]">
        <div className="min-w-0 p-5 md:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">UV response · conceptual model</p>
          <h2 id="uv-explorer-title" className="mt-2 font-serif text-2xl font-semibold">Compare the excitation state</h2>
          <p className="mt-3 text-sm leading-6 text-white/75">Select a teaching state to distinguish visible emission during excitation from a glow that remains after the source is removed.</p>
          <div className="mt-5 grid gap-2" role="group" aria-label="Conceptual ultraviolet viewing modes">
            {modes.map((item) => <button key={item.id} type="button" aria-pressed={mode === item.id} onClick={() => setMode(item.id)} className={`min-h-11 rounded-xl border px-3 py-2 text-left text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200 ${mode === item.id ? "border-teal-200 bg-teal-200 text-[#102b38]" : "border-white/20 bg-white/5 text-white hover:bg-white/10"}`}><span className="block">{item.label}</span><span className={`mt-0.5 block text-xs font-normal ${mode === item.id ? "text-[#254b53]" : "text-white/60"}`}>{item.wavelength}</span></button>)}
          </div>
          <p className="mt-5 min-h-[7rem] rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/80" aria-live="polite">{selected.note}</p>
          <p className="mt-4 rounded-xl border border-amber-200/25 bg-amber-200/10 p-4 text-xs leading-5 text-amber-50">UV hazard: use a properly enclosed viewing cabinet and protective equipment specified for the lamp. Never look into the UV source or expose eyes or skin directly.</p>
        </div>
        <div className="flex min-h-[300px] min-w-0 flex-col justify-center bg-[#173b49] p-4 sm:p-5 md:p-7">
          <svg viewBox="0 0 520 305" role="img" aria-labelledby="uv-diagram-title uv-diagram-desc" className="h-auto w-full max-w-full">
            <title id="uv-diagram-title">Conceptual gem response to ultraviolet excitation</title>
            <desc id="uv-diagram-desc">An enclosed UV viewing cabinet contains a conceptual gemstone. The selected state is {selected.label}; the illustration shows {active ? "visible emission during excitation" : "a possible afterglow after excitation"}. Hues are illustrative, not material-specific.</desc>
            <text x="260" y="24" fill="#d6e7e7" fontSize="12" textAnchor="middle" letterSpacing="1.5">OBSERVE THROUGH A SHIELDED VIEWING WINDOW</text>
            <rect x="62" y="48" width="396" height="210" rx="20" fill="#0c2430" stroke="#75aab0" strokeWidth="2"/>
            <rect x="95" y="80" width="330" height="142" rx="14" fill="#091b25" stroke="#46727a" strokeWidth="2"/>
            <path d="M120 106h280" stroke={active ? "#8073f2" : "#758b94"} strokeWidth="5" strokeLinecap="round" opacity={active ? .95 : .35}/>
            <text x="260" y="100" fill="#d6e7e7" fontSize="10" textAnchor="middle">{active ? `UV SOURCE · ${selected.wavelength}` : "UV SOURCE · OFF"}</text>
            {active && <path d="M260 113v31m-14-16 14 16 14-16" fill="none" stroke="#a99bff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>}
            <path d="m260 148 43 25-43 25-43-25Z" fill={glow} fillOpacity={active ? .82 : .3} stroke={glow} strokeWidth="3" style={{ filter: active ? `drop-shadow(0 0 14px ${glow})` : "none" }}/>
            <path d="m217 173 43 25 43-25m-86 0 43 25 43-25" fill="none" stroke="#eafff9" strokeWidth="1.4" opacity=".8"/>
            {active && <g fill="none" stroke={glow} strokeWidth="2" opacity=".9"><path d="M196 173h-22m158 0h22M260 139v-13m-42 25-10-10m94 10 10-10"/><circle cx="260" cy="173" r="57" opacity=".25"/></g>}
            {!active && <g fill={glow} opacity=".7"><circle cx="190" cy="156" r="3"/><circle cx="334" cy="181" r="2.5"/><circle cx="311" cy="142" r="2"/></g>}
            <text x="260" y="241" fill="#d6e7e7" fontSize="11" textAnchor="middle">GEM RESPONSE · COLOR IS NOT DIAGNOSTIC HERE</text>
            <rect x="171" y="272" width="178" height="22" rx="7" fill="#244b57" stroke="#75aab0"/>
            <text x="260" y="287" fill="#e5f7f2" fontSize="10" fontWeight="700" textAnchor="middle">SHIELDED OBSERVATION CABINET</text>
          </svg>
          <p className="mt-3 rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-5 text-white/65">Original teaching diagram only. Emission hue, strength and persistence are not predictions for any gemstone.</p>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-3 text-xs leading-5 text-white/60 md:px-7">UV wavelength, lamp output, viewing conditions and sample characteristics affect observations. A colored glow alone cannot establish identity or treatment.</p>
    </section>
  );
}

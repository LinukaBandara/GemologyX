"use client";

import { useState } from "react";

const reactions = [
  { id: "single", label: "Singly refractive", detail: "Idealized reaction: remains dark as the sample turns. A doubly refractive stone viewed along an optic axis can also look dark, so trained examiners check additional directions." },
  { id: "double", label: "Doubly refractive", detail: "Idealized reaction: alternates between brighter and darker positions, becoming dark at four points during a full rotation. The exact view depends on the material and orientation." },
  { id: "aggregate", label: "Aggregate", detail: "Idealized reaction: stays light as the sample turns. Heavy inclusions can create a misleading aggregate-like reaction, so inspect transparent areas and confirm with other evidence." },
] as const;

type ReactionId = (typeof reactions)[number]["id"];

export function PolariscopeExplorer() {
  const [reaction, setReaction] = useState<ReactionId>("double");
  const [angle, setAngle] = useState(0);
  const selected = reactions.find((item) => item.id === reaction)!;
  const theta = (angle * Math.PI) / 180;
  const brightness = reaction === "single" ? .13 : reaction === "aggregate" ? .7 : .13 + .78 * Math.sin(2 * theta) ** 2;

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-[#102b38] text-white shadow-[0_24px_70px_rgba(14,42,56,0.16)]" aria-labelledby="polariscope-explorer-title">
      <div className="grid min-w-0 md:grid-cols-[.95fr_1.05fr]">
        <div className="min-w-0 p-5 md:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">Crossed-polarizer practice model</p>
          <h2 id="polariscope-explorer-title" className="mt-2 font-serif text-2xl font-semibold">Turn the sample</h2>
          <p className="mt-3 text-sm leading-6 text-white/75">Choose an idealized optical reaction and rotate the diagram. This is a teaching animation, not a test or gem-identification result.</p>
          <div className="mt-5 grid gap-2" role="group" aria-label="Illustrative polariscope reactions">
            {reactions.map((item) => (
              <button key={item.id} type="button" aria-pressed={reaction === item.id} onClick={() => setReaction(item.id)} className={`min-h-11 rounded-xl border px-3 py-2 text-left text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200 ${reaction === item.id ? "border-teal-200 bg-teal-200 text-[#102b38]" : "border-white/20 bg-white/5 text-white hover:bg-white/10"}`}>
                {item.label}
              </button>
            ))}
          </div>
          <label htmlFor="polariscope-angle" className="mt-5 flex items-center justify-between gap-3 text-sm font-medium"><span>Rotate sample</span><output htmlFor="polariscope-angle" className="rounded-lg bg-white/10 px-3 py-1 font-mono text-teal-100">{angle}°</output></label>
          <input id="polariscope-angle" className="mt-3 h-11 w-full touch-pan-x accent-teal-300" type="range" min="0" max="360" step="1" value={angle} onChange={(event) => setAngle(Number(event.target.value))} aria-label="Rotate the illustrated gemstone" />
          <div className="mt-1 flex justify-between text-xs text-white/55"><span>0°</span><span>360°</span></div>
          <p className="mt-4 min-h-[7rem] rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/80" aria-live="polite">{selected.detail}</p>
        </div>
        <div className="flex min-h-[300px] min-w-0 items-center justify-center bg-[#173b49] p-4 md:p-6">
          <svg viewBox="0 0 440 340" role="img" aria-labelledby="polariscope-diagram-title polariscope-diagram-desc" className="h-auto w-full max-w-full md:max-w-[460px]">
            <title id="polariscope-diagram-title">Conceptual gemstone between crossed polarizers</title>
            <desc id="polariscope-diagram-desc">The illustrated sample is at {angle} degrees and shows an idealized {selected.label.toLowerCase()} reaction. The sample brightness is conceptual, not a real observation.</desc>
            <rect x="154" y="35" width="132" height="25" rx="7" fill="#9a82d9" />
            <text x="220" y="52" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">ANALYZER · 90°</text>
            <path d="M220 64v30" stroke="#d9f4ef" strokeWidth="2" strokeDasharray="4 5" opacity={brightness} />
            <g transform={`rotate(${angle} 220 170)`}>
              <path d="M220 94 287 133 287 207 220 246 153 207 153 133Z" fill="#7ce0d0" fillOpacity={brightness} stroke="#b7ece2" strokeWidth="2" />
              <path d="m153 133 67 27 67-27m-134 74 67-47 67 47m-134 0 67 39 67-39m-100-74 33 74 34-74" fill="none" stroke="#d9f4ef" strokeWidth="1.4" opacity={Math.max(.18, brightness)} />
              <path d="m193 164 14 11-8 11 22 10" fill="none" stroke="#ffca7b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity={reaction === "aggregate" ? .7 : .18} />
            </g>
            <path d="M220 248v28" stroke="#d9f4ef" strokeWidth="2" strokeDasharray="4 5" opacity={brightness} />
            <rect x="154" y="278" width="132" height="25" rx="7" fill="#5d9ba4" />
            <text x="220" y="295" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">POLARIZER · 0°</text>
            <circle cx="220" cy="323" r="8" fill="#f5c96a" opacity=".8" />
            <text x="220" y="19" textAnchor="middle" fill="#d6e7e7" fontSize="11">LIGHT TRANSMISSION · ILLUSTRATIVE</text>
          </svg>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-3 text-xs leading-5 text-white/60 md:px-7">Conceptual optical behavior only. Brightness and the cut gemstone illustration are not real measurements, a specimen photograph or a diagnostic answer.</p>
    </section>
  );
}

"use client";

import { useState } from "react";

function mixHex(from: string, to: string, amount: number) {
  const channel = (index: number) => {
    const a = Number.parseInt(from.slice(index, index + 2), 16);
    const b = Number.parseInt(to.slice(index, index + 2), 16);
    return Math.round(a + (b - a) * amount).toString(16).padStart(2, "0");
  };
  return `#${channel(1)}${channel(3)}${channel(5)}`;
}

export function DichroscopeExplorer() {
  const [angle, setAngle] = useState(0);
  const separation = Math.sin((angle / 90) * Math.PI / 2);
  const secondImage = mixHex("4acbb8", "f0b35e", separation);
  const explanation = angle === 0
    ? "Axis-on in this idealized uniaxial example: the two images show a similar color. This view may not reveal pleochroism."
    : angle === 90
      ? "Side-on in this idealized uniaxial example: the two images show their strongest color separation. Actual strength and colors vary by material and direction."
      : "As the viewing direction moves away from the optic axis in this idealized uniaxial example, the second image shifts. This visual transition is conceptual, not a specimen result.";

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-[#102b38] text-white shadow-[0_24px_70px_rgba(14,42,56,0.16)]" aria-labelledby="dichroscope-explorer-title">
      <div className="grid min-w-0 md:grid-cols-[.92fr_1.08fr]">
        <div className="min-w-0 p-5 md:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">Idealized uniaxial example</p>
          <h2 id="dichroscope-explorer-title" className="mt-2 font-serif text-2xl font-semibold">Turn the viewing direction</h2>
          <p className="mt-3 text-sm leading-6 text-white/75">A dichroscope places two transmitted-light images side by side. Explore how their colors can separate as a suitable crystal is viewed in another direction.</p>
          <label htmlFor="dichroscope-angle" className="mt-6 flex items-center justify-between gap-3 text-sm font-medium"><span>Direction away from optic axis</span><output htmlFor="dichroscope-angle" className="rounded-lg bg-white/10 px-3 py-1 font-mono text-teal-100">{angle}°</output></label>
          <input id="dichroscope-angle" className="mt-3 h-11 w-full touch-pan-x accent-teal-300" type="range" min="0" max="90" step="1" value={angle} onChange={(event) => setAngle(Number(event.target.value))} aria-label="Change the conceptual viewing direction from optic-axis to side-on" aria-valuetext={angle === 0 ? "Along the optic axis" : angle === 90 ? "At right angles to the optic axis" : `${angle} degrees away from the optic axis`} />
          <div className="mt-1 flex justify-between text-xs text-white/55"><span>Axis-on</span><span>Side-on</span></div>
          <p className="mt-5 min-h-[7rem] rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/80" aria-live="polite">{explanation}</p>
        </div>
        <div className="flex min-h-[300px] min-w-0 flex-col justify-center bg-[#173b49] p-4 sm:p-5 md:p-7">
          <svg viewBox="0 0 520 300" role="img" aria-labelledby="dichroscope-title dichroscope-desc" className="h-auto w-full max-w-full">
            <title id="dichroscope-title">Two conceptual images in a dichroscope</title>
            <desc id="dichroscope-desc">An idealized uniaxial crystal is shown beside two adjacent windows labelled image A and image B. At {angle} degrees from the optic axis, the conceptual images show {angle === 0 ? "similar color" : angle === 90 ? "their strongest color separation" : "increasing color separation"}. Hues do not represent a real gem.</desc>
            <text x="260" y="22" fill="#d6e7e7" fontSize="12" textAnchor="middle" letterSpacing="1.5">TWO TRANSMITTED-LIGHT IMAGES</text>
            <rect x="30" y="49" width="286" height="185" rx="20" fill="#0c2430" stroke="#75aab0" strokeWidth="2"/>
            <rect x="53" y="76" width="111" height="120" rx="12" fill="#173b49" stroke="#8fb3b8"/>
            <rect x="182" y="76" width="111" height="120" rx="12" fill="#173b49" stroke="#8fb3b8"/>
            <rect x="62" y="85" width="93" height="102" rx="8" fill="#4acbb8"/>
            <rect x="191" y="85" width="93" height="102" rx="8" fill={secondImage}/>
            <path d="M62 169 146 85m-84 56 56-56m-56 84 84-84m-57 102 57-57" stroke="#102b38" strokeOpacity=".3" strokeWidth="2"/>
            <path d="M191 169 275 85m-84 56 56-56m-56 84 84-84m-57 102 57-57" stroke="#102b38" strokeOpacity=".3" strokeWidth="2"/>
            <text x="108" y="219" fill="#d6e7e7" fontSize="12" fontWeight="700" textAnchor="middle">IMAGE A</text>
            <text x="237" y="219" fill="#d6e7e7" fontSize="12" fontWeight="700" textAnchor="middle">IMAGE B</text>
            <text x="373" y="70" fill="#a9efe2" fontSize="12" fontWeight="700" textAnchor="middle">IDEALIZED CRYSTAL</text>
            <g transform={`rotate(${angle} 390 157)`}>
              <path d="m390 96 49 29v64l-49 29-49-29v-64Z" fill="#59b9ae" fillOpacity=".55" stroke="#b7ece2" strokeWidth="2"/>
              <path d="m341 125 49 28 49-28m-98 64 49-36 49 36m-98 0 49 29 49-29" fill="none" stroke="#d9f4ef" strokeWidth="1.5" opacity=".8"/>
            </g>
            <path d="M390 86v-22m0 168v22" stroke="#f4ca71" strokeWidth="2" strokeDasharray="4 5"/>
            <path d="m384 70 6-8 6 8m-12 176 6 8 6-8" fill="none" stroke="#f4ca71" strokeWidth="2"/>
            <text x="390" y="277" fill="#d6e7e7" fontSize="11" textAnchor="middle">C-AXIS · VIEW DIRECTION CHANGES</text>
          </svg>
          <p className="mt-3 rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-5 text-white/65">The colors and transition are teaching artwork only. Real hue differences, image brightness and orientation depend on the gemstone and instrument.</p>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-3 text-xs leading-5 text-white/60 md:px-7">A dichroscope shows two views of transmitted light. This model is not a simulator and cannot determine pleochroism in a real specimen.</p>
    </section>
  );
}

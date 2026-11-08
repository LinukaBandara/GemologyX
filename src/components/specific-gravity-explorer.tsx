"use client";

import { useMemo, useState } from "react";

function parseReading(value: string) {
  if (!value.trim()) return Number.NaN;
  return Number(value);
}

export function SpecificGravityExplorer() {
  const [air, setAir] = useState("4.00");
  const [water, setWater] = useState("3.00");
  const result = useMemo(() => {
    const airValue = parseReading(air);
    const waterValue = parseReading(water);
    if (!Number.isFinite(airValue) || !Number.isFinite(waterValue) || airValue <= 0 || waterValue < 0) return { value: null, note: "Enter two non-negative readings, with a positive air reading." };
    if (waterValue >= airValue) return { value: null, note: "The suspended-in-water reading should be lower than the air reading for this example." };
    const loss = airValue - waterValue;
    if (loss <= 0) return { value: null, note: "The difference between the readings must be greater than zero." };
    return { value: airValue / loss, note: `Apparent loss in water: ${loss.toFixed(2)} in the same unit.` };
  }, [air, water]);

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-[#102b38] text-white shadow-[0_24px_70px_rgba(14,42,56,0.16)]" aria-labelledby="sg-explorer-title">
      <div className="grid min-w-0 md:grid-cols-[.92fr_1.08fr]">
        <div className="min-w-0 p-5 md:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">Hydrostatic weighing · teaching calculator</p>
          <h2 id="sg-explorer-title" className="mt-2 font-serif text-2xl font-semibold">See how the ratio works</h2>
          <p className="mt-3 text-sm leading-6 text-white/75">Use two example readings in the same unit. This calculator explains the arithmetic; it does not measure a stone.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium" htmlFor="sg-air">Weight in air<input id="sg-air" className="mt-2 min-h-11 w-full rounded-xl border border-white/20 bg-white/10 px-3 text-white placeholder:text-white/40 focus:border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-200/50" type="number" min="0" step="any" inputMode="decimal" value={air} onChange={(event) => setAir(event.target.value)} aria-describedby="sg-unit-note" /></label>
            <label className="text-sm font-medium" htmlFor="sg-water">Apparent weight in water<input id="sg-water" className="mt-2 min-h-11 w-full rounded-xl border border-white/20 bg-white/10 px-3 text-white placeholder:text-white/40 focus:border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-200/50" type="number" min="0" step="any" inputMode="decimal" value={water} onChange={(event) => setWater(event.target.value)} aria-describedby="sg-unit-note" /></label>
          </div>
          <p id="sg-unit-note" className="mt-2 text-xs leading-5 text-white/55">Keep both readings in the same unit. The example is rounded to two decimal places for display only.</p>
          <div className="mt-5 rounded-xl border border-teal-100/20 bg-white/5 p-4" aria-live="polite" aria-atomic="true">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-100">Illustrative result</p>
            {result.value === null ? <p className="mt-2 text-sm leading-6 text-amber-100">{result.note}</p> : <><p className="mt-2 font-serif text-3xl font-semibold text-white">SG ≈ {result.value.toFixed(2)}</p><p className="mt-2 text-sm text-white/70">{result.note}</p></>}
          </div>
        </div>
        <div className="flex min-h-[300px] min-w-0 items-center justify-center bg-[#173b49] p-4 md:p-7">
          <svg viewBox="0 0 500 335" role="img" aria-labelledby="sg-diagram-title sg-diagram-desc" className="h-auto w-full max-w-full md:max-w-[500px]">
            <title id="sg-diagram-title">Conceptual air and water weighing comparison</title>
            <desc id="sg-diagram-desc">A gemstone is shown once on a balance in air and once suspended from a balance into water. The difference is the apparent loss used in the specific-gravity formula.</desc>
            <text x="250" y="24" fill="#d6e7e7" fontSize="12" textAnchor="middle" letterSpacing="1.5">TWO READINGS · SAME UNIT</text>
            <g>
              <rect x="29" y="48" width="196" height="248" rx="16" fill="#0c2430" stroke="#5f8990"/>
              <text x="127" y="74" fill="#a9efe2" fontSize="14" fontWeight="700" textAnchor="middle">IN AIR</text>
              <rect x="88" y="96" width="78" height="15" rx="6" fill="#8fb3b8"/>
              <path d="M127 111v46m-31 0h62m-31 0v20" stroke="#d9f4ef" strokeWidth="2"/>
              <path d="m127 168 23 15-23 15-23-15Z" fill="#63cbb9" stroke="#c8f4e9" strokeWidth="2"/>
              <rect x="85" y="225" width="84" height="40" rx="8" fill="#173b49" stroke="#8fb3b8"/>
              <text x="127" y="250" fill="#fff" fontSize="12" fontWeight="700" textAnchor="middle">READING A</text>
              <text x="127" y="281" fill="#d6e7e7" fontSize="10" textAnchor="middle">ON THE BALANCE</text>
            </g>
            <g>
              <rect x="275" y="48" width="196" height="248" rx="16" fill="#0c2430" stroke="#5f8990"/>
              <text x="373" y="74" fill="#a9efe2" fontSize="14" fontWeight="700" textAnchor="middle">SUSPENDED IN WATER</text>
              <rect x="334" y="96" width="78" height="15" rx="6" fill="#8fb3b8"/>
              <path d="M373 111v55m-31 0h62m-31 0v12" stroke="#d9f4ef" strokeWidth="2"/>
              <path d="m373 178 23 15-23 15-23-15Z" fill="#63cbb9" stroke="#c8f4e9" strokeWidth="2"/>
              <path d="M309 207h128l-9 59h-110Z" fill="#46a9bf" fillOpacity=".35" stroke="#73c6ce" strokeWidth="2"/>
              <path d="M312 219q15-7 30 0t30 0t30 0t30 0" fill="none" stroke="#8fe4de" strokeWidth="2"/>
              <text x="373" y="250" fill="#fff" fontSize="12" fontWeight="700" textAnchor="middle">READING B</text>
              <text x="373" y="281" fill="#d6e7e7" fontSize="10" textAnchor="middle">APPARENT WEIGHT</text>
            </g>
            <text x="250" y="322" fill="#f4ca71" fontSize="12" fontWeight="700" textAnchor="middle">SG = A ÷ (A − B)</text>
          </svg>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-3 text-xs leading-5 text-white/60 md:px-7">Conceptual diagram and arithmetic aid only. Instrument calibration, specimen suitability and measurement precision determine whether a real reading is meaningful.</p>
    </section>
  );
}

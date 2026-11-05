"use client";

import { useState } from "react";

const steps = [
  { id: "contact", name: "1 · Contact", text: "A suitable optical contact medium helps couple a clean, flat polished facet to the instrument prism. The prism and contact medium must be appropriate for the expected RI range." },
  { id: "light", name: "2 · Light path", text: "Light in the refractometer interacts with the gem at a critical angle. The resulting boundary is an optical effect, not a scratch, mark or physical edge inside the stone." },
  { id: "scale", name: "3 · Scale reading", text: "The examiner observes the shadow boundary against the calibrated scale. Direction, optic character, focus, illumination and instrument range can affect the interpretation." },
] as const;

type StepId = (typeof steps)[number]["id"];

export function RefractometerExplorer() {
  const [active, setActive] = useState<StepId>("contact");
  const step = steps.find((item) => item.id === active)!;
  const opacity = (id: StepId) => active === id ? 1 : .22;

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-[#102b38] text-white shadow-[0_24px_70px_rgba(14,42,56,0.16)]" aria-labelledby="refractometer-explorer-title">
      <div className="grid min-w-0 md:grid-cols-[.94fr_1.06fr]">
        <div className="min-w-0 p-5 md:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">Instrument principle</p>
          <h2 id="refractometer-explorer-title" className="mt-2 font-serif text-2xl font-semibold">Follow the reading</h2>
          <p className="mt-3 text-sm leading-6 text-white/75">Step through a simplified refractometer setup. This is a concept diagram; it does not produce a gemstone measurement.</p>
          <div className="mt-5 grid gap-2" role="group" aria-label="Refractometer stages">
            {steps.map((item) => (
              <button key={item.id} type="button" aria-pressed={active === item.id} onClick={() => setActive(item.id)} className={`min-h-11 rounded-xl border px-3 py-2 text-left text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200 ${active === item.id ? "border-teal-200 bg-teal-200 text-[#102b38]" : "border-white/20 bg-white/5 text-white hover:bg-white/10"}`}>
                {item.name}
              </button>
            ))}
          </div>
          <p className="mt-4 min-h-[6rem] rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/80" aria-live="polite">{step.text}</p>
        </div>
        <div className="flex min-h-[300px] min-w-0 items-center justify-center bg-[#173b49] p-4 md:p-6">
          <svg viewBox="0 0 460 330" role="img" aria-labelledby="refractometer-diagram-title refractometer-diagram-desc" className="h-auto w-full max-w-full md:max-w-[480px]">
            <title id="refractometer-diagram-title">Conceptual refractometer and gemstone cross-section</title>
            <desc id="refractometer-diagram-desc">An educational schematic highlights the {active === "contact" ? "contact between a polished gemstone facet and instrument prism" : active === "light" ? "light interaction at the gemstone and prism boundary" : "shadow boundary on a simplified calibrated scale"}. Not a working instrument or measurement.</desc>
            <rect x="42" y="195" width="230" height="72" rx="12" fill="#47818a" stroke="#b7ece2" strokeWidth="2" opacity={opacity("contact")} />
            <text x="157" y="238" fill="#f1ffff" fontSize="15" fontWeight="700" textAnchor="middle" opacity={opacity("contact")}>HIGH-RI PRISM</text>
            <path d="m114 158 38-49 75 0 37 49-75 31Z" fill="#74c9c1" fillOpacity=".28" stroke="#b7ece2" strokeWidth="2" />
            <path d="m152 109 37 80 38-80m-113 49h150m-75-49v80" fill="none" stroke="#d9f4ef" strokeWidth="1.4" opacity=".62" />
            <text x="190" y="96" textAnchor="middle" fill="#d9f4ef" fontSize="13" fontWeight="700">POLISHED GEM FACET</text>
            <rect x="114" y="186" width="150" height="8" rx="4" fill="#f4ca71" opacity={opacity("contact")} />
            <text x="304" y="192" fill="#f4ca71" fontSize="12" opacity={opacity("contact")}>contact film</text>
            <path d="M76 251h63l42-64 58-48" fill="none" stroke="#f4ca71" strokeWidth="4" strokeLinecap="round" opacity={opacity("light")} />
            <path d="m236 139 4 17 12-13" fill="#f4ca71" opacity={opacity("light")} />
            <path d="M75 251h70l44-62 48 0" fill="none" stroke="#7ce0d0" strokeWidth="4" strokeLinecap="round" opacity={opacity("light")} />
            <path d="m229 182 12 7-12 7" fill="#7ce0d0" opacity={opacity("light")} />
            <text x="55" y="288" fill="#f4ca71" fontSize="11" opacity={opacity("light")}>LIGHT PATH · SCHEMATIC</text>
            <rect x="300" y="45" width="126" height="218" rx="14" fill="#0c2430" stroke="#75aab0" strokeWidth="2" opacity={opacity("scale")} />
            <text x="363" y="71" textAnchor="middle" fill="#d9f4ef" fontSize="12" fontWeight="700" opacity={opacity("scale")}>VIEW / SCALE</text>
            <path d="M324 96h74m-74 28h58m-58 28h74m-74 28h58m-58 28h74" stroke="#82b5bb" strokeWidth="2" opacity={opacity("scale")} />
            <path d="M339 92v99" stroke="#f4ca71" strokeWidth="4" opacity={opacity("scale")} />
            <text x="363" y="226" textAnchor="middle" fill="#f4ca71" fontSize="11" opacity={opacity("scale")}>BOUNDARY</text>
            <path d="M244 189 C276 189 280 177 300 165" fill="none" stroke="#7ce0d0" strokeWidth="2" strokeDasharray="5 6" opacity={active === "scale" ? .75 : .1} />
            <text x="230" y="311" textAnchor="middle" fill="#d6e7e7" fontSize="11">CONCEPTUAL SCHEMATIC · NOT TO SCALE</text>
          </svg>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-3 text-xs leading-5 text-white/60 md:px-7">Teaching diagram only. Prism geometry, light paths and scale marks are simplified and are not an instrument view or reportable reading.</p>
    </section>
  );
}

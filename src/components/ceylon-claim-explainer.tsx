"use client";

import { useState } from "react";

const claims = [
  {
    label: "වෙළෙඳ නාමය",
    title: "“Ceylon” යන නාමය",
    text: "විකුණුම්කරු මේ නාමය භාවිත කළ බව පමණක් දක්වයි. එය තනිවම ගල ශ්‍රී ලංකාවෙන් හමුවූ බවට ස්වාධීන සාක්ෂියක් නොවේ.",
  },
  {
    label: "වර්ණ විස්තරය",
    title: "“Ceylon blue” වැනි විස්තරයක්",
    text: "මෙය වර්ණය පිළිබඳ වෙළෙඳ විස්තරයක් විය හැකියි. වර්ණයට සම්මතයක් හෝ භූගෝලීය මූලාරම්භයක් ඒ නාමයෙන් පමණක් තහවුරු නොවේ.",
  },
  {
    label: "වාර්තාවේ මූලාරම්භය",
    title: "පරීක්ෂණාගාරයේ origin opinion",
    text: "සුදුසුකම් ලත් පරීක්ෂණාගාරයක් ගල පරීක්ෂා කර මතයක් දිය හැකියි. එය විශේෂඥ මතයකි; වාර්තාවේ සීමා සහ treatment කොටසත් කියවන්න.",
  },
];

export function CeylonClaimExplainer() {
  const [active, setActive] = useState(0);
  const claim = claims[active];

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-[#102b3b] text-white shadow-[0_24px_60px_-36px_rgba(16,43,59,0.7)]" aria-labelledby="ceylon-claim-title">
      <div className="grid md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative flex min-h-52 flex-col justify-between overflow-hidden bg-[radial-gradient(ellipse_at_35%_35%,rgba(93,176,184,0.36),transparent_52%),linear-gradient(145deg,#183f50,#102b3b)] p-6 md:p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Ceylon / Sri Lanka</span>
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 right-3 h-48 w-40 rotate-12 rounded-[45%_55%_60%_40%] border border-white/20 bg-gradient-to-br from-cyan-100/35 via-teal-300/10 to-blue-950/40 shadow-[inset_0_0_30px_rgba(255,255,255,0.2)]" />
          <p className="relative max-w-48 font-serif text-2xl leading-tight">එක නමක්.<br/>වෙනස් අර්ථ තුනක්.</p>
        </div>
        <div className="p-6 md:p-8">
          <h2 id="ceylon-claim-title" className="font-serif text-xl font-semibold">ඔබ දකින ප්‍රකාශය තෝරන්න</h2>
          <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="ප්‍රකාශ වර්ගය තෝරන්න">
            {claims.map((item, index) => (
              <button key={item.label} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className={`min-h-11 rounded-full border px-4 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${active === index ? "border-white bg-white text-[#102b3b]" : "border-white/25 bg-white/5 text-white hover:bg-white/10"}`}>
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-5 min-h-28 rounded-2xl border border-white/10 bg-white/[0.06] p-4" aria-live="polite">
            <p className="text-sm font-semibold text-[#b8e0df]">{claim.title}</p>
            <p className="mt-2 text-sm leading-7 text-white/85">{claim.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

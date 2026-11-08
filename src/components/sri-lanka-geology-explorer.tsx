"use client";

import { useState } from "react";
import Image from "next/image";
import { Layers3, MapPinned, Waves } from "lucide-react";

const regions = {
  ratnapura: {
    label: "රත්නපුර සහ කළු ගඟ ද්‍රෝණිය",
    note: "NGJA රත්නපුර දිස්ත්‍රික්කය තුළ රත්නපුර, කුරුවිට සහ පැල්මඩුල්ල ඇතුළු මැණික් ප්‍රදේශ සඳහන් කරයි. කළු ගඟ ද්‍රෝණියේ අවසාදිත ගැන විශ්වවිද්‍යාල පර්යේෂණයක් ද තිබේ. මෙය සෑම ඉඩමකම මැණික් ඇතැයි අදහස් නොකරයි.",
    source: "NGJA සහ පේරාදෙණිය විශ්වවිද්‍යාලයේ Kalu Ganga අධ්‍යයනය",
  },
  balangoda: {
    label: "බලංගොඩ සහ ඉහළ වලවේ ප්‍රදේශය",
    note: "NGJA බලංගොඩ සබරගමුවේ පැරණි මැණික් ප්‍රදේශ අතර සඳහන් කරයි. පේරාදෙණිය විශ්වවිද්‍යාලයේ 2022 අධ්‍යයනයක් ඉහළ වලවේ ද්‍රෝණියේ නියැදි සහ ප්‍රශ්නාවලි මත විභව ප්‍රදේශ සලකා බලයි. එය ස්ථාන-විශේෂ පර්යේෂණයක් මිස සම්පූර්ණ භූමි සිතියමක් නොවේ.",
    source: "NGJA සහ පේරාදෙණිය විශ්වවිද්‍යාලයේ ඉහළ වලවේ අධ්‍යයනය",
  },
} as const;

const depositTypes = {
  residual: {
    label: "Residual",
    sinhala: "මව් පාෂාණය අසල",
    detail: "කාලගුණික වෙනස්වීම් සහ දිරාපත්වීමෙන් පසු මැණික් ඛනිජ මූලාශ්‍ර පාෂාණය අසලම ඉතිරි විය හැකියි.",
    position: "left-1/2 top-[43%]",
  },
  eluvial: {
    label: "Eluvial",
    sinhala: "බෑවුමේ ප්‍රවාහිත",
    detail: "බෑවුම දිගේ කෙටි දුරක් ගමන් කළ ද්‍රව්‍යවල මැණික් ඛනිජ එකතු විය හැකියි.",
    position: "left-[68%] top-[60%]",
  },
  alluvial: {
    label: "Alluvial",
    sinhala: "ජලයෙන් ගෙනැවිත් තැන්පත් වූ",
    detail: "දිය පහර සහ ගංගා ඛනිජ කණිකා ගෙන ගොස් පහළ හෝ පැතලි ප්‍රදේශවල තැන්පත් කළ හැකියි.",
    position: "left-[82%] top-[79%]",
  },
} as const;

export function SriLankaGeologyExplorer() {
  const [region, setRegion] = useState<keyof typeof regions>("ratnapura");
  const [deposit, setDeposit] = useState<keyof typeof depositTypes>("alluvial");
  const currentRegion = regions[region];
  const currentDeposit = depositTypes[deposit];

  return (
    <section className="mt-10 overflow-hidden rounded-3xl border border-border bg-white shadow-sm" aria-labelledby="geology-explorer-title">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="p-5 md:p-7">
          <p className="gx-eyebrow"><span /> අන්තර්ක්‍රියාකාරී භූවිද්‍යා සටහන</p>
          <h2 id="geology-explorer-title" className="mt-3 font-serif text-2xl font-semibold">ප්‍රදේශය සහ තැන්පතු වර්ගය තෝරන්න</h2>
          <p className="mt-2 text-sm leading-6 text-muted">පහත රූපය සංකල්පමය නිදර්ශනයකි. එය මිනුම්-නිවැරදි භූගෝලීය සිතියමක් හෝ පතල් ස්ථාන මඟපෙන්වීමක් නොවේ.</p>

          <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="ප්‍රදේශය තෝරන්න">
            {Object.entries(regions).map(([key, item]) => <button key={key} type="button" aria-pressed={region === key} onClick={() => setRegion(key as keyof typeof regions)} className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${region === key ? "border-accent bg-accent text-white" : "border-border bg-white hover:border-accent/50"}`}>{item.label}</button>)}
          </div>

          <div className="mt-6 rounded-2xl bg-background p-4 md:p-5" aria-live="polite">
            <div className="flex items-start gap-3"><MapPinned size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" /><div><h3 className="font-semibold">{currentRegion.label}</h3><p className="mt-2 text-sm leading-6 text-muted">{currentRegion.note}</p><p className="mt-3 text-xs font-medium text-accent">සාක්ෂි සීමාව: {currentRegion.source}</p></div></div>
          </div>
        </div>

        <div className="relative min-h-[300px] overflow-hidden border-t border-border bg-[linear-gradient(180deg,#eff8f6_0%,#f8f5ec_52%,#e9e0ca_100%)] p-5 md:min-h-[380px] md:p-7 lg:border-l lg:border-t-0">
          <div className="absolute left-0 right-0 top-[15%] h-px bg-white/80" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-[31%] bg-[linear-gradient(180deg,#c9b18b,#a88e68)]" aria-hidden="true" />
          <figure className="gx-sri-photo-feature"><Image src="https://upload.wikimedia.org/wikipedia/commons/2/29/Sapphire_%28gem_gravel_mine%2C_Ratnapura_area%2C_Sri_Lanka%29_1_%2834857678855%29.jpg" alt="Blue corundum sapphire crystal attributed to gem gravels in the Ratnapura area" width={813} height={1161} sizes="(max-width: 1024px) 100vw, 45vw" /><figcaption><span>රත්නපුර ප්‍රදේශයට ආරෝපිත නිල් corundum ස්ඵටිකයක්</span><a href="https://commons.wikimedia.org/wiki/File:Sapphire_(gem_gravel_mine,_Ratnapura_area,_Sri_Lanka)_1_(34857678855).jpg" target="_blank" rel="noreferrer">James St. John · CC BY 2.0 · Commons</a></figcaption></figure>\n          <svg viewBox="0 0 640 340" className="absolute inset-0 h-full w-full" role="img" aria-labelledby="deposit-profile-title deposit-profile-desc" preserveAspectRatio="xMidYMid meet">
            <title id="deposit-profile-title">ද්විතීයික මැණික් තැන්පතු පිළිබඳ සංකල්පමය පැතිකඩ</title>
            <desc id="deposit-profile-desc">කඳු බෑවුමකින් ද්‍රව්‍ය පහළට ගමන් කර දිය පහර අසල තැන්පත් වීම දක්වන, පරිමාණයට නොවන නිදර්ශනයකි.</desc>
            <path d="M0 185 94 154l77-38 67 18 57 48 63 11 42 57 57 10 54 19 42 0v77H0z" fill="#789b82" />
            <path d="M0 218 94 187l77-37 67 18 57 48 63 11 42 57 57 10 54 19 42 0" fill="none" stroke="#4c735d" strokeWidth="4" />
            <path d="M384 244c49-15 57 18 103 1s70 7 115-1" fill="none" stroke="#4d9caf" strokeWidth="11" strokeLinecap="round" />
            <path d="M396 257c45-12 61 17 104 2s59 5 100-2" fill="none" stroke="#b4e2e0" strokeWidth="3" strokeLinecap="round" />
            <path d="M0 278c89-13 137 8 216-3s113 8 170 2 98 6 254-5v68H0z" fill="#c6ad83" />
            <path d="M0 304c91-12 142 8 218-2s114 7 170 2 101 5 252-4" fill="none" stroke="#9d815d" strokeWidth="4" strokeDasharray="9 7" />
            <g fill="#315a71" stroke="#eaf7f8" strokeWidth="2"><path d="m82 178 8-13 9 13-9 12z"/><path d="m186 176 8-13 9 13-9 12z"/><path d="m273 215 8-13 9 13-9 12z"/><path d="m425 274 8-13 9 13-9 12z"/><path d="m483 286 8-13 9 13-9 12z"/></g>
            <text x="82" y="69" fill="#284954" fontSize="20" fontFamily="sans-serif">මූලාශ්‍ර පාෂාණ</text>
            <text x="376" y="220" fill="#245c6c" fontSize="18" fontFamily="sans-serif">දිය පහර</text>
            <text x="356" y="245" fill="#553f2c" fontSize="18" fontFamily="sans-serif">අවසාදිත තට්ටුව</text>
            <path d="M148 86 173 127" stroke="#284954" strokeWidth="2" strokeDasharray="5 5" />
          </svg>
          <div className={`absolute ${currentDeposit.position} -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#183b54] p-2.5 text-white shadow-lg`} aria-hidden="true"><Layers3 size={18}/></div>
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/80 bg-white/90 p-4 shadow-sm backdrop-blur-sm md:bottom-6 md:left-6 md:right-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent"><Waves size={14} aria-hidden="true"/>{currentDeposit.label} · {currentDeposit.sinhala}</div>
            <p className="mt-1.5 text-sm leading-5 text-foreground">{currentDeposit.detail}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 border-t border-border p-4 md:px-7" role="group" aria-label="තැන්පතු වර්ගය තෝරන්න">
        {Object.entries(depositTypes).map(([key, item]) => <button key={key} type="button" aria-pressed={deposit === key} onClick={() => setDeposit(key as keyof typeof depositTypes)} className={`min-h-10 rounded-full border px-3.5 py-2 text-xs font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${deposit === key ? "border-teal bg-teal text-white" : "border-border bg-white hover:border-teal/50"}`}>{item.label} · {item.sinhala}</button>)}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Gem,
  HandCoins,
  Hammer,
  Landmark,
  PackageCheck,
  Store,
} from "lucide-react";

const stages = [
  {
    id: "source",
    label: "රළු ගල්",
    icon: Gem,
    title: "පතල් සහ රළු ද්‍රව්‍ය",
    text: "රළු ද්‍රව්‍යයේ හැඩය, බෙදීම්, ඇතුළත් වීම් සහ වර්ණය සැකසීමේ හැකියාවට බලපායි. රළු ගලක් පෙනෙන ආකාරයෙන් පමණක් එහි නිශ්චිත අනන්‍යතාව, ප්‍රතිකාර හෝ කැපූ පසු ප්‍රතිඵලය තහවුරු කළ නොහැකියි.",
  },
  {
    id: "trade",
    label: "වෙළෙඳාම",
    icon: HandCoins,
    title: "වෙළෙන්දන් සහ සම්බන්ධකයන්",
    text: "වෙළෙන්දන් ගල් තෝරාගැනීම, එකතු කිරීම හෝ ගැනුම්කරුවන් හා සැපයුම්කරුවන් සම්බන්ධ කිරීම සිදු කළ හැකියි. සෑම වෙළෙන්දෙකුගේම භූමිකාව, පරීක්ෂණ හැකියාව හෝ වගකීම එකම නොවන නිසා තමන්ට ඉදිරිපත් කරන ප්‍රකාශය පැහැදිලි කරගන්න.",
  },
  {
    id: "craft",
    label: "කැපීම",
    icon: Hammer,
    title: "කැපීම සහ ඔප දැමීම",
    text: "Lapidary ශිල්පීන් රළු ද්‍රව්‍යයෙන් සැලසුම් කළ හැඩයක් සහ නිමාවක් ලබාදීමට කටයුතු කරති. සැලසුමෙන් බර, ආලෝකය සහ පෙනුම අතර තේරීම් ඇති විය හැකි බැවින් වැඩ විෂය පථය, ඉලක්ක සහ අවදානම් කලින් එකඟ කරගන්න.",
  },
  {
    id: "assure",
    label: "පරීක්ෂාව",
    icon: Landmark,
    title: "පරීක්ෂණාගාර සහ සේවා",
    text: "විද්‍යාගාර වාර්තා ඒවායේ පරීක්ෂණ විෂය පථයට අදාළ නිගමන ඉදිරිපත් කරයි. වාර්තාවක වචන, සීමා සහ නිකුත් කළ ආයතනය කියවන්න; සෑම වාර්තාවක්ම මිල තක්සේරුවක් හෝ විකුණුම් සහතිකයක් නොවේ.",
  },
  {
    id: "market",
    label: "අලෙවිය",
    icon: Store,
    title: "අපනයන, නිෂ්පාදන සහ සිල්ලර වෙළෙඳාම",
    text: "කැපූ ගල් අපනයනකරුවන්, ස්වර්ණාභරණ නිෂ්පාදකයන් හෝ සිල්ලර වෙළෙන්දන් වෙත යා හැකියි. අපනයනයට අදාළ ක්‍රියාපටිපාටි සහ ලේඛන වත්මන් නිල උපදෙස් අනුව වෙනස් විය හැකියි.",
  },
];

export function SriLankaTradeJourney() {
  const [active, setActive] = useState(0);
  const current = stages[active];

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-[#10283d] text-white" aria-labelledby="trade-journey-title">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_45%,rgba(89,175,191,0.24),transparent_55%)] p-6 md:p-9">
          <figure className="gx-sri-photo-feature"><Image src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Gem_cutting_on_a_lap_wheel%2C_Gintota%2C_Sri_Lanka_%282026%29.jpg" alt="A gem cutter working at a lap wheel in Gintota, Sri Lanka" width={2160} height={3840} sizes="(max-width: 1024px) 100vw, 45vw" /><figcaption><span>ගල් කැපීමේ ශිල්පය · ගින්තොට</span><a href="https://commons.wikimedia.org/wiki/File:Gem_cutting_on_a_lap_wheel,_Gintota,_Sri_Lanka_(2026).jpg" target="_blank" rel="noreferrer">Ilyes Makria / Joalys · CC BY-SA 4.0 · Commons</a></figcaption></figure>\n          <svg viewBox="0 0 600 340" role="img" aria-labelledby="trade-svg-title trade-svg-desc" className="h-auto w-full max-w-xl">
            <title id="trade-svg-title">ශ්‍රී ලංකාවේ මැණික් කර්මාන්ත සම්බන්ධතා</title>
            <desc id="trade-svg-desc">රළු ගල්, වෙළෙඳාම, කැපීම, පරීක්ෂාව සහ අලෙවිය සම්බන්ධ කරන සංකල්පීය රූප සටහනකි. සෑම ගලක්ම එකම අනුපිළිවෙළක් අනුගමනය කරන බවක් නොපෙන්වයි.</desc>
            <defs>
              <linearGradient id="trade-stone" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#bdebf0"/><stop offset=".55" stopColor="#4082a1"/><stop offset="1" stopColor="#173954"/></linearGradient>
              <filter id="trade-glow"><feGaussianBlur stdDeviation="10"/></filter>
            </defs>
            <ellipse cx="300" cy="170" rx="180" ry="62" fill="#52bcc8" opacity=".12" filter="url(#trade-glow)" />
            <path d="M70 170H526" fill="none" stroke="#78c5ce" strokeWidth="3" strokeDasharray="7 8" opacity=".7" />
            {stages.map((stage, i) => {
              const x = 70 + i * 114;
              const selected = active === i;
              return (
                <g key={stage.id} onClick={() => setActive(i)} className="cursor-pointer" role="button" tabIndex={0} aria-label={`${i + 1}: ${stage.label}`} aria-pressed={selected} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setActive(i); } }}>
                  <circle cx={x} cy="170" r={selected ? 42 : 34} fill={selected ? "#f4d7a0" : "#1d405a"} stroke={selected ? "#fff2d3" : "#78c5ce"} strokeWidth="3" className="transition-all" />
                  {i === 0 ? <path d={`M${x-18} 165l12-17h18l12 17-9 20h-24z`} fill="url(#trade-stone)" stroke="#f3ffff" strokeWidth="1.4" /> :
                    i === 1 ? <path d={`M${x-15} 153h30v7h-30zm4 9h22v24h-22zm-6-16h34v5h-34`} fill="none" stroke={selected ? "#24415a" : "#e4f7f8"} strokeWidth="3" strokeLinejoin="round" /> :
                    i === 2 ? <path d={`M${x-15} 179l21-25 12 10-21 25h-12z`} fill="none" stroke={selected ? "#24415a" : "#e4f7f8"} strokeWidth="3" strokeLinejoin="round" /> :
                    i === 3 ? <path d={`M${x-16} 151h32v38h-32zm6 8h20m-20 7h20m-20 7h15`} fill="none" stroke={selected ? "#24415a" : "#e4f7f8"} strokeWidth="2.5" /> :
                    <path d={`M${x-17} 158h34v29h-34zm-5 0 5-9h34l5 9m-26 9h8v20`} fill="none" stroke={selected ? "#24415a" : "#e4f7f8"} strokeWidth="2.5" strokeLinejoin="round" />}
                  <text x={x} y="238" textAnchor="middle" fill={selected ? "#ffe3ad" : "#e1eff2"} fontSize="15" fontWeight={selected ? "700" : "500"}>{stage.label}</text>
                </g>
              );
            })}
            <text x="300" y="300" textAnchor="middle" fill="#bad4dd" fontSize="12">සංකල්පීය කර්මාන්ත සටහන · එකම අනුපිළිවෙළක් සහතික නොවේ</text>
          </svg>
          <span className="absolute bottom-3 right-4 rounded-full border border-white/20 bg-[#10283d]/80 px-3 py-1 text-[0.68rem] text-white/75">මුල් රූප සටහන · ඡායාරූපයක් නොවේ</span>
        </div>

        <div className="flex flex-col justify-center p-6 md:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a8dfe4]">තෝරන්න සහ කියවන්න</p>
          <h2 id="trade-journey-title" className="mt-2 font-serif text-2xl font-semibold leading-tight md:text-3xl">කර්මාන්තයේ එක් අදියරක් තෝරන්න</h2>
          <div className="mt-5 flex flex-wrap gap-2" aria-label="කර්මාන්ත අදියර තෝරන්න">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <button key={stage.id} type="button" aria-pressed={active === i} onClick={() => setActive(i)} className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${active === i ? "border-[#f4d7a0] bg-[#f4d7a0] text-[#18334a]" : "border-white/20 bg-white/5 text-white hover:bg-white/10"}`}>
                  <Icon size={15} aria-hidden="true" /> {stage.label}
                </button>
              );
            })}
          </div>
          <div className="mt-6 min-h-40 rounded-2xl border border-white/15 bg-white/[0.06] p-5" aria-live="polite" aria-atomic="true">
            <div className="flex items-center gap-2 text-[#f4d7a0]"><span className="text-xs font-semibold">අදියර {active + 1} / {stages.length}</span><ArrowRight size={15} aria-hidden="true" /></div>
            <h3 className="mt-2 font-serif text-xl font-semibold">{current.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/80">{current.text}</p>
          </div>
          <div className="mt-4 flex items-start gap-3 rounded-xl bg-[#f4d7a0]/10 p-4 text-sm leading-6 text-white/80">
            <PackageCheck size={18} className="mt-0.5 shrink-0 text-[#f4d7a0]" aria-hidden="true" />
            <p>කර්මාන්ත සම්බන්ධතාවක් පෙන්වීමෙන් කිසියම් ගලක මූලාරම්භය, ගුණාත්මකභාවය, වටිනාකම හෝ ගනුදෙනුවේ ආරක්ෂාව තහවුරු නොවේ.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

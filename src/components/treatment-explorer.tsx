"use client";

import { useState } from "react";
import { ArrowUpRight, Check, CircleHelp, ShieldCheck, Sparkles } from "lucide-react";
import type { TreatmentGuide } from "@/data/treatments";

const pigments = ["#c88b51", "#6d94b7", "#d16a83", "#b98bba", "#71aa9a", "#d3a74f", "#8499bc"];

export function TreatmentExplorer({ guides }: { guides: TreatmentGuide[] }) {
  const [selected, setSelected] = useState(0);
  const guide = guides[selected];
  const color = pigments[selected % pigments.length];
  return (
    <section className="mt-12 overflow-hidden rounded-[2rem] border border-[#26374b] bg-[#101b2a] text-white shadow-[0_24px_80px_-36px_rgba(8,18,32,.75)]" aria-label="Interactive gemstone treatment explorer">
      <div className="grid lg:grid-cols-[.85fr_1.15fr]">
        <div className="p-6 sm:p-9 lg:p-11">
          <p className="flex items-center gap-2 text-[0.68rem] font-bold tracking-[.22em] text-[#d8b779]"><Sparkles size={14}/> TREATMENT FIELD GUIDE</p>
          <h2 className="mt-4 max-w-lg font-serif text-3xl leading-tight sm:text-4xl">One stone can hold a more complex story.</h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">Choose a treatment to explore its broad mechanism and the questions worth asking. This illustration is conceptual, not a diagnostic test.</p>
          <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-2">
            {guides.map((item, index) => <button key={item.slug} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index} className={`min-h-11 rounded-xl border px-3 py-2.5 text-left text-sm transition ${selected === index ? "border-[#d8b779] bg-[#d8b779]/15 text-white" : "border-white/10 bg-white/[.03] text-white/65 hover:border-white/30 hover:text-white"}`}>{item.title}</button>)}
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[.04] p-5" aria-live="polite">
            <div className="text-[0.65rem] font-bold tracking-[.18em] text-[#d8b779]">{guide.eyebrow}</div>
            <h3 className="mt-2 font-serif text-2xl">{guide.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/70">{guide.summary}</p>
          </div>
        </div>
        <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden border-t border-white/10 bg-[radial-gradient(ellipse_at_50%_42%,rgba(99,126,159,.22),transparent_54%)] p-6 sm:min-h-[450px] lg:border-l lg:border-t-0">
          <div className="absolute left-6 top-6 rounded-full border border-white/10 px-3 py-1.5 text-[0.62rem] tracking-[.14em] text-white/55">CONCEPTUAL CUTAWAY</div>
          <svg key={guide.slug} viewBox="0 0 420 360" role="img" aria-label={`Conceptual illustration representing ${guide.title}; not a diagnostic depiction`} className="w-full max-w-[410px] overflow-visible animate-[fade-in_.45s_ease-out]">
            <defs><linearGradient id="stone" x1=".12" x2=".9" y1=".05" y2=".95"><stop stopColor={color} stopOpacity=".97"/><stop offset=".52" stopColor={color} stopOpacity=".64"/><stop offset="1" stopColor="#17283e"/></linearGradient><radialGradient id="glow"><stop stopColor={color} stopOpacity=".35"/><stop offset="1" stopColor={color} stopOpacity="0"/></radialGradient></defs>
            <ellipse cx="210" cy="188" rx="153" ry="135" fill="url(#glow)"/>
            <path d="M210 48 337 117 315 259 210 315 105 259 83 117Z" fill="url(#stone)" stroke="#f0e1c6" strokeOpacity=".72" strokeWidth="2"/>
            <path d="m83 117 127 24 127-24M105 259l105-118 105 118M210 48v93m0 174V141m-127-24 127 74 127-74m-232 142 105-68 105 68" fill="none" stroke="#fff" strokeOpacity=".57" strokeWidth="1.2"/>
            <path d="M210 141 271 178 210 209 149 178Z" fill="#fff" fillOpacity=".24" stroke="#fff" strokeOpacity=".45"/>
            {selected === 1 || selected === 2 || selected === 3 || selected === 5 ? <g fill="#f3ddae" opacity=".9"><circle cx="155" cy="201" r="4"/><circle cx="165" cy="211" r="2.5"/><circle cx="151" cy="219" r="2"/><path d="m140 197 28 35" stroke="#f3ddae" strokeWidth="2" opacity=".55"/></g> : null}
            <circle cx="210" cy="180" r="8" fill="#fff" fillOpacity=".8"><animate attributeName="r" values="7;11;7" dur="3s" repeatCount="indefinite"/></circle>
            <text x="210" y="345" textAnchor="middle" fill="#fff" fillOpacity=".56" fontSize="11" letterSpacing="2">ILLUSTRATION · NOT IDENTIFICATION</text>
          </svg>
          <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3 sm:left-10 sm:right-10">
            <div className="rounded-xl border border-white/10 bg-[#101b2a]/75 p-3 backdrop-blur"><p className="text-[.6rem] uppercase tracking-[.16em] text-white/45">Treatment family</p><p className="mt-1 text-sm font-medium">{guide.kind}</p></div>
            <div className="rounded-xl border border-white/10 bg-[#101b2a]/75 p-3 backdrop-blur"><p className="text-[.6rem] uppercase tracking-[.16em] text-white/45">What to prioritize</p><p className="mt-1 text-sm font-medium">Written disclosure</p></div>
          </div>
        </div>
      </div>
      <div className="grid gap-px border-t border-white/10 bg-white/10 md:grid-cols-3">
        {[{icon: CircleHelp,title:"How it works",text:guide.mechanism},{icon: ShieldCheck,title:"Stability & care",text:`${guide.stability} ${guide.care}`},{icon: Check,title:"Questions to ask",text:guide.disclosure}].map(({icon:Icon,title,text})=><article key={title} className="bg-[#101b2a] p-6 sm:p-8"><div className="flex items-center gap-2 text-[#d8b779]"><Icon size={16}/><h3 className="text-xs font-bold uppercase tracking-[.16em]">{title}</h3></div><p className="mt-3 text-sm leading-6 text-white/65">{text}</p></article>)}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-6 py-4 sm:px-9"><p className="text-xs text-white/45">Educational overview · Material and process-specific assessment requires a qualified laboratory.</p><a href={guide.source} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-xs font-semibold text-white/80 transition hover:border-[#d8b779] hover:text-white">{guide.sourceLabel}<ArrowUpRight size={14}/></a></div>
    </section>
  );
}

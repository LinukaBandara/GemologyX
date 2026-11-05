"use client";

import { useMemo, useState } from "react";
import { ArrowLeftRight, Sparkles } from "lucide-react";
import type { Gemstone } from "@/data/gemstones";
import { GemstoneIllustration } from "@/components/gemstone-illustration";

export function GemstoneComparison({ current, gemstones }: { current: Gemstone; gemstones: Gemstone[] }) {
  const choices = useMemo(() => gemstones.filter((gem) => gem.slug !== current.slug).sort((a, b) => a.name.localeCompare(b.name)), [current.slug, gemstones]);
  const initial = choices.find((gem) => gem.mineralFamily === current.mineralFamily) ?? choices[0];
  const [comparedSlug, setComparedSlug] = useState(initial?.slug ?? "");
  const compared = choices.find((gem) => gem.slug === comparedSlug) ?? initial;
  if (!compared) return null;

  const facts = [
    { label: "Mineral family", first: current.mineralFamily, second: compared.mineralFamily },
    { label: "Mohs hardness", first: current.hardness, second: compared.hardness },
    { label: "Colour range", first: current.colors.join(", "), second: compared.colors.join(", ") },
    { label: "Common treatments", first: current.commonTreatments?.join(", ") ?? "No routine treatment listed", second: compared.commonTreatments?.join(", ") ?? "No routine treatment listed" },
    { label: "Transparency", first: current.transparency ?? "Not specified", second: compared.transparency ?? "Not specified" },
  ];

  return (
    <section aria-labelledby="gem-comparison-heading" className="mt-9 overflow-hidden rounded-[1.75rem] bg-[#112e3d] text-white shadow-[0_20px_55px_rgba(17,46,61,0.16)] sm:mt-12 sm:rounded-[2rem]">
      <div className="grid gap-5 border-b border-white/10 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1fr)_minmax(250px,0.72fr)] lg:items-end lg:px-10">
        <div><div className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#e7c98f]"><Sparkles size={13} /> Interactive gem studio</div><h2 id="gem-comparison-heading" className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">Compare {current.name}</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">Explore how properties differ across materials. These reference facts support learning; they do not identify or appraise a particular stone.</p></div>
        <label className="grid gap-2 text-xs font-semibold text-white/80">Choose a comparison gemstone
          <select value={compared.slug} onChange={(event) => setComparedSlug(event.target.value)} className="min-h-12 w-full rounded-xl border border-white/20 bg-[#1b3d4d] px-4 text-sm text-white outline-none transition focus-visible:ring-2 focus-visible:ring-[#e7c98f]">
            {choices.map((gem) => <option key={gem.slug} value={gem.slug} className="bg-white text-slate-900">{gem.name}</option>)}
          </select>
        </label>
      </div>
      <div className="grid md:grid-cols-[1fr_48px_1fr]">
        {[current, compared].map((gem, index) => <div key={gem.slug} className={`min-w-0 px-5 pb-5 sm:px-8 sm:pb-7 ${index === 1 ? "border-t border-white/10 md:border-l md:border-t-0" : ""}`}>
          <div className="flex min-h-[108px] items-center gap-3 border-b border-white/10 py-3 sm:min-h-[128px] sm:gap-5 sm:py-4">
            <div className="flex h-20 w-24 shrink-0 items-center justify-center rounded-2xl bg-white/5 sm:h-24 sm:w-28"><GemstoneIllustration gem={gem} className="h-16 w-20 sm:h-20 sm:w-24" /></div>
            <div className="min-w-0"><p className="text-[0.62rem] font-bold uppercase tracking-[0.13em] text-[#e7c98f]">{index === 0 ? "Selected profile" : "Compared profile"}</p><p className="mt-1 font-serif text-xl font-semibold sm:text-2xl">{gem.name}</p><p className="mt-1 text-xs text-white/55">{gem.description}</p></div>
          </div>
          <dl className="divide-y divide-white/10">{facts.map((fact) => <div key={fact.label} className="grid grid-cols-[minmax(88px,0.7fr)_minmax(0,1.3fr)] gap-3 py-3 sm:grid-cols-[minmax(112px,0.75fr)_minmax(0,1.25fr)]"><dt className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-white/50">{fact.label}</dt><dd className="break-words text-xs leading-5 text-white/90">{index === 0 ? fact.first : fact.second}</dd></div>)}</dl>
        </div>)}
        <div aria-hidden="true" className="hidden items-center justify-center md:flex"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#173d52] text-[#e7c98f]"><ArrowLeftRight size={16} /></span></div>
      </div>
      <p className="border-t border-white/10 px-5 py-3 text-[0.68rem] leading-5 text-white/50 sm:px-8">Gemstone properties can vary with composition, structure, treatments and specimen condition. Ask an independent gemologist about an individual stone.</p>
    </section>
  );
}

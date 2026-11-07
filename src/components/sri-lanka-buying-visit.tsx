"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Check, ClipboardCheck, Eye, MapPin, NotebookPen, RotateCcw } from "lucide-react";

const stages = [
  {
    id: "prepare",
    title: "යන්න පෙර සූදානම් වන්න",
    short: "සූදානම",
    icon: MapPin,
    items: [
      "මිලදී ගන්නේ කුමක් සඳහාද සහ ඔබගේ උපරිම වැය සීමාව කුමක්ද ලියාගන්න.",
      "Natural, synthetic, treatment සහ origin opinion වැනි වචන ගැන මූලිකව කියවන්න.",
      "සසඳන ගල් කිහිපයක් බලන්නට කාලය තබාගන්න; වහාම තීරණයක් ගත යුතු නැහැ.",
    ],
  },
  {
    id: "examine",
    title: "ගල සහ ප්‍රකාශ පරීක්ෂා කරන්න",
    short: "පරීක්ෂාව",
    icon: Eye,
    items: [
      "ගලේ වර්තමාන අනන්‍යතාව, ප්‍රතිකාරය, බර සහ තත්ත්වය ගැන පැහැදිලිව අසන්න.",
      "වාර්තාවක් තිබේ නම් එහි නිකුත්කරු, විෂය පථය සහ ගලේ බර/විස්තර ගලට ගැළපේද බලන්න.",
      "NGJA වාර්තාවක් නම් නිල Certificate Verification සේවාවෙන් අංකය පරීක්ෂා කරන්න; එය මිල තක්සේරුවක් නොවේ.",
      "පෙනුම, පින්තූරයක් හෝ වෙළෙන්දාගේ කතාවෙන් පමණක් අනන්‍යතාව හෝ origin තීරණය නොකරන්න.",
    ],
  },
  {
    id: "record",
    title: "ගෙවීමට පෙර එකඟතා ලියාගන්න",
    short: "ලිඛිත එකඟතා",
    icon: NotebookPen,
    items: [
      "රිසිට්පත/ඉන්වොයිසියට ගල හඳුනාගැනීමට ප්‍රමාණවත් විස්තර ඇතුළත් බව බලන්න.",
      "මුළු මිල, මුදල් ඒකකය, ගෙවීම, ආපසු භාරදීම සහ refund කොන්දේසි කලින් පැහැදිලි කරගන්න.",
      "ස්වාධීන පරීක්ෂාවක් අවශ්‍ය නම් කවුරුන් එය සකස් කරන්නේද සහ එතෙක් ගෙවීම/භාරදීම කෙසේද එකඟ වන්න.",
      "ප්‍රධාන කරුණක් ලිඛිත නැත්නම් හෝ ඔබට තේරෙන්නේ නැත්නම් තීරණය පසුවට කල් දමන්න.",
    ],
  },
];

export function SriLankaBuyingVisit() {
  const [active, setActive] = useState(0);
  const [checked, setChecked] = useState<Record<string, boolean[]>>({});
  const stage = stages[active];
  const stageChecks = checked[stage.id] ?? [];
  const doneCount = useMemo(
    () => Object.values(checked).reduce((sum, values) => sum + values.filter(Boolean).length, 0),
    [checked],
  );
  const allCount = stages.reduce((sum, item) => sum + item.items.length, 0);

  function toggleItem(index: number) {
    setChecked((current) => {
      const values = [...(current[stage.id] ?? [])];
      values[index] = !values[index];
      return { ...current, [stage.id]: values };
    });
  }

  function reset() {
    setChecked({});
    setActive(0);
  }

  return (
    <section aria-labelledby="buying-visit-title" className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
      <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
        <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_40%,rgba(86,160,174,0.20),transparent_56%),linear-gradient(145deg,#edf6f5,#f6f2e9)] p-7">
          <figure className="gx-sri-photo-feature gx-sri-photo-feature-compact"><Image src="/images/homepage/05_gem_inspection_sapphire_in_tweezers.png" alt="A sapphire being examined with gemstone tweezers" width={1200} height={900} sizes="(max-width: 1024px) 100vw, 40vw" /><figcaption><span>මැණික් ගලක් පරීක්ෂා කිරීම</span><span>GemologyX editorial photography</span></figcaption></figure>\n          <svg viewBox="0 0 360 270" role="img" aria-labelledby="visit-svg-title visit-svg-desc" className="h-auto w-full max-w-sm">
            <title id="visit-svg-title">මැණික් මිලදී ගැනීමේ සූදානම් ලැයිස්තුව</title>
            <desc id="visit-svg-desc">ගලක්, ලේඛන පත්‍රයක් සහ පරීක්ෂා කළ යුතු කරුණු පෙන්වන මුල් රූපමය නිදර්ශනයකි.</desc>
            <defs>
              <linearGradient id="visit-gem" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#d1f7f4"/><stop offset=".5" stopColor="#3788a0"/><stop offset="1" stopColor="#183a5b"/></linearGradient>
              <filter id="visit-shadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="11" stdDeviation="9" floodColor="#173e54" floodOpacity=".18"/></filter>
            </defs>
            <g filter="url(#visit-shadow)" transform="rotate(-5 170 140)">
              <rect x="68" y="34" width="222" height="205" rx="19" fill="#fff" stroke="#d9e4e3" strokeWidth="2" />
              <rect x="136" y="23" width="86" height="24" rx="10" fill="#173e54" />
              <circle cx="156" cy="35" r="4" fill="#dcebea"/><circle cx="170" cy="35" r="4" fill="#dcebea"/><circle cx="184" cy="35" r="4" fill="#dcebea"/>
              <path d="M95 75l12-17h20l12 17-10 22h-24z" fill="url(#visit-gem)" stroke="#316581" strokeWidth="2" />
              <path d="m95 75 22 6 22-6m-32 22 10-16 10 16m-10-16v-23" fill="none" stroke="#dffcff" strokeOpacity=".8" strokeWidth="1.5" />
              <path d="M155 65h105M155 80h79M98 122h162M98 143h150M98 164h160" stroke="#d7e1e2" strokeWidth="5" strokeLinecap="round" />
              <circle cx="106" cy="191" r="9" fill="#e6f4f2" stroke="#529b96" strokeWidth="2"/><path d="m102 191 3 3 6-7" fill="none" stroke="#33776f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M126 191h124" stroke="#b8cdcc" strokeWidth="5" strokeLinecap="round" />
              <circle cx="106" cy="215" r="9" fill="#fbf0d8" stroke="#c79d58" strokeWidth="2"/><path d="M126 215h95" stroke="#b8cdcc" strokeWidth="5" strokeLinecap="round" />
            </g>
            <circle cx="282" cy="64" r="22" fill="#d4eceb" opacity=".7"/><path d="M275 64h14m-7-7v14" stroke="#2b6976" strokeWidth="2.5" strokeLinecap="round"/>
            <text x="180" y="260" textAnchor="middle" fill="#647b82" fontSize="11">මුල් SVG නිදර්ශනය · සැබෑ මැණික් ඡායාරූපයක් නොවේ</text>
          </svg>
        </div>

        <div className="p-5 md:p-7 lg:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="gx-eyebrow"><span /> අන්තර්ක්‍රියාකාරී සැලසුම්කරු</p>
              <h2 id="buying-visit-title" className="mt-2 font-serif text-2xl font-semibold leading-tight">මිලදී ගැනීමේ ගමන කොටස් තුනකින්</h2>
              <p className="mt-2 text-sm leading-6 text-muted">ඔබ තෝරාගන්නා ලකුණු මෙම බ්‍රවුසර පිටුවේ පමණයි; කිසිදු තොරතුරක් සුරැකීමක් හෝ යැවීමක් සිදු නොවේ.</p>
            </div>
            <button type="button" onClick={reset} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-3 py-2 text-xs font-medium text-muted hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              <RotateCcw size={14} aria-hidden="true" /> නැවත ආරම්භ කරන්න
            </button>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2" role="group" aria-label="මිලදී ගැනීමේ අදියර තෝරන්න">
            {stages.map((item, index) => {
              const Icon = item.icon;
              const selected = active === index;
              return (
                <button key={item.id} type="button" onClick={() => setActive(index)} aria-pressed={selected} className={`flex min-h-14 items-center justify-center gap-2 rounded-xl border px-2 py-2 text-center text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm ${selected ? "border-accent bg-accent text-white" : "border-border bg-background text-foreground hover:border-accent/50"}`}>
                  <Icon size={15} aria-hidden="true" /> {item.short}
                </button>
              );
            })}
          </div>

          <div className="mt-5 flex items-center gap-3" role="progressbar" aria-label="ලකුණු කළ පරීක්ෂණ කරුණු" aria-valuemin={0} aria-valuemax={allCount} aria-valuenow={doneCount} aria-valuetext={`${doneCount} / ${allCount}`}>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-background" aria-hidden="true"><div className="h-full rounded-full bg-teal transition-all" style={{ width: `${(doneCount / allCount) * 100}%` }} /></div>
            <span className="text-xs tabular-nums text-muted">{doneCount}/{allCount}</span>
          </div>

          <div className="mt-3 rounded-2xl border border-border bg-background/70 p-4 md:p-5" aria-live="polite" aria-atomic="true">
            <div className="flex items-center gap-2"><ClipboardCheck size={17} className="text-accent" aria-hidden="true" /><h3 className="font-serif text-lg font-semibold">{stage.title}</h3></div>
            <ul className="mt-3 space-y-2.5">
              {stage.items.map((item, index) => {
                const isChecked = Boolean(stageChecks[index]);
                const inputId = `visit-${stage.id}-${index}`;
                return (
                  <li key={inputId}>
                    <label htmlFor={inputId} className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm leading-6 transition-colors ${isChecked ? "border-teal/30 bg-teal-soft/70" : "border-transparent bg-white hover:border-border"}`}>
                      <input id={inputId} type="checkbox" checked={isChecked} onChange={() => toggleItem(index)} className="mt-1 h-4 w-4 shrink-0 accent-teal" />
                      <span className="flex-1">{item}</span>
                      {isChecked && <Check size={16} className="mt-1 shrink-0 text-teal" aria-hidden="true" />}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="mt-3 text-xs leading-5 text-muted">මෙය තීරණයක් හෝ මිල තක්සේරුවක් ලබාදෙන මෙවලමක් නොවේ. සැකයක් තිබේ නම් ගනුදෙනුව කල් දමා සුදුසු ස්වාධීන විශේෂඥ උපදෙස් ගන්න.</p>
        </div>
      </div>
    </section>
  );
}

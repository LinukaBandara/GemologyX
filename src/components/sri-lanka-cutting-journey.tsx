"use client";

import { useState } from "react";
import { ArrowRight, BadgeCheck, Gem, GraduationCap, Handshake, Sparkles } from "lucide-react";

const steps = [
  {
    id: "heritage",
    label: "කලා ශිල්පය",
    icon: Gem,
    title: "Hanaporuwa සිට faceting දක්වා",
    body: "NGJA හි faceting industry සටහන ශ්‍රී ලංකාවේ සම්ප්‍රදායික Hanaporuwa හෝ Bow Cutting ක්‍රමය ගැන සඳහන් කරයි. එම පිටුවම පසුව යාන්ත්‍රික සහ computer-assisted precision තාක්ෂණය කර්මාන්තයට පැමිණි ආකාරය විස්තර කරයි. මේවා ඉතිහාසමය පසුබිම්; අද සෑම cutter කෙනෙකුගේම උපකරණ හෝ ක්‍රමය එකම බවක් නොකියයි.",
    note: "පදයක් හෝ සම්ප්‍රදායක් දැනගැනීමෙන් පමණක් ගලක ගුණාත්මකභාවය, මූලාරම්භය හෝ මිල තහවුරු වන්නේ නැහැ.",
  },
  {
    id: "services",
    label: "කැපුම් සේවා",
    icon: Sparkles,
    title: "විවිධ අවශ්‍යතා සඳහා කැපුම්",
    body: "NGJA එහි කර්මාන්ත විස්තරයේ free-size, calibrated සහ precision cutting යන සේවා වර්ග සඳහන් කරයි. මේවා වෙළෙඳපොළ සහ සැකසුම් අවශ්‍යතා පිළිබඳ පුළුල් නම්ය; එක් එක් වැඩමුළුව ලබාදෙන service, tolerance හෝ quality standard එකම බවක් නොවේ.",
    note: "ඉලක්කගත මාන, symmetry, finish, deadline සහ පරීක්ෂණ කොන්දේසි ලිඛිතව තහවුරු කරගන්න.",
  },
  {
    id: "training",
    label: "පුහුණුව",
    icon: GraduationCap,
    title: "GJRTI පුහුණු මාර්ග බලන්න",
    body: "Gem & Jewellery Research and Training Institute (GJRTI) gem cutting and polishing ඇතුළු පුහුණු පාඨමාලා සහ NVQ-සම්බන්ධ වැඩසටහන් ප්‍රකාශ කරයි. එහි පාඨමාලා පිටුවේ beginner short courses සහ වෘත්තීය පුහුණුවද සඳහන් වේ. ඇතුළත් වීමේ කොන්දේසි, මධ්‍යස්ථානය, දින සහ ගාස්තු වෙනස් විය හැකි නිසා අයදුම් කිරීමට පෙර ආයතනයෙන් තහවුරු කරන්න.",
    note: "පුහුණුවක් තෝරන විට ප්‍රායෝගික පුහුණුව, උපකරණ, ආරක්ෂාව, NVQ ප්‍රතීතනය සහ වත්මන් intake විමසන්න.",
  },
  {
    id: "commission",
    label: "වැඩ භාරදීම",
    icon: Handshake,
    title: "ගලක් කැපීමට භාරදීමට පෙර එකඟතා සටහන් කරන්න",
    body: "රළු ගලක අවසාන බර හෝ පෙනුම පූර්වයෙන් සහතික කළ නොහැකියි. ඇරඹුම් බර, ගලේ පැහැදිලි ඡායාරූප, බලාපොරොත්තු වන හැඩය, estimate පරාසය, කාලය, කැපීමේදී හානි වුවහොත් වගකීම සහ ඉතිරි කැබලි ආපසු ලබාදීම ගැන cutter සමඟ එකඟ වී ලිඛිතව තබාගන්න.",
    note: "මෙය ගනුදෙනු සැලසුම් checklist එකකි; yield, වටිනාකම හෝ ආරක්ෂිත ප්‍රතිඵල සහතිකයක් නොවේ.",
  },
] as const;

export function SriLankaCuttingJourney() {
  const [activeId, setActiveId] = useState<(typeof steps)[number]["id"]>(steps[0].id);
  const active = steps.find((step) => step.id === activeId) ?? steps[0];
  const activeIndex = steps.findIndex((step) => step.id === active.id);

  return (
    <section className="mt-10 overflow-hidden rounded-3xl border border-border bg-white shadow-sm" aria-labelledby="cutting-journey-title">
      <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative flex min-h-[270px] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_42%,rgba(108,170,177,0.28),transparent_53%),linear-gradient(145deg,#f5f7f2,#e9f1ef_55%,#f5f0e5)] p-6 md:min-h-[330px]">
          <div className="absolute left-5 top-5 rounded-full border border-white/80 bg-white/80 px-3 py-1.5 text-[0.65rem] font-semibold tracking-wide text-accent">සංකල්පමය කැපුම් ගමන</div>
          <svg viewBox="0 0 520 300" className="relative w-full max-w-[500px]" role="img" aria-labelledby="cutting-svg-title cutting-svg-desc">
            <title id="cutting-svg-title">රළු ගලකින් නිම කළ faceted ගලක් දක්වා සංකල්පමය රූපය</title>
            <desc id="cutting-svg-desc">රළු sapphire ආකාරයක්, සැලසුම් කිරීම, කැපුම් මැදියම සහ අවසාන faceted මැණික් හැඩය සම්බන්ධ කරන මුල් SVG රූපයක්. මෙය නිශ්චිත උපදෙස් හෝ සැබෑ specimen ඡායාරූපයක් නොවේ.</desc>
            <defs>
              <linearGradient id="cut-rough" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#6ea8ac"/><stop offset=".55" stopColor="#356c83"/><stop offset="1" stopColor="#1b3757"/></linearGradient>
              <linearGradient id="cut-finished" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d5f2f0"/><stop offset=".34" stopColor="#66afbd"/><stop offset="1" stopColor="#173553"/></linearGradient>
            </defs>
            <path d="M75 152h370" stroke="#8eaaa6" strokeWidth="3" strokeDasharray="7 8" />
            <path d="m64 108 28-30 38 9 21 32-18 62-51 15-31-35z" fill="url(#cut-rough)" stroke="#214a60" strokeWidth="3" />
            <path d="m68 115 27-28 30 30-43 40z" fill="#d7f3ed" opacity=".45" />
            <circle cx="260" cy="147" r="48" fill="#fff" fillOpacity=".72" stroke="#87aaa5" strokeWidth="2" />
            <path d="m260 118 24 14v29l-24 15-24-15v-29z" fill="none" stroke="#245872" strokeWidth="3" />
            <path d="m236 132 24 4 24-4m-24-14v58m-24-29 24 29 24-29" fill="none" stroke="#77aeb5" strokeWidth="2" />
            <path d="M300 147h54" stroke="#8eaaa6" strokeWidth="2" />
            <path d="m394 102 27 15 18 37-21 43-45-2-22-39 15-41z" fill="url(#cut-finished)" stroke="#214a60" strokeWidth="3" />
            <path d="m366 115 25 9 28-7m-43 39 42 0m-27-32 15 32 16-32m-44 0 13 47" fill="none" stroke="#e8ffff" strokeWidth="2" strokeOpacity=".85" />
            <g fill="#214a60" fontFamily="sans-serif" fontSize="14" textAnchor="middle"><text x="99" y="245">රළු ගල</text><text x="260" y="245">සැලසුම හා කාර්යය</text><text x="396" y="245">නිම කළ කැපුම</text></g>
            <g fill="#b99343"><circle cx="99" cy="222" r="5"/><circle cx="260" cy="222" r="5"/><circle cx="396" cy="222" r="5"/></g>
          </svg>
          <div className="absolute bottom-3 left-4 right-4 text-center text-[0.63rem] text-muted">මුල් අධ්‍යාපනික SVG නිදර්ශනය · සැබෑ cutter/workshop ඡායාරූපයක් නොවේ</div>
        </div>

        <div className="p-5 md:p-7">
          <p className="gx-eyebrow"><span /> ශ්‍රී ලංකාවේ lapidary මාර්ගෝපදේශය</p>
          <h2 id="cutting-journey-title" className="mt-3 font-serif text-2xl font-semibold md:text-3xl">කැපුම් ගමනේ අදියරක් තෝරන්න</h2>
          <div className="mt-5 grid grid-cols-2 gap-2" role="group" aria-label="කැපුම් ගමනේ අදියර තෝරන්න">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return <button key={step.id} type="button" onClick={() => setActiveId(step.id)} aria-pressed={activeId === step.id} className={`flex min-h-11 items-center gap-2 rounded-xl border px-3 py-2 text-left text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm ${activeId === step.id ? "border-accent bg-accent text-white" : "border-border bg-white hover:border-accent/50"}`}><Icon size={15} aria-hidden="true"/><span>{String(index + 1).padStart(2, "0")} · {step.label}</span></button>;
            })}
          </div>
          <div className="mt-5 rounded-2xl bg-background p-4 md:p-5" aria-live="polite">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent"><BadgeCheck size={15} aria-hidden="true"/>අදියර {activeIndex + 1} / {steps.length}</div>
            <h3 className="mt-2 font-serif text-xl font-semibold">{active.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{active.body}</p>
            <p className="mt-4 flex gap-2 rounded-xl border border-gold/20 bg-gold-soft/50 p-3 text-sm leading-6 text-foreground"><ArrowRight size={15} className="mt-1 shrink-0 text-gold" aria-hidden="true"/>{active.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

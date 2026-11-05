"use client";

import { useState } from "react";
import { ArrowRight, FileSearch, Landmark, MapPinned, ShieldCheck } from "lucide-react";

const landTypes = [
  {
    id: "private",
    label: "පුද්ගලික / හවුල් අයිතිය",
    detail:
      "NGJA පළ කර ඇති ක්‍රියාවලිය හිමිකාරිත්වයේ ස්වභාවය අනුව ඉඩම් අයිතිය සනාථ කරන ලේඛන සඳහන් කරයි. ඔබගේ නිශ්චිත ඔප්පු, සම-අයිතිකරුවන්ගේ අනුමැතිය සහ සිතියම් ගැන ලිඛිත වත්මන් ලැයිස්තුවක් ඉල්ලන්න.",
  },
  {
    id: "paddy",
    label: "කුඹුරු ඉඩම",
    detail:
      "NGJA හි පළ කර ඇති පිටුව කුඹුරු ඉඩමක් සඳහා Department of Agrarian Development වෙතින් නිර්දේශයක් සඳහන් කරයි. එය ඔබගේ ඉඩමට සහ යෝජිත කාර්යයට අදාළදැයි NGJA සහ එම දෙපාර්තමේන්තුවෙන් තහවුරු කරන්න.",
  },
  {
    id: "temple",
    label: "විහාරස්ථානයකට අයත් ඉඩම",
    detail:
      "NGJA පිටුව විහාරස්ථානයකට අයත් ඉඩමක් සඳහා Department of Buddhist Affairs නිර්දේශයක් සඳහන් කරයි. හිමිකාරිත්වය සහ අවශ්‍ය පාර්ශ්වවල අනුමැති නිශ්චිතව ලේඛනගත කරගන්න.",
  },
  {
    id: "grant",
    label: "රජයේ ප්‍රදානය / LDO",
    detail:
      "NGJA හි පළ කළ ක්‍රියාවලිය රජයේ ප්‍රදානයක් හෝ Land Development Ordinance යටතේ ලැබුණු ඉඩමක් නම් Divisional Secretary වෙතින් නිර්දේශයක් ගැන සඳහන් කරයි. ඔබගේ ඉඩම් ලේඛන අනුව අදාළ ආයතනය තහවුරු කරන්න.",
  },
  {
    id: "commission",
    label: "Land Reforms Commission ඉඩම",
    detail:
      "NGJA පිටුව Land Reforms Commission සතු ඉඩමක් සඳහා එම කොමිෂන් සභාවේ නිර්දේශය සඳහන් කරයි. නිශ්චිත ඉඩමේ පාලන තත්ත්වය සහ වත්මන් ලේඛන අවශ්‍යතා සනාථ කරගන්න.",
  },
  {
    id: "mahaveli",
    label: "Mahaweli Authority යටතේ",
    detail:
      "NGJA පිටුව Mahaweli Authority of Sri Lanka පාලනය කරන ඉඩමක් සඳහා එම අධිකාරියේ නිර්දේශය සඳහන් කරයි. ඉඩමට අදාළ කලාප කාර්යාලය සහ අනුමැති මාර්ගය NGJA වෙතින් විමසන්න.",
  },
  {
    id: "uncertain",
    label: "වෙනත් / මට නිශ්චිත නැහැ",
    detail:
      "ඉඩම් ලේඛන හෝ පාලන තත්ත්වය පැහැදිලි නැත්නම්, පතල් කටයුතු ආරම්භ කිරීමට පෙර NGJA වෙත අදාළ ඔප්පු/සිතියම් සමඟ විමසන්න. සුදුසුකම් ලත් ශ්‍රී ලාංකික ඉඩම් හෝ නීති වෘත්තිකයෙකුගෙන් ස්වාධීන උපදෙස් ගන්න.",
  },
];

const stages = [
  { icon: MapPinned, label: "ඉඩම", title: "කාර්යය සහ ඉඩම නිශ්චිත කරන්න", text: "යෝජිත වැඩ, සීමා, ඉඩම් අයිතිය සහ සම-අයිතිකරුවන් ගැන තොරතුරු එකතු කරන්න. NGJA පිටුව අනුව ලේඛන ඉඩමේ හිමිකාරිත්වයේ ස්වභාවය අනුව වෙනස් විය හැකියි." },
  { icon: FileSearch, label: "අයදුම", title: "වත්මන් ලේඛන ලැයිස්තුව NGJA වෙතින් ඉල්ලන්න", text: "NGJA වෙතින් වත්මන් අයදුම්පත, අවශ්‍ය ලේඛන සහ ඔබගේ ඉඩම/කාර්යයට අදාළ අමතර නිර්දේශ සෘජුවම තහවුරු කරන්න. මෙය සම්පූර්ණ ලේඛන ලැයිස්තුවක් නොවේ." },
  { icon: Landmark, label: "සමාලෝචනය", title: "ස්ථාන පරීක්ෂාව සහ අදාළ ආයතන", text: "NGJA විසින් පළ කර ඇති ක්‍රියාවලියේ ලේඛන පරීක්ෂාව, ස්ථාන පරීක්ෂාව සහ යම් ඉඩම් වර්ග සඳහා වෙනත් රාජ්‍ය ආයතනවල නිර්දේශ ඇතුළත් විය හැකියි. ඔබගේ ඉඩමට අදාළ පියවර තහවුරු කරගන්න." },
  { icon: ShieldCheck, label: "අවසර", title: "ලිඛිත අවසරය සහ කොන්දේසි ලැබෙන තුරු ආරම්භ නොකරන්න", text: "සාමාන්‍ය මැණික් පතල් බලපත්‍රය සහ යන්ත්‍ර භාවිතයට අදාළ අවසරය එකම දෙයක් බව නොසිතන්න. NGJA ක්‍රියාවලිය ඒවා වෙන වෙනම විස්තර කරයි; ඔබගේ කාර්යයට අවශ්‍ය සියලු බලපත්‍ර සහ කොන්දේසි ලිඛිතව තහවුරු කරන්න." },
];

export function SriLankaMiningLicenceExplorer() {
  const [landId, setLandId] = useState(landTypes[0].id);
  const [stageIndex, setStageIndex] = useState(0);
  const selectedLand = landTypes.find((item) => item.id === landId) ?? landTypes[0];
  const currentStage = stages[stageIndex];
  const StageIcon = currentStage.icon;

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm" aria-labelledby="licence-explorer-title">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_45%_40%,rgba(74,151,157,0.23),transparent_58%),linear-gradient(145deg,#edf7f3,#f4f0e4)] p-6 md:p-8">
          <svg viewBox="0 0 420 300" role="img" aria-labelledby="licence-svg-title licence-svg-desc" className="h-auto w-full max-w-md">
            <title id="licence-svg-title">පතල් බලපත්‍රයට පෙර විමසිය යුතු දේ</title>
            <desc id="licence-svg-desc">ඉඩම් සටහනක්, ලේඛන ගොනුවක් සහ සලකුණු සහිත පරීක්ෂණ ලැයිස්තුවක් පෙන්වන සංකල්පීය SVG නිදර්ශනයකි; මෙය නිල බලපත්‍ර සිතියමක් නොවේ.</desc>
            <defs>
              <linearGradient id="licence-ground" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#d2e8d8"/><stop offset="1" stopColor="#8eb9a6"/></linearGradient>
              <filter id="licence-shadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#183d46" floodOpacity=".16"/></filter>
            </defs>
            <g filter="url(#licence-shadow)">
              <rect x="35" y="39" width="221" height="204" rx="22" fill="#fff" stroke="#d5e4de" strokeWidth="2" />
              <path d="M66 190c37-10 54-45 88-48 29-3 42 18 70 4v54H66z" fill="url(#licence-ground)" />
              <path d="M66 190c37-10 54-45 88-48 29-3 42 18 70 4M66 204c42-11 58-37 94-39 24-2 38 16 64 3" fill="none" stroke="#4d8978" strokeWidth="2" strokeDasharray="4 5" />
              <path d="M87 176c14-18 21-31 27-52 7 18 15 30 28 40m-27-40v-17m0 38-14-8m15 1 14-12" fill="none" stroke="#467c61" strokeWidth="3" strokeLinecap="round" />
              <circle cx="114" cy="89" r="8" fill="#e6b55e" stroke="#fff" strokeWidth="3" />
              <path d="M86 61h125M86 75h77" stroke="#dae5df" strokeWidth="5" strokeLinecap="round" />
              <rect x="276" y="68" width="108" height="142" rx="16" fill="#15384b" />
              <rect x="297" y="55" width="66" height="24" rx="9" fill="#24677a" />
              <path d="m300 108 5 5 10-12m-15 37 5 5 10-12m-15 37 5 5 10-12" fill="none" stroke="#a9e0d4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M324 108h39m-39 30h39m-39 30h39" stroke="#d4e6e7" strokeWidth="5" strokeLinecap="round" />
            </g>
            <circle cx="73" cy="69" r="23" fill="#e2efe6" opacity=".85" /><path d="M73 57c-7 9-10 14-10 19a10 10 0 0 0 20 0c0-5-3-10-10-19Z" fill="#54968c" />
            <text x="210" y="278" textAnchor="middle" fill="#647b78" fontSize="11">සංකල්පීය රූපය · නිල සිතියමක් හෝ බලපත්‍රයක් නොවේ</text>
          </svg>
        </div>

        <div className="p-5 md:p-7 lg:p-8">
          <p className="gx-eyebrow"><span /> NGJA ක්‍රියාවලිය කියවන්න</p>
          <h2 id="licence-explorer-title" className="mt-2 font-serif text-2xl font-semibold leading-tight">ඔබගේ ඉඩමට අදාළ ප්‍රශ්න පියවරෙන් පියවර</h2>
          <p className="mt-2 text-sm leading-6 text-muted">පහත කරුණු තීරණයක් හෝ බලපත්‍ර සුදුසුකම් තහවුරු කිරීමක් නොවේ. නිල ආයතනයෙන් විමසිය යුතු දේ මතක් කිරීමට පමණයි.</p>

          <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="NGJA ක්‍රියාවලියේ කොටසක් තෝරන්න">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return <button key={stage.label} type="button" onClick={() => setStageIndex(index)} aria-pressed={stageIndex === index} className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${stageIndex === index ? "border-accent bg-accent text-white" : "border-border bg-background text-foreground hover:border-accent/50"}`}><Icon size={15} aria-hidden="true" />{stage.label}</button>;
            })}
          </div>

          <div className="mt-4 rounded-2xl border border-border bg-background/60 p-4 md:p-5" aria-live="polite" aria-atomic="true">
            <div className="flex items-center gap-2 text-accent"><StageIcon size={17} aria-hidden="true"/><span className="text-xs font-semibold">පියවර {stageIndex + 1} / {stages.length}</span><ArrowRight size={14} aria-hidden="true"/></div>
            <h3 className="mt-2 font-serif text-lg font-semibold">{currentStage.title}</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/85">{currentStage.text}</p>
          </div>

          <fieldset className="mt-5">
            <legend className="text-sm font-semibold">ඉඩමේ තත්ත්වය තෝරන්න</legend>
            <p className="mt-1 text-xs leading-5 text-muted">NGJA පළ කළ ක්‍රියාවලියේ ඉඩම් වර්ග අනුව සඳහන් නිර්දේශ බලන්න.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {landTypes.map((type) => <button key={type.id} type="button" onClick={() => setLandId(type.id)} aria-pressed={landId === type.id} className={`min-h-10 rounded-xl border px-3 py-2 text-left text-xs font-medium leading-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm ${landId === type.id ? "border-teal bg-teal-soft text-foreground" : "border-border bg-white text-muted hover:border-teal/50 hover:text-foreground"}`}>{type.label}</button>)}
            </div>
            <div className="mt-3 rounded-xl border border-teal/20 bg-teal-soft/60 p-4 text-sm leading-6" aria-live="polite" aria-atomic="true">{selectedLand.detail}</div>
          </fieldset>
        </div>
      </div>
    </section>
  );
}

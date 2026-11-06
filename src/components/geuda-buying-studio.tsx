"use client";

import { useState } from "react";

const stages = [
  {
    label: "රළු ගල",
    title: "රළු ගල පරීක්ෂා කර ගන්න",
    note: "ගල corundum ද යන්න, වර්තමාන පෙනුම, බර සහ ඉරිතැලීම් ගැන විකුණුම්කරුගේ ලිඛිත විස්තර ඉල්ලන්න. “Geuda” යන වචනයෙන් පමණක් නිශ්චිත වර්ගය හෝ අනාගත ප්‍රතිඵලය තීරණය නොවේ.",
    questions: ["අනන්‍යතාව තහවුරු කළේ කවුද?", "බර සහ වර්තමාන තත්ත්වය ලියා තිබේද?", "අභ්‍යන්තර ඉරිතැලීම් පරීක්ෂා කළ හැකිද?"],
  },
  {
    label: "කැපීමට පෙර",
    title: "කැපීමේ සැලැස්ම සහ අවදානම තේරුම් ගන්න",
    note: "රළු ගලකින් ලැබෙන අවසාන බර හෝ පෙනුම කලින්ම සහතික කළ නොහැකියි. කැපුම් ශිල්පියා ගල පරීක්ෂා කර යෝජිත සැලැස්ම, ගාස්තුව සහ සිදුවිය හැකි බර අඩුවීම පැහැදිලි කළ යුතුයි.",
    questions: ["අවසාන බර ඇස්තමේන්තුවක්ද, සහතිකයක්ද?", "ගල කැපීමේදී කැඩුණොත් වගකීම කාටද?", "ගාස්තු සහ එකඟ වූ කාර්යය ලිඛිතද?"],
  },
  {
    label: "තාප ප්‍රතිකාරයට පෙර",
    title: "ප්‍රතිකාරකයාගේ සැලැස්ම සහ එකඟතාව ලියන්න",
    note: "තාපයෙන් ලැබෙන වෙනස ද්‍රව්‍යය සහ ක්‍රියාවලිය අනුව වෙනස් වේ. ප්‍රතිඵලය නිශ්චිත බවට නොසලකන්න; දන්නා ප්‍රතිකාරය, ගාස්තුව, හානි හෝ බර අඩුවීමේ අවදානම සහ වගකීම් කාගේදැයි කල්තියා එකඟ වන්න.",
    questions: ["භාවිත කිරීමට යෝජිත ක්‍රියාවලිය කුමක්ද?", "අසාර්ථක ප්‍රතිඵලයකදී ගාස්තුව සහ වගකීම?", "ප්‍රතිකාරය ලේඛනගත කරන්නේ කෙසේද?"],
  },
  {
    label: "කැපූ / ප්‍රතිකාර කළ ගල",
    title: "දැනට ඇති ගල සහ වාර්තාව පරීක්ෂා කරන්න",
    note: "අනාගතයේ ලැබිය හැකි ප්‍රතිඵලයක් නොව, දැන් ඇති ගල තක්සේරු කරන්න. ඉහළ වටිනාකමක ගලක් නම්, ස්වාධීන පරීක්ෂණාගාරයකින් හඳුනාගැනීම සහ හඳුනාගත හැකි ප්‍රතිකාර ගැන වාර්තාවක් ලබාගැනීම සලකා බලන්න. වාර්තාවක් තිබීමෙන් මිල සහතික නොවේ.",
    questions: ["ලිඛිත ප්‍රතිකාර විස්තරය වාර්තාවට ගැළපෙනවාද?", "වාර්තා අංකය පරීක්ෂණාගාරයෙන් තහවුරු කළාද?", "ආපසු භාරදීමේ කොන්දේසි සහ රිසිට්පත තියෙනවාද?"],
  },
] as const;

export function GeudaBuyingStudio() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <section aria-labelledby="geuda-studio-title" className="overflow-hidden rounded-[1.75rem] border border-[#d4dfe0] bg-[#f1f6f4] shadow-[0_24px_70px_-48px_rgba(16,43,59,0.7)]">
      <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
        <div className="relative flex min-h-64 flex-col justify-between overflow-hidden bg-[radial-gradient(ellipse_at_70%_15%,rgba(167,202,194,.45),transparent_38%),linear-gradient(150deg,#e5efeb,#d8e5e2_50%,#f5f2e8)] p-6 md:min-h-72 md:p-8">
          <div className="relative z-10">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#42686c]">ශ්‍රී ලංකා වෙළෙඳ පදය · GEUDA</p>
            <h2 id="geuda-studio-title" className="mt-4 max-w-xs font-serif text-2xl font-semibold leading-tight text-[#142f3e] md:text-3xl">මිල දීමට පෙර,<br/>තත්ත්වය තේරුම් ගන්න.</h2>
          </div>
          <svg viewBox="0 0 240 150" role="img" aria-labelledby="geuda-rough-title geuda-rough-desc" className="relative z-10 mt-3 w-full max-w-[250px] self-end drop-shadow-[0_18px_18px_rgba(32,69,72,.2)]">
            <title id="geuda-rough-title">රළු මැණික් පිළිබඳ රූපමය නිදර්ශනය</title>
            <desc id="geuda-rough-desc">වෙළෙඳ උපදෙස් පැහැදිලි කිරීමට නිර්මාණය කළ මුල් නිදර්ශනයකි; සැබෑ geuda ගලක් හෝ ප්‍රතිකාර ප්‍රතිඵලයක් නොවේ.</desc>
            <defs><linearGradient id="geuda-rock" x1="0" y1="0" x2=".9" y2="1"><stop stopColor="#f9ffff"/><stop offset=".45" stopColor="#a9d0cc"/><stop offset="1" stopColor="#54868a"/></linearGradient><linearGradient id="geuda-rock2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e8f4e7"/><stop offset="1" stopColor="#789b92"/></linearGradient></defs>
            <path d="m26 90 24-48 44-17 46 25 16 43-26 36-59 8-39-16z" fill="url(#geuda-rock)" stroke="#4b7476" strokeWidth="2"/>
            <path d="m94 25 18 42-34 14-28-39zm18 42 44 26-26 36-52-48zm0 0 44-17 16 43zm-34 14-26 48 39 16-4-64z" fill="url(#geuda-rock2)" opacity=".56" stroke="#f5ffff" strokeWidth="1.5"/>
            <path d="m175 99 17-31 30-6 12 29-17 24-29 4z" fill="#c2d7c6" stroke="#6b8a7c" strokeWidth="1.5"/><path d="m192 68 7 24-11 27m11-27 24-1m-24 1 19 26" fill="none" stroke="#f7ffff" strokeOpacity=".8" strokeWidth="1.4"/>
          </svg>
          <p className="relative z-10 mt-2 max-w-sm text-xs leading-5 text-[#46636a]">මුල් SVG රූපමය නිදර්ශනය · සැබෑ specimen ඡායාරූපයක් නොවේ · ප්‍රතිකාර ප්‍රතිඵලයක් පුරෝකථනය නොකරයි</p>
        </div>

        <div className="min-w-0 p-5 md:p-8">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-[#487578]">ඔබ සිටින අදියර තෝරන්න</p>
          <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="ගනුදෙනු අදියර තෝරන්න">
            {stages.map((item, index) => (
              <button key={item.label} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className={`min-h-11 rounded-full border px-3.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b6170] ${active === index ? "border-[#173f50] bg-[#173f50] text-white" : "border-[#c9d8d7] bg-white text-[#28474e] hover:border-[#6a9998]"}`}>
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-[#d7e1df] bg-white p-4 md:p-5" aria-live="polite">
            <h3 className="font-serif text-lg font-semibold text-[#183b49]">{stage.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[#40565b]">{stage.note}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {stage.questions.map((question) => <li key={question} className="flex gap-2.5 rounded-xl bg-[#f3f7f5] p-3 text-sm leading-6 text-[#344d53]"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#dbeae5] text-xs font-bold text-[#24545d]" aria-hidden="true">?</span>{question}</li>)}
            </ul>
          </div>
          <p className="mt-4 text-xs leading-5 text-[#5c7073]">මෙය මිල තක්සේරුවක් හෝ ගල හඳුනාගැනීමේ ක්‍රමයක් නොවේ. සැකයක් ඇත්නම් ගෙවීමට පෙර ස්වාධීන විශේෂඥ පරීක්ෂාවක් සලකා බලන්න.</p>
        </div>
      </div>
    </section>
  );
}

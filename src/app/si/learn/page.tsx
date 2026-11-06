import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Gem, Landmark, ShieldCheck } from "lucide-react";
import { SriLankaSinhalaExplorer } from "@/components/sri-lanka-sinhala-explorer";

export const metadata: Metadata = {
  title: "ශ්‍රී ලංකාවේ මැණික් — සිංහල දැනුම් එකතුව",
  description: "ශ්‍රී ලංකාවේ මැණික්, Ceylon sapphire, Geuda, දේශීය වෙළෙඳාම, ගැනුම් සහ නිල තොරතුරු ගැන සිංහල මාර්ගෝපදේශ.",
  alternates: { canonical: "/si/learn" },
};

export default function SinhalaSriLankaHub() {
  return (
    <div className="overflow-hidden">
      <section className="relative border-b border-border bg-[radial-gradient(ellipse_at_80%_20%,rgba(99,157,167,0.2),transparent_40%),linear-gradient(135deg,#f4f7f4_0%,#fffdf8_58%,#f5f1e7_100%)]">
        <div className="container-page grid min-h-[430px] items-center gap-8 py-12 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] md:py-16">
          <div className="relative z-10">
            <p className="gx-eyebrow"><span /> GEMOLOGYX · සිංහල ශ්‍රී ලංකා එකතුව</p>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground md:text-6xl">ශ්‍රී ලංකාවේ මැණික් ලෝකය</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">අපේ දිවයිනේ මැණික්, ප්‍රාදේශීය පද, වෙළෙඳාම සහ මෙරටදී ආරක්ෂිතව දැනුවත් තීරණ ගන්නා ආකාරය—සිංහලෙන් එකම තැනක.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#sri-lanka-guide-list-title" className="gx-btn gx-btn-primary">මාර්ගෝපදේශ බලන්න <ArrowRight size={16} /></a>
              <Link href="/sri-lanka" className="gx-btn gx-btn-secondary">English Sri Lanka hub</Link>
            </div>
            <p className="mt-4 text-xs leading-5 text-muted">මෙම සිංහල එකතුව ශ්‍රී ලංකාවට අදාළ මාතෘකා සඳහායි. ජාත්‍යන්තර මැණික් විද්‍යා විශ්වකෝෂය ප්‍රධාන වශයෙන් ඉංග්‍රීසියෙන් පවත්වාගෙන යයි.</p>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-[380px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/80 bg-white/50 shadow-[0_30px_90px_-45px_rgba(27,68,83,0.45)] backdrop-blur-sm">
            <div className="absolute inset-5 rounded-[1.6rem] border border-teal/15" aria-hidden="true" />
            <div className="absolute left-9 top-12 h-24 w-24 rounded-full bg-teal-soft/60 blur-2xl" aria-hidden="true" />
            <svg viewBox="0 0 320 280" className="relative w-[82%] drop-shadow-[0_25px_25px_rgba(28,63,84,0.24)]" role="img" aria-labelledby="sri-gem-art-title sri-gem-art-desc">
              <title id="sri-gem-art-title">මැණික් අලංකාර රූපමය නිදර්ශනය</title>
              <desc id="sri-gem-art-desc">ශ්‍රී ලංකාවේ sapphire සම්ප්‍රදායෙන් ආභාසය ලැබූ නිල් පැහැති මුල් SVG නිදර්ශනයකි. මෙය සැබෑ ගලක ඡායාරූපයක් නොවේ.</desc>
              <defs>
                <linearGradient id="si-gem-face" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#c9edf2"/><stop offset=".42" stopColor="#407fa4"/><stop offset="1" stopColor="#183654"/></linearGradient>
                <linearGradient id="si-gem-top" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#effcff"/><stop offset="1" stopColor="#6cb4c3"/></linearGradient>
                <radialGradient id="si-gem-glow"><stop stopColor="#fff" stopOpacity=".9"/><stop offset="1" stopColor="#b7e8ed" stopOpacity="0"/></radialGradient>
              </defs>
              <circle cx="162" cy="138" r="116" fill="url(#si-gem-glow)" />
              <path d="m48 78 54-34h112l56 34-34 136-78 35-79-35z" fill="url(#si-gem-face)" stroke="#254f70" strokeWidth="3" />
              <path d="m48 78 66 26 44-60 44 60 68-26-32 46H80z" fill="url(#si-gem-top)" opacity=".88" />
              <path d="m48 78 66 26-3 110-32-12zm66 26h88l-44 145-47-35zm88 0 68-26-34 136-34 12-3-110z" fill="#142f50" opacity=".33" />
              <path d="m80 124 34-20-3 110-31-90zm122-20 32 20-34 90-31 35 33-145z" fill="#74c4cf" opacity=".52" />
              <path d="m48 78 66 26h88l68-26M80 124h156m-122-20 44 145 44-145" fill="none" stroke="#e8ffff" strokeOpacity=".62" strokeWidth="2" />
              <path d="M211 30c17 16 27 31 34 47" fill="none" stroke="#fff" strokeLinecap="round" strokeOpacity=".75" strokeWidth="4" />
            </svg>
            <span className="absolute bottom-5 rounded-full border border-white/80 bg-white/85 px-3 py-1.5 text-[0.68rem] font-medium text-muted">මුල් රූපමය නිදර්ශනය · specimen photo නොවේ</span>
          </div>
        </div>
      </section>

      <div className="container-page py-10 md:py-14">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-white p-5"><Gem size={20} className="text-accent" aria-hidden="true" /><h2 className="mt-3 font-serif text-lg font-semibold">දේශීය ගල් සහ නම්</h2><p className="mt-2 text-sm leading-6 text-muted">Sapphire, Ceylon නාමය සහ Geuda ඇතුළු මෙරටට සම්බන්ධ මාතෘකා.</p></div>
          <div className="rounded-2xl border border-border bg-white p-5"><Landmark size={20} className="text-accent" aria-hidden="true" /><h2 className="mt-3 font-serif text-lg font-semibold">කර්මාන්තය සහ වෙළෙඳාම</h2><p className="mt-2 text-sm leading-6 text-muted">ප්‍රාදේශීය වෙළෙඳ භූමිකා, වාර්තා, නිල සේවා සහ අපනයන මාර්ග.</p></div>
          <div className="rounded-2xl border border-border bg-white p-5"><ShieldCheck size={20} className="text-teal" aria-hidden="true" /><h2 className="mt-3 font-serif text-lg font-semibold">සීමා පැහැදිලිව</h2><p className="mt-2 text-sm leading-6 text-muted">පෙනුමෙන් පමණක් origin හෝ වටිනාකම තහවුරු කළ නොහැකි බව සෑම මාර්ගෝපදේශයකම පැහැදිලි කරයි.</p></div>
        </div>

        <SriLankaSinhalaExplorer />

        <section className="mt-12 rounded-2xl border border-border bg-background p-5 md:p-7" aria-labelledby="sri-lanka-official-resources">
          <p className="gx-eyebrow"><span /> නිල මූලාශ්‍ර වෙත</p>
          <h2 id="sri-lanka-official-resources" className="mt-2 font-serif text-2xl font-semibold">නීති, බලපත්‍ර සහ වාර්තා සඳහා අදාළ ආයතනයෙන් තහවුරු කරන්න</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">අපනයන සහ බලපත්‍ර ක්‍රියාවලි වෙනස් විය හැකියි. මෙහි අධ්‍යාපනික සාරාංශයක් කියවීමෙන් පසු, ඔබගේ අවස්ථාවට අදාළ නවතම නියමය NGJA හෝ ශ්‍රී ලංකා රේගුවෙන් තහවුරු කරගන්න.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <a href="https://ngja.gov.lk/business_services/export-services-procedure/" target="_blank" rel="noreferrer" className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 text-sm font-medium hover:border-accent/50"><ExternalLink size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" /><span>NGJA නිල මැණික් සහ ආභරණ අපනයන ක්‍රියාවලිය</span></a>
            <a href="https://ngja.gov.lk/gem-tower-ratnapura/" target="_blank" rel="noreferrer" className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 text-sm font-medium hover:border-accent/50"><ExternalLink size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" /><span>NGJA: Ratnapura Gem Tower</span></a>
            <a href="https://ngja.gov.lk/business_services/contact-gem-laboratory-centers-of-ngja/" target="_blank" rel="noreferrer" className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 text-sm font-medium hover:border-accent/50"><ExternalLink size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" /><span>NGJA මැණික් පරීක්ෂණාගාර මධ්‍යස්ථාන</span></a>
          </div>
          <p className="mt-4 text-xs leading-5 text-muted">සබැඳි අවසන් වරට පරීක්ෂා කළ දිනය: 2026-11-05. මෙය නීතිමය හෝ රේගු උපදෙස් නොවේ.</p>
        </section>

        <footer className="mt-10 border-t border-border pt-6 text-sm text-muted">
          <Link href="/learn" className="inline-flex items-center gap-2 font-medium text-accent hover:underline">English global learning library <ArrowRight size={15} aria-hidden="true" /></Link>
        </footer>
      </div>
    </div>
  );
}

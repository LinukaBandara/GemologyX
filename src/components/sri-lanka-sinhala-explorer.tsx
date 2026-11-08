"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, BadgeCheck, Gem, Languages, MapPinned, Pickaxe, ShoppingBag, Store } from "lucide-react";

const guides = [
  { title: "ශ්‍රී ලංකාවේ නිල්මැණික්", description: "ශ්‍රී ලංකාවේ sapphire සම්ප්‍රදාය සහ origin ප්‍රකාශය තේරුම් ගන්න.", href: "/si/learn/sri-lankan-blue-sapphire", group: "gems", tag: "මැණික්" },
  { title: "‘Ceylon Sapphire’ නාමය", description: "වෙළෙඳ නාමයක්, භූගෝලීය මූලාරම්භ මතයක් සහ ඒවායේ සීමා වෙන් කර බලන්න.", href: "/si/learn/what-ceylon-means", group: "gems", tag: "මැණික්" },
  { title: "Geuda ගැනුම් මාර්ගෝපදේශය", description: "ශ්‍රී ලංකාවේ භාවිත වන Geuda පදය, රළු ගල් සහ තාප ප්‍රතිකාර අවදානම.", href: "/si/learn/buying-geuda", group: "gems", tag: "මැණික්" },
  { title: "රත්නපුර සහ බලංගොඩ භූවිද්‍යාව", description: "දේශීය පර්යේෂණ අනුව ප්‍රදේශ, ගංගා ද්‍රෝණි සහ මැණික් තැන්පතු කියවන්න.", href: "/si/learn/ratnapura-balangoda-gem-geology", group: "regions", tag: "ප්‍රදේශ සහ භූවිද්‍යාව" },
  { title: "මැණික් පතල්, පරිසරය සහ වගකීම්", description: "NGJA මූලාශ්‍ර අනුව පරිසර සමාලෝචනය, ජලය, rehabilitation සහ මහජන ආරක්ෂාව සලකා බලන්න.", href: "/si/learn/sri-lanka-gem-mining-safety-environment", group: "industry", tag: "පතල් සහ පරිසරය" },
  { title: "ශ්‍රී ලංකාවේ මැණික් පතල් බලපත්‍රය", description: "ඉඩම් වර්ගය, අයිතිය සහ අවසර ගැන NGJA වෙතින් විමසිය යුතු කරුණු පියවරෙන් පියවර බලන්න.", href: "/si/learn/sri-lanka-mining-licence-basics", group: "industry", tag: "පතල් බලපත්‍ර" },
  { title: "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම", description: "දේශීය ගනුදෙනු සහ මැණික් කර්මාන්තයේ සම්බන්ධතා හඳුනාගන්න.", href: "/si/learn/sri-lanka-gem-trade-intro", group: "trade", tag: "වෙළෙඳාම" },
  { title: "ශ්‍රී ලංකාවේ මැණික් කැපීම සහ පුහුණුව", description: "Hanaporuwa උරුමය, නවීන කැපුම් සේවා, GJRTI පාඨමාලා සහ වැඩ භාරදීමේ එකඟතා.", href: "/si/learn/sri-lanka-gem-cutting-training", group: "trade", tag: "කැපීම සහ පුහුණුව" },
  { title: "දේශීය වෙළෙඳුන් සහ සේවා භූමිකා", description: "රළු ගල්, කැපීම, තැරැව්කරණය සහ සිල්ලර වෙළෙඳාම පිළිබඳ මූලික දැනුම.", href: "/si/learn/sri-lanka-dealer-types", group: "trade", tag: "වෙළෙඳාම" },
  { title: "ශ්‍රී ලංකාවේ මැණික් පද", description: "දේශීය වෙළෙඳාමේ ඇසෙන වචන සහ ඒවායේ භාවිතය.", href: "/si/learn/sri-lanka-gem-terms", group: "culture", tag: "භාෂාව සහ පද" },
  { title: "ශ්‍රී ලංකාවේදී මැණික් මිලදී ගැනීම", description: "ලේඛන, ස්වාධීන පරීක්ෂාව සහ මිලදී ගැනීමේදී ගත යුතු පියවර.", href: "/si/learn/sri-lanka-buying-day-tips", group: "buying", tag: "ගැනුම්" },
  { title: "ශ්‍රී ලංකාවේ මැණික් වාර්තා කියවීම", description: "NGJA ඇතුළු වාර්තා නිකුත් කරන ආයතන, වාර්තා තහවුරු කිරීම සහ සීමා.", href: "/si/learn/how-to-read-gem-report", group: "trade", tag: "වාර්තා" },
  { title: "මැණික් අපනයන ලේඛන: මූලික හැඳින්වීම", description: "ශ්‍රී ලංකාවේ නිල අපනයන ක්‍රියාවලිය ගැන මුල් අවබෝධයක්; නවතම උපදෙස් නිල ආයතනයෙන් තහවුරු කරන්න.", href: "/si/learn/export-documents-intro", group: "trade", tag: "නිල තොරතුරු" },
] as const;

const filters = [
  { id: "all", label: "සියල්ල", icon: Languages },
  { id: "gems", label: "දේශීය මැණික්", icon: Gem },
  { id: "regions", label: "ප්‍රදේශ සහ භූවිද්‍යාව", icon: MapPinned },
  { id: "industry", label: "පතල් සහ පරිසරය", icon: Pickaxe },
  { id: "trade", label: "වෙළෙඳාම සහ වාර්තා", icon: Store },
  { id: "buying", label: "මිලදී ගැනීම", icon: ShoppingBag },
  { id: "culture", label: "භාෂාව සහ උරුමය", icon: MapPinned },
] as const;

export function SriLankaSinhalaExplorer() {
  const [active, setActive] = useState<(typeof filters)[number]["id"]>("all");
  const visibleGuides = active === "all" ? guides : guides.filter((guide) => guide.group === active);

  return (
    <section aria-labelledby="sri-lanka-guide-list-title" className="mt-12">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="gx-eyebrow"><span /> ශ්‍රී ලංකාවට අදාළ සිංහල මාර්ගෝපදේශ</p>
          <h2 id="sri-lanka-guide-list-title" className="mt-2 font-serif text-2xl font-semibold tracking-tight md:text-3xl">ඔබට අවශ්‍ය මාතෘකාව තෝරන්න</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">මෙම එකතුව ශ්‍රී ලංකාවේ මැණික්, ප්‍රදේශීය වෙළෙඳාම, දේශීය පද සහ මෙරටදී ගැනුම්/අපනයන සන්දර්භය ගැනයි.</p>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-3.5 py-2 text-xs font-medium text-muted"><BadgeCheck size={14} className="text-teal" aria-hidden="true" /> සිංහල · ශ්‍රී ලංකාව කේන්ද්‍ර කරගත්</span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="මාතෘකා අනුව පෙරහන් කරන්න">
        {filters.map((filter) => {
          const Icon = filter.icon;
          const selected = active === filter.id;
          return <button key={filter.id} type="button" onClick={() => setActive(filter.id)} aria-pressed={selected} className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${selected ? "border-accent bg-accent text-white" : "border-border bg-white text-foreground hover:border-accent/50"}`}><Icon size={15} aria-hidden="true" />{filter.label}</button>;
        })}
      </div>

      <p className="sr-only" aria-live="polite">{visibleGuides.length} ක්‍රියාකාරී මාර්ගෝපදේශ</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleGuides.map((guide, index) => (
          <Link key={guide.href} href={guide.href} className="group relative flex min-h-48 flex-col overflow-hidden rounded-2xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            <div className="absolute -right-7 -top-8 h-28 w-28 rotate-12 rounded-[2rem] border border-teal/15 bg-teal-soft/60 transition-transform group-hover:rotate-6" aria-hidden="true" />
            <div className="relative flex items-center justify-between gap-3">
              <span className="rounded-full bg-background px-2.5 py-1 text-[0.68rem] font-semibold text-accent">{guide.tag}</span>
              <span className="text-xs tabular-nums text-muted">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="relative mt-5 font-serif text-lg font-semibold leading-snug group-hover:text-accent">{guide.title}</h3>
            <p className="relative mt-2 flex-1 text-sm leading-6 text-muted">{guide.description}</p>
            <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">කියවන්න <ArrowUpRight size={15} aria-hidden="true" /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}

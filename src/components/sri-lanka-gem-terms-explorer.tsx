"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, BookOpenText, Search, ShieldCheck } from "lucide-react";
import { sriLankaGemTerms, type SriLankaGemTerm } from "@/data/sri-lanka-gem-terms";

const categoryGroups = [
  { id: "all", si: "සියල්ල", en: "All terms", siMatch: "", enMatch: "" },
  { id: "materials", si: "ගල් සහ ද්‍රව්‍ය", en: "Gem materials", siMatch: "ගල් සහ ද්‍රව්‍ය", enMatch: "Gem materials" },
  { id: "trade", si: "කැපීම සහ වෙළෙඳාම", en: "Trade and craft", siMatch: "කැපීම සහ වෙළෙඳාම", enMatch: "Trade and craft" },
  { id: "origin", si: "මූලාරම්භය සහ වාර්තා", en: "Origin and reports", siMatch: "මූලාරම්භය සහ වාර්තා", enMatch: "Origin and reports" },
] as const;

export function SriLankaGemTermsExplorer({ locale = "si" }: { locale?: "si" | "en" }) {
  const isSinhala = locale === "si";
  const [category, setCategory] = useState<(typeof categoryGroups)[number]["id"]>("all");
  const [query, setQuery] = useState("");
  const [selectedTerm, setSelectedTerm] = useState(sriLankaGemTerms[0].term);
  const normalized = query.trim().toLocaleLowerCase();
  const activeGroup = categoryGroups.find((item) => item.id === category) ?? categoryGroups[0];
  const visible = useMemo(() => sriLankaGemTerms.filter((item) =>
    (category === "all" || item.category === activeGroup.siMatch) &&
    (!normalized || `${item.term} ${item.label} ${item.labelEn} ${item.category} ${item.categoryEn} ${item.definition} ${item.definitionEn} ${item.context} ${item.contextEn}`.toLocaleLowerCase().includes(normalized)),
  ), [activeGroup.siMatch, category, normalized]);
  const selected: SriLankaGemTerm | undefined = visible.find((item) => item.term === selectedTerm) ?? visible[0];

  const copy = isSinhala ? {
    eyebrow: "ශ්‍රී ලංකා මැණික් වචන මාලාව", headline: "වෙළෙඳාමේ අසන පද, පැහැදිලිව.",
    description: "සිංහල සහ English පද සසඳන්න. පදයක් සෑම ප්‍රදේශයකම එකම අර්ථයෙන් භාවිත නොවිය හැකි නිසා, ගනුදෙනුවකදී එහි අදහස පැහැදිලි කරගන්න.",
    searchLabel: "සිංහල හෝ English පදයක් සොයන්න", placeholder: "Geuda, Ceylon, දුල්ලම්…", clear: "මකන්න", filters: "වචන වර්ග අනුව පෙරහන් කරන්න",
    warning: "පදය සාක්ෂියක් නොවේ", warningBody: "වෙළෙඳ නාමයක් හෝ දේශීය පදයක් ගලක අනන්‍යතාව, ප්‍රතිකාරය, ගුණාත්මකභාවය හෝ origin තනිවම තහවුරු නොකරයි.",
    choose: "තෝරාගෙන ඉගෙනගන්න", chooseTitle: "පද තෝරන්න", terms: "පද", context: "ශ්‍රී ලංකා සන්දර්භය", ask: "ගැනුම්කරුට අසන්නට", language: "සිංහල · English",
    emptyTitle: "ගැළපෙන පද හමු වුණේ නැහැ", emptyBody: "වෙනත් වචනයක් උත්සාහ කරන්න.",
    footer: "පදවල දේශීය භාවිතය වෙනස් විය හැකියි. මූලාශ්‍ර සබැඳි අදාළ පසුබිම පෙන්වයි; ඒවා කිසියම් ගලක තහවුරු කිරීමක් නොවේ.",
  } : {
    eyebrow: "SRI LANKA GEM TRADE GLOSSARY", headline: "Decode the terms used in Sri Lanka’s gem trade.",
    description: "Explore local trade vocabulary in English and Sinhala. Meanings can vary by region and transaction, so ask what a term means in the specific deal.",
    searchLabel: "Search Sri Lankan gem terms in English or Sinhala", placeholder: "Geuda, Ceylon, dullam…", clear: "Clear", filters: "Filter terms by topic",
    warning: "A term is not proof", warningBody: "A trade label or local word alone does not verify a stone’s identity, treatment, quality or origin.",
    choose: "EXPLORE THE TERMS", chooseTitle: "Select a term", terms: "terms", context: "SRI LANKA CONTEXT", ask: "A QUESTION TO ASK", language: "English · සිංහල",
    emptyTitle: "No matching terms", emptyBody: "Try another word or spelling.",
    footer: "Local usage can vary. Source links provide context; they do not verify the identity or history of any individual gem.",
  };

  return (
    <section aria-label={isSinhala ? "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳ පද සෙවීම" : "Sri Lankan gem trade glossary"} className="mt-8 overflow-hidden rounded-[1.8rem] border border-[#dce5df] bg-[#f5f8f5] shadow-[0_26px_70px_-45px_rgba(33,61,52,.42)]">
      <div className="grid lg:grid-cols-[.78fr_1.22fr]">
        <div className="relative overflow-hidden bg-[#18374a] p-6 text-white sm:p-8 lg:p-10">
          <div className="absolute -right-10 -top-14 h-56 w-56 rounded-full border border-white/10" aria-hidden="true" />
          <div className="absolute -right-1 -top-5 h-40 w-40 rounded-full border border-white/10" aria-hidden="true" />
          <div className="relative">
            <p className="flex items-center gap-2 text-[.65rem] font-bold tracking-[.19em] text-[#b9ddd0]"><BookOpenText size={15}/>{copy.eyebrow}</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">{copy.headline}</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">{copy.description}</p>
            <label className="mt-7 flex min-h-12 items-center gap-3 rounded-xl border border-white/15 bg-white/[.08] px-4 focus-within:border-[#b9ddd0]">
              <Search size={17} className="shrink-0 text-[#b9ddd0]" aria-hidden="true" />
              <span className="sr-only">{copy.searchLabel}</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.placeholder} className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/45" />
              {query && <button type="button" onClick={() => setQuery("")} aria-label={copy.clear} className="rounded-full px-2 py-1 text-xs text-white/70 hover:bg-white/10">{copy.clear}</button>}
            </label>
            <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label={copy.filters}>
              {categoryGroups.map((item) => <button key={item.id} type="button" onClick={() => setCategory(item.id)} aria-pressed={category === item.id} className={`min-h-11 rounded-full border px-3 py-2 text-xs font-medium transition ${category === item.id ? "border-[#d5eadf] bg-[#d5eadf] text-[#18374a]" : "border-white/20 bg-white/[.04] text-white/85 hover:bg-white/10"}`}>{isSinhala ? item.si : item.en}</button>)}
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[.05] p-4 text-xs leading-6 text-white/70"><div className="flex items-center gap-2 font-semibold text-[#b9ddd0]"><ShieldCheck size={14}/>{copy.warning}</div><p className="mt-2">{copy.warningBody}</p></div>
          </div>
        </div>

        <div className="p-5 sm:p-8 lg:p-10">
          <div className="flex items-end justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#568276]">{copy.choose}</p><h3 className="mt-2 font-serif text-2xl text-[#1c3844]">{copy.chooseTitle}</h3></div><p aria-live="polite" className="text-xs text-muted">{visible.length} / {sriLankaGemTerms.length} {copy.terms}</p></div>
          {visible.length ? <>
            <div className="mt-4 grid gap-2 sm:grid-cols-2" role="group" aria-label={copy.filters}>
              {visible.map((item) => <button key={item.term} type="button" onClick={() => setSelectedTerm(item.term)} aria-pressed={selected?.term === item.term} className={`min-h-[4.25rem] rounded-xl border px-4 py-3 text-left transition ${selected?.term === item.term ? "border-[#6d9c8d] bg-[#e5f1eb] shadow-sm" : "border-[#e0e7e2] bg-white hover:border-[#a9c8ba]"}`}><span className={`block text-sm font-bold ${selected?.term === item.term ? "text-[#285746]" : "text-[#294149]"}`}>{item.term}</span><span className="mt-1 block text-xs text-muted">{isSinhala ? item.label : item.labelEn} · {isSinhala ? item.category : item.categoryEn}</span></button>)}
            </div>
            {selected && <article key={selected.term} aria-live="polite" aria-atomic="true" className="mt-5 rounded-2xl border border-[#dce5df] bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2"><span className="rounded-full bg-[#eaf3ee] px-3 py-1 text-[.67rem] font-bold uppercase tracking-[.13em] text-[#497666]">{isSinhala ? selected.category : selected.categoryEn}</span><span className="text-xs text-muted">{copy.language}</span></div>
              <h4 className="mt-3 font-serif text-2xl text-[#1c3844]">{selected.term} <span className="font-sans text-base font-normal text-muted">· {isSinhala ? selected.label : selected.labelEn}</span></h4>
              <p className="mt-3 text-sm leading-7 text-[#48595a]">{isSinhala ? selected.definition : selected.definitionEn}</p>
              <div className="mt-4 rounded-xl bg-[#f2f6f3] p-4"><p className="text-[.63rem] font-bold uppercase tracking-[.15em] text-[#548278]">{copy.context}</p><p className="mt-2 text-sm leading-6 text-[#546260]">{isSinhala ? selected.context : selected.contextEn}</p></div>
              <div className="mt-4 border-l-2 border-[#a6c9ba] pl-4"><p className="text-[.63rem] font-bold uppercase tracking-[.15em] text-[#548278]">{copy.ask}</p><p className="mt-2 text-sm leading-6 text-[#435856]">{isSinhala ? selected.ask : selected.askEn}</p></div>
              <a href={selected.source} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-[#3e7666] hover:text-[#214d41]">{isSinhala ? selected.sourceLabel : selected.sourceLabelEn}<ArrowUpRight size={14}/></a>
            </article>}
          </> : <div className="mt-5 rounded-2xl border border-dashed border-[#b8c8bf] bg-white/70 p-8 text-center"><h4 className="font-serif text-xl">{copy.emptyTitle}</h4><p className="mt-2 text-sm text-muted">{copy.emptyBody}</p></div>}
        </div>
      </div>
      <div className="border-t border-[#dce5df] px-5 py-4 text-xs leading-5 text-muted sm:px-8">{copy.footer}</div>
    </section>
  );
}

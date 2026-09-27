"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { gemstones } from "@/data/gemstones";
import { origins } from "@/data/origins";
import { glossaryTerms } from "@/data/glossary";

export default function SearchPage() {
  const [q,setQ]=useState("");
  const query=q.toLowerCase().trim();
  const gemResults=query?gemstones.filter(g=>g.name.toLowerCase().includes(query)):[];
  const originResults=query?origins.filter(o=>o.name.toLowerCase().includes(query)):[];
  const glossaryResults=query?glossaryTerms.filter(t=>t.term.toLowerCase().includes(query)):[];
  const hasResults=gemResults.length||originResults.length||glossaryResults.length;

  return <div className="container-page max-w-3xl py-12 md:py-16">
    <header className="directory-hero">
      <div className="luxury-eyebrow"><span /> EXPLORE THE LIBRARY</div>
      <h1>Search GemologyX</h1>
      <p>Find gemstone profiles, geographic origins, and gemological terminology.</p>
    </header>
    <div className="search-field mt-8"><Search size={18}/><input autoFocus placeholder="Search gemstones, origins, glossary…" value={q} onChange={e=>setQ(e.target.value)}/></div>
    {query&&!hasResults&&<div className="search-empty">No results for “{q}”. Try a gemstone name, country, or gemological term.</div>}
    {gemResults.length>0&&<SearchGroup title="Gemstones">{gemResults.map(g=><Link className="search-result" key={g.slug} href={`/gemstones/${g.slug}`}><span>{g.name}</span><ArrowUpRight size={15}/></Link>)}</SearchGroup>}
    {originResults.length>0&&<SearchGroup title="Origins">{originResults.map(o=><Link className="search-result" key={o.slug} href={`/origins/${o.slug}`}><span>{o.name}</span><ArrowUpRight size={15}/></Link>)}</SearchGroup>}
    {glossaryResults.length>0&&<SearchGroup title="Glossary">{glossaryResults.map(t=><div className="search-result" key={t.slug}><span>{t.term}</span></div>)}</SearchGroup>}
  </div>;
}
function SearchGroup({title,children}:{title:string;children:React.ReactNode}){return <section className="search-group"><div className="search-group-title"><span>{title}</span><i/></div>{children}</section>}

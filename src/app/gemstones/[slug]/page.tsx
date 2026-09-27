import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Sparkles } from "lucide-react";
import { gemstones, getGemstoneBySlug } from "@/data/gemstones";
import { AdSlot } from "@/components/ad-slot";

export function generateStaticParams(){return gemstones.map(g=>({slug:g.slug}));}
type Params=Promise<{slug:string}>;
export async function generateMetadata({params}:{params:Params}):Promise<Metadata>{const {slug}=await params;const gem=getGemstoneBySlug(slug);return gem?{title:gem.name,description:gem.description}:{};}

function Fact({label,value}:{label:string;value:string}){return <div className="gem-fact"><dt>{label}</dt><dd>{value}</dd></div>}

export default async function GemstonePage({params}:{params:Params}){
 const {slug}=await params;const gem=getGemstoneBySlug(slug);if(!gem)notFound();const d=gem.detail;
 return <article className="container-page max-w-4xl py-12 md:py-16">
  <nav className="luxury-breadcrumb"><Link href="/gemstones">Gemstones</Link><span>/</span><span>{gem.name}</span></nav>
  <header className="profile-hero">
   <div className="profile-hero-art"><div className="profile-gem"><i/><b/><em/></div><span>{gem.category}</span></div>
   <div className="profile-hero-copy"><div className="luxury-eyebrow"><span/> GEMSTONE PROFILE</div><h1>{gem.name}</h1><p>{gem.description}</p></div>
  </header>
  <dl className="gem-facts">
   <Fact label="Mineral family" value={gem.mineralFamily}/>
   {gem.chemicalFormula&&<Fact label="Chemical composition" value={gem.chemicalFormula}/>}
   <Fact label="Mohs hardness" value={gem.hardness}/>
   {gem.crystalSystem&&<Fact label="Crystal system" value={gem.crystalSystem}/>}
   <Fact label="Typical colours" value={gem.colors.join(", ")}/>
   {gem.birthstoneMonth&&<Fact label="Birthstone" value={gem.birthstoneMonth}/>}
   {gem.commonTreatments&&<Fact label="Common treatments" value={gem.commonTreatments.join(", ")}/>
  </dl>
  {d?<div className="profile-content">
   {[
    ["What Is "+gem.name+"?",d.whatIsIt],[""+gem.name+" Colours",d.colorNotes],[""+gem.name+" Origins",d.origins],["Natural vs Synthetic",d.naturalVsSynthetic],["Treatments",d.treatments]
   ].map(([h,p])=><section key={h as string}><div className="profile-section-kicker"><Sparkles size={12}/></div><h2>{h}</h2><p>{p}</p></section>)}
   <AdSlot variant="in-content"/>
   <section><h2>Inclusions</h2><p>{d.inclusions}</p></section>
   <section><h2>Value Factors</h2><ul>{d.valueFactors.map(f=><li key={f}>{f}</li>)}</ul></section>
   <section><h2>Certification</h2><p>{d.certification}</p></section>
   <section><h2>Care</h2><p>{d.care}</p></section>
  </div>:<div className="profile-note">A full educational write-up for {gem.name} is in editorial preparation. The quick facts above are available for reference.</div>}
  <div className="profile-disclaimer">GemologyX provides educational information and is not a substitute for professional gemological examination or a laboratory report.</div>
  <Link href="/gemstones" className="luxury-back-link"><ArrowLeft size={14}/> Back to all gemstones</Link>
 </article>;
}
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import { origins, getOriginBySlug } from "@/data/origins";
import { AdSlot } from "@/components/ad-slot";

export function generateStaticParams(){return origins.map(o=>({slug:o.slug}));}
type Params=Promise<{slug:string}>;
export async function generateMetadata({params}:{params:Params}):Promise<Metadata>{const {slug}=await params;const origin=getOriginBySlug(slug);return origin?{title:origin.name,description:origin.summary}:{};}

export default async function OriginPage({params}:{params:Params}){
 const {slug}=await params;const origin=getOriginBySlug(slug);if(!origin)notFound();const d=origin.detail;
 return <article className="container-page max-w-4xl py-12 md:py-16">
  <nav className="luxury-breadcrumb"><Link href="/origins">Origins</Link><span>/</span><span>{origin.name}</span></nav>
  <header className="profile-hero origin-profile">
   <div className="origin-hero-mark"><MapPin size={25}/><span>ORIGIN</span></div>
   <div className="profile-hero-copy"><div className="luxury-eyebrow"><span/> GEOLOGICAL ATLAS</div><h1>{origin.name}</h1><p>{origin.summary}</p></div>
  </header>
  {origin.gemstones&&<div className="origin-tags">{origin.gemstones.map(g=><span key={g}>{g}</span>)}</div>}
  {d?<div className="profile-content">
   <section><h2>Overview</h2><p>{d.overview}</p></section>
   <section><h2>Geological Context</h2><p>{d.geology}</p></section>
   <AdSlot variant="in-content"/>
   <section><h2>History</h2><p>{d.history}</p></section>
   <section><h2>Common Misconceptions</h2><p>{d.misconceptions}</p></section>
  </div>:<div className="profile-note">A full write-up on {origin.name}'s gemstone geology and history is in editorial preparation.</div>}
  <div className="profile-disclaimer">Geographic origin can require specialist laboratory methods and cannot reliably be determined from appearance alone.</div>
  <Link href="/origins" className="luxury-back-link"><ArrowLeft size={14}/> Back to all origins</Link>
 </article>;
}
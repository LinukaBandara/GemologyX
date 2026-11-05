import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { allGemstones } from "@/data/all-gemstones";
import { GemstoneIllustration } from "@/components/gemstone-illustration";

export function generateStaticParams() { return allGemstones.map(({slug}) => ({slug})); }
type Params = Promise<{slug:string}>;
export async function generateMetadata({params}:{params:Params}):Promise<Metadata>{const {slug}=await params;const gem=allGemstones.find((g)=>g.slug===slug);return gem?{title:`${gem.name} Gemstone Guide`,description:gem.description,alternates:{canonical:`/gemstones/${slug}`}}:{}}

export default async function GemstonePage({params}:{params:Params}) {
  const {slug}=await params; const gem=allGemstones.find((g)=>g.slug===slug); if(!gem)notFound(); const detail=gem.detail;
  const facts=[ ["Chemical Formula",gem.chemicalFormula??gem.mineralFamily], ["Hardness (Mohs)",gem.hardness], ["Crystal System",gem.crystalSystem??"Varies"], ["Colour Range",gem.colors.join(", ")], ["Major Sources",gem.slug==="sapphire"?"Sri Lanka, Myanmar, Thailand":gem.mineralFamily] ];
  const sections=detail?[
    ["overview", "Overview", detail.whatIsIt],
    ["properties", "Properties and Characteristics", detail.colorNotes],
    ...(detail.formation ? [["formation", "Formation and Geological Occurrence", detail.formation] as const] : []),
    ["origins", "Origins", detail.origins],
    ["inclusions", "Inclusions and Identification", detail.inclusions],
    ["treatments", "Treatments", detail.treatments],
    ["buying-guide", "Value Factors", detail.valueFactors],
    ["related", "Natural and Synthetic", detail.naturalVsSynthetic],
    ["certification", "Reports and Identification", detail.certification],
    ["care", "Care and Durability", detail.care],
  ] as const:[];
  const related=allGemstones.filter((item)=>item.slug!==slug).sort((a,b)=>Number(b.mineralFamily===gem.mineralFamily)-Number(a.mineralFamily===gem.mineralFamily)).slice(0,5);
  const images:Record<string,string>={sapphire:"sapphire-hero.svg",ruby:"ruby-gem-inclusions.jpg",emerald:"emerald-cut-gem.jpg",amethyst:"amethyst-crystals.jpg",tourmaline:"tourmaline-san-diego.jpg"};
  const image=images[slug];
  const subtitles:Record<string,string>={sapphire:"The Timeless Gem of Wisdom",ruby:"The King of Gems",emerald:"The Green Beauty",topaz:"The Radiant Gem",amethyst:"The Violet Gem",pearl:"The Ocean’s Gem"};
  return <article className="profile-page">
    <section className={`profile-hero profile-hero-${slug}`}><div className="profile-backdrop">{image?<Image src={`/images/gems/${image}`} alt={`${gem.name} gemstone`} fill priority sizes="100vw"/>:<div className="profile-illustration-surface"><GemstoneIllustration gem={gem} className="profile-fallback-art"/></div>}</div><div className="container-page profile-hero-inner"><div className="profile-crumb"><Link href="/">Home</Link><span>›</span><Link href="/gemstones">Gemstones</Link><span>›</span>{gem.name}</div><h1>{gem.name}</h1><p>{subtitles[slug]??`${gem.mineralFamily} Gemstone Guide`}</p></div></section>
    <nav className="profile-tabs"><div className="container-page">{[...sections.slice(0,6)].map(([id,title])=><a href={`#${id}`} key={id}>{title.replace(" and Characteristics","")}</a>)}</div></nav>
    <div className="container-page profile-body"><div className="profile-top"><div className="profile-stone">{image?<Image src={`/images/gems/${image}`} alt={`${gem.name} gemstone`} fill sizes="(max-width: 760px) 100vw, 34vw"/>:<div className="profile-illustration-surface"><GemstoneIllustration gem={gem} className="profile-fallback-art"/></div>}</div><section className="quick-facts"><h2>Quick Facts</h2>{facts.map(([label,value])=><div key={label}><span>◇</span><b>{label}</b><p>{value}</p></div>)}</section><aside className="on-page"><h2>On This Page</h2>{sections.map(([id,title])=><a href={`#${id}`} key={id}>{title}</a>)}{detail?.faqs?.length?<a href="#faqs">Frequently Asked Questions</a>:null}{gem.sources?.length?<a href="#sources">Sources and Further Reading</a>:null}</aside></div>
      <div className="profile-content"><div className="profile-article">{sections.map(([id,title,text])=><section id={id} key={id}><h2>{title}</h2>{Array.isArray(text)?<ul>{text.map((item)=><li key={item}>{item}</li>)}</ul>:<p>{text}</p>}</section>)}{detail?.faqs?.length ? <section id="faqs"><h2>Frequently Asked Questions</h2>{detail.faqs.map((item)=><div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}</section>:null}{gem.sources?.length ? <section id="sources"><h2>Sources and Further Reading</h2><ul>{gem.sources.map((source)=><li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul></section>:null}</div>{image?<Image className="profile-secondary" src={`/images/gems/${image}`} alt={`${gem.name} close-up`} width={700} height={420}/>:<div className="profile-secondary profile-secondary-art"><div className="profile-illustration-surface"><GemstoneIllustration gem={gem} className="profile-fallback-art"/></div></div>}</div>
      <div className="profile-benefits">{["Exceptional Durability","Wide Range of Colours","Global Demand","Timeless Beauty"].map((item)=><div key={item}><span>♢</span>{item}</div>)}</div>
      <section className="related-gems"><div className="related-heading"><h2>Related Gemstones</h2><Link href="/gemstones">Explore More <ArrowRight size={14}/></Link></div><div>{related.map((item)=><Link key={item.slug} href={`/gemstones/${item.slug}`}><div className={`related-thumb related-${item.slug}`}><span>✦</span></div><b>{item.name}</b><small>{item.description.slice(0,58)}…</small></Link>)}</div></section>
    </div><section className="profile-quote"><div className="container-page"><span>Gemstones are not just treasures, but a connection<br/>between the Earth’s history and our own.</span><strong>GemologyX</strong></div></section>
  </article>;
}

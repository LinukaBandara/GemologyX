import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { TreatmentExplorer } from "@/components/treatment-explorer";
import { treatmentGuides } from "@/data/treatments";

export function generateStaticParams() {
  return treatmentGuides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/learn/gemstone-treatments/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = treatmentGuides.find((item) => item.slug === slug);
  if (!guide) return {};
  return { title: `${guide.title}: Gemstone Treatment Guide`, description: guide.summary, alternates: { canonical: `/learn/gemstone-treatments/${guide.slug}` } };
}

export default async function TreatmentArticle({ params }: PageProps<"/learn/gemstone-treatments/[slug]">) {
  const { slug } = await params;
  const index = treatmentGuides.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const guide = treatmentGuides[index];
  return <main className="container-page py-10 md:py-16">
    <nav aria-label="Breadcrumb" className="text-xs text-muted"><Link href="/learn" className="hover:text-accent">Learn</Link><span className="mx-2">/</span><Link href="/learn/gemstone-treatments" className="hover:text-accent">Treatments</Link><span className="mx-2">/</span><span>{guide.title}</span></nav>
    <header className="mt-8 max-w-3xl"><Link href="/learn/gemstone-treatments" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-accent"><ArrowLeft size={15}/> All treatment guides</Link><p className="mt-5 luxury-eyebrow"><span/> {guide.eyebrow}</p><h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">{guide.title}</h1><p className="mt-4 text-base leading-8 text-muted">{guide.summary}</p></header>
    <TreatmentExplorer guides={treatmentGuides.slice(index).concat(treatmentGuides.slice(0,index))}/>
    <section className="mx-auto mt-12 max-w-4xl"><h2 className="font-serif text-3xl">What to know</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{[{title:"How the process works",text:guide.mechanism},{title:"Examples in gem materials",text:guide.examples},{title:"Stability and care",text:`${guide.stability} ${guide.care}`},{title:"Questions and disclosure",text:guide.disclosure}].map((item)=><article key={item.title} className="rounded-2xl border border-border bg-white p-5 sm:p-6"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-7 text-muted">{item.text}</p></article>)}</div>
      <div className="mt-6 rounded-2xl bg-[#f5f1e8] p-5 sm:p-6"><p className="text-sm leading-7 text-muted">This is a general educational overview. A trade term or visual appearance cannot establish a gemstone’s identity or treatment. Laboratory conclusions are limited to the submitted item, the methods used and the issuing lab’s reporting scope. Disclosure laws differ by jurisdiction.</p><a href={guide.source} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent">{guide.sourceLabel}<ArrowUpRight size={15}/></a></div>
    </section>
    <nav aria-label="Treatment guide navigation" className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-between gap-3 border-t border-border pt-5"><Link href={`/learn/gemstone-treatments/${treatmentGuides[(index + treatmentGuides.length - 1) % treatmentGuides.length].slug}`} className="inline-flex min-h-11 items-center text-sm text-muted hover:text-accent">← Previous treatment</Link><Link href={`/learn/gemstone-treatments/${treatmentGuides[(index + 1) % treatmentGuides.length].slug}`} className="inline-flex min-h-11 items-center text-sm text-muted hover:text-accent">Next treatment →</Link></nav>
  </main>;
}

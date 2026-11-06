import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TreatmentExplorer } from "@/components/treatment-explorer";
import { treatmentGuides } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Gemstone Treatments: Interactive Guide",
  description: "Explore common gemstone treatments, how they work, care considerations and questions to ask using an interactive gemology guide.",

  alternates: { canonical: "/learn/gemstone-treatments" },
};

export default function GemstoneTreatmentsPage() {
  return <main className="container-page py-10 md:py-16">
    <nav aria-label="Breadcrumb" className="text-xs text-muted"><Link href="/learn" className="hover:text-accent">Learn</Link><span className="mx-2">/</span><span>Gemstone treatments</span></nav>
    <header className="mt-7 max-w-3xl"><div className="luxury-eyebrow"><span/> GEMSTONE KNOWLEDGE · TREATMENTS</div><h1 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">Understand the story behind a gemstone’s appearance.</h1><p className="mt-5 max-w-2xl text-base leading-8 text-muted">Gem treatment is a broad topic. Explore how common processes work, what they may mean for care, and how to ask for clear disclosure. The interactive illustration is educational, not a method of identifying treatment.</p></header>
    <TreatmentExplorer guides={treatmentGuides}/>
    <section className="mt-14"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="luxury-eyebrow"><span/> THE REFERENCE LIBRARY</p><h2 className="mt-3 font-serif text-3xl">Explore each treatment</h2></div><p className="max-w-lg text-sm leading-6 text-muted">Each guide separates general background from what needs an individual laboratory assessment.</p></div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{treatmentGuides.map((guide,i)=><Link key={guide.slug} href={`/learn/gemstone-treatments/${guide.slug}`} className="group rounded-2xl border border-border bg-white p-5 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg sm:p-6"><div className="flex items-center justify-between"><span className="text-xs font-bold tracking-[.18em] text-accent">{String(i+1).padStart(2,"0")} · {guide.eyebrow}</span><ArrowUpRight size={16} className="text-muted transition group-hover:text-accent"/></div><h3 className="mt-4 font-serif text-2xl">{guide.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{guide.summary}</p><span className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-accent">Read the guide <span className="sr-only">: {guide.title}</span><ArrowUpRight size={14} className="ml-2"/></span></Link>)}</div>
    </section>
    <aside className="mt-12 rounded-2xl border border-[#e6d8b8] bg-[#fbf7ee] p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#8c6d34]">A note on disclosure</p><h2 className="mt-2 font-serif text-2xl">Clear information supports a confident decision.</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-muted">Treatment terminology, reporting practices and legal disclosure requirements vary by market and jurisdiction. Ask for written details, read the issuing laboratory’s own report language and verify applicable local rules.</p><Link href="/learn/gemstone-treatments/treatment-disclosure" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent">Explore disclosure and reports <ArrowUpRight size={15}/></Link></aside>
  </main>;
}

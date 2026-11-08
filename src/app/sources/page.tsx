import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpenCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Sources and Citations",
  description: "How GemologyX uses references, distinguishes evidence from opinion and handles claims that need current verification.",
  alternates: { canonical: "/sources" },
  openGraph: { type: "website", images: ["/gemologyx-social.svg"], title: "GemologyX Sources and References", description: "Explore the gemological laboratories, authorities and references used across GemologyX educational guides.", url: "/sources" },
  twitter: { card: "summary_large_image", images: ["/gemologyx-social.svg"], title: "GemologyX Sources and References", description: "Explore the gemological laboratories, authorities and references used across GemologyX educational guides." },
};

const practices = [
  { title: "Prefer sources close to the evidence", body: "For gemological properties, treatments and identification, look for established gemological laboratories, peer-reviewed research and specialist reference works. For regulations, permits and export procedures, start with the responsible government authority." },
  { title: "Read the scope, not only the headline", body: "A source may address one material, method, jurisdiction or date range. We aim to preserve those limits and distinguish measured findings from interpretation, trade language or seller claims." },
  { title: "Verify changing information directly", body: "Prices, laws, laboratory services and market conditions can change. Treat a page as educational context, check its linked source, and confirm current details with the relevant organization before making a decision." },
  { title: "Tell us when a source needs attention", body: "The site currently has no working contact channel, so readers cannot yet submit corrections through this page. When a channel is published, useful reports will identify the page, the claim in question, and a reliable reference; proposed changes should be checked against the source’s evidence and scope." },
];

export default function SourcesPage() {
  return <div className="container-page max-w-3xl py-12 md:py-16">
    <nav className="luxury-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Sources</span></nav>
    <header className="border-b border-border pb-8"><div className="gx-eyebrow"><span /> RESEARCH PRACTICE</div><h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">Sources and citations</h1><p className="mt-3 text-sm leading-relaxed text-muted md:text-base">GemologyX is an educational reference. This guide explains how to approach the evidence behind gemological explanations and where to verify details that may change.</p></header>
    <div className="mt-8 space-y-4">{practices.map((item) => <section key={item.title} className="gx-card p-5 md:p-6"><h2 className="font-serif text-xl font-semibold">{item.title}</h2><p className="mt-2 text-sm leading-6 text-muted">{item.body}</p></section>)}</div>
    <section className="mt-8 rounded-xl border border-border bg-white p-5 md:p-6"><div className="flex items-center gap-2"><BookOpenCheck size={18} className="text-accent" /><h2 className="font-serif text-xl font-semibold">Explore cited reference areas</h2></div><ul className="mt-4 grid gap-3 sm:grid-cols-2">{[{label:"Sri Lanka mining and official resources",href:"/sri-lanka-mining"},{label:"Editorial standards",href:"/editorial-standards"},{label:"Gemstone origins",href:"/origins"},{label:"Treatment and report guides",href:"/learn"}].map((link)=><li key={link.href}><Link className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-strong" href={link.href}>{link.label}<ArrowUpRight size={14}/></Link></li>)}</ul></section>
    <p className="mt-8 text-sm text-muted">See our <Link href="/editorial-standards" className="font-medium text-accent underline">editorial standards</Link>. Correction submissions are not available yet; the <Link href="/contact" className="font-medium text-accent underline">contact page</Link> explains the current status.</p>
  </div>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Gemstone Mining Licences in Sri Lanka: Official Guidance",
  description: "Where to find official Sri Lankan gemstone mining licence information and what to verify before starting work. Not legal advice.",
  alternates: { canonical: "/sri-lanka-mining/licensing" },
};

const sources = [
  { title: "NGJA mining licence process", href: "https://ngja.gov.lk/business_services/minning-licence-process/", description: "The authority's published procedure for mining licences." },
  { title: "NGJA mining consultancy", href: "https://ngja.gov.lk/business_services/minning-consultancy/", description: "Official mining-related consultancy information." },
  { title: "NGJA gemstone mining industry", href: "https://ngja.gov.lk/gems/gemstone-mining-industry/", description: "Background on the Sri Lankan gemstone mining industry." },
];

export default function MiningLicensingPage() {
  return <article className="container-page max-w-4xl py-12 md:py-16">
    <nav className="luxury-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/sri-lanka-mining">Sri Lanka Mining</Link><span>/</span><span>Licensing</span></nav>
    <header className="article-hero"><div className="luxury-eyebrow"><span /> OFFICIAL PROCESS GUIDE</div><h1 className="mt-5 font-serif text-4xl font-semibold leading-tight md:text-6xl">Gemstone Mining Licences in Sri Lanka</h1><p className="mt-5 max-w-3xl text-base leading-7 text-muted md:text-lg">How to find and verify official licensing information before undertaking gemstone-mining activity in Sri Lanka.</p></header>
    <div className="profile-content">
      <section><h2>Start with the current official procedure</h2><p>Mining-related requirements depend on the activity, site and circumstances. Do not rely on a general online summary as authorization to begin work. Review the National Gem and Jewellery Authority's current instructions and contact the authority to confirm what applies to the exact proposed activity and location.</p></section>
      <section><h2>Information to clarify before proceeding</h2><ul><li>What type of mining activity is proposed, and where is the site?</li><li>Which application, licence or other permission applies to that activity?</li><li>What documents, site information, consents or supporting approvals are required?</li><li>Are there conditions concerning equipment, land access, environmental protection or rehabilitation?</li><li>What are the current fees, processing steps, validity period and renewal requirements?</li><li>Which authority or qualified professional can clarify an uncertain requirement?</li></ul><p>This is a verification checklist, not a definitive list of legal requirements. The current official procedure takes precedence.</p></section>
      <section><h2>Official resources</h2>{sources.map(s=><a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="mt-3 block rounded-lg border border-border bg-surface p-4 hover:border-accent"><span className="flex items-center justify-between gap-3 font-medium">{s.title}<ExternalLink size={15} className="shrink-0 text-accent"/></span><span className="mt-2 block text-sm leading-6 text-muted">{s.description}</span></a>)}</section>
      <section><h2>Why this page does not list fixed fees or timelines</h2><p>Fees, forms, required supporting material and administrative procedures can change. Without a current, dated official source for each detail, publishing a fixed number could mislead readers. Confirm current values directly with NGJA before preparing an application.</p></section>
    </div>
    <div className="mt-10"><Link href="/sri-lanka-mining" className="luxury-button luxury-button-secondary"><ArrowLeft size={15}/> Back to Sri Lanka Mining hub</Link></div>
    <aside className="mt-8 rounded-xl border border-border bg-surface p-5 text-sm leading-6 text-muted"><strong className="text-foreground">Important:</strong> This page is for general information and is not legal advice. It does not confirm eligibility or permission to mine. Verify current requirements with NGJA and seek qualified Sri Lankan professional advice where necessary.</aside>
  </article>;
}

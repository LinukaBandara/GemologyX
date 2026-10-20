import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Gemstone Mining Methods in Sri Lanka",
  description: "Understand the broad differences between pit, tunnel, alluvial and mechanized gemstone mining, including site-specific safety and environmental considerations.",
  alternates: { canonical: "/sri-lanka-mining/methods" },
};

const sources = [
  { title: "NGJA — Gemstone mining industry", href: "https://ngja.gov.lk/gems/gemstone-mining-industry/" },
  { title: "Research: environmental effects in Ratnapura", href: "https://journals.sjp.ac.lk/index.php/SLJRE/article/view/6355" },
];

const methods = [
  { title: "Pit and shaft mining", body: "Excavations may access gem-bearing gravel at varying depths. The method depends on local geology and site conditions. Ground stability, water ingress, safe access and competent supervision are essential considerations." },
  { title: "Tunnel mining", body: "Tunnels may be used where deposits occur below the surface. Collapse, flooding, air quality and emergency egress can present severe risks. This overview is not an excavation guide; mine-specific engineering and competent oversight are required." },
  { title: "Alluvial and river-associated mining", body: "Water can transport and concentrate resistant mineral grains in sediment. Work near rivers may disturb banks, increase sediment loads and affect habitats. Outcomes depend on the location, method, scale and controls." },
  { title: "Mechanized excavation", body: "Machines can alter the scale, speed and footprint of excavation. Equipment use does not itself establish that work is permitted: land access, licensing and environmental conditions must be confirmed for the particular site." },
];

export default function MiningMethodsPage() {
  return <article className="container-page max-w-4xl py-12 md:py-16">
    <nav className="luxury-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/sri-lanka-mining">Sri Lanka Mining</Link><span>/</span><span>Methods</span></nav>
    <header className="article-hero">
      <div className="luxury-eyebrow"><span /> MINING & GEOLOGY</div>
      <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight md:text-6xl">Gemstone Mining Methods in Sri Lanka</h1>
      <p className="mt-5 max-w-3xl text-base leading-7 text-muted md:text-lg">A high-level guide to common mining approaches, why methods differ by deposit, and the safety and environmental questions that must be considered.</p>
    </header>
    <div className="profile-content">
      <section><h2>There is no single method for every deposit</h2><p>Gem-bearing material occurs in different geological settings. The suitable approach depends on the deposit, local ground and water conditions, access, the scale of work and applicable permissions. A general article cannot determine which method is appropriate for a particular site.</p></section>
      <section><h2>Common approaches</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{methods.map((m) => <div key={m.title} className="rounded-xl border border-border bg-surface p-5"><h3 className="font-serif text-xl font-semibold">{m.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{m.body}</p></div>)}</div></section>
      <section><h2>Safety questions to assess before work</h2><ul><li>Have ground stability and water risks been assessed by competent people?</li><li>Are access, exit and emergency arrangements suitable for the site?</li><li>Are machinery and worker movements managed safely?</li><li>Are workers trained and equipped for the hazards actually present?</li><li>Are the required approvals and land permissions in place?</li></ul><p>This checklist is not a safety standard, site assessment or permission to enter an active mine.</p></section>
      <section><h2>Environmental considerations</h2><p>Studies in Sri Lankan mining areas have investigated effects such as erosion, vegetation disturbance, changes in water quality and riverbank impacts. Findings from one study area should not be treated as a measurement of every mine. Site-specific assessment, mitigation and monitoring matter.</p></section>
      <section><h2>Sources and further reading</h2>{sources.map(s=><a key={s.href} className="mt-3 flex items-center justify-between rounded-lg border border-border bg-surface p-4 hover:border-accent" href={s.href} target="_blank" rel="noreferrer"><span>{s.title}</span><ExternalLink size={15} className="text-accent"/></a>)}</section>
    </div>
    <div className="mt-10"><Link href="/sri-lanka-mining" className="luxury-button luxury-button-secondary"><ArrowLeft size={15}/> Back to Sri Lanka Mining hub</Link></div>
    <aside className="mt-8 rounded-xl border border-border bg-surface p-5 text-sm leading-6 text-muted"><strong className="text-foreground">Note:</strong> General education only. Confirm current requirements with the relevant Sri Lankan authority and qualified professionals before undertaking mining activity.</aside>
  </article>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Environmental Impacts of Gem Mining in Sri Lanka",
  description: "Evidence-led overview of potential environmental impacts from gemstone mining in Sri Lanka, including erosion, sediment, vegetation disturbance, riverbanks and rehabilitation.",
  alternates: { canonical: "/sri-lanka-mining/environment" },
};

const sources = [
  { title: "Sri Lankan study: environmental effects of gem mining in Ratnapura", href: "https://journals.sjp.ac.lk/index.php/SLJRE/article/view/6355", note: "Examines selected mining methods and impacts in a particular study area." },
  { title: "Study of gem mining and the Kumbukkan Oya river environment", href: "https://journals.sjp.ac.lk/index.php/fesympo/article/view/7188", note: "Discusses riverine impacts and rehabilitation and monitoring considerations." },
  { title: "Study of environmental effects associated with illegal gem mining", href: "https://journals.sjp.ac.lk/index.php/fesympo/article/view/8227", note: "Reports environmental disturbances examined by the study; findings are context-specific." },
];

export default function MiningEnvironmentPage() {
  return <article className="container-page max-w-4xl py-12 md:py-16">
    <nav className="luxury-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/sri-lanka-mining">Sri Lanka Mining</Link><span>/</span><span>Environment</span></nav>
    <header className="article-hero"><div className="luxury-eyebrow"><span /> ENVIRONMENT & REHABILITATION</div><h1 className="mt-5 font-serif text-4xl font-semibold leading-tight md:text-6xl">Environmental Impacts of Gem Mining in Sri Lanka</h1><p className="mt-5 max-w-3xl text-base leading-7 text-muted md:text-lg">What research from selected Sri Lankan locations says about land, water and habitats—and why rehabilitation needs to be planned and monitored.</p></header>
    <div className="profile-content">
      <section><h2>Impacts depend on the site and method</h2><p>Gem mining does not produce identical environmental outcomes everywhere. Geology, excavation method, scale, rainfall, drainage, proximity to rivers, site management and rehabilitation all affect the nature and severity of disturbance. Research findings should be read in the context of the methods and locations studied.</p></section>
      <section><h2>Environmental issues investigated in Sri Lanka</h2><h3>Soil erosion and disturbed ground</h3><p>Excavation and removal of vegetation can expose soil to erosion or change local drainage. Unstable or poorly managed disturbed areas may require site-specific stabilisation and monitoring.</p><h3>Water and sediment</h3><p>Mining activity near waterways can increase sediment or alter water conditions. The extent of any effect needs to be assessed using evidence from the specific location rather than assumed from the presence of mining alone.</p><h3>Vegetation and habitats</h3><p>Clearing and physical disturbance can affect vegetation and habitat continuity. Restoration goals should reflect the local ecosystem and the actual disturbance, not simply the number of seedlings planted.</p><h3>Riverbanks and aquatic environments</h3><p>Research from selected river settings has discussed bank disturbance and effects on riverine environments. Appropriate controls and post-work monitoring need to be designed for the individual site.</p></section>
      <section><h2>What responsible rehabilitation should consider</h2><ul><li>Document the site condition before disturbance and define realistic restoration objectives.</li><li>Manage excavated material, drainage and erosion risks appropriately.</li><li>Stabilise disturbed areas and restore vegetation where suitable for the local ecology.</li><li>Consider riverbank and waterway recovery where those systems were affected.</li><li>Monitor outcomes over time and adapt the plan if recovery goals are not being met.</li></ul><p>This is a high-level educational list, not a substitute for a qualified environmental assessment or site-specific rehabilitation plan.</p></section>
      <section><h2>Read the underlying research</h2>{sources.map(s=><div key={s.href} className="mt-3 rounded-lg border border-border bg-surface p-4"><a className="flex items-center justify-between gap-3 font-medium hover:text-accent" href={s.href} target="_blank" rel="noreferrer">{s.title}<ExternalLink size={15} className="shrink-0"/></a><p className="mt-2 text-sm leading-6 text-muted">{s.note}</p></div>)}</section>
      <section><h2>Questions to ask about a mining site</h2><ul><li>What baseline information exists about water, soil and vegetation?</li><li>Which risks are relevant to the location and mining method?</li><li>Who is responsible for mitigation and rehabilitation?</li><li>How will restoration be checked and monitored after work?</li><li>Which permissions and conditions apply to this specific site?</li></ul></section>
    </div>
    <div className="mt-10"><Link href="/sri-lanka-mining" className="luxury-button luxury-button-secondary"><ArrowLeft size={15}/> Back to Sri Lanka Mining hub</Link></div>
    <aside className="mt-8 rounded-xl border border-border bg-surface p-5 text-sm leading-6 text-muted"><strong className="text-foreground">Evidence note:</strong> This page summarizes issues investigated in specific research. It does not claim that every impact occurs at every mine. Consult the original studies and relevant authorities for site-specific decisions.</aside>
  </article>;
}

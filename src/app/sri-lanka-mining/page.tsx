import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, FileCheck2, Leaf, Pickaxe, ShieldCheck, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "Gemstone Mining in Sri Lanka: Methods, Safety & Environment",
  description:
    "A practical, source-led guide to Sri Lankan gemstone mining, including traditional pits and tunnels, alluvial methods, worker safety, environmental impacts, rehabilitation and official licensing resources.",
  alternates: { canonical: "/sri-lanka-mining" },
};

const officialSources = [
  {
    title: "NGJA mining licence process",
    description: "Start here for the authority's published mining-licence procedure. Confirm current requirements directly with NGJA before acting.",
    href: "https://ngja.gov.lk/business_services/minning-licence-process/",
  },
  {
    title: "NGJA gemstone mining industry",
    description: "Official background on Sri Lanka's gemstone mining sector.",
    href: "https://ngja.gov.lk/gems/gemstone-mining-industry/",
  },
  {
    title: "NGJA mining consultancy",
    description: "Official information about mining-related consultancy services.",
    href: "https://ngja.gov.lk/business_services/minning-consultancy/",
  },
  {
    title: "NGJA export services procedure",
    description: "For readers researching the later stages of the mine-to-market supply chain.",
    href: "https://ngja.gov.lk/business_services/export-services-procedure/",
  },
];

const researchSources = [
  {
    title: "Environmental effects of gemstone mining in Ratnapura",
    detail: "A Sri Lankan research paper discussing impacts associated with tunnel, backhoe and river mining methods.",
    href: "https://journals.sjp.ac.lk/index.php/SLJRE/article/view/6355",
  },
  {
    title: "Gem mining and the Kumbukkan Oya river environment",
    detail: "Research examining riverine impacts and the need for rehabilitation and monitoring.",
    href: "https://journals.sjp.ac.lk/index.php/fesympo/article/view/7188",
  },
];

export default function SriLankaMiningPage() {
  return (
    <article className="container-page max-w-5xl py-12 md:py-16">
      <nav className="luxury-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><span>Sri Lanka Mining</span>
      </nav>

      <header className="article-hero">
        <div className="luxury-eyebrow"><span /> SRI LANKA INDUSTRY GUIDE</div>
        <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Gemstone Mining in Sri Lanka
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted md:text-lg">
          Explore how Sri Lankan gemstones are recovered, the safety and environmental
          questions mining raises, and where to verify official requirements. This guide
          connects geological context with practical, responsible industry information.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a className="luxury-button luxury-button-primary" href="#methods">Explore mining methods <ArrowRight size={16} /></a>
          <a className="luxury-button luxury-button-secondary" href="#official-resources">Official resources</a>
        </div>
      </header>

      <div className="profile-content">
        <section>
          <h2>Why Sri Lankan gem mining matters</h2>
          <p>
            Sri Lanka is internationally associated with coloured gemstones, especially
            sapphire. Mining is only one part of the industry: recovered material can move
            through sorting, trading, cutting, treatment disclosure, laboratory examination
            and export. Each stage has its own technical, commercial and regulatory questions.
          </p>
          <p>
            Mining practices vary by deposit and location. This page is an educational
            overview, not a site-specific mining plan, safety certification or legal opinion.
            The appropriate method and permissions depend on the location, geology and
            applicable requirements.
          </p>
        </section>

        <section id="methods">
          <h2>Common gemstone-mining approaches</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-5">
              <div className="mb-3 flex items-center gap-3 text-accent"><Pickaxe size={20} /><h3 className="font-serif text-xl font-semibold text-foreground">Pits and shafts</h3></div>
              <p className="text-sm leading-6 text-muted">
                Shallow pits or deeper excavations may be used to reach gem-bearing gravel.
                Ground stability, water ingress, ventilation where relevant, access and
                competent supervision are critical considerations; underground work can be
                hazardous and should not be attempted without appropriate expertise and controls.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <div className="mb-3 flex items-center gap-3 text-accent"><ShieldCheck size={20} /><h3 className="font-serif text-xl font-semibold text-foreground">Tunnel mining</h3></div>
              <p className="text-sm leading-6 text-muted">
                Tunnels may follow gem-bearing layers or gravel deposits. Collapse, flooding,
                poor air quality and unsafe access are serious hazards. This guide does not
                provide excavation instructions: site-specific engineering, legal approval and
                trained workers are essential.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <div className="mb-3 flex items-center gap-3 text-accent"><Waves size={20} /><h3 className="font-serif text-xl font-semibold text-foreground">Alluvial and river-associated mining</h3></div>
              <p className="text-sm leading-6 text-muted">
                Alluvial deposits form when water transports and concentrates mineral grains.
                Mining near rivers can disturb banks, increase sediment and affect aquatic
                habitats. The environmental outcome depends on the site, technique, scale and
                how disturbed areas are managed.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <div className="mb-3 flex items-center gap-3 text-accent"><FileCheck2 size={20} /><h3 className="font-serif text-xl font-semibold text-foreground">Mechanized excavation</h3></div>
              <p className="text-sm leading-6 text-muted">
                Equipment such as backhoes can change the scale and footprint of excavation.
                Do not assume that a method or machine is permitted at a particular site:
                verify licensing, land access and any applicable environmental conditions with
                the relevant authorities.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Worker safety: questions that should never be skipped</h2>
          <p>
            Mine safety is site-specific. Before work begins, operators need competent
            assessment of ground conditions, water and flooding risks, safe access and exit,
            machinery, communications, emergency response and worker training. Personal
            protective equipment is one layer of protection, not a substitute for managing
            the underlying hazards.
          </p>
          <ul>
            <li>Has the site been assessed by qualified, competent people?</li>
            <li>Are ground movement and water-ingress risks monitored and managed?</li>
            <li>Can workers exit safely and communicate during an emergency?</li>
            <li>Are machinery operations separated from people where necessary?</li>
            <li>Are emergency procedures understood, practised and appropriate to the site?</li>
          </ul>
          <p>
            These questions are an awareness checklist, not a complete safety standard or
            authorization to enter an active mine.
          </p>
        </section>

        <section>
          <div className="mb-3 flex items-center gap-3 text-accent"><Leaf size={21} /><h2 className="!mt-0">Environmental impacts and rehabilitation</h2></div>
          <p>
            Research on Sri Lankan gem-mining areas has examined issues including soil erosion,
            disturbed vegetation, sediment and water-quality changes, habitat loss and altered
            riverbanks. These are potential impacts documented in particular studies; their
            presence and severity should not be assumed to be identical at every site.
          </p>
          <p>
            Responsible rehabilitation should be planned for the specific site and its
            conditions. Depending on the disturbance, this may involve stabilising excavated
            areas, restoring drainage, managing spoil, rebuilding riverbanks where appropriate,
            revegetating disturbed ground and monitoring outcomes over time. A visible
            planting effort alone does not demonstrate that a site has been fully restored.
          </p>
          <p>
            <strong>Read the evidence:</strong> the research links below describe findings from
            particular Sri Lankan study areas and should be interpreted within their methods
            and limitations.
          </p>
          <div className="mt-4 space-y-3">
            {researchSources.map((source) => (
              <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="block rounded-lg border border-border bg-surface p-4 hover:border-accent">
                <span className="flex items-center justify-between gap-3 font-medium">{source.title}<ExternalLink size={15} className="shrink-0 text-accent" /></span>
                <span className="mt-1 block text-sm leading-6 text-muted">{source.detail}</span>
              </a>
            ))}
          </div>
        </section>


        <section>
          <h2>Explore focused mining guides</h2>
          <p>Continue into the main methods, environmental and licensing topics. Each guide explains its scope and links to relevant official or research sources.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <Link href="/sri-lanka-mining/methods" className="rounded-lg border border-border bg-surface p-4 hover:border-accent">
              <span className="block font-medium">Mining methods</span><span className="mt-2 block text-sm leading-6 text-muted">Compare common approaches and their site-specific considerations.</span><span className="mt-3 flex items-center gap-2 text-sm text-accent">Read guide <ArrowRight size={14}/></span>
            </Link>
            <Link href="/sri-lanka-mining/environment" className="rounded-lg border border-border bg-surface p-4 hover:border-accent">
              <span className="block font-medium">Environment & rehabilitation</span><span className="mt-2 block text-sm leading-6 text-muted">Understand research findings and restoration principles.</span><span className="mt-3 flex items-center gap-2 text-sm text-accent">Read guide <ArrowRight size={14}/></span>
            </Link>
            <Link href="/sri-lanka-mining/licensing" className="rounded-lg border border-border bg-surface p-4 hover:border-accent">
              <span className="block font-medium">Licensing & official process</span><span className="mt-2 block text-sm leading-6 text-muted">Find current NGJA procedures and questions to verify.</span><span className="mt-3 flex items-center gap-2 text-sm text-accent">Read guide <ArrowRight size={14}/></span>
            </Link>
          </div>
        </section>

        <section id="official-resources">
          <h2>Official Sri Lankan mining resources</h2>
          <p>
            Use the relevant authority's current guidance for legal and procedural questions.
            Requirements can change, and the summary on this page is not a replacement for
            official instructions or qualified professional advice.
          </p>
          <div className="mt-4 space-y-3">
            {officialSources.map((source) => (
              <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="block rounded-lg border border-border bg-surface p-4 hover:border-accent">
                <span className="flex items-center justify-between gap-3 font-medium">{source.title}<ExternalLink size={15} className="shrink-0 text-accent" /></span>
                <span className="mt-1 block text-sm leading-6 text-muted">{source.description}</span>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2>From mine to market</h2>
          <p>
            Mining is the beginning of a wider chain that can include washing and sorting,
            buying and selling, cutting and polishing, treatment disclosure, laboratory reports
            and export. Understanding the stages helps readers ask better questions about
            provenance, documentation and what a seller can substantiate.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/origins/sri-lanka" className="luxury-button luxury-button-secondary">Sri Lanka gemstone origins <ArrowRight size={15} /></Link>
            <Link href="/learn/sapphire/what-is-ceylon-sapphire" className="luxury-button luxury-button-secondary">Ceylon sapphire guide <ArrowRight size={15} /></Link>
            <Link href="/learn/gemstone-certification" className="luxury-button luxury-button-secondary">Gemstone reports <ArrowRight size={15} /></Link>
          </div>
        </section>

        <section>
          <h2>Frequently asked questions</h2>
          <h3>Can anyone start mining gemstones in Sri Lanka?</h3>
          <p>
            Do not assume so. Licensing and other requirements may apply. Review the current
            NGJA procedure and confirm requirements for the specific activity and location
            before undertaking any work.
          </p>
          <h3>Does alluvial mining always damage rivers?</h3>
          <p>
            Not every site has the same impacts. Research has documented riverbank and
            ecosystem concerns in particular locations, so assessment and monitoring should
            be based on the site and method rather than a blanket assumption.
          </p>
          <h3>Can gemstone origin be confirmed by appearance?</h3>
          <p>
            Appearance alone cannot reliably establish geographic origin. Origin opinions,
            when offered, require specialist laboratory analysis and depend on the available
            evidence.
          </p>
        </section>
      </div>

      <aside className="mt-10 rounded-xl border border-border bg-surface p-5 text-sm leading-6 text-muted">
        <strong className="text-foreground">Editorial note:</strong> This guide is for general
        education. It does not replace current government instructions, a site-specific
        environmental assessment, mine-safety expertise or legal advice. Check the linked
        official sources for current requirements.
      </aside>
    </article>
  );
}

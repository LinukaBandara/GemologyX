"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import { allGemstones } from "@/data/all-gemstones";
import { origins } from "@/data/origins";
import { glossaryTerms } from "@/data/glossary";
import { sriLankaGemTerms } from "@/data/sri-lanka-gem-terms";

const guides = [
  { title: "What Is Ceylon Sapphire?", description: "Sri Lankan sapphire terminology, origin and buying context.", href: "/learn/sapphire/what-is-ceylon-sapphire", keywords: "sri lanka ceylon sapphire origin" },
  { title: "What Makes a Sapphire Valuable?", description: "The main quality and market factors to understand.", href: "/learn/sapphire/sapphire-value-factors", keywords: "sapphire value color clarity cut price" },
  { title: "Natural vs Synthetic Gemstones", description: "Understand natural, laboratory-grown and imitation materials.", href: "/learn/natural-vs-synthetic-gemstones", keywords: "natural synthetic lab grown imitation glass" },
  { title: "Heated vs Unheated Gemstones", description: "Treatment disclosure and what a report can tell you.", href: "/learn/heated-vs-unheated", keywords: "heat treatment heated unheated sapphire" },
  { title: "Interactive Gemstone Treatment Guide", description: "Explore treatment mechanisms, care considerations, and disclosure questions.", href: "/learn/gemstone-treatments", keywords: "heat lattice diffusion fracture filling emerald oil resin irradiation dye impregnation treatment disclosure stability care" },
  { title: "Treatment Disclosure and Lab Reports", description: "Understand report scope, treatment comments, verification, and questions for a seller.", href: "/learn/gemstone-treatments/treatment-disclosure", keywords: "treatment disclosure report laboratory lab report verify scope limitations legal jurisdiction" },
  { title: "Interactive Gemstone Buyer’s Desk", description: "Use the purchase checklist and explore guides on price, photos, origin, reports and return terms.", href: "/learn/buying-gemstones", keywords: "buying buyer online price per carat origin claim lab report photos returns appraisal value factors checklist" },
  { title: "Interactive Gemstone Cut & Light Lab", description: "Move the illustrative light and explore cut anatomy, windowing, extinction and faceting.", href: "/learn/gemstone-cut", keywords: "cut anatomy table crown girdle pavilion culet shape faceting brilliant step mixed windowing extinction polish symmetry" },
  { title: "Interactive Gem Formation Explorer", description: "Explore magmatic, pegmatitic, hydrothermal, metamorphic and secondary gem deposits.", href: "/learn/gem-formation", keywords: "geology formation deposits magmatic pegmatite hydrothermal metamorphic alluvial placer primary secondary rocks" },
  { title: "Sri Lankan Gem Trade Terms", description: "Learn what terms such as geuda, dullam, lapidary and Ceylon sapphire mean in Sri Lankan trade contexts.", href: "/learn/sri-lanka-gem-terms", keywords: "Sri Lanka Sri Lankan gem terms trade geuda dullam rough lapidary cutting yield Ceylon sapphire origin opinion heat treatment dealer gravel" },
  ...[
    { title: "How Gemstones Form: The Big Picture", slug: "gem-formation-environments", keywords: "geology formation environment process" },
    { title: "Gemstones Formed in Magmatic Rocks", slug: "gems-in-magmatic-rocks", keywords: "igneous magma crystallization peridot olivine" },
    { title: "Gem Granitic Pegmatites", slug: "gem-granitic-pegmatites", keywords: "pegmatite tourmaline beryl spodumene" },
    { title: "Hydrothermal Fluids and Gemstones", slug: "hydrothermal-gem-formation", keywords: "fluid vein hydrothermal inclusion" },
    { title: "Gemstones Formed in Metamorphic Rocks", slug: "gems-formed-in-metamorphic-rocks", keywords: "metamorphic heat pressure recrystallization" },
    { title: "Alluvial and Placer Gem Deposits", slug: "alluvial-and-placer-gem-deposits", keywords: "alluvial placer sediment river secondary" },
    { title: "Primary and Secondary Gem Deposits", slug: "primary-and-secondary-gem-deposits", keywords: "primary host rock secondary transport erosion" },
  ].map((guide) => ({ title: guide.title, description: "Learn how geological setting and transport shape gemstone deposits.", href: `/learn/gem-formation/${guide.slug}`, keywords: guide.keywords })),
  ...[
    { title: "Anatomy of a Faceted Gemstone", slug: "gemstone-cut-anatomy", keywords: "table crown girdle pavilion culet facet" },
    { title: "Gemstone Shape and Cut Style", slug: "gem-shape-vs-cut-style", keywords: "shape outline cut style facets oval brilliant step" },
    { title: "Gemstone Windowing", slug: "gemstone-windowing", keywords: "window light passes through shallow pavilion" },
    { title: "Extinction, Darkness and Contrast", slug: "gemstone-extinction-and-darkness", keywords: "extinction darkness contrast absorption light pattern" },
    { title: "Observing Gemstone Cut Quality", slug: "gemstone-cut-quality-observations", keywords: "cut quality craftsmanship polish symmetry proportions" },
    { title: "Brilliant, Step and Mixed Faceting", slug: "gem-faceting-styles", keywords: "brilliant step mixed facet arrangement" },
    { title: "Cutting Tradeoffs: Beauty, Colour and Weight", slug: "gem-cutting-tradeoffs", keywords: "cutting beauty color colour weight retention value zoning" },
  ].map((guide) => ({ title: guide.title, description: "Learn how gemstone shape, cutting choices and light affect what you see.", href: `/learn/gemstone-cut/${guide.slug}`, keywords: guide.keywords })),
  ...[
    { title: "Buying Gemstones Online", slug: "buying-gemstones-online", keywords: "online listing photo video seller return shipping" },
    { title: "Gemstone Price per Carat", slug: "gemstone-price-per-carat", keywords: "price cost value carat quality market" },
    { title: "Understanding Gemstone Origin Claims", slug: "gemstone-origin-claims", keywords: "origin locality provenance report country lab opinion" },
    { title: "A Buyer’s Gemstone Report Checklist", slug: "gemstone-lab-report-checklist", keywords: "report verify lab natural treatment origin measurements" },
    { title: "How to Assess Gemstone Listing Photos", slug: "gemstone-listing-photos", keywords: "photos images video color lighting online buy" },
    { title: "Returns, Independent Checks and Appraisals", slug: "gemstone-returns-and-appraisals", keywords: "return appraisal independent examination terms" },
    { title: "What Influences a Colored Gemstone’s Value?", slug: "colored-gemstone-value-factors", keywords: "value factors colour color clarity cut rarity durability price" },
  ].map((guide) => ({ title: guide.title, description: "Practical gemstone buying guidance with a clear checklist and primary-source reading.", href: `/learn/buying-gemstones/${guide.slug}`, keywords: guide.keywords })),
  { title: "How to Read a Gemstone Report", description: "A practical guide to report fields and their limits.", href: "/learn/how-to-read-a-gemstone-report", keywords: "certificate lab report identification treatment" },
  { title: "Using a Microscope in Gemology", description: "Learn how illumination choices reveal different features and why interpretation needs context.", href: "/learn/gemstone-microscope-guide", keywords: "microscope darkfield diffused reflected fiber optic polarized inclusions" },
  { title: "How to Use a Gem Loupe", description: "Practical magnified observations, lighting ideas and limits of the hand loupe.", href: "/learn/using-a-gem-loupe", keywords: "loupe magnification 10x surface inclusion facet junction" },
  { title: "What Is Refractive Index?", description: "Understand gemstone optics, refractive index and the role of a refractometer.", href: "/learn/refractive-index", keywords: "refractive index RI refractometer optics light" },
  { title: "How a Gem Refractometer Works", description: "Learn about critical-angle readings, instrument range and interpretation limits.", href: "/learn/gemstone-refractometer-guide", keywords: "refractometer shadow edge contact liquid critical angle instrument" },
  { title: "Using a Polariscope in Gemology", description: "Understand crossed-polarizer reactions and their interpretation limits.", href: "/learn/using-a-polariscope", keywords: "polariscope polarized optic character isotropic anisotropic aggregate strain birefringence" },
    { title: "Using a Spectroscope in Gemology", description: "Explore visible absorption features and the limits of visual spectrum observations.", href: "/learn/gemstone-spectroscope-guide", keywords: "spectroscope spectrum absorption dark lines bands wavelength spectrometer visible spectroscopy" },
    { title: "Specific Gravity and Hydrostatic Weighing", description: "Understand the SG ratio and see how in-air and suspended weights relate.", href: "/learn/specific-gravity-guide", keywords: "specific gravity SG density hydrostatic weighing weight air water buoyancy" },
    { title: "Using a Dichroscope in Gemology", description: "Explore two transmitted-light images and how viewing direction affects pleochroism.", href: "/learn/dichroscope-guide", keywords: "dichroscope pleochroism dichroism anisotropic uniaxial biaxial optic axis transmitted light color" },
    { title: "Observing Gemstones Under UV Light", description: "Compare longwave and shortwave fluorescence observations, with safety and interpretation limits.", href: "/learn/uv-fluorescence-guide", keywords: "ultraviolet UV fluorescence phosphorescence LWUV SWUV longwave shortwave 365 254 safety" },
  { title: "Gemstone Care", description: "Safer care and cleaning basics for different gem materials.", href: "/learn/gemstone-care", keywords: "clean clean ultrasonic care durability jewelry" },
  { title: "Questions to Ask a Gem Dealer", description: "Questions about identity, treatments, reports, price and returns.", href: "/learn/questions-to-ask-gem-dealer", keywords: "buying dealer purchase seller checklist" },
];

const shortcuts = ["Sapphire", "heat treatment", "Sri Lanka", "carat", "asterism"];

export function SearchExperience({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const normalized = query.trim().toLocaleLowerCase();

  const results = useMemo(() => {
    if (!normalized) return { gemstones: [], origins: [], sinhalaTerms: [], glossary: [], guides: [] };
    const includes = (...values: string[]) => values.join(" ").toLocaleLowerCase().includes(normalized);
    return {
      gemstones: allGemstones.filter((gem) => includes(gem.name, gem.mineralFamily, gem.description, ...gem.colors, ...(gem.commonTreatments ?? []))),
      origins: origins.filter((origin) => includes(origin.name, origin.summary, ...(origin.gemstones ?? []))),
      sinhalaTerms: sriLankaGemTerms.filter((term) => includes(term.term, term.label, term.definition, term.context)),
      glossary: glossaryTerms.filter((term) => includes(term.term, term.definition)),
      guides: guides.filter((guide) => includes(guide.title, guide.description, guide.keywords)),
    };
  }, [normalized]);

  const total = results.gemstones.length + results.origins.length + results.sinhalaTerms.length + results.glossary.length + results.guides.length;

  return (
    <section className="mt-8" aria-label="Search the GemologyX library">
      <label className="flex min-h-14 items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3.5 shadow-sm transition focus-within:border-accent focus-within:shadow-md md:px-5">
        <Search size={19} className="shrink-0 text-accent" aria-hidden="true" />
        <span className="sr-only">Search gemstones, origins, glossary terms and guides</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try sapphire, heat treatment, Ratnapura…"
          className="min-w-0 flex-1 border-0 bg-transparent text-base outline-none placeholder:text-muted"
        />
        {query && <button type="button" aria-label="Clear search" onClick={() => setQuery("")} className="rounded-full p-1 text-muted hover:bg-accent-soft hover:text-accent"><X size={17} /></button>}
        <kbd className="hidden rounded-md border border-border bg-background px-2 py-1 text-[0.65rem] text-muted sm:inline">LIVE</kbd>
      </label>

      {!normalized ? (
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Explore a topic</p>
          <div className="mt-3 flex flex-wrap gap-2">{shortcuts.map((item) => <button key={item} type="button" onClick={() => setQuery(item)} className="rounded-full border border-border bg-white px-3.5 py-2 text-sm text-foreground transition hover:border-accent hover:bg-accent-soft">{item}</button>)}</div>
          <p className="mt-6 text-sm text-muted">Search across gemstone profiles, origin entries, glossary definitions and selected learning guides.</p>
        </div>
      ) : total === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-border bg-white/70 px-6 py-10 text-center">
          <h2 className="font-serif text-xl font-semibold">No matches for “{query.trim()}”</h2>
          <p className="mt-2 text-sm text-muted">Try a gem name, colour, treatment, country or gemological term.</p>
          <button type="button" onClick={() => setQuery("")} className="gx-btn gx-btn-secondary mt-5">Clear search</button>
        </div>
      ) : (
        <>
          <p className="mt-6 text-sm text-muted" aria-live="polite"><strong className="text-foreground">{total}</strong> matching entries</p>
          <div className="mt-3 space-y-7">
            {results.gemstones.length > 0 && <SearchGroup title="Gemstones">{results.gemstones.map((gem) => <ResultLink key={gem.slug} href={`/gemstones/${gem.slug}`} title={gem.name} detail={`${gem.mineralFamily} · Mohs ${gem.hardness} · ${gem.colors.slice(0, 3).join(", ")}`} />)}</SearchGroup>}
            {results.origins.length > 0 && <SearchGroup title="Origins and localities">{results.origins.map((origin) => <ResultLink key={origin.slug} href={`/origins/${origin.slug}`} title={origin.name} detail={origin.summary} />)}</SearchGroup>}
            {results.sinhalaTerms.length > 0 && <SearchGroup title="Sri Lanka · Sinhala guides">{results.sinhalaTerms.map((term) => <ResultLink key={term.term} href="/si/learn/sri-lanka-gem-terms" title={`${term.term} · ${term.label}`} detail={`${term.category} — ${term.definition}`} />)}</SearchGroup>}
            {results.glossary.length > 0 && <SearchGroup title="Glossary">{results.glossary.map((term) => <ResultLink key={term.slug} href={`/glossary/${term.slug}`} title={term.term} detail={term.definition} />)}</SearchGroup>}
            {results.guides.length > 0 && <SearchGroup title="Learning guides">{results.guides.map((guide) => <ResultLink key={guide.href} href={guide.href} title={guide.title} detail={guide.description} />)}</SearchGroup>}
          </div>
        </>
      )}
    </section>
  );
}

function SearchGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><div className="mb-3 flex items-center gap-3"><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{title}</h2><span className="h-px flex-1 bg-border" /></div><ul className="grid gap-2 sm:grid-cols-2">{children}</ul></section>;
}

function ResultLink({ href, title, detail }: { href: string; title: string; detail: string }) {
  return <li><Link href={href} className="group flex h-full items-start justify-between gap-4 rounded-xl border border-border bg-white p-4 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-sm"><span><span className="block font-medium text-foreground group-hover:text-accent">{title}</span><span className="mt-1 block text-xs leading-5 text-muted line-clamp-2">{detail}</span></span><ArrowUpRight size={15} className="mt-0.5 shrink-0 text-accent" /></Link></li>;
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, CalendarDays, CircleDot, Gem, Layers3,
  Ruler, Scale, Sparkles, Waves, Compass, Palette,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gemology Tools & Calculators",
  description:
    "Explore practical gemstone calculators and gemological reference tools for carat weight, measurements, ring sizes, hardness, birthstones and specific gravity.",
  alternates: { canonical: "/tools" },
};

const availableTools = [
  {
    slug: "carat-to-gram",
    number: "01",
    name: "Carat & gram converter",
    category: "Weight",
    description: "Move between metric grams and the standard carat unit with an exact conversion.",
    detail: "1 ct = 0.2 g",
    icon: Scale,
  },
  {
    slug: "gemstone-size",
    number: "02",
    name: "Gemstone size estimator",
    category: "Measurement",
    description: "Explore how a stone’s face-up dimensions and shape relate to an approximate weight.",
    detail: "Dimensions in millimetres",
    icon: Ruler,
  },
  {
    slug: "ring-size",
    number: "03",
    name: "Ring size converter",
    category: "Jewellery",
    description: "Compare common US, UK and European ring-size references in one place.",
    detail: "US · UK · EU",
    icon: CircleDot,
  },
  {
    slug: "mohs-hardness",
    number: "04",
    name: "Mohs hardness reference",
    category: "Properties",
    description: "Explore the ten reference minerals and the relative scratch resistance scale.",
    detail: "Scale 1–10",
    icon: Layers3,
  },
  {
    slug: "birthstones",
    number: "05",
    name: "Birthstone finder",
    category: "Reference",
    description: "Discover commonly recognised birthstones by month, including traditional variations.",
    detail: "12 months",
    icon: CalendarDays,
  },
  {
    slug: "specific-gravity",
    number: "06",
    name: "Specific gravity calculator",
    category: "Physical properties",
    description: "Estimate relative density from mass in air and apparent mass in water.",
    detail: "Hydrostatic method",
    icon: Waves,
  },
  {
    slug: "refractive-index",
    number: "07",
    name: "Refractive index reference",
    category: "Optical properties",
    description: "Search typical RI ranges, birefringence and optical character for gemstones.",
    detail: "Searchable gem reference",
    icon: Sparkles,
  },
  {
    slug: "birefringence",
    number: "08",
    name: "Birefringence calculator",
    category: "Optical properties",
    description: "Calculate the difference between maximum and minimum RI readings.",
    detail: "Δn = n(high) − n(low)",
    icon: CircleDot,
  },
  {
    slug: "gemstone-proportions",
    number: "09",
    name: "Gemstone proportion calculator",
    category: "Measurement",
    description: "Calculate length-to-width ratio and a simple depth percentage.",
    detail: "Dimensions in mm",
    icon: Compass,
  },
];

const inDevelopment = [
  { name: "Gemstone colour reference", detail: "Explore hue, tone and saturation with a consistent learning framework.", icon: Palette },
  { name: "Gemstone measurement guide", detail: "Learn the dimensions and proportions recorded during gem examination.", icon: Compass },
];

export default function ToolsPage() {
  return (
    <main className="container-page py-10 md:py-16">
      <header className="relative overflow-hidden border-b border-border pb-9 md:pb-12">
        <div className="pointer-events-none absolute -right-8 -top-12 hidden h-64 w-64 rounded-full border border-[var(--gold)]/20 md:block" />
        <div className="pointer-events-none absolute -right-1 top-0 hidden h-48 w-48 rounded-full border border-[var(--gold)]/20 md:block" />
        <div className="gx-eyebrow"><span /> The GemologyX instrument room</div>
        <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-muted">Practical tools · Clear methods · Better understanding</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-medium leading-[1.02] tracking-tight text-foreground md:text-6xl">
          A clearer way to<br className="hidden sm:block" /> explore gemstones.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-base">
          A growing collection of practical calculators and carefully explained gemological references.
          Each tool is designed to make a specific part of gemstone study easier to understand.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted">
          <span className="inline-flex items-center gap-2"><Gem size={15} className="text-[var(--gold)]" /> Nine tools available</span>
          <span>Educational and reference-led</span>
          <span>Designed for mobile and desktop</span>
        </div>
      </header>

      <section className="pt-9 md:pt-12" aria-labelledby="available-tools">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Explore the collection</p>
            <h2 id="available-tools" className="mt-2 font-serif text-2xl font-medium text-foreground md:text-3xl">Available tools</h2>
          </div>
          <p className="max-w-xs text-xs leading-5 text-muted">Choose a tool to open its calculator or reference guide.</p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {availableTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group flex min-h-[220px] flex-col border border-border bg-[var(--surface)] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--gold)] hover:shadow-[0_14px_35px_rgba(35,25,20,0.07)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm text-muted">{tool.number}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-accent transition-colors group-hover:border-[var(--gold)] group-hover:bg-[var(--gold-soft)]">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                </div>
                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">{tool.category}</p>
                <h3 className="mt-2 font-serif text-xl font-medium leading-tight text-foreground group-hover:text-accent">{tool.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{tool.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-[11px] text-muted">{tool.detail}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">Open tool <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>


      <section className="mt-14 border-y border-border py-9 md:mt-16 md:py-11" aria-labelledby="industry-equipment">
        <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">The physical side of gemology</p>
            <h2 id="industry-equipment" className="mt-2 font-serif text-2xl font-medium text-foreground md:text-3xl">Gem industry tools & equipment</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted">Explore the real instruments used by gemstone dealers, cutters, gemmologists and jewellery workshops — with photographs and practical explanations.</p>
            <Link href="/equipment" className="mt-5 inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-accent hover:underline">Explore equipment guide <ArrowRight size={14} /></Link>
          </div>
          <Link href="/equipment" className="group grid grid-cols-3 gap-2" aria-label="Explore gem industry equipment photographs">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#eee9e1]">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a0/A_jeweller%27s_loupe.jpg" alt="Jeweller’s loupe" fill sizes="(max-width: 768px) 33vw, 18vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#eee9e1]">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Modern_collapsible_balance_scale_for_jewellers_1.jpg" alt="Jeweller’s balance scale" fill sizes="(max-width: 768px) 33vw, 18vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#eee9e1]">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/9/99/Jewellery_soldering_equipment.jpg" alt="Jewellery soldering tools and torch" fill sizes="(max-width: 768px) 33vw, 18vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </Link>
        </div>
      </section>

      <section className="mt-14 border-y border-border py-8 md:mt-16 md:py-10" aria-labelledby="in-development">
        <div className="grid gap-7 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Expanding the instrument room</p>
            <h2 id="in-development" className="mt-2 font-serif text-2xl font-medium text-foreground md:text-3xl">More ways to understand a gem.</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted">The next tools will focus on measurable gem properties and practical learning, with clear explanations of what each result can — and cannot — tell you.</p>
          </div>
          <div className="grid gap-0 sm:grid-cols-2">
            {inDevelopment.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="flex gap-3 border-t border-border py-4 sm:px-3">
                  <span className="mt-0.5 text-[var(--gold)]"><Icon size={18} strokeWidth={1.5} /></span>
                  <div>
                    <p className="font-serif text-base font-medium text-foreground">{item.name}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{item.detail}</p>
                    <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">In development</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <aside className="mt-8 flex flex-col gap-3 border border-border bg-[var(--surface)] p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
        <div>
          <p className="font-serif text-lg font-medium text-foreground">Use the result as a starting point.</p>
          <p className="mt-1 max-w-2xl text-xs leading-5 text-muted">These tools support learning and preliminary reference. They do not replace calibrated instruments, a qualified gemmologist or a recognised gem laboratory.</p>
        </div>
        <Link href="/learn" className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-accent hover:underline">Explore learning guides <ArrowRight size={14} /></Link>
      </aside>
    </main>
  );
}

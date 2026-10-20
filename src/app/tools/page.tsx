import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Scale, Ruler, CircleDot, Layers, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Gemstone Tools",
  description:
    "Practical calculators and reference tools for gemstone weight, sizing, hardness, and birthstones.",
};

const tools = [
  {
    slug: "carat-to-gram",
    name: "Carat ↔ Gram Converter",
    blurb: "Convert between carats and grams using the fixed 1 ct = 0.2 g standard.",
    icon: Scale,
  },
  {
    slug: "gemstone-size",
    name: "Gemstone Size Calculator",
    blurb: "Estimate approximate carat weight from a stone’s dimensions and shape.",
    icon: Ruler,
  },
  {
    slug: "ring-size",
    name: "Ring Size Converter",
    blurb: "Convert between US, UK, and EU ring sizing systems.",
    icon: CircleDot,
  },
  {
    slug: "mohs-hardness",
    name: "Mohs Hardness Reference",
    blurb: "The 1–10 hardness scale with common gemstone examples at each level.",
    icon: Layers,
  },
  {
    slug: "birthstones",
    name: "Birthstone Finder",
    blurb: "Traditional birthstones by month, with notes on regional variation.",
    icon: Calendar,
  },
];

export default function ToolsPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <header className="border-b border-border pb-8">
        <div className="gx-eyebrow"><span /> Practical Gemology</div>
        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Gemstone Tools
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          Simple, useful calculators for everyday gemstone questions. Results are estimates for reference only.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t) => {
          const Icon = t.icon;
          return (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="gx-card group flex flex-col p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Icon size={18} />
              </div>
              <h2 className="font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                {t.name}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Open tool <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          );
        })}
      </div>

      <p className="mt-10 text-xs leading-relaxed text-muted">
        These tools are educational references and are not a substitute for professional gemological measurement or laboratory testing.
      </p>
    </div>
  );
}

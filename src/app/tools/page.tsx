import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gemstone Tools",
  description: "Practical calculators and reference tools for gemstone weight, sizing, hardness, and birthstones.",
};

const tools = [
  { slug: "carat-to-gram", name: "Carat ↔ Gram Converter", blurb: "Convert between carats and grams using the fixed 1 ct = 0.2 g standard." },
  { slug: "gemstone-size", name: "Gemstone Size Calculator", blurb: "Estimate approximate carat weight from a stone's dimensions and shape." },
  { slug: "ring-size", name: "Ring Size Converter", blurb: "Convert between US, UK, and EU ring sizing systems." },
  { slug: "mohs-hardness", name: "Mohs Hardness Reference", blurb: "The 1–10 hardness scale with common gemstone examples at each level." },
  { slug: "birthstones", name: "Birthstone Finder", blurb: "Traditional birthstones by month, with notes on regional variation." },
];

export default function ToolsPage() {
  return (
    <div className="container-page py-14">
      <p className="text-xs font-medium tracking-[0.16em] text-teal uppercase">Tools</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        Gemstone Tools
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-muted md:text-base">
        Practical calculators for everyday gemstone questions. Results are estimates for reference —
        not a substitute for professional gemological measurement.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {tools.map((t) => (
          <Link
            key={t.slug}
            href={`/tools/${t.slug}`}
            className="card-hover flex flex-col rounded-xl border border-border bg-surface p-5"
          >
            <h2 className="font-serif text-lg font-semibold">{t.name}</h2>
            <p className="mt-2 text-sm text-muted">{t.blurb}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

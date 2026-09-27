import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

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
    <div className="container-page py-12 md:py-16">
      <header className="directory-hero">
        <div className="luxury-eyebrow"><span /> PRACTICAL GEMOLOGY</div>
        <h1>Gemstone Tools</h1>
        <p>Simple, useful calculators for everyday gemstone questions. Results are estimates for reference.</p>
      </header>
      <div className="tool-grid mt-10">
        {tools.map((t, i) => (
          <Link key={t.slug} href={`/tools/${t.slug}`} className="tool-card card-hover">
            <div className="tool-card-top"><span>0{i + 1}</span><span className="tool-card-icon"><Sparkles size={14} /></span></div>
            <h2>{t.name}</h2>
            <p>{t.blurb}</p>
            <span className="tool-card-link">Open tool <ArrowUpRight size={14} /></span>
          </Link>
        ))}
      </div>
      <p className="mt-8 text-xs leading-relaxed text-muted">These tools are educational references and are not a substitute for professional gemological measurement.</p>
    </div>
  );
}

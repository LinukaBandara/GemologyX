import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer } from "@/components/article-layout";
import { SpecificGravityExplorer } from "@/components/specific-gravity-explorer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Specific Gravity in Gemology: Hydrostatic Weighing",
  description: "Learn what specific gravity means, explore the hydrostatic weighing formula with an interactive calculator, and understand its limits in gem identification.",
  alternates: { canonical: "/learn/specific-gravity-guide" },
};

export default function Page() {
  return <ArticleLayout category="Gemology Instruments" readTime="7 min read" title="Specific Gravity and Hydrostatic Weighing" crumbHref="/learn" crumbLabel="Learning Guides" lastReviewed="2026-11-05" related={[
    { label: "Specific gravity glossary", href: "/glossary/specific-gravity" },
    { label: "Refractometer guide", href: "/learn/gemstone-refractometer-guide" },
    { label: "Spectroscope guide", href: "/learn/gemstone-spectroscope-guide" },
  ]}>
    <QuickAnswer><p>Specific gravity (SG) is a unitless ratio comparing a material’s density with water at a reference condition. In hydrostatic gem weighing, the stone’s reading in air is compared with its apparent reading while suspended in water. SG is one property that may support identification; it cannot identify a gemstone on its own.</p></QuickAnswer>
    <SpecificGravityExplorer />
    <ArticleSection heading="What specific gravity describes">
      <p>Specific gravity expresses how dense a material is relative to water under a stated reference condition. Unlike density, which is commonly reported with units such as grams per cubic centimetre, SG is a ratio and has no unit. Natural variation and measurement limitations mean a reference value should be treated as a comparison, not a fingerprint.</p>
      <p>Gemologists can obtain volume from suitable dimensional measurements or use hydrostatic weighing when appropriate. GIA describes weighing a loose stone in air and suspended in water as one way its laboratories determine SG when a volume calculation is not available.</p>
    </ArticleSection>
    <ArticleSection heading="How the hydrostatic ratio works">
      <p>Immersion creates an upward buoyant force related to the volume of water displaced. The apparent weight reduction is therefore used as the denominator in the ratio:</p>
      <p className="rounded-xl border border-border bg-white px-4 py-3 text-center font-mono text-lg font-semibold text-accent">SG = weight in air ÷ (weight in air − apparent weight in water)</p>
      <p>Use the same unit for both readings. The calculator is an arithmetic demonstration, not a validated measurement tool. Real results depend on the balance, the support arrangement, specimen and setup; report only precision supported by the measurement.</p>
    </ArticleSection>
    <ArticleSection heading="Read a result in context">
      <ul>
        <li>Compare an appropriately measured result with a reliable range for a candidate material, allowing for natural and compositional variation.</li>
        <li>Check whether the value makes sense alongside refractive index, optical character, magnification and other observations.</li>
        <li>Recognize when the method cannot be applied: GIA notes hydrostatic weighing is used as needed for loose stones, and that laboratory workflows select tests appropriate to the material.</li>
        <li>Ask a qualified gemologist or laboratory to assess a valuable, mounted, assembled or water-sensitive item rather than immersing it based on this guide.</li>
      </ul>
      <p>A calculated SG does not establish species, natural or laboratory-grown status, treatment, geographic origin, quality or value. Some identification questions require additional gemological or laboratory methods.</p>
    </ArticleSection>
    <ArticleSection heading="Related learning">
      <p>For another instrument-based property, see our <Link href="/learn/refractive-index">refractive index overview</Link> and <Link href="/learn/gemstone-refractometer-guide">refractometer guide</Link>. The <Link href="/learn/gemstone-spectroscope-guide">spectroscope guide</Link> explains a different kind of evidence: visible absorption features.</p>
    </ArticleSection>
    <ArticleSection heading="Sources and further reading">
      <ul>
        <li><a href="https://www.gia.edu/gems-gemology/winter-2024-gemstone-analysis" target="_blank" rel="noreferrer">GIA: Analysis of Gemstones at GIA Laboratories</a></li>
        <li><a href="https://www.gia.edu/doc/FA86.pdf" target="_blank" rel="noreferrer">GIA: The Hydrostatic Method of Determining Specific Gravity</a></li>
        <li><a href="https://www.gia.edu/gems-gemology/winter-2019-analytical-methods-geographic-origin-determination-gemstones" target="_blank" rel="noreferrer">GIA: Review of Analytical Methods Used in Geographic Origin Determination</a></li>
      </ul>
      <p>This guide is educational and does not replace gemological training, a controlled measurement or a laboratory report.</p>
    </ArticleSection>
  </ArticleLayout>;
}

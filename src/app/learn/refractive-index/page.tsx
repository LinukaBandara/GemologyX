import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, ArticleSection, QuickAnswer } from "@/components/article-layout";
import { RefractiveIndexExplorer } from "@/components/refractive-index-explorer";

export const metadata: Metadata = {
  title: "Refractive Index in Gemology: Meaning and Measurement",
  description: "Learn what refractive index means, explore Snell’s law with an interactive ray diagram, and understand how RI fits into gem identification.",
  alternates: { canonical: "/learn/refractive-index" },
};

export default function Page() {
  return (
    <ArticleLayout category="Gemstone Optics" readTime="5 min read" title="What Is Refractive Index?" crumbHref="/learn" crumbLabel="Learning Guides" lastReviewed="2026-11-05" related={[
      { label: "Refractive index glossary entry", href: "/glossary/refractive-index" },
      { label: "Gemstone report guide", href: "/learn/how-to-read-a-gemstone-report" },
      { label: "Gemstone directory", href: "/gemstones" },
    ]}>
      <QuickAnswer><p>Refractive index (RI) describes how light changes speed and direction as it passes between materials. Gemologists measure a stone&apos;s optical behaviour with a refractometer and interpret the result alongside other observations and tests.</p></QuickAnswer>
      <RefractiveIndexExplorer />
      <ArticleSection heading="The idea behind the number">
        <p>Light travels at different speeds in different materials. The refractive index compares light&apos;s speed in a vacuum with its speed in the material. At a boundary, a change in speed can change the ray&apos;s direction; for a ray entering a higher-index material from air, it bends toward the normal, an imaginary line perpendicular to the surface.</p>
        <p>Snell&apos;s law expresses this relationship as <strong>n₁ sin θ₁ = n₂ sin θ₂</strong>. The angles are measured from the normal. The interactive diagram above fixes the incoming angle and changes the second material&apos;s index to illustrate the relationship.</p>
      </ArticleSection>
      <ArticleSection heading="How gemologists use refractive index">
        <p>A refractometer provides an RI reading under controlled conditions. GIA describes RI and specific-gravity measurements among the standard gemological tests used to help determine gem material, before further examination when needed. RI is therefore a useful comparison property, interpreted with the stone&apos;s other characteristics.</p>
        <p>Some gems can show more than one principal RI value depending on direction and optical character. A reading should be interpreted by someone trained to use the instrument and account for the specimen and measurement conditions.</p>
      </ArticleSection>
      <ArticleSection heading="What RI cannot establish by itself">
        <p>An RI value is not a standalone certificate of identity, natural origin, geographic origin, treatment, quality or price. Different materials may have overlapping properties, and a single measurement does not capture every feature of a gemstone. Do not infer a gem&apos;s identity from a phone photo or the teaching slider.</p>
        <p>For a purchase or a formal identification, use a qualified gemologist or an appropriate gem laboratory. Read any report within the stated scope of the issuing laboratory.</p>
        <p>Explore the <Link href="/glossary/refractive-index">short glossary definition of refractive index</Link> or see how laboratory findings fit into our <Link href="/learn/how-to-read-a-gemstone-report">guide to gemstone reports</Link>.</p>
      </ArticleSection>
      <ArticleSection heading="Sources and further reading">
        <ul>
          <li><a href="https://www.gia.edu/gems-gemology/winter-2019-analytical-methods-geographic-origin-determination-gemstones" target="_blank" rel="noreferrer">GIA: Analytical Methods Used in Geographic Origin Determination of Gemstones</a></li>
          <li><a href="https://www.gia.edu/gems-gemology/winter-2024-gemstone-analysis" target="_blank" rel="noreferrer">GIA: Analysis of Gemstones at GIA Laboratories</a></li>
        </ul>
        <p>Sources describe laboratory practice; the interactive diagram is an original simplified educational model.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

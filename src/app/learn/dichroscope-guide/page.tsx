import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, ArticleSection, QuickAnswer } from "@/components/article-layout";
import { DichroscopeExplorer } from "@/components/dichroscope-explorer";

export const metadata: Metadata = {
  title: "How to Use a Dichroscope in Gemology",
  description: "Learn how a dichroscope displays two transmitted-light images, explore an idealized pleochroism model, and understand observation limits.",
  alternates: { canonical: "/learn/dichroscope-guide" },
};

export default function Page() {
  return <ArticleLayout category="Gemology Instruments" readTime="7 min read" title="Using a Dichroscope in Gemology" crumbHref="/learn" crumbLabel="Learning Guides" lastReviewed="2026-11-05" related={[
    { label: "Pleochroism glossary", href: "/glossary/pleochroism" },
    { label: "Polariscope guide", href: "/learn/using-a-polariscope" },
    { label: "Spectroscope guide", href: "/learn/gemstone-spectroscope-guide" },
  ]}>
    <QuickAnswer><p>A dichroscope separates light into two adjacent views so an examiner can compare their transmitted colors. In a suitable doubly refractive gemstone, different colors in the two images may reveal pleochroism. The result depends on the material and viewing direction; the instrument does not identify a gem by itself.</p></QuickAnswer>
    <DichroscopeExplorer />
    <ArticleSection heading="What the two images mean">
      <p>Many dichroscopes use calcite or polarizing filters to present two adjacent images of light that has passed through the stone. If the material absorbs differently along different vibration directions, the images can show different colors. That directional color variation is called pleochroism.</p>
      <p>The interactive model illustrates an idealized uniaxial case only. It shows one conceptual crystal and two simplified image windows; it is not based on a real sapphire, tourmaline or specimen, and does not generate a diagnostic answer.</p>
    </ArticleSection>
    <ArticleSection heading="Viewing direction changes the result">
      <p>In a uniaxial gemstone, viewing parallel to the optic axis can show one color in both images. Viewing at right angles to that axis may produce the strongest dichroism. Oblique directions can show an intermediate second color. Biaxial materials are more complex: their three principal vibration directions produce different pairs of colors depending on the direction of view.</p>
      <p>No visible difference does not establish that a stone is singly refractive or non-pleochroic. The direction may be unsuitable, the color contrast may be too weak for the eye, or the viewing conditions may limit the observation.</p>
    </ArticleSection>
    <ArticleSection heading="Separate pleochroism from other color patterns">
      <p>Color zoning, inclusions, and different light-path lengths through a faceted stone can also create visible color variation. Looking at a gem without a dichroscope may make these effects difficult to distinguish from pleochroism. Compare the paired views while changing the viewing direction, and record what is actually observed rather than assigning a gem name from color alone.</p>
      <p>Calcite-type dichroscopes can provide a more neutral color view than some polarizing models. Polarizing filters may tint the colors or reduce light return, so the instrument type is part of the observation context.</p>
    </ArticleSection>
    <ArticleSection heading="Use it as one part of an examination">
      <p>A dichroscope is one of several standard instruments used in colored-stone examination. Results should be considered alongside suitable refractive-index, optic-character, magnification and other observations. No single color pair proves species, natural or laboratory-grown status, treatment, geographic origin, quality or value.</p>
      <p>For related optical observations, read about <Link href="/glossary/pleochroism">pleochroism</Link> and the <Link href="/learn/using-a-polariscope">polariscope</Link>. For visible absorption features, see the <Link href="/learn/gemstone-spectroscope-guide">spectroscope guide</Link>.</p>
    </ArticleSection>
    <ArticleSection heading="Sources and further reading">
      <ul>
        <li><a href="https://www.gia.edu/gems-gemology/fall-2014-introduction-pleochroism-faceted-gems" target="_blank" rel="noreferrer">GIA: Pleochroism in Faceted Gems—An Introduction</a></li>
        <li><a href="https://www.gia.edu/gems-gemology/winter-2024-gemstone-analysis" target="_blank" rel="noreferrer">GIA: Analysis of Gemstones at GIA Laboratories</a></li>
        <li><a href="https://www.gia.edu/gems-gemology/winter-2024-analytical-techniques-overview" target="_blank" rel="noreferrer">GIA: Analytical Techniques in Gemology—A Historical Overview</a></li>
      </ul>
      <p>This guide is educational and does not replace gemological training, examination of the actual stone or a laboratory report.</p>
    </ArticleSection>
  </ArticleLayout>;
}

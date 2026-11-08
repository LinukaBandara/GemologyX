import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, ArticleSection, QuickAnswer } from "@/components/article-layout";
import { UVResponseExplorer } from "@/components/uv-response-explorer";

export const metadata: Metadata = {
  title: "UV Fluorescence in Gemstones: Observation and Safety",
  description: "Understand longwave and shortwave UV fluorescence, explore a conceptual response model, and learn safe observation limits for gem testing.",
  alternates: { canonical: "/learn/uv-fluorescence-guide" },
};

export default function Page() {
  return <ArticleLayout category="Gemology Instruments" readTime="8 min read" title="Observing Gemstones Under UV Light" crumbHref="/learn" crumbLabel="Learning Guides" lastReviewed="2026-11-05" related={[
    { label: "Fluorescence glossary", href: "/glossary/fluorescence" },
    { label: "Dichroscope guide", href: "/learn/dichroscope-guide" },
    { label: "Spectroscope guide", href: "/learn/gemstone-spectroscope-guide" },
  ]}>
    <QuickAnswer><p>Some gemstones emit visible light when exposed to ultraviolet radiation. Gemologists commonly compare longwave and shortwave UV responses in a shielded viewing setup. Fluorescence and any afterglow are useful observations, but neither the presence nor absence of a reaction proves a gemstone’s identity, treatment or origin.</p></QuickAnswer>
    <UVResponseExplorer />
    <ArticleSection heading="Fluorescence and phosphorescence">
      <p>In gemological observation, fluorescence describes visible emission while the excitation source is on. Phosphorescence is visible emission that persists after the source is removed. Not every gemstone reacts, and a reaction can vary in color, strength, pattern and duration.</p>
      <p>The interactive diagram is a conceptual teaching model. The hues are not associated with any real gem species, and the model does not simulate a lamp or specimen.</p>
    </ArticleSection>
    <ArticleSection heading="Longwave and shortwave observations">
      <p>GIA describes its standardized longwave lamp as 365 nm and its shortwave lamp as 254 nm. Compare readings only when the light source, cabinet, sample position and observation conditions are understood. Different lamps and their output can affect the reaction that an observer sees.</p>
      <p>Record which lamp was used, whether visible emission was observed, its apparent color and intensity, whether it appeared zoned, and whether any glow persisted after the lamp was switched off. These notes describe an observation; interpretation requires appropriate gemological knowledge and corroborating evidence.</p>
    </ArticleSection>
    <ArticleSection heading="What a UV reaction can and cannot tell you">
      <p>Fluorescence may relate to trace elements, crystal defects, fillers or other materials. In some contexts it can guide further examination, such as locating filler in an emerald. A similar reaction can occur in more than one material, and a specimen that appears inert may still be natural, treated or synthetic. UV alone cannot establish a gem’s identity or treatment.</p>
      <p>Professional laboratories combine suitable observations with other standard tests and may use specialized imaging or analytical instruments. Do not make buying, treatment or origin decisions from a UV glow alone.</p>
    </ArticleSection>
    <ArticleSection heading="UV safety comes first">
      <p>Ultraviolet radiation is not visible, so the absence of visible brightness does not indicate that the source is off or safe. Use the lamp only according to its current manufacturer instructions, with a suitable shielded viewing cabinet and any personal protective equipment specified for that source. Keep eyes and exposed skin out of the beam, never look directly at the lamp port, and switch the device off before handling or cleaning it. Do not improvise a UV test with an unshielded flashlight or unknown source.</p>
    </ArticleSection>
    <ArticleSection heading="Sources and further reading">
      <ul>
        <li><a href="https://www.gia.edu/gems-gemology/winter-2024-gemstone-analysis" target="_blank" rel="noreferrer">GIA: Analysis of Gemstones at GIA Laboratories</a></li>
        <li><a href="https://www.gia.edu/gems-gemology/winter-2024-fluorescence-phosphorescence" target="_blank" rel="noreferrer">GIA: Glowing Gems—Fluorescence and Phosphorescence</a></li>
        <li><a href="https://www.gia.edu/dam/jcr%3A074189c9-2912-4ff7-80fc-7b197f7a2a4c/GIA-UV-Lamp-and-VC-User-Guide-English.pdf" target="_blank" rel="noreferrer">GIA: UV Lamp and Viewing Cabinet User Guide</a></li>
        <li><a href="https://www.gia.edu/gems-gemology/winter-2020-microworld-unmasking-emerald-filler" target="_blank" rel="noreferrer">GIA: Unmasking Emerald Filler</a></li>
      </ul>
      <p>This guide is for general education. UV equipment hazards depend on its actual output and design; use the instructions and protective measures supplied for the specific lamp.</p>
    </ArticleSection>
    <ArticleSection heading="Keep exploring">
      <p>Compare other kinds of gemological evidence in the <Link href="/learn/dichroscope-guide">dichroscope guide</Link> and <Link href="/learn/gemstone-spectroscope-guide">spectroscope guide</Link>. For directional color, review the <Link href="/glossary/pleochroism">pleochroism glossary</Link>.</p>
    </ArticleSection>
  </ArticleLayout>;
}

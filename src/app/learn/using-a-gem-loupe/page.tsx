import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, ArticleSection, QuickAnswer, PracticalChecklist } from "@/components/article-layout";
import { LoupeObservationExplorer } from "@/components/loupe-observation-explorer";

export const metadata: Metadata = {
  title: "How to Use a Gem Loupe: What to Look For and Its Limits",
  description: "A practical, source-linked guide to examining gemstones with a loupe, choosing useful lighting, and separating observations from identification claims.",
  alternates: { canonical: "/learn/using-a-gem-loupe" },
};

export default function Page() {
  return (
    <ArticleLayout category="Gemology Instruments" readTime="6 min read" title="How to Use a Gem Loupe" crumbHref="/learn" crumbLabel="Learning Guides" lastReviewed="2026-11-05" related={[
      { label: "Gemstone inclusions glossary", href: "/glossary/inclusion" },
      { label: "Natural vs synthetic guide", href: "/learn/natural-vs-synthetic-gemstones" },
      { label: "Gemstone report guide", href: "/learn/how-to-read-a-gemstone-report" },
    ]}>
      <QuickAnswer><p>A jeweller&apos;s loupe is a small magnifier for close observation of surface features, facet junctions and visible inclusions. It helps you describe what you see; it cannot, by itself, prove a gemstone&apos;s identity, natural status, treatment, origin or value.</p></QuickAnswer>
      <LoupeObservationExplorer />
      <ArticleSection heading="Start with the tool and the viewing conditions">
        <p>A 10× hand loupe is widely used in gem and jewellery examination. GIA describes a corrected triplet loupe as useful for reducing distortion near the edge of the view. For a clearer observation, keep the feature around the centre of the lens rather than relying on a blurry edge.</p>
        <p>Lighting changes what stands out. Side or oblique light and darkfield-style illumination can help reveal internal features, while reflected light can make surface features easier to inspect. Try another angle or light before deciding what a feature might be. A loupe provides a narrow, two-dimensional view and less depth information than a microscope.</p>
      </ArticleSection>
      <ArticleSection heading="Separate what you see from what you think it means">
        <p>Record the observation first: for example, “a curved line near the girdle” or “a small reflective spot under the table.” Then check whether it moves or changes as you tilt the stone or the light. Dirt, lint, scratches, facet reflections and internal features can be confused, especially in one view.</p>
        <p>Do not use a single inclusion or visual feature as a shortcut to identify a natural or synthetic stone, treatment or geographic origin. Inclusion study can support gem identification, but professional conclusions combine observations with physical properties and, when needed, other instruments or laboratory methods.</p>
      </ArticleSection>
      <ArticleSection heading="A careful, repeatable inspection">
        <PracticalChecklist items={[
          "Use a clean, stable work area and avoid dropping or pressing on the stone.",
          "If it is safe to clean the item, remove loose dust before interpreting a small mark; check the care guidance for unknown gems and settings.",
          "Scan the surface, facet junctions and interior separately, then look at the whole stone again.",
          "Change the viewing angle and light direction; note which observations persist.",
          "Write down observations without turning them into identity, treatment, origin or value claims.",
          "Ask a qualified gemologist or laboratory when the result matters for a purchase, disclosure or formal identification.",
        ]} />
        <p>Do not force a mounted stone, setting or fragile specimen into tweezers. If you are not trained to handle a loose gemstone, ask a jeweller to secure and examine it.</p>
      </ArticleSection>
      <ArticleSection heading="What a loupe cannot do">
        <p>Magnification is not a complete gem test. Some useful features are too small, poorly placed, hidden by the setting or not visible under the available light. Other features overlap between materials. GIA&apos;s diamond clarity grades, for example, are assigned by trained graders under defined conditions using 10× magnification; a buyer&apos;s casual loupe check is not equivalent to professional grading.</p>
        <p>A loupe view cannot establish a report, guarantee a price or replace suitable testing. For a formal decision, use a qualified professional and read the scope and limitations of any laboratory report.</p>
        <p>For care considerations before cleaning, see our <Link href="/learn/gemstone-care">gemstone-care guide</Link>. For terminology, see the <Link href="/glossary/loupe">loupe glossary entry</Link>.</p>
      </ArticleSection>
      <ArticleSection heading="Sources and further reading">
        <ul>
          <li><a href="https://www.gia.edu/doc/Developing-the-Powers-of-Observation-in-Gem-Testing.pdf" target="_blank" rel="noreferrer">GIA: Developing the Powers of Observation in Gem Testing</a></li>
          <li><a href="https://www.gia.edu/doc/Portable-Instruments-and-Tips-on-Practical-Gemology-in-the-Field.pdf" target="_blank" rel="noreferrer">GIA: Portable Instruments and Tips on Practical Gemology in the Field</a></li>
          <li><a href="https://www.gia.edu/gems-gemology/summer-2022-colored-stones-unearthed" target="_blank" rel="noreferrer">GIA: Inclusions in Gemstones</a></li>
          <li><a href="https://www.gia.edu/gia-about/4cs-clarity" target="_blank" rel="noreferrer">GIA: Diamond Clarity</a></li>
        </ul>
        <p>Lighting and observation examples are general education. Cleaning and handling depend on the actual gemstone, treatment, mounting and condition; consult a professional when uncertain.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

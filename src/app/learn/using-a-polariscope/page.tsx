import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, ArticleSection, QuickAnswer, PracticalChecklist } from "@/components/article-layout";
import { PolariscopeExplorer } from "@/components/polariscope-explorer";

export const metadata: Metadata = {
  title: "Polariscope in Gemology: Reactions and Limits",
  description: "Learn how crossed polarizers help assess a transparent gem’s optic character, explore idealized reactions, and understand false readings and limits.",
  alternates: { canonical: "/learn/using-a-polariscope" },
};

export default function Page() {
  return (
    <ArticleLayout category="Gemology Instruments" readTime="7 min read" title="Using a Polariscope in Gemology" crumbHref="/learn" crumbLabel="Learning Guides" lastReviewed="2026-11-05" related={[
      { label: "Microscope and lighting guide", href: "/learn/gemstone-microscope-guide" },
      { label: "Refractometer guide", href: "/learn/gemstone-refractometer-guide" },
      { label: "Optic character glossary", href: "/glossary/optic-character" },
    ]}>
      <QuickAnswer><p>A gemological polariscope places a sample between two polarizing filters. When the filters are crossed, the empty field appears dark; light behavior as a suitable transparent or translucent stone is rotated can help a trained examiner assess its optic character. The reaction is a clue, not a complete gem identification.</p></QuickAnswer>
      <PolariscopeExplorer />
      <ArticleSection heading="What a polariscope is designed to show">
        <p>A polariscope has a polarizer and an analyzer. The sample sits between them, and the analyzer is turned to a crossed position where the empty field is darkest. A transparent or translucent gem is then rotated while observed through the analyzer. GIA describes the instrument’s primary use as assessing whether gem material is singly refractive, doubly refractive or an aggregate; further optical interpretation may require additional equipment and experience.</p>
        <p>The interactive model shows simplified reactions only. Actual brightness depends on the material, viewing direction, cut, transparency, inclusions, strain, instrument and observer.</p>
      </ArticleSection>
      <ArticleSection heading="Read the reaction cautiously">
        <ul>
          <li><strong>Remains dark:</strong> may indicate singly refractive behavior, but a doubly refractive stone viewed along an optic axis can also appear dark. Check other viewing directions.</li>
          <li><strong>Alternates between light and dark:</strong> may indicate double refraction. A singly refractive material with internal strain can show anomalous double refraction and mimic this reaction.</li>
          <li><strong>Remains light:</strong> may suggest an aggregate material, but strong inclusions can give a false aggregate-like reaction.</li>
        </ul>
        <p>These are screening reactions rather than a checklist that proves identity. GIA’s instrument guide describes follow-up observations for distinguishing double refraction from strain effects; this interpretation is best left to trained users.</p>
      </ArticleSection>
      <ArticleSection heading="A sound observation workflow">
        <PracticalChecklist items={[
          "Use the instrument’s own user guide and place it on a stable, dry surface.",
          "Check that the material is suitable for the test; opaque or assembled stones are not appropriate for the standard reaction described here.",
          "Set the analyzer to the darkest position with the empty field, following the instrument instructions.",
          "Rotate the sample through a full turn and record the observed reaction without jumping directly to a gem name.",
          "If a sample stays dark, check another direction when qualified to handle it; an optic-axis view can hide double refraction.",
          "Confirm important conclusions with other gemological observations and instruments or a laboratory.",
        ]} />
        <p>Keep electrical equipment dry. Switch off and disconnect it before cleaning, and follow the manufacturer’s instructions. Do not open or repair the instrument yourself.</p>
      </ArticleSection>
      <ArticleSection heading="What the test cannot establish">
        <p>A polariscope reaction does not alone prove a stone’s species, natural or laboratory-grown status, treatment, geographic origin, quality or value. A reaction can be ambiguous because of orientation, strain, inclusions, opacity or assembly. Standard gem identification combines suitable observations with refractive index, magnification and other tests as needed.</p>
        <p>For an overview of magnified features, see our <Link href="/learn/gemstone-microscope-guide">microscope guide</Link>; for RI measurements, read <Link href="/learn/gemstone-refractometer-guide">how a gem refractometer works</Link>.</p>
      </ArticleSection>
      <ArticleSection heading="Sources and further reading">
        <ul>
          <li><a href="https://www.gia.edu/dam/jcr%3Af7447e1e-6b07-4098-bfb6-ad728779c998/GIA-Polariscope-User-Guide-English.pdf" target="_blank" rel="noreferrer">GIA: Polariscope User Guide</a></li>
          <li><a href="https://www.gia.edu/gia-news-research/guide-how-gia-analyzes-colored-stones" target="_blank" rel="noreferrer">GIA: How Colored Stones Are Analyzed</a></li>
          <li><a href="https://www.gia.edu/doc/summer-1945.pdf" target="_blank" rel="noreferrer">GIA: Use of the Polariscope</a></li>
        </ul>
        <p>The interactive model is an original educational simplification, not an instrument simulation or a substitute for the device’s current instructions.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

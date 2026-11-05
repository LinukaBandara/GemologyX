import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, ArticleSection, QuickAnswer } from "@/components/article-layout";
import { RefractometerExplorer } from "@/components/refractometer-explorer";

export const metadata: Metadata = {
  title: "Gem Refractometer Guide: How RI Readings Work",
  description: "Understand the gemological refractometer, critical-angle shadow boundaries, RI range, multiple readings, contact-liquid safety and interpretation limits.",
  alternates: { canonical: "/learn/gemstone-refractometer-guide" },
};

export default function Page() {
  return (
    <ArticleLayout category="Gemology Instruments" readTime="7 min read" title="How a Gem Refractometer Works" crumbHref="/learn" crumbLabel="Learning Guides" lastReviewed="2026-11-05" related={[
      { label: "Refractive index explained", href: "/learn/refractive-index" },
      { label: "Using a gem microscope", href: "/learn/gemstone-microscope-guide" },
      { label: "How to read a gemstone report", href: "/learn/how-to-read-a-gemstone-report" },
    ]}>
      <QuickAnswer><p>A gemological refractometer measures refractive index by using the interaction of light with a gemstone at a critical angle. A trained examiner reads a shadow boundary on a calibrated scale and interprets it with the instrument’s range, the stone’s optical character and other test results.</p></QuickAnswer>
      <RefractometerExplorer />
      <ArticleSection heading="What the instrument measures">
        <p>A gem refractometer uses a highly refractive optical surface and a contact medium between the prism and the gemstone. Light interacting at the contact boundary produces a critical-angle effect; the instrument optics show a shadow boundary that corresponds to refractive index on that instrument’s scale. Designs vary, but the critical-angle principle remains central to the conventional gemological refractometer.</p>
        <p>For the underlying property and Snell’s law, read our separate <Link href="/learn/refractive-index">refractive-index explainer</Link>. This guide focuses on the instrument and on what its reading can—and cannot—support.</p>
      </ArticleSection>
      <ArticleSection heading="Why the facet, range and setup matter">
        <p>Traditional direct readings are made through a suitable flat, polished facet with an appropriate optical contact. Curved surfaces, rough stones, mounted gems, very small stones or poor optical contact may prevent a reliable ordinary reading or require a different method. Do not force a stone against the prism or assume every visible line is the reading.</p>
        <p>The prism and contact medium set a usable upper range. Many common instruments use a contact liquid near RI 1.81, while refractometer designs exist with higher ranges. An over-range or absent boundary is not an identity result; the instrument may not be able to measure that material under those conditions.</p>
      </ArticleSection>
      <ArticleSection heading="One stone may produce more than one reading">
        <p>Some gemstones are doubly refractive and have different refractive indices in different directions. Depending on orientation, a refractometer can show more than one shadow edge. The differences between principal RI values relate to birefringence; interpreting which readings are meaningful can require rotation, a polarizing filter and training.</p>
        <p>Do not copy a single number from an online chart and decide that a gem is identified. RI ranges can overlap, measurement conditions matter and standard gem identification combines the refractometer with observations and other tests.</p>
      </ArticleSection>
      <ArticleSection heading="Contact-liquid and instrument safety">
        <p>Refractometer contact liquids are purpose-made materials, not interchangeable household oils. Use only the product specified for the instrument, follow its current label and safety data sheet, and learn handling and cleanup from qualified instruction. GIA’s product information provides access to the manufacturer’s safety data for its refractive-index liquid.</p>
        <p>Keep the prism clean using the instrument maker’s directions. Avoid applying pressure, using an unapproved solvent or testing a valuable, fragile or mounted stone without suitable training. Ask a laboratory or qualified gemologist to make measurements when the material, setting or liquid compatibility is uncertain.</p>
      </ArticleSection>
      <ArticleSection heading="A refractometer reading is one piece of evidence">
        <p>An RI reading can help distinguish gem materials, describe optical properties and support a professional identification. It does not by itself establish natural or laboratory-grown origin, geographic origin, treatment, quality, durability or market value. GIA describes refractometer findings as part of standard testing, with additional examination used where needed.</p>
        <p>For a formal decision, use an appropriately equipped gemologist or gem laboratory and read the complete report, including its scope and limitations.</p>
      </ArticleSection>
      <ArticleSection heading="Sources and further reading">
        <ul>
          <li><a href="https://www.gia.edu/doc/A-Cubic-Zirconia-Refractometer.pdf" target="_blank" rel="noreferrer">GIA: A Cubic Zirconia Refractometer (critical-angle principle and range examples)</a></li>
          <li><a href="https://www.gia.edu/gia-news-research/guide-how-gia-analyzes-colored-stones" target="_blank" rel="noreferrer">GIA: How Colored Stones Are Analyzed</a></li>
          <li><a href="https://www.gia.edu/doc/FA06.pdf" target="_blank" rel="noreferrer">GIA: Studying Biaxial Gemstones on the Refractometer</a></li>
          <li><a href="https://store.gia.edu/products/refractive-index-liquid" target="_blank" rel="noreferrer">GIA Store: Refractive-Index Liquid and manufacturer safety data</a></li>
        </ul>
        <p>Instrument designs, ranges and contact-liquid handling vary. Use the current instructions and safety documentation for the specific instrument and liquid.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

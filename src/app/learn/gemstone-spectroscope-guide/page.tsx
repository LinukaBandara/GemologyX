import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer } from "@/components/article-layout";
import { SpectroscopeExplorer } from "@/components/spectroscope-explorer";

export const metadata: Metadata = {
  title: "Gemstone Spectroscope Guide: Reading Absorption Features",
  description: "Learn what a handheld gem spectroscope shows, explore conceptual absorption patterns, and understand the limits of visual spectrum observations.",
  alternates: { canonical: "/learn/gemstone-spectroscope-guide" },
};

export default function Page() {
  return <ArticleLayout category="Gemology Instruments" readTime="7 min read" title="Using a Spectroscope in Gemology" crumbHref="/learn" crumbLabel="Learning Guides" lastReviewed="2026-11-05" related={[
    { label: "Absorption spectrum glossary", href: "/glossary/absorption-spectrum" },
    { label: "Refractometer guide", href: "/learn/gemstone-refractometer-guide" },
    { label: "Polariscope guide", href: "/learn/using-a-polariscope" },
  ]}>
    <QuickAnswer><p>A handheld gemological spectroscope separates visible light into its component colors. Wavelength regions absorbed by a gemstone appear as darker lines or bands. These observations can help a trained gemologist investigate color, but a visual spectrum alone does not establish a gem’s identity, treatment or origin.</p></QuickAnswer>
    <SpectroscopeExplorer />
    <ArticleSection heading="What the instrument reveals">
      <p>When white light passes through a transparent colored gem, some wavelengths may be absorbed more strongly than others. A handheld spectroscope disperses the light that reaches the observer, making visible absorption features appear as darker regions in an otherwise bright spectrum. The pattern may range from narrow lines to broader bands.</p>
      <p>The interactive diagram is an original conceptual illustration. It has no wavelength calibration and does not model or identify any real specimen.</p>
    </ArticleSection>
    <ArticleSection heading="How to describe what you see">
      <ul>
        <li>Record whether the visible spectrum is clear, weak or difficult to interpret.</li>
        <li>Describe dark features by their apparent width, strength and position within the visible color band.</li>
        <li>Note the light source, viewing arrangement and specimen orientation so another observer can understand the conditions.</li>
        <li>Compare observations with reliable references and other suitable gemological tests; avoid jumping from one feature to a gem name.</li>
      </ul>
      <p>A handheld instrument reveals only features visible to the eye in its viewing range. Electronic spectrometers can measure a wider wavelength range and detect weaker features, with wavelength values that can be recorded precisely. Laboratory interpretation uses the spectrum alongside other evidence.</p>
    </ArticleSection>
    <ArticleSection heading="Why a pattern can be inconclusive">
      <p>Features may be faint, overlap, fall outside the visible range, or be hard to see under a particular setup. Gem color and absorption also depend on the material and how light interacts with it. A view with no obvious dark line does not prove absorption is absent.</p>
      <p>GIA describes the handheld spectroscope as one of the standard tools that may be used in colored-stone examination, together with tools such as the refractometer, polariscope and dichroscope. Not every test applies to every stone. Conclusions should be based on converging observations and, when necessary, laboratory analysis.</p>
    </ArticleSection>
    <ArticleSection heading="Use the instrument carefully">
      <p>Follow the current instructions supplied with the spectroscope and its light source. Keep the equipment clean and use a stable setup. Do not look directly at the Sun or an intense light source through an optical instrument; use only an appropriate controlled source and follow its safety instructions.</p>
    </ArticleSection>
    <ArticleSection heading="Sources and further reading">
      <ul>
        <li><a href="https://www.gia.edu/gems-gemology/winter-2024-analytical-techniques-overview" target="_blank" rel="noreferrer">GIA: Analytical Techniques in Gemology—A Historical Overview</a></li>
        <li><a href="https://www.gia.edu/gems-gemology/winter-2024-uv-vis-nir-spectroscopy" target="_blank" rel="noreferrer">GIA: Application of UV-Vis-NIR Spectroscopy to Gemology</a></li>
        <li><a href="https://www.gia.edu/gia-news-research/guide-how-gia-analyzes-colored-stones" target="_blank" rel="noreferrer">GIA: How Colored Stones Are Analyzed</a></li>
      </ul>
      <p>This educational guide is not a substitute for instrument training, a gemological examination or a laboratory report.</p>
    </ArticleSection>
  </ArticleLayout>;
}

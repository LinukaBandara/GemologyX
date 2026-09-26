import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Natural vs Synthetic Gemstones",
  description: "What separates a natural gemstone from a synthetic one, how they're identified, and why disclosure matters.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="Gemstone Basics"
      readTime="5 min read"
      title="Natural vs Synthetic Gemstones"
      crumbHref="/learn"
      crumbLabel="Gemstone Basics"
      related={[
        { label: "Gemstone Treatments", href: "/learn/heated-vs-unheated" },
        { label: "Sapphire overview", href: "/gemstones/sapphire" },
        { label: "Glossary: Synthetic", href: "/glossary/synthetic" },
      ]}
    >
      <ArticleSection heading="What 'synthetic' actually means">
        <p>
          In gemology, a synthetic gemstone has essentially the same chemical composition and
          crystal structure as its natural counterpart — but it was grown in a laboratory over
          hours or weeks, rather than forming geologically over millions of years. This is
          different from an imitation, which merely looks similar but has a different composition
          (such as glass imitating emerald).
        </p>
      </ArticleSection>
      <ArticleSection heading="Why synthetics exist">
        <p>
          Synthetic corundum (sapphire and ruby) has been manufactured since the early 1900s,
          originally for industrial uses like watch bearings and later for jewellery. Modern
          synthetic gemstones are produced by methods such as flame fusion, flux growth, and
          hydrothermal growth, each producing characteristic internal features.
        </p>
      </ArticleSection>
      <ArticleSection heading="How gemologists tell them apart">
        <p>
          Natural and synthetic material can usually be distinguished by examining internal
          inclusions under magnification — natural stones typically contain mineral inclusions,
          fingerprint-like fluid patterns, and growth irregularities that laboratory-grown material
          generally lacks, or replaces with characteristic curved growth lines and gas bubbles.
          Some cases require advanced spectroscopic testing rather than magnification alone.
        </p>
      </ArticleSection>
      <ArticleSection heading="Why disclosure matters">
        <p>
          Synthetic gemstones are legitimate products with real uses, but they are worth
          dramatically less than natural stones of comparable appearance. Reputable sellers always
          disclose whether a stone is natural or synthetic; a gemological laboratory report is the
          most reliable way to confirm this for any significant purchase.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Heated vs Unheated Gemstones",
  description: "Why heat treatment is so common in the gem trade, what it does, and how it affects value.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="Gemstone Basics"
      readTime="5 min read"
      title="Heated vs Unheated Gemstones"
      crumbHref="/learn"
      crumbLabel="Gemstone Basics"
      related={[
        { label: "Sapphire overview", href: "/gemstones/sapphire" },
        { label: "Gemstone Certification", href: "/learn/gemstone-certification" },
        { label: "Glossary: Geuda", href: "/glossary/geuda" },
      ]}
    >
      <ArticleSection heading="Why heat treatment is so widespread">
        <p>
          Heat treatment is applied to improve a gemstone's colour and, in some cases, clarity, by
          heating it to controlled temperatures — sometimes with specific chemical additives — over
          a period of hours or days. The great majority of sapphire and ruby on the market today has
          been heat-treated, along with much aquamarine, tanzanite, and other coloured stones.
        </p>
      </ArticleSection>
      <ArticleSection heading="What heat treatment actually changes">
        <p>
          Heat treatment can dissolve unwanted silk inclusions to improve clarity, shift colour
          toward a more desirable hue by altering the oxidation state of trace elements, or both.
          Sri Lankan geuda, a milky variety of corundum, is a well-known example of material that
          can develop attractive blue colour specifically through heat treatment.
        </p>
      </ArticleSection>
      <ArticleSection heading="Is heat treatment considered acceptable?">
        <p>
          Yes — heat treatment (without added chemicals like beryllium) is a long-established,
          widely accepted trade practice, provided it is disclosed. It is generally considered a
          stable, permanent treatment. This differs from treatments like fracture filling or
          diffusion, which are viewed as more significant interventions and are valued
          proportionally lower.
        </p>
      </ArticleSection>
      <ArticleSection heading="How treatment status is confirmed">
        <p>
          A gemological laboratory can often determine heat treatment through examination of
          internal features altered by heat — such as partially dissolved or 'healed' inclusions —
          though in some cases treatment can be difficult to detect with full certainty. A
          laboratory report should state treatment status explicitly rather than leaving it
          assumed.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

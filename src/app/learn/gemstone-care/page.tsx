import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "How to Care for Gemstones",
  description: "General cleaning and storage guidance for gemstone jewellery, and why hardness alone isn't the full picture.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="Buying Guides"
      readTime="4 min read"
      title="How to Care for Gemstones"
      crumbHref="/learn"
      crumbLabel="Buying Guides"
      related={[
        { label: "Mohs Hardness Reference", href: "/tools/mohs-hardness" },
        { label: "Sapphire overview", href: "/gemstones/sapphire" },
      ]}
    >
      <ArticleSection heading="Hardness isn't the whole story">
        <p>
          A gemstone's Mohs hardness describes scratch resistance, not overall toughness. Some hard
          gemstones (like topaz or emerald) can still chip or fracture more easily than softer ones,
          due to cleavage planes or included fractures. Treat hardness as one factor among several,
          not a complete durability rating.
        </p>
      </ArticleSection>
      <ArticleSection heading="General cleaning guidance">
        <p>
          For most untreated or heat-only-treated gemstones, mild soap, warm water, and a soft
          brush is a safe general-purpose cleaning method. Avoid ultrasonic and steam cleaning for
          stones that have been fracture-filled, oiled, or dyed — the heat and vibration can damage
          the treatment and, in some cases, the stone itself.
        </p>
      </ArticleSection>
      <ArticleSection heading="Storage">
        <p>
          Store gemstone jewellery separately, ideally in individual soft pouches or lined
          compartments, to prevent harder stones from scratching softer ones or metal settings.
        </p>
      </ArticleSection>
      <ArticleSection heading="When in doubt, ask a professional">
        <p>
          If you're unsure whether a specific stone has been treated in a way that affects cleaning,
          a jeweller or gemologist can advise based on the stone's known treatment history or a
          laboratory report.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

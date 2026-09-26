import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "How to Read a Gemstone Report",
  description: "The key sections of a laboratory report and what each one actually tells you.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="Buying Guides"
      readTime="4 min read"
      title="How to Read a Gemstone Report"
      crumbHref="/learn"
      crumbLabel="Buying Guides"
      related={[
        { label: "How Certification Works", href: "/learn/gemstone-certification" },
        { label: "Heated vs Unheated", href: "/learn/heated-vs-unheated" },
      ]}
    >
      <ArticleSection heading="Identity and species">
        <p>
          The report should state the gemstone's species (e.g., corundum) and variety (e.g.,
          sapphire), along with whether it is natural or synthetic. This is the most fundamental
          line on the report.
        </p>
      </ArticleSection>
      <ArticleSection heading="Measurements and weight">
        <p>
          Precise measurements (length, width, depth) and carat weight are recorded, which also
          allows a buyer to sanity-check the stone against its stated weight.
        </p>
      </ArticleSection>
      <ArticleSection heading="Colour and clarity characteristics">
        <p>
          Colour is typically described qualitatively (e.g., "vivid blue"), and clarity
          characteristics — the inclusions observed — are noted, sometimes with a diagram.
        </p>
      </ArticleSection>
      <ArticleSection heading="Treatment statement">
        <p>
          This line states whether the stone has been treated and by what method (e.g., heat only,
          heat with residue, glass-filled). This single line often has the largest effect on value
          of anything in the report.
        </p>
      </ArticleSection>
      <ArticleSection heading="Origin opinion, where offered">
        <p>
          For some coloured stones, the laboratory may offer an opinion on geographic origin based
          on trace-element and inclusion evidence. Not all laboratories offer origin opinions, and
          those that do generally state it as an opinion rather than an absolute fact.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

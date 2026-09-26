import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "How Gemstone Certification Works",
  description: "What a gemological laboratory actually does, and why not all reports are created equal.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="Buying Guides"
      readTime="5 min read"
      title="How Gemstone Certification Works"
      crumbHref="/learn"
      crumbLabel="Buying Guides"
      related={[
        { label: "How to Read a Gemstone Report", href: "/learn/how-to-read-a-gemstone-report" },
        { label: "Natural vs Synthetic", href: "/learn/natural-vs-synthetic-gemstones" },
      ]}
    >
      <ArticleSection heading="What a laboratory actually does">
        <p>
          A gemological laboratory examines a stone using magnification, standard gemological
          instruments (such as refractometers and spectroscopes), and sometimes advanced testing
          like trace-element chemical analysis, to determine its identity, whether it is natural or
          synthetic, its treatment status, and — for some stones — an opinion on geographic origin.
        </p>
      </ArticleSection>
      <ArticleSection heading="Not all laboratories are equal">
        <p>
          Laboratories vary considerably in rigor, equipment, and reputation. Some well-known
          laboratories are recognized internationally for stringent standards, particularly for
          origin and treatment determinations on high-value coloured stones, while other reports
          may reflect a more basic level of testing. It is worth knowing which laboratory issued a
          given report and, where possible, researching that laboratory's standing.
        </p>
      </ArticleSection>
      <ArticleSection heading="What certification does not guarantee">
        <p>
          A laboratory report documents what the laboratory observed at the time of testing — it
          does not guarantee a specific market value, and origin opinions in particular are
          probabilistic judgments based on available evidence and reference data, not absolute
          certainties in every case.
        </p>
      </ArticleSection>
      <ArticleSection heading="When certification matters most">
        <p>
          For higher-value purchases — particularly stones represented as untreated, natural, or of
          a specific origin — an independent laboratory report is the most reliable way to confirm
          those claims before paying a premium based on them.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

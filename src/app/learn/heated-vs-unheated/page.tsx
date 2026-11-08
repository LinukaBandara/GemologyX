import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer, PracticalChecklist, Misconceptions } from "@/components/article-layout";
import { TreatmentStatusExplorer } from "@/components/interactive-learning-tools";

export const metadata: Metadata = {
  title: "Heated vs Unheated Gemstones: Reading the Evidence",
  description: "Understand heat treatment, the difference between treatment and identity, and what laboratory report wording can and cannot tell you.",
  alternates: { canonical: "/learn/heated-vs-unheated" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="Treatments and Disclosure"
      readTime="7 min read"
      title="Heated vs Unheated Gemstones"
      crumbHref="/learn"
      crumbLabel="Gemstone Basics"
      lastReviewed="2026-11-05"
      related={[
        { label: "Natural vs synthetic gemstones", href: "/learn/natural-vs-synthetic-gemstones" },
        { label: "How to read a gemstone report", href: "/learn/how-to-read-a-gemstone-report" },
        { label: "Sapphire profile", href: "/gemstones/sapphire" },
      ]}
    >
      <QuickAnswer>
        <p>
          “Heated” describes a treatment, while “natural” and “laboratory-grown” describe how the gemstone formed. A natural gem may be heated. “Unheated” is a treatment claim that should be read in the context of written disclosure and a laboratory examination, not inferred from colour, clarity or a photograph.
        </p>
      </QuickAnswer>

      <TreatmentStatusExplorer locale="en" />

      <ArticleSection heading="What heat treatment can change">
        <p>
          Gem treatments vary by material and process. GIA describes heat treatment as an established practice for sapphire; depending on the stone and conditions, heating may change colour and may alter some inclusions or clarity-related features. The result is not identical for every gem, and the word “heated” alone does not describe the whole process or the final quality.
        </p>
        <p>
          Do not assume that treatment makes a gemstone synthetic or an imitation. Those are different material descriptions. Read natural or laboratory-grown identification separately from treatment comments.
        </p>
      </ArticleSection>

      <ArticleSection heading="How to read “unheated” wording">
        <p>
          Reports can use wording such as “no indications of heating.” Read that statement with the report&apos;s identification, comments, scope and limitations. It describes the laboratory&apos;s findings; it is not a guarantee of market value or a prediction of how the stone will perform.
        </p>
        <p>
          Detection can require specialist instruments and interpretation. GIA research describes fluorescence as one possible clue in some sapphires, while also explaining that fluorescence alone cannot prove a stone is unheated. Do not use a UV lamp or another home test to make a treatment determination.
        </p>
      </ArticleSection>

      <ArticleSection heading="Treatment is one part of a purchase decision">
        <p>
          Heating is an accepted treatment for sapphire, and some buyers place a premium on a supported no-heat finding. That does not mean every unheated stone is better than every heated stone. Compare the actual colour, transparency, cut, size, condition, documentation and price, and make sure the comparison is between stones of broadly similar quality.
        </p>
        <p>
          A report records findings within its scope. It does not set a universal grade or guarantee the stone&apos;s resale price. Ask the seller to state known treatment information in writing and verify any report through the issuing laboratory.
        </p>
      </ArticleSection>

      <PracticalChecklist items={[
        "Ask whether the stone is natural, laboratory-grown or an imitation.",
        "Ask separately what treatment is known or reported.",
        "Read the laboratory's full identification and treatment comments.",
        "Verify the report number and compare its description with the stone.",
        "Compare the whole stone and transaction terms, not one label alone.",
      ]} />

      <Misconceptions items={[
        "Heated means fake — treatment and identity are different questions.",
        "Unheated is visible from colour — appearance is not proof of treatment status.",
        "No indications of heat guarantees a value — a report is not a price guarantee.",
      ]} />

      <ArticleSection heading="Sources and further reading">
        <ul>
          <li><a href="https://www.gia.edu/sapphire/buyers-guide" target="_blank" rel="noreferrer">GIA: Sapphire Buyers&apos; Guide</a></li>
          <li><a href="https://www.gia.edu/gia-news-research/gems-gemology-summary-gem-fluorescence" target="_blank" rel="noreferrer">GIA: What Does Fluorescence Tell Us?</a></li>
          <li><a href="https://www.gia.edu/analysis-grading-sample-report-colored-stone" target="_blank" rel="noreferrer">GIA: Sample Colored Stone Reports</a></li>
        </ul>
        <p>Laboratory services and report wording vary. Consult the issuing laboratory about a specific report.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

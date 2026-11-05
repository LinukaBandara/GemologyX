import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer, PracticalChecklist, Misconceptions } from "@/components/article-layout";
import { ReportFieldExplorer } from "@/components/interactive-learning-tools";

export const metadata: Metadata = {
  title: "How to Read a Gemstone Laboratory Report | GemologyX",
  description: "Learn to read gemstone identification, treatment, measurement and origin wording, verify a report, and understand its limits.",
  alternates: { canonical: "/learn/how-to-read-a-gemstone-report" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="Reports and Buying"
      readTime="7 min read"
      title="How to Read a Gemstone Laboratory Report"
      crumbHref="/learn"
      crumbLabel="Learning Guides"
      lastReviewed="2026-11-05"
      related={[
        { label: "Gemstone certification explained", href: "/learn/gemstone-certification" },
        { label: "Heated vs unheated", href: "/learn/heated-vs-unheated" },
        { label: "Questions to ask a gem dealer", href: "/learn/questions-to-ask-gem-dealer" },
      ]}
    >
      <QuickAnswer>
        <p>
          Start by verifying the report number with the issuing laboratory using its official service. Then compare the report&apos;s identification and description with the gemstone in front of you. Read treatment comments and any origin opinion in context. A laboratory report records findings within its service and examination scope; it is not a price appraisal or resale guarantee.
        </p>
      </QuickAnswer>

      <ReportFieldExplorer locale="en" />

      <ArticleSection heading="1. Verify the report with its issuer">
        <p>
          Navigate to the laboratory&apos;s official website yourself and use the report lookup or verification service it provides. Compare the returned record with the document: check the report number, date and available description, image or diagram. Services differ by laboratory and report type, and not every old report exposes the same online fields.
        </p>
        <p>
          A matching online record helps verify that the report information is in the issuer&apos;s database. You must still compare the physical stone with the report description and image; a genuine report may be shown alongside a different gemstone.
        </p>
      </ArticleSection>

      <ArticleSection heading="2. Read the identification separately from treatment">
        <p>
          Look for the material or species identification and whether the report calls it natural or laboratory-grown. The available wording depends on the laboratory and service. Identification answers what material was examined; treatment comments answer what the laboratory detected or reported within its examination.
        </p>
        <p>
          “Natural” does not mean “untreated.” A natural gemstone may have been treated. Read the two parts separately, and do not assume every report service covers every question you have.
        </p>
      </ArticleSection>

      <ArticleSection heading="3. Match measurements and visual details">
        <p>
          Compare weight, dimensions, shape, cutting style and colour description where those fields are present. Use a report photograph or plotted diagram if supplied. A small difference can have an explanation, especially for mounted jewellery, but a clear mismatch needs to be resolved before relying on the document.
        </p>
        <p>
          Reports may describe a gemstone without assigning a universal quality grade. For example, GIA&apos;s colored-stone service describes identity and characteristics; it does not grade colored stones on the diamond 4Cs scale. Check the named service instead of assuming every report offers a quality or value opinion.
        </p>
      </ArticleSection>

      <ArticleSection heading="4. Understand treatment and origin wording">
        <p>
          Read treatment comments, tables and limitations together. The report states the laboratory&apos;s conclusion within its methods and scope; wording such as “no indications” should not be expanded into a guarantee beyond what the report says. Different laboratories may use different report formats and terminology.
        </p>
        <p>
          Geographic-origin opinions are available only for some stones and services, when the laboratory can reach an opinion. Read the exact wording and any qualification. Origin is not established by a seller&apos;s story, a photograph or colour alone.
        </p>
      </ArticleSection>

      <PracticalChecklist items={[
        "Did I reach the report lookup from the issuing laboratory's own website?",
        "Does the online record match the report number and available details?",
        "Do the identification, measurements, image and description match this stone?",
        "Have I read the treatment statement and any limits or comments?",
        "If origin is stated, is it an opinion and does this report service cover it?",
        "Do I need independent advice for the value or stakes of this purchase?",
      ]} />

      <Misconceptions items={[
        "A report is a price guarantee — identification reports are not appraisals or resale promises.",
        "Natural means untreated — origin of formation and treatment are separate questions.",
        "A real report must describe the stone in my hand — compare the actual stone to its details.",
        "Every lab report grades quality — report services have different scopes; check what was ordered.",
      ]} />

      <ArticleSection heading="Sources and report examples">
        <ul>
          <li><a href="https://www.gia.edu/gem-lab-service/colored-stone-analysis-report-service" target="_blank" rel="noreferrer">GIA: Colored Stone Reports and Services</a></li>
          <li><a href="https://www.gia.edu/gem-lab-colored-stone-report-compare" target="_blank" rel="noreferrer">GIA: Compare Colored Stone Reports</a></li>
          <li><a href="https://www.gia.edu/report-check-landing" target="_blank" rel="noreferrer">GIA: Report Check</a></li>
          <li><a href="https://www.gia.edu/doc/How_to_Read_a_GIA_Identification_and_Origin_Report.pdf" target="_blank" rel="noreferrer">GIA: How to Read an Identification and Origin Report (PDF)</a></li>
        </ul>
        <p>These are GIA examples. For another laboratory&apos;s report, use the issuer&apos;s own definitions, verification tools and stated service limits.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

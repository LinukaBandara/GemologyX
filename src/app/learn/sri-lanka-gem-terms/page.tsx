import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";
import { SriLankaGemTermsExplorer } from "@/components/sri-lanka-gem-terms-explorer";

export const metadata: Metadata = {
  title: "Sri Lankan Gem Trade Terms: Geuda, Dullam and Ceylon Sapphire",
  description:
    "Understand gem trade vocabulary used in Sri Lanka, including geuda, dullam, lapidary, cutting yield and Ceylon sapphire, with sources and buyer questions.",
  alternates: { canonical: "/learn/sri-lanka-gem-terms" },
};

export default function SriLankaGemTermsPage() {
  return (
    <ArticleLayout
      category="Sri Lanka reference · gem trade terminology"
      readTime="7 minute read"
      title="Sri Lankan gem trade terms, explained"
      crumbHref="/sri-lanka"
      crumbLabel="Sri Lanka gem hub"
      lastReviewed="2026-11-05"
      languageLink={{ href: "/si/learn/sri-lanka-gem-terms", label: "සිංහල: ශ්‍රී ලංකාවේ මැණික් පද" }}
      related={[
        { label: "Sri Lankan gem trade", href: "/si/learn/sri-lanka-gem-trade-intro" },
        { label: "Sri Lanka gem geology", href: "/si/learn/ratnapura-balangoda-gem-geology" },
        { label: "Ceylon sapphire context", href: "/learn/sapphire/what-is-ceylon-sapphire" },
        { label: "Reading a gem report", href: "/learn/how-to-read-a-gemstone-report" },
      ]}
    >
      <QuickAnswer>
        <p>
          Terms such as <em>geuda</em>, <em>rough</em>, <em>dullam</em>,
          <em> lapidary</em> and <em>Ceylon sapphire</em> appear in different
          parts of Sri Lanka’s gem trade. A term can vary by speaker and context;
          it does not, by itself, verify a stone’s identity, treatment, quality
          or geographic origin.
        </p>
      </QuickAnswer>

      <SriLankaGemTermsExplorer locale="en" />

      <ArticleSection heading="Separate trade vocabulary from gemological evidence">
        <p>
          Ask the seller what a local trade term means for the specific parcel
          or stone. Keep that explanation separate from a laboratory report,
          which has its own scope and limitations. A report may identify a
          material or offer an origin opinion; those are different services.
        </p>
        <p>
          The meaning of <em>dullam</em> below follows a usage recorded in a
          2014 GIA field account of Sri Lanka. It should not be treated as a
          universal definition used by every miner, dealer or region.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Ask the seller to define the term as it applies to this stone or parcel.",
          "Request separate written statements for identity, known treatment and any origin claim.",
          "For rough material, agree on the cutting plan, service fee and uncertainty in finished weight.",
          "For export classifications or current procedures, verify the latest requirements with NGJA and Sri Lanka Customs.",
        ]}
      />

      <Misconceptions
        items={[
          "The word ‘geuda’ does not guarantee a particular result from heating.",
          "A ‘Ceylon’ description alone does not establish the geographic origin of an individual stone.",
          "A lapidary’s role does not imply a laboratory identity or value report.",
        ]}
      />

      <ArticleSection heading="Sources and current official information">
        <ul>
          <li><a href="https://www.gia.edu/gems-gemology/fall-2014-sri-lanka-expedition-island-of-jewels" target="_blank" rel="noreferrer">GIA field account: Sri Lanka mining, cutting, trading and the recorded use of “dullam”</a></li>
          <li><a href="https://www.srilankabusiness.com/gem-diamond-and-jewellery/about-sri-lanka-gems/industry-capability.html" target="_blank" rel="noreferrer">Sri Lanka Export Development Board: industry stakeholders and value chain</a></li>
          <li><a href="https://ngja.gov.lk/wp-content/uploads/2020/08/NGJA-Geuda-RIE-Procedure.pdf" target="_blank" rel="noreferrer">NGJA export procedure circular (2020), including Geuda classification</a></li>
          <li><a href="https://www.gia.edu/gems-gemology/winter-2019-geographic-origin-dilemma" target="_blank" rel="noreferrer">GIA: limits of geographic-origin opinions</a></li>
        </ul>
        <p>
          The linked NGJA document is dated 2020 and is provided for context,
          not as a current export checklist. Licensing, fees and procedures can
          change; confirm current requirements with NGJA and Sri Lanka Customs.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

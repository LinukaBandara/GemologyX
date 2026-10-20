import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Questions to Ask a Gem Dealer Before Buying",
  description:
    "A practical gemstone buyer checklist covering identity, treatment, origin claims, laboratory reports, price, payment, and written return terms.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="Buying Guides"
      readTime="6 min read"
      title="Questions to Ask a Gem Dealer Before Buying"
      crumbHref="/learn"
      crumbLabel="Buying Guides"
      related={[
        { label: "How Gemstone Certification Works", href: "/learn/gemstone-certification" },
        { label: "How to Read a Gemstone Report", href: "/learn/how-to-read-a-gemstone-report" },
        { label: "What Makes a Sapphire Valuable?", href: "/learn/sapphire/sapphire-value-factors" },
      ]}
    >
      <ArticleSection heading="Start by getting the description specific">
        <p>
          Ask the seller to describe the stone in writing before you negotiate. Clarify the
          gemstone species and variety, whether it is represented as natural or laboratory-grown,
          its weight, dimensions, and any visible damage or repairs. A trade name or attractive
          colour description is not a substitute for a clear identity claim.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>What exactly is the stone, and how was that identity assessed?</li>
          <li>Is it natural, laboratory-grown, or an imitation material?</li>
          <li>Are there chips, fractures, cavities, repairs, or other features I should know about?</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Ask directly about treatments">
        <p>
          Ask whether the stone has been heated, filled, dyed, irradiated, diffused, or otherwise
          treated, and request that the seller records the answer on the invoice or sale document.
          Treatment can affect appearance, durability, care requirements, and value. If the seller
          cannot confidently establish the treatment status, treat it as unconfirmed rather than
          assuming the stone is untreated.
        </p>
      </ArticleSection>

      <ArticleSection heading="Separate origin claims from colour descriptions">
        <p>
          If a seller calls a sapphire “Ceylon” or names another mining origin, ask whether that is
          a documented geographic-origin claim or simply a description of colour or trade style.
          Appearance alone cannot reliably establish where a gemstone was mined. For a purchase
          priced around a specific origin, ask for an appropriate independent laboratory report
          before paying an origin premium.
        </p>
      </ArticleSection>

      <ArticleSection heading="Check any laboratory report independently">
        <p>
          Ask which laboratory examined the stone and whether the report belongs to this exact
          gemstone. Where the laboratory provides an online verification service, check the report
          number and compare the description, weight, measurements, photographs, and identifying
          features. Read the report wording carefully: a laboratory report is not a guaranteed
          market valuation and may express an opinion rather than absolute certainty.
        </p>
        <p>
          If the stone is valuable or the report does not resolve a claim important to your
          decision, consider arranging independent testing with a laboratory you choose before
          completing the purchase.
        </p>
      </ArticleSection>

      <ArticleSection heading="Understand the price and transaction terms">
        <p>
          Ask how the asking price was determined and which features justify it. Compare stones
          with similar identity, size, colour, clarity, cut, treatment status, and documentation;
          a price per carat by itself can be misleading. Confirm the currency, total price,
          payment method, delivery or collection arrangements, and who bears any agreed costs.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Can the agreed description and price be recorded on an invoice or receipt?</li>
          <li>What is the written return, refund, or dispute process if a material claim proves incorrect?</li>
          <li>Can I have the terms and any promised documents before making payment?</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Pause if important answers remain vague">
        <p>
          Be cautious if the seller pressures you to pay immediately, refuses to put key claims in
          writing, discourages reasonable independent verification, or offers documents that do not
          match the stone. These are reasons to slow down and investigate, not proof by themselves
          that a seller or gemstone is fraudulent. For a high-value purchase, an independent
          examination is usually a better safeguard than relying on verbal assurances.
        </p>
      </ArticleSection>

      <ArticleSection heading="A simple pre-payment checklist">
        <ul className="list-disc space-y-1 pl-5">
          <li>The gemstone identity and natural or synthetic status are clearly stated.</li>
          <li>Treatment and geographic-origin claims are disclosed separately.</li>
          <li>Any report has been checked and matches the stone being offered.</li>
          <li>Condition, total price, payment, delivery, and return terms are recorded.</li>
          <li>You have had enough time to verify the claims that materially affect the price.</li>
        </ul>
        <p>
          This guide is general buyer education, not legal, investment, or laboratory advice.
          Requirements and remedies vary by transaction and location; obtain qualified advice when
          needed.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Ceylon Sapphire: What It Is and Why It Is Famous | GemologyX",
  description:
    "What Ceylon sapphire means in trade and on lab reports, how treatment and quality affect value, and how it connects to Sri Lanka’s gem fields.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="Sri Lanka · Gems"
      readTime="8 min"
      title="Ceylon Sapphire: What It Is and Why It Is Famous"
      crumbHref="/sri-lanka"
      crumbLabel="Sri Lanka"
      lastReviewed="2026-11-07"
      related={[
        { label: "Sri Lanka hub", href: "/sri-lanka" },
        { label: "Ratnapura", href: "/sri-lanka/regions/ratnapura" },
        { label: "Gemstone scams", href: "/sri-lanka/buying/gemstone-scams" },
        {
          label: "What Ceylon means (Sinhala)",
          href: "/si/learn/what-ceylon-means",
        },
      ]}
    >
      <QuickAnswer>
        <p>
          “Ceylon sapphire” usually refers to sapphire associated with Sri Lanka
          — often described in the trade as light to medium, bright blue. The
          name is not a guarantee of quality, treatment status, or laboratory
          origin. On reports, geographic origin is typically an opinion. Colour,
          clarity, cut, carat weight, and treatment still decide most of the
          value.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Identity">
        <p>
          Sapphire is the non-red variety of corundum (red corundum is ruby).
          Blue is the best-known colour in the Ceylon trade narrative; yellow,
          pink, purple, green, and colourless sapphires also occur. Star sapphire
          (asterism) is a separate market story.
        </p>
        <ul>
          <li>Mineral family: Corundum</li>
          <li>Formula: Al₂O₃</li>
          <li>Mohs hardness: 9</li>
          <li>Common treatments: heat (others possible in the wider market)</li>
        </ul>
        <p className="text-sm text-muted">
          RI and SG figures will be added with cited handbook sources before this
          infobox is treated as complete.
        </p>
      </ArticleSection>

      <ArticleSection heading="Trade name vs laboratory origin">
        <ul>
          <li>
            <strong>Seller says “Ceylon”</strong> — marketing, tradition, or
            claimed source.
          </li>
          <li>
            <strong>Lab report “Sri Lanka” (or similar)</strong> — origin
            opinion based on inclusions and data, not a GPS reading.
          </li>
          <li>
            <strong>No origin on report</strong> — common; quality and treatment
            remain fully relevant.
          </li>
        </ul>
        <p>
          Paying a premium only for the word “Ceylon,” without treatment clarity
          and a coherent quality assessment, is a common buyer mistake.
        </p>
      </ArticleSection>

      <ArticleSection heading="Treatments">
        <p>
          Heat treatment is widely used to improve colour and/or clarity
          appearance in sapphire globally, including material tied to Sri Lanka.
          Always ask whether a stone is heated or unheated, and support important
          answers with a report from a respected lab when the price warrants it.
          Verify the report number.
        </p>
        <p>
          Related Sinhala guides:{" "}
          <Link href="/si/learn/heat-treatment-guide">Heat treatment</Link>,{" "}
          <Link href="/si/learn/heated-vs-unheated-blue-sapphire">
            Heated vs unheated blue sapphire
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection heading="Synthetics and imitations">
        <p>
          Lab-grown corundum, glass, and assembled stones can imitate blue
          sapphire. Visual inspection alone is often insufficient. When the
          amount of money is significant, use proper testing or a laboratory
          report.
        </p>
      </ArticleSection>

      <ArticleSection heading="What affects value">
        <ol>
          <li>Colour — hue, tone, saturation; evenness</li>
          <li>Clarity — eye-clean versus included</li>
          <li>Cut — windowing, ratios, brilliance</li>
          <li>Carat weight — size thresholds matter in the market</li>
          <li>
            Treatment — documented unheated material is a different market
            segment
          </li>
          <li>
            Origin opinion — may matter to some buyers; never replaces the above
          </li>
        </ol>
        <p>
          GemologyX does not publish live price lists. Any future price
          discussion will be dated and sourced.
        </p>
      </ArticleSection>

      <ArticleSection heading="Sri Lanka connection">
        <p>
          Sapphire is recovered in several Sri Lankan gem regions from
          gem-bearing gravels. Ratnapura is the best-known trade centre linked to
          that story.
        </p>
        <ul>
          <li>
            <Link href="/sri-lanka/regions/ratnapura">Ratnapura</Link>
          </li>
          <li>
            <Link href="/sri-lanka/geology/gem-gravels">Gem-bearing gravels</Link>
          </li>
          <li>
            <Link href="/sri-lanka/mining/methods">Mining methods</Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Care">
        <p>
          Corundum is hard (Mohs 9) and suitable for many jewellery uses, but
          impact can still chip stones. Avoid careless thermal shock. Clean with
          mild soap and a soft brush unless a jeweller advises otherwise for a
          specific setting.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Species = sapphire / corundum stated in writing",
          "Treatment asked and answered",
          "Report number verified when a report is part of the price",
          "Origin claim separated from quality claim",
          "Return or dispute terms clear before payment",
        ]}
      />

      <Misconceptions
        items={[
          "Ceylon always means unheated — no.",
          "Ceylon always means the highest quality — quality varies widely.",
          "The trade name replaces a laboratory report — it does not.",
        ]}
      />

      <ArticleSection heading="FAQ">
        <p>
          <strong>Is Ceylon sapphire always light blue?</strong>
          <br />
          No. Trade stereotypes exist, but material varies. Judge the stone, not
          the nickname alone.
        </p>
        <p>
          <strong>Does unheated automatically mean more valuable?</strong>
          <br />
          Often a different market segment when true and documented. An
          attractive heated stone can still be the better buy for a given budget.
        </p>
        <p>
          <strong>Can GemologyX certify my stone?</strong>
          <br />
          No. Use a recognised laboratory.
        </p>
      </ArticleSection>

      <ArticleSection heading="Sources">
        <p>
          Attach GIA educational material, standard gemmological texts, and Sri
          Lanka locality references at publish time. Infobox optical constants
          must cite a named source.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

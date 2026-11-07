import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Ratnapura: Sri Lanka's Gem City and Its Mines | GemologyX",
  description:
    "Ratnapura — Sri Lanka’s best-known gem centre. Location, gem-bearing gravels, stones found, mining style, and buying context.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="Sri Lanka · Regions"
      readTime="7 min"
      title="Ratnapura: Sri Lanka’s Gem City and Its Mines"
      crumbHref="/sri-lanka"
      crumbLabel="Sri Lanka"
      lastReviewed="2026-11-07"
      related={[
        { label: "Sri Lanka hub", href: "/sri-lanka" },
        { label: "Ceylon sapphire", href: "/sri-lanka/gems/ceylon-sapphire" },
        { label: "Gemstone scams", href: "/sri-lanka/buying/gemstone-scams" },
        {
          label: "Ratnapura market",
          href: "/sri-lanka/buying/ratnapura-gem-market",
        },
      ]}
    >
      <QuickAnswer>
        <p>
          Ratnapura (often translated as “city of gems”) is the best-known gem
          centre in south-western Sri Lanka. The surrounding area is historically
          tied to alluvial gem-gravel mining and a large local trade. This page
          summarises location, geology in plain language, gems reported from the
          district, mining style, and buying context — not a mine-visit booking
          service.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Location">
        <p>
          Ratnapura is the capital of Sabaragamuwa Province, inland from Sri
          Lanka’s south-west coast, and a long-standing hub for gem dealing and
          services linked to the industry. Neighbouring gem localities in the
          wider belt are covered on their own region pages as they are published
          (for example Balangoda).
        </p>
        <p>
          <strong>Original asset pending:</strong> district map showing Ratnapura
          relative to other gem towns. Add before calling this page complete.
        </p>
      </ArticleSection>

      <ArticleSection heading="Geology in plain language">
        <p>
          Much of Sri Lanka’s gem production is associated with gem-bearing
          gravels (often discussed under local terms such as illam in trade
          conversation). Material is concentrated in weathered gravel layers and
          worked by pit, tunnel, or related methods depending on the site. For a
          wider overview see{" "}
          <Link href="/sri-lanka/geology/gem-gravels">gem-bearing gravels</Link>{" "}
          and the{" "}
          <Link href="/sri-lanka/mining/methods">mining methods hub</Link>.
        </p>
      </ArticleSection>

      <ArticleSection heading="Gems found here">
        <p>
          The Ratnapura area is associated in literature and trade with a mix that
          commonly includes:
        </p>
        <ul>
          <li>Sapphire (including material sold under the Ceylon trade name)</li>
          <li>Ruby (less dominant than sapphire in many narratives)</li>
          <li>Cat’s-eye chrysoberyl</li>
          <li>Spinel and other accessory gem minerals depending on the gravel</li>
        </ul>
        <p>
          Exact mix varies by locality and pit. Species identity still requires
          proper testing — colour alone is not enough.
        </p>
        <p>
          See also{" "}
          <Link href="/sri-lanka/gems/ceylon-sapphire">Ceylon sapphire</Link>.
        </p>
      </ArticleSection>

      <ArticleSection heading="How mining is done">
        <p>
          Work in the district has historically included hand-dug pits and tunnels
          into gem gravel, with washing to separate heavy minerals and gem rough.
          Mechanisation and regulation have changed practice over time. Site-level
          access is controlled; tourists should not assume open entry to working
          mines.
        </p>
      </ArticleSection>

      <ArticleSection heading="Licences and rules">
        <p>
          Mining and dealing activities in Sri Lanka are regulated. For licence
          categories and current procedure, use official NGJA sources only. Our{" "}
          <Link href="/sri-lanka/regulation/ngja-licence">NGJA licence page</Link>{" "}
          will summarise verified steps with dated sources — it is not a
          substitute for the Authority’s own guidance.
        </p>
      </ArticleSection>

      <ArticleSection heading="Environment and safety">
        <p>
          Pit and tunnel work carries collapse, flooding, and other physical
          risks. Gravel mining can affect water and soil locally. Treat working
          mines as industrial sites, not attractions, unless a verified, licensed
          visit programme says otherwise.
        </p>
      </ArticleSection>

      <ArticleSection heading="Visiting and buying">
        <p>
          Ratnapura is a major place to see the gem trade in action. Buying still
          requires the same discipline as anywhere else: written description,
          treatment questions, report verification when the price warrants it, and
          a clear exit if pressure appears.
        </p>
        <ul>
          <li>
            <Link href="/sri-lanka/buying/ratnapura-gem-market">
              Buying at the Ratnapura gem market
            </Link>
          </li>
          <li>
            <Link href="/sri-lanka/buying/gemstone-scams">
              Scams and how to reduce risk
            </Link>
          </li>
        </ul>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "You know whether you are visiting trade streets, a dealer office, or a mine site",
          "Species and treatment will be stated in writing before any payment",
          "You have read the scams checklist",
          "Map / field photo asset added when available (originality gate)",
        ]}
      />

      <ArticleSection heading="FAQ">
        <p>
          <strong>Can anyone walk into a mine?</strong>
          <br />
          No. Access depends on licences, owners, and safety. Do not treat social
          media clips as an open invitation.
        </p>
        <p>
          <strong>Is every sapphire bought in Ratnapura from Ratnapura gravel?</strong>
          <br />
          Not necessarily. Trade hubs concentrate stones from wider areas and
          sometimes other origins. Ask for clarity; verify when it matters.
        </p>
      </ArticleSection>

      <ArticleSection heading="Sources">
        <p>
          Expand with named locality references, official regulation links, and
          any field notes or maps you own. Legal and safety claims must stay tied
          to current primary sources.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

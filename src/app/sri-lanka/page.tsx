import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Sri Lanka Gemstones: The Complete Guide | GemologyX",
  description:
    "A practical guide to Sri Lanka’s gemstones — sapphire, mining regions, industry, buying risks, and how the trade works. Educational reference, not a buying service.",
};

const flagshipGems = [
  {
    name: "Ceylon / Sri Lankan sapphire",
    note: "Trade name vs lab origin opinion; treatment still drives value",
    href: "/sri-lanka/gems/ceylon-sapphire",
  },
  {
    name: "Padparadscha sapphire",
    note: "Colour-boundary stone; definitions vary by lab",
    href: "/sri-lanka/gems/padparadscha-sapphire",
  },
  {
    name: "Cat’s-eye chrysoberyl",
    note: "Chatoyancy; Sri Lanka is a classic source",
    href: "/sri-lanka/gems/cats-eye",
  },
  {
    name: "Moonstone",
    note: "Adularescence; local material has a distinct market story",
    href: "/sri-lanka/gems/moonstone",
  },
  {
    name: "Spinel",
    note: "Often confused with ruby historically; important in its own right",
    href: "/sri-lanka/gems/spinel",
  },
];

const regions = [
  {
    name: "Ratnapura",
    note: "Best-known gem city; trade and alluvial mining hinterland",
    href: "/sri-lanka/regions/ratnapura",
  },
  {
    name: "Balangoda",
    note: "Important mining district in the same broader belt",
    href: "/sri-lanka/regions/balangoda",
  },
  {
    name: "Elahera",
    note: "Major field in the central / north-central system",
    href: "/sri-lanka/regions/elahera",
  },
];

export default function Page() {
  return (
    <ArticleLayout
      category="Sri Lanka"
      readTime="8 min"
      title="Sri Lanka Gemstones: The Complete Guide"
      crumbHref="/"
      crumbLabel="Home"
      lastReviewed="2026-11-07"
      related={[
        { label: "Ceylon sapphire", href: "/sri-lanka/gems/ceylon-sapphire" },
        { label: "Ratnapura", href: "/sri-lanka/regions/ratnapura" },
        { label: "Buying scams guide", href: "/sri-lanka/buying/gemstone-scams" },
        { label: "Editorial policy", href: "/editorial-policy" },
      ]}
    >
      <QuickAnswer>
        <p>
          Sri Lanka is one of the world’s classic gem sources, especially for
          sapphire, and also for stones such as cat’s-eye chrysoberyl, moonstone,
          and spinel. Most material is recovered from gem-bearing gravels rather
          than hard-rock mines. This hub links regions, mining methods, industry
          structure, flagship stones, and safer-buying guidance.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Why Sri Lanka matters">
        <p>
          Sri Lanka (historically associated with the trade name “Ceylon” for many
          sapphires) has a long recorded gem tradition and an active domestic trade
          centred on towns such as Ratnapura. For learners and buyers, three ideas
          matter most:
        </p>
        <ul>
          <li>
            <strong>Species diversity</strong> — corundum (sapphire/ruby),
            chrysoberyl, feldspar (moonstone), spinel, and others appear in the
            same broad alluvial systems.
          </li>
          <li>
            <strong>Treatment and disclosure</strong> — heat treatment is common
            for sapphire; origin and treatment claims should be separated and,
            when the price justifies it, documented.
          </li>
          <li>
            <strong>Local process knowledge</strong> — how gravel is mined and
            washed, and how licences and export rules work, reduces costly
            misunderstandings.
          </li>
        </ul>
        <p>
          GemologyX treats Sri Lanka as a depth vertical, not a tourism slogan.
          Claims about law, licence, or procedure are tied to dated sources on
          child pages.
        </p>
      </ArticleSection>

      <ArticleSection heading="Flagship gemstones">
        <div className="not-prose space-y-3">
          {flagshipGems.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="block rounded-xl border border-border bg-white px-4 py-3 transition-colors hover:border-[rgba(30,58,95,0.3)]"
            >
              <p className="font-medium text-foreground">{g.name}</p>
              <p className="mt-0.5 text-sm text-muted">{g.note}</p>
            </Link>
          ))}
        </div>
        <p className="mt-4">
          Also see global profiles:{" "}
          <Link href="/gemstones/sapphire">Sapphire</Link>,{" "}
          <Link href="/gemstones/ruby">Ruby</Link>,{" "}
          <Link href="/gemstones/spinel">Spinel</Link>,{" "}
          <Link href="/gemstones/moonstone">Moonstone</Link>.
        </p>
      </ArticleSection>

      <ArticleSection heading="Gem regions">
        <div className="not-prose space-y-3">
          {regions.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="block rounded-xl border border-border bg-white px-4 py-3 transition-colors hover:border-[rgba(30,58,95,0.3)]"
            >
              <p className="font-medium text-foreground">{r.name}</p>
              <p className="mt-0.5 text-sm text-muted">{r.note}</p>
            </Link>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted">
          Further localities (Rakwana, Pelmadulla, and others) are planned under
          Phase 1. Region pages require a map or equivalent original location
          asset and a gems-found table.
        </p>
      </ArticleSection>

      <ArticleSection heading="Industry, regulation, and trade">
        <ul>
          <li>
            <Link href="/sri-lanka/gem-industry">
              Sri Lanka’s gem industry explained
            </Link>{" "}
            — mine to export chain
          </li>
          <li>
            <Link href="/sri-lanka/regulation/ngja-licence">NGJA licences</Link>{" "}
            — who needs what (official sources only)
          </li>
          <li>
            <Link href="/sri-lanka/trade/export-procedure">
              Export procedure overview
            </Link>{" "}
            — steps and documents at a high level
          </li>
        </ul>
        <p>
          These pages are updated when official rules change. If a detail cannot
          be verified against a current primary source, it is not published as
          fact.
        </p>
      </ArticleSection>

      <ArticleSection heading="Mining and geology">
        <ul>
          <li>
            <Link href="/sri-lanka/geology/gem-gravels">
              Gem-bearing gravels of Sri Lanka
            </Link>
          </li>
          <li>
            <Link href="/sri-lanka/mining/methods">Mining methods hub</Link> —
            pit, tunnel, river, washing
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Buying in Sri Lanka">
        <p>
          Buying well is less about “secret mines” and more about process: know
          what species and treatment you are paying for; prefer written
          descriptions; treat origin stories and certificates as claims to
          verify; walk away from pressure selling.
        </p>
        <ul>
          <li>
            <Link href="/sri-lanka/buying/ratnapura-gem-market">
              Buying at the Ratnapura gem market
            </Link>
          </li>
          <li>
            <Link href="/sri-lanka/buying/gemstone-scams">
              Gemstone scams in Sri Lanka and how to avoid them
            </Link>
          </li>
          <li>
            Related:{" "}
            <Link href="/si/learn/gemstone-buying-checklist">
              Buying checklist (Sinhala)
            </Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Frequently asked questions">
        <p>
          <strong>
            Is every blue sapphire from Sri Lanka a “Ceylon sapphire”?
          </strong>
          <br />
          No. “Ceylon” is widely used in trade for Sri Lanka–associated sapphire,
          but lab origin, if stated, is usually an opinion. Quality and treatment
          still dominate value. See{" "}
          <Link href="/sri-lanka/gems/ceylon-sapphire">Ceylon Sapphire</Link>.
        </p>
        <p>
          <strong>Can I visit mines as a tourist?</strong>
          <br />
          Access varies by site, licence, and safety. Do not assume open public
          access. Region pages note visitor reality only where verified.
        </p>
        <p>
          <strong>Are Sri Lankan sapphires always unheated?</strong>
          <br />
          No. Heat treatment is common worldwide, including for material from Sri
          Lanka. Ask for treatment disclosure and support it with a report when
          the price warrants it.
        </p>
        <p>
          <strong>Is this site a dealer or appraisal service?</strong>
          <br />
          No. GemologyX is an educational reference. We do not buy, sell, or issue
          laboratory reports.
        </p>
      </ArticleSection>

      <ArticleSection heading="Sources">
        <p>
          Child pages carry detailed citations. Hub-level background aligns with
          established gemmological locality literature and Sri Lankan
          trade/regulatory context as documented on regulation and industry
          pages.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, FileCheck2, Globe2, Scale, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Sri Lanka Gemstone Trade & Export: Official Resources",
  description:
    "A source-led guide to Sri Lanka's gemstone trade and export research, including NGJA procedures, export documentation questions, official statistics and responsible buyer due diligence.",
  alternates: { canonical: "/sri-lanka-trade-export" },
};

const officialResources = [
  {
    title: "NGJA export services procedure",
    description: "The National Gem and Jewellery Authority's published export-services guidance. Read the current official instructions for your specific shipment.",
    href: "https://ngja.gov.lk/business_services/export-services-procedure/",
  },
  {
    title: "NGJA online export licence process",
    description: "Official starting point for information about the online export-licence process. Confirm current eligibility, documents and steps directly with NGJA.",
    href: "https://ngja.gov.lk/business_services/export-licence-process/",
  },
  {
    title: "NGJA statistics",
    description: "Official statistics index for gemstone and jewellery industry data. Check the reporting period, units and definitions in each publication.",
    href: "https://ngja.gov.lk/corporate_profiles/statistics/",
  },
  {
    title: "Central Bank of Sri Lanka — external sector statistics",
    description: "Official statistical tables include gem-related export data. Use the relevant table notes and reporting period when quoting values.",
    href: "https://www.cbsl.gov.lk/en/statistics/statistical-tables/external-sector",
  },
];

export default function SriLankaTradeExportPage() {
  return (
    <article className="container-page max-w-5xl py-12 md:py-16">
      <nav className="luxury-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><span>Sri Lanka Trade & Export</span>
      </nav>

      <header className="article-hero">
        <div className="luxury-eyebrow"><span /> SRI LANKA INDUSTRY GUIDE</div>
        <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Sri Lanka Gemstone Trade & Export
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted md:text-lg">
          Follow the route from a gemstone purchase to a documented, export-ready transaction.
          This guide helps traders, buyers and researchers find official procedures, interpret
          published statistics and ask better questions about provenance and disclosure.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a className="luxury-button luxury-button-primary" href="#official-procedures">Official procedures <ArrowRight size={16} /></a>
          <a className="luxury-button luxury-button-secondary" href="#trade-checklist">Trade checklist</a>
        </div>
      </header>

      <div className="profile-content">
        <section>
          <h2>Understand the mine-to-market chain</h2>
          <p>
            Sri Lanka&apos;s coloured-stone sector connects mining, sorting, local trading, cutting
            and polishing, treatment disclosure, gemological examination, jewellery production
            and international trade. Not every stone follows the same route, and the records
            available can differ by transaction and stage.
          </p>
          <p>
            A credible trade record should distinguish what is known from what is claimed.
            A seller&apos;s description, a purchase receipt, a laboratory report and a documented
            geographic-origin opinion are different forms of evidence; none should be presented
            as a substitute for the others.
          </p>
        </section>

        <section id="official-procedures">
          <div className="mb-3 flex items-center gap-3 text-accent"><FileCheck2 size={21} /><h2 className="!mt-0">Official export procedures</h2></div>
          <p>
            Start with the National Gem and Jewellery Authority (NGJA) and read the current
            procedure that applies to your transaction. Requirements may depend on the type of
            goods, the export route and the rules in force at the time. This page intentionally
            does not quote fixed fees, processing times or a universal document list without
            verifying the current official instructions.
          </p>
          <div className="mt-4 space-y-3">
            {officialResources.slice(0, 2).map((resource) => (
              <a key={resource.href} href={resource.href} target="_blank" rel="noreferrer" className="block rounded-lg border border-border bg-surface p-4 hover:border-accent">
                <span className="flex items-center justify-between gap-3 font-medium">{resource.title}<ExternalLink size={15} className="shrink-0 text-accent" /></span>
                <span className="mt-1 block text-sm leading-6 text-muted">{resource.description}</span>
              </a>
            ))}
          </div>
          <p>
            Before submitting an application, confirm the correct category of goods, the
            required supporting records, valuation or inspection steps where applicable, fees,
            payment method, current office or online process, and whether any additional
            permissions apply. If anything is unclear, ask NGJA or a qualified trade professional
            before shipping.
          </p>
        </section>

        <section id="trade-checklist">
          <div className="mb-3 flex items-center gap-3 text-accent"><ShieldCheck size={21} /><h2 className="!mt-0">A responsible gemstone-trade checklist</h2></div>
          <p>Use this as a due-diligence prompt, not a legal checklist or guarantee that a transaction is compliant.</p>
          <ul>
            <li><strong>Identify the goods:</strong> record the seller&apos;s description, stone variety, quantity and any known treatments without presenting unverified claims as facts.</li>
            <li><strong>Keep transaction records:</strong> retain invoices, receipts and other records required for your transaction; confirm applicable recordkeeping rules with the relevant authority.</li>
            <li><strong>Separate identification from origin:</strong> a stone&apos;s identity, treatment status and geographic origin are different questions and may require different evidence.</li>
            <li><strong>Review reports carefully:</strong> check the issuing laboratory, report number, scope, limitations and whether the report corresponds to the exact stone being offered.</li>
            <li><strong>Confirm rights and permissions:</strong> do not assume that possession, purchase or a seller&apos;s verbal assurance proves that every later trade or export step is permitted.</li>
            <li><strong>Verify before shipping:</strong> check current export requirements and destination-country import, customs and tax rules with official sources or a qualified professional.</li>
          </ul>
        </section>

        <section>
          <div className="mb-3 flex items-center gap-3 text-accent"><Scale size={21} /><h2 className="!mt-0">Price, value and documentation</h2></div>
          <p>
            Gemstone prices vary with species and variety, colour, transparency, clarity,
            cut, carat weight, treatments, origin evidence, demand and the terms of sale.
            There is no single reliable price per carat for an entire category such as
            “Ceylon sapphire.” A useful comparison must specify the stone and the evidence
            behind the quoted price.
          </p>
          <p>
            Export or trade statistics describe aggregates over a defined period; they do not
            automatically show the value of an individual stone, the number of stones sold,
            mining output or a current market price. Always report the source, period, currency,
            units and whether a figure is preliminary, estimated or final.
          </p>
        </section>

        <section>
          <div className="mb-3 flex items-center gap-3 text-accent"><Globe2 size={21} /><h2 className="!mt-0">Where to find trade statistics</h2></div>
          <p>
            Prefer primary sources when quoting export values or describing industry trends.
            Check the metadata and notes before comparing years: definitions, classifications,
            currency and revisions can affect what a figure means.
          </p>
          <div className="mt-4 space-y-3">
            {officialResources.slice(2).map((resource) => (
              <a key={resource.href} href={resource.href} target="_blank" rel="noreferrer" className="block rounded-lg border border-border bg-surface p-4 hover:border-accent">
                <span className="flex items-center justify-between gap-3 font-medium">{resource.title}<ExternalLink size={15} className="shrink-0 text-accent" /></span>
                <span className="mt-1 block text-sm leading-6 text-muted">{resource.description}</span>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2>Related Sri Lankan gemstone guides</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link href="/sri-lanka-mining" className="rounded-lg border border-border bg-surface p-4 hover:border-accent">
              <span className="block font-medium">Gemstone mining in Sri Lanka</span>
              <span className="mt-2 block text-sm leading-6 text-muted">Methods, safety, environmental impacts and official mining resources.</span>
              <span className="mt-3 flex items-center gap-2 text-sm text-accent">Read guide <ArrowRight size={14} /></span>
            </Link>
            <Link href="/origins/sri-lanka" className="rounded-lg border border-border bg-surface p-4 hover:border-accent">
              <span className="block font-medium">Sri Lanka gemstone origins</span>
              <span className="mt-2 block text-sm leading-6 text-muted">Explore Sri Lanka&apos;s gemstone identity and origin context.</span>
              <span className="mt-3 flex items-center gap-2 text-sm text-accent">Read guide <ArrowRight size={14} /></span>
            </Link>
            <Link href="/learn/gemstone-certification" className="rounded-lg border border-border bg-surface p-4 hover:border-accent">
              <span className="block font-medium">Gemstone certification</span>
              <span className="mt-2 block text-sm leading-6 text-muted">Understand what laboratory reports can and cannot establish.</span>
              <span className="mt-3 flex items-center gap-2 text-sm text-accent">Read guide <ArrowRight size={14} /></span>
            </Link>
            <Link href="/learn/how-to-read-a-gemstone-report" className="rounded-lg border border-border bg-surface p-4 hover:border-accent">
              <span className="block font-medium">How to read a gemstone report</span>
              <span className="mt-2 block text-sm leading-6 text-muted">Review report details, scope and limitations before a purchase.</span>
              <span className="mt-3 flex items-center gap-2 text-sm text-accent">Read guide <ArrowRight size={14} /></span>
            </Link>
          </div>
        </section>

        <section>
          <h2>Frequently asked questions</h2>
          <h3>Can I export gemstones using this guide alone?</h3>
          <p>No. Use the current NGJA instructions and confirm the requirements for your exact transaction. This page is educational and is not an authorization or legal opinion.</p>
          <h3>Does a laboratory report prove a gemstone&apos;s origin?</h3>
          <p>Not every report includes an origin opinion. Read the report&apos;s stated scope and limitations, and do not infer origin from identification alone.</p>
          <h3>Do export statistics show the current price of a sapphire?</h3>
          <p>No. Aggregate export data and an individual stone&apos;s market value measure different things. Stone-specific evaluation requires relevant gemological and commercial details.</p>
        </section>
      </div>

      <aside className="mt-10 rounded-xl border border-border bg-surface p-5 text-sm leading-6 text-muted">
        <strong className="text-foreground">Editorial note:</strong> Procedures and rules can change.
        Confirm current requirements with NGJA and other relevant authorities. This guide is
        general education, not legal, customs, tax or valuation advice.
      </aside>
    </article>
  );
}

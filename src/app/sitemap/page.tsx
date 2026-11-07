import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { allGemstones } from "@/data/all-gemstones";
import { origins } from "@/data/origins";
import { glossaryTerms } from "@/data/glossary";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Site Map",
  description: "Browse the GemologyX gemstone encyclopedia, learning guides, Sri Lanka hub, tools, glossary and site information.",
  alternates: { canonical: "/sitemap" },
  openGraph: { type: "website", title: "Site Map", description: "Browse the GemologyX gemstone encyclopedia, learning guides, Sri Lanka hub, tools, glossary and site information.", url: "/sitemap" },
  twitter: { card: "summary_large_image", title: "Site Map", description: "Browse the GemologyX gemstone encyclopedia, learning guides, Sri Lanka hub, tools, glossary and site information." },
};

const sections = [
  { title: "Start here", description: "About the project and its publishing approach.", links: [{ label: "Home", href: "/" }, { label: "About GemologyX", href: "/about" }, { label: "Editorial standards", href: "/editorial-standards" }, { label: "Sources and citations", href: "/sources" }, { label: "Contact", href: "/contact" }] },
  { title: "Learn gemology", description: "Guides on gemstone science, reports, treatments and informed buying.", links: [{ label: "Learning library", href: "/learn" }, { label: "Frequently asked questions", href: "/faq" }, { label: "Gemstone care", href: "/learn/gemstone-care" }, { label: "Certification", href: "/learn/gemstone-certification" }, { label: "Natural vs synthetic gems", href: "/learn/natural-vs-synthetic-gemstones" }, { label: "Read a gemstone report", href: "/learn/how-to-read-a-gemstone-report" }] },
  { title: "Sri Lanka", description: "Gem origins, mining, environment and trade references.", links: [{ label: "Sri Lanka flagship hub", href: "/sri-lanka" }, { label: "Gem origins profile", href: "/origins/sri-lanka" }, { label: "Mining overview", href: "/sri-lanka-mining" }, { label: "Mining methods", href: "/sri-lanka-mining/methods" }, { label: "Mining environment", href: "/sri-lanka-mining/environment" }, { label: "Licensing resources", href: "/sri-lanka-mining/licensing" }, { label: "Trade and export", href: "/sri-lanka-trade-export" }] },
  { title: "Reference library", description: "Browse data-backed gemstone, locality and terminology entries.", links: [{ label: "Gemstone encyclopedia", href: "/gemstones" }, { label: "Origins atlas", href: "/origins" }, { label: "Gemology glossary", href: "/glossary" }] },
  { title: "Tools", description: "Calculators and concise reference tools.", links: [{ label: "All tools", href: "/tools" }, { label: "Carat to gram converter", href: "/tools/carat-to-gram" }, { label: "Gemstone size calculator", href: "/tools/gemstone-size" }, { label: "Ring size converter", href: "/tools/ring-size" }, { label: "Mohs hardness", href: "/tools/mohs-hardness" }, { label: "Birthstones", href: "/tools/birthstones" }] },
  { title: "Site policies", description: "Important information about using this educational site.", links: [{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }, { label: "Disclaimer", href: "/disclaimer" }] },
];

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return <ul className="mt-4 grid gap-2 sm:grid-cols-2">{links.map((link) => <li key={link.href}><Link className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-strong" href={link.href}>{link.label}<ArrowUpRight size={13}/></Link></li>)}</ul>;
}

export default function SiteMapPage() {
  return <div className="container-page py-12 md:py-16">
    <BreadcrumbJsonLd items={[{ name: "Home", url: "https://gemologyx.com/" }, { name: "Site map", url: "https://gemologyx.com/sitemap" }]} />
    <header className="border-b border-border pb-8"><div className="gx-eyebrow"><span /> EXPLORE GEMOLOGYX</div><h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">Site map</h1><p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">Browse the main hubs and reference collections. Entries in the directories are generated from the site&apos;s gemstone, origin and glossary data.</p></header>
    <div className="mt-8 grid gap-4 lg:grid-cols-2">{sections.map((section) => <section key={section.title} className="gx-card p-5 md:p-6"><h2 className="font-serif text-xl font-semibold">{section.title}</h2><p className="mt-1 text-sm text-muted">{section.description}</p><LinkList links={section.links}/></section>)}</div>
    <div className="mt-10 grid gap-5 lg:grid-cols-3">
      <section className="gx-card p-5"><h2 className="font-serif text-lg font-semibold">Gemstones ({allGemstones.length})</h2><LinkList links={allGemstones.map((gem) => ({ label: gem.name, href: `/gemstones/${gem.slug}` }))}/></section>
      <section className="gx-card p-5"><h2 className="font-serif text-lg font-semibold">Origins ({origins.length})</h2><LinkList links={origins.map((origin) => ({ label: origin.name, href: `/origins/${origin.slug}` }))}/></section>
      <section className="gx-card p-5"><h2 className="font-serif text-lg font-semibold">Glossary ({glossaryTerms.length})</h2><LinkList links={glossaryTerms.map((term) => ({ label: term.term, href: `/glossary/${term.slug}` }))}/></section>
    </div>
  </div>;
}

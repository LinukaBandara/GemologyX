import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileCheck2, Gem, Map, Pickaxe, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Sri Lanka Gem Hub",
  description: "Explore Sri Lanka's gemstone origins, mining, regional gem knowledge, trade and export through the GemologyX reference hub.",
  alternates: { canonical: "/sri-lanka" },
};

const sections = [
  { icon: Gem, number: "01", title: "Gemstone origins", description: "Learn about Sri Lankan gem materials and the limits of geographic origin claims.", links: [{ label: "Sri Lanka origin profile", href: "/origins/sri-lanka" }, { label: "Gemstone directory", href: "/gemstones" }] },
  { icon: Pickaxe, number: "02", title: "Mining and environment", description: "A practical overview of mining approaches, safety considerations, environmental questions and official resources.", links: [{ label: "Mining in Sri Lanka", href: "/sri-lanka-mining" }, { label: "Mining methods", href: "/sri-lanka-mining/methods" }, { label: "Environment", href: "/sri-lanka-mining/environment" }, { label: "Licensing resources", href: "/sri-lanka-mining/licensing" }] },
  { icon: FileCheck2, number: "03", title: "Trade and export", description: "Follow the mine-to-market context and find pointers to official export guidance.", links: [{ label: "Trade and export guide", href: "/sri-lanka-trade-export" }, { label: "Read a gem report", href: "/learn/how-to-read-a-gemstone-report" }] },
  { icon: BookOpen, number: "04", title: "Local gem knowledge", description: "Explore English and Sinhala guides about local terminology, buying and the people and processes in Sri Lanka’s gem trade.", links: [{ label: "Sri Lanka trade terms · English", href: "/learn/sri-lanka-gem-terms" }, { label: "ශ්‍රී ලංකාවේ මැණික් පද · සිංහල", href: "/si/learn/sri-lanka-gem-terms" }, { label: "Sri Lankan gem trade · සිංහල", href: "/si/learn/sri-lanka-gem-trade-intro" }, { label: "Dealer types · සිංහල", href: "/si/learn/sri-lanka-dealer-types" }, { label: "Buying day tips · සිංහල", href: "/si/learn/sri-lanka-buying-day-tips" }] },
];

export default function SriLankaHubPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <nav className="luxury-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Sri Lanka</span></nav>
      <header className="article-hero">
        <div className="luxury-eyebrow"><span /> FLAGSHIP COUNTRY HUB</div>
        <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Sri Lanka and its gem heritage</h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-muted md:text-lg">A guided entry to GemologyX&apos;s Sri Lanka coverage: gemstone origins, mining, environment, trade and practical local knowledge. Each section links to a focused reference or guide.</p>
        <div className="mt-7 flex flex-wrap gap-3"><Link className="luxury-button luxury-button-primary" href="/origins/sri-lanka">Explore Sri Lanka&apos;s gem origins <ArrowRight size={16} /></Link><Link className="luxury-button luxury-button-secondary" href="/sri-lanka-mining">Mining overview</Link></div>
      </header>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {sections.map(({ icon: Icon, number, title, description, links }) => <section key={number} className="gx-card p-6 md:p-7">
          <div className="flex items-center gap-3"><span className="text-xs font-bold tracking-widest text-gold">{number}</span><Icon size={19} className="text-accent" /><h2 className="font-serif text-xl font-semibold">{title}</h2></div>
          <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
          <ul className="mt-5 flex flex-wrap gap-2">{links.map((link) => <li key={link.href}><Link className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2 text-xs font-medium text-accent hover:bg-accent-soft" href={link.href}>{link.label}<ArrowRight size={13} /></Link></li>)}</ul>
        </section>)}
      </div>
      <aside className="mt-8 flex gap-3 rounded-xl border border-border bg-white p-5 text-sm leading-6 text-muted"><Map size={18} className="mt-1 shrink-0 text-accent" /><p>Gem origin opinions require appropriate gemological examination; a stone&apos;s appearance or a seller&apos;s description alone does not establish geographic origin. For rules that can change, consult the relevant official source directly.</p></aside>
      <div className="mt-8 flex items-start gap-3 rounded-xl bg-teal-soft p-5 text-sm leading-6 text-foreground"><ShieldCheck size={18} className="mt-1 shrink-0 text-teal" /><p>GemologyX is an educational reference. Our mining and export pages are starting points for research, not legal, safety or operational advice.</p></div>
    </div>
  );
}

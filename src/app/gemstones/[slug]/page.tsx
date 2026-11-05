import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Sparkles } from "lucide-react";
import { allGemstones } from "@/data/all-gemstones";
import { AdSlot } from "@/components/ad-slot";

export function generateStaticParams() { return allGemstones.map((gem) => ({ slug: gem.slug })); }
type Params = Promise<{ slug: string }>;
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const gem = allGemstones.find((item) => item.slug === slug);
  return gem ? { title: gem.name, description: gem.description } : {};
}
function Fact({ label, value }: { label: string; value: string }) {
  return <div className="gx-fact"><dt>{label}</dt><dd>{value}</dd></div>;
}
const PROFILE_ART: Record<string, string> = { sapphire: "/images/gx-sapphire.svg", ruby: "/images/gx-ruby.svg", emerald: "/images/gx-emerald.svg" };

export default async function GemstonePage({ params }: { params: Params }) {
  const { slug } = await params;
  const gem = allGemstones.find((item) => item.slug === slug);
  if (!gem) notFound();
  const detail = gem.detail;
  const image = PROFILE_ART[gem.slug] ?? "/images/gx-sapphire.svg";
  return (
    <article className="container-page gx-profile">
      <nav className="gx-breadcrumb" style={{ color: "var(--muted)", marginBottom: 22 }}><Link href="/">Home</Link><span>/</span><Link href="/gemstones">Gemstone index</Link><span>/</span><span>{gem.name}</span></nav>
      <header className="gx-profile-hero">
        <div className="gx-profile-art"><Image src={image} alt={`${gem.name} faceted gemstone illustration`} width={420} height={320} /></div>
        <div className="gx-profile-copy">
          <div className="gx-eyebrow">Gemstone profile · {gem.category}</div>
          <h1>{gem.name}</h1>
          <p>{gem.description}</p>
        </div>
      </header>
      <dl className="gx-facts">
        <Fact label="Mineral family" value={gem.mineralFamily} />
        {gem.chemicalFormula && <Fact label="Chemical composition" value={gem.chemicalFormula} />}
        <Fact label="Mohs hardness" value={gem.hardness} />
        {gem.crystalSystem && <Fact label="Crystal system" value={gem.crystalSystem} />}
        <Fact label="Typical colours" value={gem.colors.join(", ")} />
        {gem.birthstoneMonth && <Fact label="Birthstone" value={gem.birthstoneMonth} />}
        {gem.commonTreatments && <Fact label="Common treatments" value={gem.commonTreatments.join(", ")} />}
      </dl>
      {detail ? (
        <div className="gx-profile-content">
          {[
            ["What Is " + gem.name + "?", detail.whatIsIt],
            [gem.name + " Colours", detail.colorNotes],
            [gem.name + " Origins", detail.origins],
            ["Natural vs Synthetic", detail.naturalVsSynthetic],
            ["Treatments", detail.treatments],
          ].map(([heading, paragraph]) => <section key={heading}><div className="gx-page-kicker"><Sparkles size={12} style={{ display: "inline", verticalAlign: "-2px" }} /> GEMOLOGYX REFERENCE</div><h2>{heading}</h2><p>{paragraph}</p></section>)}
          <AdSlot variant="in-content" />
          <section><h2>Inclusions</h2><p>{detail.inclusions}</p></section>
          <section><h2>Value Factors</h2><ul>{detail.valueFactors.map((factor) => <li key={factor}>{factor}</li>)}</ul></section>
          <section><h2>Certification</h2><p>{detail.certification}</p></section>
          <section><h2>Care</h2><p>{detail.care}</p></section>
        </div>
      ) : <div className="gx-profile-disclaimer">A full educational write-up for {gem.name} is in editorial preparation. The quick facts above are available for reference.</div>}
      <div className="gx-profile-disclaimer">GemologyX provides educational information and is not a substitute for professional gemological examination or a laboratory report.</div>
      <Link href="/gemstones" className="gx-back-link"><ArrowLeft size={14} /> Back to all gemstones</Link>
    </article>
  );
}

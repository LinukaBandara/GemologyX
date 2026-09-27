import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gemstones } from "@/data/gemstones";
import { origins } from "@/data/origins";
import { GemstoneCard } from "@/components/gemstone-card";
import { AdSlot } from "@/components/ad-slot";

const GUIDES = [
  { title: "Natural vs Synthetic Gemstones", href: "/learn/natural-vs-synthetic-gemstones" },
  { title: "Heated vs Unheated Gemstones", href: "/learn/heated-vs-unheated" },
  { title: "How Gemstone Certification Works", href: "/learn/gemstone-certification" },
  { title: "How to Read a Gemstone Report", href: "/learn/how-to-read-a-gemstone-report" },
  { title: "What Makes a Sapphire Valuable?", href: "/learn/sapphire/sapphire-value-factors" },
  { title: "How to Care for Gemstones", href: "/learn/gemstone-care" },
];

const TOOLS = [
  { title: "Carat to Gram Converter", href: "/tools/carat-to-gram" },
  { title: "Gemstone Size Calculator", href: "/tools/gemstone-size" },
  { title: "Ring Size Converter", href: "/tools/ring-size" },
  { title: "Mohs Hardness Reference", href: "/tools/mohs-hardness" },
  { title: "Birthstone Finder", href: "/tools/birthstones" },
];

const CEYLON_GEMS = ["Ceylon Sapphire", "Padparadscha", "Star Sapphire", "Yellow Sapphire", "Ruby", "Alexandrite", "Cat's Eye", "Spinel"];

const GLOSSARY_PREVIEW = ["Asterism", "Cabochon", "Carat", "Clarity", "Corundum", "Geuda", "Inclusion", "Padparadscha", "Pleochroism", "Refractive Index"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="luxury-hero overflow-hidden">
        <div className="container-page relative py-20 md:py-28 lg:py-32">
          <div className="luxury-hero-orb luxury-hero-orb-one" />
          <div className="luxury-hero-orb luxury-hero-orb-two" />
          <div className="relative max-w-4xl">
            <div className="luxury-eyebrow"><span /> THE DIGITAL WORLD OF GEMSTONES</div>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.035em] md:text-7xl lg:text-8xl">
              Discover the{" "}
              <span className="luxury-gradient-text">beauty</span>
              <br />behind every gem.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted md:text-lg">
              Explore gemstones, origins, treatments, certification and practical tools through a refined,
              educational guide built for curious collectors and modern buyers.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/gemstones" className="luxury-button luxury-button-primary">
                Explore Gemstones <ArrowRight size={16} />
              </Link>
              <Link href="/learn" className="luxury-button luxury-button-secondary">
                Start Learning
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs text-muted">
              <span><strong className="text-foreground">8+</strong> gemstone profiles</span>
              <span><strong className="text-foreground">5</strong> practical tools</span>
              <span><strong className="text-foreground">100%</strong> educational focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Gemstones */}
      <section className="container-page py-16">
        <SectionHeading eyebrow="Reference" title="Explore Gemstones" href="/gemstones" cta="View all gemstones" />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gemstones.slice(0, 6).map((gem) => (
            <GemstoneCard key={gem.slug} gem={gem} />
          ))}
        </div>
      </section>

      {/* Origins */}
      <section className="border-y border-border bg-surface">
        <div className="container-page py-16">
          <SectionHeading eyebrow="Geography" title="Where do gemstones come from?" href="/origins" cta="Explore origins" />
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Geographic origin can, in some cases, be scientifically assessed by a gemological
            laboratory — but it cannot reliably be determined from appearance alone.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {origins.map((o) => (
              <Link
                key={o.slug}
                href={`/origins/${o.slug}`}
                className="card-hover rounded-lg border border-border bg-background px-4 py-4 text-sm font-medium"
              >
                {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="container-page py-16">
        <SectionHeading eyebrow="Education" title="Popular Guides" href="/learn" cta="Browse all guides" />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {GUIDES.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="card-hover flex items-center justify-between rounded-lg border border-border bg-surface px-5 py-4 text-sm font-medium"
            >
              {g.title}
              <ArrowRight size={15} className="text-muted" />
            </Link>
          ))}
        </div>
      </section>

      <div className="container-page">
        <AdSlot variant="leaderboard" />
      </div>

      {/* Tools */}
      <section className="border-y border-border bg-teal-soft">
        <div className="container-page py-16">
          <SectionHeading eyebrow="Practical" title="Tools" href="/tools" cta="View all tools" />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {TOOLS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="card-hover rounded-lg border border-border bg-surface px-4 py-5 text-sm font-medium leading-snug"
              >
                {t.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ceylon */}
      <section className="container-page py-16">
        <SectionHeading eyebrow="Sri Lanka" title="Discover Ceylon Gemstones" href="/origins/sri-lanka" cta="Explore Sri Lankan gemstones" />
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Sri Lanka has one of the longest continuous histories of gemstone mining in the
          world, and remains a significant source of sapphire and other coloured gemstones.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {CEYLON_GEMS.map((name) => (
            <span key={name} className="rounded-full border border-border bg-surface px-4 py-2 text-sm">
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* Glossary */}
      <section className="border-t border-border bg-surface">
        <div className="container-page py-16">
          <SectionHeading eyebrow="Terminology" title="Glossary" href="/glossary" cta="Browse glossary" />
          <div className="mt-8 flex flex-wrap gap-2">
            {GLOSSARY_PREVIEW.map((term) => (
              <Link
                key={term}
                href={`/glossary/${term.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-full border border-border px-4 py-2 text-sm hover:border-accent hover:text-accent transition-colors"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-page py-16">
        <div className="rounded-2xl border border-border bg-accent-soft px-6 py-10 text-center md:px-16">
          <h2 className="font-serif text-2xl font-semibold">Learn something new about gemstones.</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Occasional updates on new guides, tools and gemstone reference pages.
          </p>
          <form className="mx-auto mt-6 flex max-w-sm gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-full border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-accent"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-strong transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  href,
  cta,
}: {
  eyebrow: string;
  title: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs font-medium tracking-[0.16em] text-teal uppercase">{eyebrow}</p>
        <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      </div>
      <Link href={href} className="text-sm font-medium text-accent hover:text-accent-strong">
        {cta} →
      </Link>
    </div>
  );
}

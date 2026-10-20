import Link from "next/link";
import { ArrowRight, BookOpen, Gem, Calculator, MapPin, Shield, Landmark } from "lucide-react";
import { gemstones } from "@/data/gemstones";
import { GemstoneCard } from "@/components/gemstone-card";

const FEATURED_GUIDES = [
  {
    tag: "Formation",
    title: "How Gemstones Form in Nature",
    description: "Explore the geological processes that create these remarkable treasures.",
    href: "/learn",
    meta: "8 min · Intermediate",
  },
  {
    tag: "Properties",
    title: "Understanding Gemstone Properties",
    description: "Color, clarity, cut and more — what truly determines a gem’s value.",
    href: "/learn",
    meta: "10 min · Beginner",
  },
  {
    tag: "Origins",
    title: "Sri Lankan Gemstone Origins",
    description: "A deep dive into the rich gemstone heritage of Sri Lanka.",
    href: "/origins/sri-lanka",
    meta: "7 min · All Levels",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="gx-hero">
        <div className="gx-hero-orb gx-hero-orb-1" />
        <div className="gx-hero-orb gx-hero-orb-2" />
        <div className="container-page relative py-16 md:py-22 lg:py-28">
          <div className="max-w-2xl">
            <div className="gx-eyebrow">
              <span /> Knowledge · Science · Integrity
            </div>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground md:text-5xl lg:text-[3.4rem]">
              Discover the science and beauty behind every gem.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-[1.05rem]">
              GemologyX is your trusted guide to understanding gemstones — from formation and properties to identification, treatments and ethical sourcing.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 shadow-sm">
                <svg className="h-4 w-4 shrink-0 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-sm text-muted">Search gemstones, topics or guides…</span>
              </div>
              <Link href="/search" className="gx-btn gx-btn-primary shrink-0">
                Search
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/gemstones" className="gx-btn gx-btn-primary">
                Explore Gemstones <ArrowRight size={16} />
              </Link>
              <Link href="/learn" className="gx-btn gx-btn-secondary">
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Entry points */}
      <section className="container-page gx-section">
        <div className="grid gap-4 sm:grid-cols-3">
          <Link href="/learn" className="gx-card group p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
              <BookOpen size={18} />
            </div>
            <h2 className="font-serif text-lg font-semibold text-foreground">Learning Guides</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              In-depth articles and study guides for every level.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
              Browse Guides <ArrowRight size={14} />
            </span>
          </Link>

          <Link href="/gemstones" className="gx-card group p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold-soft text-accent">
              <Gem size={18} />
            </div>
            <h2 className="font-serif text-lg font-semibold text-foreground">Gemstone Directory</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Explore detailed profiles of gemstones from around the world.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
              View Directory <ArrowRight size={14} />
            </span>
          </Link>

          <Link href="/tools" className="gx-card group p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-soft text-teal">
              <Calculator size={18} />
            </div>
            <h2 className="font-serif text-lg font-semibold text-foreground">Practical Tools</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Gem identification tools, calculators and reference resources.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
              Access Tools <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="border-y border-border bg-white">
        <div className="container-page gx-section">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="gx-eyebrow"><span /> Featured Guides</p>
              <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight md:text-3xl">
                Start with the essentials
              </h2>
            </div>
            <Link href="/learn" className="text-sm font-medium text-accent hover:text-accent-strong">
              View All Guides →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {FEATURED_GUIDES.map((guide) => (
              <Link key={guide.title} href={guide.href} className="gx-card group overflow-hidden">
                <div className="p-5">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-gold">
                    {guide.tag}
                  </span>
                  <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-foreground group-hover:text-accent transition-colors">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{guide.description}</p>
                  <p className="mt-4 text-xs text-muted">{guide.meta}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sri Lankan Expertise */}
      <section className="bg-teal-soft">
        <div className="container-page gx-section">
          <div className="rounded-2xl border border-border/60 bg-white p-7 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <div className="gx-eyebrow"><span /> Sri Lankan Gem Expertise</div>
                <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight md:text-3xl">
                  Rooted in Heritage. Defined by Expertise.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  Sri Lanka has been a cradle of exceptional gemstones for over 2,000 years.
                  Discover what makes these gems — and our knowledge — truly unique.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/origins/sri-lanka" className="gx-btn gx-btn-primary">
                    Explore Sri Lankan Gems <ArrowRight size={16} />
                  </Link>
                  <Link href="/sri-lanka-mining" className="gx-btn gx-btn-secondary">
                    Mining & Trade Guide
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:max-w-md">
                <div className="rounded-xl border border-border bg-background p-4 text-center">
                  <Gem className="mx-auto mb-2 text-accent" size={20} />
                  <p className="text-xs font-semibold text-foreground">Exceptional Variety</p>
                  <p className="mt-1 text-[0.7rem] text-muted">Sapphire to spinel and rare fine gems</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4 text-center">
                  <Shield className="mx-auto mb-2 text-accent" size={20} />
                  <p className="text-xs font-semibold text-foreground">Ethical & Trusted</p>
                  <p className="mt-1 text-[0.7rem] text-muted">Responsible practices and transparent knowledge</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4 text-center">
                  <Landmark className="mx-auto mb-2 text-accent" size={20} />
                  <p className="text-xs font-semibold text-foreground">Local Knowledge</p>
                  <p className="mt-1 text-[0.7rem] text-muted">Bridging tradition with modern gemology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gemstone preview */}
      <section className="container-page gx-section">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="gx-eyebrow"><span /> Reference</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight md:text-3xl">
              Explore Gemstones
            </h2>
          </div>
          <Link href="/gemstones" className="text-sm font-medium text-accent hover:text-accent-strong">
            View all gemstones →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gemstones.slice(0, 6).map((gem) => (
            <GemstoneCard key={gem.slug} gem={gem} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-white">
        <div className="container-page py-16 text-center">
          <h2 className="font-serif text-2xl font-semibold md:text-3xl">
            Learn something new about gemstones.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Explore our growing library of gemstone references, practical guides and tools.
          </p>
          <Link href="/learn" className="gx-btn gx-btn-primary mt-7">
            Browse the guides <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

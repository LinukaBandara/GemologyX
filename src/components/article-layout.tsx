import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, Clock3, Calendar, Languages } from "lucide-react";

export function ArticleLayout({
  category,
  readTime,
  title,
  crumbHref,
  crumbLabel,
  children,
  related,
  lastReviewed,
  languageLink,
}: {
  category: string;
  readTime: string;
  title: string;
  crumbHref: string;
  crumbLabel: string;
  children: ReactNode;
  related?: { label: string; href: string }[];
  lastReviewed?: string;
  languageLink?: { href: string; label: string };
}) {
  const isSinhala = crumbHref.startsWith("/si/");
  const learnHref = isSinhala ? "/si/learn" : "/learn";
  return (
    <article lang={isSinhala ? "si" : undefined} className={`container-page gx-article-page max-w-4xl py-10 md:py-14 ${isSinhala ? "gx-article-page-si" : "gx-article-page-en"}`}>
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-2 text-sm text-muted">
        <Link href={learnHref} className="hover:text-accent transition-colors">{isSinhala ? "මැණික් දැනුම" : "Learn"}</Link>
        <span className="text-border">/</span>
        <Link href={crumbHref} className="hover:text-accent transition-colors">{crumbLabel}</Link>
      </nav>

      {/* Hero */}
      <header className="gx-article-header mt-6 border-b border-border pb-8">
        <div className="gx-eyebrow">
          <span /> {category}
        </div>

        <h1 className="mt-4 max-w-2xl font-serif text-3xl font-semibold leading-[1.15] tracking-[-0.025em] text-foreground md:text-4xl lg:text-[2.6rem]">
          {title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Clock3 size={14} /> {readTime}
          </span>
          {lastReviewed && (
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} /> {isSinhala ? "අවසන් වරට සමාලෝචනය කළේ:" : "Last reviewed:"} {lastReviewed}
            </span>
          )}
        </div>
        {languageLink && (
          <Link href={languageLink.href} hrefLang={isSinhala ? "en" : "si"} className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-2 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-accent-soft">
            <Languages size={15} aria-hidden="true" /> {languageLink.label}
          </Link>
        )}
      </header>

      {/* Content */}
      <div className="prose-content gx-article-content mt-9 min-w-0 space-y-7 text-[0.95rem] leading-[1.75] text-foreground/90 md:text-base">
        {children}
      </div>

      {/* Related */}
      {related && related.length > 0 && (
        <div className="gx-article-related mt-12 rounded-2xl border border-border bg-white p-6">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-accent">
            {isSinhala ? "තවදුරටත් කියවන්න" : "Continue exploring"}
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-[rgba(30,58,95,0.3)] hover:text-accent"
              >
                {r.label} <ArrowUpRight size={13} />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back */}
      <Link
        href={learnHref}
        className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-strong transition-colors"
      >
        <ArrowLeft size={15} /> {isSinhala ? "මැණික් දැනුම වෙත ආපසු" : "Back to Learn"}
      </Link>
    </article>
  );
}

export function ArticleSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground md:text-[1.35rem]">
        {heading}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

/** Quick Answer callout — use at the top of guides */
export function QuickAnswer({ children, locale = "en" }: { children: ReactNode; locale?: "en" | "si" }) {
  return (
    <div className="rounded-2xl border border-[rgba(42,111,122,0.2)] bg-teal-soft px-5 py-4 md:px-6 md:py-5">
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-teal">
        {locale === "si" ? "කෙටි පිළිතුර" : "Quick Answer"}
      </p>
      <div className="mt-2 text-[0.95rem] leading-relaxed text-foreground/90">
        {children}
      </div>
    </div>
  );
}

/** Practical Checklist block */
export function PracticalChecklist({ items, locale = "en" }: { items: string[]; locale?: "en" | "si" }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 md:p-6">
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-accent">
        {locale === "si" ? "ප්‍රායෝගික පරීක්ෂණ ලැයිස්තුව" : "Practical Checklist"}
      </p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-[0.7rem] font-bold text-accent">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Misconceptions / Risks callout */
export function Misconceptions({ items, locale = "en" }: { items: string[]; locale?: "en" | "si" }) {
  return (
    <div className="rounded-2xl border border-[rgba(201,166,107,0.35)] bg-gold-soft px-5 py-4 md:px-6 md:py-5">
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[rgba(120,80,20,0.9)]">
        {locale === "si" ? "පොදු වැරදි අවබෝධ" : "Common Misconceptions"}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-foreground/90">
            <span className="font-bold text-[rgba(160,100,30,0.8)]">×</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

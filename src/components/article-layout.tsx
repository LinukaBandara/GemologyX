import Link from "next/link";
import type { ReactNode } from "react";
import { AdSlot } from "@/components/ad-slot";

export function ArticleLayout({
  category,
  readTime,
  title,
  crumbHref,
  crumbLabel,
  children,
  related,
}: {
  category: string;
  readTime: string;
  title: string;
  crumbHref: string;
  crumbLabel: string;
  children: ReactNode;
  related?: { label: string; href: string }[];
}) {
  return (
    <article className="container-page max-w-2xl py-14">
      <nav className="text-xs text-muted">
        <Link href="/learn" className="hover:text-accent">Learn</Link>
        <span className="mx-1.5">/</span>
        <Link href={crumbHref} className="hover:text-accent">{crumbLabel}</Link>
      </nav>

      <p className="mt-3 text-xs uppercase tracking-wide text-teal">{category} · {readTime}</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>

      <div className="prose-content mt-8 space-y-6 text-sm leading-relaxed text-foreground/90 md:text-base">
        {children}
      </div>

      <AdSlot variant="in-content" />

      {related && related.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-6 text-sm">
          {related.map((r) => (
            <Link key={r.href} href={r.href} className="rounded-full border border-border px-3 py-1 hover:border-accent hover:text-accent">
              {r.label} →
            </Link>
          ))}
        </div>
      )}

      <Link href="/learn" className="mt-8 inline-block text-sm font-medium text-accent hover:text-accent-strong">
        &larr; Back to Learn
      </Link>
    </article>
  );
}

export function ArticleSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-xl font-semibold text-accent-strong">{heading}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}

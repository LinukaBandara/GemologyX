import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
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
    <article className="container-page max-w-3xl py-12 md:py-16">
      <nav className="luxury-breadcrumb">
        <Link href="/learn">Learn</Link>
        <span>/</span>
        <Link href={crumbHref}>{crumbLabel}</Link>
      </nav>

      <header className="article-hero">
        <div className="luxury-eyebrow">
          <span /> {category}
        </div>
        <div className="article-meta"><Clock3 size={13} /> {readTime}</div>
        <h1>{title}</h1>
      </header>

      <div className="prose-content mt-9 space-y-6 text-sm leading-relaxed text-foreground/90 md:text-base">
        {children}
      </div>

      <AdSlot variant="in-content" />

      {related && related.length > 0 && (
        <div className="luxury-related">
          <p>Continue exploring</p>
          <div>
            {related.map((r) => (
              <Link key={r.href} href={r.href}>
                {r.label} <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      )}

      <Link href="/learn" className="luxury-back-link">
        <ArrowLeft size={14} /> Back to Learn
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

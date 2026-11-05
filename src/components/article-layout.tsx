import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, Clock3, CalendarDays, BookOpen } from "lucide-react";
import { AdSlot } from "@/components/ad-slot";

export function ArticleLayout({
  category, readTime, title, crumbHref, crumbLabel, children, related, lastReviewed,
}: {
  category: string; readTime: string; title: string; crumbHref: string; crumbLabel: string;
  children: ReactNode; related?: { label: string; href: string }[]; lastReviewed?: string;
}) {
  return (
    <article>
      <header className="gx-page-hero">
        <div className="container-page gx-page-hero-inner">
          <nav className="gx-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><Link href={crumbHref}>{crumbLabel}</Link><span>/</span><span>{category}</span>
          </nav>
          <div className="gx-page-kicker" style={{ marginTop: 30 }}>{category}</div>
          <h1>{title}</h1>
          <div className="gx-page-meta">
            <span><Clock3 size={13} style={{ display: "inline", verticalAlign: "-2px" }} /> &nbsp;{readTime}</span>
            {lastReviewed && <span><CalendarDays size={13} style={{ display: "inline", verticalAlign: "-2px" }} /> &nbsp;Reviewed {lastReviewed}</span>}
            <span><BookOpen size={13} style={{ display: "inline", verticalAlign: "-2px" }} /> &nbsp;GemologyX learning library</span>
          </div>
        </div>
      </header>
      <div className="container-page gx-article-shell">
        <div className="gx-article-body">
          <div className="prose-content">{children}</div>
          <AdSlot variant="in-content" />
          {related && related.length > 0 && (
            <div style={{ marginTop: 48, padding: 25, border: "1px solid var(--border)", background: "var(--surface)" }}>
              <p className="gx-page-kicker">Continue exploring</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
                {related.map((item) => <Link key={item.href} href={item.href} className="gx-button gx-button-light">{item.label} <ArrowUpRight size={13} /></Link>)}
              </div>
            </div>
          )}
          <Link href="/learn" className="gx-back-link"><ArrowLeft size={14} /> Back to the learning library</Link>
        </div>
        <aside className="gx-article-aside">
          <strong>Inside this guide</strong>
          <p>Explore the key ideas, definitions and practical context in this GemologyX reference. Use the section headings to navigate the article.</p>
          <div style={{ height: 1, background: "var(--border)", margin: "18px 0" }} />
          <span style={{ color: "var(--muted)", fontSize: 9, letterSpacing: ".13em", textTransform: "uppercase" }}>Our approach</span>
          <p style={{ marginTop: 8 }}>Clear explanations. Careful terminology. No substitute for laboratory examination where identification is required.</p>
        </aside>
      </div>
    </article>
  );
}

export function ArticleSection({ heading, children }: { heading: string; children: ReactNode }) {
  return <section><h2>{heading}</h2><div>{children}</div></section>;
}
export function QuickAnswer({ children }: { children: ReactNode }) {
  return <div className="gx-callout" style={{ padding: "22px 24px", border: "1px solid rgba(197,161,106,.4)", background: "var(--gold-soft)" }}><p className="gx-page-kicker">Quick answer</p><div style={{ marginTop: 8 }}>{children}</div></div>;
}
export function PracticalChecklist({ items }: { items: string[] }) {
  return <div className="gx-callout" style={{ padding: "22px 24px", border: "1px solid var(--border)", background: "var(--surface)" }}><p className="gx-page-kicker">Practical checklist</p><ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul></div>;
}
export function Misconceptions({ items }: { items: string[] }) {
  return <div className="gx-callout" style={{ padding: "22px 24px", border: "1px solid rgba(197,161,106,.4)", background: "var(--gold-soft)" }}><p className="gx-page-kicker">Common misconceptions</p><ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul></div>;
}

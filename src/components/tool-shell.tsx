import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

export function ToolShell({
  title,
  intro,
  children,
  note,
}: {
  title: string;
  intro: string;
  children: ReactNode;
  note?: string;
}) {
  return (
    <div className="container-page max-w-3xl py-12 md:py-16">
      <nav className="flex items-center gap-2 text-sm text-muted">
        <Link href="/tools" className="hover:text-accent transition-colors">Tools</Link>
        <span className="text-border">/</span>
        <span className="text-foreground">{title}</span>
      </nav>

      <header className="mt-6 border-b border-border pb-8">
        <div className="gx-eyebrow"><span /> Gemology Tool</div>
        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {intro}
        </p>
      </header>

      <div className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
        {children}
      </div>

      {note && (
        <p className="mt-5 text-xs leading-relaxed text-muted">{note}</p>
      )}

      <Link
        href="/tools"
        className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-strong transition-colors"
      >
        <ArrowLeft size={15} /> Back to all tools
      </Link>
    </div>
  );
}

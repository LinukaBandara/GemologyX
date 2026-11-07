import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, BookOpen, Info } from "lucide-react";

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
    <main className="tool-shell container-page mx-auto max-w-5xl py-6 sm:py-8 md:py-14">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted">
        <Link href="/tools" className="transition-colors hover:text-accent">Tools</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="text-foreground">{title}</span>
      </nav>

      <header className="mt-7 max-w-3xl border-b border-border pb-7 md:mt-10 md:pb-9">
        <div className="gx-eyebrow"><span /> GemologyX · Practical reference</div>
        <h1 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
          {intro}
        </p>
      </header>

      <section aria-label={`${title} workspace`} className="tool-shell-workspace mt-6 grid min-w-0 grid-cols-1 gap-4 sm:mt-7 sm:gap-5 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-7">
        <div className="min-w-0 border border-border bg-[var(--surface)] p-4 shadow-[0_12px_35px_rgba(35,25,20,0.045)] sm:p-6 md:p-8">
          {children}
        </div>
        <aside className="flex flex-col gap-4">
          <div className="border border-border bg-[var(--surface)] p-5">
            <div className="flex items-center gap-2 text-[var(--gold)]">
              <BookOpen size={16} />
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em]">How to use this tool</p>
            </div>
            <p className="mt-3 text-xs leading-6 text-muted">Enter or select the values requested in the workspace. Read the result alongside the method and limitations before using it in a practical setting.</p>
          </div>
          {note && (
            <div className="border border-border bg-[var(--gold-soft)]/50 p-5">
              <div className="flex items-center gap-2 text-accent">
                <Info size={15} />
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em]">Important context</p>
              </div>
              <p className="mt-3 text-xs leading-6 text-muted">{note}</p>
            </div>
          )}
        </aside>
      </section>

      <Link
        href="/tools"
        className="mt-8 inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-accent transition-colors hover:text-[var(--gold)]"
      >
        <ArrowLeft size={15} /> Back to all tools
      </Link>
    </main>
  );
}

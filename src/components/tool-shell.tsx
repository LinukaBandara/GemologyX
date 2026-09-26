import Link from "next/link";
import type { ReactNode } from "react";

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
    <div className="container-page max-w-2xl py-14">
      <nav className="text-xs text-muted">
        <Link href="/tools" className="hover:text-accent">Tools</Link>
        <span className="mx-1.5">/</span>
        <span>{title}</span>
      </nav>
      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-3 text-sm text-muted">{intro}</p>

      <div className="mt-8 rounded-xl border border-border bg-surface p-6">{children}</div>

      {note && (
        <p className="mt-6 text-xs text-muted">{note}</p>
      )}

      <Link href="/tools" className="mt-10 inline-block text-sm font-medium text-accent hover:text-accent-strong">
        &larr; Back to all tools
      </Link>
    </div>
  );
}

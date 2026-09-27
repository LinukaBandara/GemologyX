import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";

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
      <nav className="luxury-breadcrumb">
        <Link href="/tools">Tools</Link>
        <span>/</span>
        <span>{title}</span>
      </nav>

      <header className="tool-hero">
        <div className="luxury-eyebrow"><span /> GEMOLOGY TOOL</div>
        <h1>{title}</h1>
        <p>{intro}</p>
      </header>

      <div className="tool-panel">
        <div className="tool-panel-mark"><Sparkles size={15} /></div>
        {children}
      </div>

      {note && <p className="mt-5 text-xs leading-relaxed text-muted">{note}</p>}

      <Link href="/tools" className="luxury-back-link">
        <ArrowLeft size={14} /> Back to all tools
      </Link>
    </div>
  );
}

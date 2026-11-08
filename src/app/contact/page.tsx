import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to prepare a correction or source suggestion for GemologyX.",

  alternates: { canonical: "/contact" },
  openGraph: { type: "website", images: ["/gemologyx-social.svg"], title: "Contact GemologyX", description: "How to prepare a correction or source suggestion for GemologyX.", url: "/contact" },
  twitter: { card: "summary_large_image", images: ["/gemologyx-social.svg"], title: "Contact GemologyX", description: "How to prepare a correction or source suggestion for GemologyX." },
};

export default function ContactPage() {
  return (
    <div className="container-page max-w-lg py-14">
      <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">Contact</h1>
      <div className="mt-5 space-y-5 text-sm leading-7 text-foreground/90">
        <p>We welcome well-sourced corrections and suggestions for future educational topics. GemologyX has not yet published an email address or connected a message form, so messages cannot currently be delivered through this page.</p>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">Preparing a correction</h2>
          <p className="mt-2">When a contact channel is available, please include the page URL, the specific sentence or claim, a brief explanation, and a reliable source that supports the correction. For a source suggestion, include the title, publisher or author, publication date if known, and a direct link.</p>
        </section>
        <p>Please do not send private, financial, or sensitive personal information. GemologyX cannot provide individual gemstone identification, valuation, or purchase advice through this site.</p>
      </div>
    </div>
  );
}

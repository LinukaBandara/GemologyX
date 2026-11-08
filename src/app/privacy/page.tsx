import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How GemologyX handles information when you browse this educational website.",

  alternates: { canonical: "/privacy" },
  openGraph: { type: "website", images: ["/gemologyx-social.svg"], title: "Privacy Policy", description: "Read the GemologyX privacy policy and understand how site data and visitor information are handled.", url: "/privacy" },
  twitter: { card: "summary_large_image", images: ["/gemologyx-social.svg"], title: "Privacy Policy", description: "Read the GemologyX privacy policy and understand how site data and visitor information are handled." },
};

export default function PrivacyPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: November 5, 2026</p>

      <div className="prose-content mt-6 space-y-6 text-sm leading-relaxed text-foreground/90 md:text-base">
        <p>This policy describes the information handling visible in the GemologyX website as it is currently published. The site is an educational reference; it does not currently offer visitor accounts, purchases, comments, or a working contact submission form.</p>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">Information processed when you browse</h2>
          <p className="mt-2">When you use the site, your browser requests pages and files from the hosting service. The host may process technical request data, such as an IP address, device or browser details, requested URL, and request time, to deliver the site and protect its infrastructure. The host’s exact logging and retention practices depend on the hosting configuration.</p>
          <p className="mt-2">If you use site search, your search words are included in the search URL (for example, as a <code>q</code> query parameter). They may remain in your browser history and be present in the request received by the host. Avoid entering sensitive personal information in search.</p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">Cookies, analytics, and advertising</h2>
          <p className="mt-2">The current site does not intentionally set analytics or advertising cookies, and no analytics or advertising service is configured in the website code. Hosting or delivery providers may use technically necessary mechanisms to operate and secure their services; check the applicable provider’s privacy information for details.</p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">External websites</h2>
          <p className="mt-2">Some pages may link to third-party websites. Those sites set their own privacy practices, which this policy does not control. Review their policies before sharing information with them.</p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">Changes and questions</h2>
          <p className="mt-2">This policy may be revised when site features or data practices change. The contact page currently has no active message delivery, so it cannot receive privacy requests. A public contact channel will be added here when one is configured.</p>
        </section>
      </div>
    </div>
  );
}

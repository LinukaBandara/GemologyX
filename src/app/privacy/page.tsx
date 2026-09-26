import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "GemologyX privacy policy, including information about analytics and advertising.",
};

export default function PrivacyPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-xs text-muted">Placeholder — replace bracketed details and review for your jurisdiction before launch.</p>

      <div className="prose-content mt-6 space-y-6 text-sm leading-relaxed text-foreground/90 md:text-base">
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">Information we collect</h2>
          <p className="mt-2">This site may collect basic analytics data, such as pages visited and general location, to understand how visitors use the site.</p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">Cookies and advertising</h2>
          <p className="mt-2">This site may use third-party advertising vendors, including Google, to serve ads. Third-party vendors use cookies to serve ads based on a user&rsquo;s prior visits to this website or other websites. Visitors may opt out of personalized advertising through their ad settings with the relevant provider.</p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">Contact</h2>
          <p className="mt-2">Questions about this policy can be sent via the <a href="/contact" className="text-accent hover:text-accent-strong">contact page</a>.</p>
        </section>
      </div>
    </div>
  );
}

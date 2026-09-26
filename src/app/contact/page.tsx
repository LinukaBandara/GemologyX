import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the GemologyX editorial team.",
};

export default function ContactPage() {
  return (
    <div className="container-page max-w-lg py-14">
      <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">Contact</h1>
      <p className="mt-4 text-sm text-muted">
        Questions, corrections, or source suggestions are welcome. This form is not yet connected
        to an email backend — wire up a form handler or email provider before relying on it in
        production (see <code>src/app/contact/page.tsx</code>).
      </p>

      <form className="mt-8 space-y-5">
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">Name</span>
          <input type="text" name="name" className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent" />
        </label>
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">Email</span>
          <input type="email" name="email" className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent" />
        </label>
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">Message</span>
          <textarea name="message" rows={5} className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent" />
        </label>
        <button
          type="button"
          disabled
          title="Not connected to a backend yet"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white opacity-50"
        >
          Send message
        </button>
      </form>
    </div>
  );
}

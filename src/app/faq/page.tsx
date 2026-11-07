import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Gemology Questions and Answers",
  description: "Straightforward answers to common questions about gemstone identification, treatments, reports, buying and Sri Lankan gem knowledge.",
  alternates: { canonical: "/faq" },
  openGraph: { type: "website", images: ["/gemologyx-social.svg"], title: "Gemology Questions and Answers", description: "Straightforward answers to common questions about gemstone identification, treatments, reports, buying and Sri Lankan gem knowledge.", url: "/faq" },
  twitter: { card: "summary_large_image", images: ["/gemologyx-social.svg"], title: "Gemology Questions and Answers", description: "Straightforward answers to common questions about gemstone identification, treatments, reports, buying and Sri Lankan gem knowledge." },
};

const questions = [
  { q: "Can I identify a gemstone from a photograph?", a: "A photograph can help describe visible features, but lighting, processing and similar-looking materials make it unsuitable as proof of identity, treatment or origin. Use a qualified gemologist or laboratory when a reliable determination matters.", links: [{ label: "Gemstone directory", href: "/gemstones" }, { label: "Identification guides", href: "/learn" }] },
  { q: "What does a gemstone report tell me?", a: "A report records a laboratory's findings within its stated scope. Read the identification, treatment comments, any origin opinion, limitations and report details together; a report is not automatically an appraisal or a guarantee of future value.", links: [{ label: "How to read a report", href: "/learn/how-to-read-a-gemstone-report" }, { label: "Certification guide", href: "/learn/gemstone-certification" }] },
  { q: "Does heat treatment mean a sapphire is fake?", a: "No. Treatment and whether a gem is natural or synthetic are different questions. Ask for clear disclosure and, where relevant, an independent report that states the laboratory's findings.", links: [{ label: "Heated vs unheated", href: "/learn/heated-vs-unheated" }, { label: "Natural vs synthetic", href: "/learn/natural-vs-synthetic-gemstones" }] },
  { q: "Does the name Ceylon prove a sapphire came from Sri Lanka?", a: "The trade term is associated with Sri Lanka, but a name or appearance alone does not establish a particular stone's geographic origin. Review the seller's wording carefully and seek a laboratory origin opinion when it is important to the purchase.", links: [{ label: "Ceylon sapphire guide", href: "/learn/sapphire/what-is-ceylon-sapphire" }, { label: "Sri Lanka gem hub", href: "/sri-lanka" }] },
  { q: "How can I compare gemstone weight and size?", a: "Carat measures weight, not physical dimensions. Different gems and cuts can look different at the same weight, so use measurements as well as carat weight when comparing stones.", links: [{ label: "Carat to gram converter", href: "/tools/carat-to-gram" }, { label: "Gemstone size calculator", href: "/tools/gemstone-size" }] },
  { q: "Can I tell whether a gemstone has been treated at home?", a: "Usually not with confidence. Some treatments are difficult to see, and home tests can damage a stone or produce misleading results. Ask for written disclosure and use an independent gemological laboratory when treatment status affects the purchase.", links: [{ label: "Gemstone treatments", href: "/learn/gemstone-treatments" }, { label: "How to read a report", href: "/learn/how-to-read-a-gemstone-report" }] },
  { q: "Are laboratory-grown gemstones the same as imitations?", a: "No. A laboratory-grown gemstone has essentially the same chemical composition and crystal structure as its natural counterpart, while an imitation only resembles it in appearance and is made from a different material. The seller should identify the material accurately.", links: [{ label: "Natural, synthetic and imitation gems", href: "/learn/natural-vs-synthetic-gemstones" }, { label: "Gemstone directory", href: "/gemstones" }] },
  { q: "How should I clean an emerald?", a: "Use lukewarm water, mild soap and a soft cloth. Avoid ultrasonic and steam cleaners: emeralds commonly have surface-reaching fractures that may contain oil or resin, and heat or vibration can damage the stone or its filling.", links: [{ label: "Gemstone care guide", href: "/learn/gemstone-care" }, { label: "Emerald profile", href: "/gemstones/emerald" }] },
  { q: "What should I check before buying a gemstone online?", a: "Confirm the exact material, whether it is natural or laboratory-grown, any known treatment, measurements, return terms and whether an independent report is included. Photographs and videos are useful for appearance, but they cannot establish identity, treatment or origin.", links: [{ label: "Gemstone buying guide", href: "/learn/buying-gemstones" }, { label: "Report reading guide", href: "/learn/how-to-read-a-gemstone-report" }] },
  { q: "How do gemstones get their colour?", a: "Colour can come from trace elements, defects in a crystal structure, inclusions or optical effects. The cause varies by gemstone, and similar colours can occur in different materials, so colour is not a reliable identification test by itself.", links: [{ label: "Gem formation and colour", href: "/learn/gem-formation" }, { label: "Gemstone directory", href: "/gemstones" }] },
  { q: "Where can I find Sri Lanka mining and export information?", a: "Start with the Sri Lanka hub for context, then follow its mining, licensing and trade links to the relevant official resources. Requirements can change, so confirm current rules with the responsible authority before acting.", links: [{ label: "Sri Lanka hub", href: "/sri-lanka" }, { label: "Mining guide", href: "/sri-lanka-mining" }, { label: "Trade and export", href: "/sri-lanka-trade-export" }] },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FAQPage() {
  return <>
    <BreadcrumbJsonLd items={[{ name: "Home", url: "https://gemologyx.com/" }, { name: "FAQ", url: "https://gemologyx.com/faq" }]} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c"),
      }}
    />
    <div className="container-page max-w-4xl py-12 md:py-16">
    <nav className="luxury-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>FAQ</span></nav>
    <header className="border-b border-border pb-8"><div className="gx-eyebrow"><span /> QUICK ANSWERS</div><h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">Gemology questions, answered</h1><p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">Clear starting points for common gemstone questions. Follow the linked guides for more detail, and use qualified gemological or official sources when a decision depends on a definitive result or current requirements.</p></header>
    <div className="mt-8 space-y-4">{questions.map((item) => <section key={item.q} className="gx-card p-5 md:p-6"><h2 className="font-serif text-xl font-semibold">{item.q}</h2><p className="mt-3 text-sm leading-6 text-muted">{item.a}</p><ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">{item.links.map((link) => <li key={link.href}><Link className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-strong" href={link.href}>{link.label}<ArrowUpRight size={14} /></Link></li>)}</ul></section>)}</div>
    <p className="mt-8 text-sm text-muted">Have a correction or question suggestion? The <Link className="font-medium text-accent underline" href="/contact">contact page</Link> explains how to prepare it and notes that submissions are not available yet.</p>
    </div>
  </>;
}

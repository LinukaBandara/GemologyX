import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn Gemology",
  description: "Educational guides on gemstone basics, buying knowledge, and gemological science.",
};

const categories = [
  {
    name: "Sapphire",
    items: [
      { title: "What Is Ceylon Sapphire?", href: "/learn/sapphire/what-is-ceylon-sapphire", ready: true },
      { title: "What Makes a Sapphire Valuable?", href: "/learn/sapphire/sapphire-value-factors", ready: true },
      { title: "Natural vs Synthetic Sapphire", href: "/learn/natural-vs-synthetic-gemstones", ready: true },
      { title: "Heated vs Unheated Sapphire", href: "/learn/heated-vs-unheated", ready: true },
      { title: "What Is Padparadscha Sapphire?", href: "#", ready: false },
    ],
  },
  {
    name: "Gemstone Basics",
    items: [
      { title: "Natural vs Synthetic Gemstones", href: "/learn/natural-vs-synthetic-gemstones", ready: true },
      { title: "Heated vs Unheated Gemstones", href: "/learn/heated-vs-unheated", ready: true },
      { title: "Understanding Gemstone Inclusions", href: "#", ready: false },
    ],
  },
  {
    name: "Buying Guides",
    items: [
      { title: "How Gemstone Certification Works", href: "/learn/gemstone-certification", ready: true },
      { title: "How to Read a Gemstone Report", href: "/learn/how-to-read-a-gemstone-report", ready: true },
      { title: "How to Care for Gemstones", href: "/learn/gemstone-care", ready: true },
      { title: "Questions to Ask a Gem Dealer", href: "#", ready: false },
    ],
  },
  {
    name: "Science",
    items: [
      { title: "What Is the Mohs Hardness Scale?", href: "/tools/mohs-hardness", ready: true },
      { title: "What Is Refractive Index?", href: "#", ready: false },
      { title: "What Is Pleochroism?", href: "#", ready: false },
    ],
  },
];

export default function LearnPage() {
  return (
    <div className="container-page py-14">
      <p className="text-xs font-medium tracking-[0.16em] text-teal uppercase">Education</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        Learn Gemology
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-muted md:text-base">
        Clear, sourced explanations of gemstone basics, buying knowledge, and the science behind
        identification. New guides are added on an ongoing basis — quality over quantity.
      </p>

      <div className="mt-10 space-y-10">
        {categories.map((cat) => (
          <div key={cat.name}>
            <h2 className="font-serif text-xl font-semibold">{cat.name}</h2>
            <ul className="mt-3 divide-y divide-border rounded-lg border border-border bg-surface">
              {cat.items.map((item) => (
                <li key={item.title} className="flex items-center justify-between px-4 py-3 text-sm">
                  {item.ready ? (
                    <Link href={item.href} className="font-medium hover:text-accent">{item.title}</Link>
                  ) : (
                    <span className="text-muted">{item.title}</span>
                  )}
                  {!item.ready && <span className="text-xs text-muted">In progress</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

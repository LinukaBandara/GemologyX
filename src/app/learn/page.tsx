import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Learn Gemology",
  description: "Educational guides on gemstone basics, buying knowledge, and gemological science.",
};

const categories = [
  { name:"Sapphire", label:"01", items:[
    ["What Is Ceylon Sapphire?","/learn/sapphire/what-is-ceylon-sapphire",true],
    ["What Makes a Sapphire Valuable?","/learn/sapphire/sapphire-value-factors",true],
    ["Natural vs Synthetic Sapphire","/learn/natural-vs-synthetic-gemstones",true],
    ["Heated vs Unheated Sapphire","/learn/heated-vs-unheated",true],
    ["What Is Padparadscha Sapphire?","#",false],
  ]},
  { name:"Gemstone Basics", label:"02", items:[
    ["Natural vs Synthetic Gemstones","/learn/natural-vs-synthetic-gemstones",true],
    ["Heated vs Unheated Gemstones","/learn/heated-vs-unheated",true],
    ["Understanding Gemstone Inclusions","#",false],
  ]},
  { name:"Buying Guides", label:"03", items:[
    ["How Gemstone Certification Works","/learn/gemstone-certification",true],
    ["How to Read a Gemstone Report","/learn/how-to-read-a-gemstone-report",true],
    ["How to Care for Gemstones","/learn/gemstone-care",true],
    ["Questions to Ask a Gem Dealer","/learn/questions-to-ask-gem-dealer",true],
    ["සිංහල: පුෂ්පරාග රළු ගලක මිල","/si/learn/rough-yellow-sapphire-value",true],
    ["සිංහල: මැණික් වාර්තාවක් කියවන්නේ කෙසේද?","/si/learn/how-to-read-gem-report",true],
    ["සිංහල: කැරට් සහ ග්‍රෑම් අතර වෙනස","/si/learn/carat-vs-gram",true],
    ["සිංහල: රළු මැණික් මිලදී ගැනීම","/si/learn/buying-rough-gemstones",true],
  ]},
  { name:"Science", label:"04", items:[
    ["What Is the Mohs Hardness Scale?","/tools/mohs-hardness",true],
    ["What Is Refractive Index?","#",false],
    ["What Is Pleochroism?","#",false],
  ]},
] as const;

export default function LearnPage() {
  return <div className="container-page py-12 md:py-16">
    <header className="directory-hero">
      <div className="luxury-eyebrow"><span /> THE GEMOLOGY JOURNAL</div>
      <h1>Learn Gemology</h1>
      <p>Clear, sourced explanations covering gemstone basics, buying knowledge, identification, and the science behind gems.</p>
    </header>
    <div className="learn-grid mt-10">
      {categories.map(cat => <section key={cat.name} className="learn-section">
        <div className="learn-section-heading"><span>{cat.label}</span><h2>{cat.name}</h2></div>
        <div className="learn-list">
          {cat.items.map(([title,href,ready],i) => ready ? (
            <Link key={title} href={href as string} className="learn-item">
              <span className="learn-index">{String(i+1).padStart(2,"0")}</span><span>{title}</span><ArrowUpRight size={16}/>
            </Link>
          ) : <div key={title} className="learn-item learn-disabled">
            <span className="learn-index">{String(i+1).padStart(2,"0")}</span><span>{title}</span><small>COMING SOON</small>
          </div>)}
        </div>
      </section>)}
    </div>
  </div>;
}

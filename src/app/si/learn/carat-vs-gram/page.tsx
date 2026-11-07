import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer } from "@/components/article-layout";
import { CaratConverter } from "@/components/carat-converter";

export const metadata: Metadata = {
  title: "මැණික් කැරට් සහ ග්‍රෑම් පරිවර්තකය",
  description:
    "Carat (ct) සහ gram (g) අතර මැණික් බර පරිවර්තනය කිරීමට නොමිලේ interactive calculator එකක්.",

  alternates: { canonical: "/si/learn/carat-vs-gram" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් මෙවලම්"
      readTime="මිනිත්තු 2"
      title="මැණික් කැරට් ↔ ග්‍රෑම් පරිවර්තකය"
      crumbHref="/si/learn/carat-weight-guide"
      crumbLabel="කැරට් බර මාර්ගෝපදේශය"
      lastReviewed="2026-11-02"
      heroImage={{
        src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Modern_collapsible_balance_scale_for_jewellers_3.jpg",
        alt: "Collapsible jeweller's balance scale with brass weights in a fitted wooden case",
        credit: "W.carter · CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Modern_collapsible_balance_scale_for_jewellers_3.jpg",
      }}
      related={[
        { label: "කැරට් බර තේරුම් ගැනීම", href: "/si/learn/carat-weight-guide" },
        { label: "නිල්මැණික් කැරට් මිල", href: "/si/learn/blue-sapphire-price-per-carat" },
      ]}
    >
      <QuickAnswer>
        <p>
          1 carat (ct) = 0.2 gram (g). Carat අගය ග්‍රෑම් බවට
          පරිවර්තනය කිරීමට 5න් බෙදන්න. ග්‍රෑම් අගය carat බවට
          පරිවර්තනය කිරීමට 5න් ගුණ කරන්න.
        </p>
      </QuickAnswer>

      <CaratConverter />

      <ArticleSection heading="ඉක්මන් පරිවර්තන වගුව">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-3 py-2 font-semibold">Carat (ct)</th>
                <th className="px-3 py-2 font-semibold">Gram (g)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["0.25", "0.05"],
                ["0.5", "0.1"],
                ["1", "0.2"],
                ["2", "0.4"],
                ["5", "1"],
                ["10", "2"],
              ].map(([ct, gram]) => (
                <tr key={ct} className="border-b border-border/70">
                  <td className="px-3 py-2 tabular-nums">{ct} ct</td>
                  <td className="px-3 py-2 tabular-nums">{gram} g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection heading="පරිවර්තන සූත්‍රය">
        <ul>
          <li>Gram = Carat × 0.2</li>
          <li>Carat = Gram × 5</li>
        </ul>
        <p>
          උදාහරණයක් ලෙස 3 ct = 0.6 g. ඒ වගේම 1.4 g = 7 ct.
          පරිවර්තනයේදී ඒකකය නිවැරදිව සටහන් කරන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="මෙම අගය කියන්නේ මොකක්ද?">
        <p>
          මෙම මෙවලම බර ඒකක දෙක අතර පරිවර්තනය පමණක් කරයි.
          ගලේ mm ප්‍රමාණය, density, cut, quality හෝ වෙළඳ වටිනාකම
          ගණනය කරන්නේ නැහැ. ඒ කරුණු ගැන{" "}
          <a href="/si/learn/carat-weight-guide">කැරට් බර තේරුම් ගැනීමේ මාර්ගෝපදේශය</a>{" "}
          කියවන්න.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

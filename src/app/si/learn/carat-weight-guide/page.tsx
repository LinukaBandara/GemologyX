import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "කැරට් බර තේරුම් ගැනීම | GemologyX",
  description:
    "Carat weight, size vs weight, price-per-carat සහ බර පමණක් මිල තීරණය නොකරන්නේ ඇයි.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="කැරට් බර තේරුම් ගැනීම"
      crumbHref="/si/learn/carat-vs-gram"
      crumbLabel="කැරට් vs ග්‍රෑම්"
      lastReviewed="2026-10-25"
      related={[
        { label: "කැරට් vs ග්‍රෑම්", href: "/si/learn/carat-vs-gram" },
        { label: "නිල්මැණික් කැරට් මිල", href: "/si/learn/blue-sapphire-price-per-carat" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          1 carat = 0.2 gram. බර ≠ mm size — density සහ cut අනුව එකම carat
          ගල් දෙකක් වෙනස් ප්‍රමාණයෙන් පෙනෙන්න පුළුවන්. Price-per-carat බොහෝ
          විට weight brackets අනුව වෙනස්. බර පමණක් මිල හෝ ගුණාත්මකභාවය තීරණය
          නොකරයි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Size vs weight">
        <p>Deep cut = වැඩි weight, අඩු face-up size. Shallow = විශාල පෙනුම, අඩු weight. mm dimensions ද අසන්න.</p>
      </ArticleSection>

      <ArticleSection heading="Price-per-carat">
        <p>Total price = price-per-carat × weight. Higher weight brackets ඉහළ per-carat rates ලබන්න පුළුවන් — නමුත් quality factors තීරණය කරයි.</p>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <p>බර ලිඛිතව. Dimensions. Total price සහ per-carat (හැකි නම්). Quality (colour, clarity, treatment) සමඟ සසඳන්න.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "බර (ct) ලිඛිතව තියෙනවාද?",
          "mm dimensions දැනගත්තාද?",
          "බර පමණක් මත මිල තීරණය නොකළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "වැඩි carat = සෑම විටම වඩා හොඳ ගල — quality ද වැදගත්.",
          "එකම carat = එකම size — cut සහ density අනුව වෙනස්.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක මිල සහතික නොකරයි.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

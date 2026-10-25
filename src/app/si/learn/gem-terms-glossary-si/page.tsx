import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් පද 20ක් — සිංහල Glossary | GemologyX",
  description:
    "Carat, clarity, heat, diffusion, origin opinion, eye-clean සහ තවත් පොදු පද කෙටියෙන්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 8"
      title="මැණික් පද 20ක් — කෙටි Glossary"
      crumbHref="/si/learn/sri-lanka-gem-terms"
      crumbLabel="SL මැණික් පද"
      lastReviewed="2026-10-25"
      related={[
        { label: "SL මැණික් පද", href: "/si/learn/sri-lanka-gem-terms" },
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "Heat vs diffusion vs filling", href: "/si/learn/heat-vs-diffusion-vs-filling" },
      ]}
    >
      <QuickAnswer>
        <p>
          මෙම පිටුව පොදු වෙළෙඳ / lab පද කෙටියෙන් තේරුම් කරයි. පදයක් දන්නවා යන්න
          ගලක් identify කරනවා නොවේ — documentation සහ testing තවමත් අවශ්‍යයි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="පද ලැයිස්තුව">
        <ul>
          <li><strong>Carat</strong> — බර; 1 ct = 0.2 g</li>
          <li><strong>Clarity</strong> — inclusions / blemishes ප්‍රමාණය</li>
          <li><strong>Eye-clean</strong> — ඇසට inclusions නොපෙනීම (context-dependent)</li>
          <li><strong>Hue / tone / saturation</strong> — වර්ණයේ මාන</li>
          <li><strong>Heat treatment</strong> — උණුසුම් ප්‍රතිකාරය</li>
          <li><strong>Diffusion</strong> — වර්ණ කාරක surface/near-surface</li>
          <li><strong>Fracture filling</strong> — ඉරිතැලීම් පිරවීම</li>
          <li><strong>Origin opinion</strong> — lab අභිප්‍රාය; GPS guarantee නොවේ</li>
          <li><strong>Natural</strong> — පෘථිවියේ සෑදුණු (treated විය හැක)</li>
          <li><strong>Synthetic / lab-grown</strong> — lab හි වර්ධනය</li>
          <li><strong>Imitation</strong> — පෙනුමෙන් සමාන වෙනත් ද්‍රව්‍ය</li>
          <li><strong>Cabochon</strong> — උත්තල, faceted නොවන කැපුම</li>
          <li><strong>Faceted</strong> — තල කපන ලද</li>
          <li><strong>Rough</strong> — නොකැපූ</li>
          <li><strong>Geuda</strong> — SL trade; heat potential speculative</li>
          <li><strong>Inclusion</strong> — අභ්‍යන්තර ලක්ෂණ</li>
          <li><strong>Mohs</strong> — සීරීම් දෘඪතා පරිමාණය</li>
          <li><strong>Cleavage</strong> — යම් තලයකින් බිඳීමේ ප්‍රවණතාව</li>
          <li><strong>Report / certificate</strong> — lab ලේඛනය; value guarantee නොවේ</li>
          <li><strong>Disclosure</strong> — ප්‍රතිකාර / identity හෙළිදරව්ව</li>
        </ul>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Seller භාවිත පදයක් අවබෝධ නැතිනම් — ලිඛිතව clarify කළාද?",
          "Report terminology වෙනම කියවුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Glossary = lab training — නැහැ; starting map එකක් පමණයි.",
          "එක පදයක් = full quality story — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික glossary එකකි. පූර්ණ gemological dictionary එකක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

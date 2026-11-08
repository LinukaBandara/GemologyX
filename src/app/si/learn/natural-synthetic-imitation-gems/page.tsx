import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer, PracticalChecklist, Misconceptions } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Natural, Synthetic, Imitation සහ Assembled මැණික් පද",
  description: "මැණික් වෙළෙඳාමේ natural, laboratory-grown, synthetic, imitation, composite සහ treated යන පද පැහැදිලි කරන reference guide.",
  alternates: { canonical: "/si/learn/natural-synthetic-imitation-gems" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="මැණික් වෙළෙඳාමේ භාවිත වන පද තේරුම් ගනිමු"
      crumbHref="/si/learn/natural-vs-synthetic-gemstones"
      crumbLabel="Natural vs lab-grown"
      lastReviewed="2026-11-02"
      related={[
        { label: "Natural සහ lab-grown අතර වෙනස", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "Glass සහ මැණික් අතර වෙනස", href: "/si/learn/glass-vs-gemstone" },
        { label: "මැණික් ප්‍රතිකාර හෙළිදරව් කිරීම", href: "/si/learn/gemstone-treatment-disclosure" },
      ]}
    >
      <QuickAnswer>
        <p>Natural / synthetic යනු මූලාරම්භය හා වර්ධන ක්‍රමයට අදාළ පදය. Imitation යනු වෙනත් ද්‍රව්‍යයක් භාවිත කර පෙනුම අනුකරණය කිරීමයි. Treated යනු ගලේ පෙනුම හෝ ගුණ වෙනස් කිරීමට ප්‍රතිකාර කර තිබීමයි. Assembled / composite යනු කොටස් හෝ ද්‍රව්‍ය කිහිපයක් එක් කර සකස් කළ නිෂ්පාදනයක් විය හැකියි. මේ පද එකිනෙකට හුවමාරු කර භාවිත නොකළ යුතුය.</p>
      </QuickAnswer>

      <ArticleSection heading="Natural — ස්වභාවික">
        <p>ස්වභාවික ක්‍රියාවලියකින් ඇති වූ මැණික්. “Natural” යන්නෙන් untreated හෝ ඉහළ වටිනාකමක් ඇති බව ස්වයංක්‍රීයව අදහස් නොවේ.</p>
      </ArticleSection>

      <ArticleSection heading="Laboratory-grown / Synthetic — රසායනාගාරයේ වර්ධනය කළ">
        <p>රසායනාගාරයක වර්ධනය කළ material එකක්. එය අදාළ natural gem species එකට සමාන විය හැකි නමුත් origin එක වෙනස්ය. උදාහරණයක් ලෙස synthetic sapphire සහ glass imitation එකක් එකම දේ නොවේ.</p>
      </ArticleSection>

      <ArticleSection heading="Imitation / Simulant — පෙනුම අනුකරණය කරන">
        <p>වෙනත් material එකක් වෙනත් මැණික් වර්ගයක් වගේ පෙනීමට යොදාගනී. Glass යනු සමහර මැණික් සඳහා imitation material එකක් විය හැකියි. Imitation එකක් ස්වභාවික හෝ synthetic material එකක් විය හැකිද යන්න එහි සැබෑ සංයුතිය සහ භාවිතය මත රඳා පවතී; නම පමණක් අසා නිගමනය නොකරන්න.</p>
      </ArticleSection>

      <ArticleSection heading="Treated / Enhanced — ප්‍රතිකාර කළ">
        <p>Natural හෝ laboratory-grown material එකකට වර්ණය, පැහැදිලි බව හෝ වෙනත් ගුණාංග වෙනස් කිරීමට ක්‍රියාවලියක් යොදා තිබිය හැකියි. Treatment එක material identity එකෙන් වෙනම සඳහන් කළ යුතු තොරතුරකි. සියලු ප්‍රතිකාර එකම ස්ථාවරත්වයක් හෝ වටිනාකම් බලපෑමක් ඇති නොකරයි.</p>
      </ArticleSection>

      <ArticleSection heading="Assembled / Composite / Doublet / Triplet">
        <p>කොටස් දෙකක් හෝ වැඩි ගණනක් එකතු කර නිෂ්පාදනය කළ ගලක් හෝ gem product එකක් සඳහා මෙම පද භාවිත විය හැකියි. Doublet සහ triplet යන පද සාමාන්‍යයෙන් ස්ථර ගණනට සම්බන්ධ වේ. නිශ්චිත construction එක ගැන seller description හෝ lab report එක බලන්න.</p>
      </ArticleSection>

      <ArticleSection heading="Invoice හෝ listing එකේ ලිවිය යුතු දේ">
        <p>“Blue stone” හෝ “real gem” වැනි අපැහැදිලි විස්තර වෙනුවට material name, natural/lab-grown status, known treatment disclosure සහ report reference (තිබේ නම්) පැහැදිලිව ලියන්න. නීතිමය අවශ්‍යතා වෙළෙඳපොළ අනුව වෙනස් විය හැකි නිසා මෙම පිටුව නීති උපදෙස් ලෙස නොසලකන්න.</p>
      </ArticleSection>

      <PracticalChecklist items={[
        "Material name එක නිශ්චිතද?",
        "Natural හෝ laboratory-grown යන්න පැහැදිලිද?",
        "Known treatments වෙනම සඳහන් කර තිබේද?",
        "Assembled / composite නම් construction එක පැහැදිලිද?",
        "වාර්තාවක් තිබේ නම් එහි wording එක listing එකට ගැළපේද?",
      ]} />

      <Misconceptions items={[
        "Synthetic සහ imitation එකම දෙයක් — නැහැ.",
        "Natural කියන්නේ treatment නොකළ — එසේ නොවේ.",
        "Assembled stone එකක් අනිවාර්යයෙන්ම glass — construction එක අනුව material වෙනස් විය හැකියි.",
      ]} />
    </ArticleLayout>
  );
}
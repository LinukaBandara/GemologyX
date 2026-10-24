import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් මිලදී ගැනීමට පෙර checklist | GemologyX",
  description:
    "මැණික් මිලදී ගැනීමට පෙර අනන්‍යතාව, ප්‍රතිකාර, වාර්තා, මිල සහ ගනුදෙනු කොන්දේසි පරීක්ෂා කිරීමට ප්‍රායෝගික ලැයිස්තුව.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික් මිලදී ගැනීමට පෙර පරීක්ෂා කළ යුතු ලැයිස්තුව"
      crumbHref="/si/learn/questions-to-ask-gem-dealer"
      crumbLabel="වෙළෙන්දාගෙන් අසන්න ඕනේ ප්‍රශ්න"
      lastReviewed="2026-10-24"
      related={[
        { label: "වෙළෙන්දාගෙන් අසන්න ඕනේ ප්‍රශ්න", href: "/si/learn/questions-to-ask-gem-dealer" },
        { label: "නිල්මැණික් buying checklist", href: "/si/learn/blue-sapphire-buying-checklist" },
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "Red flags", href: "/si/learn/avoid-gemstone-scams" },
      ]}
    >
      <QuickAnswer>
        <p>
          මිලදී ගැනීමට පෙර: (1) අනන්‍යතාව — natural / synthetic / imitation (2)
          ප්‍රතිකාර (3) වාර්තාව සත්‍යාපනය (4) බර / මානයන් (5) මිල + කොන්දේසි
          ලිඛිතව (6) ස්වාධීන පරීක්ෂාවට ඉඩ. පීඩනයෙන් තීරණ නොගන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="1. අනන්‍යතාව">
        <p>
          ගලේ නම / species සහ ස්වභාවිකද, lab-grown ද, imitation ද ලිඛිතව
          පැහැදිලි කරගන්න. පෙනුමෙන් පමණක් නොවේ.
        </p>
      </ArticleSection>

      <ArticleSection heading="2. ප්‍රතිකාර">
        <p>
          Heat, diffusion, filling ආදිය තිබේද අසන්න. වාර්තාවේ treatment notes
          කියවන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="3. වාර්තා">
        <p>
          වාර්තාවක් තිබේ නම් අංකය නිල මාර්ගයෙන් සත්‍යාපනය කරන්න. බර / මානයන්
          ගලට ගැළපේද බලන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="4. මිල සහ කොන්දේසි">
        <p>
          මුළු මිල, ගෙවීම්, ආපසු භාරදීමේ කොන්දේසි ලිඛිතව. රිසිට්පතේ ගලේ විස්තර
          ලියවේදැයි බලන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "අනන්‍යතාව ලිඛිතව තියෙනවාද?",
          "ප්‍රතිකාර තත්ත්වය විමසුවාද?",
          "වාර්තාව සත්‍යාපනය + ගලට ගැළපේද?",
          "මිල සහ කොන්දේසි ලිඛිතව තියෙනවාද?",
          "ස්වාධීන පරීක්ෂාවට ඉඩ තියෙනවාද?",
          "පීඩනයෙන් තීරණයක් ගන්නේ නැද්ද?",
        ]}
      />

      <Misconceptions
        items={[
          "වෙළෙන්දා හොඳ නම් ප්‍රශ්න අහන්න ඕනේ නැහැ — අහන්න.",
          "වාචික උත්තර ප්‍රමාණවත් — ලිඛිතව ලබාගන්න.",
          "ලාභ මිල = හොඳ deal — ගුණාත්මකභාවය සහ ලේඛන බලන්න.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලැයිස්තුව අධ්‍යාපනික මාර්ගෝපදේශයකි. ගලක මිල හෝ ගුණාත්මකභාවය සහතික
          නොකරයි.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

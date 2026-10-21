import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් සහිත ආභරණ මිලදී ගැනීම | GemologyX",
  description:
    "මැණික් සහිත මුදු, මාල සහ ආභරණ මිලදී ගැනීමේදී ගල, ලෝහ, සැකසුම සහ ලේඛන පරීක්ෂා කළ යුතු ආකාරය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="මැණික් සහිත ආභරණ මිලදී ගැනීම"
      crumbHref="/si/learn/gemstone-buying-checklist"
      crumbLabel="මිලදී ගැනීමේ checklist"
      lastReviewed="2026-10-21"
      related={[
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
        { label: "වෙළෙන්දාගෙන් අසන්න ඕනේ ප්‍රශ්න", href: "/si/learn/questions-to-ask-gem-dealer" },
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
        { label: "Online vs දේශීය", href: "/si/learn/online-vs-local-gem-buying" },
      ]}
    >
      <QuickAnswer>
        <p>
          ආභරණයකදී ගල පමණක් නොව ලෝහය (gold karat, silver), සැකසුම (setting),
          සහ ගලේ අනන්‍යතාව / ප්‍රතිකාර දෙකම වැදගත්. ගල ගැන ලිඛිත විස්තර,
          වාර්තාව (තිබේ නම්), සහ ආපසු භාරදීමේ කොන්දේසි ඉල්ලන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="ගල පරීක්ෂා කරන්න">
        <ul>
          <li>ගලේ නම / species ලිඛිතව</li>
          <li>ස්වභාවිකද, lab-grown ද, imitation ද?</li>
          <li>ප්‍රතිකාර තත්ත්වය</li>
          <li>වාර්තාවක් තිබේ නම් — සත්‍යාපනය + ගල සමඟ ගැළපීම</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="ලෝහය සහ සැකසුම">
        <ul>
          <li>Gold karat (18K, 14K…) හෝ silver / platinum stamp</li>
          <li>Setting ආරක්ෂිතද? ගල ලිහිල්ද?</li>
          <li>Prongs / bezel හානි වී තිබේද?</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="භාවිතය සහ රැකවරණය">
        <p>
          දෛනික මුදු සඳහා දෘඪතාව සහ toughness සලකා බලන්න. Opal, emerald,
          tanzanite වැනි ගල් සඳහා වැඩි සැලකිල්ලක් අවශ්‍ය විය හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="ලේඛන සහ කොන්දේසි">
        <p>
          රිසිට්පතේ ගලේ විස්තර, බර (හැකි නම්), ලෝහය, මිල සහ ආපසු භාරදීමේ
          කොන්දේසි ලියවේදැයි බලන්න. වාචික පොරොන්දු පමණක් මත රඳා නොසිටින්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ අනන්‍යතාව සහ ප්‍රතිකාර ලිඛිතව තියෙනවාද?",
          "ලෝහ stamp / karat පරීක්ෂා කළාද?",
          "Setting ආරක්ෂිතද?",
          "රිසිට්පතේ විස්තර ලියවී තියෙනවාද?",
          "ආපසු භාරදීමේ කොන්දේසි පැහැදිලිද?",
        ]}
      />

      <Misconceptions
        items={[
          "ලෝහය හොඳ නම් ගලත් හොඳයි — ගල වෙනම පරීක්ෂා කරන්න.",
          "ආභරණයේ ගලට වාර්තාව අවශ්‍ය නැහැ — මිල ඉහළ නම් සලකා බලන්න.",
          "සැකසුම ලස්සන නම් ගල ආරක්ෂිතයි — prongs ලිහිල් විය හැකියි.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ආභරණයක ගුණාත්මකභාවය හෝ මිල සහතික නොකරයි.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

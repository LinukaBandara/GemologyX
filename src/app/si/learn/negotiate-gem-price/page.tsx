import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් මිල සාකච්ඡා කරන ආකාරය | GemologyX",
  description:
    "මැණික් ගනුදෙනුවකදී මිල සාකච්ඡා කිරීමේදී සැලකිලිමත් විය යුතු කරුණු — තොරතුරු, සංසන්දනය සහ ආරක්ෂිත සීමා.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික් මිල සාකච්ඡා කරන ආකාරය"
      crumbHref="/si/learn/questions-to-ask-gem-dealer"
      crumbLabel="වෙළෙන්දාගෙන් අසන්න ඕනේ ප්‍රශ්න"
      lastReviewed="2026-10-21"
      related={[
        { label: "වෙළෙන්දාගෙන් අසන්න ඕනේ ප්‍රශ්න", href: "/si/learn/questions-to-ask-gem-dealer" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
        { label: "Online vs දේශීය", href: "/si/learn/online-vs-local-gem-buying" },
        { label: "Red flags", href: "/si/learn/avoid-gemstone-scams" },
      ]}
    >
      <QuickAnswer>
        <p>
          මිල සාකච්ඡා කිරීමට පෙර ගලේ අනන්‍යතාව, ප්‍රතිකාර, වාර්තා සහ සමාන ගල්වල
          මිල පිළිබඳ මූලික තොරතුරු තේරුම් ගන්න. බර හෝ “ලාභය” පමණක් මත තීරණය
          නොකරන්න. ඔබට දරාගත නොහැකි මිලකට එකඟ නොවන්න. පීඩනයෙන් ඉල්ලීම්
          ප්‍රතික්ෂේප කරන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="සාකච්ඡාවට පෙර">
        <ul>
          <li>ගලේ අනන්‍යතාව සහ ප්‍රතිකාර ලිඛිතව පැහැදිලිද?</li>
          <li>වාර්තාවක් තිබේ නම් සත්‍යාපනය කළාද?</li>
          <li>සමාන ලක්ෂණ ඇති ගල් කිහිපයක මිල ගැන අදහසක් තියෙනවාද?</li>
          <li>ඔබේ උපරිම මිල (budget) කුමක්ද?</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="සාකච්ඡාවේදී">
        <ul>
          <li>ගලේ ගුණාංග (වර්ණය, පැහැදිලි බව, කැපීම, ප්‍රතිකාර) මත පදනම්ව කතා කරන්න — හුදෙක් “අඩු කරන්න” නොවේ.</li>
          <li>මුළු මිල, බදු, ගාස්තු, ආපසු භාරදීමේ කොන්දේසි එකට සාකච්ඡා කරන්න.</li>
          <li>ස්වාධීන පරීක්ෂාවට ඉඩ දෙනවාදැයි විමසන්න.</li>
          <li>කාලය ගන්න — “අදම” පීඩනයෙන් ඉවත් වන්න.</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="නොකළ යුතු දේ">
        <ul>
          <li>තොරතුරු නැතුව මිල පමණක් සාකච්ඡා කිරීම</li>
          <li>අනාගත “ලාභ” පොරොන්දු මත තීරණය කිරීම</li>
          <li>දරාගත නොහැකි මුදලකට එකඟ වීම</li>
          <li>ලේඛන නැතුව මුදල් ගෙවීම</li>
        </ul>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "අනන්‍යතාව / ප්‍රතිකාර / වාර්තා පැහැදිලිද?",
          "ඔබේ උපරිම මිල තීරණය කළාද?",
          "මුළු මිල + කොන්දේසි ලිඛිතව තියෙනවාද?",
          "ස්වාධීන පරීක්ෂාවට ඉඩ තියෙනවාද?",
          "පීඩනයෙන් තීරණයක් ගන්නේ නැද්ද?",
        ]}
      />

      <Misconceptions
        items={[
          "සාකච්ඡා කරන එක අවිනීතයි — නැහැ; තොරතුරු සහිත සාකච්ඡාවක් සාමාන්‍යයි.",
          "අඩුම මිල = හොඳම deal — ගුණාත්මකභාවය සහ ලේඛන බලන්න.",
          "වෙළෙන්දා කියන ‘අවසාන මිල’ සෑම විටම අවසානයි — සමහර විට නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. එය නිශ්චිත මිලක් හෝ ලාභයක් සහතික
          නොකරයි. ගනුදෙනුව ඔබට නොගැළපේ නම් නවත්වන්න.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

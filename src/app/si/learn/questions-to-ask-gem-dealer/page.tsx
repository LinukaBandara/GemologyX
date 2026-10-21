import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් වෙළෙන්දාගෙන් අසන්න ඕනේ ප්‍රශ්න | GemologyX",
  description:
    "මැණික් ගලක් මිලදී ගැනීමට පෙර වෙළෙන්දාගෙන් අසිය යුතු ප්‍රශ්න — අනන්‍යතාව, ප්‍රතිකාර, වාර්තා, මිල සහ කොන්දේසි.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="මැණික් වෙළෙන්දාගෙන් අසන්න ඕනේ ප්‍රශ්න"
      crumbHref="/si/learn/gemstone-buying-checklist"
      crumbLabel="මිලදී ගැනීමේ checklist"
      lastReviewed="2026-10-21"
      related={[
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
        { label: "මැණික් පරීක්ෂණ වාර්තාව කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "ප්‍රතිකාර තොරතුරු හෙළි කිරීම", href: "/si/learn/gemstone-treatment-disclosure" },
        { label: "මැණික් ගනුදෙනුවල red flags", href: "/si/learn/avoid-gemstone-scams" },
      ]}
    >
      <QuickAnswer>
        <p>
          වෙළෙන්දාගෙන් අසන්න: මේක ස්වභාවිකද? ප්‍රතිකාර කරලා තියෙනවද? වාර්තාවක්
          තියෙනවද? බර/මානයන් මොනවද? මිලට මොනවද ඇතුළත්? ආපසු භාරදීමේ කොන්දේසි
          මොනවද? ස්වාධීන පරීක්ෂාවට ඉඩ තියෙනවද? උත්තර ලිඛිතව ලබාගන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="1. අනන්‍යතාව සහ ස්වභාවික බව">
        <ul>
          <li>මේ ගලේ නිවැරදි නම / ඛනිජය කුමක්ද?</li>
          <li>ස්වභාවිකද, lab-grown / synthetic ද, imitation ද?</li>
          <li>එය තහවුරු කරන්නේ කෙසේද? (වාර්තාව / පරීක්ෂණය)</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="2. ප්‍රතිකාර">
        <ul>
          <li>දන්නා ප්‍රතිකාර තිබේද? (heat, diffusion, filling, etc.)</li>
          <li>ප්‍රතිකාර නැති බව කියන්නේ නම් — එය තහවුරු කරන්නේ කෙසේද?</li>
          <li>වාර්තාවේ ප්‍රතිකාර සටහන් මොනවද?</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="3. වාර්තා සහ ලේඛන">
        <ul>
          <li>පරීක්ෂණ වාර්තාවක් තිබේද? කවුද නිකුත් කළේ?</li>
          <li>වාර්තා අංකය නිල මාර්ගයෙන් සත්‍යාපනය කළ හැකිද?</li>
          <li>වාර්තාවේ බර/මානයන් මේ ගලට ගැළපේද?</li>
          <li>Origin opinion එකක් තිබේ නම් — එය opinion ද guarantee ද?</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="4. බර, මානයන්, කැපීම">
        <ul>
          <li>කැරට් බර කීයද? මැනුවේ කවදාද / කෙසේද?</li>
          <li>මානයන් (mm) මොනවද?</li>
          <li>කැපුම් හැඩය සහ ගුණාත්මකභාවය ගැන විස්තර තියෙනවද?</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="5. මිල සහ ගනුදෙනු කොන්දේසි">
        <ul>
          <li>මුළු මිල කීයද? බදු / ගාස්තු ඇතුළත්ද?</li>
          <li>ගෙවීම් ක්‍රමය මොකක්ද?</li>
          <li>ආපසු භාරදීම / හුවමාරු කොන්දේසි මොනවද?</li>
          <li>ස්වාධීන පරීක්ෂණාගාරයකට ගෙනියන්න ඉඩ තියෙනවද? කොපමණ කාලයක්?</li>
          <li>රිසිට්පතේ ගලේ විස්තර ලියවේද?</li>
        </ul>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "අනන්‍යතාව සහ ප්‍රතිකාර ලිඛිතව ලබාගත්තාද?",
          "වාර්තාව තිබේ නම් සත්‍යාපනය කළාද?",
          "බර, මානයන්, මිල සහ කොන්දේසි ලිඛිතව තියෙනවාද?",
          "ස්වාධීන පරීක්ෂාවට ඉඩ දෙනවාද?",
          "පීඩනයෙන් ‘අදම’ කියනවා නම් — නවත්වලා සිතන්න",
        ]}
      />

      <Misconceptions
        items={[
          "වෙළෙන්දා මිත්‍රශීලී නම් ප්‍රශ්න අහන්න ඕනේ නැහැ — අහන්න.",
          "වාචික උත්තර ප්‍රමාණවත් — ලිඛිතව ලබාගන්න.",
          "ප්‍රශ්න අහන එක අවිශ්වාසයක් — නැහැ; එය වගකීමකි.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලැයිස්තුව අධ්‍යාපනික මාර්ගෝපදේශයකි. උත්තර ලැබුණත් ගලේ
          ගුණාත්මකභාවය හෝ මිල සහතික නොවේ. මිල අධික ගනුදෙනුවකදී ස්වාධීන
          පරීක්ෂාවක් සලකා බලන්න.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

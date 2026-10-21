import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "රළු මැණික් මිලදී ගන්නා විට අසන්න ඕනේ ප්‍රශ්න | GemologyX",
  description:
    "රළු මැණික් ගලක් මිලදී ගැනීමට පෙර වෙළෙන්දාගෙන් අසිය යුතු ප්‍රශ්න — අනන්‍යතාව, ඉරිතැලීම්, කැපීමේ අවදානම සහ කොන්දේසි.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="රළු මැණික් මිලදී ගන්නා විට අසන්න ඕනේ ප්‍රශ්න"
      crumbHref="/si/learn/buying-rough-gemstones"
      crumbLabel="රළු මැණික් මිලදී ගැනීම"
      lastReviewed="2026-10-21"
      related={[
        { label: "රළු මැණික් මිලදී ගැනීම", href: "/si/learn/buying-rough-gemstones" },
        { label: "රළු නිල්මැණික් වටිනාකම", href: "/si/learn/rough-blue-sapphire-value" },
        { label: "රළු ගලක ඇතුළත ලක්ෂණ", href: "/si/learn/rough-sapphire-inclusions" },
        { label: "වෙළෙන්දාගෙන් අසන්න ඕනේ ප්‍රශ්න", href: "/si/learn/questions-to-ask-gem-dealer" },
      ]}
    >
      <QuickAnswer>
        <p>
          රළු ගලක් මිලදී ගන්නා විට අසන්න: මේක මොන ඛනිජයද? ප්‍රතිකාර තියෙනවද?
          ඉරිතැලීම් / කැඩුණු කොන් තියෙනවද? කැපූ පසු කොපමණ බරක් බලාපොරොත්තු වෙනවද?
          (අනාවැකියක් මිස සහතිකයක් නොවේ) මිල, ආපසු භාරදීම, ස්වාධීන පරීක්ෂාවට ඉඩ?
          උත්තර ලිඛිතව ලබාගන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="1. අනන්‍යතාව">
        <ul>
          <li>මේ ගලේ නිවැරදි නම / ඛනිජය කුමක්ද?</li>
          <li>ස්වභාවිකද? එය තහවුරු කරන්නේ කෙසේද?</li>
          <li>වාර්තාවක් හෝ පරීක්ෂණයක් තිබේද?</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="2. ප්‍රතිකාර">
        <ul>
          <li>දන්නා ප්‍රතිකාර තිබේද?</li>
          <li>ප්‍රතිකාර නැති බව කියන්නේ නම් — සාක්ෂි මොනවද?</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="3. ඉරිතැලීම් සහ ඇතුළත ලක්ෂණ">
        <ul>
          <li>පෙනෙන ඉරිතැලීම්, කැඩුණු කොන්, මතුපිට හානි තියෙනවද?</li>
          <li>කැපීමට බලපාන ලක්ෂණ ගැන විකුණුම්කරු කියන්නේ මොනවද?</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="4. කැපීමේ අවදානම සහ බර">
        <ul>
          <li>කැපූ පසු බලාපොරොත්තු වන බර / හැඩය කුමක්ද? (මෙය අනාවැකියකි)</li>
          <li>කැපීමේදී බර අහිමි වීමේ අවදානම තේරුම් ගත්තාද?</li>
          <li>කැපීම කවුද කරන්නේ? වියදම කවුද දරන්නේ?</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="5. මිල සහ කොන්දේසි">
        <ul>
          <li>මුළු මිල, ගෙවීම්, ආපසු භාරදීමේ කොන්දේසි මොනවද?</li>
          <li>ස්වාධීන පරීක්ෂාවට ඉඩ තියෙනවද?</li>
          <li>රිසිට්පතේ ගලේ බර සහ විස්තර ලියවේද?</li>
        </ul>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "අනන්‍යතාව සහ ප්‍රතිකාර ලිඛිතව තියෙනවාද?",
          "ඉරිතැලීම් / කැඩුණු කොන් සටහන් කළාද?",
          "කැපීමේ අවදානම සහ බර අහිමි වීම තේරුම් ගත්තාද?",
          "මිල සහ කොන්දේසි ලිඛිතව තියෙනවාද?",
          "ස්වාධීන පරීක්ෂාවට ඉඩ තියෙනවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "විකුණුම්කරු කියන කැපූ පසු බර = සහතික — නැහැ; අනාවැකියකි.",
          "රළු ගලේ බර = අවසාන බර — නැහැ.",
          "පෙනුමෙන් සියල්ල තීරණය කළ හැකියි — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          රළු ගලක වටිනාකම තක්සේරු කිරීම අවිනිශ්චිතය. කැපීමෙන් පසු බර සහ
          ගුණාත්මකභාවය කලින් නිශ්චිතව සහතික කළ නොහැකියි. මෙම ලිපිය අධ්‍යාපනික
          මාර්ගෝපදේශයකි.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

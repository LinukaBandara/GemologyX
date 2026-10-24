import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "රළු මැණික් ගලක් මිලදී ගැනීමට පෙර | GemologyX",
  description:
    "රළු මැණික් මිලදී ගැනීමට පෙර බර, ඉරිතැලීම්, කැපීමේ හැකියාව, පරීක්ෂාව සහ ගනුදෙනු කොන්දේසි.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="රළු මැණික් ගලක් මිලදී ගැනීමට පෙර බලන්න"
      crumbHref="/si/learn/rough-gem-questions"
      crumbLabel="රළු ගල් — අසන්න ඕනේ ප්‍රශ්න"
      lastReviewed="2026-10-24"
      related={[
        { label: "රළු ගල් — අසන්න ඕනේ ප්‍රශ්න", href: "/si/learn/rough-gem-questions" },
        { label: "රළු නිල්මැණික් වටිනාකම", href: "/si/learn/rough-blue-sapphire-value" },
        { label: "රළු ගලක inclusions", href: "/si/learn/rough-sapphire-inclusions" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          රළු ගලක වටිනාකම අවිනිශ්චිතය. කැපූ පසු බර සහ ගුණාත්මකභාවය කලින්
          සහතික කළ නොහැකියි. අනන්‍යතාව, ඉරිතැලීම්, කැපීමේ අවදානම, මිල සහ
          කොන්දේසි ලිඛිතව පැහැදිලි කරගන්න. විකුණුම්කරු කියන “කැපූ පසු බර” =
          අනාවැකියකි, සහතිකයක් නොවේ.
        </p>
      </QuickAnswer>

      <ArticleSection heading="අනන්‍යතාව සහ ප්‍රතිකාර">
        <p>
          ගලේ නම / ඛනිජය සහ ප්‍රතිකාර තත්ත්වය ලිඛිතව විමසන්න. පෙනුමෙන් පමණක්
          තීරණය නොකරන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ඉරිතැලීම් සහ හානි">
        <p>
          පෙනෙන ඉරිතැලීම්, කැඩුණු කොන්, මතුපිට හානි සටහන් කරන්න. කැපීමට බලපාන
          ලක්ෂණ ගැන විමසන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="කැපීමේ අවදානම">
        <p>
          රළු බර ≠ කැපූ පසු බර. බර අහිමි වීමේ අවදානම තේරුම් ගන්න. කැපීම කවුද
          කරන්නේ / වියදම කවුද දරන්නේ පැහැදිලි කරගන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="මිල සහ කොන්දේසි">
        <p>
          මුළු මිල, ගෙවීම්, ආපසු භාරදීම, ස්වාධීන පරීක්ෂාවට ඉඩ — ලිඛිතව.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "අනන්‍යතාව / ප්‍රතිකාර ලිඛිතව තියෙනවාද?",
          "ඉරිතැලීම් / හානි සටහන් කළාද?",
          "කැපීමේ අවදානම සහ බර අහිමි වීම තේරුම් ගත්තාද?",
          "මිල සහ කොන්දේසි ලිඛිතව තියෙනවාද?",
          "ස්වාධීන පරීක්ෂාවට ඉඩ තියෙනවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "කැපූ පසු බර = සහතික — නැහැ; අනාවැකියකි.",
          "රළු බර = අවසාන බර — නැහැ.",
          "පෙනුමෙන් සියල්ල තීරණය කළ හැකියි — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          රළු ගලක වටිනාකම තක්සේරු කිරීම අවිනිශ්චිතය. මෙම ලිපිය අධ්‍යාපනික
          මාර්ගෝපදේශයකි.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

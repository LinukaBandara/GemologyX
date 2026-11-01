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
    "රළු මැණික් ගනුදෙනුවකදී වෙළෙන්දාගෙන් අසන්න සහ ලිඛිතව තහවුරු කරගන්න ප්‍රශ්න ඇතුළත් භාවිතයට පහසු checklist එක.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 4"
      title="රළු මැණික් මිලදී ගන්නා විට අසන්න ඕනේ ප්‍රශ්න"
      crumbHref="/si/learn/buying-rough-gemstones"
      crumbLabel="රළු මැණික් මිලදී ගැනීම"
      lastReviewed="2026-11-02"
      related={[
        { label: "රළු මැණික් මිලදී ගැනීමට පෙර", href: "/si/learn/buying-rough-gemstones" },
        { label: "රළු නිල්මැණික් වටිනාකම", href: "/si/learn/rough-blue-sapphire-value" },
        { label: "රළු ගලක ඇතුළත ලක්ෂණ", href: "/si/learn/rough-sapphire-inclusions" },
      ]}
    >
      <QuickAnswer>
        <p>
          රළු ගලක් මිලදී ගැනීමට පෙර පහත ප්‍රශ්න එකින් එක අසන්න.
          පිළිතුරු වාචිකව පමණක් නොව, රිසිට්පතක හෝ වෙනත් ලිඛිත
          එකඟතාවක සටහන් කරගන්න. පිළිතුරක් නොදන්නේ නම් එය
          “තහවුරු කර නැත” ලෙස සටහන් කරන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="විකුණුම්කරුගෙන් අසන්න">
        <ul>
          <li>මෙම ගලේ නිශ්චිත නම හෝ ඛනිජය කුමක්ද?</li>
          <li>එය ස්වභාවික බව තහවුරු කර ඇත්තේ කෙසේද?</li>
          <li>දන්නා treatment හෝ enhancement තිබේද?</li>
          <li>Lab report එකක් හෝ පරීක්ෂණ වාර්තාවක් තිබේද?</li>
          <li>පෙනෙන ඉරිතැලීම්, කැඩුණු කොන් හෝ මතුපිට හානි තිබේද?</li>
          <li>කැපීමේදී බලපාන inclusions හෝ වෙනත් අවදානම් මොනවාද?</li>
          <li>කැපූ පසු බලාපොරොත්තු වන බර සහ හැඩය කුමක්ද? එය ඇස්තමේන්තුවක්ද?</li>
          <li>කැපීම කවුද කරන්නේ සහ වියදම කවුද දරන්නේ?</li>
          <li>ඉතිරි rough කොටස් කාට අයිතිද, ඒවා ආපසු ලැබෙනවාද?</li>
          <li>ගලේ මිලට අමතරව ගෙවිය යුතු වියදම් තිබේද?</li>
          <li>ආපසු භාරදීමේ හෝ මුදල් ආපසු ලබාගැනීමේ කොන්දේසි මොනවාද?</li>
          <li>ස්වාධීන gem laboratory පරීක්ෂාවකට ඉඩ තිබේද?</li>
          <li>ගලේ බර, විස්තර සහ එකඟ වූ කොන්දේසි රිසිට්පතේ සඳහන් කරනවාද?</li>
        </ul>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම සහ බර ලේඛනයේ සඳහන් කර තිබේද?",
          "Treatment තත්ත්වය පැහැදිලිව සටහන් කර තිබේද?",
          "පෙනෙන හානි සහ inclusions ගැන සටහන් තිබේද?",
          "කැපූ පසු බර ඇස්තමේන්තුවක් බව දෙපාර්ශ්වය පිළිගන්නවාද?",
          "කැපීමේ වියදම සහ ඉතිරි rough කොටස් ගැන එකඟද?",
          "මුළු මිල සහ ගෙවීම් කොන්දේසි පැහැදිලිද?",
          "ස්වාධීන පරීක්ෂාව සහ ආපසු භාරදීම ගැන ලිඛිත එකඟතාවක් තිබේද?",
        ]}
      />

      <ArticleSection heading="පිළිතුරු ලිඛිතව සටහන් කරගන්න">
        <p>
          වෙළෙන්දා දුන් පිළිතුරු, ගලේ ඡායාරූප, බර, ගෙවූ මුදල
          සහ දෙපාර්ශ්වය එකඟ වූ කොන්දේසි එකම ගනුදෙනු වාර්තාවක
          තබාගන්න. තහවුරු නොකළ කරුණු සත්‍ය ලෙස ලියන්න එපා.
        </p>
      </ArticleSection>

      <Misconceptions
        items={[
          "කැපූ පසු බර කලින් සහතික කළ හැකියි — සාමාන්‍යයෙන් එය ඇස්තමේන්තුවක් පමණයි.",
          "විකුණුම්කරුගේ වාචික ප්‍රකාශය ලිඛිත වාර්තාවකට සමානයි — නැහැ.",
          "පෙනුමෙන් පමණක් අනන්‍යතාව සහ treatment තහවුරු කළ හැකියි — නැහැ.",
        ]}
      />

      <ArticleSection heading="තවත් කියවන්න">
        <p>
          ප්‍රශ්නවලට පිළිතුරු ලැබුණු පසු ගලේ අවදානම් සහ මිල තක්සේරු කරන
          ආකාරය ගැන{" "}
          <a href="/si/learn/buying-rough-gemstones">රළු මැණික් මිලදී ගැනීමේ සම්පූර්ණ මාර්ගෝපදේශය</a>{" "}
          කියවන්න.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Origin opinion සහ origin guarantee අතර වෙනස | GemologyX",
  description:
    "මැණික් වාර්තාවල origin opinion යනු කුමක්ද, guarantee නොවන්නේ ඇයි, සහ මූලාරම්භ ප්‍රකාශ මිලදී ගැනීමේදී සලකා බලන ආකාරය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Origin opinion සහ origin guarantee අතර වෙනස"
      crumbHref="/si/learn/how-to-read-gem-report"
      crumbLabel="වාර්තා කියවීම"
      lastReviewed="2026-10-21"
      related={[
        { label: "මැණික් පරීක්ෂණ වාර්තාව කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "නිල්මැණික් lab report", href: "/si/learn/blue-sapphire-lab-report" },
        { label: "ශ්‍රී ලංකාවේ නිල්මැණික්", href: "/si/learn/sri-lankan-blue-sapphire" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          බොහෝ lab වාර්තාවල “origin” යනු scientific opinion එකකි — absolute
          guarantee එකක් නොවේ. පෙනුමෙන් හෝ විකුණුම්කරුගේ කතාවෙන් මූලාරම්භය තහවුරු
          කළ නොහැකියි. Origin මිලට වැදගත් නම් වාර්තාවේ භාෂාව සහ සීමාවන් කියවන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Origin opinion යනු කුමක්ද?">
        <p>
          පරීක්ෂණාගාරයක් ගලේ අභ්‍යන්තර ලක්ෂණ, වර්ධන රටා සහ අනෙකුත් දත්ත මත පදනම්ව
          “මෙම ගල X රටෙන් / ප්‍රදේශයෙන් පැමිණි බවට opinion එකක්” ලබා දිය හැකියි.
          එය expert judgment එකකි. සෑම ගලකටම origin නිගමනයක් ලබා දිය නොහැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="Guarantee නොවන්නේ ඇයි?">
        <p>
          මූලාරම්භය තහවුරු කිරීමේදී සීමා තිබේ. සමහර ලක්ෂණ රටවල් කිහිපයක ගල්වල
          පොදු විය හැකියි. තොරතුරු අසම්පූර්ණ විය හැකියි. ඒ නිසා බොහෝ labs
          “opinion” භාෂාව භාවිත කරයි. “Ceylon” ලේබලයක් හෝ වාචික ප්‍රකාශයක් පමණක්
          guarantee එකක් නොවේ.
        </p>
      </ArticleSection>

      <ArticleSection heading="වාර්තාවේ කියවිය යුතු දේ">
        <ul>
          <li>Origin සඳහන්ද? කුමන වචනවලින්ද? (opinion / probable / etc.)</li>
          <li>සීමාවන් හෝ “inconclusive” සටහන් තිබේද?</li>
          <li>වාර්තා අංකය නිල මාර්ගයෙන් සත්‍යාපනය වේද?</li>
          <li>ගලේ බර/මානයන් වාර්තාවට ගැළපේද?</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <p>
          Origin මිලට හෝ තීරණයට වැදගත් නම්: (1) විශ්වාසදායක වාර්තාවක් ඉල්ලන්න,
          (2) භාෂාවේ සීමාවන් කියවන්න, (3) පෙනුමෙන් origin තහවුරු කළ නොහැකි බව
          මතක තබාගන්න, (4) අවශ්‍ය නම් ස්වාධීන දෙවන මතයක් සලකා බලන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Origin ප්‍රකාශය වාර්තාවේ තියෙනවාද?",
          "එය opinion ද, නැතහොත් වෙනත් භාෂාවක්ද?",
          "සීමාවන් / inconclusive notes බැලුවාද?",
          "වාර්තාව නිල මාර්ගයෙන් සත්‍යාපනය කළාද?",
          "පෙනුමෙන් origin තහවුරු කරන්න උත්සාහ නොකළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Lab origin = 100% guarantee — බොහෝ විට opinion එකකි.",
          "පෙනුමෙන් මූලාරම්භය හඳුනාගත හැකියි — නැහැ.",
          "ලේබලයේ ‘Ceylon’ ලියා තිබීම = තහවුරු — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. Origin opinion එකක් ගලක මිල හෝ
          ආයෝජන වටිනාකම සහතික නොකරයි. වැදගත් ගනුදෙනුවකදී සුදුසුකම් ලත්
          විශේෂඥයකුගෙන් උපදෙස් ලබාගන්න.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

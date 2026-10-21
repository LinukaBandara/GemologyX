import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "උණුසුම් ප්‍රතිකාර කළ නිල්මැණික් ගැන දැනගත යුතු දේ | GemologyX",
  description:
    "නිල්මැණික්වල උණුසුම් ප්‍රතිකාරය, හෙළිදරව් කිරීම සහ පරීක්ෂණ වාර්තාවක් කියවීම ගැන මූලික මාර්ගෝපදේශය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="උණුසුම් ප්‍රතිකාර කළ නිල්මැණික් ගැන දැනගත යුතු දේ"
      crumbHref="/si/learn/blue-sapphire-complete-guide"
      crumbLabel="නිල්මැණික් මාර්ගෝපදේශය"
      lastReviewed="2026-10-21"
      related={[
        { label: "Heated vs Unheated නිල්මැණික්", href: "/si/learn/heated-vs-unheated-blue-sapphire" },
        { label: "මැණික් පරීක්ෂණ වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "ප්‍රතිකාර තොරතුරු හෙළි කිරීම", href: "/si/learn/gemstone-treatment-disclosure" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          උණුසුම් ප්‍රතිකාරය (heat treatment) නිල්මැණිකක වර්ණය හෝ පෙනුම වෙනස් කිරීමට
          භාවිත විය හැකියි. ප්‍රතිකාරයක් තිබීම පමණක් ගලේ අනන්‍යතාව තීරණය නොකරයි;
          එය නිවැරදිව හෙළිදරව් කළ යුතුය. ඇසින් පමණක් heated / unheated තීරණය නොකරන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="උණුසුම් ප්‍රතිකාරය යනු කුමක්ද?">
        <p>
          සමහර නිල්මැණික්වල වර්ණය හෝ පෙනුම වෙනස් කිරීම සඳහා උණුසුම් කිරීම වැනි
          ප්‍රතිකාර භාවිත කළ හැකියි. ප්‍රතිකාරයක් තිබීම පමණක් ගලේ අනන්‍යතාව තීරණය
          නොකරන අතර, එය ගලේ විස්තරවල නිවැරදිව සඳහන් විය යුතුයි.
        </p>
      </ArticleSection>

      <ArticleSection heading="ඇසින් හඳුනාගත හැකිද?">
        <p>
          පෙනුම, වර්ණය හෝ ඡායාරූපයක් මත පමණක් ගල උණුසුම් කර තිබේද නැද්ද යන්න
          විශ්වාසදායක ලෙස තීරණය කළ නොහැකියි. සමහර අවස්ථාවල විශේෂ උපකරණ සහ
          පළපුරුදු පරීක්ෂකයකු අවශ්‍ය වේ.
        </p>
      </ArticleSection>

      <ArticleSection heading="වාර්තාවේ සටහන් කියවන්න">
        <p>
          පරීක්ෂණ වාර්තාවේ ගල් වර්ගය සහ ප්‍රතිකාර පිළිබඳ සොයාගත් තොරතුරු කියවන්න.
          වාර්තාවේ සීමාවන් සහ පරීක්ෂා නොකළ කරුණු තිබේ නම් ඒවාත් සැලකිල්ලට ගන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ ප්‍රතිකාර තත්ත්වය ලිඛිතව විමසන්න",
          "එය තහවුරු කරන ලේඛන / වාර්තා අංකය පරීක්ෂා කරන්න",
          "වාර්තාවේ ගලේ විස්තර ඔබ ඉදිරියේ ඇති ගලට ගැළපේද බලන්න",
          "ආපසු භාරදීමේ කොන්දේසි සහ විකුණුම්කරුගේ ලිඛිත ප්‍රකාශ ලබාගන්න",
          "මිලට ප්‍රතිකාර තත්ත්වය වැදගත් නම් ස්වාධීන පරීක්ෂාවක් සලකා බලන්න",
        ]}
      />

      <Misconceptions
        items={[
          "Heated නම් ගල ව්‍යාජයි — නැහැ. ප්‍රතිකාරය ≠ imitation.",
          "ඇසින් heated / unheated කියලා තීරණය කළ හැකියි — නැහැ.",
          "වාර්තාවක සටහනක් පමණක් සෑම අවස්ථාවකම absolute certainty — සීමා තියෙනවා.",
        ]}
      />

      <ArticleSection heading="මිලදී ගැනීමේදී අසන්න">
        <p>
          ගලේ ප්‍රතිකාර තත්ත්වය, එය තහවුරු කරන ලේඛන, ආපසු භාරදීමේ කොන්දේසි සහ
          විකුණුම්කරුගේ ලිඛිත ප්‍රකාශ ගැන විමසන්න. මිලට ප්‍රතිකාර තත්ත්වය වැදගත් නම්
          ස්වාධීන පරීක්ෂාවක් සලකා බලන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය ගලක් ප්‍රතිකාර කළද යන්න නිශ්චය කරන පරීක්ෂණයක් නොවේ. ගනුදෙනුවට
          පෙර සුදුසුකම් ලත් මැණික් විශේෂඥයකු හෝ විශ්වාසදායක පරීක්ෂණාගාරයක් භාවිත
          කරන්න.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

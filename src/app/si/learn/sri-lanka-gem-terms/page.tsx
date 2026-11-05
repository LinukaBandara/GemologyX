import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";
import { SriLankaGemTermsExplorer } from "@/components/sri-lanka-gem-terms-explorer";

export const metadata: Metadata = {
  title: "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳ පද මාලාව | GemologyX",
  description:
    "Geuda, rough, dullam, lapidary සහ Ceylon sapphire ඇතුළු ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාමට සම්බන්ධ පද සිංහලෙන් සහ මූලාශ්‍ර සමඟ ඉගෙනගන්න.",
  alternates: { canonical: "/si/learn/sri-lanka-gem-terms" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල · ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම"
      readTime="මිනිත්තු 8"
      title="ශ්‍රී ලංකාවේ මැණික් පද මාලාව"
      crumbHref="/si/learn/sri-lanka-gem-trade-intro"
      crumbLabel="ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම"
      lastReviewed="2026-11-05"
      languageLink={{ href: "/learn/sri-lanka-gem-terms", label: "English: Sri Lankan gem trade terms" }}
      related={[
        { label: "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම", href: "/si/learn/sri-lanka-gem-trade-intro" },
        { label: "Geuda ගැනුම් මාර්ගෝපදේශය", href: "/si/learn/buying-geuda" },
        { label: "ශ්‍රී ලංකාවේ නිල්මැණික්", href: "/si/learn/sri-lankan-blue-sapphire" },
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
      ]}
    >
      <QuickAnswer locale="si">
        <p>
          Geuda, rough, dullam, lapidary සහ Ceylon sapphire වැනි පද ශ්‍රී ලංකාවේ
          මැණික් කර්මාන්තයේ විවිධ සන්දර්භවලදී ඇසෙන්න පුළුවන්. පදවල භාවිතය
          ප්‍රදේශය හා ගනුදෙනුව අනුව වෙනස් විය හැකි නිසා, විකුණුම්කරු අදහස් කරන
          නිශ්චිත අර්ථය සහ ලිඛිත වාර්තා පැහැදිලි කරගන්න.
        </p>
      </QuickAnswer>

      <SriLankaGemTermsExplorer />

      <ArticleSection heading="පදය සහ ගල පිළිබඳ සාක්ෂි වෙන් කරගන්න">
        <p>
          දේශීය වෙළෙඳ පදයක් ගලක mineral identity, treatment, quality හෝ
          geographic origin එක තනිවම තහවුරු නොකරයි. වෙළෙඳ විස්තරය, රසායනාගාර
          වාර්තාව සහ නිල ලේඛන වෙන වෙනම කියවන්න. පදයක් ගැන නොතේරෙන විට එය
          ලිඛිතව අර්ථ දක්වා දෙන ලෙස ඉල්ලන්න.
        </p>
        <p>
          මෙහි “dullam” විස්තරය GIA ක්ෂේත්‍ර ගවේෂණ ලිපියක සටහන් වූ භාවිතයක්
          මත පදනම් වේ. එය සෑම ප්‍රදේශයකම හෝ සෑම ගනුදෙනුවකම එකම අර්ථය භාවිත
          වන බවට ප්‍රකාශයක් නොවේ.
        </p>
      </ArticleSection>

      <PracticalChecklist
        locale="si"
        items={[
          "පදය මේ ගනුදෙනුවේ අදහස් කරන්නේ කුමක්දැයි විකුණුම්කරුගෙන් අසා පැහැදිලි කරගන්න.",
          "ගලේ අනන්‍යතාව, දන්නා ප්‍රතිකාර සහ වාර්තාවේ විෂය පථය වෙන්කර ලිඛිතව බලන්න.",
          "රළු ගලක් නම් කැපීමේ ගාස්තුව, අවදානම සහ අවසාන බරේ අවිනිශ්චිතතාව කලින් සාකච්ඡා කරන්න.",
          "Geuda export වැනි නිල ක්‍රියාවලියකට අදාළ නම් පැරණි සාරාංශයකට නොව NGJA හි නවතම උපදෙස්වලට යොමු වන්න.",
        ]}
      />

      <Misconceptions
        locale="si"
        items={[
          "‘Geuda’ යන පදය සෑම ගලකම තාප ප්‍රතිකාරයෙන් එකම වර්ණ ප්‍රතිඵලයක් ලැබෙන බව සහතික නොකරයි.",
          "‘Ceylon’ යන විස්තරය පමණක් geographic origin එක තහවුරු නොකරයි.",
          "‘Lapidary’ යන භූමිකාවෙන් ගලේ අනන්‍යතාව හෝ වටිනාකම පිළිබඳ රසායනාගාර සහතිකයක් අදහස් නොවේ.",
        ]}
      />

      <ArticleSection heading="මූලාශ්‍ර සහ නවතම නිල උපදෙස්">
        <ul>
          <li><a href="https://www.gia.edu/gems-gemology/fall-2014-sri-lanka-expedition-island-of-jewels" target="_blank" rel="noreferrer">GIA: ශ්‍රී ලංකා මැණික් කර්මාන්තයේ mining, cutting, trading සහ “dullam” භාවිතය පිළිබඳ ක්ෂේත්‍ර වාර්තාව</a></li>
          <li><a href="https://www.srilankabusiness.com/gem-diamond-and-jewellery/about-sri-lanka-gems/industry-capability.html" target="_blank" rel="noreferrer">Sri Lanka Export Development Board: කර්මාන්තයේ පාර්ශ්ව සහ අගයදාමය</a></li>
          <li><a href="https://ngja.gov.lk/wp-content/uploads/2020/08/NGJA-Geuda-RIE-Procedure.pdf" target="_blank" rel="noreferrer">NGJA: Geuda වර්ගීකරණය ඇතුළත් export procedure circular (2020)</a></li>
          <li><a href="https://www.gia.edu/gems-gemology/winter-2019-geographic-origin-dilemma" target="_blank" rel="noreferrer">GIA: භූගෝලීය origin opinions සහ ඒවායේ සීමා</a></li>
        </ul>
        <p>
          NGJA circular එක 2020 දිනැති ලේඛනයකි. මෙය වර්තමාන export checklist එකක්
          නොවේ. බලපත්‍ර, ගාස්තු සහ export නියමයන් වෙනස් විය හැකි නිසා ගනුදෙනුවකට
          පෙර NGJA සහ ශ්‍රී ලංකා රේගුවෙන් අලුත්ම තොරතුරු තහවුරු කරගන්න.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

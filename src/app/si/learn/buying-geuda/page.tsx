import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";
import { GeudaBuyingStudio } from "@/components/geuda-buying-studio";

export const metadata: Metadata = {
  title: "ශ්‍රී ලංකාවේ Geuda මිලදී ගැනීමේ මාර්ගෝපදේශය",
  description:
    "Geuda රළු ගල් මිලදී ගැනීමේදී අනන්‍යතාව, කැපීම, තාප ප්‍රතිකාරය, ලේඛන සහ අවදානම ගැන විමසිය යුතු දේ සිංහලෙන් දැනගන්න.",

  alternates: { canonical: "/si/learn/buying-geuda" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="ශ්‍රී ලංකාවේ මැණික් මිලදී ගැනීම"
      readTime="මිනිත්තු 8"
      title="Geuda මිලදී ගැනීමේදී — සිහිබුද්ධියෙන් තීරණ ගන්න"
      crumbHref="/si/learn/sri-lanka-gem-terms"
      crumbLabel="ශ්‍රී ලංකාවේ මැණික් පද"
      lastReviewed="2026-11-05"
      heroImage={{ src: "https://upload.wikimedia.org/wikipedia/commons/7/71/Hand-sorting_washed_gem_gravel,_Pelmadulla,_Sri_Lanka_%282026%29.jpg", alt: "Washed gem gravel being hand-sorted near Pelmadulla, Sri Lanka", credit: "Ilyes Makria / Joalys · CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Hand-sorting_washed_gem_gravel,_Pelmadulla,_Sri_Lanka_(2026).jpg" }}
      related={[
        { label: "ශ්‍රී ලංකාවේ මැණික් පද", href: "/si/learn/sri-lanka-gem-terms" },
        { label: "තාප ප්‍රතිකාරය ගැන", href: "/si/learn/heat-treatment-guide" },
        { label: "රළු මැණික් මිලදී ගැනීම", href: "/si/learn/buying-rough-gemstones" },
        { label: "ශ්‍රී ලංකාවේ ගැනුම් උපදෙස්", href: "/si/learn/sri-lanka-buying-day-tips" },
      ]}
    >
      <QuickAnswer locale="si">
        <p>
          Geuda යනු ශ්‍රී ලංකා මැණික් වෙළෙඳාමේ corundum රළු ද්‍රව්‍ය සඳහා
          භාවිත වන නාමයකි. ඇතැම් ගල්වල පෙනුම තාප ප්‍රතිකාරයෙන් වෙනස් විය හැකි
          නමුත්, “Geuda” යන නමෙන් පමණක් ගලේ නිශ්චිත අනන්‍යතාව, කැපූ පසු ලැබෙන
          බර, අවසාන වර්ණය හෝ වටිනාකම සහතික නොවේ. ගෙවීමට පෙර දැනට ඇති ගල,
          ලිඛිත කොන්දේසි සහ අවදානම වෙන වෙනම තේරුම් ගන්න.
        </p>
      </QuickAnswer>

      <GeudaBuyingStudio />

      <ArticleSection heading="Geuda කියන වචනය ඔබට කියන්නේ කුමක්ද?">
        <p>
          මෙය ශ්‍රී ලංකාවේ වෙළෙඳ සහ කර්මාන්ත සන්දර්භයක භාවිත වන පදයකි. NGJA හි
          2020 දිනැති රළු මැණික් අපනයන ක්‍රියාපටිපාටිය තුළ Geuda ඇතුළු වර්ග නාම
          පෙන්වයි. ඒ ලේඛනයේ අරමුණ අපනයන ක්‍රියාවලියයි; එය එක් එක් ගලේ
          මැණික්විද්‍යාත්මක හඳුනාගැනීමක් හෝ ගැනුම්කරුවෙකුට ගුණාත්මක සහතිකයක්
          නොවේ. අද ගනුදෙනුවකට අදාළ නවතම අවශ්‍යතා NGJA වෙතින් තහවුරු කරන්න.
        </p>
        <p>
          GIA විසින් ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම පිළිබඳ කළ ක්ෂේත්‍ර වාර්තාවේ
          Geuda වැනි ද්‍රව්‍ය තාපයෙන් වෙනස් කළ හැකි ආකාරය ගැන කර්මාන්ත
          පසුබිමක් ලබා දෙයි. එම වාර්තාවද සෑම නිශ්චිත ගලක් සඳහාම ප්‍රතිඵල
          පුරෝකථනය කරන ක්‍රමයක් නොවේ.
        </p>
      </ArticleSection>

      <ArticleSection heading="ගල මිලදී ගැනීම සහ ප්‍රතිකාර කිරීම වෙනම ගනුදෙනු විය හැකියි">
        <p>
          ඔබ රළු ගල පමණක් මිලදී ගන්නේද, කැපීම භාරදෙන්නේද, නැතහොත් ප්‍රතිකාරයත්
          ඇතුළත් සේවාවක් ලබාගන්නේද යන්න පැහැදිලි කරන්න. එක් එක් අවස්ථාවේදී
          ගලේ හිමිකම, සේවා ගාස්තුව, ගබඩා කිරීම, හානි වීමේ අවදානම සහ භාරදීමේ
          වගකීම වෙනස් විය හැකියි. මේ කරුණු වාචික එකඟතාවකට පමණක් සීමා
          නොකර, දෙපාර්ශ්වයටම පැහැදිලි භාෂාවකින් ලිඛිතව සටහන් කරගන්න.
        </p>
        <p>
          තාප ප්‍රතිකාරය මැණික් සඳහා භාවිත වන ක්‍රමයකි; එයින් ලැබෙන වෙනස ගලේ
          ද්‍රව්‍යය සහ ක්‍රියාවලිය අනුව වෙනස් වේ. “අනිවාර්යයෙන්ම නිල් වෙයි” හෝ
          “මෙතරම් කැරට් ලැබෙනවා” යන පුරෝකථනය නිශ්චිත ප්‍රතිඵලයක් ලෙස සලකන්න එපා.
          GIA ගැනුම් මාර්ගෝපදේශය ප්‍රතිකාරය විමසීමට සහ සැකයක් ඇත්නම්
          පරීක්ෂණාගාර වාර්තාවක් සලකා බැලීමට උපදෙස් දෙයි.
        </p>
      </ArticleSection>

      <ArticleSection heading="වටිනාකම ගැන තීරණය කරන්න කලින්">
        <ul className="list-disc space-y-2 pl-5">
          <li>මිල ගණනය කරන්නේ වත්මන් රළු ගලටද, කැපූ ගලටද, අනාගත ප්‍රතිකාර ප්‍රතිඵලයකටදැයි විමසන්න.</li>
          <li>අනන්‍යතාව සහ බර ලිඛිතව සටහන් කර, හැකි නම් හොඳ ආලෝකයෙන් සෑම පැත්තක්ම ඡායාරූපගත කරන්න.</li>
          <li>කැපීම හෝ රත් කිරීම කරන්නේ කවුද, ගාස්තුව කුමක්ද, සිදුවිය හැකි බර අඩුවීම හෝ හානිය කාගේ වගකීමදැයි ලියන්න.</li>
          <li>මිල ගලේ පෙනුමෙන් පමණක් යුක්තිසහගත කළ නොහැකි නම් ස්වාධීන මැණික් පරීක්ෂාවක් ලබාගැනීම සලකා බලන්න.</li>
          <li>මිලදී ගැනීමේ රිසිට්පත, වාර්තාව සහ ආපසු භාරදීමේ කොන්දේසි සුරකින්න.</li>
        </ul>
      </ArticleSection>

      <PracticalChecklist
        locale="si"
        items={[
          "‘Geuda’ යන නාමයෙන් විකුණුම්කරු අදහස් කරන්නේ කුමක්දැයි විමසුවාද?",
          "ගලේ දැනට ඇති තත්ත්වය, බර සහ මිල ලිඛිතව ලබාගත්තාද?",
          "තාප ප්‍රතිකාරය, කැපීම, ගාස්තු සහ අවදානම් කාටදැයි පැහැදිලිද?",
          "අනාගත වර්ණය හෝ කැපූ පසු බර සහතික කර ඇතැයි නොසලකනවාද?",
          "අවශ්‍ය නම් ස්වාධීන පරීක්ෂණයක් සහ පැහැදිලි ආපසු භාරදීමේ කොන්දේසියක් තිබේද?",
        ]}
      />

      <Misconceptions
        locale="si"
        items={[
          "Geuda ලෙස හැඳින්වූ සෑම ගලක්ම තාපයෙන් ඉහළ වටිනාකමක නිල්මැණිකක් වේ — එය සහතිකයක් නොවේ.",
          "කිරි පැහැය හෝ පෙනුමෙන් පමණක් ගලේ අනන්‍යතාව හෝ ප්‍රතිකාර ප්‍රතිඵලය තීරණය කළ හැකියි — එසේ නොවේ.",
          "පරීක්ෂණ වාර්තාවක් තිබීමෙන් ගලේ වෙළෙඳ මිල හෝ ආයෝජන ලාභය සහතික වේ — එසේ නොවේ.",
        ]}
      />

      <ArticleSection heading="භාවිත කළ මූලාශ්‍ර">
        <ul className="space-y-3 text-sm">
          <li>
            <a className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent" href="https://www.gia.edu/gems-gemology/fall-2014-sri-lanka-expedition-island-of-jewels" target="_blank" rel="noreferrer">GIA Gems &amp; Gemology: Sri Lanka — Expedition to the Island of Jewels</a>
            <p className="mt-1 text-muted">ශ්‍රී ලංකා මැණික් වෙළෙඳාම සහ තාප ප්‍රතිකාර කර්මාන්තය පිළිබඳ 2014 ක්ෂේත්‍ර වාර්තාවකි; මෙය තනි ගලක් ගැන පුරෝකථනයක් නොවේ.</p>
          </li>
          <li>
            <a className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent" href="https://www.gia.edu/sapphire/buyers-guide" target="_blank" rel="noreferrer">GIA: Sapphire Buyer’s Guide</a>
            <p className="mt-1 text-muted">නිල්මැණික්වල ප්‍රතිකාර ගැන විමසීම, හඳුනාගැනීමේ වාර්තා සහ වාර්තාවක විෂය පථය පිළිබඳ ගැනුම් උපදෙස්.</p>
          </li>
          <li>
            <a className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent" href="https://www.ngja.gov.lk/wp-content/uploads/2020/08/NGJA-Geuda-RIE-Procedure.pdf" target="_blank" rel="noreferrer">NGJA: රළු මැණික් අපනයන / නැවත අපනයන ක්‍රියාපටිපාටිය (2020)</a>
            <p className="mt-1 text-muted">මෙය දිනැති අපනයන ක්‍රියාපටිපාටියකි. වත්මන් බලපත්‍ර, ගාස්තු හෝ නීතිමය අවශ්‍යතා සඳහා NGJA වෙතින් නවතම උපදෙස් ලබාගන්න.</p>
          </li>
        </ul>
        <p className="text-xs leading-5 text-muted">මෙම පිටුව අධ්‍යාපනික තොරතුරු පමණි; ගලක් හඳුනාගැනීමක්, මිල තක්සේරුවක්, නීතිමය උපදෙසක් හෝ ආයෝජන උපදෙසක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

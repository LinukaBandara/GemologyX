import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
} from "@/components/article-layout";
import { SriLankaBuyingVisit } from "@/components/sri-lanka-buying-visit";

export const metadata: Metadata = {
  title: "ශ්‍රී ලංකාවේදී මැණික් මිලදී ගැනීමට සූදානම් වන්න",
  description:
    "ශ්‍රී ලංකාවේ මැණික් ගනුදෙනුවකට පෙර සූදානම් වීම, වාර්තාවක් පරීක්ෂා කිරීම සහ ලිඛිත කොන්දේසි පැහැදිලි කරගැනීම සඳහා අන්තර්ක්‍රියාකාරී මාර්ගෝපදේශය.",

  alternates: { canonical: "/si/learn/sri-lanka-buying-day-tips" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="ශ්‍රී ලංකාවේ මිලදී ගැනීම"
      readTime="මිනිත්තු 8"
      title="ශ්‍රී ලංකාවේදී මැණික් මිලදී ගැනීම: යාමට පෙර සිට ගෙවීම දක්වා"
      crumbHref="/si/learn"
      crumbLabel="ශ්‍රී ලංකා මැණික් දැනුම"
      lastReviewed="2026-11-05"
      related={[
        { label: "වෙළෙන්දාගේ භූමිකා", href: "/si/learn/sri-lanka-dealer-types" },
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "ශ්‍රී ලංකාවේ වෙළෙඳ ගමන", href: "/si/learn/sri-lanka-gem-trade-intro" },
        { label: "අපනයන ලේඛන", href: "/si/learn/export-documents-intro" },
      ]}
    >
      <QuickAnswer locale="si">
        <p>
          ශ්‍රී ලංකාවේ මැණික් මිලදී ගැනීමට යන විට, පළමුව ඔබගේ අවශ්‍යතාව සහ
          වැය සීමාව තීරණය කරන්න. ගලේ අනන්‍යතාව, ප්‍රතිකාරය, වාර්තාව, මුළු මිල
          සහ ආපසු භාරදීමේ කොන්දේසි වෙන වෙනම පැහැදිලි කරගන්න. ඉක්මන් තීරණයක්
          ගැනීමට අවශ්‍ය නැහැ; සැකයක් හෝ නොපැහැදිලි එකඟතාවක් තිබේ නම් ගනුදෙනුව
          කල් දැමිය හැකියි.
        </p>
      </QuickAnswer>

      <SriLankaBuyingVisit />

      <ArticleSection heading="මෙම මාර්ගෝපදේශයේ ශ්‍රී ලංකා සන්දර්භය">
        <p>
          මෙය ගනුදෙනුකරුවන්ට භාවිත කළ හැකි පරීක්ෂණ ක්‍රමයක් පමණයි; කිසියම්
          වෙළෙඳපොළක්, වෙළෙන්දෙක් හෝ ගලක් නිර්දේශ නොකරයි. NGJA තම වෙබ් අඩවියේ
          මැණික් වෙළෙන්දන් සෙවීමේ සේවාවක් සහ එය නිකුත් කළ වාර්තා සඳහා
          Certificate Verification සේවාවක් සපයයි. මේ සේවා ලැයිස්තුගත තොරතුරු
          හෝ වාර්තා අංක සොයා බැලීමට උදව් කරන අතර ගලේ ගුණාත්මකභාවය, මිල
          සාධාරණත්වය හෝ විකුණුම්කරුගේ සියලු ප්‍රකාශ සහතික නොකරයි.
        </p>
        <p>
          NGJA වාර්තාවක අංකය පරීක්ෂා කළ හැකි වුවත්, එම වාර්තාවෙන් මොනවා
          පරීක්ෂා කළාද සහ නොකළාද යන්න එහිම කියවන්න. වාර්තාවක් මිල තක්සේරුවක්,
          origin සහතිකයක් හෝ නැවත විකිණීමේ පොරොන්දුවක් ලෙස නොසලකන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="නිල මූලාශ්‍ර සහ සෘජු සේවා">
        <ul>
          <li><a href="https://ngja.gov.lk/find-dealers/gem-dealers/" target="_blank" rel="noreferrer">NGJA: මැණික් වෙළෙන්දන් සෙවීම</a></li>
          <li><a href="https://gemlab-certificate.ngja.gov.lk/" target="_blank" rel="noreferrer">NGJA: මැණික් පරීක්ෂණ වාර්තා අංකය පරීක්ෂා කිරීම</a></li>
          <li><a href="https://ngja.gov.lk/business_services/contact-gem-laboratory-centers-of-ngja/" target="_blank" rel="noreferrer">NGJA: මැණික් පරීක්ෂණාගාර මධ්‍යස්ථාන</a></li>
          <li><a href="https://www.srilankabusiness.com/gem-diamond-and-jewellery/exporter-information/gem-export-procedure-sri-lanka.html" target="_blank" rel="noreferrer">EDB: මැණික් සහ ස්වර්ණාභරණ අපනයන ක්‍රියාවලිය</a></li>
        </ul>
        <p className="text-sm text-muted">
          NGJA වෙබ් සෙවුම් ප්‍රතිඵල හෝ සහතික පරීක්ෂකයක් විශ්වාසය/ගුණාත්මකභාවය
          අනුමත කරන සේවාවක් ලෙස නොසලකන්න. ගනුදෙනුවක් හෝ විදේශයට ගෙනයාමක්
          සම්බන්ධයෙන් අදාළ නිල ආයතනයෙන් නවතම උපදෙස් ගන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="වටිනා තීරණයක් නම්">
        <p>
          අවශ්‍ය විට ගනුදෙනුවෙන් ස්වාධීන gemologist කෙනෙකු හෝ පිළිගත්
          පරීක්ෂණාගාරයකින් අදහසක් ගන්න. පරීක්ෂාවට පෙර ගෙවීමක් හෝ භාණ්ඩය
          භාරදීමක් අවශ්‍යද යන්න පාර්ශ්ව සමඟ ලිඛිතව එකඟ කරගන්න. දුරකථන
          ඡායාරූපයක්, සරල පරීක්ෂණයක් හෝ මෙම වෙබ් පිටුවෙන් ගල හඳුනාගැනීමට
          නොහැකියි.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

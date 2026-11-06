import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer, Misconceptions } from "@/components/article-layout";
import { SriLankaExportReadinessChecklist, SriLankaExportRouteExplorer } from "@/components/interactive-learning-tools";

export const metadata: Metadata = {
  title: "ශ්‍රී ලංකාවෙන් මැණික් අපනයනය: ලේඛන සහ නිල පියවර",
  description: "ශ්‍රී ලංකාවෙන් මැණික් හෝ ආභරණ රැගෙන යාමට පෙර NGJA, ශ්‍රී ලංකා රේගුව සහ ගමනාන්ත රටෙන් තහවුරු කළ යුතු කරුණු.",
  alternates: { canonical: "/si/learn/export-documents-intro" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="ශ්‍රී ලංකාවේ වෙළෙඳාම සහ අපනයනය"
      readTime="මිනිත්තු 7"
      title="ශ්‍රී ලංකාවෙන් මැණික් අපනයනය: ලේඛන සහ නිල පියවර"
      crumbHref="/si/learn/sri-lanka-gem-trade-intro"
      crumbLabel="ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම"
      lastReviewed="2026-11-05"
      related={[
        { label: "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම", href: "/si/learn/sri-lanka-gem-trade-intro" },
        { label: "ශ්‍රී ලංකාවේදී මැණික් මිලදී ගැනීම", href: "/si/learn/sri-lanka-buying-day-tips" },
        { label: "ශ්‍රී ලංකාවේ නිල්මැණික්", href: "/si/learn/sri-lankan-blue-sapphire" },
      ]}
    >
      <QuickAnswer locale="si">
        <p>ශ්‍රී ලංකාවෙන් මැණික් හෝ ආභරණ රටින් පිටතට යැවීමේදී අදාළ ක්‍රියාවලිය භාණ්ඩ වර්ගය සහ ගනුදෙනුව අනුව වෙනස් විය හැකියි. වාණිජ අපනයනයට NGJA අනුමැතිය/පරීක්ෂාව සහ රේගු පියවර අදාළ විය හැකියි. පුද්ගලිකව රැගෙන යන භාණ්ඩයක් වුණත් “කුඩා ගලක් නිසා නීති නැහැ” කියා උපකල්පනය නොකරන්න: ඔබගේ අවස්ථාවට අදාළ නවතම උපදෙස් NGJA, ශ්‍රී ලංකා රේගුව සහ ගමනාන්ත රටෙන් තහවුරු කරන්න.</p>
      </QuickAnswer>

      <ArticleSection heading="පළමුව ඔබගේ ගනුදෙනුව හඳුනාගන්න">
        <p>පුද්ගලික ආභරණයක්, අලුතින් මිලදී ගත් loose gemstone එකක්, trade sample එකක් සහ වාණිජ තොගයක් එකම ක්‍රියාවලියක් යටතේ යන බව උපකල්පනය නොකරන්න. ඔබගේ භාණ්ඩය කුමක්ද, හිමිකරු/අපනයනකරු කවුද, රැගෙන යාමද freight කිරීමද, වටිනාකම කුමක්ද යන්න පැහැදිලි කර අදාළ අංශයෙන් විමසන්න.</p>
      </ArticleSection>

      <SriLankaExportRouteExplorer locale="si" />

      <ArticleSection heading="NGJA සහ ශ්‍රී ලංකා රේගුවෙන් තහවුරු කළ යුතු දේ">
        <p>NGJA නිල වෙබ් අඩවිය මැණික් හා ආභරණ අපනයන ක්‍රියාවලිය, අපනයන මධ්‍යස්ථාන සහ අදාළ සේවා ප්‍රකාශ කරයි. ශ්‍රී ලංකා රේගුවටත් මැණික් සම්බන්ධ ඒකකයක් ඇත. අදාල approval, inspection, license සහ declaration පියවර තොගය අනුව තහවුරු කරන්න; වෙනත් කෙනෙකුගේ පරණ උපදෙසක් හෝ seller කෙනෙකුගේ වාචික පොරොන්දුවක් මත පමණක් ගමන් නොකරන්න.</p>
        <p>මෙහි සාරාංශය ස්ථිර checklist එකක් හෝ නීතිමය අර්ථකථනයක් නොවේ. NGJA සහ Customs හි ප්‍රකාශිත උපදෙස්/පෝරම යාවත්කාලීන විය හැකි නිසා නිල අංශයෙන් නවතම විස්තර ලබාගන්න.</p>
      </ArticleSection>

      <ArticleSection heading="ඔබට සූදානම් කරගැනීමට සිදුවිය හැකි තොරතුරු">
        <ul>
          <li>ගල් හෝ ආභරණ හඳුනාගැනීමට ප්‍රමාණවත් විස්තර සහ භාණ්ඩ ගණන.</li>
          <li>මිලදී ගැනීමේ invoice/receipt සහ ප්‍රකාශිත වටිනාකමට සහාය වන ලේඛන.</li>
          <li>තිබේ නම් laboratory report; report එක භාණ්ඩය හඳුනාගැනීමට සහාය වන නමුත් export approval එකක් නොවේ.</li>
          <li>ඔබට අදාළ බව NGJA හෝ Customs තහවුරු කළ license, inspection, approval හෝ declaration පියවර.</li>
          <li>ගමනාන්ත රට ඉල්ලන ආනයන, රේගු සහ ප්‍රකාශන ලේඛන.</li>
        </ul>
        <p>මෙම ලැයිස්තුව සියලු ගනුදෙනු සඳහා අවශ්‍ය ලේඛන ලැයිස්තුවක් නොවේ. එක් එක් භාණ්ඩයට අදාළ නිල උපදෙස් වෙනස් විය හැකියි.</p>
      </ArticleSection>

      <SriLankaExportReadinessChecklist locale="si" />

      <ArticleSection heading="පුද්ගලිකව රැගෙන යාම සහ ගමනාන්ත නීති">
        <p>ශ්‍රී ලංකාවෙන් පිටවීමේ ක්‍රියාවලිය තහවුරු කිරීමෙන් පමණක් ගමනාන්ත රටේ ආනයන නීති සම්පූර්ණ වන්නේ නැහැ. Transit රටක් හරහා යන්නේ නම් එහි නියමද අදාළ විය හැකියි. සඟවාගෙන යාම හෝ “පැළඳගෙන ගියොත් කවුරුත් අහන්නේ නැහැ” වැනි උපදෙස් අනුගමනය නොකරන්න; ප්‍රකාශ කළ යුතු දේ රේගුවෙන් තහවුරු කරන්න.</p>
      </ArticleSection>

      <Misconceptions locale="si" items={[
        "මිල අඩු හෝ කුඩා ගලකට නීති අදාළ නොවේ — මෙය උපකල්පනය නොකර නිලව තහවුරු කරන්න.",
        "Seller කිව්ව නිසා export එක අනුමතයි — අවශ්‍ය ක්‍රියාවලිය තීරණය කරන්නේ බලයලත් ආයතනයි.",
        "Lab report එකක් තිබුණාම customs approval අවශ්‍ය නැහැ — report එක සහ නියාමන අනුමැතිය වෙනස් දේවල්.",
      ]} />

      <ArticleSection heading="ශ්‍රී ලංකාවේ නිල මූලාශ්‍ර">
        <ul>
          <li><a href="https://ngja.gov.lk/business_services/export-services-procedure/" target="_blank" rel="noreferrer">NGJA: මැණික් සහ ආභරණ අපනයන ක්‍රියාවලිය</a></li>
          <li><a href="https://www.customs.gov.lk/about-us/directorates-and-divisions/specialized-services-directorate/gem-unit/" target="_blank" rel="noreferrer">ශ්‍රී ලංකා රේගුව: Gem Unit</a></li>
          <li><a href="https://www.srilankabusiness.com/gem-diamond-and-jewellery/exporter-information/gem-export-procedure-sri-lanka.html" target="_blank" rel="noreferrer">Sri Lanka Export Development Board: Gem export procedure</a></li>
        </ul>
        <p>නිල සබැඳි අවසන් වරට පරීක්ෂා කළේ 2026-11-05. ගමන් කිරීමට හෝ භාණ්ඩ යැවීමට පෙර වත්මන් පියවර සහ ඔබට අදාළ අවශ්‍යතා සෘජුවම තහවුරු කරන්න. මෙය නීතිමය හෝ customs උපදෙස් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

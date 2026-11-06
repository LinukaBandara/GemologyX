import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer, PracticalChecklist, Misconceptions } from "@/components/article-layout";
import { ReportFieldExplorer } from "@/components/interactive-learning-tools";

export const metadata: Metadata = {
  title: "ශ්‍රී ලංකාවේ මැණික් වාර්තා කියවීම",
  description: "ශ්‍රී ලංකාවේ මැණික් ගැනුම්කරුවන්ට NGJA සහ වෙනත් පරීක්ෂණාගාර වාර්තා තහවුරු කර කියවීමට, ගලේ විස්තර හා ප්‍රතිකාර සටහන් සසඳා බැලීමට සිංහල මාර්ගෝපදේශයක්.",
  alternates: { canonical: "/si/learn/how-to-read-gem-report" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="ශ්‍රී ලංකාවේ මැණික් කර්මාන්තය"
      readTime="මිනිත්තු 8"
      title="ශ්‍රී ලංකාවේ මැණික් වාර්තා කියවීම"
      crumbHref="/si/learn/sri-lanka-gem-trade-intro"
      crumbLabel="ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම"
      lastReviewed="2026-11-05"
      related={[
        { label: "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම", href: "/si/learn/sri-lanka-gem-trade-intro" },
        { label: "නිල්මැණික් වාර්තාව කියවීම", href: "/si/learn/blue-sapphire-lab-report" },
        { label: "ශ්‍රී ලංකාවේ මිලදී ගැනීම", href: "/si/learn/sri-lanka-buying-day-tips" },
      ]}
    >
      <QuickAnswer locale="si">
        <p>ශ්‍රී ලංකාවේදී මැණික් මිලදී ගන්නා විට වාර්තාව නිකුත් කළ ආයතනය හඳුනාගෙන එහිම නිල ක්‍රමයෙන් වාර්තා අංකය තහවුරු කරන්න. ඉන්පසු ගලේ අනන්‍යතාව, බර, මාන, ප්‍රතිකාර පිළිබඳ සටහන් සහ තිබේ නම් භූගෝලීය මූලාරම්භ මතය කියවන්න. විස්තර අතේ ඇති ගලට ගැළපේදැයි සසඳන්න. වාර්තාවක් මිල හෝ නැවත විකිණීමේ වටිනාකම සහතික නොකරයි.</p>
      </QuickAnswer>

      <ArticleSection heading="වාර්තාව නිකුත් කළ ආයතනය තහවුරු කරගන්න">
        <p>NGJA ශ්‍රී ලංකාවේ මැණික් පරීක්ෂණාගාර මධ්‍යස්ථාන පිළිබඳ නිල තොරතුරු සහ තම සහතික අංක පරීක්ෂා කිරීමේ මාර්ගයක් සපයයි. NGJA සහතිකයක් නම් අදාළ වර්ගය සහ අංකය නිල පරීක්ෂණ පිටුවෙන් බලන්න. වෙනත් ආයතනයක වාර්තාවක් නම් එය නිකුත් කළ පරීක්ෂණාගාරයෙන්ම විමසන්න. ආයතන අතර සේවා හා පරීක්ෂණ විෂය පථය වෙනස් විය හැකි බැවින්, නම පමණක් සසඳා එකම ප්‍රමිතියක් යැයි නොසිතන්න.</p>
        <p><a className="font-medium text-accent underline underline-offset-4" href="https://gemlab-certificate.ngja.gov.lk/" target="_blank" rel="noreferrer">NGJA නිල සහතික අංක පරීක්ෂාව වෙත යන්න</a>. දත්ත එහි නොපෙන්වූයේ නම් එය පමණක් වාර්තාව ව්‍යාජ බව තහවුරු නොකරයි; NGJA වෙතින් සෘජුව විමසන්න.</p>
      </ArticleSection>

      <ReportFieldExplorer locale="si" />

      <ArticleSection heading="පියවර 1: වාර්තා අංකය තහවුරු කරන්න">
        <p>පරීක්ෂණාගාරයේ නිල වෙබ් අඩවිය හෝ අංකය පරීක්ෂා කරන සේවා පිටුව ඔබම සොයාගෙන වාර්තා අංකය ඇතුළත් කරන්න. විකුණුම්කරු එවූ සබැඳියක් පමණක් මත රඳා නොසිටින්න. අන්තර්ජාලයේ වාර්තාවක් නොපෙන්වීම පමණක් වාර්තාව ව්‍යාජ බවට අවසන් සාක්ෂියක් නොවේ; නිකුත් කළ පරීක්ෂණාගාරයෙන් සෘජුව තහවුරු කරගන්නා තුරු ප්‍රකාශය තහවුරු වූවක් ලෙස නොසලකන්න.</p>
      </ArticleSection>

      <ArticleSection heading="පියවර 2: ගලේ අනන්‍යතාව කියවන්න">
        <p>ඛනිජ විශේෂය සහ මැණික් ප්‍රභේදය සඳහන් වන්නේ කෙසේදැයි බලන්න. වාර්තාවේ ස්වභාවික, රසායනාගාරයේ වගා කළ හෝ වෙනත් අනන්‍යතා වචන තිබේදැයි කියවන්න. “ස්වභාවික” යන්නෙන් ප්‍රතිකාර කර නැති බව අදහස් නොවන නිසා, ප්‍රතිකාර තත්ත්වය වෙනම බලන්න.</p>
      </ArticleSection>

      <ArticleSection heading="පියවර 3: බර, මාන සහ රූප සසඳන්න">
        <p>කැරට් බර, මිලිමීටර්වලින් දක්වා ඇති මාන, හැඩය සහ කැපුම් විස්තරය ගල සමඟ සසඳන්න. වාර්තා ඡායාරූපයක් හෝ ඇතුළත් කිරීම් සටහනක් තිබේ නම් එයත් බලන්න. සැබෑ වාර්තාවක් වුවත් වෙනත් ගලකට අදාළ විය හැකියි. සැලකිය යුතු නොගැළපීමක් තිබේ නම් ගනුදෙනුව නවතා පරීක්ෂණාගාරයෙන් හෝ ස්වාධීන මැණික් විශේෂඥයෙකුගෙන් විමසන්න.</p>
      </ArticleSection>

      <ArticleSection heading="පියවර 4: ප්‍රතිකාර සටහන් කියවන්න">
        <p>තාපය, diffusion, පිරවුම් හෝ වෙනත් ප්‍රතිකාර ගැන සටහනක් තිබේදැයි බලන්න. “තාප ප්‍රතිකාරයක ලක්ෂණ හමු නොවීය” වැනි වචන එම පරීක්ෂණ ක්‍රමයෙන් හඳුනාගත් දේ විස්තර කරයි; එය සෑම අවස්ථාවකම සීමා රහිත සහතිකයක් ලෙස නොකියවන්න. වාර්තාවේ සටහන් සහ සීමා එකට කියවන්න.</p>
      </ArticleSection>

      <ArticleSection heading="පියවර 5: මූලාරම්භ මතය සහතිකයක් නොවේ">
        <p>භූගෝලීය මූලාරම්භයක් සඳහන් කර ඇත්නම්, එය පරීක්ෂණාගාරයේ මතයක් ලෙස දක්වා තිබේද සහ සීමා සඳහන් කර තිබේදැයි කියවන්න. මේ ප්‍රකාශය මිලට බලපාන්නේ නම් වාර්තාවේ වචන නිවැරදිව තේරුම් ගන්න; විකුණුම්කරුගේ කතාවෙන් හෝ ගලේ පෙනුමෙන් පමණක් රට තීරණය නොකරන්න.</p>
      </ArticleSection>

      <ArticleSection heading="වාර්තාවෙන් තහවුරු නොවන දේ">
        <p>වාර්තාවක් තිබීමෙන් සාධාරණ වෙළෙඳ මිල, නැවත විකිණීමේ වටිනාකම, ආයෝජන ලාභය, කල්පැවැත්ම හෝ අනාගත ඉල්ලුම ස්වයංක්‍රීයව තහවුරු නොවේ. පරීක්ෂණාගාරය පරීක්ෂා කළ කරුණු සහ වාර්තාවේ පැහැදිලිව සඳහන් දේ පමණක් එහි විෂය පථය තුළ භාවිත කරන්න.</p>
      </ArticleSection>

      <PracticalChecklist locale="si" items={[
        "වාර්තා අංකය නිකුත් කළ ආයතනයේ නිල ක්‍රමයෙන් තහවුරු කළාද?",
        "ඛනිජ විශේෂය, මැණික් ප්‍රභේදය සහ ස්වභාවික/රසායනාගාරයේ වගා කළ බව කියවන ලද්දේද?",
        "කැරට් බර, මාන, හැඩය සහ ඡායාරූපය ඔබේ ගලට ගැළපේද?",
        "ප්‍රතිකාර සටහන් සහ වාර්තාවේ සීමා කියවුවාද?",
        "මූලාරම්භය සඳහන් නම් එය මතයක් ලෙස දක්වා ඇති සීමා තේරුම් ගත්තාද?",
        "ගනුදෙනුවේ වටිනාකමට ගැළපෙන ස්වාධීන පරීක්ෂාවක් අවශ්‍යදැයි සලකා බැලුවාද?",
      ]} />

      <Misconceptions locale="si" items={[
        "වාර්තාවක් තිබීම = ගලේ මිල සහතිකයි — නැහැ.",
        "ස්වභාවික ගලක් = තාප ප්‍රතිකාර කර නැහැ — නැහැ; මේවා වෙනම කරුණු.",
        "වාර්තාව සැබෑ නම් අතේ ඇති ගලටම අදාළයි — නැහැ; ගලේ විස්තර සසඳන්න.",
        "මූලාරම්භය සඳහන් වීම = සෑම විටම නිරපේක්ෂ සහතිකයක් — නැහැ; වාර්තාවේ වචන සහ සීමා කියවන්න.",
      ]} />

      <ArticleSection heading="ශ්‍රී ලංකාවේ නිල සබැඳි">
        <ul>
          <li><a href="https://ngja.gov.lk/business_services/contact-gem-laboratory-centers-of-ngja/" target="_blank" rel="noreferrer">NGJA මැණික් පරීක්ෂණාගාර මධ්‍යස්ථාන</a></li>
          <li><a href="https://gemlab-certificate.ngja.gov.lk/" target="_blank" rel="noreferrer">NGJA නිල සහතික අංක පරීක්ෂාව</a></li>
          <li><a href="https://ngja.gov.lk/gem-tower-ratnapura/" target="_blank" rel="noreferrer">රත්නපුර මැණික් කුලුන (NGJA)</a></li>
          <li><a href="https://ngja.gov.lk/business_services/export-services-procedure/" target="_blank" rel="noreferrer">NGJA නිල මැණික් අපනයන ක්‍රියාවලිය</a></li>
          <li><a href="https://www.customs.gov.lk/about-us/directorates-and-divisions/specialized-services-directorate/gem-unit/" target="_blank" rel="noreferrer">ශ්‍රී ලංකා රේගුව: මැණික් ඒකකය</a></li>
          <li><a href="https://www.gia.edu/gem-lab-service/colored-stone-analysis-report-service" target="_blank" rel="noreferrer">GIA වර්ණවත් මැණික් වාර්තා සේවාවේ උදාහරණයක්</a></li>
        </ul>
        <p>සබැඳි පරීක්ෂා කළ දිනය: 2026-11-05. පරීක්ෂණාගාර සේවා වෙනස් විය හැකි බැවින් නිල ආයතනයෙන් නවතම විස්තර විමසන්න.</p>
      </ArticleSection>

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙය අධ්‍යාපනික මාර්ගෝපදේශයකි; පරීක්ෂණාගාර පරීක්ෂාවකට හෝ මිල තක්සේරුවකට ආදේශකයක් නොවේ. ඉහළ වටිනාකමක ගනුදෙනුවකදී වාර්තාව නිකුත් කළ ආයතනයෙන් සෘජුව තහවුරු කර, අවශ්‍ය නම් ස්වාධීන පරීක්ෂාවක් ලබාගන්න.</p>
      </ArticleSection>

      <ArticleSection heading="මූලාශ්‍ර සහ වාර්තා උදාහරණ">
        <ul>
          <li><a href="https://www.gia.edu/gem-lab-service/colored-stone-analysis-report-service" target="_blank" rel="noreferrer">GIA: වර්ණවත් මැණික් වාර්තා සහ සේවා</a></li>
          <li><a href="https://www.gia.edu/gem-lab-colored-stone-report-compare" target="_blank" rel="noreferrer">GIA: වර්ණවත් මැණික් වාර්තා සසඳන්න</a></li>
          <li><a href="https://www.gia.edu/report-check-landing" target="_blank" rel="noreferrer">GIA: Report Check</a></li>
          <li><a href="https://www.gia.edu/doc/How_to_Read_a_GIA_Identification_and_Origin_Report.pdf" target="_blank" rel="noreferrer">GIA: Identification සහ Origin Report කියවීම (PDF)</a></li>
        </ul>
        <p>මේවා GIA හි වාර්තා සහ ක්‍රියාවලියෙන් ගත් උදාහරණ වේ. වෙනත් පරීක්ෂණාගාරයක වාර්තාවක් නම් එම ආයතනයේ අර්ථ දැක්වීම්, තහවුරු කිරීමේ ක්‍රම සහ සේවා සීමා බලන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

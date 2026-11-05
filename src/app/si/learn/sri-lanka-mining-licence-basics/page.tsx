import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer } from "@/components/article-layout";
import { SriLankaMiningLicenceExplorer } from "@/components/sri-lanka-mining-licence-explorer";

export const metadata: Metadata = {
  title: "ශ්‍රී ලංකාවේ මැණික් පතල් බලපත්‍රය: මුලින්ම තහවුරු කළ යුතු දේ | GemologyX",
  description:
    "ඉඩම් අයිතිය, ඉඩම් වර්ගය, NGJA අයදුම්පත සහ පතල් අවසර ගැන ශ්‍රී ලංකාවේදී නිල ආයතනයෙන් විමසිය යුතු කරුණු සිංහලෙන් කියවන්න.",
  alternates: { canonical: "/si/learn/sri-lanka-mining-licence-basics" },
};

const sources = [
  {
    title: "NGJA: මැණික් පතල් බලපත්‍ර ක්‍රියාවලිය",
    href: "https://ngja.gov.lk/business_services/minning-licence-process/",
    note: "අයදුම්පත, ඉඩම් ලේඛන, ඇතැම් ඉඩම් වර්ග සඳහා නිර්දේශ, ස්ථාන පරීක්ෂාව සහ යන්ත්‍ර භාවිතයට අදාළ අවසර ගැන නිල විස්තර.",
  },
  {
    title: "NGJA: පතල් උපදේශන සහ පාරිසරික ඇගයීම්",
    href: "https://ngja.gov.lk/business_services/minning-consultancy/",
    note: "පතල් ඉංජිනේරුවන්, භූවිද්‍යාඥයන් සහ පාරිසරික නිලධාරීන්ගෙන් උපදේශනය සහ පාරිසරික ඇගයීම් පිළිබඳ තොරතුරු.",
  },
  {
    title: "NGJA: පතල් කර්මාන්තය, පරිසරය සහ පුනරුත්ථාපනය",
    href: "https://ngja.gov.lk/gems/gemstone-mining-industry/",
    note: "ජලය, අවසාදිත, පරිසර සංවේදී ප්‍රදේශ සහ භූමිය යථා තත්ත්වයට පත් කිරීම පිළිබඳ කර්මාන්ත පසුබිම.",
  },
];

export default function SriLankaMiningLicenceBasicsPage() {
  return (
    <ArticleLayout
      category="ශ්‍රී ලංකාවේ පතල් සහ බලපත්‍ර"
      readTime="මිනිත්තු 8"
      title="ශ්‍රී ලංකාවේ මැණික් පතල් බලපත්‍රයක් ගැන විමසීමට පෙර"
      crumbHref="/si/learn"
      crumbLabel="ශ්‍රී ලංකා මැණික් දැනුම"
      lastReviewed="2026-11-05"
      related={[
        { label: "පරිසරය සහ මහජන වගකීම්", href: "/si/learn/sri-lanka-gem-mining-safety-environment" },
        { label: "රත්නපුර/බලංගොඩ භූවිද්‍යාව", href: "/si/learn/ratnapura-balangoda-gem-geology" },
        { label: "English: Sri Lanka mining licence guide", href: "/sri-lanka-mining/licensing" },
      ]}
    >
      <QuickAnswer locale="si">
        <p>
          ශ්‍රී ලංකාවේ මැණික් පතල් කිරීමක් සැලසුම් කරන විට, පළමුව භූමියේ අයිතිය,
          යෝජිත වැඩ සහ අදාළ අවසර මොනවාදැයි NGJA වෙතින් තහවුරු කරන්න. NGJA
          ක්‍රියාවලියේ සඳහන් ලේඛන ඉඩමේ හිමිකාරිත්වයේ ස්වභාවය අනුව වෙනස් විය
          හැකියි; ඇතැම් ඉඩම් සඳහා වෙනත් රාජ්‍ය ආයතනවල නිර්දේශද සඳහන් වේ.
          මෙම පිටුව අයදුම්පතක් හෝ නීතිමය උපදෙසක් නොවේ.
        </p>
      </QuickAnswer>

      <SriLankaMiningLicenceExplorer />

      <ArticleSection heading="NGJA විසින් පළ කර ඇති ක්‍රියාවලියෙන් පෙනෙන්නේ කුමක්ද?">
        <p>
          NGJA හි පතල් බලපත්‍ර පිටුව අයදුම්පතක් සහ අදාළ ඉඩම් අයිතිය පෙන්වන
          ලේඛන ඉදිරිපත් කිරීම, ලේඛන පරීක්ෂාව සහ භූමිය පිළිබඳ ස්ථාන පරීක්ෂාව
          විස්තර කරයි. එහි පළ කර ඇති උදාහරණ අනුව ඉඩමේ තත්ත්වය මත වෙනත්
          දෙපාර්තමේන්තු හෝ අධිකාරිවල නිර්දේශ අවශ්‍ය විය හැකියි. එම පිටුවේ
          විරෝධතා ඉදිරිපත් කිරීමට අවස්ථාවක් සහ අදාළ බලපත්‍ර/අවසර වර්ග ගැනත්
          සඳහන් වේ.
        </p>
        <p>
          මේවා NGJA පිටුවේ දක්වා ඇති සාමාන්‍ය ක්‍රියාවලියේ අංග පමණයි. නිශ්චිත
          ඉඩමකට සෑම කරුණක්ම එක ලෙස අදාළ බවක් හෝ මෙහි අනුපිළිවෙළ සම්පූර්ණ බවක්
          අදහස් නොවේ. ඉල්ලුම් කිරීමට පෙර වත්මන් අයදුම්පත සහ ඔබගේ ඉඩමට අදාළ
          ලේඛන ලැයිස්තුව NGJA වෙතින් ලබාගන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="සාමාන්‍ය පතල් බලපත්‍රය සහ යන්ත්‍ර භාවිතය">
        <p>
          NGJA පතල් ක්‍රියාවලිය සාමාන්‍ය මැණික් පතල් බලපත්‍රය සහ යන්ත්‍ර භාවිතයට
          අදාළ mechanical permit එක වෙන වෙනම විස්තර කරයි. එබැවින් එක් අවසරයක්
          තිබීමෙන් සියලු වැඩ හෝ උපකරණ ස්වයංක්‍රීයව අනුමත බව නොසිතන්න. ඔබගේ
          යෝජිත ක්‍රමය, භූමිය සහ ප්‍රමාණය අනුව අවශ්‍ය බලපත්‍ර මොනවාදැයි NGJA
          වෙතින් ලිඛිතව තහවුරු කරන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="පරිසර ඇගයීම වෙනම තහවුරු කරන්න">
        <p>
          NGJA පතල් උපදේශන පිටුව පරිසරයට සංවේදී ස්ථාන සඳහා උපදේශනය සහ පාරිසරික
          ඇගයීම් ගැන සඳහන් කරයි. එය සෑම ස්ථානයකටම එකම අනුමැතිය අවශ්‍ය බව
          නොකියයි. යෝජිත ඉඩම, ජල මාර්ග සහ ක්‍රියාකාරකම සලකා ඔබට අවශ්‍ය
          පාරිසරික ඇගයීම, අනුමැතිය හෝ වෙනත් රාජ්‍ය නිර්දේශ මොනවාදැයි අදාළ
          ආයතනවලින් විමසන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="NGJA හෝ අදාළ නිල ආයතනයෙන් අසන්න">
        <ul>
          <li>මෙම ඉඩමේ වත්මන් හිමිකම් සහ අයිතිකරුවන් සනාථ කිරීමට අවශ්‍ය නිශ්චිත ලේඛන මොනවාද?</li>
          <li>ඉඩමේ භාවිතය හෝ පාලනය අනුව වෙනත් ආයතනයක නිර්දේශයක් හෝ කැමැත්තක් අවශ්‍යද?</li>
          <li>යෝජිත පතල් ක්‍රමයට සාමාන්‍ය බලපත්‍රයක්, mechanical permit එකක් හෝ දෙකම අවශ්‍යද?</li>
          <li>ස්ථාන පරීක්ෂාවට පෙර සකස් කළ යුතු තොරතුරු සහ වත්මන් ගාස්තු/කාලසීමා මොනවාද?</li>
          <li>පාරිසරික සමාලෝචනය, ජලය, වසා දැමීම සහ ඉඩම යථා තත්ත්වයට පත් කිරීම සඳහා අදාළ කොන්දේසි මොනවාද?</li>
        </ul>
        <p>
          ගාස්තු, පෝරම, ලේඛන සහ පියවර වෙනස් විය හැකියි. මෙහි ස්ථිර මුදලක් හෝ
          කාලසීමාවක් නොදක්වන්නේ එය ඉඩම සහ වත්මන් නිල උපදෙස් අනුව සෘජුවම
          තහවුරු කළ යුතු නිසාය.
        </p>
      </ArticleSection>

      <ArticleSection heading="වත්මන් නිල මූලාශ්‍ර">
        <div className="grid gap-3">
          {sources.map((source) => (
            <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="rounded-xl border border-border bg-white p-4 transition-colors hover:border-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              <span className="font-medium text-accent">{source.title}</span>
              <span className="mt-1 block text-sm leading-6 text-muted">{source.note}</span>
            </a>
          ))}
        </div>
        <p className="text-xs leading-5 text-muted">සබැඳි සහ ක්‍රියාවලි අවසන් වරට පරීක්ෂා කළේ 2026-11-05. නවතම තොරතුරු සඳහා NGJA හා අදාළ ආයතන සෘජුවම අමතන්න.</p>
      </ArticleSection>

      <aside className="rounded-2xl border border-gold/30 bg-gold-soft/45 p-5 text-sm leading-6 text-foreground/85">
        <strong>සීමාව:</strong> මෙය ශ්‍රී ලංකාවේ මැණික් පතල් බලපත්‍ර ක්‍රියාවලිය ගැන අධ්‍යාපනික මාර්ගෝපදේශයක් පමණි. සුදුසුකම්, ඉඩම් අයිතිය, පාරිසරික අනුමැතිය හෝ පතල් ආරම්භ කිරීමට අවසර තීරණය නොකරයි. ක්‍රියාකාරකම ආරම්භ කිරීමට පෙර වත්මන් ලිඛිත අනුමැති සහ කොන්දේසි NGJA වෙතින් ලබාගන්න; අවශ්‍ය නම් සුදුසුකම් ලත් ශ්‍රී ලාංකික වෘත්තීය උපදෙස් ගන්න.
      </aside>
    </ArticleLayout>
  );
}

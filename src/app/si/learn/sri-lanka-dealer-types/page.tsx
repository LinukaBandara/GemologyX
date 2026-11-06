import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳ භූමිකා හඳුනාගැනීම",
  description:
    "රළු ගල් සැපයුම්කරුවන්, මැණික් වෙළෙන්දන්, කැපුම් ශිල්පීන්, තැරැව්කරුවන් සහ සිල්ලර වෙළෙන්දන්ගේ වෙනස් භූමිකා තේරුම් ගන්න.",

  alternates: { canonical: "/si/learn/sri-lanka-dealer-types" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම"
      readTime="මිනිත්තු 7"
      title="ශ්‍රී ලංකාවේ මැණික් වෙළෙන්දන් සහ සේවා භූමිකා"
      crumbHref="/si/learn/sri-lanka-gem-trade-intro"
      crumbLabel="ශ්‍රී ලංකාවේ මැණික් වෙළෙඳ ගමන"
      lastReviewed="2026-11-05"
      related={[
        { label: "මැණික් වෙළෙඳ ගමන", href: "/si/learn/sri-lanka-gem-trade-intro" },
        { label: "ශ්‍රී ලංකාවේ මිලදී ගැනීම", href: "/si/learn/sri-lanka-buying-day-tips" },
        { label: "වෙළෙන්දාගෙන් අසන්න ප්‍රශ්න", href: "/si/learn/questions-to-ask-gem-dealer" },
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
      ]}
    >
      <QuickAnswer locale="si">
        <p>
          මැණික් ගනුදෙනුවකදී සැපයුම්කරු, වෙළෙන්දා, තැරැව්කරු, කැපුම් ශිල්පියා,
          පරීක්ෂණාගාරය, අපනයනකරු සහ සිල්ලර වෙළෙන්දා වෙනස් කාර්යයන් ඉටු කළ
          හැකියි. පුද්ගලයෙකුගේ තනතුරෙන් හෝ ව්‍යාපාරයේ වර්ගයෙන් පමණක් ඔහුගේ
          ප්‍රකාශ සත්‍ය බව හෝ ගනුදෙනුවේ ගුණාත්මකභාවය තීරණය කළ නොහැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="වෙළෙඳාමට සම්බන්ධ විය හැකි පාර්ශ්ව">
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-white p-5">
            <h3 className="font-serif text-lg font-semibold">රළු ගල් සැපයුම්කරු</h3>
            <p className="mt-2">කැපීමට පෙර ඇති ද්‍රව්‍යයක් ඉදිරිපත් කළ හැකියි. රළු ගලේ බර කැපූ පසු ලැබෙන බර නොවන අතර, ඉරිතැලීම්, අභ්‍යන්තර ලක්ෂණ සහ කැපුම් සැලැස්මෙන් ප්‍රතිඵලය වෙනස් විය හැකියි. අනාගත වර්ණයක් හෝ yield එකක් නිශ්චිත බවට ගන්න එපා.</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-5">
            <h3 className="font-serif text-lg font-semibold">කැපූ ගල් වෙළෙන්දා හෝ අපනයනකරු</h3>
            <p className="mt-2">කැපූ සහ ඔප දැමූ ගල් තෝරා හෝ අලෙවි කළ හැකියි; අපනයනකරුවෙකු නම් වත්මන් බලපත්‍ර සහ ක්‍රියාපටිපාටි ද අදාළ විය හැකියි. ගලේ හඳුනාගැනීම, treatment සහ origin ගැන ඇති ප්‍රකාශ ලිඛිතව ලබාගෙන අවශ්‍ය නම් ඒවා ස්වාධීනව පරීක්ෂා කරන්න.</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-5">
            <h3 className="font-serif text-lg font-semibold">තැරැව්කරු හෝ සම්බන්ධකරු</h3>
            <p className="mt-2">ගැණුම්කරුවෙකු සහ විකුණුම්කරුවෙකු හමුවීමට හෝ ගලක් සොයාදීමට උදව් කළ හැකියි. ඔහු ගලේ හිමිකරුද, ගාස්තුව හෝ කොමිස් ක්‍රමය කුමක්ද, ගල පිළිබඳ විස්තරවලට වගකියන්නේ කවුද යන්න කලින් විමසන්න.</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-5">
            <h3 className="font-serif text-lg font-semibold">කැපුම් ශිල්පියා සහ පරීක්ෂණාගාරය</h3>
            <p className="mt-2">කැපුම් ශිල්පියා ගල සැකසීමේ සේවාවක් සපයයි; පරීක්ෂණාගාරය තම වාර්තාවේ විෂය පථයට අදාළ පරීක්ෂණ ප්‍රතිඵල ඉදිරිපත් කරයි. එක් සේවාවක් අනෙක වෙනුවට භාවිත කළ නොහැකි අතර, report එකක් අනිවාර්යයෙන්ම මිල තක්සේරුවක් නොවේ.</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-5">
            <h3 className="font-serif text-lg font-semibold">සිල්ලර වෙළෙන්දා හෝ ස්වර්ණාභරණ නිෂ්පාදකයා</h3>
            <p className="mt-2">ගලක් ආභරණයකට සවි කර අලෙවි කළ හැකියි. ලෝහය, ගල් විස්තරය, treatment, warranty හෝ ආපසු භාරදීමේ නියමයන් වෙන් වෙන්ව ලිඛිතව විමසන්න.</p>
          </div>
        </div>
      </ArticleSection>

      <ArticleSection heading="සෑම භූමිකාවකදීම එකම විමසුම්">
        <p>අවශ්‍යයෙන්ම නරක හෝ හොඳ විකුණුම්කරුවන් කාණ්ඩගත කිරීමට මේ ලැයිස්තුව නොවේ. ඔබට ලැබෙන සේවාව සහ ප්‍රකාශය කුමක්දැයි තේරුම් ගැනීමට එය උදව් කරයි. තනතුර කුමක් වුවත් ගල, ලේඛන, ගෙවීම සහ ගනුදෙනු කොන්දේසි පරීක්ෂා කරන්න.</p>
      </ArticleSection>

      <PracticalChecklist
        locale="si"
        items={[
          "මෙම ගනුදෙනුවේ පුද්ගලයා කරන්නේ කුමක්ද — හිමිකරුද, නියෝජිතයෙක්ද, සේවා සපයන්නෙක්ද?",
          "ඔහු/ඇයගේ ගල පිළිබඳ ප්‍රකාශය සහ ලිඛිත විස්තර එකිනෙකට ගැළපෙනවාද?",
          "ගාස්තු, කොමිස්, delivery, refund සහ වැඩ භාරගැනීමේ අවදානම කාටදැයි පැහැදිලිද?",
          "වැදගත් තීරණයකට පෙර ඔබට ස්වාධීන පරීක්ෂාවක් හෝ දෙවන අදහසක් ගත හැකිද?",
        ]}
      />

      <Misconceptions
        locale="si"
        items={[
          "අපනයනකරු, කුඩා වෙළෙන්දා හෝ තැරැව්කරු යන තනතුර පමණක් විශ්වාසනීයත්වය තහවුරු නොකරයි.",
          "පරීක්ෂණ වාර්තාවක් තිබීමෙන් මිල, ආයෝජන ලාභය හෝ නැවත විකිණීම සහතික නොවේ.",
          "හිතවත් කතාබහ, ප්‍රසිද්ධ ස්ථානයක් හෝ වෘත්තීය පෙනුමක් ගලේ අනන්‍යතාව තහවුරු නොකරයි.",
        ]}
      />

      <ArticleSection heading="මූලාශ්‍ර සහ සීමාව">
        <p>
          EDB ශ්‍රී ලංකා කර්මාන්ත විස්තරය පතල්කරුවන්, වෙළෙන්දන්, කැපුම්/ඔප
          දැමීමේ සේවා, අපනයනකරුවන්, නිෂ්පාදකයන් සහ සිල්ලර වෙළෙන්දන් කර්මාන්තයේ
          පාර්ශ්ව ලෙස හඳුන්වයි. NGJA හි බලපත්‍ර සහ වෙළෙඳ මධ්‍යස්ථාන තොරතුරු
          නිල ව්‍යාපාර ක්‍රියාදාම සඳහා යොදාගත යුතුය. නියමයන් වෙනස් විය හැකි
          බැවින් නවතම තොරතුරු අදාළ ආයතනයෙන් පරීක්ෂා කරන්න.
        </p>
        <ul>
          <li><a href="https://www.srilankabusiness.com/gem-diamond-and-jewellery/about-sri-lanka-gems/industry-capability.html" target="_blank" rel="noreferrer">EDB: කර්මාන්ත පාර්ශ්ව සහ වටිනාකම් දාමය</a></li>
          <li><a href="https://ngja.gov.lk/business_services/gem-dealer-licence-process/" target="_blank" rel="noreferrer">NGJA: මැණික් වෙළෙඳ බලපත්‍ර ක්‍රියාවලිය</a></li>
          <li><a href="https://ngja.gov.lk/business_services/demuwawatha-international-gem-trading-center/" target="_blank" rel="noreferrer">NGJA: Demuwawatha ජාත්‍යන්තර මැණික් වෙළෙඳ මධ්‍යස්ථානය</a></li>
        </ul>
        <p className="text-sm text-muted">අධ්‍යාපනික තොරතුරු පමණි; නීතිමය, ගනුදෙනු හෝ ආයෝජන උපදෙස් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

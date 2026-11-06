import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් සහිත ආභරණ ආරක්ෂිතව පිරිසිදු කරන්නේ කෙසේද?",
  description:
    "ගලේ වර්ගය, ප්‍රතිකාරය සහ සැකසුම අනුව පිරිසිදු කිරීමේ ක්‍රම තෝරන්න. මෘදු පිරිසිදු කිරීම, ultrasonic සහ steam සීමා ගැන සිංහල මාර්ගෝපදේශය.",
  alternates: { canonical: "/si/learn/gemstone-cleaning-methods" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="මැණික් රැකවරණය"
      readTime="මිනිත්තු 7"
      title="මැණික් සහිත ආභරණ ආරක්ෂිතව පිරිසිදු කරන්නේ කෙසේද?"
      crumbHref="/si/learn/gemstone-care-general"
      crumbLabel="මැණික් රැකවරණය"
      lastReviewed="2026-11-06"
      related={[
        { label: "සාමාන්‍ය මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
        { label: "නිල්මැණික් රැකවරණය", href: "/si/learn/blue-sapphire-care" },
        { label: "Opal රැකවරණය සහ ගුණ", href: "/si/learn/opal-intro" },
        { label: "Pearl හැඳින්වීම", href: "/si/learn/pearl-intro" },
      ]}
    >
      <QuickAnswer locale="si">
        <p>
          ගලේ වර්ගය, ප්‍රතිකාරය සහ ආභරණ සැකසුම හඳුනාගත නොහැකි නම් ultrasonic
          හෝ steam cleaner භාවිත නොකරන්න. ලිහිල් ගල් හෝ හානි අවදානමක් නැති බව
          තහවුරු වූ විට පමණක්, කාමර උෂ්ණත්වයට ආසන්න ජලය, මෘදු දියර සබන් සහ
          මෘදු බුරුසුවකින් සෙමින් පිරිසිදු කරන්න. ගල ගැන සැකයක් තිබේ නම්
          ආභරණ ශිල්පියකුගෙන් උපදෙස් ගන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="පිරිසිදු කිරීමට පෙර මේවා පරීක්ෂා කරන්න">
        <p>
          ආභරණයේ ගල් ලිහිල් වී තිබේද, prong හෝ bezel setting එක නමී තිබේද,
          ගලට ඉරිතැලීම් හෝ මතුපිට හානි පෙනේදැයි බලන්න. ලිහිල් ගලක් තිබිය හැකි
          නම් ජලයේ හෝ බේසම අසල පිරිසිදු නොකරන්න; ශිල්පියකුට පරීක්ෂා කරන්න.
          සියලු ගල් සහ treatment ගැන නොදන්නේ නම්, ආරක්ෂිත ක්‍රමය තීරණය කරන
          තුරු ගල තෙත් කිරීම හෝ රසායනික ද්‍රව්‍ය යෙදීම නවත්වන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="මෘදු පිරිසිදු කිරීමේ ක්‍රමය">
        <ol>
          <li>පිරිසිදු වැඩබිමක් සහ කුඩා භාජනයක් සූදානම් කරන්න; බේසමේ කාණුව උඩින් ගල සෝදන්න එපා.</li>
          <li>ගල හා setting එකට සුදුසු බව දන්නේ නම් මද උණුසුම් ජලයට මෘදු දියර සබන් ටිකක් එක් කරන්න.</li>
          <li>මෘදු බුරුසුවකින් හෝ lint-free රෙදි කැබැල්ලකින් පීඩනය නොදී සෙමින් පිරිසිදු කරන්න.</li>
          <li>වෙනම පිරිසිදු ජල භාජනයකින් සබන් ඉවත් කර, මෘදු රෙද්දකින් වියළන්න.</li>
          <li>ගල් ලිහිල් වී නැති බව නැවත බලන්න; සැකයක් තිබේ නම් ආභරණය නොපළඳින්න.</li>
        </ol>
        <p>
          “මෘදු” ක්‍රමයක් වුවත් සෑම ගලකටම සහ setting එකකටම ආරක්ෂිත නොවේ.
          විශේෂයෙන් treatment, glue, coating හෝ පුරවා ඇති ඉරිතැලීම් තිබේ නම්
          නිෂ්පාදකයා හෝ වාර්තාවේ උපදෙස් පරීක්ෂා කරන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ගල සහ ප්‍රතිකාරය අනුව වෙනස් වන සීමා">
        <ul>
          <li><strong>Fracture-filled, cavity-filled හෝ dyed ගල්:</strong> සුදුසුකම් ලත් පරීක්ෂාවක් හෝ වාර්තාවක් වෙනත් ක්‍රමයක් නොකියන්නේ නම්, තෙත් රෙදි කැබැල්ලකින් පමණක් පිරිසිදු කරන්න. ඇතැම් පිරවුම් සහ වර්ණ රසායනික ද්‍රව්‍ය, උෂ්ණත්වය හෝ කම්පනයට සංවේදී විය හැකියි.</li>
          <li><strong>Emerald සහ oil/resin පුරවා ඇති ගල්:</strong> ultrasonic, steam, උණුසුම සහ දැඩි රසායනික ද්‍රව්‍යවලින් පිරවුමට හානි විය හැකි නිසා වෘත්තීය උපදෙස් ගන්න.</li>
          <li><strong>Pearl, coral සහ වෙනත් කාබනික ද්‍රව්‍ය:</strong> ultrasonic හෝ steam නොයොදන්න. පළඳීමෙන් පසු මෘදු රෙදි කැබැල්ලකින් පිස, රළු මතුපිටින් වෙන්ව ගබඩා කරන්න.</li>
          <li><strong>Opal, turquoise, lapis lazuli, malachite සහ ඇතැම් porous/cleaved ගල්:</strong> ultrasonic හා steam වලින් වැළකී, නිශ්චිත ගලට අදාළ care guide එක බලන්න.</li>
          <li><strong>Untreated හෝ ඇතැම් heat/diffusion-treated sapphire:</strong> මෘදු සබන් සහ ජලය ප්‍රධාන මෘදු ක්‍රමයයි. Surface-reaching fracture, filling හෝ dye තිබේ නම් වෙනම සීමා තිබිය හැකියි; sapphire යන නම පමණක් මත ultrasonic/steam ආරක්ෂිතයි යැයි නොසලකන්න.</li>
        </ul>
        <p>
          මෙය සම්පූර්ණ ගල්-ගල් වගුවක් නොවේ. එකම mineral එකේ ප්‍රතිකාර,
          ඉරිතැලීම්, සැකසුම සහ පෙර අලුත්වැඩියා අනුව පිරිසිදු කිරීමේ සීමා වෙනස්
          විය හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="මේවායෙන් වැළකෙන්න">
        <ul>
          <li>ගල් වර්ගය නොදැන ultrasonic හෝ steam cleaner භාවිත කිරීම.</li>
          <li>Bleach, ammonia, lemon juice, acetone හෝ වෙනත් දැඩි ද්‍රාවක—විශේෂයෙන් treatment සහ metal finish නොදන්නා විට.</li>
          <li>Toothpaste, baking soda, abrasive powder හෝ රළු බුරුසු යොදා මතුපිට ඔප දැමීමට උත්සාහ කිරීම.</li>
          <li>ගල ඉතා උණුසුම් හෝ ඉතා සීතල ජලයට හදිසියේ දැමීම.</li>
          <li>සබන් හෝ රසායනික ද්‍රව්‍ය පිරිසිදු කිරීමෙන් පසු කාණුවට කෙළින්ම සෝදා හැරීම.</li>
        </ul>
      </ArticleSection>

      <PracticalChecklist
        locale="si"
        items={[
          "ගලේ වර්ගය, treatment සහ setting එක ගැන විශ්වාසදායක තොරතුරු තිබේද?",
          "පිරිසිදු කිරීමට පෙර ලිහිල් ගල් හෝ හානි පරීක්ෂා කළාද?",
          "Ultrasonic සහ steam භාවිතය සඳහා ගලට නිශ්චිත අවසරයක් තිබේද?",
          "කාණුවට ගල වැටීමේ අවදානම වළක්වා වෙනම භාජනයක සෝදනවාද?",
          "පිරිසිදු කිරීමෙන් පසු setting එක නැවත පරීක්ෂා කරනවාද?",
        ]}
      />

      <Misconceptions
        locale="si"
        items={[
          "Mohs hardness ඉහළ නම් ඕනෑම cleaner එකක් ආරක්ෂිතයි — hardness මගින් treatment හෝ setting සීමා නොකියයි.",
          "සියලු sapphire ultrasonic cleaner එකක පිරිසිදු කළ හැකියි — fracture-filled, cavity-filled හෝ dyed ද්‍රව්‍යයට වෙනස් උපදෙස් ඇත.",
          "මෘදු සබන් සහ ජලය හැම ආභරණයකටම සුදුසුයි — ලිහිල් ගල්, glue සහ සංවේදී treatment තිබේ නම් මෙයත් අවදානම් විය හැකියි.",
        ]}
      />

      <ArticleSection heading="මූලාශ්‍ර සහ වැඩිදුර කියවීම">
        <ul>
          <li><a href="https://www.gia.edu/gia-news-research-tips-caring-jewelry" target="_blank" rel="noreferrer">GIA: Caring for Your Jewelry</a> — jewelry cleaning සහ handling මූලික කරුණු.</li>
          <li><a href="https://4cs.gia.edu/en-us/blog/gems-ultrasonic-cleaners/" target="_blank" rel="noreferrer">GIA: Gems and Ultrasonic Cleaners</a> — ultrasonic cleaning සීමා සහ ප්‍රතිකාර අවදානම්.</li>
          <li><a href="https://www.gia.edu/sapphire-care-cleaning" target="_blank" rel="noreferrer">GIA: Sapphire Care and Cleaning</a> — sapphire treatment අනුව වෙනස් වන පිරිසිදු කිරීමේ උපදෙස්.</li>
          <li><a href="https://www.gia.edu/emerald-care-cleaning" target="_blank" rel="noreferrer">GIA: Emerald Care and Cleaning</a> — emerald පිරිසිදු කිරීමේ සීමා.</li>
          <li><a href="https://www.gia.edu/FAQ/gia-faq-about-gemstones-how-to-care-for-pearls" target="_blank" rel="noreferrer">GIA: How Should I Care for My Pearls?</a> — pearl care සහ storage.</li>
        </ul>
        <p>මෙම පිටුව සාමාන්‍ය අධ්‍යාපනික තොරතුරු පමණි. ඔබේ ආභරණයේ නිශ්චිත ගල් හා treatment නොදන්නේ නම්, පළඳීමට හෝ පිරිසිදු කිරීමට පෙර වෘත්තීය උපදෙස් ගන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

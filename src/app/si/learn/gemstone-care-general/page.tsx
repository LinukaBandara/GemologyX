import type { Metadata } from "next";
import { CarePreparationChecklist } from "@/components/interactive-learning-tools";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් රැකවරණය — සාමාන්‍ය මාර්ගෝපදේශය",
  description:
    "මැණික් ගල් පිරිසිදු කිරීම, ගබඩා කිරීම, උෂ්ණත්වය සහ එදිනෙදා භාවිතයේදී රැකගන්නා මූලික ක්‍රම.",
  alternates: { canonical: "/si/learn/gemstone-care-general" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික් රැකවරණය — සාමාන්‍ය මාර්ගෝපදේශය"
      crumbHref="/si/learn/blue-sapphire-care"
      crumbLabel="නිල්මැණික් රැකවරණය"
      lastReviewed="2026-11-06"
      related={[
        { label: "නිල්මැණික් රැකවරණය", href: "/si/learn/blue-sapphire-care" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
        { label: "ප්‍රතිකාර හෙළි කිරීම", href: "/si/learn/gemstone-treatment-disclosure" },
      ]}
    >
      <QuickAnswer locale="si">
        <p>
          බොහෝ වර්ණ මැණික් සඳහා මෘදු සබන් සහ මද උණුසුම් ජලය භාවිත කළ හැකි
          නමුත් එය හැම ගලකටම හෝ සැකසුමකටම සුදුසු නොවේ. ගලේ වර්ගය, treatment,
          ඉරිතැලීම් සහ setting එක නොදන්නේ නම් ultrasonic හෝ steam භාවිත නොකර,
          පළමුව වෘත්තීය උපදෙස් ගන්න. ගල් එකිනෙක ගැටී සීරීම් හෝ කැඩීම් නොවන
          ලෙස වෙන වෙනම ගබඩා කරන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="පිරිසිදු කිරීම">
        <p>
          බොහෝ වර්ණ ගල් සඳහා මෘදු දියර සබන්, මද උණුසුම් ජලය සහ මෘදු බුරුසුවක්
          සුදුසු විය හැකියි. එහෙත් treatment නොදන්නා, fracture-filled,
          cavity-filled, dyed, porous හෝ ලිහිල්ව සවිකර ඇති ගල්වලට මෙම ක්‍රමයත්
          පෙර තහවුරු කළ යුතුයි. Bleach, acid, acetone, abrasive powders සහ
          රළු බුරුසු භාවිත නොකරන්න. Ultrasonic සහ steam ගැන විශේෂ ගල්-සහ-
          treatment උපදෙස් බලන්න.
        </p>
        <p>
          ජලයෙන් සෝදන විට බේසමේ කාණුවට සෘජුවම ගල ගලා යා හැකි බැවින් වෙනම
          භාජනයක පිරිසිදු කරන්න. පිරිසිදු කිරීමට පෙර සහ පසු ගල setting එකේ
          තදින් තිබේදැයි බලන්න. ලිහිල් ගලක් හෝ හානි ඇති ආභරණයක් භාවිතයට
          පෙර ශිල්පියකුට පෙන්වන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ගබඩා කිරීම">
        <p>
          ගල් එකිනෙකාට ගැටී ඉරිතැලීම් ඇති නොවන ලෙස වෙනම බෑග් / කොටු වල තබන්න.
          දෘඪතාව අඩු ගල් දෘඪතාව ඉහළ ගල් සමඟ ගැටීමෙන් හානි විය හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="එදිනෙදා භාවිතය">
        <p>
          දැඩි ක්‍රීඩා, උද්‍යාන කටයුතු, රසායනික ද්‍රව්‍ය සම්බන්ධ කටයුතුවලදී ආභරණ
          ඉවත් කරන්න. හදිසි උෂ්ණත්ව වෙනස්කම් වළක්වන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර සහ රැකවරණය">
        <p>
          ප්‍රතිකාර කළ ගල්වල (heat, diffusion, filling, dye හෝ coating වැනි)
          රැකවරණ අවශ්‍යතා වෙනස් විය හැකියි. විශේෂයෙන් ඉරිතැලීම් පුරවා ඇති
          ගල්, porous ද්‍රව්‍ය සහ මතුපිට වර්ණය යොදා ඇති ගල් ultrasonic,
          steam, උණුසුම හෝ රසායනික ද්‍රව්‍යවලින් හානි විය හැකියි. වාර්තාවේ,
          නිෂ්පාදකයාගේ හෝ විකුණුම්කරුගේ ලිඛිත උපදෙස් තිබේ නම් ඒවා පරීක්ෂා කරන්න;
          treatment එක නොදන්නේ නම් ස්වාධීන උපදෙස් ගන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ගබඩා කිරීම සහ පළඳීම">
        <p>
          මුතු සහ අනෙකුත් මෘදු ගල් සීරීම් ඇති කළ හැකි දෘඪ ගල්වලින් වෙන්කර
          මෘදු pouch හෝ වෙනම කොටුවක තබන්න. රසායනික ද්‍රව්‍ය, perfume,
          hair spray, ක්‍රීඩා සහ දැඩි ශාරීරික වැඩවලදී ආභරණ ඉවත් කිරීම
          උපකාරී වේ. Setting එක, clasp එක සහ string එක කාලයෙන් කාලයට
          පරීක්ෂා කරගන්න.
        </p>
      </ArticleSection>

      <CarePreparationChecklist locale="si" />

      <Misconceptions
        locale="si"
        items={[
          "සියලුම මැණික් එකම ආකාරයට පිරිසිදු කළ හැකියි — නැහැ.",
          "දෘඪතාව ඉහළ නම් කිසිම හානියක් නොවේ — ඉරිතැලීම් තියෙනවා නම් බිඳිය හැකියි.",
          "Ultrasonic සෑම ගලකටම ආරක්ෂිතයි — නැහැ.",
          "මෘදු සබන් සහ ජලය හැම setting එකකටම සුදුසුයි — ලිහිල් ගල් සහ ඇතැම් treatment වලදී එයත් අවදානම් විය හැකියි.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          ගල් වර්ගය, ප්‍රතිකාර සහ සැකසුම අනුව රැකවරණය වෙනස් වේ. අවිනිශ්චිත නම්
          වෘත්තීය ආභරණ ශිල්පියකුගෙන් උපදෙස් ලබාගන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="මූලාශ්‍ර සහ වැඩිදුර කියවීම">
        <ul>
          <li><a href="https://www.gia.edu/gia-news-research-tips-caring-jewelry" target="_blank" rel="noreferrer">GIA: ආභරණ රැකබලා ගැනීමේ උපදෙස්</a></li>
          <li><a href="https://www.gia.edu/emerald-care-cleaning" target="_blank" rel="noreferrer">GIA: එමරල්ඩ් රැකවරණය සහ පිරිසිදු කිරීම</a></li>
          <li><a href="https://4cs.gia.edu/en-us/blog/gems-ultrasonic-cleaners/" target="_blank" rel="noreferrer">GIA: මැණික් සහ ultrasonic cleaners</a></li>
        </ul>
        <p>මෙම මූලාශ්‍ර සාමාන්‍ය මූලධර්ම විස්තර කරයි. නිශ්චිත ගල, treatment සහ සැකසුම සඳහා උපදෙස් අනුගමනය කරන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

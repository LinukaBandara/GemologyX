import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මුද්දක්ද පෙන්ඩන්ට් එකක්ද? මැණික් ගලේ කල්පැවැත්ම තෝරන්න",
  description:
    "මුද්ද, පෙන්ඩන්ට් සහ earrings අතර තෝරාගැනීමේදී hardness, toughness, cleavage, setting සහ ඔබේ දෛනික භාවිතය සලකා බලන සිංහල මාර්ගෝපදේශය.",
  alternates: { canonical: "/si/learn/ring-vs-pendant-durability" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="මැණික් සහිත ආභරණ"
      readTime="මිනිත්තු 6"
      title="මුද්දක්ද පෙන්ඩන්ට් එකක්ද? මැණික් ගලේ කල්පැවැත්ම තෝරන්න"
      crumbHref="/si/learn/mohs-hardness-guide"
      crumbLabel="Mohs දෘඪතාව"
      lastReviewed="2026-11-06"
      related={[
        { label: "Mohs දෘඪතාව", href: "/si/learn/mohs-hardness-guide" },
        { label: "Setting වර්ග", href: "/si/learn/jewelry-setting-types" },
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
        { label: "මුතු රැකවරණය", href: "/si/learn/pearl-intro" },
      ]}
    >
      <QuickAnswer locale="si">
        <p>
          දිනපතා භාවිත කරන මුද්දක් බොහෝවිට මේස, දොර, මෙවලම් සහ අනෙකුත්
          මතුපිටවලට ගැටී සීරීම් හෝ කැඩීම් අවදානමට ලක්වේ. පෙන්ඩන්ට් සහ
          earrings සාමාන්‍යයෙන් අඩු ගැටීම් ලබන නමුත් ඒවාත් අල්ලා ඇදීම,
          වැටීම සහ setting ලිහිල් වීමෙන් හානි විය හැකියි. තෝරාගැනීමේදී
          hardness පමණක් නොව toughness, cleavage, treatment, setting සහ
          ඔබේ භාවිත පුරුදුද සලකා බලන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Hardness එක durability එකම නොවේ">
        <p>
          Mohs hardness යනු වෙනත් ද්‍රව්‍යයකින් සීරීමට ඇති සාපේක්ෂ ප්‍රතිරෝධයයි.
          Toughness යනු පහරක් හෝ බිඳීමකට එරෙහිව ද්‍රව්‍යය හැසිරෙන ආකාරයයි;
          cleavage යනු ඇතැම් crystal දිශාවල කැඩීමට ඇති ප්‍රවණතාවයි.
          Stability යනු උෂ්ණත්වය, ආලෝකය සහ රසායනික ද්‍රව්‍ය සමඟ ඇති
          ප්‍රතිචාරයයි. ඒ නිසා ඉහළ hardness අගයක් තිබීමෙන් ගල නොබිඳෙන
          බවක් හෝ සෑම setting එකකටම සුදුසු බවක් අදහස් නොවේ.
        </p>
      </ArticleSection>

      <ArticleSection heading="දිනපතා පළඳින මුද්දක් තෝරද්දී">
        <p>
          ඔබ වැඩ කරන විට අත් නිතර භාවිත කරනවාද, ක්‍රීඩා හෝ ගෘහ කටයුතු අතර
          ආභරණය ගලවන්න පුළුවන්ද, ගල් පසෙකට නෙරා සිටිනවාද යන්න සලකා බලන්න.
          සාපේක්ෂව කල්පැවැත්ම ඇති ගලක් තෝරාගත්තත්, low-profile bezel වැනි
          ආරක්ෂිත setting එකක්, සුදුසු band එකක් සහ නිතිපතා prong පරීක්ෂාව
          වැදගත් වේ. ගලේ treatment හෝ පිරවුම් තිබේ නම් care instructions
          තවදුරටත් සීමා විය හැකියි.
        </p>
        <p>
          මුද්දක් මිලදී ගැනීමට පෙර setting එක ගලේ හැඩයට ගැළපේද, ගල මුද්දෙන්
          ඉහළට කොපමණ නෙරා ඇත්ද, සහ repair කළ හැකිදැයි ආභරණ ශිල්පියාගෙන්
          විමසන්න. දිනපතාම මුද්ද පළඳිනවා නම්, නින්ද, ක්‍රීඩා, පිරිසිදු කිරීම
          හෝ රසායනික වැඩවලදී එය ඉවත් කළ යුතු අවස්ථා ගැනත් අසන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="Pendant හෝ earrings තෝරද්දී">
        <p>
          Pendant එකක් සහ earrings සාමාන්‍යයෙන් අත් සහ වැඩපිළිවෙළට අඩුවෙන්
          නිරාවරණය වේ. එහෙත් chain, bail, hook සහ clasp අල්ලා ඇදීමට,
          ඇඳුමකට පැටලීමට හෝ වැටීමට ඉඩ ඇත. ගල හොඳින් රඳවා තිබේදැයි බලන්න;
          ගලේ දාර අනාවරණය වී තිබේ නම් ගබඩා කිරීමේදී වෙනත් ආභරණවලින් වෙන්කරන්න.
        </p>
        <p>
          මෘදු හෝ cleavage ඇති ගල් pendant/earring ලෙස තෝරාගැනීම සමහර
          භාවිත පුරුදු සඳහා පහසු විය හැකි නමුත්, එය ආරක්ෂිත බවට සහතිකයක්
          නොවේ. නිතර ගමන් කරන, දරුවන් සමඟ කටයුතු කරන හෝ ආභරණ ගලවන්න
          අමාරු කෙනෙකුට එම තේරීමත් නැවත සලකා බැලීමට සිදුවිය හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="ඔබේ පුරුදු සමඟ ගල ගැළපෙනවාද?">
        <ul>
          <li><strong>දිනපතා පළඳීම:</strong> ගලේ durability, ප්‍රතිකාර, setting, repair හැකියාව සහ කාලයෙන් කාලයට පරීක්ෂාව එකට සලකා බලන්න.</li>
          <li><strong>ඉඳහිට පළඳීම:</strong> ගබඩා කිරීම සහ පළඳින අවස්ථාව පාලනය කළ හැකි නම් තවත් විකල්ප තිබිය හැකියි; තවමත් ගැටීම් වලින් වළකින්න.</li>
          <li><strong>සංවේදී හෝ අගනා ගලක්:</strong> පළඳීමට පෙර ගලේ treatment සහ setting ගැන සුදුසුකම් ලත් gemologist හෝ jeweller උපදෙස් ගන්න.</li>
          <li><strong>පහසුව:</strong> පළඳින්නට පෙර සහ පසු ගල ලිහිල්ද, prong හෝ clasp හානිදැයි පරීක්ෂා කරන්න.</li>
        </ul>
        <p>
          රන් හෝ වෙනත් ලෝහයකින් සවි කිරීම පමණක් ගලට ආරක්ෂාවක් නොවේ.
          ආරක්ෂාව තීරණය වන්නේ setting design, ගලේ හැඩය, workmanship,
          භාවිතය සහ නඩත්තුව එකට සලකා බැලීමෙන්ය.
        </p>
      </ArticleSection>

      <PracticalChecklist
        locale="si"
        items={[
          "මම ආභරණය කොපමණ වාරයක් සහ කුමන වැඩ අතර පළඳිනවාද?",
          "ගලේ hardness සමඟ toughness, cleavage සහ treatment ගැනත් දන්නවාද?",
          "Setting එක ගලේ දාර ආරක්ෂා කරමින් එය තදින් රඳවාගන්නවාද?",
          "ක්‍රීඩා, පිරිසිදු කිරීම හෝ රසායනික වැඩවලදී ආභරණය ඉවත් කළ හැකිද?",
          "Setting, prongs, hook හෝ clasp පරීක්ෂා කර අලුත්වැඩියා කරගැනීමට සැලැස්මක් තිබේද?",
        ]}
      />

      <Misconceptions
        locale="si"
        items={[
          "Mohs 7 හෝ ඊට වැඩි නම් ගල නොබිඳේ — hardness සීරීම් ප්‍රතිරෝධය පමණක් දක්වයි.",
          "මුද්දකට සුදුසු ගලක් පෙන්ඩන්ට් එකකටත් එකම ලෙස සුදුසුයි — setting, හැඩය සහ භාවිතය වෙනස්.",
          "ඝන ලෝහ setting එකක් තිබුණාම ගලට හානි නොවේ — ගල නෙරා සිටීම, impact සහ fitting තවමත් වැදගත්.",
        ]}
      />

      <ArticleSection heading="මූලාශ්‍ර සහ වැඩිදුර කියවීම">
        <ul>
          <li><a href="https://www.gia.edu/doc/Gemstone-Durability-Design-to-Display.pdf" target="_blank" rel="noreferrer">GIA: Gemstone Durability — Design to Display</a> — hardness, toughness, stability සහ jewellery design සලකා බැලීම.</li>
          <li><a href="https://www.gia.edu/gia-news-research-tips-caring-jewelry" target="_blank" rel="noreferrer">GIA: Caring for Your Jewelry</a> — ගල් සහ treatment අනුව care උපදෙස්.</li>
        </ul>
        <p>මෙම මාර්ගෝපදේශය සාමාන්‍ය අධ්‍යාපනය සඳහාය. විශේෂිත ගලක් හෝ setting එකක් පිළිබඳ තීරණයක් ගැනීමට පෙර වෘත්තීය උපදෙස් ගන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer, PracticalChecklist, Misconceptions } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "ව්‍යාජ හෝ නොගැළපෙන Gem Lab Reports පරීක්ෂා කිරීම | GemologyX",
  description: "Gem report number verification, report-stone mismatch red flags සහ ගනුදෙනුවට පෙර ගත යුතු පියවර ගැන සිංහල මාර්ගෝපදේශය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="ව්‍යාජ හෝ නොගැළපෙන Gem Lab Reports"
      crumbHref="/si/learn/gem-certification-myths"
      crumbLabel="Certificate මිථ්‍යා"
      lastReviewed="2026-11-02"
      related={[
        { label: "Lab report කියවන ආකාරය", href: "/si/learn/how-to-read-gem-report" },
        { label: "Certificate මිථ්‍යා", href: "/si/learn/gem-certification-myths" },
        { label: "මැණික් වංචා අවදානම්", href: "/si/learn/avoid-gemstone-scams" },
      ]}
    >
      <QuickAnswer>
        <p>Report එකක් වෙනස් කර තිබිය හැකි අතර, genuine report එකක් වෙනත් ගලකට අදාළ විය හැකියි. Report number එක issuing laboratory එකේ නිල channel එකෙන් ඔබම verify කර, report details ගල සමඟ සසඳන තුරු certificate එක පමණක් මත මුදල් ගෙවන්න එපා.</p>
      </QuickAnswer>

      <ArticleSection heading="පියවර 1: Official source එක ඔබම සොයාගන්න">
        <p>Laboratory එකේ නිල website හෝ portal එක සොයාගෙන report number එක ඇතුළත් කරන්න. Seller දුන් link එකට පමණක් සීමා නොවන්න. Portal එකක් නොමැතිනම් හෝ record එක නොපෙනේ නම් issuing laboratory එකට සෘජුව සම්බන්ධ වී තහවුරු කරගන්න.</p>
      </ArticleSection>

      <ArticleSection heading="පියවර 2: Report fields ගලට සසඳන්න">
        <p>Weight, dimensions, shape, species/variety, treatment comments සහ photo හෝ inclusion plot තිබේ නම් ඒවා සසඳන්න. Genuine report එකක් වෙනත් ගලකට අදාළ වීමත් අවදානමකි. එකම lab නම හෝ report number එක පමණක් ප්‍රමාණවත් නොවේ.</p>
      </ArticleSection>

      <ArticleSection heading="අවධානය යොමු කළ යුතු red flags">
        <ul>
          <li>Report number එක official source එකෙන් verify කිරීමට විකුණුම්කරු ඉඩ නොදීම.</li>
          <li>Report එකේ weight හෝ dimensions ගලට නොගැළපීම.</li>
          <li>Report photo/plot එකේ ලක්ෂණ ගලට නොගැළපීම.</li>
          <li>Lab identity හෝ contact details ස්වාධීනව තහවුරු කරගත නොහැකි වීම.</li>
          <li>පරීක්ෂා කිරීමට කාලය නොදී වහාම මුදල් ගෙවීමට බල කිරීම.</li>
        </ul>
        <p>මෙම ලක්ෂණවලින් එකක් පමණක් සෑම අවස්ථාවකම fraud එකක් බව ඔප්පු නොකරන නමුත්, ඒවා පැහැදිලි කරන තුරු ගනුදෙනුව නවතා තබන්න.</p>
      </ArticleSection>

      <ArticleSection heading="Hologram, seal සහ logo පමණක් විශ්වාස නොකරන්න">
        <p>Sticker, stamp, watermark හෝ හොඳින් මුද්‍රණය කළ paper එකක් පමණක් authenticity තහවුරු නොකරයි. නිල verification සහ report-to-stone matching දෙකම අවශ්‍යයි.</p>
      </ArticleSection>

      <ArticleSection heading="ගැටලුවක් හමුවුණොත්">
        <p>Report copy, report number, listing සහ ගනුදෙනු සන්නිවේදන සුරකින්න. Issuing laboratory එකෙන් තහවුරු කිරීමක් ඉල්ලන්න. ගල මිලදී ගෙන ඇත්නම් seller return terms සහ අදාළ පාරිභෝගික ආරක්ෂණ/නීතිමය උපදෙස් සලකා බලන්න. සැක සහිත වාර්තාවක් ගැන සාක්ෂි නොමැතිව ප්‍රසිද්ධියේ නිශ්චිත චෝදනා නොකරන්න.</p>
      </ArticleSection>

      <PracticalChecklist items={[
        "Official laboratory source එකෙන් report number verify කළාද?",
        "Weight, dimensions, species සහ treatment notes ගැළපේද?",
        "Photo/plot තිබේ නම් ගල සමඟ සසඳා බැලුවාද?",
        "Seller independent verification සඳහා ඉඩ දුන්නාද?",
        "Return terms සහ transaction record සුරක්ෂිතද?",
      ]} />

      <Misconceptions items={[
        "Hologram එකක් තිබුණාම fake කරන්න බැහැ — ඒක තනිව ප්‍රමාණවත් සාක්ෂියක් නොවේ.",
        "Report එක genuine නම් මේ ගලටම අදාළයි — matching අවශ්‍යයි.",
        "Verification link එකක් නොපෙනීම පමණක් fake බවට අවසන් සාක්ෂියක් — issuing lab එකෙන් සෘජුව තහවුරු කරන්න.",
      ]} />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙය අධ්‍යාපනික buyer-safety guide එකකි; forensic document examination සේවාවක් නොවේ. සැකයක් ඇත්නම් verification ලැබෙන තුරු ගනුදෙනුව නවතා තබන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer, PracticalChecklist, Misconceptions } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් Lab Report එකක් කියවන පියවරෙන් පියවර මාර්ගෝපදේශය | GemologyX",
  description: "Gemstone lab report එකක identity, treatment, measurements, origin opinion සහ report number එක පරීක්ෂා කරන පියවරෙන් පියවර සිංහල මාර්ගෝපදේශය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 8"
      title="මැණික් Lab Report එකක් කියවන පියවරෙන් පියවර මාර්ගෝපදේශය"
      crumbHref="/si/learn/gem-labs-overview"
      crumbLabel="Labs මූලික"
      lastReviewed="2026-11-02"
      related={[
        { label: "වාර්තාවක ප්‍රධාන තොරතුරු", href: "/si/learn/gem-lab-report-details" },
        { label: "නිල්මැණික් lab report", href: "/si/learn/blue-sapphire-lab-report" },
        { label: "ව්‍යාජ හෝ නොගැළපෙන reports", href: "/si/learn/fake-lab-reports" },
        { label: "Origin opinion vs guarantee", href: "/si/learn/origin-opinion-vs-guarantee" },
      ]}
    >
      <QuickAnswer>
        <p>මුලින් report number එක නිකුත් කළ laboratory එකේ නිල ක්‍රමයෙන් verify කරන්න. ඉන්පසු report එකේ ගල් වර්ගය, natural/synthetic wording, බර, මානයන්, treatment comments සහ තිබේ නම් origin opinion කියවන්න. අවසානයේ report එක ඔබේ අතේ ඇති ගලට ගැළපේදැයි පරීක්ෂා කරන්න. Report එකක් මිල හෝ resale guarantee එකක් නොවේ.</p>
      </QuickAnswer>

      <ArticleSection heading="පියවර 1: Report number එක verify කරන්න">
        <p>Laboratory එකේ නිල website හෝ portal එක ඔබම සොයාගෙන report number එක ඇතුළත් කරන්න. Seller එවූ link එකක් පමණක් මත රඳා නොසිටින්න. Online record එකක් නොපෙන්වන්නේ නම්, ඒක පමණක් report එක fake බවට අවසන් සාක්ෂියක් නොවුණත්, issuing laboratory එකෙන් සෘජුව තහවුරු කරගන්නා තුරු claim එක පිළිගන්න එපා.</p>
      </ArticleSection>

      <ArticleSection heading="පියවර 2: ගලේ identity එක කියවන්න">
        <p>Species සහ variety යන නම් බලන්න. Report එක natural, laboratory-grown/synthetic හෝ වෙනත් identification එකක් සඳහන් කරනවාදැයි කියවන්න. “Natural” යන්නෙන් treatment නොකළ බව අදහස් නොවන අතර, treatment status එක identity එකෙන් වෙනම පරීක්ෂා කළ යුතුයි.</p>
      </ArticleSection>

      <ArticleSection heading="පියවර 3: බර, මානයන් සහ ඡායාරූප සසඳන්න">
        <p>Carat weight, millimetre dimensions, shape/cut description සහ report photo හෝ plot තිබේ නම් ඒවා ගල සමඟ සසඳන්න. Report එක සැබෑ එකක් වුණත් වෙනත් ගලකට අදාළ විය හැකියි. වැදගත් නොගැළපීමක් තිබේ නම් ගනුදෙනුව නවතා laboratory එකෙන් හෝ ස්වාධීන gemologist කෙනෙකුගෙන් උපදෙස් ගන්න.</p>
      </ArticleSection>

      <ArticleSection heading="පියවර 4: Treatment comments කියවන්න">
        <p>Heat, diffusion, filling හෝ වෙනත් treatment comments තිබේදැයි බලන්න. “No indications of heat” වැනි wording එකක් එම පරීක්ෂණයේදී හඳුනාගත් ලක්ෂණ පිළිබඳ ප්‍රකාශයකි; එය සෑම අවස්ථාවකම සීමා රහිත guarantee එකක් ලෙස නොකියවිය යුතුයි. Report එකේ notes සහ limitations එකට කියවන්න.</p>
      </ArticleSection>

      <ArticleSection heading="පියවර 5: Origin opinion එක guarantee එකක් ලෙස නොසලකන්න">
        <p>Geographic origin එකක් සඳහන් කර තිබේ නම් laboratory එක එය opinion එකක් ලෙස ඉදිරිපත් කරනවාදැයි සහ ඒ සඳහා සීමා සඳහන් කර තිබේදැයි කියවන්න. Origin claim එක මිලට වැදගත් නම් වචන නිවැරදිව තේරුම් ගන්න; විකුණුම්කරුගේ කතාව හෝ ගලේ පෙනුම පමණක් මත රට තීරණය නොකරන්න.</p>
      </ArticleSection>

      <ArticleSection heading="Report එකෙන් තහවුරු නොවන දේ">
        <p>Report එකක් තිබීමෙන් fair market price, resale value, investment return, durability හෝ අනාගත ඉල්ලුම ස්වයංක්‍රීයව තහවුරු වන්නේ නැහැ. Laboratory එක පරීක්ෂා කළ කරුණු සහ report එකේ පැහැදිලිව සඳහන් කර ඇති දේ පමණක් එහි සීමාවන් තුළ භාවිත කරන්න.</p>
      </ArticleSection>

      <PracticalChecklist items={[
        "Report number එක official source එකෙන් verify කළාද?",
        "Species / variety සහ natural හෝ synthetic wording කියෙව්වාද?",
        "Carat weight, dimensions, shape සහ photo ගලට ගැළපේද?",
        "Treatment comments සහ limitations කියෙව්වාද?",
        "Origin සඳහන් නම් opinion එකේ සීමාවන් තේරුම් ගත්තාද?",
        "ගනුදෙනුවේ වටිනාකමට ගැළපෙන ස්වාධීන පරීක්ෂාවක් අවශ්‍යදැයි සලකා බැලුවාද?",
      ]} />

      <Misconceptions items={[
        "Report එකක් = ගලේ මිල සහතිකයක් — නැහැ.",
        "Natural = unheated — නැහැ; මේවා වෙනස් කරුණු.",
        "Report එක genuine නම් එය අතේ ඇති ගලට අනිවාර්යයෙන් ගැළපේ — ගලත් සසඳන්න.",
        "Origin wording එකක් = සෑම අවස්ථාවකම absolute guarantee — report wording සහ limits කියවන්න.",
      ]} />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙය අධ්‍යාපනික මාර්ගෝපදේශයකි; laboratory examination හෝ valuation එකකට ආදේශකයක් නොවේ. මිල අධික ගනුදෙනුවකදී issuing laboratory එකෙන් verification සහ අවශ්‍ය නම් ස්වාධීන පරීක්ෂාවක් ලබාගන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

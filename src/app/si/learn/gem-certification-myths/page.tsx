import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer, PracticalChecklist, Misconceptions } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Gem Certificate පිළිබඳ මිථ්‍යා 6ක් | GemologyX",
  description: "Gem certificate එකකින් තහවුරු කළ හැකි දේ සහ නොහැකි දේ, report verification, valuation සහ treatment claims ගැන ගැනුම්කරුවන්ට මාර්ගෝපදේශය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="මැණික් Certificate පිළිබඳ මිථ්‍යා 6ක්"
      crumbHref="/si/learn/how-to-read-gem-report"
      crumbLabel="වාර්තා කියවීම"
      lastReviewed="2026-11-02"
      related={[
        { label: "Lab report කියවන ආකාරය", href: "/si/learn/how-to-read-gem-report" },
        { label: "Labs මූලික දැනුම", href: "/si/learn/gem-labs-overview" },
        { label: "ව්‍යාජ හෝ නොගැළපෙන reports", href: "/si/learn/fake-lab-reports" },
        { label: "Origin opinion vs guarantee", href: "/si/learn/origin-opinion-vs-guarantee" },
      ]}
    >
      <QuickAnswer>
        <p>වෙළඳාමේ “certificate” ලෙස කියන ලේඛනය බොහෝවිට gem laboratory report එකක් විය හැකියි. එහි අර්ථය report එකේ scope සහ wording මත රඳා පවතී. එය ස්වයංක්‍රීයව මිල, resale, origin හෝ සියලු ගුණාංග සහතික කරන ලේඛනයක් නොවේ.</p>
      </QuickAnswer>

      <ArticleSection heading="මිථ්‍යාව 1: Certificate එකක් තිබුණාම ගල වටිනා එකක්">
        <p>Report එකක identification හෝ treatment observations තිබිය හැකි නමුත්, එයින්ම වෙළඳපොළ මිල හෝ buyer demand තීරණය නොවේ. ගුණාත්මකභාවය, ගනුදෙනු කොන්දේසි සහ වෙළඳපොළ තත්ත්වය වෙනම සලකා බලන්න.</p>
      </ArticleSection>

      <ArticleSection heading="මිථ්‍යාව 2: Certificate එක resale price එක සහතික කරනවා">
        <p>Report එකක් අනාගත ගැනුම්කරුවෙකු, මිලක් හෝ ඉක්මන් resale එකක් සහතික නොකරයි. Valuation, insurance appraisal සහ laboratory identification report එක එකම දෙයක් නොවිය හැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="මිථ්‍යාව 3: Natural කියන්නේ unheated">
        <p>Natural යන්න ගලේ identity/origin category එකට අදාළ වන අතර heated/unheated යන්න treatment තත්ත්වයට අදාළ වේ. ඒවා වෙන වෙනම කියවන්න.</p>
      </ArticleSection>

      <ArticleSection heading="මිථ්‍යාව 4: Famous lab නමක් තිබුණාම report එක විශ්වාස කළ හැකියි">
        <p>නම හෝ logo එක පමණක් ප්‍රමාණවත් නොවේ. Report number එක issuing laboratory එකේ නිල ක්‍රමයෙන් verify කර, report details ගලට ගැළපේදැයි පරීක්ෂා කරන්න.</p>
      </ArticleSection>

      <ArticleSection heading="මිථ්‍යාව 5: සියලු labs එකම wording සහ scope භාවිත කරනවා">
        <p>Report වර්ගය, පරීක්ෂා කළ කරුණු සහ terminology ආයතන අනුව වෙනස් විය හැකියි. එක් report එකක වචන වෙනත් report එකකට සෘජුවම අර්ථකථනය නොකරන්න; අවශ්‍ය නම් issuing laboratory එකෙන් පැහැදිලි කිරීමක් ඉල්ලන්න.</p>
      </ArticleSection>

      <ArticleSection heading="මිථ්‍යාව 6: Genuine report එකක් නම් අතේ ඇති ගලට ගැළපෙනවා">
        <p>Authentic report එකක් වුණත් එය වෙනත් ගලකට අදාළ විය හැකියි. Weight, dimensions, shape, photograph හෝ plot තිබේ නම් ඒවා ගල සමඟ සසඳන්න.</p>
      </ArticleSection>

      <PracticalChecklist items={[
        "Report number එක official source එකෙන් verify කළාද?",
        "Report එකේ scope සහ limitations කියෙව්වාද?",
        "ගලේ weight, dimensions සහ photo/plot ගැළපේද?",
        "Identification, treatment සහ origin claims වෙන්කර තේරුම් ගත්තාද?",
        "Price claim එකක් තිබේ නම් එය report එකෙන් සැබවින්ම සහාය ලබනවාද?",
      ]} />

      <Misconceptions items={[
        "Certificate = valuation — සෑමවිටම නොවේ.",
        "Certificate = authenticity of the exact stone without matching — නැහැ.",
        "Certificate = investment guarantee — නැහැ.",
      ]} />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙය අධ්‍යාපනික මාර්ගෝපදේශයකි. Report එකේ අර්ථය ගැන සැකයක් තිබේ නම් issuing laboratory එකෙන් විමසන්න; මිල අධික ගනුදෙනුවකදී ස්වාධීන පරීක්ෂාවක් සලකා බලන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

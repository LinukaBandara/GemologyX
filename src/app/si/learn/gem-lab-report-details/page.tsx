import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer, PracticalChecklist, Misconceptions } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Gem Lab Report Field Guide: වාර්තාවක එක් එක් තොරතුර | GemologyX",
  description: "Gemstone report එකක report number, identity, weight, dimensions, treatment සහ origin fields කෙටියෙන් හඳුනාගැනීමට සිංහල reference guide එකක්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Gem Lab Report එකක ප්‍රධාන Fields හඳුනාගැනීම"
      crumbHref="/si/learn/how-to-read-gem-report"
      crumbLabel="වාර්තාවක් කියවීම"
      lastReviewed="2026-11-02"
      related={[
        { label: "පියවරෙන් පියවර report guide", href: "/si/learn/how-to-read-gem-report" },
        { label: "Labs මූලික දැනුම", href: "/si/learn/gem-labs-overview" },
        { label: "ව්‍යාජ හෝ නොගැළපෙන reports", href: "/si/learn/fake-lab-reports" },
      ]}
    >
      <QuickAnswer>
        <p>මෙය report එකක සාමාන්‍ය fields හඳුනාගැනීමට භාවිත කළ හැකි කෙටි reference එකකි. සෑම laboratory report එකකම සියලු fields නොතිබිය හැකි අතර, නම් සහ wording එක ආයතනය හා report වර්ගය අනුව වෙනස් වේ.</p>
      </QuickAnswer>

      <ArticleSection heading="Report number / issue date">
        <p>වාර්තා අංකය සහ නිකුත් කළ දිනය හඳුනාගන්න. අංකය issuing laboratory එකේ නිල ක්‍රමයෙන් verify කරන්න. Report එකේ online record එකක් නොපෙනේ නම් සෘජුව laboratory එකෙන් විමසන්න.</p>
      </ArticleSection>

      <ArticleSection heading="Species / variety / identification">
        <p>Species යනු ගල අයත් ඛනිජ විශේෂය; variety යනු වෙළඳ හෝ gemological නාමයක් විය හැකියි. Report එකේ භාවිත කරන නාමය එලෙසම කියවන්න. Natural, laboratory-grown/synthetic සහ imitation යන පද එකිනෙකට හුවමාරු කළ නොහැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="Weight / dimensions / shape">
        <p>Carat weight, millimetre measurements සහ shape/cut description සසඳන්න. Report photo හෝ inclusion plot තිබේ නම් ඒවාද බලන්න. එක් field එකක් පමණක් නොව විස්තර කිහිපයක් එකට සසඳා report එක ගලට ගැළපේද තීරණය කරන්න.</p>
      </ArticleSection>

      <ArticleSection heading="Treatment comments">
        <p>Heat, diffusion, filling හෝ වෙනත් treatment notes තිබේදැයි බලන්න. “No indications” වැනි වචන laboratory එකේ පරීක්ෂණ සන්දර්භය තුළ කියවිය යුතු අතර සීමා රහිත සහතිකයක් ලෙස නොසලකන්න.</p>
      </ArticleSection>

      <ArticleSection heading="Origin / geographic origin">
        <p>Origin field එකක් තිබේ නම් report එකේ නිශ්චිත wording සහ limitations කියවන්න. Origin statement එක opinion එකක් විය හැකි අතර, සෑම report එකකම origin determination ඇතුළත් නොවේ.</p>
      </ArticleSection>

      <ArticleSection heading="Comments / limitations">
        <p>Comments, remarks, limitations හෝ disclaimer කොටස් මඟ නොහරින්න. Report එකෙන් කුමක් කියනවාද යන්නට වගේම, කුමක් තහවුරු නොකරනවාද යන්නටත් ඒවා වැදගත්.</p>
      </ArticleSection>

      <PracticalChecklist items={[
        "Report number සහ issue date හඳුනාගත්තාද?",
        "Identification / species / variety කියෙව්වාද?",
        "Weight, dimensions සහ shape සසඳා බැලුවාද?",
        "Treatment comments කියෙව්වාද?",
        "Origin field එකක් තිබේ නම් wording සහ limits බැලුවාද?",
        "Comments සහ limitations කොටස් කියෙව්වාද?",
      ]} />

      <Misconceptions items={[
        "සෑම report එකකම එකම fields තිබෙනවා — නැහැ.",
        "Origin field එකක් නැතිනම් report එක අනිවාර්යයෙන් වැරදියි — report scope එක අනුව වෙනස් වේ.",
        "Report fields කියවීමෙන් පමණක් ගලේ මිල තීරණය කළ හැකියි — නැහැ.",
      ]} />

      <ArticleSection heading="තවත් කියවන්න">
        <p>සම්පූර්ණ verification workflow සඳහා <a href="/si/learn/how-to-read-gem-report">Lab report එකක් කියවන පියවරෙන් පියවර මාර්ගෝපදේශය</a> බලන්න. Sapphire-specific fields සඳහා <a href="/si/learn/blue-sapphire-lab-report">නිල්මැණික් lab report guide</a> කියවන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

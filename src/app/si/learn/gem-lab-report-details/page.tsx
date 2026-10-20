import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් පරීක්ෂණ වාර්තාවක තිබිය යුතු ප්‍රධාන තොරතුරු",
  description: "මැණික් වාර්තාවක ගල් වර්ගය, බර, මානයන්, ප්‍රතිකාර සටහන් සහ වාර්තා අංකය පරීක්ෂා කරන ආකාරය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="මැණික් පරීක්ෂණ වාර්තාවක තිබිය යුතු ප්‍රධාන තොරතුරු"
      crumbHref="/learn"
      crumbLabel="Learn Gemology"
      related={[
        { label: "රළු මැණික් ගලක් මිලදී ගැනීමට පෙර", href: "/si/learn/buying-rough-gemstones" },
        { label: "මැණික් පරීක්ෂණ වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "මැණික් මිලදී ගැනීමට පෙර පරීක්ෂා කළ යුතු ලැයිස්තුව", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <ArticleSection heading="ගල් වර්ගය සහ හඳුනාගැනීම">
        <p>වාර්තාවේ ගල හඳුනාගෙන ඇති නම සහ භාවිත කළ පද කියවන්න. වාර්තාවක් තිබීමෙන් ගලේ සෑම වාණිජ ගුණාංගයක්ම හෝ වෙළෙඳපොළ මිලම තහවුරු වන බව අදහස් නොවේ.</p>
      </ArticleSection>

      <ArticleSection heading="බර, මානයන් සහ ඡායාරූප">
        <p>වාර්තාවේ බර සහ මානයන් ඔබ සතුව ඇති ගලට ගැළපේදැයි බලන්න. ඡායාරූපයක් හෝ විශේෂ ලක්ෂණ සටහන් කර තිබේ නම් ඒවාද සසඳන්න. විස්තර නොගැළපේ නම් ගනුදෙනුවට පෙර පැහැදිලි කිරීමක් ඉල්ලන්න.</p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර සහ ස්වභාවික බව">
        <p>වාර්තාවේ ස්වභාවිකද, රසායනාගාරයේ නිපදවූද යන්න සහ හඳුනාගත් ප්‍රතිකාර ගැන ඇති සටහන් කියවන්න. සෑම පරීක්ෂණයකටම සෑම ප්‍රතිකාරයක්ම හඳුනාගත හැකි බව සහතික කළ නොහැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="වාර්තා අංකය තහවුරු කරන්න">
        <p>වාර්තා අංකය නිකුත් කළ පරීක්ෂණාගාරයේ නිල මාර්ගයෙන් තහවුරු කරන්න. විකුණුම්කරු ලබාදුන් සබැඳියකට පමණක් රඳා නොසිටින්න; ආයතනයේම තහවුරු කිරීමේ ක්‍රමය සොයා බලන්න.</p>
      </ArticleSection>

      <ArticleSection heading="වාර්තාවේ සීමාවන්">
        <p>වාර්තාවක් මිල තක්සේරුවක් හෝ ලාභ සහතිකයක් විය යුතු නැහැ. එහි විෂය පථය, පරීක්ෂණ ක්‍රමය සහ සීමාවන් තේරුම් ගන්න. මිල වැඩි ගනුදෙනුවකදී අවශ්‍ය නම් දෙවන ස්වාධීන අදහසක් ලබාගන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

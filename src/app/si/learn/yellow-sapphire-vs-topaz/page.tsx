import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "පුෂ්පරාග සහ කහ ටොපාස් අතර වෙනස",
  description: "කහ පැහැති පුෂ්පරාග සහ ටොපාස් ගල්වල ඛනිජ වෙනස, සමාන පෙනුම සහ මිලදී ගැනීමේදී සැලකිලිමත් විය යුතු දේ.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="පුෂ්පරාග සහ කහ ටොපාස් අතර වෙනස"
      crumbHref="/learn"
      crumbLabel="Learn Gemology"
      related={[
        { label: "ස්වභාවික සහ කෘත්‍රිම මැණික් අතර වෙනස", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "මැණික් පරීක්ෂණ වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "මැණික් මිලදී ගැනීමට පෙර පරීක්ෂා කළ යුතු ලැයිස්තුව", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <ArticleSection heading="වර්ණය එකම වුණත් ගල එකම නොවේ">
        <p>කහ පැහැති පුෂ්පරාග සහ කහ ටොපාස් දෘශ්‍යමය වශයෙන් සමාන විය හැකි නමුත් ඒවා වෙනස් ඛනිජ වේ. වර්ණය පමණක් මත නම තීරණය නොකළ යුතුයි.</p>
      </ArticleSection>

      <ArticleSection heading="භෞතික ගුණාංග">
        <p>කොරන්ඩම් සහ ටොපාස්වල දෘඪතාව හා වෙනත් ගුණාංග වෙනස් වේ. එහෙත් ගල සීරීම වැනි ගෙදර පරීක්ෂණ මඟින් අනන්‍යතාව තහවුරු කිරීමට උත්සාහ කිරීමෙන් හානි සිදුවිය හැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="නාමකරණය සහ ලේඛන">
        <p>මිලදී ගැනීමේදී ගලේ නිවැරදි ඛනිජ නම ලිඛිතව සඳහන් කරවා ගන්න. වාර්තාවක් තිබේ නම් එහි ගලේ විස්තර සහ වාර්තා අංකය පරීක්ෂා කරන්න.</p>
      </ArticleSection>

      <ArticleSection heading="මිල තක්සේරුව">
        <p>ගල් දෙකක වර්ණය සමාන වුවත් ඒවායේ වටිනාකම එකම නොවේ. අනන්‍යතාව, ගුණාත්මකභාවය, ප්‍රතිකාර, කැපීම සහ වෙළෙඳපොළ ඉල්ලුම වෙන වෙනම සලකා බලන්න.</p>
      </ArticleSection>

      <ArticleSection heading="ආරක්ෂිත තීරණය">
        <p>සැකයක් ඇත්නම් ගලට හානි කළ හැකි පරීක්ෂණ නොකර ස්වාධීන විශේෂඥ පරීක්ෂාවක් ලබාගන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

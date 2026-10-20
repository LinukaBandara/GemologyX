import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "තරු නිල්මැණික් හඳුනාගැනීම සහ මිලදී ගැනීම",
  description: "Star sapphire ගලක තරු ආචරණය, cabochon කැපීම, ආලෝකය සහ මිලදී ගැනීමේදී සැලකිලිමත් විය යුතු කරුණු.",
};

export default function Page() {
  return (
    <ArticleLayout category="සිංහල මැණික් දැනුම" readTime="මිනිත්තු 5" title="තරු නිල්මැණික් හඳුනාගැනීම සහ මිලදී ගැනීම" crumbHref="/si/learn/blue-sapphire-complete-guide" crumbLabel="නිල්මැණික් මාර්ගෝපදේශය" related={[
      { label: "නිල්මැණික් වර්ණය සහ ගුණාත්මකභාවය", href: "/si/learn/blue-sapphire-colour-quality" },
      { label: "නිල්මැණික් හඳුනාගැනීම", href: "/si/learn/identify-sapphire" },
      { label: "මැණික් මිලදී ගැනීමට පෙර පරීක්ෂා කළ යුතු ලැයිස්තුව", href: "/si/learn/gemstone-buying-checklist" },
    ]}>
      <ArticleSection heading="තරු ආචරණය යනු කුමක්ද?">
        <p>සමහර කොරන්ඩම් ගල්වල මතුපිට ආලෝකය යටතේ තරු හැඩයක් වැනි රේඛා පෙනෙන්න පුළුවන්. මෙය asterism ලෙස හැඳින්වේ. ගලේ ඇතුළත ඉතා සියුම් ව්‍යුහයන් සහ ඒවාට ගැළපෙන කැපීම නිසා මෙම ආචරණය පෙනෙයි.</p>
      </ArticleSection>
      <ArticleSection heading="කැපීමේ වැදගත්කම">
        <p>තරු ආචරණය පෙන්වීමට star sapphire බොහෝ විට cabochon ලෙස හැඩගස්වයි. ගලේ උස, සමමිතිය සහ තරු රේඛා මධ්‍යයේ හමුවන ආකාරය පෙනුමට බලපායි. කැපීමේ ගුණාත්මකභාවය ගලේ අනෙක් ගුණාංග සමඟ සලකා බලන්න.</p>
      </ArticleSection>
      <ArticleSection heading="ආලෝකය යටතේ පරීක්ෂා කිරීම">
        <p>තරුවේ දෘශ්‍යතාව ආලෝකයේ දිශාව සහ තීව්‍රතාව අනුව වෙනස් විය හැකියි. හැකි නම් ගල සෙමින් කරකවා තරු රේඛා ගල සමඟ ගමන් කරන ආකාරය බලන්න. එක් ස්ථාවර ඡායාරූපයක් පමණක් මත තීරණය නොකරන්න.</p>
      </ArticleSection>
      <ArticleSection heading="ස්වභාවික බව සහ ප්‍රතිකාර">
        <p>තරු ආචරණය තිබීම පමණක් ගලේ ස්වභාවික බව, මූලාරම්භය හෝ ප්‍රතිකාර තත්ත්වය තහවුරු නොකරයි. ගනුදෙනුවට ඒවා වැදගත් නම් සුදුසුකම් ලත් මැණික් පරීක්ෂණාගාරයකින් උපදෙස් ලබාගන්න.</p>
      </ArticleSection>
      <ArticleSection heading="මිලදී ගැනීමේදී">
        <p>වර්ණය, තරු රේඛාවල පැහැදිලි බව, සමමිතිය, මතුපිට තත්ත්වය, බර සහ ලේඛන සලකා බලන්න. තරු ආචරණය නිසා පමණක් ඉහළ මිලක් සාධාරණ බව නොසිතන්න; ස්වාධීන ඇගයීමක් සහ ලිඛිත ගනුදෙනු කොන්දේසි වැදගත්.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

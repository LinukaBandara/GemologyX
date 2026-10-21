import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "තරු නිල්මැණික් හඳුනාගැනීම සහ මිලදී ගැනීම | GemologyX",
  description:
    "Star sapphire ගලක තරු ආචරණය, cabochon කැපීම, ආලෝකය සහ මිලදී ගැනීමේදී සැලකිලිමත් විය යුතු කරුණු.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="තරු නිල්මැණික් හඳුනාගැනීම සහ මිලදී ගැනීම"
      crumbHref="/si/learn/blue-sapphire-complete-guide"
      crumbLabel="නිල්මැණික් මාර්ගෝපදේශය"
      lastReviewed="2026-10-21"
      related={[
        { label: "නිල්මැණික් වර්ණය සහ ගුණාත්මකභාවය", href: "/si/learn/blue-sapphire-colour-quality" },
        { label: "නිල්මැණික් හඳුනාගැනීම", href: "/si/learn/identify-sapphire" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
        { label: "නිල්මැණිකක වටිනාකම", href: "/si/learn/blue-sapphire-value-factors" },
      ]}
    >
      <QuickAnswer>
        <p>
          තරු නිල්මැණිකක (star sapphire) තරු ආචරණය (asterism) ආලෝකය යටතේ පෙනේ.
          බොහෝ විට cabochon කැපුමක් භාවිත වේ. තරුව තිබීම පමණක් ස්වභාවික බව,
          ප්‍රතිකාර හෝ වටිනාකම තහවුරු නොකරයි — වර්ණය, සමමිතිය, ලේඛන සහ ස්වාධීන
          පරීක්ෂාව එකට බලන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="තරු ආචරණය යනු කුමක්ද?">
        <p>
          සමහර කොරන්ඩම් ගල්වල මතුපිට ආලෝකය යටතේ තරු හැඩයක් වැනි රේඛා පෙනෙන්න
          පුළුවන්. මෙය asterism ලෙස හැඳින්වේ. ගලේ ඇතුළත ඉතා සියුම් ව්‍යුහයන් සහ
          ඒවාට ගැළපෙන කැපීම නිසා මෙම ආචරණය පෙනෙයි.
        </p>
      </ArticleSection>

      <ArticleSection heading="කැපීමේ වැදගත්කම">
        <p>
          තරු ආචරණය පෙන්වීමට star sapphire බොහෝ විට cabochon ලෙස හැඩගස්වයි. ගලේ
          උස, සමමිතිය සහ තරු රේඛා මධ්‍යයේ හමුවන ආකාරය පෙනුමට බලපායි. කැපීමේ
          ගුණාත්මකභාවය ගලේ අනෙක් ගුණාංග සමඟ සලකා බලන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ආලෝකය යටතේ පරීක්ෂා කිරීම">
        <p>
          තරුවේ දෘශ්‍යතාව ආලෝකයේ දිශාව සහ තීව්‍රතාව අනුව වෙනස් විය හැකියි. හැකි
          නම් ගල සෙමින් කරකවා තරු රේඛා ගල සමඟ ගමන් කරන ආකාරය බලන්න. එක් ස්ථාවර
          ඡායාරූපයක් පමණක් මත තීරණය නොකරන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ස්වභාවික බව සහ ප්‍රතිකාර">
        <p>
          තරු ආචරණය තිබීම පමණක් ගලේ ස්වභාවික බව, මූලාරම්භය හෝ ප්‍රතිකාර තත්ත්වය
          තහවුරු නොකරයි. ගනුදෙනුවට ඒවා වැදගත් නම් සුදුසුකම් ලත් මැණික්
          පරීක්ෂණාගාරයකින් උපදෙස් ලබාගන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "තරු රේඛාවල පැහැදිලි බව සහ සමමිතිය බලන්න",
          "ගල විවිධ ආලෝකයේ සහ කෝණවලින් කරකවා පරීක්ෂා කරන්න",
          "වර්ණය, මතුපිට තත්ත්වය, බර සහ ලේඛන සලකා බලන්න",
          "ස්වභාවික බව / ප්‍රතිකාර පිළිබඳ ලිඛිත ප්‍රකාශ ඉල්ලන්න",
          "මිල ඉහළ නම් ස්වාධීන පරීක්ෂාවක් සලකා බලන්න",
        ]}
      />

      <Misconceptions
        items={[
          "තරුව තිබීම = ස්වභාවික හා අධික වටිනාකම — නැහැ.",
          "එක් ඡායාරූපයකින් තරු ගුණාත්මකභාවය තීරණය කළ හැකියි — නැහැ.",
          "Star sapphire හැම විටම unheated — නැහැ; ප්‍රතිකාර තත්ත්වය වෙනම පරීක්ෂා කරන්න.",
        ]}
      />

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <p>
          වර්ණය, තරු රේඛාවල පැහැදිලි බව, සමමිතිය, මතුපිට තත්ත්වය, බර සහ ලේඛන සලකා
          බලන්න. තරු ආචරණය නිසා පමණක් ඉහළ මිලක් සාධාරණ බව නොසිතන්න; ස්වාධීන
          ඇගයීමක් සහ ලිඛිත ගනුදෙනු කොන්දේසි වැදගත්.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

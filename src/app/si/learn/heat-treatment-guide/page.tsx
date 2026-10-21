import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික්වල උණුසුම් ප්‍රතිකාරය (Heat treatment) | GemologyX",
  description:
    "මැණික්වල උණුසුම් ප්‍රතිකාරය යනු කුමක්ද, එය වටිනාකමට බලපාන්නේ කෙසේද, හෙළිදරව් කිරීම සහ වාර්තා කියවන ආකාරය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="මැණික්වල උණුසුම් ප්‍රතිකාරය (Heat treatment)"
      crumbHref="/si/learn/gemstone-treatment-disclosure"
      crumbLabel="ප්‍රතිකාර හෙළි කිරීම"
      lastReviewed="2026-10-21"
      related={[
        { label: "ප්‍රතිකාර තොරතුරු හෙළි කිරීම", href: "/si/learn/gemstone-treatment-disclosure" },
        { label: "Heated vs Unheated නිල්මැණික්", href: "/si/learn/heated-vs-unheated-blue-sapphire" },
        { label: "මැණික් පරීක්ෂණ වාර්තාව කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Heat treatment යනු ගලේ වර්ණය හෝ පෙනුම වෙනස් කිරීමට උණුසුම් කිරීමයි.
          බොහෝ නිල්මැණික් / කොරන්ඩම් වෙළෙඳපොළේ මෙය පොදුය. ප්‍රතිකාරයක් තිබීම =
          ගල ව්‍යාජ බව නොවේ. නමුත් එය හෙළිදරව් කළ යුතු අතර මිලට බලපාන්න පුළුවන්.
          ඇසින් පමණක් heated / unheated තීරණය නොකරන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Heat treatment යනු කුමක්ද?">
        <p>
          සමහර මැණික් ගල්වල වර්ණය, පැහැදිලි බව හෝ සමස්ත පෙනුම වැඩිදියුණු කිරීමට
          පාලිත උණුසුම් කිරීමක් භාවිත වේ. මෙය විශේෂයෙන් sapphire සහ ruby
          (කොරන්ඩම්) වෙළෙඳපොළේ බහුලය.
        </p>
      </ArticleSection>

      <ArticleSection heading="ඇයි මෙය වැදගත්ද?">
        <p>
          ප්‍රතිකාර තත්ත්වය වෙළෙඳපොළේ ගල සලකන ආකාරයට සහ මිලට බලපාන්න පුළුවන්.
          Unheated / no indications of heat යන ප්‍රකාශ සමහර ගනුදෙනුකරුවන්ට වැදගත්
          වේ. ඒ නිසා හෙළිදරව් කිරීම සහ වාර්තා කියවීම අත්‍යවශ්‍යය.
        </p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාරය ≠ ව්‍යාජ ගල">
        <p>
          ස්වභාවික ගලකට ප්‍රතිකාරයක් කර තිබිය හැකියි. Lab-grown / synthetic සහ
          imitation වෙනම කාණ්ඩ වේ. ප්‍රතිකාරයක් තිබීම පමණක් ගලේ අනන්‍යතාව
          “ව්‍යාජ” බවට පත් නොකරයි.
        </p>
      </ArticleSection>

      <ArticleSection heading="ඇසින් හඳුනාගත හැකිද?">
        <p>
          බොහෝ අවස්ථාවල නැහැ. වර්ණය හෝ දීප්තිය පමණක් මත heated / unheated තීරණය
          කිරීම අවදානම්. සුදුසුකම් ලත් පරීක්ෂණාගාරයක වාර්තාව සහ එහි සීමාවන්
          කියවන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="වාර්තාවේ සටහන්">
        <p>
          “Heat”, “No indications of heat”, හෝ සමාන වචන සොයන්න. “No indications”
          යනු absolute certainty එකක් නොවන අවස්ථා තිබිය හැකියි. වාර්තාවේ ක්‍රමවේදය
          සහ සීමාවන් කියවන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ප්‍රතිකාර තත්ත්වය ලිඛිතව විමසන්න",
          "වාර්තාවේ treatment section කියවන්න",
          "වාර්තා අංකය සත්‍යාපනය කරන්න",
          "ගලේ විස්තර වාර්තාවට ගැළපේද බලන්න",
          "මිලට ප්‍රතිකාර වැදගත් නම් ස්වාධීන පරීක්ෂාවක් සලකා බලන්න",
        ]}
      />

      <Misconceptions
        items={[
          "Heated = ව්‍යාජ — නැහැ.",
          "Unheated යන වචනය පමණක් ඉහළ මිලක් සහතික කරයි — නැහැ.",
          "ඇසින් heated / unheated කියලා කිව හැකියි — බොහෝ විට නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. එය ගලක් ප්‍රතිකාර කළද යන්න නිශ්චය
          කරන පරීක්ෂණයක් නොවේ. වැදගත් ගනුදෙනුවකදී සුදුසුකම් ලත් පරීක්ෂණාගාරයක්
          හෝ විශේෂඥයකු භාවිත කරන්න.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

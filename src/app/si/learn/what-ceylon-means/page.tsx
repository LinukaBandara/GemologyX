import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";
import { CeylonClaimExplainer } from "@/components/ceylon-claim-explainer";

export const metadata: Metadata = {
  title: "Ceylon Sapphire කියන්නේ මොකක්ද? | GemologyX",
  description:
    "Ceylon / Sri Lanka origin claims — trade use, lab origin opinion, and why the name alone is not a guarantee.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Ceylon Sapphire කියන්නේ මොකක්ද?"
      crumbHref="/si/learn/sri-lankan-blue-sapphire"
      crumbLabel="ශ්‍රී ලංකා නිල්මැණික්"
      lastReviewed="2026-11-05"
      related={[
        { label: "ශ්‍රී ලංකා නිල්මැණික්", href: "/si/learn/sri-lankan-blue-sapphire" },
        { label: "මූලාරම්භ මතය සහ සහතිකය අතර වෙනස", href: "/si/learn/origin-opinion-vs-guarantee" },
        { label: "නිල්මැණික් මාර්ගෝපදේශය", href: "/si/learn/blue-sapphire-complete-guide" },
      ]}
    >
      <QuickAnswer locale="si">
        <p>
          “Ceylon sapphire” යන්න ශ්‍රී ලංකාව හා සම්බන්ධ නිල්මැණික් ගැන කතා කරන
          විට බහුලව ඇසෙන නාමයකි. එහෙත් දැන්වීමක ඇති නම, වර්ණ විස්තරය සහ
          පරීක්ෂණාගාරයක මූලාරම්භ මතය එකම සාක්ෂියක් නොවේ. මූලාරම්භය මිලට බලපාන්නේ
          නම්, ප්‍රකාශය කවුද කළේද සහ එය පදනම් වූ වාර්තාව කුමක්දැයි වෙන්කර බලන්න.
        </p>
      </QuickAnswer>

      <CeylonClaimExplainer />

      <ArticleSection heading="වෙළෙඳ නාමය සහ පරීක්ෂණාගාර මතය">
        <p>විකුණුම් දැන්වීමේ නාමය විකුණුම්කරුගේ ප්‍රකාශයයි. වෙනම පරීක්ෂණාගාර වාර්තාවක් ගලේ ගුණාංග පරීක්ෂා කර, හැකි අවස්ථාවල භූගෝලීය මූලාරම්භය පිළිබඳ මතයක් දක්වයි. නිල්මැණික්වල මූලාරම්භ හඳුනාගැනීමේදී ස්ථාන කිහිපයක ගල්වල සාක්ෂි එකිනෙකට සමාන විය හැකි නිසා ප්‍රතිඵලයේ සීමා තිබිය හැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="ගලේ ගුණාත්මකභාවය වෙනම බලන්න">
        <p>මූලාරම්භය පමණක් ගලේ ගුණාත්මකභාවය හෝ මිල තීරණය නොකරයි. වර්ණය, පැහැදිලි බව, කැපීම, බර සහ ප්‍රතිකාර තත්ත්වයද සලකා බලන්න. රත් කිරීම කර ඇති බවට හෝ නොමැති බවට කරන ප්‍රකාශයද වාර්තාවෙන් වෙනම පරීක්ෂා කළ යුතුයි.</p>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී කරන්න">
        <p>මූලාරම්භය නිසා අමතර මිලක් ගෙවන්නේ නම්, අදාළ පරීක්ෂණ වාර්තාව ඉල්ලන්න. වාර්තා අංකය නිකුත් කළ ආයතනයෙන් තහවුරු කර, treatment සහ origin කොටස් දෙකම කියවන්න. “නියම Ceylon, රත් කර නැහැ” වැනි වාචික ප්‍රකාශයක් ලිඛිත සාක්ෂියක් වෙනුවට භාවිත නොකරන්න.</p>
      </ArticleSection>

      <PracticalChecklist
        locale="si"
        items={[
          "Ceylon / SL claim written ද?",
          "Lab origin opinion vs seller story separate කළාද?",
          "Treatment notes origin එක්කම කියවුවාද?",
        ]}
      />

      <Misconceptions
        locale="si"
        items={[
          "‘Ceylon’ ලෙස නම් කර තිබීමෙන් රත් කිරීමක් කර නැති බව තහවුරු වේ — නැහැ.",
          "‘Ceylon’ ගලක් හැම විටම ඉහළම ගුණාත්මක බවින් යුක්තය — නැහැ; ගලෙන් ගලට වෙනස් වේ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි; කිසිදු ගලක මූලාරම්භය තීරණය කිරීමක් හෝ වටිනාකම් ඇගයීමක් නොකරයි. නිශ්චිත ගලක් සම්බන්ධයෙන් පරීක්ෂණාගාරයක් හෝ සුදුසුකම්ලත් විශේෂඥයෙකුගෙන් උපදෙස් ගන්න.</p>
      </ArticleSection>

      <ArticleSection heading="තවදුරටත් කියවීමට මූලාශ්‍ර">
        <ul className="space-y-3 text-sm">
          <li><a className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent" href="https://www.gia.edu/sapphire/buyers-guide" target="_blank" rel="noreferrer">GIA: Sapphire Buyer’s Guide</a><p className="mt-1 text-muted">වාර්තාවලින් හඳුනාගත හැකි ගුණාංග, ප්‍රතිකාර සහ ඉල්ලීම මත මූලාරම්භ මතය පිළිබඳව.</p></li>
          <li><a className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent" href="https://www.gia.edu/gems-gemology/winter-2019-blue-sapphire-geographic-origin-determination" target="_blank" rel="noreferrer">GIA Gems &amp; Gemology: Blue sapphire origin determination</a><p className="mt-1 text-muted">නිල්මැණික්වල මූලාරම්භ හඳුනාගැනීමේ ක්‍රම සහ සාක්ෂි අතර ඇති අතිච්ඡාදනය පිළිබඳ පර්යේෂණ ලිපිය.</p></li>
        </ul>
      </ArticleSection>
    </ArticleLayout>
  );
}

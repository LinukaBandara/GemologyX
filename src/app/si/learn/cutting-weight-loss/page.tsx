import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් කැපීමේදී බර අඩුවන්නේ ඇයි?",
  description:
    "රළු ගලකින් කැපූ මැණිකක් සකස් කිරීමේදී බර අඩුවීමට හේතු, yield ගණනය, ඇස්තමේන්තු සීමා සහ cutter සමඟ එකඟ විය යුතු කරුණු සිංහලෙන් කියවන්න.",
  alternates: { canonical: "/si/learn/cutting-weight-loss" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="ශ්‍රී ලංකාවේ මැණික් කැපීම"
      readTime="මිනිත්තු 7"
      title="මැණික් කැපීමේදී බර අඩුවන්නේ ඇයි?"
      crumbHref="/si/learn/sri-lanka-gem-cutting-training"
      crumbLabel="ශ්‍රී ලංකාවේ මැණික් කැපීම"
      lastReviewed="2026-11-06"
      related={[
        { label: "රළු මැණික් මිලදී ගැනීමට පෙර", href: "/si/learn/buying-rough-gemstones" },
        { label: "රළු නිල්මැණික්වල ඇතුළත ලක්ෂණ", href: "/si/learn/rough-sapphire-inclusions" },
        { label: "කැපුම ආලෝකයට බලපාන ආකාරය", href: "/learn/gemstone-cut" },
        { label: "ශ්‍රී ලංකාවේ මැණික් කැපීමේ පුහුණුව", href: "/si/learn/sri-lanka-gem-cutting-training" },
      ]}
    >
      <QuickAnswer locale="si">
        <p>
          රළු ගලක් කැපූ මැණිකක් බවට පත් කරන විට, අනවශ්‍ය ද්‍රව්‍ය ඉවත් කිරීම,
          ඉරිතැලීම් මඟහැරීම සහ අපේක්ෂිත හැඩය හා ආලෝක පෙනුම සකස් කිරීම නිසා
          බර අඩුවෙයි. කැපූ පසු ලැබෙන බරට rough weight එක සමාන නොවේ. Yield යනු
          rough බරෙන් finished stone බරට ඉතිරි වන අනුපාතයයි; එය ගලේ තත්ත්වය
          සහ කැපුම් තීරණ මත වෙනස් වන අතර කලින් සහතික කළ නොහැක.
        </p>
      </QuickAnswer>

      <ArticleSection heading="කැපීමේදී ඉවත් කරන ද්‍රව්‍ය මොනවාද?">
        <p>
          Rough ගලක පිටත රළු පෘෂ්ඨය, කැඩුණු කොටස් සහ මතුපිටට ආසන්න හානි තිබිය
          හැකියි. Faceting හෝ cabochon කැපීම සඳහා මුලින්ම හැඩය සකස් කර, පසුව
          අවශ්‍ය මුහුණු සහ polish ලබාදෙයි. ඒ සෑම අදියරකදීම කුඩා ද්‍රව්‍ය ප්‍රමාණයක්
          ඉවත් විය හැකියි. ඇතුළත දුර්වලතා හෝ ඉරිතැලීම් මඟහැරීමට වැඩි කොටසක්
          ඉවත් කිරීමට සිදුවිය හැකි නමුත්, එය rough එක දැක පරීක්ෂා කරන cutter
          කෙනෙකුගේ තාක්ෂණික තීරණයකි.
        </p>
        <p>
          ඒ නිසා බර ඉතිරි කිරීම එකම අරමුණ නොවේ. වර්ණය මුහුණට පෙනෙන ආකාරය,
          colour zoning, pleochroism, පැහැදිලි බව, කැපුමේ සමානුපාත සහ ගලේ
          ශක්තිමත්භාවයද සැලසුමට බලපායි. සමහරවිට වැඩි බරක් ඉතිරි කරන හැඩය
          පෙනුමට හොඳම තේරීම නොවිය හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="Yield අනුපාතය ගණනය කරන්නේ කෙසේද?">
        <p>
          ගණනය සරලයි: finished stone එකේ බර rough එකේ ආරම්භක බරින් බෙදා,
          100න් ගුණ කරන්න. එකම ඒකකය—උදාහරණයක් ලෙස carat—භාවිත කරන්න.
          මෙය සිදුවූ බර ඉතිරිය පෙන්වයි; කැපීමේ ගුණාත්මකභාවය, වර්ණය,
          වටිනාකම හෝ cutter කෙනෙකුගේ හැකියාව තනිව මනින්නේ නැහැ.
        </p>
        <div className="rounded-xl border border-border bg-white p-4 text-sm leading-7">
          <p><strong>උදාහරණයක් පමණයි:</strong> 8.00 ct rough එකකින් 1.60 ct finished stone එකක් ලැබුණා යැයි සිතන්න.</p>
          <p><strong>Yield = 1.60 ÷ 8.00 × 100 = 20%.</strong></p>
          <p>මෙම අංකය ගණනය පෙන්වීමට පමණි; සාමාන්‍ය yield අනුපාතයක් හෝ සැබෑ ගලක් පිළිබඳ පුරෝකථනයක් නොවේ.</p>
        </div>
        <p>
          එකම rough බර ඇති ගල් දෙකක yield එක සමාන විය යුතු නැහැ. හැඩය,
          ඇතුළත ලක්ෂණ, වර්ණ ව්‍යාප්තිය, කැපුම් වර්ගය සහ අවශ්‍ය අවසාන
          සමානුපාත වෙනස් විය හැකියි. එබැවින් අන්තර්ජාලයේ දැකපු වෙනත් ගලක
          yield එක තම ගලට යොදන්න එපා.
        </p>
      </ArticleSection>

      <ArticleSection heading="Cutter කෙනෙකුගෙන් කුමක් අසන්නද?">
        <p>
          කැපීමට පෙර rough එකේ බර හා මිනුම්, දැනටමත් පෙනෙන හානි, යෝජිත
          කැපුම් සැලැස්ම සහ එහි විකල්ප ලිඛිතව සටහන් කරගන්න. එක් නිශ්චිත
          අවසාන බරක් ඉල්ලා සිටිනවාට වඩා, cutter කෙනාගේ ඇස්තමේන්තුවේ
          පදනම සහ ප්‍රධාන අවිනිශ්චිතතා පැහැදිලි කරගන්න. ඔවුන්ට rough එක
          අතට ගෙන පරීක්ෂා කිරීමට ඉඩ ලැබුණාද, ආලෝකය හෝ විශාලනය භාවිත කළාද
යන්නත් සටහන් කරන්න.
        </p>
        <p>
          Rough ගලේ හිමිකාරිත්වය කා සතුව පවතින්නේද, cutter ගාස්තුව,
          කැඩීමක් සිදුවුවහොත් වගකීම, ඉවත් කරන කොටස්වල හිමිකරු, කාර්යය
          නවත්වන හෝ සැලසුම වෙනස් කරන කොන්දේසි සහ අවසානයේ කැපූ ගල සහ
          ඉතිරි rough කොටස් ආපසු ලබාදීම ලිඛිතව එකඟ කරගන්න. පෙර සටහන්
          කළ බර හා ඡායාරූප, කාර්යය නිම වූ පසු ලැබුණු දේ සසඳා බැලීමට
          උපකාරී වේ.
        </p>
      </ArticleSection>

      <PracticalChecklist
        locale="si"
        items={[
          "Rough ගලේ මුල් බර, මිනුම් සහ දිනය සටහන් කළාද?",
          "කලින් තිබූ ඉරිතැලීම්, කැඩීම් සහ මතුපිට හානි සටහන් කර ඡායාරූප ගත්තාද?",
          "Cutting plan එක සහ යෝජිත හැඩයට හේතුව පැහැදිලි කරගත්තාද?",
          "Yield සහ අවසාන බර සහතිකයක් නොව ඇස්තමේන්තුවක් බව තේරුම් ගත්තාද?",
          "Cutter ගාස්තුව, හානි අවදානම සහ ඉතිරි rough කොටස්වල හිමිකාරිත්වය ලිඛිතව එකඟ කරගත්තාද?",
          "කැපීමෙන් පසු නිමි ගල සහ ඉතිරි කොටස් නැවත කිරා සටහන් කරගන්නවාද?",
        ]}
      />

      <Misconceptions
        locale="si"
        items={[
          "රළු ගලේ බර finished gem එකේ බරට ආසන්න විය යුතුයි — නැහැ; කැපීමේදී ද්‍රව්‍ය ඉවත් වේ.",
          "ඉහළ yield එකක් හැමවිටම හොඳ කැපුමක් බව පෙන්වයි — එය තනිව ගුණාත්මකභාවය හෝ අගය නොපෙන්වයි.",
          "Cutting plan එකක් අවසාන බර සහතික කරයි — එය පරීක්ෂණ සහ ඇස්තමේන්තුවක් පමණි.",
        ]}
      />

      <ArticleSection heading="තවත් කියවන්න">
        <p>
          Rough එකක් මිලදී ගැනීමට පෙර අනන්‍යතාව, treatment, මුළු වියදම සහ
          ලිඛිත කොන්දේසි ගැන <Link href="/si/learn/buying-rough-gemstones">rough gemstone buying guide</Link> බලන්න.
          Sapphire rough හි ලක්ෂණ සහ ඉරිතැලීම් සඳහා <Link href="/si/learn/rough-sapphire-inclusions">inclusion guide</Link> ද,
          ආලෝකය සහ proportions කැපුමට බලපාන ආකාරය සඳහා <Link href="/learn/gemstone-cut">English cut guide</Link> ද කියවන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="මූලාශ්‍ර">
        <ul>
          <li><a href="https://www.gia.edu/sapphire-quality-factor" target="_blank" rel="noreferrer">GIA: Sapphire Quality Factors</a> — රළු sapphire හැඩය, zoning සහ orientation කැපුම් තීරණවලට බලපාන ආකාරය.</li>
          <li><a href="https://www.gia.edu/gia-news-research/value-factors-design-cut-quality-colored-gemstone-value-factors" target="_blank" rel="noreferrer">GIA: Colored Gemstone Value Factors — Design and Cut Quality</a> — rough quality සහ කැපීමේ trade-offs ගැන.</li>
        </ul>
        <p>මෙම ලිපිය අධ්‍යාපනික තොරතුරු සඳහා පමණි. එය නිශ්චිත ගලක yield, වටිනාකම හෝ කැපුම් ප්‍රතිඵල සහතික නොකරයි.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

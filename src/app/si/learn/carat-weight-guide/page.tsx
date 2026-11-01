import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "කැරට් බර තේරුම් ගැනීම | GemologyX",
  description:
    "මැණික්වල carat weight, gram conversion, mm dimensions, cut, density සහ price-per-carat අතර වෙනස පැහැදිලි කරන මාර්ගෝපදේශය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 8"
      title="මැණික්වල කැරට් බර තේරුම් ගැනීම"
      crumbHref="/si/learn"
      crumbLabel="සිංහල මැණික් දැනුම"
      lastReviewed="2026-11-02"
      related={[
        { label: "කැරට් ↔ ග්‍රෑම් පරිවර්තකය", href: "/si/learn/carat-vs-gram" },
        { label: "නිල්මැණික් කැරට් මිල", href: "/si/learn/blue-sapphire-price-per-carat" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          1 carat (ct) = 0.2 gram (g), එනම් 1 gram = 5 carats.
          Carat කියන්නේ බර මනින ඒකකයක් මිස ගලේ දිග හෝ පළල නොවේ.
          එකම carat බර ඇති ගල් දෙකක් cut, හැඩය සහ density අනුව
          වෙනස් ප්‍රමාණයෙන් පෙනෙන්න පුළුවන්. බර පමණක් ගුණාත්මකභාවය
          හෝ මිල තීරණය කරන්නේ නැහැ.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Carat කියන්නේ මොකක්ද?">
        <p>
          Carat (ct) යනු මැණික් සහ අනෙකුත් gemstones වල බර සඳහන් කිරීමට
          භාවිත කරන ඒකකයකි. එක් carat එකක් ග්‍රෑම් 0.2කට සමානයි.
          ඒ නිසා ග්‍රෑම් අගය carat බවට පරිවර්තනය කිරීමට 5න් ගුණ කළ හැකි අතර,
          carat අගය ග්‍රෑම් බවට පරිවර්තනය කිරීමට 5න් බෙදිය හැකියි.
        </p>
        <ul>
          <li>1 ct = 0.2 g</li>
          <li>2 ct = 0.4 g</li>
          <li>5 ct = 1 g</li>
          <li>10 ct = 2 g</li>
        </ul>
        <p>
          තවත් අගයන් ගණනය කිරීමට{" "}
          <a href="/si/learn/carat-vs-gram">කැරට් සහ ග්‍රෑම් පරිවර්තකය</a>{" "}
          භාවිත කරන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="Carat බර සහ millimetre ප්‍රමාණය එකක් නොවේ">
        <p>
          Carat මගින් කියන්නේ බරයි. Millimetre (mm) මගින් කියන්නේ ගලේ
          භෞතික මානයන් — උදාහරණයක් ලෙස දිග, පළල සහ ගැඹුරයි. මිලදී ගැනීමේදී
          carat බර පමණක් නොව, mm dimensions ද ඉල්ලාගන්න.
        </p>
        <p>
          ගලේ හැඩය සහ cut එක අනුව බර බෙදී යන ආකාරය වෙනස් වේ. ගැඹුරු
          cut එකක් ඇති ගලක් වැඩි බරක් රඳවාගෙන ඉදිරිපසින් කුඩා ලෙස
          පෙනෙන්න පුළුවන්. වෙනත් ගලක් එම බරට සාපේක්ෂව පළලින් විශාල
          ලෙස පෙනෙන්න පුළුවන්. ඒ නිසා carat අගය පමණක් බලා පෙනුම
          අනුමාන කරන්න එපා.
        </p>
      </ArticleSection>

      <ArticleSection heading="Density සහ gemstone වර්ගය බලපාන්නේ කොහොමද?">
        <p>
          විවිධ gemstone වර්ගවල density එක සමාන නොවේ. එබැවින් එකම
          carat බරක් තිබුණත් ඒවායේ මාන එකිනෙකට වෙනස් විය හැකියි.
          එකම gemstone වර්ගය තුළ වුවද cut සහ proportions නිසා
          පෙනෙන ප්‍රමාණය වෙනස් විය හැකියි.
        </p>
        <p>
          ඒ නිසා වෙනත් ගලක mm ප්‍රමාණයක් භාවිත කර ඔබේ ගලේ බර
          හෝ වටිනාකම නිශ්චිතව තීරණය කළ නොහැකියි. නිශ්චිත ගලේ
          බර calibrated scale එකකින් සහ dimensions සුදුසු
          measuring tool එකකින් මැනිය යුතුයි.
        </p>
      </ArticleSection>

      <ArticleSection heading="Price-per-carat ගණනය කරන්නේ කොහොමද?">
        <p>
          Price-per-carat යනු මුළු මිල carat බරෙන් බෙදූ විට ලැබෙන
          අගයයි. උදාහරණයක් ලෙස, ගලක මුළු මිල රු. 100,000ක් සහ
          බර 2 ct නම්, ගණිතමය price-per-carat අගය රු. 50,000යි.
          මෙය ගණනය පැහැදිලි කිරීමට පමණක් යොදාගත් උපකල්පිත
          උදාහරණයකි; වෙළඳපොළ මිලක් නොවේ.
        </p>
        <p>
          එකම gemstone වර්ගයේ ගල්වලට වුවද colour, clarity,
          treatment, cut, origin information, durability සහ
          market demand අනුව මිල වෙනස් විය හැකියි. Weight bracket
          වෙනස් වීමත් per-carat asking price එකට බලපාන්න පුළුවන්.
          ඒ නිසා carat අගය පමණක් මත මිල සාධාරණදැයි තීරණය නොකරන්න.
        </p>
        <p>
          නිල්මැණික් සඳහා මිල තීරණයට බලපාන කරුණු ගැන{" "}
          <a href="/si/learn/blue-sapphire-price-per-carat">නිල්මැණික් කැරට් මිල</a>{" "}
          මාර්ගෝපදේශය කියවන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී තහවුරු කරගන්න">
        <p>
          බර, dimensions සහ මිල වෙන වෙනම සටහන් කරගන්න. බර
          මැනූ ආකාරය, ගල loose ද jewellery setting එකකද,
          සහ රිසිට්පතේ සඳහන් බර එම ගලටම අදාළදැයි තහවුරු කරන්න.
          Setting එකක ඇති ගලක් නම් setting එකේ මුළු බර සහ
          gemstone එකේ බර එකක් ලෙස නොගන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "බර carat (ct) වලින් ලිඛිතව සටහන් කර තිබේද?",
          "දිග × පළල × ගැඹුර mm වලින් ලබාගත්තාද?",
          "මැන ඇත්තේ gemstone එකේ බරද, නැත්නම් මුළු jewellery item එකේ බරද?",
          "Price-per-carat සහ total price වෙන වෙනම පැහැදිලිද?",
          "Colour, clarity, treatment සහ cut වැනි කරුණුත් සසඳා බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "වැඩි carat = සෑම විටම වඩා හොඳ ගල — නැහැ; ගුණාත්මකභාවයත් වැදගත්.",
          "එකම carat = එකම mm size — නැහැ; cut සහ density වෙනස් විය හැකියි.",
          "Price-per-carat එකම නම් ගල් දෙකේ වටිනාකමත් සමානයි — අවශ්‍යයෙන්ම නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          Carat යනු බර පමණයි. ගලක් මිලදී ගැනීමේදී carat, mm dimensions,
          quality, treatment සහ ලේඛන එකට සලකා බලන්න. මෙම ලිපිය
          අධ්‍යාපනික මාර්ගෝපදේශයක් වන අතර නිශ්චිත ගලක valuation එකක් නොවේ.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

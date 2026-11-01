import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික්වල Heat Treatment: ක්‍රියාවලිය සහ හෙළිදරව් කිරීම | GemologyX",
  description:
    "මැණික්වල heat treatment යනු කුමක්ද, එය පෙනුමට හා වෙළඳ වටිනාකමට බලපාන ආකාරය, වාර්තා කියවීම සහ ප්‍රතිකාර තොරතුරු තහවුරු කිරීම.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 9"
      title="මැණික්වල උණුසුම් ප්‍රතිකාරය (Heat Treatment)"
      crumbHref="/si/learn/gemstone-treatment-disclosure"
      crumbLabel="ප්‍රතිකාර හෙළි කිරීම"
      lastReviewed="2026-11-02"
      related={[
        { label: "ප්‍රතිකාර තොරතුරු හෙළි කිරීම", href: "/si/learn/gemstone-treatment-disclosure" },
        { label: "Heated සහ unheated නිල්මැණික්", href: "/si/learn/heated-vs-unheated-blue-sapphire" },
        { label: "Diffusion treatment", href: "/si/learn/diffusion-treatment-guide" },
        { label: "Fracture filling", href: "/si/learn/fracture-filling-guide" },
        { label: "මැණික් පරීක්ෂණ වාර්තාව කියවීම", href: "/si/learn/how-to-read-gem-report" },
      ]}
    >
      <QuickAnswer>
        <p>
          Heat treatment යනු පාලිත උෂ්ණත්ව තත්ත්ව යටතේ මැණික් ගලක් රත් කර
          එහි වර්ණය හෝ පෙනුම වෙනස් කිරීමට භාවිත කළ හැකි treatment ක්‍රියාවලියකි.
          එය ගලේ අනන්‍යතාවට සමාන දෙයක් නොවේ: ස්වභාවික ගලකට treatment කර තිබිය
          හැකියි. Treatment තත්ත්වය ඇසින් පමණක් තීරණය නොකර, විකුණුම්කරුගේ
          disclosure සහ සුදුසු පරීක්ෂණ වාර්තාව එකට සලකා බලන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Heat treatment කියන්නේ කුමක්ද?">
        <p>
          Heat treatment යනු මැණික් ගලක් පාලිත උෂ්ණත්වයකට නිරාවරණය කරන
          treatment ක්‍රමයකි. එහි අරමුණ සහ ප්‍රතිඵල ගලේ වර්ගය, එහි මුල්
          තත්ත්වය සහ භාවිත කරන ක්‍රියාවලිය අනුව වෙනස් විය හැකියි.
          Sapphire සහ ruby ඇතුළු corundum වෙළඳාමේදී මෙම වචනය නිතර
          හමුවන නමුත්, සෑම ගලකටම එකම ක්‍රමය හෝ එකම ප්‍රතිඵලය ලැබෙන්නේ නැහැ.
        </p>
        <p>
          “Heated” යනුවෙන් සඳහන් වූ පමණින් ගලේ වර්ණය කොපමණ වෙනස් වීද,
          ක්‍රියාවලිය කුමක්ද, හෝ ගලේ ගුණාත්මකභාවය කුමක්ද යන්න සම්පූර්ණයෙන්
          දැනගත නොහැකියි. ඒ සඳහා ගලට අදාළ විස්තර සහ පරීක්ෂණ සන්දර්භය අවශ්‍යයි.
        </p>
      </ArticleSection>

      <ArticleSection heading="Treatment එකෙන් වෙනස් විය හැක්කේ මොනවාද?">
        <p>
          සමහර ගල්වල heat treatment මගින් වර්ණයේ පෙනුමට හෝ ඇතුළත
          ලක්ෂණවලට බලපෑම් ඇති විය හැකියි. නමුත් ප්‍රතිඵලය ගලෙන් ගලට
          වෙනස් වන නිසා “heat කළොත් අනිවාර්යයෙන් වර්ණය වැඩි වෙනවා”
          වැනි පොදු සහතිකයක් ලබාදිය නොහැකියි.
        </p>
        <p>
          Treatment කිරීමට පෙර සහ පසු තත්ත්වය පිළිබඳ විශ්වාසදායක
          ලේඛන නොමැති නම්, වෙනස නිශ්චිතව ප්‍රකාශ කිරීම අපහසු විය හැකියි.
          එබැවින් වෙළඳ දැන්වීමක හෝ විකුණුම්කරුගේ වචනවල ඇති
          “improved”, “enhanced” වැනි පදවලට පමණක් රඳා නොසිටින්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="Heat treatment සහ වෙනත් treatments අතර වෙනස">
        <p>
          Heat treatment යනු treatment කාණ්ඩයකි. Diffusion treatment,
          fracture filling සහ dyeing වැනි ක්‍රම එකම දෙයක් නොවේ.
          ඒවායේ ක්‍රියාවලිය, හඳුනාගැනීම සහ disclosure අවශ්‍යතා වෙනස්
          විය හැකියි.
        </p>
        <ul>
          <li><a href="/si/learn/diffusion-treatment-guide">Diffusion treatment</a> — මතුපිටට හෝ ගලේ කොටසකට අදාළ වෙනස්කම් ඇති කළ හැකි වෙනම ක්‍රියාවලියක්.</li>
          <li><a href="/si/learn/fracture-filling-guide">Fracture filling</a> — ඉරිතැලීම් හෝ හිස්තැන් පිරවීම සම්බන්ධ ක්‍රියාවලියක්.</li>
          <li><a href="/si/learn/gemstone-treatment-disclosure">Treatment disclosure</a> — සිදු කළ හෝ දන්නා වැඩිදියුණු කිරීම් ගැන ගනුදෙනුකරුට පැහැදිලි කිරීම.</li>
        </ul>
        <p>
          මෙම නම් එකිනෙකට හුවමාරු කර භාවිත නොකරන්න. ගලට කර ඇති
          ක්‍රියාවලිය කුමක්දැයි නිශ්චිතව විමසන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="Heated, unheated සහ natural යන පද">
        <p>
          Natural යන්න ගලේ මූලාරම්භය හෝ ස්වභාවිකද යන්නට අදාළ වන අතර,
          heated / unheated යන්න treatment තත්ත්වයට අදාළ වේ. ඒ නිසා
          natural සහ heated යන දෙක එකට සත්‍ය විය හැකියි. Treatment
          කළ ගලක් අනිවාර්යයෙන් synthetic හෝ imitation එකක් නොවේ.
        </p>
        <p>
          “Unheated” යන ප්‍රකාශයත් වාර්තාවේ සන්දර්භය තුළ කියවිය යුතුයි.
          වාර්තාවක “no indications of heat” ලෙස සඳහන් වීම පරීක්ෂණයේදී
          එවැනි ලක්ෂණ හඳුනා නොගත් බව පෙන්වයි; එය සෑම ක්‍රියාවලියක්ම
          සියලු තත්ත්වයන් යටතේ බැහැර කරන අසීමිත සහතිකයක් ලෙස
          අර්ථකථනය නොකරන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="පරීක්ෂණ වාර්තාවේ treatment කොටස කියවන්නේ කොහොමද?">
        <p>
          වාර්තාවේ gemstone identification, treatment comments,
          report number සහ limitations යන කොටස් කියවන්න. වාර්තාව
          නිකුත් කළ ආයතනයේ නිල ක්‍රමයෙන් report number එක
          සත්‍යාපනය කරන්න. වාර්තාවේ ඡායාරූපයක් හෝ බර/මාන සඳහන්
          නම්, ඒවා ඔබ ඉදිරියේ ඇති ගලට ගැළපේදැයි පරීක්ෂා කරන්න.
        </p>
        <p>
          වාර්තාවක වචන පමණක් තේරුම් ගැනීමට අපහසු නම්, නිකුත් කළ
          laboratory එකෙන් හෝ සුදුසුකම් ලත් gemologist කෙනෙකුගෙන්
          පැහැදිලි කිරීමක් ඉල්ලන්න. Report එකක් තිබීමෙන් අනාගත
          resale price එකක් හෝ ගලේ සියලු වෙළඳ ගුණාංග සහතික
          වන්නේ නැහැ.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගල natural, synthetic හෝ imitation කුමක්දැයි වෙනම තහවුරු කරගන්න",
          "දන්නා heat treatment සහ වෙනත් treatments ගැන ලිඛිත disclosure ඉල්ලන්න",
          "වාර්තාවේ treatment wording සහ limitations කියවන්න",
          "Report number එක නිකුත් කළ laboratory එකෙන් සත්‍යාපනය කරන්න",
          "වාර්තාවේ විස්තර ඔබේ ගලට ගැළපේදැයි පරීක්ෂා කරන්න",
          "Treatment තත්ත්වය මිලට වැදගත් නම් ස්වාධීන පරීක්ෂාවක් සලකා බලන්න",
        ]}
      />

      <Misconceptions
        items={[
          "Heated = fake — නැහැ; treatment සහ identity වෙනස් කරුණු දෙකක්.",
          "Natural = unheated — නැහැ; natural ගලකට treatment කර තිබිය හැකියි.",
          "වර්ණය ලස්සන නම් unheated — පෙනුම පමණක් ප්‍රමාණවත් සාක්ෂියක් නොවේ.",
          "No indications of heat = සෑම සැකයක්ම ඉවත් කරන සහතිකයක් — වාර්තාවේ සීමාවන් කියවිය යුතුයි.",
        ]}
      />

      <ArticleSection heading="තවත් කියවන්න">
        <p>
          Sapphire සම්බන්ධ buyer comparison සඳහා{" "}
          <a href="/si/learn/heated-vs-unheated-blue-sapphire">heated සහ unheated නිල්මැණික් අතර වෙනස</a>{" "}
          කියවන්න. Treatment පිළිබඳ සම්පූර්ණ disclosure සඳහා{" "}
          <a href="/si/learn/gemstone-treatment-disclosure">ප්‍රතිකාර තොරතුරු හෙළි කිරීම</a>{" "}
          බලන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          Heat treatment යනු ගලේ පෙනුමට බලපෑම් කළ හැකි treatment ක්‍රියාවලියක්
          මිස ගලේ වටිනාකම හෝ අනන්‍යතාව තනිව තීරණය කරන ලේබලයක් නොවේ.
          වැදගත් ගනුදෙනුවකදී ලිඛිත disclosure, සත්‍යාපිත වාර්තාව සහ
          ස්වාධීන උපදෙස් භාවිත කරන්න. මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}

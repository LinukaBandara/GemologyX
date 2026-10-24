import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "පුෂ්පරාග රළු ගලක මිල තක්සේරු කිරීම | GemologyX",
  description:
    "කහ sapphire රළු ගලක් මිලදී ගැනීමට පෙර කැපීම, වර්ණය, ඉරිතැලීම්, ප්‍රතිකාර සහ පරීක්ෂණ.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="පුෂ්පරාග රළු ගලක මිල තක්සේරු කරන්නේ කෙසේද?"
      crumbHref="/si/learn/rough-blue-sapphire-value"
      crumbLabel="රළු නිල්මැණික් වටිනාකම"
      lastReviewed="2026-10-24"
      related={[
        { label: "රළු නිල්මැණික් වටිනාකම", href: "/si/learn/rough-blue-sapphire-value" },
        { label: "රළු ගල් — අසන්න ඕනේ ප්‍රශ්න", href: "/si/learn/rough-gem-questions" },
        { label: "පුෂ්පරාග vs Topaz", href: "/si/learn/yellow-sapphire-vs-topaz" },
        { label: "රළු මැණික් මිලදී ගැනීම", href: "/si/learn/buying-rough-gemstones" },
      ]}
    >
      <QuickAnswer>
        <p>
          රළු කහ sapphire හි වටිනාකම අවිනිශ්චිතය. කැපූ පසු බර, වර්ණය සහ
          පැහැදිලි බව කලින් සහතික කළ නොහැකියි. අනන්‍යතාව, ඉරිතැලීම්, කැපීමේ
          අවදානම සහ ප්‍රතිකාර ලිඛිතව පැහැදිලි කරගන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="අනන්‍යතාව">
        <p>Yellow sapphire (corundum) ද, topaz / citrine ද ලිඛිතව පැහැදිලි කරගන්න.</p>
      </ArticleSection>

      <ArticleSection heading="වර්ණය සහ ඉරිතැලීම්">
        <p>විවිධ ආලෝකයේ බලන්න. ඉරිතැලීම් / කැඩුණු කොන් කැපීමට බලපාන්න පුළුවන්.</p>
      </ArticleSection>

      <ArticleSection heading="කැපීමේ අවදානම">
        <p>රළු බර ≠ කැපූ පසු බර. විකුණුම්කරු කියන අනාවැකි = සහතික නොවේ.</p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර සහ වාර්තා">
        <p>Heat ආදිය තිබේද විමසන්න. මිල ඉහළ නම් වාර්තාව / ස්වාධීන පරීක්ෂාව සලකා බලන්න.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "අනන්‍යතාව ලිඛිතව තියෙනවාද?",
          "ඉරිතැලීම් / හානි සටහන් කළාද?",
          "කැපීමේ අවදානම තේරුම් ගත්තාද?",
          "ප්‍රතිකාර සහ මිල කොන්දේසි ලිඛිතව තියෙනවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "කැපූ පසු බර = සහතික — නැහැ.",
          "කහ පැහැය = සෑම විටම sapphire — topaz / citrine ද තියෙනවා.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>රළු ගලක වටිනාකම තක්සේරු කිරීම අවිනිශ්චිතය. මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

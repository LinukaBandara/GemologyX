import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික්වල කැරට් සහ ග්‍රෑම් අතර වෙනස",
  description: "මැණික් බර මැනීමේදී කැරට් සහ ග්‍රෑම් අතර වෙනස සරල සිංහලෙන් ඉගෙන ගන්න. බර සහ මිල පටලවා නොගන්න.",
};

export default function Page() {
  return (
    <ArticleLayout category="සිංහල මැණික් දැනුම" readTime="මිනිත්තු 3" title="මැණික්වල කැරට් සහ ග්‍රෑම් අතර වෙනස" crumbHref="/learn" crumbLabel="Learn Gemology"
      related={[
        { label: "පුෂ්පරාග රළු ගලක මිල", href: "/si/learn/rough-yellow-sapphire-value" },
        { label: "Carat to Gram Tool", href: "/tools/carat-to-gram" },
        { label: "Questions to Ask a Gem Dealer", href: "/learn/questions-to-ask-gem-dealer" },
      ]}>
      <ArticleSection heading="කැරට් කියන්නේ මොකක්ද?">
        <p>මැණික්වල බර සඳහන් කිරීමට බහුලව භාවිත කරන ඒකකයක් තමයි කැරට් (carat). එක් කැරට් එකක් ග්‍රෑම් 0.2කට සමානයි. ඒ අනුව කැරට් 5ක් ග්‍රෑම් 1කට සමාන වේ.</p>
      </ArticleSection>
      <ArticleSection heading="ග්‍රෑම් සහ කැරට් වෙනස් වන්නේ කොහොමද?">
        <p>ග්‍රෑම් යනු බොහෝ ද්‍රව්‍යවල බර මැනීමට භාවිත කරන ඒකකයකි. මැණික් වෙළෙඳාමේදී කුඩා බර පහසුවෙන් දැක්වීමට කැරට් භාවිත කරන අවස්ථා බහුලයි. ඒ නිසා විකුණුම්කරු කියන ඒකකය පැහැදිලිව අසාගන්න.</p>
      </ArticleSection>
      <ArticleSection heading="සරල පරිවර්තන කිහිපයක්">
        <ul className="list-disc space-y-1 pl-5">
          <li>1 කැරට් = ග්‍රෑම් 0.2</li>
          <li>5 කැරට් = ග්‍රෑම් 1</li>
          <li>10 කැරට් = ග්‍රෑම් 2</li>
          <li>1 ග්‍රෑම් = කැරට් 5</li>
        </ul>
        <p>වෙනත් බරක් පරිවර්තනය කිරීමට අපගේ <a className="underline" href="/tools/carat-to-gram">කැරට්-ග්‍රෑම් පරිවර්තකය</a> භාවිත කළ හැකියි.</p>
      </ArticleSection>
      <ArticleSection heading="වැදගත්: බර වැඩි වුණා කියලා වටිනාකම අනිවාර්යයෙන් වැඩි වෙන්නේ නැහැ">
        <p>මැණික් දෙකක බර සමාන වුවත් වර්ණය, පැහැදිලි බව, ගල් වර්ගය, ප්‍රතිකාර, කැපීම සහ ඉල්ලුම වෙනස් විය හැකියි. එම නිසා බර පමණක් බලා මිල තීරණය නොකරන්න.</p>
      </ArticleSection>
      <ArticleSection heading="මිලදී ගැනීමට පෙර">
        <p>ගලේ බර කුමන ඒකකයෙන් මැන තිබේදැයි තහවුරු කරගන්න. හැකි නම් නිවැරදි තරාදියකින් නැවත මැනීම සහ බර ලිඛිතව රිසිට්පතේ සටහන් කිරීම සුදුසුයි.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

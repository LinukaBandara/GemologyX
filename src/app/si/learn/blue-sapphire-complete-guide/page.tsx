import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "නිල්මැණික් සම්පූර්ණ මාර්ගෝපදේශය | GemologyX",
  description: "නිල්මැණික් හඳුනාගැනීම, වර්ණය, වටිනාකම, ප්‍රතිකාර, රළු ගල්, පරීක්ෂණ වාර්තා සහ ආරක්ෂිත මිලදී ගැනීම ගැන සිංහල මාර්ගෝපදේශ එකම තැනකින්.",
};

const guides = [
  { title: "නිල්මැණික් හඳුනාගැනීම", description: "නිල් පැහැති ගලක් නිල්මැණිකක් බව තහවුරු කිරීමේ මූලික කරුණු.", href: "/si/learn/identify-sapphire" },
  { title: "වටිනාකමට බලපාන සාධක", description: "වර්ණය, පැහැදිලි බව, කැපීම, බර සහ ප්‍රතිකාර.", href: "/si/learn/blue-sapphire-value-factors" },
  { title: "ශ්‍රී ලංකාවේ නිල්මැණික්", description: "Ceylon sapphire නාමය සහ මූලාරම්භය පිළිබඳ ප්‍රකාශ.", href: "/si/learn/sri-lankan-blue-sapphire" },
  { title: "උණුසුම් ප්‍රතිකාර", description: "ප්‍රතිකාර පිළිබඳ හෙළිදරව් කිරීම සහ වාර්තා කියවීම.", href: "/si/learn/heated-sapphire-guide" },
  { title: "රළු ගලක ඇතුළත ලක්ෂණ", description: "ඉරිතැලීම්, ඇතුළත් ද්‍රව්‍ය සහ කැපීමේ අවදානම්.", href: "/si/learn/rough-sapphire-inclusions" },
  { title: "ස්වභාවික සහ කෘත්‍රිම ගල්", description: "පෙනුම සමාන වුවත් වෙනස් දේවල් වෙන්කර තේරුම් ගැනීම.", href: "/si/learn/natural-vs-synthetic-gemstones" },
  { title: "පරීක්ෂණ වාර්තාව කියවීම", description: "ගල් වර්ගය, ප්‍රතිකාර සහ වාර්තා සීමාවන් පරීක්ෂා කිරීම.", href: "/si/learn/how-to-read-gem-report" },
  { title: "මිලදී ගැනීමේ පරීක්ෂණ ලැයිස්තුව", description: "ගනුදෙනුවකට පෙර ලිඛිතව තහවුරු කරගත යුතු කරුණු.", href: "/si/learn/gemstone-buying-checklist" },
  { title: "වංචා අවදානම් හඳුනාගැනීම", description: "අතිශය සහතික, පීඩනයෙන් විකිණීම සහ ලේඛන පිළිබඳ සැලකිලිමත් වන්න.", href: "/si/learn/avoid-gemstone-scams" },
  { title: "ප්‍රතිකාර තොරතුරු හෙළි කිරීම", description: "විකුණුම්කරුගෙන් පැහැදිලි සහ ලිඛිත තොරතුරු ලබාගැනීම.", href: "/si/learn/gemstone-treatment-disclosure" },
];

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 8"
      title="නිල්මැණික් ගැන සම්පූර්ණ මාර්ගෝපදේශය"
      crumbHref="/learn"
      crumbLabel="Learn Gemology"
      related={[
        { label: "නිල්මැණික් හඳුනාගැනීම", href: "/si/learn/identify-sapphire" },
        { label: "නිල්මැණිකක වටිනාකමට බලපාන කරුණු", href: "/si/learn/blue-sapphire-value-factors" },
        { label: "ශ්‍රී ලංකාවේ නිල්මැණික්", href: "/si/learn/sri-lankan-blue-sapphire" },
      ]}
    >
      <ArticleSection heading="මෙම මාර්ගෝපදේශය භාවිත කරන ආකාරය">
        <p>නිල්මැණික් ගැන මුල සිට ඉගෙනගන්නා අය සඳහා ලිපි අනුපිළිවෙළකට එකතු කර ඇත. මුලින් ගල හඳුනාගැනීම, ඉන්පසු ගුණාත්මකභාවය සහ වටිනාකම, ඊළඟට ප්‍රතිකාර සහ පරීක්ෂණ වාර්තා, අවසානයේ මිලදී ගැනීමේ ආරක්ෂාව කියවන්න.</p>
      </ArticleSection>
      <ArticleSection heading="නිල්මැණික් ලිපි එකතුව">
        <div className="not-prose grid gap-3">
          {guides.map((guide, index) => (
            <Link key={guide.href} href={guide.href} className="group flex items-start gap-4 rounded-xl border border-[var(--border)] p-4 transition-colors hover:bg-[var(--surface)]">
              <span className="pt-0.5 text-xs text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium">{guide.title}</span>
                <span className="mt-1 block text-sm leading-6 text-[var(--muted)]">{guide.description}</span>
              </span>
              <ArrowUpRight size={16} className="mt-1 shrink-0" />
            </Link>
          ))}
        </div>
      </ArticleSection>
      <ArticleSection heading="නිල්මැණික් මිල තක්සේරු කිරීමේදී">
        <p>බර හෝ වර්ණය පමණක් මත මිල තීරණය නොකරන්න. ගලේ අනන්‍යතාව, වර්ණයේ ගුණාත්මකභාවය, පැහැදිලි බව, කැපීම, ප්‍රතිකාර තත්ත්වය, වාර්තා සහ ගනුදෙනු කොන්දේසි එකට සලකා බලන්න. රළු ගලකින් කැපූ පසු ලැබෙන බර සහ ගුණාත්මකභාවය කලින් නිශ්චිතව සහතික කළ නොහැකියි.</p>
      </ArticleSection>
      <ArticleSection heading="මෙහි සීමාව">
        <p>මෙය අධ්‍යාපනික මාර්ගෝපදේශයකි; ගලක් සහතිකව හඳුනාගැනීමක්, නිශ්චිත වෙළෙඳපොළ මිලක් හෝ ලාභයක් පොරොන්දු නොවේ. මිල අධික ගනුදෙනුවකට පෙර සුදුසුකම් ලත් ස්වාධීන මැණික් පරීක්ෂණාගාරයක හෝ විශේෂඥයකුගේ සහාය ලබාගන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

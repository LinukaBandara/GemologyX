import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "නිල්මැණික් රැකවරණය සහ කල්පැවැත්ම",
  description:
    "නිල්මැණික් ගලක් පිරිසිදු කිරීම, ගබඩා කිරීම, උෂ්ණත්වය සහ එදිනෙදා භාවිතයේදී රැකගන්නා ආකාරය ගැන ප්‍රායෝගික සිංහල මාර්ගෝපදේශය.",
  alternates: { canonical: "/si/learn/blue-sapphire-care" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="නිල්මැණික් රැකවරණය සහ කල්පැවැත්ම"
      crumbHref="/si/learn/blue-sapphire-complete-guide"
      crumbLabel="නිල්මැණික් මාර්ගෝපදේශය"
      lastReviewed="2026-11-06"
      related={[
        { label: "නිල්මැණික් සම්පූර්ණ මාර්ගෝපදේශය", href: "/si/learn/blue-sapphire-complete-guide" },
        { label: "නිල්මැණිකක වටිනාකම", href: "/si/learn/blue-sapphire-value-factors" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/blue-sapphire-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          නිල්මැණික් (කොරන්ඩම්) දෘඪතාව ඉහළ නිසා බොහෝ එදිනෙදා භාවිතයට සුදුසුය.
          එහෙත් ඉරිතැලීම්, උණුසුම්/සීතල හදිසි වෙනස්කම්, රසායනික ද්‍රව්‍ය සහ අනෙකුත්
          ගල් සමඟ ගැටීමෙන් හානි විය හැකියි. මෘදු සබන් + උණුසුම් ජලයෙන් පිරිසිදු
          කිරීම සාමාන්‍යයෙන් ආරක්ෂිතය; ultrasonic/steam සමහර ගල්වලට අවදානම් විය
          හැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="දෘඪතාව සහ කල්පැවැත්ම">
        <p>
          නිල්මැණික් කොරන්ඩම් පවුලට අයත් වන අතර Mohs දෘඪතාව ඉහළය. එයින් අදහස්
          වන්නේ බොහෝ එදිනෙදා ඇඳුම් භාවිතයට එය සාපේක්ෂව ශක්තිමත් බවයි. නමුත්
          දෘඪතාව ඉහළ වුවත් ඉරිතැලීම් හෝ අභ්‍යන්තර ආතතිය ඇති ගල් බිඳී යා හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="පිරිසිදු කිරීම">
        <p>
          බොහෝ අවස්ථාවල මෘදු සබන් සහ උණුසුම් (උණුසුම් නොවන) ජලය සහ මෘදු බුරුසුවක්
          ප්‍රමාණවත්ය. Ultrasonic හෝ steam cleaners සමහර ගල්වලට (විශේෂයෙන්
          ඉරිතැලීම් හෝ ප්‍රතිකාර ඇති ඒවාට) අවදානම් විය හැකියි. අවිනිශ්චිත නම්
          ආභරණ ශිල්පියකු හෝ මැණික් විශේෂඥයකුගෙන් විමසන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ගබඩා කිරීම සහ ඇඳීම">
        <p>
          අනෙකුත් ගල් හෝ ලෝහ සමඟ ගැටී ඉරිතැලීම් ඇති නොවන ලෙස වෙනම බෑග් එකක හෝ
          කොටුවක තබන්න. දැඩි ක්‍රීඩා, උද්‍යාන කටයුතු හෝ රසායනික ද්‍රව්‍ය සම්බන්ධ
          කටයුතුවලදී ආභරණ ඉවත් කරන්න. හදිසි උෂ්ණත්ව වෙනස්කම් (උදා: උණුසුම්
          සිට අධික සීතල) වළක්වන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර සහ රැකවරණය">
        <p>
          Untreated, heat-treated සහ ඇතැම් lattice-diffusion-treated sapphire
          සඳහා මෘදු සබන් සහ ජලය භාවිත කළ හැකියි. නමුත් fracture-filled,
          cavity-filled හෝ dyed sapphire සඳහා GIA තෙත් රෙදි කැබැල්ලකින්
          පමණක් පිරිසිදු කිරීමට උපදෙස් දෙයි. Lattice diffusion වලදී වර්ණය
          කෙතරම් ගැඹුරට පැතිර තිබේද යන්න ගල් අනුව වෙනස් විය හැකියි; මතුපිට
          හානි හෝ නැවත කැපීමෙන් සමහර ගල්වල shallow color layer එක ඉවත්
          විය හැකියි.
        </p>
        <p>
          Treatment එක නොදන්නා නම් හෝ report එක ගලටම අදාළදැයි සැක නම්
          ultrasonic/steam භාවිත නොකරන්න. වාර්තාවේ care note තිබේ නම්
          එය කියවන්න; නැතිනම් පළමුව සුදුසුකම් ලත් ආභරණ ශිල්පියකුගෙන්
          treatment-aware උපදෙස් ගන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "මෘදු සබන් + උණුසුම් ජලයෙන් පිරිසිදු කරන්න",
          "Ultrasonic/steam භාවිතයට පෙර ගලේ තත්ත්වය විමසන්න",
          "අනෙකුත් ගල් සමඟ ගැටී නොයන ලෙස වෙනම ගබඩා කරන්න",
          "දැඩි ක්‍රියාකාරකම්වලදී ආභරණ ඉවත් කරන්න",
          "හදිසි උෂ්ණත්ව වෙනස්කම් වළක්වන්න",
        ]}
      />

      <Misconceptions
        items={[
          "දෘඪතාව ඉහළ නිසා කිසිම හානියක් නොවේ — ඉරිතැලීම් තියෙනවා නම් බිඳිය හැකියි.",
          "සියලුම sapphire ultrasonic වලට ආරක්ෂිතයි — නැහැ.",
          "ප්‍රතිකාර කළ ගල්වල රැකවරණය සමානයි — වෙනස් විය හැකියි.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම උපදෙස් සාමාන්‍ය අධ්‍යාපනික මාර්ගෝපදේශයකි. ඔබේ ගලේ නිශ්චිත තත්ත්වය,
          ප්‍රතිකාර සහ සැකසුම අනුව රැකවරණය වෙනස් විය හැකියි. අවිනිශ්චිත නම්
          වෘත්තීය ආභරණ ශිල්පියකුගෙන් උපදෙස් ලබාගන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="මූලාශ්‍ර">
        <ul>
          <li><a href="https://www.gia.edu/sapphire-care-cleaning" target="_blank" rel="noreferrer">GIA: Sapphire Care and Cleaning Guide</a> — sapphire treatment අනුව වෙනස් වන cleaning limits.</li>
          <li><a href="https://4cs.gia.edu/en-us/blog/gems-ultrasonic-cleaners/" target="_blank" rel="noreferrer">GIA: Gems and Ultrasonic Cleaners</a> — ultrasonic cleaning වලදී සැලකිලිමත් විය යුතු ද්‍රව්‍ය සහ settings.</li>
        </ul>
        <p>මෙම උපදෙස් සාමාන්‍ය අධ්‍යාපනික තොරතුරුය. ඔබේ ගලේ treatment සහ setting එක අනුව වෘත්තීය උපදෙස් වෙනස් විය හැකියි.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}

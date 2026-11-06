"use client";

import { useState } from "react";
import { Check, RotateCcw, FileText, Fingerprint, Ruler, FlaskConical, MapPin, Leaf, Waves, Pickaxe, ShieldCheck, Plane, BriefcaseBusiness, PackageCheck, ArrowUpRight } from "lucide-react";

type Locale = "en" | "si";

const treatmentCopy = {
  en: {
    eyebrow: "REPORT LANGUAGE EXPLORER",
    title: "What does the treatment wording mean?",
    intro: "Choose a phrase to see what it can tell you—and what it leaves open. This guide does not determine the treatment of a particular gemstone.",
    options: [
      { id: "treated", label: "Heat treatment reported", heading: "A treatment has been reported", body: "Read the report's identification and treatment comments together. The wording describes a laboratory finding within its examination scope; it does not by itself rate the stone's quality or market value.", prompt: "Ask: what exact treatment is stated, and which laboratory examined the stone?" },
      { id: "no-indications", label: "No indications of heat", heading: "An examination did not find indicators", body: "This is a statement about the findings from that examination. Read the full comments and limitations; do not turn it into an unlimited guarantee about every process or test condition.", prompt: "Ask: which report is this, and can the issuer verify its number and details?" },
      { id: "unknown", label: "No clear report", heading: "The status is not established", body: "A seller's description, the stone's colour or a photograph cannot establish heat-treatment status. If it matters to the purchase, request written disclosure and consider an independent laboratory examination.", prompt: "Ask: can the treatment information be documented before purchase?" },
    ],
    caution: "Treatment status is separate from whether a sapphire is natural, laboratory-grown or an imitation.",
  },
  si: {
    eyebrow: "වාර්තා වචන පැහැදිලි කරගනිමු",
    title: "Treatment වචනවලින් අදහස් වෙන්නේ මොනවාද?",
    intro: "වාක්‍යයක් තෝරන්න. එයින් දැනගත හැකි දේ සහ තවමත් නොදන්නා දේ බලන්න. මෙම මෙවලම නිශ්චිත මැණික් ගලක treatment තීරණය නොකරයි.",
    options: [
      { id: "treated", label: "Heat treatment සඳහන්", heading: "Treatment එකක් වාර්තා කර ඇත", body: "වාර්තාවේ identification සහ treatment comments එකට කියවන්න. වචනවලින් කියන්නේ එම පරීක්ෂණයේ scope එක තුළ ඇති laboratory finding එකකි; එයින් ගලේ ගුණාත්මකභාවය හෝ වෙළඳ වටිනාකම තනිවම ශ්‍රේණිගත නොවේ.", prompt: "විමසන්න: නිශ්චිතව සඳහන් treatment එක කුමක්ද? පරීක්ෂා කළ laboratory එක කුමක්ද?" },
      { id: "no-indications", label: "Heat ලක්ෂණ හඳුනාගෙන නැත", heading: "එම පරීක්ෂණයේදී ලක්ෂණ හමු වී නැත", body: "මෙය එම පරීක්ෂණයේ සොයාගැනීම් පිළිබඳ ප්‍රකාශයකි. සම්පූර්ණ comments සහ සීමා කියවන්න; සියලු ක්‍රියාවලි හෝ පරීක්ෂණ තත්ත්ව සදාකාලිකව බැහැර කරන සහතිකයක් ලෙස අර්ථ නොගන්න.", prompt: "විමසන්න: මෙය කුමන report එකද? නිකුත් කළ ආයතනයෙන් අංකය සහ විස්තර තහවුරු කළ හැකිද?" },
      { id: "unknown", label: "පැහැදිලි report එකක් නැත", heading: "තත්ත්වය තහවුරු වී නැත", body: "විකුණුම්කරුගේ විස්තරය, ගලේ වර්ණය හෝ ඡායාරූපයක් පමණක් heat treatment තත්ත්වය තහවුරු නොකරයි. එය මිලදී ගැනීමට වැදගත් නම් ලිඛිත තොරතුරු ඉල්ලා ස්වාධීන laboratory පරීක්ෂාවක් සලකා බලන්න.", prompt: "විමසන්න: මිලදී ගැනීමට පෙර treatment තොරතුරු ලේඛනගත කළ හැකිද?" },
    ],
    caution: "Treatment තත්ත්වය සහ ගල natural ද, laboratory-grown ද, imitation ද යන්න වෙන වෙනම කරුණුය.",
  },
};

export function TreatmentStatusExplorer({ locale }: { locale: Locale }) {
  const copy = treatmentCopy[locale];
  const [selected, setSelected] = useState(copy.options[0].id);
  const active = copy.options.find((option) => option.id === selected) ?? copy.options[0];

  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-white" aria-labelledby="treatment-explorer-title">
      <div className="border-b border-border bg-accent-soft/60 p-5 md:p-6">
        <p className="gx-eyebrow"><span /> {copy.eyebrow}</p>
        <h2 id="treatment-explorer-title" className="mt-2 font-serif text-xl font-semibold md:text-2xl">{copy.title}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{copy.intro}</p>
      </div>
      <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div role="group" className="flex flex-col gap-2 border-b border-border p-4 md:border-b-0 md:border-r md:p-5" aria-label={locale === "si" ? "වාර්තා වචන තෝරන්න" : "Choose report wording"}>
          {copy.options.map((option, index) => (
            <button key={option.id} type="button" onClick={() => setSelected(option.id)} aria-pressed={selected === option.id} className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition-colors ${selected === option.id ? "border-accent bg-accent-soft" : "border-border bg-background hover:border-accent/50"}`}>
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${selected === option.id ? "bg-accent text-white" : "bg-white text-muted"}`}>{String(index + 1).padStart(2, "0")}</span>
              <span className="pt-1 text-sm font-medium text-foreground">{option.label}</span>
            </button>
          ))}
        </div>
        <div key={active.id} className="min-h-48 p-5 md:p-6" aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">{active.label}</p>
          <h3 className="mt-2 font-serif text-xl font-semibold">{active.heading}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{active.body}</p>
          <p className="mt-4 rounded-lg border-l-2 border-gold bg-gold-soft/60 px-4 py-3 text-sm leading-6 text-foreground">{active.prompt}</p>
          <p className="mt-4 text-xs leading-5 text-muted">{copy.caution}</p>
        </div>
      </div>
    </section>
  );
}

const careChecklist = {
  en: {
    eyebrow: "BEFORE YOU CLEAN",
    title: "A quick care check",
    items: ["I know the gemstone material.", "I checked the report or seller's treatment information.", "I checked the setting for loose or damaged parts.", "I chose a cleaning method confirmed for this stone."],
    done: "All checks complete. Follow the care instructions for this exact gem and setting.",
    pending: "If any detail is unknown, pause before using heat, steam, chemicals or an ultrasonic cleaner.",
    reset: "Reset checklist",
  },
  si: {
    eyebrow: "පිරිසිදු කිරීමට පෙර",
    title: "ඉක්මන් රැකවරණ පරීක්ෂාව",
    items: ["මැණික් වර්ගය මම දනිමි.", "වාර්තාවේ හෝ විකුණුම්කරුගේ treatment තොරතුරු බැලුවෙමි.", "සැකසුමේ ගල ලිහිල්ද හෝ හානිදැයි බැලුවෙමි.", "මෙම ගල සඳහා තහවුරු කළ පිරිසිදු කිරීමේ ක්‍රමයක් තෝරාගත්තෙමි."],
    done: "සියලු පියවර සම්පූර්ණයි. මෙම ගලට සහ සැකසුමට අදාළ උපදෙස් අනුගමනය කරන්න.",
    pending: "විස්තරයක් නොදන්නේ නම්, උෂ්ණත්වය, වාෂ්ප, රසායනික ද්‍රව්‍ය හෝ ultrasonic cleaner භාවිතයට පෙර නවතින්න.",
    reset: "ලැයිස්තුව නැවත සකසන්න",
  },
};

export function CarePreparationChecklist({ locale }: { locale: Locale }) {
  const copy = careChecklist[locale];
  const [checked, setChecked] = useState<boolean[]>(copy.items.map(() => false));
  const complete = checked.every(Boolean);

  function toggle(index: number) {
    setChecked((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value));
  }

  return (
    <section className="rounded-2xl border border-border bg-white p-5 md:p-6" aria-labelledby="care-checklist-title">
      <p className="gx-eyebrow"><span /> {copy.eyebrow}</p>
      <h2 id="care-checklist-title" className="mt-2 font-serif text-xl font-semibold">{copy.title}</h2>
      <ul className="mt-4 space-y-2">
        {copy.items.map((item, index) => (
          <li key={item}>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-3.5 text-sm leading-6 transition-colors hover:bg-background">
              <input type="checkbox" checked={checked[index]} onChange={() => toggle(index)} className="mt-1 h-4 w-4 accent-[#1e3a5f]" />
              <span className="flex-1">{item}</span>
              {checked[index] && <Check size={16} className="mt-1 shrink-0 text-teal" aria-hidden="true" />}
            </label>
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-xl bg-accent-soft px-4 py-3 text-sm leading-6 text-foreground" aria-live="polite">{complete ? copy.done : copy.pending}</p>
      {checked.some(Boolean) && <button type="button" onClick={() => setChecked(copy.items.map(() => false))} className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-accent hover:underline"><RotateCcw size={13} aria-hidden="true" /> {copy.reset}</button>}
    </section>
  );
}

const reportFieldCopy = {
  en: {
    eyebrow: "INTERACTIVE REPORT WALKTHROUGH",
    title: "Explore the fields one by one",
    intro: "Select a field to learn what it may record and what questions to ask. This teaching example is not an actual laboratory report.",
    notice: "Illustrative example only · not a real report or gemstone result",
    fields: [
      { id: "identity", label: "Identification", heading: "Material identity", icon: Fingerprint, example: "Natural corundum · sapphire", detail: "Read the laboratory's identification conclusion and material type. A report's exact scope varies; it may distinguish natural from laboratory-grown material and may list detectable treatments." , question: "Does the identification wording answer the question you have?" },
      { id: "measurements", label: "Measurements", heading: "Physical description", icon: Ruler, example: "Weight · dimensions · shape · cutting style", detail: "Compare the recorded weight, dimensions and description with the stone. Check any report image or plotted diagram when supplied. A genuine report can still refer to a different item.", question: "Do the details and image match the actual stone?" },
      { id: "treatment", label: "Treatment", heading: "Treatment findings", icon: FlaskConical, example: "Detectable treatment comments · report limits", detail: "Read the comments and any treatment table together. Wording records the laboratory's findings within its methods and scope; it is not a universal quality grade or price assessment.", question: "What treatment is stated, and what limitations are noted?" },
      { id: "origin", label: "Origin", heading: "Geographic-origin opinion", icon: MapPin, example: "Opinion, when offered and determinable", detail: "Origin services are offered only for some materials and may depend on the service ordered and whether an opinion can be made. Treat the conclusion as the laboratory's opinion, not a claim based only on appearance.", question: "Was an origin service requested, and how is the conclusion qualified?" },
    ],
  },
  si: {
    eyebrow: "වාර්තාවේ කොටස් පිළිබඳ අන්තර්ක්‍රියාකාරී මඟපෙන්වීම",
    title: "වාර්තාවේ කොටස් එකින් එක බලන්න",
    intro: "කොටසක් තෝරා එහි සටහන් විය හැකි දේ සහ විමසිය යුතු ප්‍රශ්න බලන්න. මෙය ඉගෙනීමට නිර්මාණය කළ උදාහරණයකි; සැබෑ පරීක්ෂණාගාර වාර්තාවක් නොවේ.",
    notice: "උදාහරණයක් පමණි · සැබෑ වාර්තාවක් හෝ මැණික් ප්‍රතිඵලයක් නොවේ",
    fields: [
      { id: "identity", label: "හඳුනාගැනීම", heading: "ද්‍රව්‍ය අනන්‍යතාව", icon: Fingerprint, example: "ස්වභාවික corundum · sapphire", detail: "Laboratory එකේ හඳුනාගැනීමේ නිගමනය සහ ද්‍රව්‍ය වර්ගය කියවන්න. වාර්තාවේ විෂය පථය අනුව natural/laboratory-grown වෙන් කිරීම සහ හඳුනාගත හැකි treatment සඳහන් විය හැකියි.", question: "ඔබට දැනගැනීමට අවශ්‍ය දේ මෙම හඳුනාගැනීමෙන් පිළිතුරු ලැබෙනවාද?" },
      { id: "measurements", label: "මාන", heading: "භෞතික විස්තර", icon: Ruler, example: "බර · මාන · හැඩය · කැපුම් රටාව", detail: "වාර්තාවේ බර, මාන සහ විස්තරය ගල සමඟ සසඳන්න. ඡායාරූපයක් හෝ diagram එකක් තිබේ නම් එයත් බලන්න. සැබෑ වාර්තාවක් වුණත් වෙනත් ගලකට අදාළ විය හැකියි.", question: "වාර්තාවේ විස්තර සහ රූපය ඔබේ ගලට ගැළපේද?" },
      { id: "treatment", label: "ප්‍රතිකාර", heading: "ප්‍රතිකාර සොයාගැනීම්", icon: FlaskConical, example: "සඳහන් ප්‍රතිකාර · වාර්තාවේ සීමා", detail: "විස්තර සටහන් සහ ප්‍රතිකාර වගුවක් තිබේ නම් ඒවා එකට කියවන්න. එහි වචනවලින් කියන්නේ පරීක්ෂණාගාරය භාවිත කළ ක්‍රම හා වාර්තාවේ විෂය පථය තුළ ඇති සොයාගැනීම්ය; මෙය ගුණාත්මක ශ්‍රේණියක් හෝ මිල තක්සේරුවක් නොවේ.", question: "කුමන ප්‍රතිකාරයක් සඳහන් කර තිබේද? එහි සීමා මොනවාද?" },
      { id: "origin", label: "මූලාරම්භය", heading: "භූගෝලීය මූලාරම්භ මතය", icon: MapPin, example: "මතයක් ලබාදිය හැකි නම් · අදාළ සේවාව අනුව", detail: "මූලාරම්භ පරීක්ෂණ සේවා ලබාදෙන්නේ ඇතැම් ද්‍රව්‍ය සඳහා පමණක් විය හැකියි. ලබාගත් සේවාව සහ මතයක් ලබාදිය හැකිද යන්න මත ප්‍රතිඵලය වෙනස් වේ. එය පෙනුමෙන් පමණක් තීරණය කළ රටක් ලෙස නොසලකන්න.", question: "මූලාරම්භ පරීක්ෂාවක් ඉල්ලා තිබුණාද? නිගමනයේ සීමා මොනවාද?" },
    ],
  },
} as const;

export function ReportFieldExplorer({ locale }: { locale: Locale }) {
  const copy = reportFieldCopy[locale];
  const [selected, setSelected] = useState<string>(copy.fields[0].id);
  const active = copy.fields.find((field) => field.id === selected) ?? copy.fields[0];
  const ActiveIcon = active.icon;

  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-white" aria-labelledby="report-field-explorer-title">
      <div className="border-b border-border bg-accent-soft/60 p-5 md:p-6">
        <p className="gx-eyebrow"><span /> {copy.eyebrow}</p>
        <h2 id="report-field-explorer-title" className="mt-2 font-serif text-xl font-semibold md:text-2xl">{copy.title}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{copy.intro}</p>
      </div>
      <div className="grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div role="group" aria-label={locale === "si" ? "වාර්තාවේ කොටසක් තෝරන්න" : "Choose a report field"} className="flex flex-col gap-2 border-b border-border p-4 md:border-b-0 md:border-r md:p-5">
          {copy.fields.map((field, index) => {
            const Icon = field.icon;
            return <button key={field.id} type="button" onClick={() => setSelected(field.id)} aria-pressed={selected === field.id} className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition-colors ${selected === field.id ? "border-accent bg-accent-soft" : "border-border bg-background hover:border-accent/50"}`}>
              <Icon size={17} className={selected === field.id ? "text-accent" : "text-muted"} aria-hidden="true" />
              <span className="text-sm font-medium">{field.label}</span>
              <span className="ml-auto text-xs text-muted">0{index + 1}</span>
            </button>;
          })}
        </div>
        <div className="p-5 md:p-6" aria-live="polite">
          <div className="rounded-xl border border-border bg-[#fbfaf7] p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted"><FileText size={15} aria-hidden="true" /> {locale === "si" ? "අධ්‍යාපනික උදාහරණය" : "Teaching example"}</div>
            <div className="mt-3 flex items-start gap-3 rounded-lg bg-white p-3.5">
              <ActiveIcon size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <div><p className="text-xs text-muted">{active.heading}</p><p className="mt-1 text-sm font-semibold">{active.example}</p></div>
            </div>
            <p className="mt-2 text-[11px] leading-5 text-muted">{copy.notice}</p>
          </div>
          <h3 className="mt-5 font-serif text-lg font-semibold">{active.heading}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{active.detail}</p>
          <p className="mt-4 rounded-lg border-l-2 border-gold bg-gold-soft/60 px-4 py-3 text-sm leading-6 text-foreground">{active.question}</p>
        </div>
      </div>
    </section>
  );
}

const sriLankaExportCopy = {
  en: {
    eyebrow: "SRI LANKA · PRE-EXPORT CHECK",
    title: "Confirm the right route for this consignment",
    items: ["I classified this as personal carry, a trade sample or a commercial shipment.", "I checked the current NGJA license and approval requirements for this case.", "I confirmed the Sri Lanka Customs steps and required declaration with Customs.", "My invoice, stone descriptions and any reports refer to the same items.", "I checked the destination country's import and declaration rules."],
    pending: "Use current official instructions for your shipment type. This checklist does not confirm legal readiness.",
    done: "Checks recorded. Contact NGJA and Sri Lanka Customs to confirm the current process before travelling or shipping.",
    reset: "Clear checks",
  },
  si: {
    eyebrow: "ශ්‍රී ලංකාව · අපනයනයට පෙර",
    title: "මෙම තොගයට අදාළ ක්‍රියාවලිය තහවුරු කරන්න",
    items: ["පුද්ගලිකව රැගෙන යන භාණ්ඩයක්ද, trade sample එකක්ද, වාණිජ තොගයක්දැයි වෙන් කළෙමි.", "මෙම අවස්ථාවට අදාළ වත්මන් NGJA බලපත්‍ර සහ අනුමැති අවශ්‍යතා බැලුවෙමි.", "ශ්‍රී ලංකා රේගුවෙන් වත්මන් පියවර සහ අවශ්‍ය ප්‍රකාශන තහවුරු කළෙමි.", "Invoice, ගල් විස්තර සහ වාර්තා එකම භාණ්ඩවලට අදාළ බව සසඳා බැලුවෙමි.", "ගමනාන්ත රටේ ආනයන සහ ප්‍රකාශන නීති පරීක්ෂා කළෙමි."],
    pending: "ඔබගේ තොග වර්ගයට අදාළ වත්මන් නිල උපදෙස් භාවිත කරන්න. මෙම ලැයිස්තුව නීතිමය සූදානම තහවුරු නොකරයි.",
    done: "පරීක්ෂා සටහන් කළා. ගමන් කිරීමට හෝ යැවීමට පෙර වත්මන් ක්‍රියාවලිය NGJA සහ ශ්‍රී ලංකා රේගුවෙන් තහවුරු කරන්න.",
    reset: "සලකුණු ඉවත් කරන්න",
  },
};

const exportRoutes = {
  en: [
    { id: "commercial", label: "Commercial shipment", icon: BriefcaseBusiness, title: "Start with the shipment and exporter", body: "NGJA describes an export process for gems and jewellery, including exporter licensing and examination at designated export services. Confirm the current licence, invoice format, inspection and Customs steps for your exact goods and value.", prompt: "Ask NGJA: which licence and file or registration details apply to this exporter and consignment?" },
    { id: "traveller", label: "Traveller carrying gems", icon: Plane, title: "Confirm before travelling", body: "The EDB describes hand-carried gems as subject to prior NGJA approval and Customs examination. A lab report, receipt or wearing the stone does not by itself confirm clearance. Check the current departure process and destination declaration rules.", prompt: "Ask NGJA and Customs: what must be submitted before departure, and where is the sealed parcel collected?" },
    { id: "special", label: "Samples, return or exhibition", icon: PackageCheck, title: "Explain the purpose and movement", body: "NGJA lists services for consignment, exhibition exports, trade samples and returns. These cases can have different paperwork and timing. Describe whether the parcel will return, be sold, or be displayed before asking which procedure applies.", prompt: "Ask NGJA: which service category and return or exhibition documents fit this exact case?" },
  ],
  si: [
    { id: "commercial", label: "වාණිජ තොගය", icon: BriefcaseBusiness, title: "අපනයනකරු සහ තොගය හඳුනාගන්න", body: "NGJA මැණික් හා ආභරණ සඳහා අපනයන ක්‍රියාවලියක්, අපනයනකරු බලපත්‍ර සහ නියමිත අපනයන සේවා මධ්‍යස්ථානවල පරීක්ෂාව විස්තර කරයි. ඔබගේ භාණ්ඩ හා වටිනාකමට අදාළ වත්මන් බලපත්‍රය, invoice ආකෘතිය, පරීක්ෂාව සහ රේගු පියවර තහවුරු කරන්න.", prompt: "NGJA වෙතින් අසන්න: මෙම අපනයනකරුට සහ තොගයට අදාළ බලපත්‍රය, file හෝ registration අංක මොනවාද?" },
    { id: "traveller", label: "මගියෙකු රැගෙන යන ගල්", icon: Plane, title: "ගමනට පෙර පියවර තහවුරු කරන්න", body: "EDB සඳහන් කරන්නේ මගියෙකු රැගෙන යන මැණික් සඳහා පෙර NGJA අනුමැතිය සහ රේගු පරීක්ෂාව අවශ්‍ය වන බවයි. Lab report, receipt එකක් හෝ ගල පැළඳීම පමණක් නිදහස් කිරීම තහවුරු නොකරයි. පිටත්වීමේ වත්මන් ක්‍රියාවලිය සහ ගමනාන්තයේ ප්‍රකාශන නීති පරීක්ෂා කරන්න.", prompt: "NGJA සහ රේගුවෙන් අසන්න: පිටත්වීමට පෙර භාරදිය යුතු දේ සහ මුද්‍රා තැබූ parcel එක ලබාගන්නා ස්ථානය කුමක්ද?" },
    { id: "special", label: "නියැදි, ආපසු එවීම හෝ ප්‍රදර්ශනය", icon: PackageCheck, title: "භාණ්ඩයේ අරමුණ සහ ගමන්මඟ පැහැදිලි කරන්න", body: "NGJA consignment, exhibition export, trade sample සහ ආපසු භාණ්ඩ සඳහා සේවා දක්වයි. මේවායේ ලේඛන සහ කාලසටහන් වෙනස් විය හැකියි. භාණ්ඩය ආපසු එනවාද, විකුණනවාද, ප්‍රදර්ශනය කරනවාදැයි පැහැදිලි කර අදාළ ක්‍රියාවලිය විමසන්න.", prompt: "NGJA වෙතින් අසන්න: මේ අවස්ථාවට අදාළ සේවා කාණ්ඩය සහ ආපසු/ප්‍රදර්ශන ලේඛන මොනවාද?" },
  ],
} as const;

export function SriLankaExportRouteExplorer({ locale = "si" }: { locale?: Locale }) {
  const routes = exportRoutes[locale];
  const [selectedId, setSelectedId] = useState<(typeof routes)[number]["id"]>(routes[0].id);
  const active = routes.find((route) => route.id === selectedId) ?? routes[0];
  const ActiveIcon = active.icon;
  return <section className="my-8 overflow-hidden rounded-3xl border border-border bg-white shadow-sm" aria-labelledby="export-route-title">
    <div className="grid md:grid-cols-[0.8fr_1.2fr]">
      <div className="bg-[radial-gradient(ellipse_at_20%_10%,rgba(215,191,129,.32),transparent_50%),linear-gradient(145deg,#142f43,#1d4658_58%,#3d7778)] p-5 text-white md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e8d9aa]">{locale === "si" ? "ශ්‍රී ලංකාව · අපනයන මාර්ගය" : "SRI LANKA · EXPORT ROUTE"}</p>
        <h2 id="export-route-title" className="mt-3 font-serif text-2xl font-semibold">{locale === "si" ? "ඔබගේ අවස්ථාවට අදාළ මාර්ගය තෝරන්න" : "Choose the route that fits your case"}</h2>
        <p className="mt-2 text-sm leading-6 text-white/75">{locale === "si" ? "භාණ්ඩය සහ ගමන්මඟ අනුව නිල අංශයෙන් විමසිය යුතු දේ වෙනස් විය හැකියි." : "What to confirm can change with the goods and how they will travel."}</p>
        <div className="mt-5 grid gap-2" role="group" aria-label={locale === "si" ? "අපනයන අවස්ථාව තෝරන්න" : "Select export scenario"}>
          {routes.map((route) => { const Icon = route.icon; return <button key={route.id} type="button" onClick={() => setSelectedId(route.id)} aria-pressed={selectedId === route.id} className={`flex min-h-12 items-center gap-3 rounded-xl border px-3 py-3 text-left text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${selectedId === route.id ? "border-white/70 bg-white text-[#142f43]" : "border-white/20 bg-white/5 text-white hover:bg-white/10"}`}><Icon size={17} aria-hidden="true"/><span>{route.label}</span><span className="ml-auto text-xs opacity-60">↗</span></button>; })}
        </div>
      </div>
      <div className="p-5 md:p-7" aria-live="polite">
        <div className="flex items-center gap-3"><span className="grid size-12 place-items-center rounded-2xl bg-[#edf4f0] text-accent"><ActiveIcon size={21} aria-hidden="true"/></span><span className="text-xs font-semibold uppercase tracking-widest text-muted">{locale === "si" ? "තහවුරු කිරීමේ මාර්ගෝපදේශය" : "WHAT TO CONFIRM"}</span></div>
        <h3 className="mt-5 font-serif text-xl font-semibold">{active.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{active.body}</p>
        <p className="mt-5 flex gap-2 rounded-xl border border-gold/25 bg-gold-soft/50 p-4 text-sm leading-6"><ArrowUpRight size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden="true"/>{active.prompt}</p>
        <p className="mt-4 text-xs leading-5 text-muted">{locale === "si" ? "අධ්‍යාපනික මඟපෙන්වීමක් පමණි. ඔබගේ තොගය සඳහා අනුමැතියක් හෝ නීතිමය සූදානමක් තහවුරු නොකරයි." : "Educational guidance only. This does not confirm legal readiness or approval for a shipment."}</p>
      </div>
    </div>
  </section>;
}

export function SriLankaExportReadinessChecklist({ locale = "si" }: { locale?: Locale }) {
  const copy = sriLankaExportCopy[locale];
  const [checked, setChecked] = useState<boolean[]>(copy.items.map(() => false));
  const complete = checked.every(Boolean);
  function toggle(index: number) {
    setChecked((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value));
  }

  return (
    <section className="rounded-2xl border border-border bg-white p-5 md:p-6" aria-labelledby="sri-export-checklist-title">
      <p className="gx-eyebrow"><span /> {copy.eyebrow}</p>
      <h2 id="sri-export-checklist-title" className="mt-2 font-serif text-xl font-semibold">{copy.title}</h2>
      <ul className="mt-4 space-y-2">
        {copy.items.map((item, index) => <li key={item}><label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-3.5 text-sm leading-6 hover:bg-background"><input type="checkbox" checked={checked[index]} onChange={() => toggle(index)} className="mt-1 h-4 w-4 accent-[#1e3a5f]" /><span className="flex-1">{item}</span>{checked[index] && <Check size={16} className="mt-1 shrink-0 text-teal" aria-hidden="true" />}</label></li>)}
      </ul>
      <p className="mt-4 rounded-xl bg-gold-soft/60 px-4 py-3 text-sm leading-6 text-foreground" aria-live="polite">{complete ? copy.done : copy.pending}</p>
      {checked.some(Boolean) && <button type="button" onClick={() => setChecked(copy.items.map(() => false))} className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-accent hover:underline"><RotateCcw size={13} aria-hidden="true" /> {copy.reset}</button>}
    </section>
  );
}

const mineResponsibilityTopics = [
  {
    id: "review",
    label: "පරිසර සමාලෝචනය",
    icon: Leaf,
    title: "ස්ථානයට ගැළපෙන පරිසර සමාලෝචනයක්",
    detail: "NGJA සඳහන් කරන්නේ සංවේදී පරිසර ප්‍රදේශවල පතල් කිරීමෙන් ගැටලු ඇති විය හැකි බවත්, පතල් උපදේශනය සඳහා mining engineers, geologists සහ environmental officers සම්බන්ධ කරගන්නා බවත්ය. එහිම තොරතුරුවලට අනුව ස්ථාන සඳහා අවශ්‍ය පරිසර ඇගයීම් ක්‍රියාවලි වෙනස් විය හැකියි.",
    prompt: "විමසන්න: මේ ස්ථානයට අදාළ වත්මන් පරිසර අනුමැතිය සහ කොන්දේසි මොනවාද?",
  },
  {
    id: "water",
    label: "ජලය සහ අවසාදිත",
    icon: Waves,
    title: "සේදීමේ ජලය සහ මඩ පාලනය",
    detail: "NGJA විසින් පළ කර ඇති පාරිසරික තොරතුරු තුළ gravel washing ජලයේ මඩ/සිල්ට් පාලනය, sedimentation ponds සහ silt traps ගැන සඳහන් වේ. එය සාමාන්‍ය තොරතුරකි; සෑම ස්ථානයකම ජල පද්ධතිය එකම ලෙස කළමනාකරණය කළ හැකි බවක් නොකියයි.",
    prompt: "විමසන්න: අදාළ බලපත්‍රයේ ජලය, සිල්ට් සහ ගංගා ඉවුරු සඳහා ඇති වත්මන් කොන්දේසි මොනවාද?",
  },
  {
    id: "closure",
    label: "වසා දැමීම සහ යථා තත්ත්වයට පත් කිරීම",
    icon: Pickaxe,
    title: "වසා දැමීම අවසානයේ හිතන දෙයක් නොවේ",
    detail: "NGJA හි mining industry තොරතුරු පුනරුත්ථාපනය ව්‍යාපෘතිය ආරම්භයේ සිට සැලසුම් කළ යුතු බවත්, excavated overburden වෙනම තබාගැනීම licence conditions සමඟ සම්බන්ධ බවත් සඳහන් කරයි. ඇතැම් mechanical mining permit අවස්ථාවලදී deposit ආපසු ලබාදීමට පෙර වළවල් වසා තිබීම සහ ඉඩම යථා තත්ත්වයට පත් කිරීම පරීක්ෂා කරන බව NGJA කියයි.",
    prompt: "විමසන්න: අදාළ බලපත්‍රයේ closure, rehabilitation සහ inspection සැලැස්ම මොකක්ද?",
  },
  {
    id: "safety",
    label: "මහජන ආරක්ෂාව",
    icon: ShieldCheck,
    title: "ක්‍රියාත්මක පතල් නරඹන්නන් සඳහා නොවේ",
    detail: "වළවල්, උමං සහ වැඩබිම් ස්ථාන-විශේෂ අවදානම් සහිතයි. මෙම අධ්‍යාපනික පිටුවෙන් පතලකට ඇතුළුවීමේ ක්‍රමයක්, ආරක්ෂක පද්ධති සැලසුමක් හෝ වැඩ කිරීම අනුමත කිරීමක් ලබා නොදේ. අවසර නොමැතිව ක්‍රියාත්මක පතලකට ඇතුළු නොවන්න; වත්මන් පාලන හා වෘත්තීය උපදෙස් අදාළ බලධාරීන්ගෙන් ලබාගන්න.",
    prompt: "මහජන අමුත්තෙකු නම්: සක්‍රීය පතල් සහ උමංවලින් පිටත රැඳී, බලධාරීන් විසින් අනුමත සංචාරක උපදෙස් පමණක් අනුගමනය කරන්න.",
  },
] as const;

export function SriLankaMineResponsibilityExplorer() {
  const [selectedId, setSelectedId] = useState<string>(mineResponsibilityTopics[0].id);
  const active = mineResponsibilityTopics.find((topic) => topic.id === selectedId) ?? mineResponsibilityTopics[0];
  const ActiveIcon = active.icon;

  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-white" aria-labelledby="mine-responsibility-title">
      <div className="border-b border-border bg-teal-soft/70 p-5 md:p-6">
        <p className="gx-eyebrow"><span /> ශ්‍රී ලංකාව · වගකීම් සිතියම</p>
        <h2 id="mine-responsibility-title" className="mt-2 font-serif text-xl font-semibold md:text-2xl">මාතෘකාවක් තෝරා නිල මාර්ගෝපදේශය බලන්න</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">පහත සටහන් අධ්‍යාපනික පසුබිමකි. ඒවා licence එකක්, පරිසර අනුමැතියක් හෝ වැඩබිම් ආරක්ෂක උපදෙස් වෙනුවට භාවිත කළ නොහැකියි.</p>
      </div>
      <div className="grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div role="group" aria-label="පතල් වගකීම් මාතෘකාව තෝරන්න" className="flex flex-col gap-2 border-b border-border p-4 md:border-b-0 md:border-r md:p-5">
          {mineResponsibilityTopics.map((topic) => {
            const Icon = topic.icon;
            return <button key={topic.id} type="button" onClick={() => setSelectedId(topic.id)} aria-pressed={selectedId === topic.id} className={`flex min-h-11 items-center gap-3 rounded-xl border p-3.5 text-left text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${selectedId === topic.id ? "border-teal bg-teal-soft" : "border-border bg-background hover:border-teal/50"}`}><Icon size={17} className="shrink-0 text-teal" aria-hidden="true"/><span>{topic.label}</span></button>;
          })}
        </div>
        <div className="min-h-64 p-5 md:p-6" aria-live="polite">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal"><ActiveIcon size={15} aria-hidden="true"/>{active.label}</div>
          <h3 className="mt-3 font-serif text-xl font-semibold">{active.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{active.detail}</p>
          <p className="mt-4 rounded-lg border-l-2 border-gold bg-gold-soft/60 px-4 py-3 text-sm leading-6 text-foreground">{active.prompt}</p>
        </div>
      </div>
    </section>
  );
}

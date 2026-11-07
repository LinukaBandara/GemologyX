import type { Gemstone } from "@/data/gemstones";

const GEM_PALETTES: Array<{ match: RegExp; colors: [string, string, string] }> = [
  { match: /blue|cyan|teal/i, colors: ["#4d8bb8", "#c3e4f0", "#173d70"] },
  { match: /green|olive/i, colors: ["#4d9977", "#c2e6c7", "#205d50"] },
  { match: /red|pink|rose/i, colors: ["#bd536a", "#f3bdc6", "#762c50"] },
  { match: /purple|violet/i, colors: ["#8062aa", "#d8c7ef", "#49366f"] },
  { match: /yellow|gold|orange|amber/i, colors: ["#c99039", "#f6dc9c", "#84521e"] },
  { match: /white|clear|colorless/i, colors: ["#8298ad", "#eef4f7", "#526174"] },
  { match: /brown|black/i, colors: ["#79645c", "#d0b9a1", "#403c40"] },
];

function paletteFor(colors: string[]) {
  const colorText = colors.join(" ");
  return GEM_PALETTES.find(({ match }) => match.test(colorText))?.colors ?? ["#657e9a", "#d7e1e8", "#354c69"];
}

/** An original abstract color illustration. It is intentionally not presented as a specimen photo. */
export function GemstoneIllustration({ gem, className = "" }: { gem: Gemstone; className?: string }) {
  const [deep, light, shadow] = paletteFor(gem.colors);
  const id = `gem-illustration-${gem.slug}`;

  return (
    <svg
      viewBox="0 0 220 160"
      className={`h-32 w-44 drop-shadow-[0_14px_16px_rgba(15,28,46,0.16)] transition-transform duration-300 group-hover:scale-105 ${className}`}
      role="img"
      aria-label={`Decorative gemstone colour graphic for ${gem.name}; not a specimen photograph`}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={light} />
          <stop offset="0.48" stopColor={deep} />
          <stop offset="1" stopColor={shadow} />
        </linearGradient>
        <linearGradient id={`${id}-shine`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="white" stopOpacity="0.82" />
          <stop offset="1" stopColor={light} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path d="M37 48 69 26h82l32 22-18 82-39 17-39-17z" fill={`url(#${id})`} stroke={shadow} strokeOpacity=".35" strokeWidth="2" />
      <path d="m37 48 45 13 28-35 27 35 46-13-18 28H55z" fill={`url(#${id}-shine)`} opacity=".8" />
      <path d="m37 48 45 13-4 69-39-82zm45 13h55l-27 86-32-17zm55 0 46-13-18 82-39 17 11-86z" fill={shadow} opacity=".26" />
      <path d="m82 61 28-35 27 35-27 8z" fill={light} opacity=".68" />
      <path d="m55 76 27-15-4 69-23-54zm82-15 28 15-19 54-20 16 11-85z" fill={deep} opacity=".48" />
      <path d="m37 48 45 13h55l46-13M55 76h110m-87-15 32 86 27-86" fill="none" stroke="white" strokeOpacity=".45" strokeWidth="1.2" />
    </svg>
  );
}

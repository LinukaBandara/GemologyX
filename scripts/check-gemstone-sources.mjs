import { readFileSync } from "node:fs";

const dataFiles = [
  "src/data/gemstones.ts",
  "src/data/gemstone-expansion.ts",
  "src/data/gemstone-expansion-2.ts",
  "src/data/gemstone-expansion-3.ts",
];

const errors = [];
const allSlugs = [];
let totalSources = 0;

for (const file of dataFiles) {
  const source = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
  const records = [...source.matchAll(/^\s*slug:\s*"([^"]+)"/gm)];

  for (let index = 0; index < records.length; index += 1) {
    const slug = records[index][1];
    const start = records[index].index;
    const end = records[index + 1]?.index ?? source.length;
    const record = source.slice(start, end);
    const sourceBlock = record.match(/sources:\s*\[([\s\S]*?)\]/);
    const urls = sourceBlock
      ? [...sourceBlock[1].matchAll(/url:\s*"([^"]+)"/g)].map((match) => match[1])
      : [];

    allSlugs.push(slug);

    if (!/detail:\s*\{/.test(record)) {
      errors.push(`${file} — ${slug}: missing detailed profile`);
    }
    if (urls.length < 2) {
      errors.push(`${file} — ${slug}: expected at least two references, found ${urls.length}`);
    }
    for (const url of urls) {
      if (!url.startsWith("https://")) {
        errors.push(`${file} — ${slug}: reference must use HTTPS: ${url}`);
      }
    }
    totalSources += urls.length;
  }
}

const seen = new Set();
for (const slug of allSlugs) {
  if (seen.has(slug)) errors.push(`Duplicate gemstone slug: ${slug}`);
  seen.add(slug);
}

if (errors.length) {
  console.error("Gemstone source manifest check failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Gemstone source manifest passed: ${allSlugs.length} profiles and ${totalSources} HTTPS references checked.`);

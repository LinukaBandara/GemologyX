import { readFileSync } from "node:fs";

const trackerPath = new URL("../docs/page-readiness-tracker.csv", import.meta.url);
const manifestPath = new URL("../src/data/draft-routes.ts", import.meta.url);

function parseCsvLine(line) {
  const fields = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];

    if (character === '"' && quoted && line[index + 1] === '"') {
      value += '"';
      index += 1;
    } else if (character === '"') {
      quoted = !quoted;
    } else if (character === "," && !quoted) {
      fields.push(value);
      value = "";
    } else {
      value += character;
    }
  }

  fields.push(value);
  return fields;
}

const lines = readFileSync(trackerPath, "utf8")
  .replace(/^\uFEFF/, "")
  .split(/\r?\n/)
  .filter((line) => line.trim().length > 0);

const headers = parseCsvLine(lines[0]);
const routeIndex = headers.indexOf("route");
const statusIndex = headers.indexOf("status");

if (routeIndex < 0 || statusIndex < 0) {
  throw new Error("Readiness tracker must contain route and status columns.");
}

const draftRows = lines.slice(1)
  .map(parseCsvLine)
  .filter((row) => row[statusIndex] === "Draft")
  .map((row) => row[routeIndex]);

const manifestSource = readFileSync(manifestPath, "utf8");
const manifestRoutes = [...manifestSource.matchAll(/'([^']+)'/g)]
  .map((match) => match[1])
  .filter((route) => route.startsWith("/"));

function duplicates(values) {
  const seen = new Set();
  const repeated = new Set();
  for (const value of values) {
    if (seen.has(value)) repeated.add(value);
    seen.add(value);
  }
  return [...repeated].sort();
}

const trackerDuplicates = duplicates(draftRows);
const manifestDuplicates = duplicates(manifestRoutes);
const trackerSet = new Set(draftRows);
const manifestSet = new Set(manifestRoutes);
const missing = [...trackerSet].filter((route) => !manifestSet.has(route)).sort();
const extra = [...manifestSet].filter((route) => !trackerSet.has(route)).sort();

if (trackerDuplicates.length || manifestDuplicates.length || missing.length || extra.length) {
  console.error("Editorial draft manifest is out of sync with the readiness tracker.");
  if (trackerDuplicates.length) console.error("Duplicate tracker routes:", trackerDuplicates);
  if (manifestDuplicates.length) console.error("Duplicate manifest routes:", manifestDuplicates);
  if (missing.length) console.error("Missing from draft-routes.ts:", missing);
  if (extra.length) console.error("Not marked Draft in tracker:", extra);
  process.exit(1);
}

console.log(`Editorial draft manifest is synchronized: ${trackerSet.size} Draft routes checked.`);

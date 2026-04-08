const fs = require("fs");
const path = require("path");

const srcPath = path.join(process.env.TEMP || "/tmp", "co-meme.js");
const outPath = path.join(__dirname, "..", "assets", "index--2owymTR.js");

const s = fs.readFileSync(srcPath, "utf8");

const start =
  ",jsxRuntimeExports.jsx(Box,{sx:{background:`linear-gradient(";
const end = "]})},landing3=\"/assets/landing3-DzFCTsbk.png\"";

const i0 = s.indexOf(start);
if (i0 < 0) {
  console.error("start not found");
  process.exit(1);
}
const i1 = s.indexOf(end, i0);
if (i1 < 0) {
  console.error("end not found");
  process.exit(1);
}

const removed = s.slice(i0, i1);
const patched = s.slice(0, i0) + s.slice(i1);

console.log("Removed length:", removed.length);
console.log("Tail removed (last 120 chars):", removed.slice(-120));

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, patched);
console.log("OK ->", outPath);
console.log("Original bytes:", s.length, "New:", patched.length);

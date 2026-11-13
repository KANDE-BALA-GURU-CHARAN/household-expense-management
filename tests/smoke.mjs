import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { strict as assert } from "node:assert";

const required = [
  "README.md",
  "prototype/budget-dashboard-new.html",
  "src/index.html",
  "src/manifest.webmanifest",
  "src/sw.js",
  "src/styles/tokens.css",
  "src/assets/hm-logo.svg"
];

for (const file of required) {
  assert.equal(existsSync(file), true, `Missing required file: ${file}`);
}

const release = await readFile("src/index.html", "utf8");
const original = await readFile("prototype/budget-dashboard-new.html", "utf8");
const manifest = JSON.parse(await readFile("src/manifest.webmanifest", "utf8"));
const tokens = await readFile("src/styles/tokens.css", "utf8");

assert.match(release, /H ∈ M/);
assert.match(release, /manifest\.webmanifest/);
assert.match(release, /validateImportedRows/);
assert.match(original, /Budget 2026/);
assert.notEqual(release, original, "The release must remain separate from the original prototype");
assert.equal(manifest.display, "standalone");
assert.equal(manifest.theme_color, "#0F2A31");
for (const token of ["#0F2A31", "#E7ECEA", "#E29A17", "#1D7A5B", "#B0432C", "#5B4B8A"]) {
  assert.match(tokens, new RegExp(token.replace("#", "\\#")));
}

const source = [release, await readFile("src/sw.js", "utf8")].join("\n");
for (const pattern of [/AIza[0-9A-Za-z_-]{20,}/, /ghp_[0-9A-Za-z]{20,}/, /BEGIN (RSA|OPENSSH|EC|DSA) PRIVATE KEY/]) {
  assert.equal(pattern.test(source), false, `Sensitive pattern found: ${pattern}`);
}

console.log(`Smoke checks passed (${required.length} required files).`);

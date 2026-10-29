import assert from "node:assert/strict";

const base = process.env["BASE_URL"] || "http://127.0.0.1:4173";
const origin = "https://hoshintegrity.com";
const email = "hoshintegrityinfo@gmail.com";
const routes = [
  "/",
  "/services",
  "/industries",
  "/training",
  "/certifications",
  "/about",
  "/contact",
  "/faq",
  "/insights",
  "/privacy",
  "/terms",
  "/cookies",
];
const legal = new Set(["/privacy", "/terms", "/cookies"]);
const assets = new Set();
const titles = new Set();
const get = (path) => fetch(new URL(path, base), { signal: AbortSignal.timeout(20000) });
const scriptsRemoved = (html) => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
const visibleText = (html) =>
  scriptsRemoved(html)
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, "")
    .replace(/<[^>]+>/g, " ");

for (const path of routes) {
  const response = await get(path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `${path}: unique title`);
  titles.add(title);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: one main heading`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${path}: one canonical`);
  assert.ok(
    html.includes(`href="${new URL(path, origin).href}"`),
    `${path}: final domain canonical`,
  );
  assert.ok(
    html.includes(`property="og:url" content="${new URL(path, origin).href}"`),
    `${path}: social URL`,
  );
  const robots = html.match(/name="robots" content="([^"]+)"/)?.[1];
  assert.ok(robots, `${path}: robots metadata`);
  assert.equal(robots.includes("noindex"), legal.has(path), `${path}: legal review indexing gate`);
  assert.ok(
    !/Missing client|Content needed|Details pending|www\.hoshint\.com|info@hoshint\.com/.test(html),
    `${path}: no obsolete public content`,
  );
  assert.ok(
    !/[\u2013\u2014]/.test(visibleText(html)),
    `${path}: no dash punctuation in visible prose`,
  );
  const schema = [
    ...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
  ];
  assert.ok(schema.length, `${path}: structured data`);
  const graph = schema.flatMap((m) => JSON.parse(m[1])["@graph"]);
  assert.ok(
    graph.some((item) => item["url"] === new URL(path, origin).href),
    `${path}: schema page URL`,
  );
  if (path === "/") {
    const organisation = graph.find((item) => item["@type"] === "Organization");
    assert.equal(organisation.email, email);
    assert.ok(!organisation.telephone && !organisation.legalName, "No invented operator details");
  }
  if (path === "/contact") {
    assert.ok(html.includes(`action="https://formsubmit.co/${email}"`));
    assert.ok(html.includes('href="/privacy"') && html.includes('href="/terms"'));
    for (const name of ["name", "company", "email", "service", "message"]) {
      assert.ok(html.includes(`name="${name}"`), `Contact field: ${name}`);
    }
  }
  for (const match of html.matchAll(
    /(?:src|href)="(\/(?:(?:src\/)?assets\/[^"?#]+|hosh-logo\.png|favicon\.ico))"/g,
  ))
    assets.add(match[1]);
  console.log(`PASS ${path}`);
}
for (const path of assets) {
  const response = await get(path);
  assert.equal(response.status, 200, `Asset: ${path}`);
  assert.ok((await response.arrayBuffer()).byteLength, `Empty asset: ${path}`);
}
const sitemap = await (await get("/sitemap.xml")).text();
for (const path of routes.filter((path) => !legal.has(path)))
  assert.ok(sitemap.includes(`<loc>${new URL(path, origin).href}</loc>`));
for (const path of legal)
  assert.ok(!sitemap.includes(`${origin}${path}`), "Unapproved legal page omitted from sitemap");
assert.ok((await (await get("/robots.txt")).text()).includes(`Sitemap: ${origin}/sitemap.xml`));
assert.equal((await get("/check-nonexistent-route")).status, 404);
console.log(
  `PASS ${routes.length} pages, ${assets.size} local assets, structured data, metadata, contact configuration, sitemap, robots and 404`,
);
console.log(
  "Form delivery, browser interactions, visual layout and legal approval require separate verification.",
);

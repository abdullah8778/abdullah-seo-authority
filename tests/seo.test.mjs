import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { execFileSync } from 'node:child_process';
import { pages, SITE_ORIGIN, LINKEDIN_URL, GITHUB_URL } from '../src/site.mjs';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
execFileSync(process.execPath, ['build.mjs'], { cwd: root, stdio: 'ignore' });
const htmlFor = (entry) => readFile(entry.path === '/' ? join(dist, 'index.html') : join(dist, entry.path.slice(1), 'index.html'), 'utf8');

test('build creates the requested authority page set and route manifest', async () => {
  assert.ok(pages.length >= 25, `expected at least 25 pages, got ${pages.length}`);
  const manifest = JSON.parse(await readFile(join(dist, 'manus-routes.json'), 'utf8'));
  assert.equal(manifest.routes.length, pages.length);
  assert.deepEqual(manifest.routes.map((route) => route.path), pages.map((entry) => entry.path));
});

test('every public page has unique, crawler-visible SEO essentials', async () => {
  const titles = new Set();
  const descriptions = new Set();
  for (const entry of pages) {
    const html = await htmlFor(entry);
    assert.match(html, /<h1>[^<]+<\/h1>/);
    assert.match(html, /<meta name="description" content="[^"]+">/);
    assert.match(html, /<link rel="canonical" href="https:\/\//);
    assert.match(html, /property="og:title"/);
    assert.match(html, /name="twitter:card"/);
    assert.match(html, /application\/ld\+json/);
    assert.match(html, /<main id="main">[\s\S]+<\/main>/);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1];
    assert.ok(title && title.length >= 30 && title.length <= 80);
    assert.ok(description && description.length >= 50 && description.length <= 180);
    assert.ok(!titles.has(title), `duplicate title: ${title}`);
    assert.ok(!descriptions.has(description), `duplicate description: ${description}`);
    titles.add(title); descriptions.add(description);
  }
});

test('sitemap, robots and public-safe entity links are generated', async () => {
  const sitemap = await readFile(join(dist, 'sitemap.xml'), 'utf8');
  const robots = await readFile(join(dist, 'robots.txt'), 'utf8');
  assert.ok(sitemap.includes(`<loc>${SITE_ORIGIN}/</loc>`));
  assert.match(sitemap, /<loc>https:\/\/8328-/);
  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Allow: \/\n/);
  assert.match(robots, /Disallow: \/private\//);
  assert.ok(robots.includes(`Sitemap: ${SITE_ORIGIN}/sitemap.xml`));
  const home = await htmlFor(pages[0]);
  assert.ok(home.includes(LINKEDIN_URL));
  assert.ok(home.includes(GITHUB_URL));
  assert.ok(existsSync(join(dist, 'brand-mark.svg')));
});

test('the private research boundary is stated on the verified project page', async () => {
  const project = await htmlFor(pages.find((entry) => entry.slug === 'nail-health-analyzer'));
  assert.match(project, /research prototype/i);
  assert.match(project, /clinical performance/i);
  assert.match(project, /public_demo/i);
  assert.match(project, /private_research/i);
  assert.match(project, /not claim clinical accuracy|does not claim clinical accuracy/i);
  assert.ok(!project.includes('Patient_ID=') && !project.includes('API_KEY='));
});

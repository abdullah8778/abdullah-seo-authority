import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildRobots, buildRoutesManifest, buildSitemap, pages, render404, renderPage } from './src/site.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(join(root, 'public'), dist, { recursive: true });
await writeFile(join(dist, 'styles.css'), await (await import('node:fs/promises')).readFile(join(root, 'public', 'styles.css')));

for (const entry of pages) {
  const target = entry.path === '/' ? join(dist, 'index.html') : join(dist, entry.path.slice(1), 'index.html');
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, renderPage(entry));
}
await writeFile(join(dist, '404.html'), render404());
await writeFile(join(dist, 'sitemap.xml'), buildSitemap());
await writeFile(join(dist, 'robots.txt'), buildRobots());
await writeFile(join(dist, 'manus-routes.json'), JSON.stringify(buildRoutesManifest(), null, 2));
console.log(`Built ${pages.length} public pages in ${dist}`);

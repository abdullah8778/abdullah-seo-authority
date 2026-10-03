import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const root = fileURLToPath(new URL('./', import.meta.url));
const dist = join(root, 'dist');
const port = Number(process.env.PORT || 3000);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml' };

async function ensureBuild() {
  try { await stat(join(dist, 'index.html')); } catch { await new Promise((resolve, reject) => { const child = spawn(process.execPath, ['build.mjs'], { cwd: root, stdio: 'inherit' }); child.on('exit', (code) => code === 0 ? resolve() : reject(new Error(`Build exited with ${code}`))); }); }
}

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const candidate = normalize(join(dist, decoded));
  return candidate.startsWith(dist) ? candidate : null;
}

const server = createServer(async (request, response) => {
  try {
    const urlPath = request.url || '/';
    if (urlPath.startsWith('/api/')) { response.writeHead(404); response.end('Not found'); return; }
    let file = safePath(urlPath);
    if (!file) { response.writeHead(400); response.end('Bad request'); return; }
    if (urlPath === '/') file = join(dist, 'index.html');
    else if (!extname(file)) file = join(file, 'index.html');
    try { await stat(file); } catch { response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' }); response.end(await readFile(join(dist, '404.html'))); return; }
    response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Cache-Control': extname(file) === '.html' ? 'no-cache' : 'public, max-age=3600' });
    response.end(await readFile(file));
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Internal server error');
    console.error(error);
  }
});

await ensureBuild();
server.listen(port, '0.0.0.0', () => console.log(`Authority site listening on 0.0.0.0:${port}`));

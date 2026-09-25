import assert from 'node:assert/strict';

const base = process.env.SMOKE_URL || 'http://127.0.0.1:8080';
const health = await fetch(`${base}/healthz`);
assert.equal(health.status, 200, 'health endpoint must return 200');

const page = await fetch(`${base}/`);
assert.equal(page.status, 200, 'homepage must return 200');
assert.match(page.headers.get('content-type') || '', /text\/html/);
const html = await page.text();
assert.match(html, /id=["']root["']/, 'React root element must exist');

const paths = [...html.matchAll(/(?:src|href)=["']([^"']+)["']/g)]
  .map((match) => match[1])
  .filter((path) => path.startsWith('/assets/'));
assert(paths.some((path) => /\.js(?:\?|$)/.test(path)), 'built JS asset must exist');
for (const path of paths) {
  const asset = await fetch(new URL(path, base));
  assert.equal(asset.status, 200, `asset failed: ${path}`);
  assert(
    !String(asset.headers.get('content-type')).includes('text/html'),
    `asset unexpectedly returned SPA fallback: ${path}`,
  );
}
console.log(`Smoke OK: homepage, healthz, ${paths.length} assets`);

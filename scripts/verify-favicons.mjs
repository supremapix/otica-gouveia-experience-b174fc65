import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.argv[2] || 'public';
const pngSize = path => {
  const data = readFileSync(path);
  assert.equal(data.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', path);
  return [data.readUInt32BE(16), data.readUInt32BE(20)];
};
const pngs = {
  'favicon-96x96.png': 96,
  'apple-touch-icon.png': 180,
  'web-app-manifest-192x192.png': 192,
  'web-app-manifest-512x512.png': 512,
  'web-app-manifest-maskable-512x512.png': 512,
};
for (const [file, size] of Object.entries(pngs)) {
  assert.deepEqual(pngSize(join(root, file)), [size, size], file);
}
const ico = readFileSync(join(root, 'favicon.ico'));
assert.equal(ico.readUInt16LE(0), 0);
assert.equal(ico.readUInt16LE(2), 1);
assert.equal(ico.readUInt16LE(4), 3);
const sizes = [];
for (let i = 0; i < 3; i++) {
  const offset = 6 + i * 16;
  assert.equal(ico[offset], ico[offset + 1]);
  assert.ok(ico.readUInt32LE(offset + 12) + ico.readUInt32LE(offset + 8) <= ico.length);
  sizes.push(ico[offset]);
}
assert.deepEqual(sizes.sort((a, b) => a - b), [16, 32, 48]);
const svg = readFileSync(join(root, 'favicon.svg'), 'utf8');
assert.match(svg, /viewBox="0 0 1254 1254"/);
assert.match(svg, /<path /);
assert.doesNotMatch(svg, /<script|<image|<foreignObject|href=|onload=/i);
const manifest = JSON.parse(readFileSync(join(root, 'site.webmanifest'), 'utf8'));
assert.equal(manifest.name, 'Ótica Gouveia');
assert.equal(manifest.lang, 'pt-BR');
for (const key of ['id', 'start_url', 'scope']) assert.equal(manifest[key], '/');
assert.equal(manifest.theme_color, '#94182d');
assert.equal(manifest.icons.filter(i => i.purpose === 'maskable').length, 1);
for (const icon of manifest.icons) {
  assert.match(icon.src, /^\/[a-z0-9-]+\.png$/);
  assert.equal(icon.type, 'image/png');
  const expected = icon.sizes.split('x').map(Number);
  assert.deepEqual(pngSize(join(root, icon.src.slice(1))), expected);
}
const html = readFileSync(root === 'dist' ? 'dist/index.html' : 'index.html', 'utf8');
for (const file of ['favicon.svg', 'favicon.ico', 'favicon-96x96.png', 'apple-touch-icon.png', 'site.webmanifest']) {
  assert.ok(html.includes(`href="/${file}"`), file);
  assert.ok(existsSync(join(root, file)), file);
}
assert.equal((html.match(/rel="manifest"/g) || []).length, 1);
assert.equal((html.match(/rel="apple-touch-icon"/g) || []).length, 1);
assert.ok(html.includes('sizes="180x180"'));
assert.ok(html.includes('name="theme-color" content="#94182d"'));
assert.ok(html.includes('/og-image.webp'));
console.log(`PASS: ${root}: SVG, ICO 16/32/48, PNG 96, Apple 180, Android 192/512, maskable 512, manifest and HTML links.`);

import fs from 'node:fs';
import crypto from 'node:crypto';
const walk = dir => fs.readdirSync(dir, {withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(`${dir}/${e.name}`) : [`${dir}/${e.name}`]);
const files = [...walk('src'), ...walk('public')];
const source = files.filter(f => /\.(tsx?|html)$/.test(f)).map(f => fs.readFileSync(f,'utf8')).join('\n');
const inventory = {
  routes: [...fs.readFileSync('src/App.tsx','utf8').matchAll(/path="([^"]+)"/g)].map(m=>m[1]).sort(),
  images: files.filter(f=>/\.(webp|png|jpg|jpeg|ico|svg)$/.test(f)).map(path=>({path,sha256:crypto.createHash('sha256').update(fs.readFileSync(path)).digest('hex')})),
  productNames: [...fs.readFileSync('src/components/Products.tsx','utf8').matchAll(/name: "([^"]+)"/g)].map(m=>m[1]),
  externalUrls: [...new Set(source.match(/https:\/\/[^\s"'`<>]+/g))].sort()
};
fs.mkdirSync('audit',{recursive:true});
fs.writeFileSync(`audit/inventory-${process.argv[2] || 'after'}.json`,JSON.stringify(inventory,null,2));
console.log({routes:inventory.routes.length,images:inventory.images.length,products:inventory.productNames.length});

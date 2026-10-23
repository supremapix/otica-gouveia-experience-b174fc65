import fs from 'node:fs';
const routes = [...fs.readFileSync('src/App.tsx','utf8').matchAll(/path="([^"]+)"/g)].map(m=>m[1]).filter(p=>p.startsWith('/')&&!p.includes('*'));
const old=fs.readFileSync('public/_redirects','utf8');
const legacy=old.split(/\r?\n/).filter(line=>/\s301!?$/.test(line));
fs.writeFileSync('public/_redirects',[...legacy,'','# Existing routes retain their URLs; unknown URLs return a real 404.',...routes.map(p=>`${p} /index.html 200`),'/* /index.html 404',''].join('\n'));
console.log(`Preserved ${routes.length} routes and ${legacy.length} redirects.`);
const vercel = JSON.parse(fs.readFileSync('vercel.json','utf8'));
vercel.rewrites = [...new Set(routes)].map(source=>({source,destination:'/index.html'}));
fs.writeFileSync('vercel.json',JSON.stringify(vercel,null,2)+'\n');

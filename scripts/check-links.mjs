import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
const routes=new Set([...fs.readFileSync('src/App.tsx','utf8').matchAll(/path="([^"]+)"/g)].map(m=>m[1]));
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${d}/${e.name}`):[`${d}/${e.name}`]);
const broken=[];
for(const f of walk('src').filter(p=>/\.(tsx?|css)$/.test(p)))for(const m of fs.readFileSync(f,'utf8').matchAll(/(?:href|to)=["'](\/[^"']*)["']/g)){const p=m[1].split('#')[0].split('?')[0];if(p&&!p.includes('.')&&!routes.has(p))broken.push({file:f,link:m[1]});}
fs.writeFileSync('audit/internal-links.json',JSON.stringify(broken,null,2));console.log({unknownStaticLinks:broken});

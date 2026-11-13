import fs from 'node:fs';
import { render } from '../.prerender/entry-repair.js';
const { body, head } = render();
let html = fs.readFileSync('dist/index.html','utf8').replace(/<title>[\s\S]*?<\/title>/,'').replace(/<meta[^>]*data-rh="true"[^>]*>/g,'').replace(/<link[^>]*rel="canonical"[^>]*>/g,'');
html = html.replace('</head>',head+'</head>').replace('<div id="root"></div>','<div id="root">'+body+'</div>');
fs.writeFileSync('dist/conserto-oculos-sitio-cercado.html',html);
console.log('Prerendered existing repair route, same React component.');

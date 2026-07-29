/**
 * Gerador do public/sitemap.xml a partir das rotas declaradas em src/App.tsx.
 *
 * Uso: node src/scripts/sitemap-generator.js
 *
 * Regras aplicadas:
 * - Uma entrada por rota pública indexável (sem curingas, sem 404, sem duplicatas
 *   com barra final).
 * - Sem <lastmod>: o projeto não possui uma data de modificação real por página.
 *   Um carimbo genérico (data do build) é ignorado pelo Google e prejudica a
 *   confiança no sitemap. Só adicione <lastmod> quando houver data real da página.
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://www.gouveiacuritiba.com.br";

const APP = readFileSync(resolve("src/App.tsx"), "utf8");

const routes = [...APP.matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1]);

// Rotas que não devem ser indexadas.
const EXCLUDED = new Set(["*", "/404", "/not-found"]);

const publicRoutes = [
  ...new Set(
    routes
      .filter((p) => !EXCLUDED.has(p))
      .filter((p) => !p.includes(":"))
      // remove duplicatas apenas por barra final (ex.: /a/ vs /a)
      .map((p) => (p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p))
  ),
].sort();

// Rotas duplicadas conhecidas (mesmo componente em URLs diferentes).
// Elas possuem canonical apontando para a URL preferencial, então ficam fora.
const NON_CANONICAL = new Set([
  "/otica-pinheirinho",
  "/loja-de-oculos-no-pinheirinho/15565",
]);

const priorityFor = (path) => {
  if (path === "/") return "1.0";
  if (
    ["/sobre", "/servicos", "/produtos", "/contato", "/faq", "/mapa-do-site"].includes(
      path
    )
  )
    return "0.9";
  if (
    ["/otica-umbara", "/otica-sitio-cercado", "/loja-de-oculos-no-pinheirinho"].includes(
      path
    )
  )
    return "0.9";
  if (path.startsWith("/blog")) return "0.7";
  return "0.8";
};

const changefreqFor = (path) => {
  if (path === "/") return "daily";
  if (path.startsWith("/blog")) return "monthly";
  return "weekly";
};

const entries = publicRoutes.filter((p) => !NON_CANONICAL.has(p));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries.map((path) =>
    [
      "  <url>",
      `    <loc>${BASE_URL}${path === "/" ? "/" : path}</loc>`,
      `    <changefreq>${changefreqFor(path)}</changefreq>`,
      `    <priority>${priorityFor(path)}</priority>`,
      "  </url>",
    ].join("\n")
  ),
  "</urlset>",
  "",
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml gerado com ${entries.length} URLs`);

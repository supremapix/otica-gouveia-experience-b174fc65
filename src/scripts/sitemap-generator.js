const fs = require('fs');
const path = require('path');
const { bairrosCuritiba } = require('./generateLocationPages');

const generateSitemap = () => {
  const baseUrl = 'https://www.gouveiacuritiba.com.br';
  const currentDate = new Date().toISOString().split('T')[0];

  // URLs estáticas principais
  const staticUrls = [
    { loc: '/', changefreq: 'daily', priority: '1.0' },
    { loc: '/loja-de-oculos-no-pinheirinho', changefreq: 'weekly', priority: '0.9' },
    { loc: '/loja-de-oculos-no-pinheirinho/15565', changefreq: 'weekly', priority: '0.9' },
    { loc: '/otica-pinheirinho', changefreq: 'weekly', priority: '0.9' },
    { loc: '/otica-sitio-cercado', changefreq: 'weekly', priority: '0.9' },
    { loc: '/otica-umbara', changefreq: 'weekly', priority: '0.9' }
  ];

  // URLs dinâmicas dos bairros
  const dynamicUrls = bairrosCuritiba.map(bairro => ({
    loc: `/otica-${bairro.slug}`,
    changefreq: 'weekly',
    priority: '0.8'
  }));

  // Combinar todas as URLs
  const allUrls = [...staticUrls, ...dynamicUrls];

  // Gerar XML do sitemap
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allUrls.map(url => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <image:image>
      <image:loc>${baseUrl}/og-image.png</image:loc>
      <image:title>Ótica Gouveia - ${url.loc === '/' ? 'Página Inicial' : url.loc.replace('/otica-', '').replace('-', ' ')}</image:title>
    </image:image>
  </url>`).join('\\n')}
</urlset>`;

  // Salvar sitemap
  const sitemapPath = path.join(__dirname, '../../public/sitemap.xml');
  
  try {
    fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
    console.log('✅ Sitemap gerado com sucesso!');
    console.log(`📍 Total de URLs: ${allUrls.length}`);
    console.log(`📄 Arquivo salvo: ${sitemapPath}`);
  } catch (error) {
    console.error('❌ Erro ao gerar sitemap:', error.message);
  }

  return sitemapXml;
};

// Gerar robots.txt otimizado
const generateRobotsTxt = () => {
  const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.gouveiacuritiba.com.br/sitemap.xml

# Otimizações para SEO
Crawl-delay: 1

# Bloquear arquivos desnecessários
Disallow: /assets/
Disallow: /*.js$
Disallow: /*.css$
Disallow: /api/
Disallow: /admin/

# Permitir crawling de imagens importantes
Allow: /og-image.png
Allow: /favicon.ico
Allow: /public/lovable-uploads/`;

  const robotsPath = path.join(__dirname, '../../public/robots.txt');
  
  try {
    fs.writeFileSync(robotsPath, robotsContent, 'utf8');
    console.log('✅ Robots.txt atualizado!');
  } catch (error) {
    console.error('❌ Erro ao gerar robots.txt:', error.message);
  }
};

// Executar se chamado diretamente
if (require.main === module) {
  generateSitemap();
  generateRobotsTxt();
}

module.exports = { generateSitemap, generateRobotsTxt };
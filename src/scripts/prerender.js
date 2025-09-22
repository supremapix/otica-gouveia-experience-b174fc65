const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { bairrosCuritiba } = require('./generateLocationPages');

// Configuração de prerendering
const prerenderConfig = {
  baseUrl: 'http://localhost:8080',
  outputDir: path.join(__dirname, '../../dist'),
  routes: [
    '/',
    '/loja-de-oculos-no-pinheirinho',
    '/loja-de-oculos-no-pinheirinho/15565',
    '/otica-pinheirinho',
    '/otica-sitio-cercado',
    '/otica-umbara',
    ...bairrosCuritiba.map(bairro => `/otica-${bairro.slug}`)
  ],
  waitForSelector: 'main',
  timeout: 30000
};

class PrerenderService {
  constructor(config) {
    this.config = config;
    this.browser = null;
  }

  async init() {
    console.log('🚀 Iniciando prerendering...');
    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }

  async prerenderRoute(route) {
    try {
      const page = await this.browser.newPage();
      
      // Configurar viewport para desktop
      await page.setViewport({ width: 1200, height: 800 });
      
      // Navegar para a rota
      const url = `${this.config.baseUrl}${route}`;
      console.log(`📄 Prerenderizando: ${url}`);
      
      await page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: this.config.timeout 
      });

      // Aguardar o seletor principal
      if (this.config.waitForSelector) {
        await page.waitForSelector(this.config.waitForSelector, {
          timeout: this.config.timeout
        });
      }

      // Aguardar um pouco mais para garantir que todo o conteúdo carregou
      await page.waitForTimeout(2000);

      // Obter HTML renderizado
      const html = await page.content();
      
      // Limpar recursos desnecessários para melhor performance
      const cleanHtml = this.cleanHtml(html);
      
      // Salvar arquivo HTML
      const fileName = this.getFileNameFromRoute(route);
      const filePath = path.join(this.config.outputDir, fileName);
      
      // Criar diretório se não existir
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(filePath, cleanHtml, 'utf8');
      console.log(`✅ Salvo: ${filePath}`);
      
      await page.close();
      return { route, success: true, filePath };
      
    } catch (error) {
      console.error(`❌ Erro ao prerenderizar ${route}:`, error.message);
      return { route, success: false, error: error.message };
    }
  }

  cleanHtml(html) {
    // Remover comentários desnecessários
    let cleanHtml = html.replace(/<!--[\s\S]*?-->/g, '');
    
    // Otimizar scripts e estilos
    cleanHtml = cleanHtml.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, (match) => {
      // Manter apenas scripts essenciais
      if (match.includes('type="application/ld+json"') || 
          match.includes('google') || 
          match.includes('analytics')) {
        return match;
      }
      return '';
    });

    // Adicionar meta tag de prerendering
    cleanHtml = cleanHtml.replace(
      '<head>',
      '<head>\n  <meta name="prerendered" content="true">'
    );

    return cleanHtml;
  }

  getFileNameFromRoute(route) {
    if (route === '/') {
      return 'index.html';
    }
    
    // Remover barra inicial e adicionar .html
    const fileName = route.substring(1).replace(/\//g, '-') + '.html';
    return fileName;
  }

  async prerenderAll() {
    const results = [];
    
    for (const route of this.config.routes) {
      const result = await this.prerenderRoute(route);
      results.push(result);
      
      // Pequena pausa entre renderizações
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    return results;
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  generateReport(results) {
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);
    
    console.log('\n📊 RELATÓRIO DE PRERENDERING');
    console.log('==============================');
    console.log(`✅ Sucessos: ${successful.length}`);
    console.log(`❌ Falhas: ${failed.length}`);
    console.log(`📄 Total: ${results.length}`);
    
    if (failed.length > 0) {
      console.log('\n❌ Rotas com falha:');
      failed.forEach(result => {
        console.log(`  - ${result.route}: ${result.error}`);
      });
    }
    
    console.log('\n✅ Rotas renderizadas com sucesso:');
    successful.forEach(result => {
      console.log(`  - ${result.route} → ${path.basename(result.filePath)}`);
    });
  }
}

// Função principal
async function runPrerender() {
  const prerender = new PrerenderService(prerenderConfig);
  
  try {
    await prerender.init();
    const results = await prerender.prerenderAll();
    prerender.generateReport(results);
    
    // Gerar sitemap após prerendering
    const { generateSitemap } = require('./sitemap-generator');
    generateSitemap();
    
  } catch (error) {
    console.error('❌ Erro no prerendering:', error);
  } finally {
    await prerender.close();
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  runPrerender();
}

module.exports = { PrerenderService, prerenderConfig };
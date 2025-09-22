const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { bairrosCuritiba } = require('./generateLocationPages');

class SEOValidator {
  constructor() {
    this.browser = null;
    this.baseUrl = 'http://localhost:8080';
    this.routes = [
      '/',
      '/loja-de-oculos-no-pinheirinho',
      '/otica-pinheirinho',
      '/otica-sitio-cercado',
      '/otica-umbara',
      ...bairrosCuritiba.slice(0, 5).map(bairro => `/otica-${bairro.slug}`) // Testar apenas alguns
    ];
  }

  async init() {
    console.log('🔍 Iniciando validação SEO...');
    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }

  async validatePage(route) {
    try {
      const page = await this.browser.newPage();
      const url = `${this.baseUrl}${route}`;
      
      console.log(`🔍 Validando: ${url}`);
      
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Extrair dados SEO
      const seoData = await page.evaluate(() => {
        const getMetaContent = (name) => {
          const meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
          return meta ? meta.getAttribute('content') : null;
        };
        
        const getStructuredData = () => {
          const scripts = document.querySelectorAll('script[type="application/ld+json"]');
          return Array.from(scripts).map(script => {
            try {
              return JSON.parse(script.textContent);
            } catch (e) {
              return null;
            }
          }).filter(Boolean);
        };

        return {
          title: document.title,
          description: getMetaContent('description'),
          keywords: getMetaContent('keywords'),
          ogTitle: getMetaContent('og:title'),
          ogDescription: getMetaContent('og:description'),
          ogImage: getMetaContent('og:image'),
          canonical: document.querySelector('link[rel="canonical"]')?.href,
          h1Count: document.querySelectorAll('h1').length,
          h1Text: document.querySelector('h1')?.textContent,
          imagesMissingAlt: Array.from(document.querySelectorAll('img')).filter(img => !img.alt).length,
          structuredData: getStructuredData(),
          metaViewport: getMetaContent('viewport'),
          googleVerification: getMetaContent('google-site-verification')
        };
      });

      // Validar dados
      const validation = this.validateSEOData(seoData, route);
      
      await page.close();
      
      return {
        route,
        url,
        seoData,
        validation,
        success: true
      };
      
    } catch (error) {
      console.error(`❌ Erro ao validar ${route}:`, error.message);
      return {
        route,
        success: false,
        error: error.message
      };
    }
  }

  validateSEOData(data, route) {
    const issues = [];
    const warnings = [];
    const success = [];

    // Validar title
    if (!data.title) {
      issues.push('Title tag ausente');
    } else if (data.title.length > 60) {
      warnings.push(`Title muito longo (${data.title.length} chars)`);
    } else {
      success.push('Title tag presente e otimizado');
    }

    // Validar description
    if (!data.description) {
      issues.push('Meta description ausente');
    } else if (data.description.length > 160) {
      warnings.push(`Meta description muito longa (${data.description.length} chars)`);
    } else {
      success.push('Meta description presente e otimizada');
    }

    // Validar H1
    if (data.h1Count === 0) {
      issues.push('H1 tag ausente');
    } else if (data.h1Count > 1) {
      warnings.push(`Múltiplas H1 tags (${data.h1Count})`);
    } else {
      success.push('H1 tag única presente');
    }

    // Validar Open Graph
    if (!data.ogTitle || !data.ogDescription || !data.ogImage) {
      warnings.push('Open Graph tags incompletas');
    } else {
      success.push('Open Graph tags completas');
    }

    // Validar Canonical URL
    if (!data.canonical) {
      issues.push('URL canônica ausente');
    } else {
      success.push('URL canônica presente');
    }

    // Validar Structured Data
    if (!data.structuredData || data.structuredData.length === 0) {
      warnings.push('Structured data ausente');
    } else {
      success.push(`Structured data presente (${data.structuredData.length} schemas)`);
    }

    // Validar imagens
    if (data.imagesMissingAlt > 0) {
      warnings.push(`${data.imagesMissingAlt} imagens sem alt text`);
    } else {
      success.push('Todas as imagens têm alt text');
    }

    // Validar Google verification
    if (!data.googleVerification) {
      warnings.push('Google verification tag ausente');
    } else {
      success.push('Google verification presente');
    }

    return {
      issues,
      warnings,
      success,
      score: this.calculateSEOScore(issues, warnings)
    };
  }

  calculateSEOScore(issues, warnings) {
    let score = 100;
    score -= issues.length * 15; // -15 pontos por issue crítico
    score -= warnings.length * 5; // -5 pontos por warning
    return Math.max(0, score);
  }

  async validateAll() {
    const results = [];
    
    for (const route of this.routes) {
      const result = await this.validatePage(route);
      results.push(result);
      
      // Pausa entre validações
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    return results;
  }

  generateReport(results) {
    console.log('\n🔍 RELATÓRIO DE VALIDAÇÃO SEO');
    console.log('===============================');
    
    const successful = results.filter(r => r.success);
    const avgScore = successful.reduce((acc, r) => acc + r.validation.score, 0) / successful.length;
    
    console.log(`📊 Score médio: ${avgScore.toFixed(1)}/100`);
    console.log(`✅ Páginas validadas: ${successful.length}/${results.length}`);
    
    // Relatório detalhado
    successful.forEach(result => {
      console.log(`\n📄 ${result.route} (Score: ${result.validation.score}/100)`);
      
      if (result.validation.issues.length > 0) {
        console.log('  ❌ Problemas críticos:');
        result.validation.issues.forEach(issue => console.log(`    - ${issue}`));
      }
      
      if (result.validation.warnings.length > 0) {
        console.log('  ⚠️  Avisos:');
        result.validation.warnings.forEach(warning => console.log(`    - ${warning}`));
      }
      
      if (result.validation.success.length > 0) {
        console.log('  ✅ Sucessos:');
        result.validation.success.forEach(success => console.log(`    - ${success}`));
      }
    });

    // Salvar relatório em arquivo
    const reportPath = path.join(__dirname, '../../seo-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    console.log(`\n📄 Relatório completo salvo: ${reportPath}`);
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

// Executar validação
async function runValidation() {
  const validator = new SEOValidator();
  
  try {
    await validator.init();
    const results = await validator.validateAll();
    validator.generateReport(results);
  } catch (error) {
    console.error('❌ Erro na validação:', error);
  } finally {
    await validator.close();
  }
}

if (require.main === module) {
  runValidation();
}

module.exports = { SEOValidator };
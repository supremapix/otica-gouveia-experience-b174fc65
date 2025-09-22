const fs = require('fs');
const path = require('path');

// Lista completa de bairros de Curitiba com dados estruturados
const bairrosCuritiba = [
  // Bairros existentes
  { nome: 'Pinheirinho', slug: 'pinheirinho', coords: { lat: -25.5333, lng: -49.3000 } },
  { nome: 'Sítio Cercado', slug: 'sitio-cercado', coords: { lat: -25.5167, lng: -49.3167 } },
  { nome: 'Umbará', slug: 'umbara', coords: { lat: -25.5500, lng: -49.2833 } },
  
  // Novos bairros para gerar
  { nome: 'Santa Cecília', slug: 'santa-cecilia', coords: { lat: -25.4167, lng: -49.2667 } },
  { nome: 'Vila Madalena', slug: 'vila-madalena', coords: { lat: -25.4333, lng: -49.2833 } },
  { nome: 'Água Verde', slug: 'agua-verde', coords: { lat: -25.4667, lng: -49.2833 } },
  { nome: 'Alto da Glória', slug: 'alto-da-gloria', coords: { lat: -25.4000, lng: -49.2667 } },
  { nome: 'Bacacheri', slug: 'bacacheri', coords: { lat: -25.4167, lng: -49.2333 } },
  { nome: 'Batel', slug: 'batel', coords: { lat: -25.4333, lng: -49.2833 } },
  { nome: 'Bigorrilho', slug: 'bigorrilho', coords: { lat: -25.4167, lng: -49.3000 } },
  { nome: 'Boa Vista', slug: 'boa-vista', coords: { lat: -25.4167, lng: -49.2500 } },
  { nome: 'Bom Retiro', slug: 'bom-retiro', coords: { lat: -25.4500, lng: -49.2333 } },
  { nome: 'Cajuru', slug: 'cajuru', coords: { lat: -25.5000, lng: -49.2167 } },
  { nome: 'Campo Comprido', slug: 'campo-comprido', coords: { lat: -25.4833, lng: -49.3500 } },
  { nome: 'Centro', slug: 'centro', coords: { lat: -25.4333, lng: -49.2667 } },
  { nome: 'Cristo Rei', slug: 'cristo-rei', coords: { lat: -25.4000, lng: -49.2333 } },
  { nome: 'Fanny', slug: 'fanny', coords: { lat: -25.4667, lng: -49.3167 } },
  { nome: 'Jardim Botânico', slug: 'jardim-botanico', coords: { lat: -25.4333, lng: -49.2333 } },
  { nome: 'Mercês', slug: 'merces', coords: { lat: -25.4333, lng: -49.3000 } },
  { nome: 'Portão', slug: 'portao', coords: { lat: -25.4833, lng: -49.2333 } },
  { nome: 'Santa Felicidade', slug: 'santa-felicidade', coords: { lat: -25.4000, lng: -49.3333 } },
  { nome: 'São Francisco', slug: 'sao-francisco', coords: { lat: -25.4167, lng: -49.2833 } },
  { nome: 'Tingui', slug: 'tingui', coords: { lat: -25.4000, lng: -49.3167 } },
  { nome: 'Vila Isabel', slug: 'vila-isabel', coords: { lat: -25.4500, lng: -49.2167 } }
];

// Template para gerar páginas de bairros
const createLocationPageTemplate = (bairro) => {
  const componentName = `Otica${bairro.nome.replace(/\s+/g, '').replace(/ã/g, 'a').replace(/ç/g, 'c')}`;
  
  return `import React from 'react';
import { useInView } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import EnhancedSEO from '@/components/EnhancedSEO/EnhancedSEO';
import { createBreadcrumbStructuredData, createLocalBusinessStructuredData } from '@/components/EnhancedSEO/utils';
import { createOpticalStoreSchema, createLocalBusinessSchema } from '@/utils/schemas';

const ${componentName} = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  // SEO e Structured Data
  const breadcrumbData = createBreadcrumbStructuredData([
    { name: 'Início', url: 'https://www.gouveiacuritiba.com.br/' },
    { name: 'Óticas em Curitiba', url: 'https://www.gouveiacuritiba.com.br/oticas-curitiba' },
    { name: '${bairro.nome}', url: \`https://www.gouveiacuritiba.com.br/otica-\${bairro.slug}\` }
  ]);

  const opticalStoreData = createOpticalStoreSchema('${bairro.nome}');
  const localBusinessData = createLocalBusinessSchema('${bairro.nome}');

  const structuredData = [breadcrumbData, opticalStoreData, localBusinessData];

  const whatsappUrl = "https://wa.me/5541999123456?text=Olá! Gostaria de agendar um exame de vista na ${bairro.nome}.";

  // Produtos populares no bairro
  const popularProducts = [
    { nome: 'Óculos de Grau Feminino', preco: 'A partir de R$ 199', categoria: 'Armações' },
    { nome: 'Óculos de Sol Masculino', preco: 'A partir de R$ 159', categoria: 'Solares' },
    { nome: 'Lentes de Contato', preco: 'A partir de R$ 89', categoria: 'Lentes' },
    { nome: 'Óculos Infantil', preco: 'A partir de R$ 149', categoria: 'Infantil' }
  ];

  // Vantagens da loja
  const advantages = [
    { icon: '👁️', title: 'Exame de Vista Gratuito', description: 'Realizamos exames completos sem custo para você' },
    { icon: '🚚', title: 'Entrega Rápida', description: 'Receba seus óculos em até 7 dias úteis' },
    { icon: '💳', title: 'Parcelamento Flexível', description: 'Parcele em até 10x sem juros no cartão' },
    { icon: '🏆', title: 'Garantia Estendida', description: '2 anos de garantia em todos os produtos' }
  ];

  return (
    <>
      <EnhancedSEO
        title={\`Ótica no \${bairro.nome} - Curitiba | Ótica Gouveia\`}
        description={\`Ótica no \${bairro.nome} com exames de vista gratuitos, armações de qualidade e lentes especializadas. Visite a Ótica Gouveia e tenha atendimento personalizado.\`}
        keywords={\`ótica no \${bairro.slug.replace('-', ' ')}, óculos \${bairro.nome}, exame de vista \${bairro.nome}, ótica curitiba, lentes de grau curitiba\`}
        canonicalUrl={\`/otica-\${bairro.slug}\`}
        structuredData={structuredData}
        breadcrumbs={[
          { name: 'Início', url: '/' },
          { name: 'Óticas em Curitiba', url: '/oticas-curitiba' },
          { name: '${bairro.nome}', url: \`/otica-\${bairro.slug}\` }
        ]}
        preloadResources={[
          { href: '/hero-${bairro.slug}.jpg', as: 'image' }
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ótica no ${bairro.nome}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Sua ótica de confiança no ${bairro.nome} com exames de vista gratuitos e atendimento especializado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                📱 Agendar pelo WhatsApp
              </a>
              <a
                href="tel:+5541999123456"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 Ligar Agora
              </a>
            </div>
          </div>
        </section>

        {/* Sobre o Bairro */}
        <section className="py-16 px-4 bg-background/50" ref={ref}>
          <div className="container mx-auto">
            <div className={\`transition-all duration-1000 \${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}\`}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Atendendo o ${bairro.nome} com Excelência
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg mb-6 text-muted-foreground">
                    A Ótica Gouveia no ${bairro.nome} oferece atendimento especializado para toda a região, 
                    com uma equipe experiente e produtos de alta qualidade para cuidar da sua visão.
                  </p>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Realizamos exames de vista gratuitos e oferecemos as melhores marcas de armações 
                    e lentes, sempre com o melhor preço da região.
                  </p>
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Por que escolher nossa ótica no ${bairro.nome}?</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ Localização privilegiada no ${bairro.nome}</li>
                      <li>✓ Atendimento personalizado e humanizado</li>
                      <li>✓ Produtos com garantia e qualidade</li>
                      <li>✓ Preços acessíveis e parcelamento facilitado</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6">Produtos Mais Procurados</h3>
                  <div className="grid gap-4">
                    {popularProducts.map((product, index) => (
                      <div key={index} className="bg-background/80 p-4 rounded-lg">
                        <h4 className="font-semibold">{product.nome}</h4>
                        <p className="text-primary font-bold">{product.preco}</p>
                        <span className="text-sm text-muted-foreground">{product.categoria}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Vantagens Exclusivas no ${bairro.nome}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center p-6 bg-background/50 rounded-lg">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="font-semibold text-lg mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promoções */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Promoções Especiais ${bairro.nome}
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">
                🎯 Oferta Exclusiva ${bairro.nome}
              </h3>
              <p className="text-lg mb-6">
                Na compra de qualquer armação, ganhe <strong>50% de desconto</strong> nas lentes!
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                *Promoção válida apenas para moradores do ${bairro.nome} mediante comprovação de endereço.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
              >
                Aproveitar Promoção
              </a>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 bg-primary text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Visite Nossa Ótica no ${bairro.nome}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Estamos prontos para cuidar da sua visão com carinho e profissionalismo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                💬 Conversar no WhatsApp
              </a>
              <a
                href="tel:+5541999123456"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 Ligar: (41) 99912-3456
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default ${componentName};
`;
};

// Função para gerar todas as páginas
const generateLocationPages = () => {
  // Verificar páginas existentes
  const existingPages = [
    'LojaOculosPinheirinho.tsx',
    'LojaOculosPinheirinho15565.tsx', 
    'OticaSitioCercado.tsx',
    'OticaUmbara.tsx'
  ];

  console.log('🚀 Iniciando geração de páginas de bairros...');

  bairrosCuritiba.forEach(bairro => {
    const componentName = `Otica${bairro.nome.replace(/\s+/g, '').replace(/ã/g, 'a').replace(/ç/g, 'c')}`;
    const fileName = `${componentName}.tsx`;
    const filePath = path.join(__dirname, '../pages', fileName);

    // Verificar se já existe
    if (existingPages.includes(fileName) || fs.existsSync(filePath)) {
      console.log(`⚠️  Página ${fileName} já existe, pulando...`);
      return;
    }

    // Gerar conteúdo da página
    const pageContent = createLocationPageTemplate(bairro);

    // Criar arquivo
    try {
      fs.writeFileSync(filePath, pageContent, 'utf8');
      console.log(`✅ Página criada: ${fileName}`);
    } catch (error) {
      console.error(`❌ Erro ao criar ${fileName}:`, error.message);
    }
  });

  console.log('🎉 Geração de páginas concluída!');
  return bairrosCuritiba;
};

// Função para atualizar rotas no App.tsx
const updateAppRoutes = (bairros) => {
  const appFilePath = path.join(__dirname, '../App.tsx');
  
  if (!fs.existsSync(appFilePath)) {
    console.error('❌ Arquivo App.tsx não encontrado');
    return;
  }

  let appContent = fs.readFileSync(appFilePath, 'utf8');

  // Gerar imports
  const imports = bairros.map(bairro => {
    const componentName = `Otica${bairro.nome.replace(/\s+/g, '').replace(/ã/g, 'a').replace(/ç/g, 'c')}`;
    return `import ${componentName} from "./pages/${componentName}";`;
  }).join('\\n');

  // Gerar rotas
  const routes = bairros.map(bairro => {
    const componentName = `Otica${bairro.nome.replace(/\s+/g, '').replace(/ã/g, 'a').replace(/ç/g, 'c')}`;
    return `            <Route path="/otica-${bairro.slug}" element={<${componentName} />} />`;
  }).join('\\n');

  // Atualizar App.tsx (implementação básica)
  console.log('📝 Atualize manualmente o App.tsx com as seguintes importações e rotas:');
  console.log('\\n--- IMPORTS ---');
  console.log(imports);
  console.log('\\n--- ROUTES ---');
  console.log(routes);
};

// Executar se chamado diretamente
if (require.main === module) {
  const bairros = generateLocationPages();
  updateAppRoutes(bairros);
}

module.exports = { generateLocationPages, bairrosCuritiba };
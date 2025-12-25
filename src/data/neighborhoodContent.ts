// Conteúdo personalizado e único para cada bairro/cidade
// Isso garante que cada página seja indexada individualmente pelo Google

export interface NeighborhoodData {
  name: string;
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroSubtitle: string;
  description: string[];
  characteristics: string;
  nearbyLandmarks: string[];
  distanceFromStore: string;
  type: 'bairro' | 'cidade';
  region?: string;
}

// Função para gerar palavras-chave otimizadas
const generateKeywords = (name: string, type: 'bairro' | 'cidade'): string[] => {
  const location = type === 'cidade' ? name : `${name} curitiba`;
  return [
    `ótica ${name.toLowerCase()}`,
    `óculos ${name.toLowerCase()}`,
    `ótica em ${name.toLowerCase()}`,
    `óculos de grau ${name.toLowerCase()}`,
    `óculos de sol ${name.toLowerCase()}`,
    `lentes de contato ${name.toLowerCase()}`,
    `exame de vista ${name.toLowerCase()}`,
    `loja de óculos ${name.toLowerCase()}`,
    `ótica perto ${name.toLowerCase()}`,
    `comprar óculos ${name.toLowerCase()}`,
    `armação de óculos ${name.toLowerCase()}`,
    type === 'bairro' ? `ótica ${name.toLowerCase()} curitiba` : `ótica ${name.toLowerCase()} pr`,
    `melhor ótica ${name.toLowerCase()}`,
    `óculos barato ${name.toLowerCase()}`,
  ];
};

// Dados personalizados para cada bairro de Curitiba
export const neighborhoodData: Record<string, NeighborhoodData> = {
  // ==================== BAIRROS OFICIAIS ====================
  
  'pinheirinho': {
    name: 'Pinheirinho',
    slug: '/loja-de-oculos-no-pinheirinho',
    title: 'Ótica Pinheirinho Curitiba | Loja de Óculos | Ótica Gouveia',
    metaDescription: 'Ótica no Pinheirinho em Curitiba. Nossa loja física está localizada na Rua Nicola Pellanda, 1286. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: generateKeywords('Pinheirinho', 'bairro'),
    heroTitle: 'Ótica Gouveia no Pinheirinho',
    heroSubtitle: 'Nossa Loja Física - Venha nos Visitar!',
    description: [
      'O Pinheirinho é um dos bairros mais tradicionais e movimentados de Curitiba, localizado na região sul da cidade. Com fácil acesso pelo Terminal do Pinheirinho, o bairro é conhecido por sua forte vocação comercial e residencial, abrigando famílias que valorizam praticidade e bons serviços.',
      'A Ótica Gouveia está localizada no coração do Pinheirinho, na Rua Nicola Pellanda, 1286, próximo ao Condor Umbará. São mais de 40 anos de tradição atendendo moradores do Pinheirinho e região com excelência em produtos ópticos.',
      'Venha conhecer nossa loja física! Oferecemos óculos de grau das melhores marcas, óculos de sol com proteção UV, lentes de contato e exame de vista gratuito. Estacionamento fácil e atendimento personalizado.'
    ],
    characteristics: 'Bairro tradicional com forte comércio e ótima infraestrutura',
    nearbyLandmarks: ['Terminal Pinheirinho', 'Condor Umbará', 'Rua Nicola Pellanda'],
    distanceFromStore: 'Loja localizada no bairro',
    type: 'bairro'
  },

  'sitio-cercado': {
    name: 'Sítio Cercado',
    slug: '/otica-sitio-cercado',
    title: 'Ótica Sítio Cercado Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para moradores do Sítio Cercado em Curitiba. Óculos de grau, sol e lentes de contato. Entrega via motoboy acima de R$250. Exame de vista grátis!',
    keywords: generateKeywords('Sítio Cercado', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Sítio Cercado',
    heroSubtitle: 'Qualidade e Tradição Perto de Você',
    description: [
      'O Sítio Cercado é um dos bairros mais populosos de Curitiba, localizado na região sul da cidade. Com forte identidade comunitária, o bairro abriga milhares de famílias que buscam qualidade de vida e serviços de confiança na região.',
      'A Ótica Gouveia atende os moradores do Sítio Cercado com facilidade. Nossa loja no Pinheirinho fica a poucos minutos de distância, e para maior comodidade, oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'Conte com mais de 40 anos de experiência em produtos ópticos. Oferecemos óculos de grau, óculos de sol originais, lentes de contato das melhores marcas e exame de vista gratuito. Atendimento familiar e preços justos.'
    ],
    characteristics: 'Bairro residencial e populoso com forte senso de comunidade',
    nearbyLandmarks: ['Terminal Sítio Cercado', 'Rua Izaac Ferreira da Cruz'],
    distanceFromStore: 'Aproximadamente 10 minutos de carro',
    type: 'bairro'
  },

  'umbara': {
    name: 'Umbará',
    slug: '/otica-umbara',
    title: 'Ótica Umbará Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica próxima ao Umbará em Curitiba. Localizada ao lado do Condor Umbará. Óculos de grau, sol, lentes de contato. Exame de vista grátis. Visite-nos!',
    keywords: generateKeywords('Umbará', 'bairro'),
    heroTitle: 'Ótica Gouveia - Próximo ao Umbará',
    heroSubtitle: 'Ao Lado do Condor Umbará',
    description: [
      'O Umbará é um bairro em crescimento na região sul de Curitiba, conhecido por suas áreas verdes e tranquilidade. Com desenvolvimento constante, o bairro oferece qualidade de vida para famílias que buscam um ambiente mais calmo sem abrir mão de bons serviços.',
      'A Ótica Gouveia está estrategicamente localizada próximo ao Condor Umbará, facilitando o acesso para todos os moradores da região. Você pode combinar suas compras no supermercado com uma visita à nossa ótica.',
      'Oferecemos atendimento especializado com mais de 40 anos de experiência. Óculos de grau com as melhores lentes, óculos de sol com proteção UV, lentes de contato e exame de vista gratuito. Venha nos conhecer!'
    ],
    characteristics: 'Bairro tranquilo com áreas verdes e em crescimento',
    nearbyLandmarks: ['Condor Umbará', 'Rio Iguaçu'],
    distanceFromStore: 'Loja localizada na região',
    type: 'bairro'
  },

  'cic': {
    name: 'CIC',
    slug: '/otica-cic',
    title: 'Ótica CIC Curitiba | Cidade Industrial | Óculos | Ótica Gouveia',
    metaDescription: 'Ótica para moradores da CIC - Cidade Industrial de Curitiba. Óculos de grau, sol e lentes. Entrega via motoboy. Exame de vista grátis. Confira!',
    keywords: [...generateKeywords('CIC', 'bairro'), 'ótica cidade industrial curitiba'],
    heroTitle: 'Ótica Gouveia para a CIC',
    heroSubtitle: 'Atendendo a Cidade Industrial de Curitiba',
    description: [
      'A CIC - Cidade Industrial de Curitiba é uma das maiores regiões da cidade, abrigando um importante polo industrial e milhares de moradores. Com forte movimentação econômica, a região demanda serviços de qualidade e praticidade.',
      'A Ótica Gouveia atende trabalhadores e moradores da CIC com excelência. Nossa loja no Pinheirinho oferece fácil acesso, e para maior comodidade, realizamos entrega via motoboy para compras acima de R$ 250,00 em toda a região.',
      'Com mais de 40 anos de tradição, oferecemos óculos de grau para todas as necessidades, óculos de sol, lentes de contato e exame de vista gratuito. Parcelamento em até 12x sem juros.'
    ],
    characteristics: 'Maior polo industrial de Curitiba com grande população',
    nearbyLandmarks: ['Terminal CIC', 'Parque Industrial'],
    distanceFromStore: 'Aproximadamente 15 minutos de carro',
    type: 'bairro'
  },

  'cajuru': {
    name: 'Cajuru',
    slug: '/otica-cajuru',
    title: 'Ótica Cajuru Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Cajuru em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy acima de R$250. Exame de vista grátis!',
    keywords: generateKeywords('Cajuru', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Cajuru',
    heroSubtitle: 'Qualidade para a Região Leste de Curitiba',
    description: [
      'O Cajuru é um dos bairros mais tradicionais da zona leste de Curitiba. Com forte vocação residencial e comercial, o bairro abriga famílias de diferentes gerações que valorizam qualidade de vida e bons serviços.',
      'A Ótica Gouveia oferece atendimento diferenciado para moradores do Cajuru. Vendemos online com entrega via motoboy para compras acima de R$ 250,00, trazendo conforto e praticidade até você.',
      'São mais de 40 anos de experiência em cuidados visuais. Oferecemos óculos de grau com lentes de qualidade, óculos de sol originais, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro tradicional da zona leste com forte comércio',
    nearbyLandmarks: ['Terminal Cajuru', 'Avenida Comendador Franco'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'boqueirao': {
    name: 'Boqueirão',
    slug: '/otica-boqueirao',
    title: 'Ótica Boqueirão Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica atendendo o Boqueirão em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito. Consulte-nos!',
    keywords: generateKeywords('Boqueirão', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Boqueirão',
    heroSubtitle: 'Tradição em Cuidados Visuais',
    description: [
      'O Boqueirão é um dos bairros mais extensos e populosos de Curitiba, localizado na região sul. Com forte identidade própria, o bairro combina áreas residenciais com comércio ativo, atendendo milhares de moradores.',
      'A Ótica Gouveia atende o Boqueirão com qualidade e praticidade. Nossa localização no Pinheirinho permite fácil acesso, e oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'Com tradição de mais de 40 anos, oferecemos as melhores marcas de óculos de grau e sol, lentes de contato de qualidade e exame de vista gratuito. Atendimento personalizado e preços competitivos.'
    ],
    characteristics: 'Bairro extenso e populoso com comércio diversificado',
    nearbyLandmarks: ['Terminal Boqueirão', 'Avenida Marechal Floriano Peixoto'],
    distanceFromStore: 'Aproximadamente 12 minutos de carro',
    type: 'bairro'
  },

  'hauer': {
    name: 'Hauer',
    slug: '/otica-hauer',
    title: 'Ótica Hauer Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Hauer em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis. Venha conferir!',
    keywords: generateKeywords('Hauer', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Hauer',
    heroSubtitle: 'Cuidando da Sua Visão',
    description: [
      'O Hauer é um bairro residencial e tranquilo de Curitiba, localizado na região sul. Com ruas arborizadas e boa infraestrutura, o bairro abriga famílias que buscam qualidade de vida e proximidade com bons serviços.',
      'A Ótica Gouveia está próxima ao Hauer, oferecendo fácil acesso para moradores da região. Para maior comodidade, realizamos entrega via motoboy para compras acima de R$ 250,00.',
      'Conte com mais de 40 anos de experiência. Oferecemos óculos de grau modernos, óculos de sol com proteção UV, lentes de contato das melhores marcas e exame de vista gratuito com profissionais qualificados.'
    ],
    characteristics: 'Bairro residencial tranquilo com boa infraestrutura',
    nearbyLandmarks: ['Avenida Brasília', 'Shopping Cidade'],
    distanceFromStore: 'Aproximadamente 8 minutos de carro',
    type: 'bairro'
  },

  'centro': {
    name: 'Centro',
    slug: '/otica-centro',
    title: 'Ótica Centro Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica atendendo o Centro de Curitiba. Óculos de grau, sol, lentes de contato. Compre online e receba via motoboy. Exame de vista grátis!',
    keywords: [...generateKeywords('Centro', 'bairro'), 'ótica centro histórico curitiba'],
    heroTitle: 'Ótica Gouveia para o Centro',
    heroSubtitle: 'Tradição que Chega ao Centro de Curitiba',
    description: [
      'O Centro de Curitiba é o coração da cidade, concentrando comércio, cultura e história. Com a Rua XV de Novembro, a Praça Tiradentes e diversos pontos turísticos, o Centro atrai milhares de pessoas diariamente.',
      'A Ótica Gouveia atende trabalhadores e visitantes do Centro com qualidade. Oferecemos compra online com entrega via motoboy para compras acima de R$ 250,00, ou você pode visitar nossa loja no Pinheirinho.',
      'Com mais de 40 anos de tradição, oferecemos óculos de grau executivos e casuais, óculos de sol das melhores marcas, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Centro histórico e comercial da cidade',
    nearbyLandmarks: ['Rua XV de Novembro', 'Praça Tiradentes', 'Catedral Basílica'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'batel': {
    name: 'Batel',
    slug: '/otica-batel',
    title: 'Ótica Batel Curitiba | Óculos Premium | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Batel em Curitiba. Óculos de grau e sol de marcas premium. Entrega via motoboy. Exame de vista grátis. Consulte!',
    keywords: [...generateKeywords('Batel', 'bairro'), 'ótica batel premium', 'óculos grife batel'],
    heroTitle: 'Ótica Gouveia para o Batel',
    heroSubtitle: 'Elegância e Qualidade em Óculos',
    description: [
      'O Batel é um dos bairros mais nobres e elegantes de Curitiba, conhecido por seu comércio sofisticado e moradores exigentes. Com o Shopping Pátio Batel e diversas boutiques, o bairro é referência em qualidade.',
      'A Ótica Gouveia atende clientes do Batel que buscam qualidade e bom atendimento. Oferecemos marcas premium de óculos de grau e sol, com entrega via motoboy para compras acima de R$ 250,00.',
      'São mais de 40 anos oferecendo produtos de qualidade. Óculos de grau com lentes de alta tecnologia, óculos de sol originais, lentes de contato premium e exame de vista gratuito.'
    ],
    characteristics: 'Bairro nobre com comércio sofisticado',
    nearbyLandmarks: ['Shopping Pátio Batel', 'Avenida do Batel'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'agua-verde': {
    name: 'Água Verde',
    slug: '/otica-agua-verde',
    title: 'Ótica Água Verde Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o Água Verde em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy acima de R$250. Exame de vista grátis!',
    keywords: generateKeywords('Água Verde', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Água Verde',
    heroSubtitle: 'Qualidade para um Bairro de Qualidade',
    description: [
      'O Água Verde é um dos bairros mais valorizados de Curitiba, conhecido por sua excelente infraestrutura, gastronomia e qualidade de vida. Com moradores exigentes, o bairro demanda serviços de primeira linha.',
      'A Ótica Gouveia atende moradores do Água Verde com a qualidade que merecem. Oferecemos entrega via motoboy para compras acima de R$ 250,00, levando conforto e praticidade até você.',
      'Com tradição de mais de 40 anos, oferecemos óculos de grau modernos, óculos de sol originais, lentes de contato das melhores marcas e exame de vista gratuito com equipamentos modernos.'
    ],
    characteristics: 'Bairro valorizado com excelente gastronomia',
    nearbyLandmarks: ['Shopping Curitiba', 'Praça do Japão'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'bigorrilho': {
    name: 'Bigorrilho',
    slug: '/otica-bigorrilho',
    title: 'Ótica Bigorrilho Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica atendendo o Bigorrilho em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Bigorrilho', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Bigorrilho',
    heroSubtitle: 'Tradição e Modernidade em Óculos',
    description: [
      'O Bigorrilho é um bairro residencial de alto padrão em Curitiba, conhecido por suas ruas arborizadas e moradores que valorizam qualidade de vida. Próximo ao Parque Barigui, oferece tranquilidade e praticidade.',
      'A Ótica Gouveia atende os exigentes moradores do Bigorrilho. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00, garantindo conforto e qualidade.',
      'Mais de 40 anos de experiência em produtos ópticos. Óculos de grau com design moderno, óculos de sol de marcas renomadas, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial de alto padrão próximo ao Parque Barigui',
    nearbyLandmarks: ['Parque Barigui', 'Praça Espanha'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'portao': {
    name: 'Portão',
    slug: '/otica-portao',
    title: 'Ótica Portão Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Portão em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis. Visite-nos!',
    keywords: generateKeywords('Portão', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Portão',
    heroSubtitle: 'Cuidando da Visão da Sua Família',
    description: [
      'O Portão é um bairro tradicional de Curitiba, conhecido por sua forte identidade comercial e residencial. Com o Shopping Palladium e diversos estabelecimentos, o bairro oferece praticidade para moradores e visitantes.',
      'A Ótica Gouveia atende o Portão com qualidade e tradição. Nossa loja no Pinheirinho fica próxima, e oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'Com mais de 40 anos de experiência, oferecemos óculos de grau para toda a família, óculos de sol originais, lentes de contato e exame de vista gratuito. Parcelamento facilitado.'
    ],
    characteristics: 'Bairro tradicional com forte comércio',
    nearbyLandmarks: ['Shopping Palladium', 'Terminal Portão'],
    distanceFromStore: 'Aproximadamente 10 minutos de carro',
    type: 'bairro'
  },

  'xaxim': {
    name: 'Xaxim',
    slug: '/otica-xaxim',
    title: 'Ótica Xaxim Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Xaxim em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito. Confira!',
    keywords: generateKeywords('Xaxim', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Xaxim',
    heroSubtitle: 'Qualidade e Preço Justo',
    description: [
      'O Xaxim é um bairro residencial e comercial de Curitiba, localizado na região sul. Com forte senso de comunidade, o bairro abriga famílias que valorizam bons serviços e preços justos.',
      'A Ótica Gouveia está próxima ao Xaxim, oferecendo fácil acesso. Para maior comodidade, realizamos entrega via motoboy para compras acima de R$ 250,00 em toda a região.',
      'São mais de 40 anos oferecendo produtos de qualidade. Óculos de grau acessíveis, óculos de sol, lentes de contato e exame de vista gratuito. Preços que cabem no seu bolso.'
    ],
    characteristics: 'Bairro residencial com forte comércio local',
    nearbyLandmarks: ['Avenida Winston Churchill', 'Terminal Xaxim'],
    distanceFromStore: 'Aproximadamente 8 minutos de carro',
    type: 'bairro'
  },

  'santa-felicidade': {
    name: 'Santa Felicidade',
    slug: '/otica-santa-felicidade',
    title: 'Ótica Santa Felicidade Curitiba | Óculos | Ótica Gouveia',
    metaDescription: 'Ótica para Santa Felicidade em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis. Consulte!',
    keywords: [...generateKeywords('Santa Felicidade', 'bairro'), 'ótica colônia italiana curitiba'],
    heroTitle: 'Ótica Gouveia para Santa Felicidade',
    heroSubtitle: 'Tradição Italiana, Qualidade Gouveia',
    description: [
      'Santa Felicidade é um dos bairros mais charmosos de Curitiba, famoso por sua herança italiana, gastronomia típica e vinícolas. Com forte vocação turística, o bairro também abriga moradores que valorizam tradição e qualidade.',
      'A Ótica Gouveia atende moradores e visitantes de Santa Felicidade. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00, ou você pode visitar nossa loja no Pinheirinho.',
      'Com mais de 40 anos de tradição - assim como as cantinas italianas do bairro - oferecemos óculos de grau elegantes, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro tradicional com herança italiana e gastronomia típica',
    nearbyLandmarks: ['Portal de Santa Felicidade', 'Vinícolas', 'Restaurantes Italianos'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'bacacheri': {
    name: 'Bacacheri',
    slug: '/otica-bacacheri',
    title: 'Ótica Bacacheri Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Bacacheri em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Bacacheri', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Bacacheri',
    heroSubtitle: 'Cuidando da Sua Visão',
    description: [
      'O Bacacheri é um bairro residencial tranquilo de Curitiba, conhecido pelo Aeroporto Bacacheri e suas áreas verdes. Com moradores que valorizam qualidade de vida, o bairro combina tranquilidade com boa infraestrutura.',
      'A Ótica Gouveia atende os moradores do Bacacheri com praticidade. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos de experiência em cuidados visuais. Óculos de grau modernos, óculos de sol originais, lentes de contato das melhores marcas e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial tranquilo com aeroporto executivo',
    nearbyLandmarks: ['Aeroporto Bacacheri', 'Parque Bacacheri'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'reboucas': {
    name: 'Rebouças',
    slug: '/otica-reboucas',
    title: 'Ótica Rebouças Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Rebouças em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Rebouças', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Rebouças',
    heroSubtitle: 'Qualidade Central para Você',
    description: [
      'O Rebouças é um bairro central de Curitiba, conhecido pela Rodoferroviária e sua localização estratégica. Com forte movimentação comercial, o bairro atende milhares de pessoas diariamente.',
      'A Ótica Gouveia atende trabalhadores e moradores do Rebouças. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Com tradição de mais de 40 anos, oferecemos óculos de grau para todas as necessidades, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro central com a Rodoferroviária',
    nearbyLandmarks: ['Rodoferroviária de Curitiba', 'Shopping Estação'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'neo-ville': {
    name: 'Neo Ville',
    slug: '/otica-neo-ville',
    title: 'Ótica Neo Ville Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o Neo Ville em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy acima de R$250. Exame de vista grátis!',
    keywords: generateKeywords('Neo Ville', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Neo Ville',
    heroSubtitle: 'Modernidade em Cuidados Visuais',
    description: [
      'O Neo Ville é um loteamento moderno em Curitiba, conhecido por suas casas contemporâneas e moradores que valorizam inovação e qualidade de vida. Uma comunidade crescente que busca serviços de excelência.',
      'A Ótica Gouveia atende os moradores do Neo Ville. Nossa loja no Pinheirinho fica próxima, e oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos combinando tradição com modernidade. Óculos de grau com design contemporâneo, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Loteamento moderno com casas contemporâneas',
    nearbyLandmarks: ['Próximo ao Umbará'],
    distanceFromStore: 'Aproximadamente 5 minutos de carro',
    type: 'bairro'
  },

  'vila-sandra': {
    name: 'Vila Sandra',
    slug: '/otica-vila-sandra',
    title: 'Ótica Vila Sandra Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica de confiança na Vila Sandra com óculos de grau, sol e lentes. Vendemos online com entrega na Vila Sandra acima de R$250. Consulte-nos!',
    keywords: generateKeywords('Vila Sandra', 'bairro'),
    heroTitle: 'Ótica Gouveia para a Vila Sandra',
    heroSubtitle: 'Qualidade e Tradição para Toda a Família',
    description: [
      'A Vila Sandra é um bairro residencial de Curitiba, com forte vocação familiar e comunitária. Conhecida por suas ruas tranquilas e proximidade com centros comerciais, a Vila Sandra abriga famílias que valorizam qualidade de vida e bons serviços locais.',
      'A Ótica Gouveia, com mais de 40 anos de tradição em Curitiba, atende moradores da Vila Sandra oferecendo óculos de grau, óculos de sol e lentes de contato com grande variedade de marcas e modelos. Vendemos online com entrega via motoboy para compras acima de R$ 250,00.',
      'Nossa localização no Pinheirinho é estratégica e de fácil acesso. Você também pode comprar online e retirar em nossa loja física próxima ao Condor Umbará. Nosso compromisso é oferecer produtos de qualidade com atendimento familiar e acolhedor.'
    ],
    characteristics: 'Bairro residencial familiar e tranquilo',
    nearbyLandmarks: ['Próximo ao Pinheirinho'],
    distanceFromStore: 'Aproximadamente 5 minutos de carro',
    type: 'bairro'
  },

  'vila-formosa': {
    name: 'Vila Formosa',
    slug: '/otica-vila-formosa',
    title: 'Ótica Vila Formosa Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para a Vila Formosa em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Vila Formosa', 'bairro'),
    heroTitle: 'Ótica Gouveia para a Vila Formosa',
    heroSubtitle: 'Cuidando da Sua Família',
    description: [
      'A Vila Formosa é um bairro residencial acolhedor de Curitiba, conhecido por suas ruas tranquilas e forte senso de comunidade. Moradores da Vila Formosa valorizam serviços de qualidade e atendimento personalizado.',
      'A Ótica Gouveia atende os moradores da Vila Formosa com excelência. Oferecemos entrega via motoboy para compras acima de R$ 250,00, levando qualidade até você.',
      'São mais de 40 anos de tradição em cuidados visuais. Óculos de grau para toda a família, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial com forte senso de comunidade',
    nearbyLandmarks: ['Região sul de Curitiba'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'cristo-rei': {
    name: 'Cristo Rei',
    slug: '/otica-cristo-rei',
    title: 'Ótica Cristo Rei Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Cristo Rei em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Cristo Rei', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Cristo Rei',
    heroSubtitle: 'Qualidade Perto da UFPR',
    description: [
      'O Cristo Rei é um bairro tradicional de Curitiba, conhecido pela proximidade com o Campus Politécnico da UFPR e sua atmosfera universitária. Com forte movimentação de estudantes e moradores, o bairro demanda serviços de qualidade.',
      'A Ótica Gouveia atende estudantes e moradores do Cristo Rei. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00, com preços especiais.',
      'Mais de 40 anos de experiência atendendo famílias e estudantes. Óculos de grau acessíveis, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro universitário próximo ao Campus Politécnico da UFPR',
    nearbyLandmarks: ['UFPR Politécnico', 'Jardim Botânico'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'ecoville': {
    name: 'Ecoville',
    slug: '/otica-ecoville',
    title: 'Ótica Ecoville Curitiba | Óculos Premium | Ótica Gouveia',
    metaDescription: 'Ótica para o Ecoville em Curitiba. Óculos de grau e sol de marcas premium. Entrega via motoboy. Exame de vista grátis!',
    keywords: [...generateKeywords('Ecoville', 'bairro'), 'ótica ecoville premium'],
    heroTitle: 'Ótica Gouveia para o Ecoville',
    heroSubtitle: 'Sofisticação em Cuidados Visuais',
    description: [
      'O Ecoville é uma região de alto padrão em Curitiba, conhecida por seus condomínios de luxo e moradores exigentes. Com excelente infraestrutura, o bairro demanda serviços premium e atendimento diferenciado.',
      'A Ótica Gouveia atende os moradores do Ecoville com a qualidade que merecem. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'São mais de 40 anos oferecendo produtos de excelência. Óculos de grau de marcas premium, óculos de sol originais, lentes de contato de alta qualidade e exame de vista gratuito.'
    ],
    characteristics: 'Região de alto padrão com condomínios de luxo',
    nearbyLandmarks: ['Parque Barigui', 'ParkShopping Barigui'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'jardim-botanico': {
    name: 'Jardim Botânico',
    slug: '/otica-jardim-botanico',
    title: 'Ótica Jardim Botânico Curitiba | Óculos | Ótica Gouveia',
    metaDescription: 'Ótica para o Jardim Botânico em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Jardim Botânico', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Jardim Botânico',
    heroSubtitle: 'Qualidade com Vista para a Natureza',
    description: [
      'O Jardim Botânico é um dos bairros mais icônicos de Curitiba, abrigando o famoso parque com a estufa de vidro. Moradores e visitantes desfrutam de qualidade de vida única, em contato com a natureza.',
      'A Ótica Gouveia atende moradores do Jardim Botânico. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos cuidando da visão dos curitibanos. Óculos de grau elegantes, óculos de sol com proteção UV para curtir o parque, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro icônico com o famoso parque Jardim Botânico',
    nearbyLandmarks: ['Parque Jardim Botânico', 'Estufa de Vidro'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'juveve': {
    name: 'Juvevê',
    slug: '/otica-juveve',
    title: 'Ótica Juvevê Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Juvevê em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Juvevê', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Juvevê',
    heroSubtitle: 'Tradição para um Bairro Tradicional',
    description: [
      'O Juvevê é um bairro residencial tradicional de Curitiba, conhecido por suas ruas arborizadas e casas charmosas. Moradores do Juvevê valorizam qualidade de vida e serviços de confiança.',
      'A Ótica Gouveia atende os moradores do Juvevê. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos de tradição - combinando perfeitamente com a tradição do bairro. Óculos de grau clássicos e modernos, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial tradicional com ruas arborizadas',
    nearbyLandmarks: ['Próximo ao Centro Cívico'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'capao-raso': {
    name: 'Capão Raso',
    slug: '/otica-capao-raso',
    title: 'Ótica Capão Raso Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para o Capão Raso em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Capão Raso', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Capão Raso',
    heroSubtitle: 'Qualidade para Toda a Família',
    description: [
      'O Capão Raso é um bairro residencial e comercial de Curitiba, conhecido pelo Terminal Capão Raso e sua forte vocação comunitária. Famílias do Capão Raso buscam serviços de qualidade com bom atendimento.',
      'A Ótica Gouveia está próxima ao Capão Raso, oferecendo fácil acesso. Para maior comodidade, realizamos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos atendendo famílias curitibanas. Óculos de grau para todas as idades, óculos de sol, lentes de contato e exame de vista gratuito. Preços acessíveis.'
    ],
    characteristics: 'Bairro familiar com forte comércio local',
    nearbyLandmarks: ['Terminal Capão Raso', 'Shopping Palladium'],
    distanceFromStore: 'Aproximadamente 8 minutos de carro',
    type: 'bairro'
  },

  'jardim-das-americas': {
    name: 'Jardim das Américas',
    slug: '/otica-jardim-das-americas',
    title: 'Ótica Jardim das Américas Curitiba | Óculos | Ótica Gouveia',
    metaDescription: 'Ótica para o Jardim das Américas em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Jardim das Américas', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Jardim das Américas',
    heroSubtitle: 'Cuidando da Visão dos Universitários',
    description: [
      'O Jardim das Américas é um bairro com forte presença universitária em Curitiba, próximo a importantes faculdades e universidades. Estudantes e moradores buscam serviços de qualidade com preços acessíveis.',
      'A Ótica Gouveia atende estudantes e moradores do Jardim das Américas. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos oferecendo óculos de qualidade. Óculos de grau para estudar e trabalhar, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro universitário com diversas faculdades',
    nearbyLandmarks: ['Universidades', 'Próximo ao Cajuru'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'novo-mundo': {
    name: 'Novo Mundo',
    slug: '/otica-novo-mundo',
    title: 'Ótica Novo Mundo Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o Novo Mundo em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Novo Mundo', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Novo Mundo',
    heroSubtitle: 'Tradição para um Novo Mundo',
    description: [
      'O Novo Mundo é um bairro residencial de Curitiba, conhecido por sua localização estratégica e fácil acesso. Moradores do Novo Mundo valorizam praticidade e bons serviços na região.',
      'A Ótica Gouveia está próxima ao Novo Mundo, oferecendo fácil acesso. Para maior comodidade, realizamos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos de tradição em cuidados visuais. Óculos de grau modernos, óculos de sol originais, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial com localização estratégica',
    nearbyLandmarks: ['Próximo ao Portão'],
    distanceFromStore: 'Aproximadamente 10 minutos de carro',
    type: 'bairro'
  },

  'taruma': {
    name: 'Tarumã',
    slug: '/otica-taruma',
    title: 'Ótica Tarumã Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Tarumã em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Tarumã', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Tarumã',
    heroSubtitle: 'Qualidade Natural para Você',
    description: [
      'O Tarumã é um bairro tranquilo de Curitiba, conhecido pelo Parque Municipal do Iguaçu e suas áreas verdes. Moradores do Tarumã valorizam qualidade de vida em contato com a natureza.',
      'A Ótica Gouveia atende os moradores do Tarumã. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos cuidando da visão. Óculos de grau para todas as necessidades, óculos de sol com proteção UV para atividades ao ar livre, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro verde próximo ao Parque Iguaçu',
    nearbyLandmarks: ['Parque Municipal do Iguaçu'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'tatuquara': {
    name: 'Tatuquara',
    slug: '/otica-tatuquara',
    title: 'Ótica Tatuquara Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o Tatuquara em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Tatuquara', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Tatuquara',
    heroSubtitle: 'Preços Justos para Você',
    description: [
      'O Tatuquara é um bairro populoso de Curitiba, localizado na região sul. Com forte identidade comunitária, o bairro abriga famílias que buscam serviços de qualidade com preços acessíveis.',
      'A Ótica Gouveia está próxima ao Tatuquara, oferecendo fácil acesso. Para maior comodidade, realizamos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos oferecendo qualidade a preços justos. Óculos de grau acessíveis, óculos de sol, lentes de contato e exame de vista gratuito. Parcelamento facilitado.'
    ],
    characteristics: 'Bairro populoso com forte comunidade',
    nearbyLandmarks: ['Terminal Tatuquara'],
    distanceFromStore: 'Aproximadamente 12 minutos de carro',
    type: 'bairro'
  },

  'campo-comprido': {
    name: 'Campo Comprido',
    slug: '/otica-campo-comprido',
    title: 'Ótica Campo Comprido Curitiba | Óculos | Ótica Gouveia',
    metaDescription: 'Ótica para o Campo Comprido em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Campo Comprido', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Campo Comprido',
    heroSubtitle: 'Qualidade Estendida até Você',
    description: [
      'O Campo Comprido é um bairro em crescimento de Curitiba, conhecido por sua extensão e desenvolvimento residencial. Moradores do Campo Comprido buscam serviços de qualidade com praticidade.',
      'A Ótica Gouveia atende os moradores do Campo Comprido. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos de experiência. Óculos de grau modernos, óculos de sol, lentes de contato das melhores marcas e exame de vista gratuito.'
    ],
    characteristics: 'Bairro em crescimento com desenvolvimento residencial',
    nearbyLandmarks: ['Próximo ao Mossunguê'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'hugo-lange': {
    name: 'Hugo Lange',
    slug: '/otica-hugo-lange',
    title: 'Ótica Hugo Lange Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Hugo Lange em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Hugo Lange', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Hugo Lange',
    heroSubtitle: 'Elegância em Cada Detalhe',
    description: [
      'O Hugo Lange é um bairro residencial charmoso de Curitiba, conhecido por suas casas elegantes e ruas arborizadas. Moradores do Hugo Lange valorizam qualidade e bom gosto em tudo.',
      'A Ótica Gouveia atende os exigentes moradores do Hugo Lange. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos oferecendo produtos de qualidade. Óculos de grau elegantes, óculos de sol de marcas renomadas, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial elegante com casas charmosas',
    nearbyLandmarks: ['Próximo ao Cabral'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'tingui': {
    name: 'Tingui',
    slug: '/otica-tingui',
    title: 'Ótica Tingui Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Tingui em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Tingui', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Tingui',
    heroSubtitle: 'Natureza e Qualidade Visual',
    description: [
      'O Tingui é um bairro privilegiado de Curitiba, famoso pelo Parque Tingui com seu memorial ucraniano. Moradores desfrutam de qualidade de vida em contato com a natureza e cultura.',
      'A Ótica Gouveia atende os moradores do Tingui. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos cuidando da visão. Óculos de grau para todas as atividades, óculos de sol para aproveitar o parque, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro verde com o famoso Parque Tingui',
    nearbyLandmarks: ['Parque Tingui', 'Memorial Ucraniano'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'merces': {
    name: 'Mercês',
    slug: '/otica-merces',
    title: 'Ótica Mercês Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Mercês em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Mercês', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Mercês',
    heroSubtitle: 'Qualidade no Coração de Curitiba',
    description: [
      'O Mercês é um bairro residencial e comercial bem localizado de Curitiba, conhecido por sua praticidade e boa infraestrutura. Moradores do Mercês valorizam qualidade e conveniência.',
      'A Ótica Gouveia atende os moradores do Mercês. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos de tradição em produtos ópticos. Óculos de grau modernos, óculos de sol originais, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro bem localizado com ótima infraestrutura',
    nearbyLandmarks: ['Próximo ao Centro'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'cabral': {
    name: 'Cabral',
    slug: '/otica-cabral',
    title: 'Ótica Cabral Curitiba | Óculos Premium | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Cabral em Curitiba. Óculos de grau e sol de marcas premium. Entrega via motoboy. Exame de vista grátis!',
    keywords: [...generateKeywords('Cabral', 'bairro'), 'ótica cabral premium'],
    heroTitle: 'Ótica Gouveia para o Cabral',
    heroSubtitle: 'Sofisticação em Óculos',
    description: [
      'O Cabral é um dos bairros mais nobres de Curitiba, conhecido por suas casas elegantes e moradores exigentes. Com excelente infraestrutura, o bairro demanda serviços de alta qualidade.',
      'A Ótica Gouveia atende os moradores do Cabral com produtos premium. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos oferecendo excelência. Óculos de grau de marcas premium, óculos de sol originais, lentes de contato de alta qualidade e exame de vista gratuito.'
    ],
    characteristics: 'Bairro nobre com casas elegantes',
    nearbyLandmarks: ['Próximo ao Juvevê', 'Alto da Glória'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'alto-da-xv': {
    name: 'Alto da XV',
    slug: '/otica-alto-da-xv',
    title: 'Ótica Alto da XV Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para o Alto da XV em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Alto da XV', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Alto da XV',
    heroSubtitle: 'Qualidade no Alto de Curitiba',
    description: [
      'O Alto da XV é um bairro residencial de Curitiba, conhecido por sua localização elevada e ruas tranquilas. Moradores do Alto da XV valorizam qualidade de vida e serviços de confiança.',
      'A Ótica Gouveia atende os moradores do Alto da XV. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos cuidando da visão dos curitibanos. Óculos de grau clássicos e modernos, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial em localização elevada',
    nearbyLandmarks: ['Centro de Curitiba'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'guabirotuba': {
    name: 'Guabirotuba',
    slug: '/otica-guabirotuba',
    title: 'Ótica Guabirotuba Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o Guabirotuba em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Guabirotuba', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Guabirotuba',
    heroSubtitle: 'Qualidade para Sua Família',
    description: [
      'O Guabirotuba é um bairro residencial de Curitiba, conhecido por suas áreas verdes e proximidade com o Jardim Botânico. Moradores do Guabirotuba valorizam tranquilidade e bons serviços.',
      'A Ótica Gouveia atende os moradores do Guabirotuba. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos de experiência. Óculos de grau para toda a família, óculos de sol com proteção UV, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial verde próximo ao Jardim Botânico',
    nearbyLandmarks: ['Jardim Botânico', 'Parque das Pedreiras'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'parolin': {
    name: 'Parolin',
    slug: '/otica-parolin',
    title: 'Ótica Parolin Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Parolin em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Parolin', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Parolin',
    heroSubtitle: 'Tradição e Qualidade',
    description: [
      'O Parolin é um bairro residencial tradicional de Curitiba, com forte senso de comunidade. Moradores do Parolin valorizam serviços de qualidade com atendimento personalizado.',
      'A Ótica Gouveia atende os moradores do Parolin. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos de tradição em cuidados visuais. Óculos de grau acessíveis, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial com forte comunidade',
    nearbyLandmarks: ['Próximo ao Centro'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'abranches': {
    name: 'Abranches',
    slug: '/otica-abranches',
    title: 'Ótica Abranches Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o Abranches em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Abranches', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Abranches',
    heroSubtitle: 'Qualidade com Vista para a Cidade',
    description: [
      'O Abranches é um bairro residencial de Curitiba, localizado em uma região elevada com belas vistas da cidade. Moradores do Abranches valorizam tranquilidade e qualidade de vida.',
      'A Ótica Gouveia atende os moradores do Abranches. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos cuidando da visão. Óculos de grau modernos, óculos de sol, lentes de contato das melhores marcas e exame de vista gratuito.'
    ],
    characteristics: 'Bairro elevado com belas vistas',
    nearbyLandmarks: ['Próximo ao Pilarzinho'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'uberaba': {
    name: 'Uberaba',
    slug: '/otica-uberaba',
    title: 'Ótica Uberaba Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Uberaba em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Uberaba', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Uberaba',
    heroSubtitle: 'Cuidando da Sua Visão',
    description: [
      'O Uberaba é um bairro residencial de Curitiba, conhecido por sua localização estratégica e boa infraestrutura. Moradores do Uberaba valorizam praticidade e serviços de qualidade.',
      'A Ótica Gouveia atende os moradores do Uberaba. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos de experiência em produtos ópticos. Óculos de grau para todas as necessidades, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial com boa infraestrutura',
    nearbyLandmarks: ['Próximo ao Cajuru'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'vila-izabel': {
    name: 'Vila Izabel',
    slug: '/otica-vila-izabel',
    title: 'Ótica Vila Izabel Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para a Vila Izabel em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Vila Izabel', 'bairro'),
    heroTitle: 'Ótica Gouveia para a Vila Izabel',
    heroSubtitle: 'Elegância em Cuidados Visuais',
    description: [
      'A Vila Izabel é um bairro residencial de Curitiba, conhecida por suas casas elegantes e moradores que valorizam qualidade de vida. Um bairro tranquilo com excelente infraestrutura.',
      'A Ótica Gouveia atende os moradores da Vila Izabel. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos oferecendo produtos de qualidade. Óculos de grau elegantes, óculos de sol originais, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial elegante e tranquilo',
    nearbyLandmarks: ['Próximo ao Portão'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'alto-da-gloria': {
    name: 'Alto da Glória',
    slug: '/otica-alto-da-gloria',
    title: 'Ótica Alto da Glória Curitiba | Óculos | Ótica Gouveia',
    metaDescription: 'Ótica para o Alto da Glória em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Alto da Glória', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Alto da Glória',
    heroSubtitle: 'Glória em Cada Detalhe',
    description: [
      'O Alto da Glória é um bairro residencial de Curitiba, próximo ao Centro Cívico e áreas nobres da cidade. Moradores do Alto da Glória valorizam localização privilegiada e serviços de qualidade.',
      'A Ótica Gouveia atende os moradores do Alto da Glória. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos de excelência em produtos ópticos. Óculos de grau sofisticados, óculos de sol de marcas renomadas, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro nobre próximo ao Centro Cívico',
    nearbyLandmarks: ['Centro Cívico', 'Palácio Iguaçu'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'pilarzinho': {
    name: 'Pilarzinho',
    slug: '/otica-pilarzinho',
    title: 'Ótica Pilarzinho Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o Pilarzinho em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Pilarzinho', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Pilarzinho',
    heroSubtitle: 'Tradição e Qualidade',
    description: [
      'O Pilarzinho é um bairro residencial de Curitiba, conhecido por suas ruas tranquilas e moradores que valorizam qualidade de vida. Um bairro com forte identidade e senso de comunidade.',
      'A Ótica Gouveia atende os moradores do Pilarzinho. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos de tradição. Óculos de grau para toda a família, óculos de sol, lentes de contato das melhores marcas e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial tranquilo com comunidade ativa',
    nearbyLandmarks: ['Próximo ao Abranches'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'santa-candida': {
    name: 'Santa Cândida',
    slug: '/otica-santa-candida',
    title: 'Ótica Santa Cândida Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para o Santa Cândida em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Santa Cândida', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Santa Cândida',
    heroSubtitle: 'Qualidade para o Norte de Curitiba',
    description: [
      'O Santa Cândida é um bairro populoso do norte de Curitiba, conhecido pelo Terminal Santa Cândida e sua forte vocação comercial. Moradores buscam serviços de qualidade com praticidade.',
      'A Ótica Gouveia atende os moradores do Santa Cândida. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos atendendo curitibanos. Óculos de grau acessíveis, óculos de sol, lentes de contato e exame de vista gratuito. Parcelamento facilitado.'
    ],
    characteristics: 'Bairro populoso do norte com forte comércio',
    nearbyLandmarks: ['Terminal Santa Cândida'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'atuba': {
    name: 'Atuba',
    slug: '/otica-atuba',
    title: 'Ótica Atuba Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Atuba em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Atuba', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Atuba',
    heroSubtitle: 'Cuidando da Sua Visão',
    description: [
      'O Atuba é um bairro residencial de Curitiba, localizado na região norte. Com ruas tranquilas e boa infraestrutura, o bairro abriga famílias que valorizam qualidade de vida.',
      'A Ótica Gouveia atende os moradores do Atuba. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos de experiência. Óculos de grau modernos, óculos de sol originais, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial tranquilo do norte',
    nearbyLandmarks: ['Próximo a Colombo'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'bairro-alto': {
    name: 'Bairro Alto',
    slug: '/otica-bairro-alto',
    title: 'Ótica Bairro Alto Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para o Bairro Alto em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Bairro Alto', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Bairro Alto',
    heroSubtitle: 'Qualidade no Alto',
    description: [
      'O Bairro Alto é um bairro residencial de Curitiba, conhecido por sua localização elevada e vistas panorâmicas. Moradores do Bairro Alto valorizam tranquilidade e bons serviços.',
      'A Ótica Gouveia atende os moradores do Bairro Alto. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos cuidando da visão. Óculos de grau para todas as necessidades, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial em localização elevada',
    nearbyLandmarks: ['Próximo ao Bacacheri'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'boa-vista': {
    name: 'Boa Vista',
    slug: '/otica-boa-vista',
    title: 'Ótica Boa Vista Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Boa Vista em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Boa Vista', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Boa Vista',
    heroSubtitle: 'Uma Boa Vista para Sua Visão',
    description: [
      'O Boa Vista é um bairro tradicional de Curitiba, conhecido pelo Terminal do Boa Vista e sua forte vocação comercial. Moradores buscam serviços de qualidade com praticidade.',
      'A Ótica Gouveia atende os moradores do Boa Vista. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos de tradição. Óculos de grau acessíveis, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro tradicional com forte comércio',
    nearbyLandmarks: ['Terminal Boa Vista'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'bom-retiro': {
    name: 'Bom Retiro',
    slug: '/otica-bom-retiro',
    title: 'Ótica Bom Retiro Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para o Bom Retiro em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Bom Retiro', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Bom Retiro',
    heroSubtitle: 'Bom Retiro, Boa Visão',
    description: [
      'O Bom Retiro é um bairro residencial de Curitiba, conhecido por suas áreas verdes e tranquilidade. Moradores do Bom Retiro valorizam qualidade de vida e serviços de confiança.',
      'A Ótica Gouveia atende os moradores do Bom Retiro. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos de experiência em cuidados visuais. Óculos de grau modernos, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial verde e tranquilo',
    nearbyLandmarks: ['Próximo ao Centro'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'orleans': {
    name: 'Orleans',
    slug: '/otica-orleans',
    title: 'Ótica Orleans Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Orleans em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Orleans', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Orleans',
    heroSubtitle: 'Qualidade Real para Você',
    description: [
      'O Orleans é um bairro residencial de Curitiba, conhecido por sua localização privilegiada e boa infraestrutura. Moradores do Orleans valorizam praticidade e bons serviços.',
      'A Ótica Gouveia atende os moradores do Orleans. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos oferecendo qualidade. Óculos de grau elegantes, óculos de sol originais, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial com boa infraestrutura',
    nearbyLandmarks: ['Próximo ao Hauer'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'lindoia': {
    name: 'Lindóia',
    slug: '/otica-lindoia',
    title: 'Ótica Lindóia Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Lindóia em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Lindóia', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Lindóia',
    heroSubtitle: 'Beleza e Qualidade Visual',
    description: [
      'O Lindóia é um bairro residencial de Curitiba, conhecido por suas ruas arborizadas e moradores que valorizam qualidade de vida. Um bairro tranquilo com boa localização.',
      'A Ótica Gouveia atende os moradores do Lindóia. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos de tradição em produtos ópticos. Óculos de grau modernos, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial arborizado e tranquilo',
    nearbyLandmarks: ['Próximo ao Santa Felicidade'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'sao-joao': {
    name: 'São João',
    slug: '/otica-sao-joao',
    title: 'Ótica São João Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro São João em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('São João', 'bairro'),
    heroTitle: 'Ótica Gouveia para o São João',
    heroSubtitle: 'Tradição e Fé em Qualidade',
    description: [
      'O São João é um bairro residencial de Curitiba, conhecido por sua localização próxima ao Mercês e Centro. Moradores do São João valorizam praticidade e serviços de confiança.',
      'A Ótica Gouveia atende os moradores do São João. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos de experiência. Óculos de grau para todas as necessidades, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial bem localizado',
    nearbyLandmarks: ['Próximo ao Mercês'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'fanny': {
    name: 'Fanny',
    slug: '/otica-fanny',
    title: 'Ótica Fanny Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Fanny em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Fanny', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Fanny',
    heroSubtitle: 'Qualidade Familiar',
    description: [
      'O Fanny é um bairro residencial de Curitiba, localizado na região sul da cidade. Com forte senso de comunidade, o bairro abriga famílias que valorizam qualidade de vida e bons serviços.',
      'A Ótica Gouveia está próxima ao Fanny, oferecendo fácil acesso. Para maior comodidade, realizamos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos atendendo famílias curitibanas. Óculos de grau para toda a família, óculos de sol, lentes de contato e exame de vista gratuito. Preços acessíveis.'
    ],
    characteristics: 'Bairro residencial familiar na região sul',
    nearbyLandmarks: ['Próximo ao Hauer'],
    distanceFromStore: 'Aproximadamente 8 minutos de carro',
    type: 'bairro'
  },

  'sao-francisco': {
    name: 'São Francisco',
    slug: '/otica-sao-francisco',
    title: 'Ótica São Francisco Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro São Francisco em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('São Francisco', 'bairro'),
    heroTitle: 'Ótica Gouveia para o São Francisco',
    heroSubtitle: 'Qualidade Histórica',
    description: [
      'O São Francisco é um bairro histórico de Curitiba, abrigando a Igreja da Ordem e o Largo da Ordem. Com forte vocação cultural e boemia, o bairro atrai moradores e visitantes.',
      'A Ótica Gouveia atende moradores e frequentadores do São Francisco. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos de tradição - assim como o bairro. Óculos de grau elegantes, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro histórico e cultural do Centro',
    nearbyLandmarks: ['Largo da Ordem', 'Igreja da Ordem'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  // ==================== BAIRROS NÃO OFICIAIS ====================

  'barigui': {
    name: 'Barigui',
    slug: '/otica-barigui',
    title: 'Ótica Barigui Curitiba | Óculos Premium | Ótica Gouveia',
    metaDescription: 'Ótica próxima ao Parque Barigui em Curitiba. Óculos de grau e sol de marcas premium. Entrega via motoboy. Exame de vista grátis!',
    keywords: [...generateKeywords('Barigui', 'bairro'), 'ótica parque barigui', 'óculos barigui'],
    heroTitle: 'Ótica Gouveia - Região do Barigui',
    heroSubtitle: 'Qualidade com Vista para o Parque',
    description: [
      'A região do Barigui é uma das mais valorizadas de Curitiba, conhecida pelo icônico Parque Barigui com seus lagos, áreas verdes e infraestrutura de lazer. Moradores da região valorizam qualidade de vida e serviços premium.',
      'A Ótica Gouveia atende moradores da região do Barigui com produtos de alta qualidade. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos oferecendo excelência em produtos ópticos. Óculos de grau premium para suas atividades ao ar livre, óculos de sol com proteção UV para curtir o parque, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Região nobre próxima ao Parque Barigui',
    nearbyLandmarks: ['Parque Barigui', 'ParkShopping Barigui'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'centro-civico': {
    name: 'Centro Cívico',
    slug: '/otica-centro-civico',
    title: 'Ótica Centro Cívico Curitiba | Óculos Executivos | Ótica Gouveia',
    metaDescription: 'Ótica para o Centro Cívico em Curitiba. Óculos de grau executivos e sol. Entrega via motoboy. Exame de vista grátis!',
    keywords: [...generateKeywords('Centro Cívico', 'bairro'), 'ótica palácio iguaçu'],
    heroTitle: 'Ótica Gouveia para o Centro Cívico',
    heroSubtitle: 'Elegância para Profissionais',
    description: [
      'O Centro Cívico é o coração administrativo de Curitiba, abrigando o Palácio Iguaçu e diversos órgãos públicos. Profissionais que trabalham na região buscam elegância e qualidade em tudo.',
      'A Ótica Gouveia atende os profissionais do Centro Cívico com produtos executivos. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos atendendo profissionais exigentes. Óculos de grau executivos, óculos de sol elegantes, lentes de contato premium e exame de vista gratuito.'
    ],
    characteristics: 'Centro administrativo de Curitiba',
    nearbyLandmarks: ['Palácio Iguaçu', 'Museu Oscar Niemeyer'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'capao-da-imbuia': {
    name: 'Capão da Imbuia',
    slug: '/otica-capao-da-imbuia',
    title: 'Ótica Capão da Imbuia Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para o Capão da Imbuia em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Capão da Imbuia', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Capão da Imbuia',
    heroSubtitle: 'Natureza e Qualidade Visual',
    description: [
      'O Capão da Imbuia é um bairro residencial de Curitiba, conhecido pelo Parque Capão da Imbuia com seu zoológico e áreas verdes. Moradores valorizam contato com a natureza e qualidade de vida.',
      'A Ótica Gouveia atende os moradores do Capão da Imbuia. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos cuidando da visão. Óculos de grau para todas as idades, óculos de sol para passeios no parque, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro verde com zoológico e parque',
    nearbyLandmarks: ['Zoológico de Curitiba', 'Parque Capão da Imbuia'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'santa-quiteria': {
    name: 'Santa Quitéria',
    slug: '/otica-santa-quiteria',
    title: 'Ótica Santa Quitéria Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o Santa Quitéria em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Santa Quitéria', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Santa Quitéria',
    heroSubtitle: 'Qualidade para Sua Família',
    description: [
      'O Santa Quitéria é um bairro residencial de Curitiba, conhecido por sua tranquilidade e moradores que valorizam qualidade de vida. Um bairro familiar com boa infraestrutura.',
      'A Ótica Gouveia atende os moradores do Santa Quitéria. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos atendendo famílias. Óculos de grau para toda a família, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial familiar e tranquilo',
    nearbyLandmarks: ['Próximo ao Campo Comprido'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'mossungue': {
    name: 'Mossunguê',
    slug: '/otica-mossungue',
    title: 'Ótica Mossunguê Curitiba | Óculos Premium | Ótica Gouveia',
    metaDescription: 'Ótica para o Mossunguê em Curitiba. Óculos de grau e sol premium. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Mossunguê', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Mossunguê',
    heroSubtitle: 'Sofisticação em Cuidados Visuais',
    description: [
      'O Mossunguê é uma região de alto padrão em Curitiba, conhecida por seus condomínios de luxo e moradores exigentes. Próximo ao Ecoville, o bairro demanda serviços de alta qualidade.',
      'A Ótica Gouveia atende os moradores do Mossunguê com produtos premium. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos oferecendo excelência. Óculos de grau de marcas premium, óculos de sol originais, lentes de contato de alta qualidade e exame de vista gratuito.'
    ],
    characteristics: 'Região de alto padrão próxima ao Ecoville',
    nearbyLandmarks: ['Ecoville', 'ParkShopping Barigui'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'seminario': {
    name: 'Seminário',
    slug: '/otica-seminario',
    title: 'Ótica Seminário Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Seminário em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Seminário', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Seminário',
    heroSubtitle: 'Tradição e Qualidade',
    description: [
      'O Seminário é um bairro residencial de Curitiba, conhecido por suas casas elegantes e moradores que valorizam tradição. Um bairro tranquilo com excelente infraestrutura.',
      'A Ótica Gouveia atende os moradores do Seminário. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos de tradição em cuidados visuais. Óculos de grau clássicos e modernos, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial tradicional',
    nearbyLandmarks: ['Próximo ao Bom Retiro'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'barreirinha': {
    name: 'Barreirinha',
    slug: '/otica-barreirinha',
    title: 'Ótica Barreirinha Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para a Barreirinha em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Barreirinha', 'bairro'),
    heroTitle: 'Ótica Gouveia para a Barreirinha',
    heroSubtitle: 'Qualidade para o Norte de Curitiba',
    description: [
      'A Barreirinha é um bairro do norte de Curitiba, conhecido pelo Terminal Barreirinha e seu parque. Com forte movimentação comercial, o bairro atende milhares de moradores.',
      'A Ótica Gouveia atende os moradores da Barreirinha. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos de experiência. Óculos de grau acessíveis, óculos de sol, lentes de contato e exame de vista gratuito. Parcelamento facilitado.'
    ],
    characteristics: 'Bairro do norte com terminal de ônibus',
    nearbyLandmarks: ['Terminal Barreirinha', 'Parque da Barreirinha'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'santo-inacio': {
    name: 'Santo Inácio',
    slug: '/otica-santo-inacio',
    title: 'Ótica Santo Inácio Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o Santo Inácio em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Santo Inácio', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Santo Inácio',
    heroSubtitle: 'Fé na Qualidade Visual',
    description: [
      'O Santo Inácio é um bairro residencial de Curitiba, conhecido por sua tranquilidade e moradores que valorizam qualidade de vida. Um bairro familiar com forte senso de comunidade.',
      'A Ótica Gouveia atende os moradores do Santo Inácio. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos cuidando da visão das famílias. Óculos de grau para todas as idades, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial familiar',
    nearbyLandmarks: ['Próximo ao Santa Cândida'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'sao-lourenco': {
    name: 'São Lourenço',
    slug: '/otica-sao-lourenco',
    title: 'Ótica São Lourenço Curitiba | Óculos | Ótica Gouveia',
    metaDescription: 'Ótica para o São Lourenço em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('São Lourenço', 'bairro'),
    heroTitle: 'Ótica Gouveia para o São Lourenço',
    heroSubtitle: 'Qualidade com Vista para o Parque',
    description: [
      'O São Lourenço é um bairro privilegiado de Curitiba, conhecido pelo Parque São Lourenço com seu lago e áreas de lazer. Moradores desfrutam de qualidade de vida em contato com a natureza.',
      'A Ótica Gouveia atende os moradores do São Lourenço. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos de experiência. Óculos de grau modernos, óculos de sol para curtir o parque, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro verde com o Parque São Lourenço',
    nearbyLandmarks: ['Parque São Lourenço', 'Ópera de Arame'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'riviera': {
    name: 'Riviera',
    slug: '/otica-riviera',
    title: 'Ótica Riviera Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para a Riviera em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Riviera', 'bairro'),
    heroTitle: 'Ótica Gouveia para a Riviera',
    heroSubtitle: 'Elegância e Sofisticação',
    description: [
      'A Riviera é um loteamento de alto padrão em Curitiba, conhecido por suas casas elegantes e moradores exigentes. Um empreendimento que valoriza qualidade de vida e exclusividade.',
      'A Ótica Gouveia atende os moradores da Riviera com produtos de alta qualidade. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos oferecendo excelência. Óculos de grau de marcas premium, óculos de sol elegantes, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Loteamento de alto padrão',
    nearbyLandmarks: ['Próximo ao Umbará'],
    distanceFromStore: 'Aproximadamente 8 minutos de carro',
    type: 'bairro'
  },

  'campo-de-santana': {
    name: 'Campo de Santana',
    slug: '/otica-campo-de-santana',
    title: 'Ótica Campo de Santana Curitiba | Óculos | Ótica Gouveia',
    metaDescription: 'Ótica para o Campo de Santana em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Campo de Santana', 'bairro'),
    heroTitle: 'Ótica Gouveia para o Campo de Santana',
    heroSubtitle: 'Qualidade no Campo de Santana',
    description: [
      'O Campo de Santana é um bairro residencial de Curitiba, em constante crescimento. Com novos empreendimentos residenciais, o bairro atrai famílias que buscam qualidade de vida.',
      'A Ótica Gouveia atende os moradores do Campo de Santana. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos de tradição. Óculos de grau para toda a família, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial em crescimento',
    nearbyLandmarks: ['Próximo à CIC'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'augusta': {
    name: 'Augusta',
    slug: '/otica-augusta',
    title: 'Ótica Augusta Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para a Augusta em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Augusta', 'bairro'),
    heroTitle: 'Ótica Gouveia para a Augusta',
    heroSubtitle: 'Tradição em Cuidados Visuais',
    description: [
      'A Augusta é um bairro residencial de Curitiba, conhecido por sua tranquilidade e moradores que valorizam qualidade de vida. Um bairro familiar com boa infraestrutura.',
      'A Ótica Gouveia atende os moradores da Augusta. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos cuidando da visão. Óculos de grau para todas as necessidades, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro residencial tranquilo',
    nearbyLandmarks: ['Próximo ao Sítio Cercado'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'cascatinha': {
    name: 'Cascatinha',
    slug: '/otica-cascatinha',
    title: 'Ótica Cascatinha Curitiba | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para a Cascatinha em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista gratuito!',
    keywords: generateKeywords('Cascatinha', 'bairro'),
    heroTitle: 'Ótica Gouveia para a Cascatinha',
    heroSubtitle: 'Qualidade Natural',
    description: [
      'A Cascatinha é um bairro tranquilo de Curitiba, conhecido por suas áreas verdes e moradores que valorizam contato com a natureza. Um bairro familiar e acolhedor.',
      'A Ótica Gouveia atende os moradores da Cascatinha. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'São mais de 40 anos de experiência. Óculos de grau modernos, óculos de sol com proteção UV, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro verde e tranquilo',
    nearbyLandmarks: ['Próximo ao Pilarzinho'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  'vila-guaira': {
    name: 'Vila Guaíra',
    slug: '/otica-vila-guaira',
    title: 'Ótica Vila Guaíra Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para a Vila Guaíra em Curitiba. Óculos de grau, sol, lentes de contato. Entrega via motoboy. Exame de vista grátis!',
    keywords: generateKeywords('Vila Guaíra', 'bairro'),
    heroTitle: 'Ótica Gouveia para a Vila Guaíra',
    heroSubtitle: 'Qualidade Cultural',
    description: [
      'A Vila Guaíra é um bairro tradicional de Curitiba, conhecido pelo Teatro Guaíra e sua vocação cultural. Moradores e visitantes valorizam arte, cultura e serviços de qualidade.',
      'A Ótica Gouveia atende moradores da Vila Guaíra. Oferecemos compra online com entrega via motoboy para pedidos acima de R$ 250,00.',
      'Mais de 40 anos de tradição - assim como o Teatro Guaíra. Óculos de grau elegantes, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Bairro cultural com o Teatro Guaíra',
    nearbyLandmarks: ['Teatro Guaíra', 'Praça Santos Andrade'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  },

  // ==================== CIDADES DA REGIÃO METROPOLITANA ====================

  'araucaria': {
    name: 'Araucária',
    slug: '/otica-araucaria',
    title: 'Ótica Araucária PR | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica atendendo Araucária com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis. Consulte-nos!',
    keywords: [...generateKeywords('Araucária', 'cidade'), 'ótica araucária paraná'],
    heroTitle: 'Ótica Gouveia para Araucária',
    heroSubtitle: 'Qualidade da Capital para a Região',
    description: [
      'Araucária é uma importante cidade da região metropolitana de Curitiba, conhecida por seu polo industrial e forte economia. Moradores de Araucária buscam qualidade de vida e serviços de confiança.',
      'A Ótica Gouveia atende moradores de Araucária com facilidade. Oferecemos entrega via motoboy para compras acima de R$ 250,00, ou você pode visitar nossa loja no Pinheirinho, em Curitiba.',
      'São mais de 40 anos de tradição atendendo a região. Óculos de grau para trabalho e lazer, óculos de sol, lentes de contato das melhores marcas e exame de vista gratuito.'
    ],
    characteristics: 'Cidade industrial da região metropolitana',
    nearbyLandmarks: ['Centro de Araucária', 'Parque Cachoeira'],
    distanceFromStore: 'Aproximadamente 25 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'colombo': {
    name: 'Colombo',
    slug: '/otica-colombo',
    title: 'Ótica Colombo PR | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para Colombo com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis. Confira!',
    keywords: [...generateKeywords('Colombo', 'cidade'), 'ótica colombo paraná'],
    heroTitle: 'Ótica Gouveia para Colombo',
    heroSubtitle: 'Qualidade para a Segunda Maior Cidade',
    description: [
      'Colombo é a segunda maior cidade da região metropolitana de Curitiba, com população expressiva e forte economia. Moradores de Colombo buscam praticidade e serviços de qualidade.',
      'A Ótica Gouveia atende moradores de Colombo. Oferecemos entrega via motoboy para compras acima de R$ 250,00, levando qualidade até você com comodidade.',
      'Mais de 40 anos de experiência atendendo a região. Óculos de grau para toda a família, óculos de sol originais, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Segunda maior cidade da região metropolitana',
    nearbyLandmarks: ['Centro de Colombo', 'Gruta de Bacaetava'],
    distanceFromStore: 'Aproximadamente 20 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'pinhais': {
    name: 'Pinhais',
    slug: '/otica-pinhais',
    title: 'Ótica Pinhais PR | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para Pinhais com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista gratuito. Visite-nos!',
    keywords: [...generateKeywords('Pinhais', 'cidade'), 'ótica pinhais paraná'],
    heroTitle: 'Ótica Gouveia para Pinhais',
    heroSubtitle: 'Qualidade Próxima de Você',
    description: [
      'Pinhais é uma cidade da região metropolitana de Curitiba, conhecida por sua proximidade com a capital e boa infraestrutura. Moradores de Pinhais valorizam praticidade e bons serviços.',
      'A Ótica Gouveia atende moradores de Pinhais. Oferecemos entrega via motoboy para compras acima de R$ 250,00, trazendo comodidade até você.',
      'São mais de 40 anos de tradição. Óculos de grau modernos, óculos de sol, lentes de contato das melhores marcas e exame de vista gratuito.'
    ],
    characteristics: 'Cidade próxima a Curitiba com boa infraestrutura',
    nearbyLandmarks: ['Centro de Pinhais', 'Parque das Águas'],
    distanceFromStore: 'Aproximadamente 25 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'sao-jose-dos-pinhais': {
    name: 'São José dos Pinhais',
    slug: '/otica-sao-jose-dos-pinhais',
    title: 'Ótica São José dos Pinhais | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para São José dos Pinhais com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('São José dos Pinhais', 'cidade'), 'ótica sjp', 'ótica aeroporto curitiba'],
    heroTitle: 'Ótica Gouveia para São José dos Pinhais',
    heroSubtitle: 'Qualidade Perto do Aeroporto',
    description: [
      'São José dos Pinhais é uma das maiores cidades da região metropolitana de Curitiba, sede do Aeroporto Internacional Afonso Pena. Com forte economia industrial e comercial, SJP demanda serviços de qualidade.',
      'A Ótica Gouveia atende moradores de São José dos Pinhais. Oferecemos entrega via motoboy para compras acima de R$ 250,00, ou você pode visitar nossa loja no Pinheirinho.',
      'Mais de 40 anos atendendo a região. Óculos de grau para profissionais, óculos de sol originais, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade com aeroporto internacional e forte indústria',
    nearbyLandmarks: ['Aeroporto Afonso Pena', 'Centro de SJP'],
    distanceFromStore: 'Aproximadamente 20 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'fazenda-rio-grande': {
    name: 'Fazenda Rio Grande',
    slug: '/otica-fazenda-rio-grande',
    title: 'Ótica Fazenda Rio Grande | Óculos | Ótica Gouveia',
    metaDescription: 'Ótica para Fazenda Rio Grande com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Fazenda Rio Grande', 'cidade'), 'ótica frg'],
    heroTitle: 'Ótica Gouveia para Fazenda Rio Grande',
    heroSubtitle: 'Qualidade Acessível',
    description: [
      'Fazenda Rio Grande é uma cidade em crescimento da região metropolitana de Curitiba, com população jovem e dinâmica. Moradores buscam serviços de qualidade com preços acessíveis.',
      'A Ótica Gouveia está próxima de Fazenda Rio Grande. Oferecemos entrega via motoboy para compras acima de R$ 250,00, levando qualidade até você.',
      'São mais de 40 anos oferecendo óculos de qualidade. Óculos de grau acessíveis, óculos de sol, lentes de contato e exame de vista gratuito. Parcelamento facilitado.'
    ],
    characteristics: 'Cidade em crescimento da região sul',
    nearbyLandmarks: ['Centro de Fazenda Rio Grande'],
    distanceFromStore: 'Aproximadamente 15 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'piraquara': {
    name: 'Piraquara',
    slug: '/otica-piraquara',
    title: 'Ótica Piraquara PR | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para Piraquara com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis. Consulte!',
    keywords: [...generateKeywords('Piraquara', 'cidade'), 'ótica piraquara paraná'],
    heroTitle: 'Ótica Gouveia para Piraquara',
    heroSubtitle: 'Natureza e Qualidade Visual',
    description: [
      'Piraquara é uma cidade da região metropolitana de Curitiba, conhecida por suas represas e mananciais. Moradores de Piraquara valorizam contato com a natureza e serviços de qualidade.',
      'A Ótica Gouveia atende moradores de Piraquara. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos de tradição. Óculos de grau para todas as atividades, óculos de sol com proteção UV para atividades ao ar livre, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade dos mananciais com belas represas',
    nearbyLandmarks: ['Represa do Piraquara', 'Centro de Piraquara'],
    distanceFromStore: 'Aproximadamente 30 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'campo-largo': {
    name: 'Campo Largo',
    slug: '/otica-campo-largo',
    title: 'Ótica Campo Largo PR | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para Campo Largo com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista gratuito!',
    keywords: [...generateKeywords('Campo Largo', 'cidade'), 'ótica campo largo paraná', 'ótica cidade das porcelanas'],
    heroTitle: 'Ótica Gouveia para Campo Largo',
    heroSubtitle: 'Qualidade da Capital para a Cidade das Porcelanas',
    description: [
      'Campo Largo é conhecida como a Capital da Louça, famosa por suas indústrias de porcelana e cerâmica. Moradores de Campo Largo valorizam tradição e qualidade em tudo.',
      'A Ótica Gouveia atende moradores de Campo Largo. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'São mais de 40 anos de tradição - assim como as porcelanas de Campo Largo. Óculos de grau elegantes, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Capital da Louça com tradição em porcelana',
    nearbyLandmarks: ['Centro de Campo Largo', 'Parque dos Jesuítas'],
    distanceFromStore: 'Aproximadamente 30 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'almirante-tamandare': {
    name: 'Almirante Tamandaré',
    slug: '/otica-almirante-tamandare',
    title: 'Ótica Almirante Tamandaré | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para Almirante Tamandaré com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Almirante Tamandaré', 'cidade'), 'ótica almirante tamandare paraná'],
    heroTitle: 'Ótica Gouveia para Almirante Tamandaré',
    heroSubtitle: 'Qualidade Naval para Você',
    description: [
      'Almirante Tamandaré é uma cidade da região metropolitana de Curitiba, conhecida por sua proximidade com a capital e crescimento residencial. Moradores buscam serviços de qualidade.',
      'A Ótica Gouveia atende moradores de Almirante Tamandaré. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos de experiência. Óculos de grau para toda a família, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade da região norte metropolitana',
    nearbyLandmarks: ['Centro de Almirante Tamandaré'],
    distanceFromStore: 'Aproximadamente 20 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'campo-magro': {
    name: 'Campo Magro',
    slug: '/otica-campo-magro',
    title: 'Ótica Campo Magro PR | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para Campo Magro com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista gratuito!',
    keywords: [...generateKeywords('Campo Magro', 'cidade'), 'ótica campo magro paraná'],
    heroTitle: 'Ótica Gouveia para Campo Magro',
    heroSubtitle: 'Qualidade Rural',
    description: [
      'Campo Magro é uma cidade da região metropolitana de Curitiba, conhecida por suas áreas rurais e produção agrícola. Moradores de Campo Magro valorizam tranquilidade e qualidade de vida.',
      'A Ótica Gouveia atende moradores de Campo Magro. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'São mais de 40 anos de tradição. Óculos de grau para todas as atividades, óculos de sol com proteção UV, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade rural da região metropolitana',
    nearbyLandmarks: ['Centro de Campo Magro'],
    distanceFromStore: 'Aproximadamente 35 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'quatro-barras': {
    name: 'Quatro Barras',
    slug: '/otica-quatro-barras',
    title: 'Ótica Quatro Barras PR | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para Quatro Barras com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Quatro Barras', 'cidade'), 'ótica quatro barras paraná'],
    heroTitle: 'Ótica Gouveia para Quatro Barras',
    heroSubtitle: 'Qualidade Serrana',
    description: [
      'Quatro Barras é uma cidade da região metropolitana de Curitiba, porta de entrada para a Serra do Mar. Moradores valorizam contato com a natureza e qualidade de vida.',
      'A Ótica Gouveia atende moradores de Quatro Barras. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos de experiência. Óculos de grau modernos, óculos de sol para atividades ao ar livre, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade serrana da região metropolitana',
    nearbyLandmarks: ['Serra do Mar', 'Centro de Quatro Barras'],
    distanceFromStore: 'Aproximadamente 30 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'campina-grande-do-sul': {
    name: 'Campina Grande do Sul',
    slug: '/otica-campina-grande-do-sul',
    title: 'Ótica Campina Grande do Sul | Óculos | Ótica Gouveia',
    metaDescription: 'Ótica para Campina Grande do Sul com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Campina Grande do Sul', 'cidade'), 'ótica campina grande sul'],
    heroTitle: 'Ótica Gouveia para Campina Grande do Sul',
    heroSubtitle: 'Qualidade para a Serra',
    description: [
      'Campina Grande do Sul é uma cidade da região metropolitana de Curitiba, conhecida pelo Pico Paraná e trilhas na Serra do Mar. Moradores valorizam natureza e aventura.',
      'A Ótica Gouveia atende moradores de Campina Grande do Sul. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'São mais de 40 anos de tradição. Óculos de grau resistentes, óculos de sol esportivos, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade serrana com o Pico Paraná',
    nearbyLandmarks: ['Pico Paraná', 'Serra do Mar'],
    distanceFromStore: 'Aproximadamente 35 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'mandirituba': {
    name: 'Mandirituba',
    slug: '/otica-mandirituba',
    title: 'Ótica Mandirituba PR | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para Mandirituba com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Mandirituba', 'cidade'), 'ótica mandirituba paraná'],
    heroTitle: 'Ótica Gouveia para Mandirituba',
    heroSubtitle: 'Qualidade Rural',
    description: [
      'Mandirituba é uma cidade da região metropolitana de Curitiba, conhecida por sua produção agrícola e tranquilidade rural. Moradores valorizam qualidade de vida no campo.',
      'A Ótica Gouveia atende moradores de Mandirituba. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos de experiência. Óculos de grau para trabalho e lazer, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade rural ao sul de Curitiba',
    nearbyLandmarks: ['Centro de Mandirituba'],
    distanceFromStore: 'Aproximadamente 30 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'itaperucu': {
    name: 'Itaperuçu',
    slug: '/otica-itaperucu',
    title: 'Ótica Itaperuçu PR | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para Itaperuçu com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista gratuito!',
    keywords: [...generateKeywords('Itaperuçu', 'cidade'), 'ótica itaperucu paraná'],
    heroTitle: 'Ótica Gouveia para Itaperuçu',
    heroSubtitle: 'Qualidade Acessível',
    description: [
      'Itaperuçu é uma cidade da região metropolitana de Curitiba, conhecida por sua produção mineral. Moradores de Itaperuçu buscam serviços de qualidade com preços justos.',
      'A Ótica Gouveia atende moradores de Itaperuçu. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'São mais de 40 anos oferecendo qualidade. Óculos de grau acessíveis, óculos de sol, lentes de contato e exame de vista gratuito. Parcelamento facilitado.'
    ],
    characteristics: 'Cidade com produção mineral',
    nearbyLandmarks: ['Centro de Itaperuçu'],
    distanceFromStore: 'Aproximadamente 35 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'rio-branco-do-sul': {
    name: 'Rio Branco do Sul',
    slug: '/otica-rio-branco-do-sul',
    title: 'Ótica Rio Branco do Sul | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para Rio Branco do Sul com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Rio Branco do Sul', 'cidade'), 'ótica rio branco sul'],
    heroTitle: 'Ótica Gouveia para Rio Branco do Sul',
    heroSubtitle: 'Qualidade para o Norte',
    description: [
      'Rio Branco do Sul é uma cidade da região metropolitana de Curitiba, conhecida pela produção de calcário e mineração. Moradores buscam serviços de qualidade.',
      'A Ótica Gouveia atende moradores de Rio Branco do Sul. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos de tradição. Óculos de grau resistentes, óculos de sol com proteção, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade com produção de calcário',
    nearbyLandmarks: ['Centro de Rio Branco do Sul'],
    distanceFromStore: 'Aproximadamente 40 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'bocaiuva-do-sul': {
    name: 'Bocaiúva do Sul',
    slug: '/otica-bocaiuva-do-sul',
    title: 'Ótica Bocaiúva do Sul | Óculos | Ótica Gouveia',
    metaDescription: 'Ótica para Bocaiúva do Sul com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Bocaiúva do Sul', 'cidade'), 'ótica bocaiuva sul'],
    heroTitle: 'Ótica Gouveia para Bocaiúva do Sul',
    heroSubtitle: 'Qualidade Rural',
    description: [
      'Bocaiúva do Sul é uma cidade da região metropolitana de Curitiba, conhecida por sua produção agrícola e tranquilidade. Moradores valorizam qualidade de vida no interior.',
      'A Ótica Gouveia atende moradores de Bocaiúva do Sul. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'São mais de 40 anos de experiência. Óculos de grau para todas as necessidades, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade rural ao norte de Curitiba',
    nearbyLandmarks: ['Centro de Bocaiúva do Sul'],
    distanceFromStore: 'Aproximadamente 40 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'cerro-azul': {
    name: 'Cerro Azul',
    slug: '/otica-cerro-azul',
    title: 'Ótica Cerro Azul PR | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para Cerro Azul com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Cerro Azul', 'cidade'), 'ótica cerro azul paraná'],
    heroTitle: 'Ótica Gouveia para Cerro Azul',
    heroSubtitle: 'Qualidade no Vale do Ribeira',
    description: [
      'Cerro Azul é uma cidade conhecida como a Capital da Laranja, no Vale do Ribeira. Moradores valorizam tradição agrícola e serviços de qualidade.',
      'A Ótica Gouveia atende moradores de Cerro Azul. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos de tradição. Óculos de grau resistentes, óculos de sol com proteção UV, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Capital da Laranja no Vale do Ribeira',
    nearbyLandmarks: ['Centro de Cerro Azul', 'Laranjais'],
    distanceFromStore: 'Aproximadamente 1 hora de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'doutor-ulysses': {
    name: 'Doutor Ulysses',
    slug: '/otica-doutor-ulysses',
    title: 'Ótica Doutor Ulysses PR | Óculos | Ótica Gouveia',
    metaDescription: 'Ótica para Doutor Ulysses com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Doutor Ulysses', 'cidade'), 'ótica doutor ulysses paraná'],
    heroTitle: 'Ótica Gouveia para Doutor Ulysses',
    heroSubtitle: 'Qualidade no Interior',
    description: [
      'Doutor Ulysses é uma cidade do norte da região metropolitana de Curitiba, conhecida por sua produção agrícola. Moradores buscam serviços de qualidade.',
      'A Ótica Gouveia atende moradores de Doutor Ulysses. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'São mais de 40 anos de experiência. Óculos de grau para trabalho no campo, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade rural no norte da região',
    nearbyLandmarks: ['Centro de Doutor Ulysses'],
    distanceFromStore: 'Aproximadamente 1h30 de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'tunas-do-parana': {
    name: 'Tunas do Paraná',
    slug: '/otica-tunas-do-parana',
    title: 'Ótica Tunas do Paraná | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para Tunas do Paraná com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Tunas do Paraná', 'cidade'), 'ótica tunas paraná'],
    heroTitle: 'Ótica Gouveia para Tunas do Paraná',
    heroSubtitle: 'Qualidade Rural',
    description: [
      'Tunas do Paraná é uma cidade rural da região metropolitana de Curitiba, conhecida por sua produção agrícola e tranquilidade. Moradores valorizam vida no interior.',
      'A Ótica Gouveia atende moradores de Tunas do Paraná. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos de tradição. Óculos de grau resistentes, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade rural da região norte',
    nearbyLandmarks: ['Centro de Tunas do Paraná'],
    distanceFromStore: 'Aproximadamente 50 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'adrianopolis': {
    name: 'Adrianópolis',
    slug: '/otica-adrianopolis',
    title: 'Ótica Adrianópolis PR | Óculos | Ótica Gouveia',
    metaDescription: 'Ótica para Adrianópolis com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Adrianópolis', 'cidade'), 'ótica adrianopolis paraná'],
    heroTitle: 'Ótica Gouveia para Adrianópolis',
    heroSubtitle: 'Qualidade no Vale do Ribeira',
    description: [
      'Adrianópolis é uma cidade histórica do Vale do Ribeira, conhecida pela Caverna do Diabo e seu patrimônio natural. Moradores valorizam história e natureza.',
      'A Ótica Gouveia atende moradores de Adrianópolis. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'São mais de 40 anos de experiência. Óculos de grau para todas as atividades, óculos de sol com proteção UV, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade histórica no Vale do Ribeira',
    nearbyLandmarks: ['Caverna do Diabo', 'Centro de Adrianópolis'],
    distanceFromStore: 'Aproximadamente 1h30 de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'balsa-nova': {
    name: 'Balsa Nova',
    slug: '/otica-balsa-nova',
    title: 'Ótica Balsa Nova PR | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para Balsa Nova com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Balsa Nova', 'cidade'), 'ótica balsa nova paraná'],
    heroTitle: 'Ótica Gouveia para Balsa Nova',
    heroSubtitle: 'Qualidade Rural',
    description: [
      'Balsa Nova é uma cidade da região metropolitana de Curitiba, conhecida por sua produção agrícola e turismo rural. Moradores valorizam vida tranquila no campo.',
      'A Ótica Gouveia atende moradores de Balsa Nova. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos de tradição. Óculos de grau para trabalho e lazer, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade rural com turismo',
    nearbyLandmarks: ['Centro de Balsa Nova'],
    distanceFromStore: 'Aproximadamente 40 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'contenda': {
    name: 'Contenda',
    slug: '/otica-contenda',
    title: 'Ótica Contenda PR | Óculos e Lentes | Ótica Gouveia',
    metaDescription: 'Ótica para Contenda com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista gratuito!',
    keywords: [...generateKeywords('Contenda', 'cidade'), 'ótica contenda paraná'],
    heroTitle: 'Ótica Gouveia para Contenda',
    heroSubtitle: 'Qualidade no Interior',
    description: [
      'Contenda é uma cidade da região metropolitana de Curitiba, conhecida por sua produção agrícola e tranquilidade. Moradores buscam serviços de qualidade.',
      'A Ótica Gouveia atende moradores de Contenda. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'São mais de 40 anos de experiência. Óculos de grau acessíveis, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade rural ao sul de Curitiba',
    nearbyLandmarks: ['Centro de Contenda'],
    distanceFromStore: 'Aproximadamente 40 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'lapa': {
    name: 'Lapa',
    slug: '/otica-lapa',
    title: 'Ótica Lapa PR | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para a Lapa com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Lapa', 'cidade'), 'ótica lapa paraná', 'ótica cidade histórica lapa'],
    heroTitle: 'Ótica Gouveia para a Lapa',
    heroSubtitle: 'Qualidade Histórica',
    description: [
      'A Lapa é uma cidade histórica do Paraná, conhecida pelo Cerco da Lapa e seu centro histórico preservado. Moradores valorizam tradição e patrimônio cultural.',
      'A Ótica Gouveia atende moradores da Lapa. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos de tradição - assim como a história da Lapa. Óculos de grau elegantes, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade histórica com patrimônio preservado',
    nearbyLandmarks: ['Centro Histórico da Lapa', 'Museu do Tropeiro'],
    distanceFromStore: 'Aproximadamente 50 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'quitandinha': {
    name: 'Quitandinha',
    slug: '/otica-quitandinha',
    title: 'Ótica Quitandinha PR | Óculos | Ótica Gouveia',
    metaDescription: 'Ótica para Quitandinha com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Quitandinha', 'cidade'), 'ótica quitandinha paraná'],
    heroTitle: 'Ótica Gouveia para Quitandinha',
    heroSubtitle: 'Qualidade Rural',
    description: [
      'Quitandinha é uma cidade da região metropolitana de Curitiba, conhecida por sua produção agrícola e tranquilidade rural. Moradores valorizam vida no campo.',
      'A Ótica Gouveia atende moradores de Quitandinha. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'São mais de 40 anos de experiência. Óculos de grau para trabalho e lazer, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade rural ao sul de Curitiba',
    nearbyLandmarks: ['Centro de Quitandinha'],
    distanceFromStore: 'Aproximadamente 45 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'tijucas-do-sul': {
    name: 'Tijucas do Sul',
    slug: '/otica-tijucas-do-sul',
    title: 'Ótica Tijucas do Sul | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para Tijucas do Sul com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Tijucas do Sul', 'cidade'), 'ótica tijucas sul'],
    heroTitle: 'Ótica Gouveia para Tijucas do Sul',
    heroSubtitle: 'Qualidade no Sul da Região',
    description: [
      'Tijucas do Sul é uma cidade da região metropolitana de Curitiba, conhecida por seu turismo rural e cachoeiras. Moradores valorizam contato com a natureza.',
      'A Ótica Gouveia atende moradores de Tijucas do Sul. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos de tradição. Óculos de grau para todas as atividades, óculos de sol com proteção UV, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade com turismo rural e cachoeiras',
    nearbyLandmarks: ['Cachoeiras', 'Centro de Tijucas do Sul'],
    distanceFromStore: 'Aproximadamente 50 minutos de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'agudos-do-sul': {
    name: 'Agudos do Sul',
    slug: '/otica-agudos-do-sul',
    title: 'Ótica Agudos do Sul PR | Óculos | Ótica Gouveia',
    metaDescription: 'Ótica para Agudos do Sul com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Agudos do Sul', 'cidade'), 'ótica agudos sul'],
    heroTitle: 'Ótica Gouveia para Agudos do Sul',
    heroSubtitle: 'Qualidade Rural',
    description: [
      'Agudos do Sul é uma cidade da região metropolitana de Curitiba, conhecida por sua produção agrícola e vida tranquila no interior. Moradores valorizam simplicidade.',
      'A Ótica Gouveia atende moradores de Agudos do Sul. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'São mais de 40 anos de experiência. Óculos de grau acessíveis, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade rural no extremo sul da região',
    nearbyLandmarks: ['Centro de Agudos do Sul'],
    distanceFromStore: 'Aproximadamente 1 hora de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'pien': {
    name: 'Piên',
    slug: '/otica-pien',
    title: 'Ótica Piên PR | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para Piên com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Piên', 'cidade'), 'ótica pien paraná'],
    heroTitle: 'Ótica Gouveia para Piên',
    heroSubtitle: 'Qualidade na Fronteira',
    description: [
      'Piên é uma cidade do sul do Paraná, na divisa com Santa Catarina. Conhecida por sua produção agrícola e influência alemã, moradores valorizam tradição.',
      'A Ótica Gouveia atende moradores de Piên. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos de tradição. Óculos de grau para todas as necessidades, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade na divisa com Santa Catarina',
    nearbyLandmarks: ['Centro de Piên'],
    distanceFromStore: 'Aproximadamente 1h15 de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'campo-do-tenente': {
    name: 'Campo do Tenente',
    slug: '/otica-campo-do-tenente',
    title: 'Ótica Campo do Tenente | Óculos | Ótica Gouveia',
    metaDescription: 'Ótica para Campo do Tenente com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Campo do Tenente', 'cidade'), 'ótica campo tenente'],
    heroTitle: 'Ótica Gouveia para Campo do Tenente',
    heroSubtitle: 'Qualidade Rural',
    description: [
      'Campo do Tenente é uma cidade do sul do Paraná, conhecida por sua produção agrícola e vida tranquila no interior. Moradores buscam serviços de qualidade.',
      'A Ótica Gouveia atende moradores de Campo do Tenente. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'São mais de 40 anos de experiência. Óculos de grau resistentes, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade rural no sul do Paraná',
    nearbyLandmarks: ['Centro de Campo do Tenente'],
    distanceFromStore: 'Aproximadamente 1h20 de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  'rio-negro': {
    name: 'Rio Negro',
    slug: '/otica-rio-negro',
    title: 'Ótica Rio Negro PR | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para Rio Negro com entrega via motoboy. Óculos de grau, sol, lentes de contato. Exame de vista grátis!',
    keywords: [...generateKeywords('Rio Negro', 'cidade'), 'ótica rio negro paraná'],
    heroTitle: 'Ótica Gouveia para Rio Negro',
    heroSubtitle: 'Qualidade na Fronteira',
    description: [
      'Rio Negro é uma cidade na divisa do Paraná com Santa Catarina, conhecida por sua história e arquitetura germânica. Moradores valorizam tradição e cultura.',
      'A Ótica Gouveia atende moradores de Rio Negro. Oferecemos entrega via motoboy para compras acima de R$ 250,00.',
      'Mais de 40 anos de tradição. Óculos de grau elegantes, óculos de sol, lentes de contato e exame de vista gratuito.'
    ],
    characteristics: 'Cidade histórica na fronteira com SC',
    nearbyLandmarks: ['Centro Histórico', 'Rio Negro'],
    distanceFromStore: 'Aproximadamente 1h15 de carro',
    type: 'cidade',
    region: 'Região Metropolitana de Curitiba'
  },

  // ==================== BAIRROS ADICIONAIS ====================

  'ganchinho': {
    name: 'Ganchinho',
    slug: '/otica-ganchinho',
    title: 'Ótica Ganchinho Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Ganchinho em Curitiba. Óculos de grau, sol, lentes de contato. Entrega grátis acima de R$250. Exame de vista grátis!',
    keywords: [...generateKeywords('Ganchinho', 'bairro'), 'ótica ganchinho curitiba', 'óculos ganchinho'],
    heroTitle: 'Ótica Gouveia para o Ganchinho',
    heroSubtitle: 'Entrega Grátis* para Você',
    description: [
      'O Ganchinho é um bairro residencial localizado na região sul de Curitiba, conhecido por sua tranquilidade e comunidade unida. Com desenvolvimento constante, o bairro oferece qualidade de vida para famílias que buscam um ambiente mais calmo.',
      'A Ótica Gouveia atende os moradores do Ganchinho com praticidade e qualidade. Nossa loja no Pinheirinho fica próxima, e oferecemos entrega via motoboy gratuita para compras acima de R$ 250,00.',
      'Com mais de 40 anos de tradição, oferecemos óculos de grau das melhores marcas, óculos de sol com proteção UV, lentes de contato e exame de vista gratuito. Atendimento familiar e preços justos para toda a comunidade do Ganchinho.'
    ],
    characteristics: 'Bairro residencial tranquilo na região sul de Curitiba',
    nearbyLandmarks: ['Próximo ao Umbará', 'Região Sul'],
    distanceFromStore: 'Aproximadamente 10 minutos de carro',
    type: 'bairro'
  },

  'fazendinha': {
    name: 'Fazendinha',
    slug: '/otica-fazendinha',
    title: 'Ótica Fazendinha Curitiba | Óculos de Grau e Sol | Ótica Gouveia',
    metaDescription: 'Ótica para o bairro Fazendinha em Curitiba. Óculos de grau, sol, lentes de contato. Entrega grátis acima de R$250. Exame de vista grátis!',
    keywords: [...generateKeywords('Fazendinha', 'bairro'), 'ótica fazendinha curitiba', 'óculos fazendinha'],
    heroTitle: 'Ótica Gouveia para a Fazendinha',
    heroSubtitle: 'Tradição e Qualidade para Você',
    description: [
      'A Fazendinha é um bairro tradicional de Curitiba, localizado na região sudoeste da cidade. Com forte identidade residencial e comercial, o bairro é conhecido por sua comunidade acolhedora e boa infraestrutura.',
      'A Ótica Gouveia atende os moradores da Fazendinha com qualidade e praticidade. Oferecemos entrega via motoboy gratuita para compras acima de R$ 250,00, trazendo conforto até a sua porta.',
      'São mais de 40 anos de experiência em produtos ópticos. Óculos de grau modernos, óculos de sol originais, lentes de contato das melhores marcas e exame de vista gratuito. Confie na tradição Gouveia!'
    ],
    characteristics: 'Bairro tradicional com forte comércio local',
    nearbyLandmarks: ['Próximo ao Portão', 'Região Sudoeste'],
    distanceFromStore: 'Entrega disponível via motoboy',
    type: 'bairro'
  }
};

// Função helper para obter dados por slug
export const getNeighborhoodBySlug = (slug: string): NeighborhoodData | undefined => {
  const normalizedSlug = slug.startsWith('/') ? slug : `/${slug}`;
  return Object.values(neighborhoodData).find(n => n.slug === normalizedSlug);
};

// Função helper para obter dados por nome
export const getNeighborhoodByName = (name: string): NeighborhoodData | undefined => {
  const normalizedName = name.toLowerCase().replace(/\s+/g, '-');
  return neighborhoodData[normalizedName];
};

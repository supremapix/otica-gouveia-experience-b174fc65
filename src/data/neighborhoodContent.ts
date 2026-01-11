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
      'Bem-vindo à Ótica Gouveia no Pinheirinho, sua referência em produtos ópticos de qualidade na região sul de Curitiba! Com mais de 40 anos de tradição no mercado óptico curitibano, nossa loja física está estrategicamente localizada na Rua Nicola Pellanda, 1286, próximo ao Condor Umbará. O Pinheirinho é um dos bairros mais tradicionais e movimentados de Curitiba, conhecido por sua forte vocação comercial e residencial, com fácil acesso pelo Terminal do Pinheirinho e diversas linhas de ônibus que facilitam a chegada de clientes de toda a região sul.',
      'Nossa equipe especializada oferece serviços completos de ótica: exame de vista gratuito com equipamentos de última geração, confecção de óculos de grau com lentes monofocais e multifocais progressivas, tratamentos anti-reflexo e fotocromático, óculos de sol originais com proteção UV 400, lentes de contato gelatinosas e rígidas para todas as necessidades, e assistência técnica especializada com ajustes e consertos. Trabalhamos com laboratórios parceiros que garantem precisão e rapidez na entrega dos seus óculos, geralmente entre 3 a 7 dias úteis dependendo do tipo de lente escolhida.',
      'Na Ótica Gouveia Pinheirinho você encontra as melhores marcas do mercado: Ray-Ban, Oakley, Arnette, Chilli Beans, além de armações nacionais e importadas para todos os estilos e bolsos. Nosso diferencial está no atendimento personalizado - cada cliente recebe atenção individual para escolher a armação ideal para seu formato de rosto e estilo de vida. Aceitamos diversos convênios e planos de saúde, parcelamos em até 12x sem juros nos cartões, e oferecemos condições especiais para pagamento à vista.',
      'O bairro Pinheirinho oferece excelente infraestrutura comercial e residencial, com fácil acesso pela Rua Nicola Pellanda e proximidade com o Terminal Pinheirinho. Moradores dos bairros vizinhos como Capão Raso, Novo Mundo, Sitio Cercado e Tatuquara também são muito bem-vindos em nossa loja. Contamos com estacionamento nas proximidades e a loja fica em uma região de fácil acesso tanto para quem vem de carro quanto de transporte público.',
      'Agende agora mesmo seu exame de vista gratuito ou venha conhecer nossa loja no Pinheirinho! Estamos abertos de segunda a sexta das 9h às 18h e aos sábados das 9h às 13h. Entre em contato pelo WhatsApp (41) 99955-0667 e garanta seu atendimento. Ótica Gouveia Pinheirinho - Tradição e qualidade em óculos há mais de 40 anos cuidando da visão das famílias curitibanas!'
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
      'A Ótica Gouveia é a escolha certa para moradores do Sítio Cercado que buscam qualidade em óculos de grau, óculos de sol e lentes de contato em Curitiba! O Sítio Cercado é um dos bairros mais populosos e vibrantes da região sul da capital paranaense, conhecido por sua forte identidade comunitária e milhares de famílias trabalhadoras. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia oferece atendimento de excelência para toda a comunidade do Sítio Cercado, com nossa loja física localizada no Pinheirinho, a apenas 10 minutos de distância.',
      'Oferecemos uma gama completa de serviços ópticos para atender todas as suas necessidades visuais: exame de vista gratuito realizado com equipamentos modernos e precisos, confecção de óculos de grau com lentes monofocais, bifocais e multifocais progressivas, aplicação de tratamentos anti-reflexo, proteção UV e lentes fotocromáticas que escurecem no sol. Também trabalhamos com lentes de contato de diversas marcas e tipos - gelatinosas diárias, quinzenais e mensais, além de lentes tóricas para astigmatismo e multifocais. Nossa assistência técnica realiza ajustes, consertos e manutenção preventiva em todos os tipos de armações.',
      'O que diferencia a Ótica Gouveia é nosso compromisso com atendimento personalizado e familiar. Cada cliente do Sítio Cercado é tratado com atenção individual, recebendo orientação especializada para escolher a armação ideal. Trabalhamos com marcas consagradas como Ray-Ban, Oakley, Arnette, Chilli Beans e diversas opções nacionais acessíveis. Aceitamos os principais convênios e planos de saúde, oferecemos parcelamento em até 12x sem juros e condições especiais para pagamento à vista. Para sua comodidade, entregamos gratuitamente no Sítio Cercado para compras acima de R$ 250,00.',
      'O Sítio Cercado possui excelente infraestrutura com acesso pelo Terminal Sítio Cercado e diversas linhas de ônibus. A região conta com comércio variado, escolas, postos de saúde e é conhecida pela Rua Izaac Ferreira da Cruz e proximidade com o Parque Iguaçu. Nossa loja no Pinheirinho fica estrategicamente localizada para atender moradores do Sítio Cercado e bairros vizinhos como Ganchinho, Umbará, Tatuquara e Campo de Santana com facilidade e rapidez.',
      'Não perca tempo procurando ótica no Sítio Cercado - a Ótica Gouveia leva qualidade até você! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 ou visite nossa loja no Pinheirinho. Aproveite nossa entrega via motoboy para o Sítio Cercado e receba seus óculos novos no conforto da sua casa. Ótica Gouveia - mais de 40 anos cuidando da visão das famílias do Sítio Cercado e região sul de Curitiba!'
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
      'Procurando uma ótica de confiança no Umbará? A Ótica Gouveia é sua melhor escolha! Localizada estrategicamente próximo ao Condor Umbará, nossa loja atende moradores de toda a região com excelência há mais de 40 anos. O Umbará é um bairro em constante crescimento na região sul de Curitiba, conhecido por suas áreas verdes, tranquilidade e qualidade de vida. Famílias que escolheram morar no Umbará valorizam bons serviços e atendimento personalizado - exatamente o que oferecemos na Ótica Gouveia!',
      'Nossa equipe qualificada oferece serviços ópticos completos: exame de vista gratuito com tecnologia de ponta para diagnóstico preciso do seu grau, confecção de óculos com lentes oftálmicas de alta qualidade incluindo opções monofocais, bifocais e multifocais progressivas, tratamentos especiais como anti-reflexo, proteção contra luz azul, lentes fotocromáticas Transitions e proteção UV 400. Também disponibilizamos ampla variedade de lentes de contato - desde as descartáveis diárias até lentes de uso prolongado, coloridas e para correção de astigmatismo.',
      'Na Ótica Gouveia do Umbará você encontra armações para todos os gostos e orçamentos. Trabalhamos com marcas internacionais como Ray-Ban, Oakley e Arnette, além de opções nacionais de excelente qualidade e preço acessível. Nosso atendimento é diferenciado: ajudamos você a escolher a armação perfeita para seu formato de rosto e estilo pessoal. Oferecemos parcelamento em até 12x sem juros, aceitamos os principais convênios de saúde e temos condições especiais para pagamento à vista. Garantia de fábrica em todos os produtos e garantia de adaptação nas lentes multifocais.',
      'O bairro Umbará está localizado na região sul de Curitiba, próximo ao Rio Iguaçu e áreas de preservação ambiental. A região conta com boa infraestrutura, comércio local variado e fácil acesso aos bairros vizinhos como Sítio Cercado, Ganchinho, Tatuquara e Pinheirinho. Nossa loja fica ao lado do Condor Umbará, permitindo que você resolva suas compras de supermercado e cuide da sua visão no mesmo passeio. Estacionamento amplo disponível no local.',
      'Venha conhecer a Ótica Gouveia no Umbará! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e descubra por que somos a ótica preferida das famílias da região sul. Entregamos gratuitamente no Umbará e bairros vizinhos para compras acima de R$ 250,00. Horário de funcionamento: segunda a sexta das 9h às 18h, sábados das 9h às 13h. Ótica Gouveia Umbará - sua visão em boas mãos há mais de 40 anos!'
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
      'A Ótica Gouveia é a parceira ideal para trabalhadores e moradores da CIC - Cidade Industrial de Curitiba! A CIC é uma das maiores e mais importantes regiões de Curitiba, abrigando o principal polo industrial da cidade e milhares de famílias trabalhadoras. Com mais de 40 anos de experiência no mercado óptico curitibano, a Ótica Gouveia oferece atendimento de excelência para toda a comunidade da Cidade Industrial, com facilidade de acesso pela nossa loja no Pinheirinho e serviço de entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Entendemos as necessidades específicas de quem trabalha na indústria: óculos de grau resistentes e duráveis, lentes com proteção adequada para diferentes ambientes de trabalho, óculos de segurança com grau e armações que suportem o dia a dia intenso. Oferecemos exame de vista gratuito com equipamentos de última geração, confecção de óculos com lentes monofocais, bifocais e multifocais progressivas, tratamentos anti-reflexo, antirrisco e proteção UV. Nossa assistência técnica realiza ajustes, consertos e manutenção em todos os tipos de armações.',
      'Na Ótica Gouveia você encontra as melhores marcas do mercado com preços justos: Ray-Ban, Oakley para esportes, Arnette, Chilli Beans e diversas armações nacionais de qualidade. Nosso diferencial é o atendimento personalizado - ajudamos cada cliente a escolher a armação ideal para seu rosto, estilo e necessidade profissional. Parcelamos em até 12x sem juros, aceitamos os principais convênios empresariais e planos de saúde, e oferecemos descontos especiais para funcionários de empresas parceiras da região.',
      'A CIC está localizada na região oeste de Curitiba, com fácil acesso pelo Terminal CIC e diversas linhas de ônibus. A região abriga grandes indústrias, o Parque Industrial e uma população estimada em mais de 170 mil habitantes. Nossa loja no Pinheirinho fica a aproximadamente 15 minutos de carro, mas você também pode aproveitar nossa entrega gratuita e receber seus óculos no trabalho ou em casa sem sair da CIC.',
      'Trabalhador da CIC, cuide da sua visão com quem entende! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667. Atendemos de segunda a sexta das 9h às 18h e sábados das 9h às 13h. Entrega gratuita na CIC e região para compras acima de R$ 250,00. Ótica Gouveia - mais de 40 anos cuidando da visão de quem faz Curitiba crescer!'
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
      'Moradores do Cajuru, a Ótica Gouveia é a sua referência em óculos de grau, sol e lentes de contato na zona leste de Curitiba! O Cajuru é um dos bairros mais tradicionais e populosos da região leste, conhecido por sua forte identidade comunitária, comércio vibrante e excelente infraestrutura urbana. Com mais de 40 anos de tradição no mercado óptico curitibano, a Ótica Gouveia oferece atendimento de excelência para toda a comunidade do Cajuru, com nossa loja física no Pinheirinho e serviço de entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos para atender todas as suas necessidades visuais: exame de vista gratuito realizado com equipamentos de última geração para diagnóstico preciso do seu grau, confecção de óculos de grau com lentes monofocais para miopia, hipermetropia e astigmatismo, lentes bifocais e multifocais progressivas para presbiopia. Disponibilizamos tratamentos premium como anti-reflexo multicamadas, proteção contra luz azul de telas, lentes fotocromáticas Transitions e proteção UV 400. Trabalhamos também com ampla linha de lentes de contato gelatinosas e rígidas para todas as necessidades.',
      'No Cajuru você encontra as marcas mais desejadas do mercado óptico com preços justos: Ray-Ban com modelos clássicos, Oakley para esportes e atividades ao ar livre, Arnette, Chilli Beans e diversas armações nacionais e importadas de excelente qualidade. A Ótica Gouveia se diferencia pelo atendimento personalizado - cada cliente recebe orientação especializada para escolher a armação ideal considerando formato do rosto, estilo pessoal e necessidades visuais. Parcelamos em até 12x sem juros, aceitamos os principais convênios e planos de saúde, com condições especiais para pagamento à vista.',
      'O bairro Cajuru possui excelente localização na zona leste de Curitiba, com fácil acesso pelo Terminal Cajuru, Avenida Comendador Franco e diversas linhas de ônibus que conectam a toda a cidade. O bairro faz divisa com Jardim das Américas, Capão da Imbuia, Guabirotuba e Uberaba, sendo um importante polo comercial e residencial da região. A Ótica Gouveia atende moradores de toda essa área com qualidade comprovada por décadas de atuação no mercado curitibano.',
      'Morador do Cajuru, cuide da sua visão com quem entende! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e descubra por que somos a ótica de confiança de milhares de famílias curitibanas. Entrega gratuita no Cajuru para compras acima de R$ 250,00. Horário de funcionamento: segunda a sexta das 9h às 18h, sábados das 9h às 13h. Ótica Gouveia Cajuru - tradição, qualidade e preço justo há mais de 40 anos!'
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
      'Moradores do Boqueirão, a Ótica Gouveia é sua parceira em cuidados visuais de qualidade! O Boqueirão é um dos bairros mais extensos e populosos de Curitiba, localizado na região sul da cidade e conhecido por sua forte identidade comunitária. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia atende toda a comunidade do Boqueirão oferecendo produtos de primeira linha e atendimento personalizado. Nossa loja no Pinheirinho fica a apenas 12 minutos de distância, e para sua comodidade oferecemos entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Oferecemos serviços ópticos completos para toda a família: exame de vista gratuito com equipamentos modernos e profissionais qualificados, óculos de grau com lentes de todas as tecnologias - monofocais, bifocais, multifocais progressivas, lentes anti-fadiga para uso de computador. Aplicamos tratamentos premium como anti-reflexo, proteção contra luz azul de telas, lentes fotocromáticas Transitions e proteção UV 400. Também trabalhamos com ampla variedade de lentes de contato: descartáveis diárias, quinzenais, mensais, coloridas e especiais para astigmatismo e presbiopia.',
      'Na Ótica Gouveia Boqueirão você encontra as marcas mais desejadas do mercado: Ray-Ban com seus modelos clássicos Aviador e Wayfarer, Oakley para esportes, Arnette, Chilli Beans e muitas opções de armações nacionais e importadas. Nosso atendimento é diferenciado - cada cliente recebe atenção especial para escolher a armação que valoriza seu rosto e combina com seu estilo. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde, com condições especiais para pagamento à vista.',
      'O Boqueirão é servido pelo Terminal Boqueirão e pela movimentada Avenida Marechal Floriano Peixoto, facilitando o acesso de moradores de toda a região. O bairro conta com excelente comércio, escolas, hospitais e é vizinho de bairros como Hauer, Xaxim e Alto Boqueirão. A Ótica Gouveia está estrategicamente posicionada para atender toda essa região com qualidade e eficiência, seja na loja física ou através do nosso serviço de entrega.',
      'Agende agora seu exame de vista gratuito no Boqueirão! Entre em contato pelo WhatsApp (41) 99955-0667 e garanta seu atendimento. Entrega gratuita no Boqueirão e bairros vizinhos para compras acima de R$ 250,00. Horário de funcionamento: segunda a sexta das 9h às 18h, sábados das 9h às 13h. Ótica Gouveia - há mais de 40 anos cuidando da visão das famílias do Boqueirão!'
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
      'Moradores do Hauer, a Ótica Gouveia é a sua parceira em cuidados visuais de qualidade na região sul de Curitiba! O Hauer é um bairro residencial tradicional e tranquilo, conhecido por suas ruas arborizadas, excelente infraestrutura urbana e famílias que valorizam qualidade de vida. Com mais de 40 anos de tradição no mercado óptico curitibano, a Ótica Gouveia oferece atendimento de excelência para toda a comunidade do Hauer, com nossa loja física no Pinheirinho a apenas 8 minutos de distância e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa estrutura oferece serviços ópticos completos para cuidar da visão de toda a sua família: exame de vista gratuito realizado com equipamentos modernos e profissionais qualificados, confecção de óculos de grau com lentes oftálmicas de alta qualidade incluindo opções monofocais, bifocais e multifocais progressivas. Disponibilizamos tratamentos especiais como anti-reflexo para melhor visão noturna, proteção contra luz azul de computadores e celulares, lentes fotocromáticas que escurecem automaticamente no sol e proteção UV 400. Também trabalhamos com lentes de contato de diversas marcas para todas as necessidades.',
      'No Hauer você encontra as melhores marcas de óculos com atendimento diferenciado: Ray-Ban com modelos icônicos, Oakley para esportes, Arnette, Chilli Beans e diversas armações nacionais e importadas de qualidade. A Ótica Gouveia se diferencia pelo atendimento familiar e personalizado - cada cliente recebe atenção individual para escolher a armação ideal para seu formato de rosto e estilo de vida. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde, com descontos especiais para pagamento à vista.',
      'O bairro Hauer está estrategicamente localizado na região sul de Curitiba, com fácil acesso pela Avenida Brasília e proximidade com o Shopping Cidade, diversas escolas e comércio variado. O Hauer faz divisa com bairros como Boqueirão, Xaxim, Fanny e Lindoia, formando uma região residencial de excelente qualidade. A Ótica Gouveia atende moradores de toda essa área com a qualidade e tradição que você merece.',
      'Morador do Hauer, sua visão merece cuidado de qualidade! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667. Entregamos gratuitamente no Hauer para compras acima de R$ 250,00. Funcionamos de segunda a sexta das 9h às 18h e sábados das 9h às 13h. Ótica Gouveia Hauer - tradição, qualidade e atendimento personalizado há mais de 40 anos!'
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
      'Trabalhadores e moradores do Centro de Curitiba, a Ótica Gouveia leva qualidade em óculos e lentes até você! O Centro é o coração histórico e comercial da capital paranaense, concentrando a Rua XV de Novembro, Praça Tiradentes, Catedral Basílica, Shopping Mueller e milhares de escritórios e estabelecimentos comerciais. Com mais de 40 anos de tradição no mercado óptico curitibano, a Ótica Gouveia oferece atendimento de excelência para quem trabalha ou mora no Centro, com entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos para profissionais e executivos: exame de vista gratuito com equipamentos de última geração, confecção de óculos de grau com lentes de alta qualidade incluindo opções monofocais, bifocais e multifocais progressivas ideais para trabalho em escritório. Disponibilizamos tratamentos especiais como anti-reflexo para reuniões e apresentações, proteção contra luz azul de computadores essencial para quem trabalha com telas, lentes fotocromáticas Transitions e proteção UV 400. Também trabalhamos com lentes de contato de diversas marcas para maior praticidade no dia a dia.',
      'No Centro você encontra as marcas mais elegantes e sofisticadas do mercado: Ray-Ban com modelos executivos e clássicos, Oakley, Arnette, Chilli Beans e diversas armações nacionais e importadas de design contemporâneo. A Ótica Gouveia se diferencia pelo atendimento consultivo - ajudamos você a escolher a armação perfeita para seu ambiente profissional e estilo pessoal. Parcelamos em até 12x sem juros, aceitamos os principais convênios corporativos e planos de saúde, com condições especiais para pagamento à vista.',
      'O Centro de Curitiba é facilmente acessível por diversas linhas de ônibus, estações de metrô e terminais urbanos. A região abriga pontos históricos como o Largo da Ordem, Teatro Guaíra, Museu Paranaense e Shopping Itália. Nossa entrega via motoboy atende todo o Centro e regiões adjacentes como São Francisco, Alto da Glória, Rebouças e Batel, garantindo praticidade para quem tem agenda apertada.',
      'Profissional do Centro, cuide da sua visão sem sair do trabalho! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos no escritório. Entrega gratuita no Centro para compras acima de R$ 250,00. Ótica Gouveia - mais de 40 anos de tradição em óculos para profissionais exigentes!'
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
      'Moradores do Batel, a Ótica Gouveia oferece produtos premium e atendimento sofisticado para um dos bairros mais nobres de Curitiba! O Batel é sinônimo de elegância, concentrando o Shopping Pátio Batel, restaurantes renomados, boutiques exclusivas e moradores que valorizam qualidade em tudo. Com mais de 40 anos de tradição no mercado óptico curitibano, a Ótica Gouveia atende clientes exigentes do Batel com marcas de grife e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos premium para clientes que não abrem mão de qualidade: exame de vista gratuito com equipamentos de última geração, confecção de óculos de grau com lentes das melhores marcas mundiais incluindo Zeiss, Hoya e Varilux. Disponibilizamos tratamentos premium como anti-reflexo multicamadas de alto desempenho, proteção Crizal contra arranhões e sujeira, lentes fotocromáticas Transitions Signature e XTRActive, além de lentes ocupacionais para uso de computador. Trabalhamos também com lentes de contato diárias, mensais e multifocais das melhores marcas.',
      'No Batel você encontra as grifes mais desejadas do mercado óptico: Ray-Ban com coleções exclusivas, Oakley Prizm para esportes de alta performance, Persol, Prada, Dolce & Gabbana e diversas armações de designer. A Ótica Gouveia se diferencia pelo atendimento personalizado e consultivo - ajudamos você a escolher a armação perfeita que combina com seu estilo sofisticado e necessidades visuais. Parcelamos em até 12x sem juros, com condições especiais para pagamento à vista.',
      'O Batel está localizado no coração nobre de Curitiba, com fácil acesso pela Avenida do Batel e proximidade com a Praça Espanha. O bairro faz divisa com Água Verde, Bigorrilho, Centro e Mercês, formando a região mais valorizada da cidade. A Ótica Gouveia entrega em todo o Batel e bairros adjacentes, garantindo praticidade para clientes com agenda sofisticada que valorizam seu tempo.',
      'Cliente do Batel, sua visão merece o melhor! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos premium em casa. Entrega gratuita no Batel para compras acima de R$ 250,00. Ótica Gouveia Batel - mais de 40 anos oferecendo excelência em óculos para clientes exigentes!'
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
      'Moradores do Água Verde, a Ótica Gouveia oferece a qualidade que seu bairro merece em óculos de grau, sol e lentes de contato! O Água Verde é um dos bairros mais valorizados e desejados de Curitiba, conhecido pela excelente gastronomia, proximidade com a Praça do Japão, Shopping Curitiba e moradores que valorizam qualidade de vida. Com mais de 40 anos de tradição no mercado óptico curitibano, a Ótica Gouveia atende toda a comunidade do Água Verde com produtos de primeira linha e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos para atender clientes exigentes: exame de vista gratuito com equipamentos de última geração para diagnóstico preciso, confecção de óculos de grau com lentes oftálmicas de alta qualidade incluindo opções monofocais, bifocais e multifocais progressivas das melhores marcas. Disponibilizamos tratamentos premium como anti-reflexo multicamadas, proteção contra luz azul para quem trabalha com computador, lentes fotocromáticas Transitions e proteção UV 400. Trabalhamos também com lentes de contato de uso diário, mensal e especiais para astigmatismo.',
      'No Água Verde você encontra as marcas mais sofisticadas do mercado óptico: Ray-Ban com modelos exclusivos, Oakley para esportes e casual, Arnette, Chilli Beans e armações de designer nacionais e importadas. A Ótica Gouveia se diferencia pelo atendimento personalizado e consultivo - ajudamos você a escolher a armação perfeita para seu estilo e necessidades. Parcelamos em até 12x sem juros, aceitamos os principais convênios e planos de saúde, com condições especiais para pagamento à vista.',
      'O Água Verde está localizado em posição privilegiada em Curitiba, com fácil acesso pela Avenida Água Verde e proximidade com o Shopping Curitiba e Praça do Japão. O bairro faz divisa com Batel, Vila Izabel, Portão e Parolin, formando uma das regiões mais valorizadas da cidade. A Ótica Gouveia entrega em todo o Água Verde e bairros vizinhos, garantindo praticidade para moradores que valorizam seu tempo.',
      'Morador do Água Verde, cuide da sua visão com qualidade premium! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa. Entrega gratuita no Água Verde para compras acima de R$ 250,00. Ótica Gouveia Água Verde - mais de 40 anos de tradição em óculos para clientes exigentes!'
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
      'Moradores do Bigorrilho, a Ótica Gouveia oferece produtos de alta qualidade para um dos bairros mais elegantes de Curitiba! O Bigorrilho é um bairro residencial de alto padrão, conhecido por suas ruas arborizadas, proximidade com o Parque Barigui, casas elegantes e moradores que valorizam qualidade de vida. Com mais de 40 anos de tradição no mercado óptico curitibano, a Ótica Gouveia atende toda a comunidade do Bigorrilho com excelência e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos premium para clientes exigentes: exame de vista gratuito com equipamentos de última geração, confecção de óculos de grau com lentes das melhores marcas do mercado mundial. Disponibilizamos tratamentos especiais como anti-reflexo multicamadas de alta performance, proteção contra luz azul para uso intensivo de telas, lentes fotocromáticas Transitions de última geração e proteção UV 400. Trabalhamos também com lentes de contato premium de uso diário, mensal e multifocais das melhores marcas internacionais.',
      'No Bigorrilho você encontra as marcas mais desejadas do mercado óptico: Ray-Ban com coleções exclusivas, Oakley para esportes e lifestyle, Persol, Arnette, Chilli Beans e diversas armações de designer. A Ótica Gouveia se diferencia pelo atendimento personalizado e consultivo - ajudamos você a escolher a armação perfeita para seu estilo sofisticado. Parcelamos em até 12x sem juros, aceitamos os principais convênios e planos de saúde, com condições especiais para pagamento à vista.',
      'O Bigorrilho está localizado em posição privilegiada em Curitiba, com fácil acesso ao Parque Barigui, Praça Espanha e Centro. O bairro faz divisa com Batel, Mercês, Champagnat e Mossunguê, formando uma das regiões mais valorizadas da cidade. A Ótica Gouveia entrega em todo o Bigorrilho e bairros vizinhos, garantindo praticidade para moradores que valorizam conforto e qualidade.',
      'Morador do Bigorrilho, cuide da sua visão com a qualidade que você merece! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa. Entrega gratuita no Bigorrilho para compras acima de R$ 250,00. Ótica Gouveia Bigorrilho - tradição, modernidade e excelência há mais de 40 anos!'
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
      'A Ótica Gouveia é referência em qualidade para moradores do Portão que buscam óculos de grau, sol e lentes de contato em Curitiba! O Portão é um dos bairros mais tradicionais e bem localizados da cidade, conhecido pela sua forte identidade comercial, proximidade com o Shopping Palladium e Terminal Portão. Com mais de 40 anos de tradição no mercado óptico curitibano, a Ótica Gouveia oferece atendimento de excelência para toda a comunidade do Portão, com nossa loja no Pinheirinho a apenas 10 minutos de distância e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos: exame de vista gratuito com tecnologia de ponta, confecção de óculos de grau com lentes oftálmicas de alta qualidade incluindo opções monofocais, bifocais e multifocais progressivas para presbiopia. Disponibilizamos tratamentos especiais como anti-reflexo multicamadas, proteção contra luz azul HEV de telas e celulares, lentes fotocromáticas Transitions que escurecem automaticamente e proteção UV 400. Trabalhamos também com ampla linha de lentes de contato para miopia, hipermetropia, astigmatismo e presbiopia.',
      'No Portão você encontra as marcas mais desejadas do mercado óptico: Ray-Ban com modelos icônicos, Oakley para esportes, Arnette, Chilli Beans e diversas armações nacionais e importadas de qualidade. A Ótica Gouveia se diferencia pelo atendimento consultivo - ajudamos cada cliente a escolher a armação ideal considerando formato do rosto, estilo pessoal e necessidades visuais. Parcelamos em até 12x sem juros, aceitamos os principais convênios e planos de saúde, com condições especiais para pagamento à vista.',
      'O bairro Portão possui localização privilegiada na região central-sul de Curitiba, com excelente acesso pelo Terminal Portão e proximidade com o Shopping Palladium, um dos maiores da cidade. O Portão faz divisa com bairros como Água Verde, Novo Mundo, Vila Izabel e Capão Raso, sendo um importante polo comercial da região. Nossa loja atende moradores de toda essa área com facilidade e qualidade comprovada por décadas de atuação.',
      'Morador do Portão, cuide da sua visão com quem entende! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e descubra por que somos a ótica de confiança de milhares de famílias curitibanas. Entrega gratuita no Portão para compras acima de R$ 250,00. Horário: segunda a sexta das 9h às 18h, sábados das 9h às 13h. Ótica Gouveia Portão - tradição e qualidade há mais de 40 anos!'
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
      'A Ótica Gouveia é a escolha inteligente para moradores do Xaxim que buscam qualidade em óculos com preços justos! O Xaxim é um bairro residencial e comercial vibrante na região sul de Curitiba, conhecido por seu forte senso de comunidade e moradores que valorizam bons serviços. Com mais de 40 anos de tradição no mercado óptico curitibano, oferecemos atendimento de excelência para toda a comunidade do Xaxim, com nossa loja no Pinheirinho a apenas 8 minutos de distância e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa estrutura oferece serviços completos para cuidar da sua visão: exame de vista gratuito com equipamentos de última geração, confecção de óculos de grau com lentes monofocais, bifocais e multifocais progressivas das melhores marcas. Disponibilizamos tratamentos especiais como anti-reflexo para melhor visão noturna, proteção contra luz azul para quem usa muito computador e celular, lentes fotocromáticas que escurecem no sol e proteção UV 400. Trabalhamos também com lentes de contato de diversas marcas e tipos para todas as necessidades.',
      'No Xaxim você encontra as melhores marcas de óculos com preços que cabem no seu bolso: Ray-Ban, Oakley, Arnette, Chilli Beans e diversas opções de armações nacionais de excelente qualidade. A Ótica Gouveia se diferencia pelo atendimento familiar e honesto - ajudamos você a escolher a melhor opção para seu grau, rosto e orçamento. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde, e oferecemos descontos especiais para pagamento à vista.',
      'O Xaxim está estrategicamente localizado na região sul de Curitiba, com acesso pela Avenida Winston Churchill e Terminal Xaxim, conectando-se facilmente aos bairros Hauer, Boqueirão, Pinheirinho e Alto Boqueirão. A região possui comércio diversificado, escolas, centros de saúde e uma comunidade ativa. A Ótica Gouveia atende toda essa região com facilidade, seja através da nossa loja física ou do serviço de entrega domiciliar.',
      'Morador do Xaxim, sua visão merece cuidado de qualidade! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667. Entregamos gratuitamente no Xaxim para compras acima de R$ 250,00. Funcionamos de segunda a sexta das 9h às 18h e sábados das 9h às 13h. Ótica Gouveia Xaxim - qualidade, preço justo e mais de 40 anos de tradição em óculos!'
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
      'Moradores de Santa Felicidade, a Ótica Gouveia leva tradição e qualidade em óculos para a colônia italiana de Curitiba! Santa Felicidade é um dos bairros mais charmosos e tradicionais da cidade, famoso por sua herança italiana, gastronomia típica com as famosas cantinas, vinícolas históricas e o icônico Portal de Santa Felicidade. Com mais de 40 anos de tradição no mercado óptico - assim como as cantinas do bairro - a Ótica Gouveia oferece atendimento de excelência com entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos para moradores e visitantes: exame de vista gratuito com equipamentos de última geração, confecção de óculos de grau com lentes de alta qualidade incluindo opções monofocais, bifocais e multifocais progressivas. Disponibilizamos tratamentos especiais como anti-reflexo multicamadas, proteção contra luz azul para uso de computador, lentes fotocromáticas Transitions ideais para quem aprecia os passeios ao ar livre pelas vinícolas e parques da região, além de proteção UV 400. Trabalhamos também com lentes de contato de diversas marcas para todas as necessidades.',
      'Em Santa Felicidade você encontra as melhores marcas de óculos com atendimento diferenciado: Ray-Ban com modelos elegantes, Oakley para esportes e atividades ao ar livre, Arnette, Chilli Beans e diversas armações nacionais e importadas de excelente qualidade. A Ótica Gouveia se diferencia pelo atendimento familiar e personalizado - cada cliente recebe atenção individual para escolher a armação ideal. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde, com condições especiais para pagamento à vista.',
      'Santa Felicidade está localizada na região noroeste de Curitiba, com fácil acesso pela Avenida Manoel Ribas e Via Vêneto. O bairro é vizinho de Lamenha Pequena, Butiatuvinha, São João e Orleans, formando uma região turística e residencial de alta qualidade. A Ótica Gouveia entrega em todo o bairro e região, garantindo praticidade para moradores que valorizam qualidade e tradição.',
      'Morador de Santa Felicidade, cuide da sua visão com tradição e qualidade! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa. Entrega gratuita em Santa Felicidade para compras acima de R$ 250,00. Ótica Gouveia - assim como as cantinas italianas, mais de 40 anos de tradição!'
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
      'Moradores do Bacacheri, a Ótica Gouveia oferece qualidade e tradição em óculos para um dos bairros mais agradáveis de Curitiba! O Bacacheri é um bairro residencial tranquilo e privilegiado, conhecido pelo Aeroporto Bacacheri para aviação executiva, pelo belo Parque Bacacheri com seu lago e áreas de lazer, e por moradores que valorizam qualidade de vida em contato com a natureza. Com mais de 40 anos de tradição no mercado óptico curitibano, a Ótica Gouveia oferece atendimento de excelência com entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos para toda a família: exame de vista gratuito com equipamentos de última geração, confecção de óculos de grau com lentes de alta qualidade incluindo opções monofocais, bifocais e multifocais progressivas. Disponibilizamos tratamentos especiais como anti-reflexo para melhor visão, proteção contra luz azul para uso de computador, lentes fotocromáticas ideais para quem frequenta o parque e atividades ao ar livre, além de proteção UV 400. Trabalhamos também com lentes de contato de diversas marcas e tipos.',
      'No Bacacheri você encontra as melhores marcas de óculos com atendimento diferenciado: Ray-Ban com modelos clássicos e modernos, Oakley ideal para atividades esportivas e corridas no parque, Arnette, Chilli Beans e diversas armações nacionais e importadas de excelente qualidade. A Ótica Gouveia se diferencia pelo atendimento familiar e personalizado - cada cliente recebe atenção individual. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde, com condições especiais para pagamento à vista.',
      'O Bacacheri está localizado na região norte de Curitiba, com fácil acesso e vizinhança com bairros como Boa Vista, Tingui, Pilarzinho e Bairro Alto. O Parque Bacacheri é um dos cartões postais da região, oferecendo trilhas, playground e áreas de contemplação. A Ótica Gouveia entrega em todo o Bacacheri e bairros vizinhos, garantindo praticidade para moradores que valorizam conforto.',
      'Morador do Bacacheri, cuide da sua visão com qualidade! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa. Entrega gratuita no Bacacheri para compras acima de R$ 250,00. Ótica Gouveia Bacacheri - tradição e excelência há mais de 40 anos!'
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
      'Trabalhadores e moradores do Rebouças, a Ótica Gouveia oferece qualidade e praticidade em óculos no coração de Curitiba! O Rebouças é um bairro central e estratégico, conhecido pela Rodoferroviária de Curitiba, Shopping Estação, forte movimentação comercial e milhares de pessoas que transitam diariamente pela região. Com mais de 40 anos de tradição no mercado óptico curitibano, a Ótica Gouveia oferece atendimento de excelência com entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos para profissionais e moradores: exame de vista gratuito com equipamentos de última geração, confecção de óculos de grau com lentes de alta qualidade incluindo opções monofocais, bifocais e multifocais progressivas ideais para trabalho. Disponibilizamos tratamentos especiais como anti-reflexo para melhor visão em ambientes iluminados, proteção contra luz azul essencial para quem trabalha com computador, lentes fotocromáticas Transitions e proteção UV 400. Trabalhamos também com lentes de contato de diversas marcas para maior praticidade.',
      'No Rebouças você encontra as melhores marcas de óculos com atendimento diferenciado: Ray-Ban com modelos executivos e casuais, Oakley, Arnette, Chilli Beans e diversas armações nacionais e importadas de excelente qualidade. A Ótica Gouveia se diferencia pelo atendimento prático e eficiente - entendemos a rotina corrida de quem trabalha na região. Parcelamos em até 12x sem juros, aceitamos convênios corporativos e planos de saúde, com condições especiais para pagamento à vista.',
      'O Rebouças está localizado em posição central de Curitiba, com fácil acesso pela Rodoferroviária e diversas linhas de transporte público. O bairro é vizinho do Centro, Prado Velho e Jardim Botânico, sendo passagem obrigatória para quem viaja de ônibus ou trem. A Ótica Gouveia entrega em todo o Rebouças e regiões adjacentes, garantindo praticidade para quem tem agenda apertada.',
      'Profissional do Rebouças, cuide da sua visão com praticidade! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos no trabalho ou em casa. Entrega gratuita no Rebouças para compras acima de R$ 250,00. Ótica Gouveia Rebouças - tradição e qualidade há mais de 40 anos!'
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
      'A Ótica Gouveia é a escolha perfeita para famílias do Capão Raso que buscam qualidade em óculos de grau e sol! O Capão Raso é um bairro residencial e comercial consolidado na região sul de Curitiba, conhecido pelo Terminal Capão Raso, proximidade com o Shopping Palladium e sua forte vocação comunitária. Com mais de 40 anos de tradição, a Ótica Gouveia atende toda a comunidade do Capão Raso com excelência, oferecendo produtos de qualidade e atendimento personalizado para todas as idades.',
      'Oferecemos uma gama completa de serviços ópticos: exame de vista gratuito com equipamentos modernos e profissionais experientes, óculos de grau para adultos, idosos e crianças com lentes monofocais, bifocais e multifocais progressivas. Aplicamos tratamentos de alta tecnologia como anti-reflexo, antirrisco, proteção contra luz azul de dispositivos eletrônicos, lentes fotocromáticas Transitions e proteção UV 400. Também trabalhamos com lentes de contato de diversas marcas para todas as necessidades visuais.',
      'No Capão Raso você encontra as melhores marcas de armações com preços acessíveis: Ray-Ban, Oakley, Arnette, Chilli Beans e diversas opções nacionais de qualidade. A Ótica Gouveia se destaca pelo atendimento familiar - cada membro da sua família recebe atenção individual para escolher óculos que combinem com seu estilo e necessidade. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde, com condições especiais para famílias e pagamento à vista.',
      'O Capão Raso possui excelente localização na região sul de Curitiba, com fácil acesso pelo Terminal Capão Raso e proximidade com o Shopping Palladium. O bairro é vizinho de Novo Mundo, Portão e Pinheirinho, contando com comércio diversificado e ótima infraestrutura. Nossa loja fica a apenas 8 minutos de carro, mas você também pode aproveitar nossa entrega gratuita via motoboy para compras acima de R$ 250,00 e receber seus óculos em casa.',
      'Família do Capão Raso, agende o exame de vista gratuito para todos! Entre em contato pelo WhatsApp (41) 99955-0667 e garanta atendimento para toda a família. Entrega gratuita no Capão Raso para compras acima de R$ 250,00. Funcionamos de segunda a sexta das 9h às 18h e sábados das 9h às 13h. Ótica Gouveia - mais de 40 anos cuidando da visão das famílias do Capão Raso!'
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
      'Moradores do Tatuquara, a Ótica Gouveia é sua parceira em cuidados visuais na região sul de Curitiba! O Tatuquara é um dos bairros mais populosos e vibrantes da capital paranaense, conhecido por sua forte identidade comunitária, comércio diversificado ao longo da Rua Marcelino Nogueira e milhares de famílias trabalhadoras. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia oferece atendimento de excelência para toda a comunidade do Tatuquara, com nossa loja no Pinheirinho a apenas 12 minutos de distância e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Oferecemos serviços ópticos completos com preços justos e acessíveis: exame de vista gratuito realizado com equipamentos modernos e profissionais qualificados, confecção de óculos de grau com lentes de qualidade incluindo opções monofocais, bifocais e multifocais progressivas. Disponibilizamos tratamentos anti-reflexo para melhor visão noturna, proteção contra luz azul de telas, lentes fotocromáticas Transitions e proteção UV 400. Trabalhamos também com lentes de contato gelatinosas e rígidas para todas as necessidades - descartáveis diárias, quinzenais, mensais e coloridas.',
      'Na Ótica Gouveia Tatuquara você encontra marcas de qualidade com preços que cabem no seu bolso: Ray-Ban, Oakley, Arnette, Chilli Beans e diversas opções nacionais acessíveis. Nosso atendimento é familiar e acolhedor - cada cliente recebe atenção individual para escolher a armação ideal. Parcelamos em até 12x sem juros nos cartões, aceitamos convênios e planos de saúde, e oferecemos condições especiais para pagamento à vista. Garantia de fábrica em todos os produtos.',
      'O bairro Tatuquara possui excelente infraestrutura com acesso pelo Terminal Tatuquara e diversas linhas de ônibus. A região é conhecida pela Rua Marcelino Nogueira, comércio variado, escolas e postos de saúde. O Tatuquara faz divisa com Pinheirinho, Campo de Santana, CIC e Caximba, sendo bem servido por transporte público. A Ótica Gouveia está estrategicamente localizada para atender toda essa região com qualidade e preços justos.',
      'Morador do Tatuquara, cuide da sua visão sem pesar no orçamento! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e descubra por que somos a ótica de confiança da comunidade. Entrega gratuita no Tatuquara para compras acima de R$ 250,00. Funcionamos de segunda a sexta das 9h às 18h e sábados das 9h às 13h. Ótica Gouveia Tatuquara - qualidade acessível há mais de 40 anos!'
    ],
    characteristics: 'Bairro populoso com forte comunidade',
    nearbyLandmarks: ['Terminal Tatuquara', 'Rua Marcelino Nogueira'],
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
      'Moradores do Campo Comprido, a Ótica Gouveia leva qualidade até você! O Campo Comprido é um dos maiores bairros de Curitiba em extensão territorial, localizado na região oeste da cidade e conhecido por seu constante desenvolvimento residencial e comercial. Com mais de 40 anos de tradição no mercado óptico curitibano, a Ótica Gouveia oferece atendimento de excelência para toda a comunidade do Campo Comprido, com entrega gratuita via motoboy para compras acima de R$ 250,00 em toda a região.',
      'Nossa equipe especializada oferece serviços ópticos completos para atender todas as suas necessidades visuais: exame de vista gratuito com equipamentos de última geração para diagnóstico preciso, confecção de óculos de grau com lentes oftálmicas de alta qualidade incluindo opções monofocais, bifocais e multifocais progressivas. Disponibilizamos tratamentos especiais como anti-reflexo multicamadas, proteção contra luz azul de computadores e celulares, lentes fotocromáticas Transitions e proteção UV 400. Trabalhamos também com lentes de contato de diversas marcas e tipos.',
      'No Campo Comprido você encontra as melhores marcas do mercado óptico: Ray-Ban com modelos clássicos e modernos, Oakley para esportes, Arnette, Chilli Beans e diversas armações nacionais e importadas. A Ótica Gouveia se diferencia pelo atendimento personalizado - cada cliente recebe orientação especializada para escolher a armação perfeita. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde, com descontos especiais para pagamento à vista.',
      'O Campo Comprido está localizado na região oeste de Curitiba, próximo a bairros como Mossunguê, Santa Quitéria, CIC e Cidade Industrial. O bairro conta com boa infraestrutura, comércio variado e fácil acesso pela Avenida Presidente Affonso Camargo. A região está em constante valorização com novos empreendimentos residenciais. A Ótica Gouveia atende moradores de toda essa área com qualidade comprovada.',
      'Morador do Campo Comprido, sua visão merece cuidado profissional! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa. Entrega gratuita no Campo Comprido para compras acima de R$ 250,00. Ótica Gouveia - tradição, qualidade e praticidade há mais de 40 anos servindo o Campo Comprido!'
    ],
    characteristics: 'Bairro extenso em constante desenvolvimento',
    nearbyLandmarks: ['Próximo ao Mossunguê', 'Região Oeste'],
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
      'Moradores do Hugo Lange, a Ótica Gouveia oferece produtos premium para um dos bairros mais charmosos de Curitiba! O Hugo Lange é um bairro residencial de alto padrão, conhecido por suas casas elegantes, ruas arborizadas e moradores que valorizam qualidade de vida e sofisticação. Com mais de 40 anos de tradição no mercado óptico curitibano, a Ótica Gouveia atende clientes exigentes do Hugo Lange com marcas premium e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos de alto padrão: exame de vista gratuito com equipamentos de última geração para diagnóstico preciso, confecção de óculos de grau com lentes das melhores marcas mundiais incluindo Zeiss, Hoya e Varilux. Disponibilizamos tratamentos premium como anti-reflexo multicamadas Crizal, proteção contra luz azul para uso intensivo de telas, lentes fotocromáticas Transitions Signature e proteção UV 400. Trabalhamos também com lentes de contato diárias premium e multifocais.',
      'No Hugo Lange você encontra as grifes mais desejadas do mercado óptico: Ray-Ban com coleções exclusivas, Oakley para esportes de alta performance, Persol italiano, Arnette, Chilli Beans e diversas armações de designer. A Ótica Gouveia se diferencia pelo atendimento consultivo e personalizado - ajudamos você a escolher a armação perfeita para seu estilo sofisticado. Parcelamos em até 12x sem juros, com condições especiais para pagamento à vista.',
      'O Hugo Lange está localizado em posição privilegiada em Curitiba, próximo ao Cabral, Juvevê, Alto da Glória e Centro. O bairro é conhecido por suas residências elegantes, áreas verdes e tranquilidade. A Ótica Gouveia entrega em todo o Hugo Lange e bairros adjacentes, garantindo praticidade para clientes que valorizam seu tempo e exigem o melhor em produtos ópticos.',
      'Cliente do Hugo Lange, sua visão merece o melhor! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos premium em casa. Entrega gratuita no Hugo Lange para compras acima de R$ 250,00. Ótica Gouveia - elegância e qualidade em óculos há mais de 40 anos!'
    ],
    characteristics: 'Bairro residencial elegante com casas charmosas',
    nearbyLandmarks: ['Próximo ao Cabral', 'Juvevê', 'Alto da Glória'],
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
      'Moradores do Tingui, a Ótica Gouveia oferece qualidade para quem vive cercado pela natureza! O Tingui é um dos bairros mais privilegiados de Curitiba, famoso pelo Parque Tingui com seu icônico Memorial Ucraniano, espaços de lazer e contato direto com a natureza. Com mais de 40 anos de tradição no mercado óptico curitibano, a Ótica Gouveia atende toda a comunidade do Tingui com produtos de qualidade e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos para atender todas as suas necessidades: exame de vista gratuito com equipamentos modernos, confecção de óculos de grau com lentes de alta qualidade incluindo monofocais, bifocais e multifocais progressivas. Disponibilizamos tratamentos especiais como anti-reflexo multicamadas, proteção contra luz azul de telas, lentes fotocromáticas Transitions perfeitas para passeios no parque e proteção UV 400. Trabalhamos também com lentes de contato de diversas marcas.',
      'No Tingui você encontra as melhores marcas para curtir o parque e o dia a dia: Ray-Ban com modelos clássicos, Oakley perfeitos para atividades ao ar livre e esportes, Arnette, Chilli Beans e diversas armações nacionais e importadas. A Ótica Gouveia se diferencia pelo atendimento personalizado - ajudamos você a escolher óculos de sol ideais para curtir o Parque Tingui e óculos de grau para todas as ocasiões. Parcelamos em até 12x sem juros.',
      'O Tingui está localizado na região norte de Curitiba, às margens do Rio Barigui, com fácil acesso a bairros como São Lourenço, Pilarzinho, Bom Retiro e Cascatinha. O bairro é valorizado por sua qualidade de vida, áreas verdes preservadas e o belíssimo Parque Tingui com seu lago, trilhas e o Memorial da Imigração Ucraniana. A Ótica Gouveia entrega em toda essa região com praticidade.',
      'Morador do Tingui, cuide da sua visão com qualidade! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa. Entrega gratuita no Tingui para compras acima de R$ 250,00. Ótica Gouveia Tingui - qualidade e natureza combinam há mais de 40 anos!'
    ],
    characteristics: 'Bairro verde com o famoso Parque Tingui',
    nearbyLandmarks: ['Parque Tingui', 'Memorial Ucraniano', 'Rio Barigui'],
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
      'Moradores do Mercês, a Ótica Gouveia oferece praticidade e qualidade para um dos bairros mais bem localizados de Curitiba! O Mercês é um bairro residencial e comercial estratégico, conhecido por sua ótima infraestrutura, proximidade com o Centro e moradores que valorizam conveniência. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia atende toda a comunidade do Mercês com produtos de qualidade e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos para profissionais e famílias: exame de vista gratuito com equipamentos modernos, confecção de óculos de grau com lentes de alta qualidade incluindo monofocais, bifocais e multifocais progressivas. Disponibilizamos tratamentos anti-reflexo para uso em escritório, proteção contra luz azul de computadores, lentes fotocromáticas Transitions e proteção UV 400. Trabalhamos também com lentes de contato de diversas marcas para maior praticidade no dia a dia.',
      'No Mercês você encontra as melhores marcas do mercado óptico: Ray-Ban com modelos elegantes e modernos, Oakley para esportes, Arnette, Chilli Beans e diversas armações nacionais e importadas de design contemporâneo. A Ótica Gouveia se diferencia pelo atendimento personalizado e consultivo - ajudamos você a escolher a armação ideal para seu estilo profissional e pessoal. Parcelamos em até 12x sem juros, aceitamos convênios.',
      'O Mercês está localizado em posição central de Curitiba, com fácil acesso ao Centro, Bigorrilho, Batel e Alto da Glória. O bairro conta com excelente comércio, serviços variados, transporte público eficiente e é muito procurado por profissionais que trabalham na região central. A Ótica Gouveia entrega em todo o Mercês e bairros vizinhos com praticidade e rapidez.',
      'Morador do Mercês, cuide da sua visão com conveniência! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa ou no trabalho. Entrega gratuita no Mercês para compras acima de R$ 250,00. Ótica Gouveia Mercês - praticidade e qualidade há mais de 40 anos!'
    ],
    characteristics: 'Bairro bem localizado com ótima infraestrutura',
    nearbyLandmarks: ['Próximo ao Centro', 'Bigorrilho', 'Batel'],
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
      'Moradores do Cabral, a Ótica Gouveia oferece excelência em produtos ópticos para um dos bairros mais nobres de Curitiba! O Cabral é sinônimo de elegância, com casas imponentes, ruas arborizadas, excelente infraestrutura e moradores que não abrem mão de qualidade. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia atende clientes exigentes do Cabral com marcas premium e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos de alto padrão: exame de vista gratuito com tecnologia de ponta, confecção de óculos de grau com lentes das melhores marcas mundiais como Zeiss, Hoya e Varilux. Disponibilizamos tratamentos premium como anti-reflexo Crizal Sapphire, proteção DuraVision BlueProtect contra luz azul, lentes fotocromáticas Transitions XTRActive e proteção UV 400. Trabalhamos também com lentes de contato diárias premium como Acuvue Oasys.',
      'No Cabral você encontra as grifes mais sofisticadas do mercado óptico: Ray-Ban com coleções exclusivas e limitadas, Oakley Prizm de alta performance, Persol italiano, Prada, Dolce & Gabbana e diversas armações de designer. A Ótica Gouveia se diferencia pelo atendimento consultivo e personalizado - ajudamos você a escolher a armação que reflete seu estilo sofisticado. Parcelamos em até 12x sem juros.',
      'O Cabral está localizado na região nobre de Curitiba, próximo ao Juvevê, Alto da Glória, Hugo Lange e Centro Cívico. O bairro é valorizado por sua tranquilidade, segurança, áreas verdes e proximidade com o Bosque do Papa. A Ótica Gouveia entrega em todo o Cabral e bairros adjacentes, garantindo praticidade para clientes que valorizam seu tempo.',
      'Cliente do Cabral, sua visão merece o melhor! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos premium em casa. Entrega gratuita no Cabral para compras acima de R$ 250,00. Ótica Gouveia Cabral - sofisticação e excelência há mais de 40 anos!'
    ],
    characteristics: 'Bairro nobre com casas elegantes e moradores exigentes',
    nearbyLandmarks: ['Bosque do Papa', 'Juvevê', 'Alto da Glória', 'Centro Cívico'],
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
      'Moradores do Alto da XV, a Ótica Gouveia oferece qualidade e tradição para um bairro que respira história! O Alto da XV é um bairro residencial tradicional de Curitiba, localizado em região elevada próxima ao Centro, conhecido por suas ruas tranquilas, casas históricas e moradores que valorizam qualidade de vida. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia atende toda a comunidade do Alto da XV com produtos de qualidade e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos: exame de vista gratuito com equipamentos modernos para diagnóstico preciso, confecção de óculos de grau com lentes de alta qualidade incluindo monofocais, bifocais e multifocais progressivas. Disponibilizamos tratamentos anti-reflexo de alta performance, proteção contra luz azul de computadores, lentes fotocromáticas Transitions e proteção UV 400. Trabalhamos também com lentes de contato de diversas marcas e tipos.',
      'No Alto da XV você encontra as melhores marcas do mercado óptico: Ray-Ban com modelos clássicos e contemporâneos, Oakley, Arnette, Chilli Beans e diversas armações nacionais e importadas elegantes. A Ótica Gouveia se diferencia pelo atendimento personalizado - ajudamos você a escolher a armação ideal que combina com o charme do seu bairro. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde.',
      'O Alto da XV está localizado próximo ao Centro de Curitiba, Cristo Rei, Jardim Botânico e Rebouças. O bairro é valorizado por sua localização estratégica, tranquilidade e arquitetura tradicional. Possui fácil acesso ao transporte público e às principais vias da cidade. A Ótica Gouveia entrega em todo o Alto da XV e bairros vizinhos com praticidade e rapidez.',
      'Morador do Alto da XV, cuide da sua visão com quem valoriza tradição! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa. Entrega gratuita no Alto da XV para compras acima de R$ 250,00. Ótica Gouveia - tradição e qualidade há mais de 40 anos!'
    ],
    characteristics: 'Bairro residencial tradicional em região elevada',
    nearbyLandmarks: ['Próximo ao Centro', 'Cristo Rei', 'Jardim Botânico'],
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
      'Moradores do Guabirotuba, a Ótica Gouveia é sua escolha certa próximo ao Jardim Botânico! O Guabirotuba é um bairro residencial verde e tranquilo de Curitiba, privilegiado pela proximidade com o famoso Jardim Botânico e suas áreas de lazer. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia atende toda a comunidade do Guabirotuba com produtos de qualidade e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos para toda a família: exame de vista gratuito com equipamentos modernos, confecção de óculos de grau com lentes de alta qualidade incluindo monofocais, bifocais e multifocais progressivas. Disponibilizamos tratamentos anti-reflexo, proteção contra luz azul, lentes fotocromáticas Transitions perfeitas para passeios no Jardim Botânico e proteção UV 400. Trabalhamos também com lentes de contato de diversas marcas para maior praticidade.',
      'No Guabirotuba você encontra marcas de qualidade para curtir o parque e o dia a dia: Ray-Ban com modelos clássicos, Oakley perfeitos para atividades ao ar livre, Arnette, Chilli Beans e diversas armações nacionais e importadas. A Ótica Gouveia se diferencia pelo atendimento familiar - ajudamos cada membro da família a escolher os óculos ideais. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde.',
      'O Guabirotuba está localizado na zona leste de Curitiba, às margens do Jardim Botânico, com fácil acesso ao Parque das Pedreiras (Ópera de Arame), Cajuru e Capão da Imbuia. O bairro é valorizado por sua qualidade de vida, áreas verdes e proximidade com importantes pontos turísticos da cidade. A Ótica Gouveia entrega em toda essa região verde com praticidade.',
      'Morador do Guabirotuba, cuide da sua visão em família! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa. Entrega gratuita no Guabirotuba para compras acima de R$ 250,00. Ótica Gouveia - qualidade próxima à natureza há mais de 40 anos!'
    ],
    characteristics: 'Bairro residencial verde próximo ao Jardim Botânico',
    nearbyLandmarks: ['Jardim Botânico', 'Parque das Pedreiras', 'Ópera de Arame'],
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
      'Moradores do Parolin, a Ótica Gouveia é sua parceira de confiança há mais de 40 anos! O Parolin é um bairro residencial tradicional de Curitiba, localizado próximo ao Centro, conhecido por seu forte senso de comunidade, moradores trabalhadores e famílias que valorizam relacionamentos duradouros com prestadores de serviços. Com mais de quatro décadas de tradição no mercado óptico, a Ótica Gouveia atende toda a comunidade do Parolin com qualidade e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos com preços justos: exame de vista gratuito com equipamentos modernos, confecção de óculos de grau com lentes de qualidade incluindo monofocais, bifocais e multifocais progressivas. Disponibilizamos tratamentos anti-reflexo, proteção contra luz azul de computadores e celulares, lentes fotocromáticas Transitions e proteção UV 400. Trabalhamos também com lentes de contato de diversas marcas e tipos para todas as necessidades.',
      'No Parolin você encontra marcas de qualidade com preços acessíveis: Ray-Ban, Oakley, Arnette, Chilli Beans e diversas armações nacionais de excelente custo-benefício. A Ótica Gouveia se diferencia pelo atendimento familiar e comunitário - conhecemos nossos clientes pelo nome e acompanhamos suas famílias há gerações. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde.',
      'O Parolin está localizado na região central-sul de Curitiba, com fácil acesso ao Centro, Prado Velho, Rebouças e Vila Guaíra. O bairro possui boa infraestrutura, comércio local, transporte público eficiente e mantém sua identidade comunitária mesmo com o crescimento urbano. A Ótica Gouveia entrega em todo o Parolin e bairros vizinhos com rapidez e cuidado.',
      'Morador do Parolin, cuide da sua visão com quem valoriza comunidade! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa. Entrega gratuita no Parolin para compras acima de R$ 250,00. Ótica Gouveia Parolin - tradição comunitária há mais de 40 anos!'
    ],
    characteristics: 'Bairro residencial tradicional com forte comunidade',
    nearbyLandmarks: ['Próximo ao Centro', 'Prado Velho', 'Rebouças'],
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
      'Moradores do Abranches, a Ótica Gouveia leva qualidade às alturas! O Abranches é um bairro residencial de Curitiba localizado em região elevada, conhecido por suas belas vistas panorâmicas da cidade, ruas tranquilas e moradores que valorizam qualidade de vida e ar puro. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia atende toda a comunidade do Abranches com produtos de qualidade e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos: exame de vista gratuito com equipamentos modernos para diagnóstico preciso, confecção de óculos de grau com lentes de alta qualidade incluindo monofocais, bifocais e multifocais progressivas. Disponibilizamos tratamentos anti-reflexo, proteção contra luz azul de telas, lentes fotocromáticas Transitions e proteção UV 400 essencial para quem aprecia as áreas abertas do bairro. Trabalhamos também com lentes de contato de diversas marcas.',
      'No Abranches você encontra as melhores marcas do mercado óptico: Ray-Ban com modelos clássicos e modernos, Oakley perfeitos para atividades ao ar livre, Arnette, Chilli Beans e diversas armações nacionais e importadas. A Ótica Gouveia se diferencia pelo atendimento personalizado - ajudamos você a escolher óculos ideais para curtir as vistas do seu bairro com clareza. Parcelamos em até 12x sem juros, aceitamos convênios.',
      'O Abranches está localizado na região norte de Curitiba, próximo ao Pilarzinho, Cachoeira, São Lourenço e Barreirinha. O bairro é valorizado por sua localização elevada, tranquilidade, áreas verdes e vistas privilegiadas da cidade. Possui acesso ao Parque da Barreirinha e está conectado a importantes vias da região norte. A Ótica Gouveia entrega em toda essa região com praticidade.',
      'Morador do Abranches, cuide da sua visão no alto! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa. Entrega gratuita no Abranches para compras acima de R$ 250,00. Ótica Gouveia Abranches - qualidade com vista há mais de 40 anos!'
    ],
    characteristics: 'Bairro residencial elevado com belas vistas panorâmicas',
    nearbyLandmarks: ['Próximo ao Pilarzinho', 'Cachoeira', 'São Lourenço'],
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
      'Moradores do Uberaba, a Ótica Gouveia é sua referência em óculos na zona leste de Curitiba! O Uberaba é um bairro residencial estratégico, conhecido por sua ótima localização, boa infraestrutura e moradores que valorizam praticidade e qualidade de vida. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia atende toda a comunidade do Uberaba com produtos de qualidade e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos: exame de vista gratuito com equipamentos modernos para diagnóstico preciso, confecção de óculos de grau com lentes de alta qualidade incluindo monofocais, bifocais e multifocais progressivas. Disponibilizamos tratamentos anti-reflexo para melhor visão noturna, proteção contra luz azul de computadores e celulares, lentes fotocromáticas Transitions e proteção UV 400. Trabalhamos também com lentes de contato de diversas marcas e tipos.',
      'No Uberaba você encontra as melhores marcas do mercado óptico: Ray-Ban com modelos clássicos e modernos, Oakley para esportes, Arnette, Chilli Beans e diversas armações nacionais e importadas de qualidade. A Ótica Gouveia se diferencia pelo atendimento personalizado - cada cliente recebe orientação para escolher a armação ideal. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde, com condições especiais para pagamento à vista.',
      'O Uberaba está localizado na zona leste de Curitiba, com fácil acesso ao Cajuru, Jardim das Américas, Capão da Imbuia e Guabirotuba. O bairro possui boa infraestrutura, comércio variado, escolas e transporte público eficiente. É muito valorizado por famílias que buscam qualidade de vida com praticidade de acesso às principais regiões da cidade. A Ótica Gouveia entrega em toda essa região com rapidez.',
      'Morador do Uberaba, cuide da sua visão com praticidade! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa. Entrega gratuita no Uberaba para compras acima de R$ 250,00. Ótica Gouveia Uberaba - qualidade na zona leste há mais de 40 anos!'
    ],
    characteristics: 'Bairro residencial com ótima localização e infraestrutura',
    nearbyLandmarks: ['Próximo ao Cajuru', 'Jardim das Américas', 'Capão da Imbuia'],
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
      'Moradores da Vila Izabel, a Ótica Gouveia oferece elegância em cuidados visuais! A Vila Izabel é um bairro residencial sofisticado de Curitiba, conhecido por suas casas elegantes, ruas tranquilas e moradores que valorizam qualidade de vida e bom gosto. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia atende toda a comunidade da Vila Izabel com produtos de qualidade e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos de alto padrão: exame de vista gratuito com equipamentos modernos, confecção de óculos de grau com lentes de alta qualidade incluindo monofocais, bifocais e multifocais progressivas das melhores marcas. Disponibilizamos tratamentos premium como anti-reflexo multicamadas, proteção contra luz azul, lentes fotocromáticas Transitions e proteção UV 400. Trabalhamos também com lentes de contato premium de diversas marcas.',
      'Na Vila Izabel você encontra as marcas mais elegantes do mercado óptico: Ray-Ban com modelos sofisticados, Oakley, Arnette, Chilli Beans e diversas armações de designer nacionais e importadas. A Ótica Gouveia se diferencia pelo atendimento consultivo - ajudamos você a escolher a armação perfeita que reflete a elegância do seu bairro. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde.',
      'A Vila Izabel está localizada em posição privilegiada de Curitiba, próxima ao Portão, Água Verde, Novo Mundo e Santa Quitéria. O bairro é valorizado por sua tranquilidade, arquitetura residencial de qualidade e excelente infraestrutura. Possui fácil acesso às principais vias da cidade e comércio refinado. A Ótica Gouveia entrega em toda a Vila Izabel e bairros vizinhos com elegância.',
      'Morador da Vila Izabel, cuide da sua visão com elegância! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa. Entrega gratuita na Vila Izabel para compras acima de R$ 250,00. Ótica Gouveia Vila Izabel - elegância em óculos há mais de 40 anos!'
    ],
    characteristics: 'Bairro residencial elegante e tranquilo',
    nearbyLandmarks: ['Próximo ao Portão', 'Água Verde', 'Novo Mundo'],
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
      'Moradores do Alto da Glória, a Ótica Gouveia oferece excelência para um dos bairros mais nobres de Curitiba! O Alto da Glória é um bairro residencial de alto padrão, localizado próximo ao Centro Cívico, Palácio Iguaçu e às principais instituições governamentais do Paraná. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia atende clientes exigentes do Alto da Glória com marcas premium e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos de alto padrão: exame de vista gratuito com tecnologia de ponta, confecção de óculos de grau com lentes das melhores marcas mundiais incluindo Zeiss, Hoya e Varilux. Disponibilizamos tratamentos premium como anti-reflexo Crizal, proteção DuraVision BlueProtect contra luz azul, lentes fotocromáticas Transitions Signature e proteção UV 400. Trabalhamos também com lentes de contato diárias premium.',
      'No Alto da Glória você encontra as grifes mais sofisticadas do mercado: Ray-Ban com coleções exclusivas, Oakley de alta performance, Persol, Prada e diversas armações de designer. A Ótica Gouveia se diferencia pelo atendimento consultivo e personalizado - perfeito para executivos e profissionais que trabalham no Centro Cívico. Parcelamos em até 12x sem juros, com condições especiais para pagamento à vista.',
      'O Alto da Glória está localizado na região nobre de Curitiba, vizinho ao Centro Cívico, Palácio Iguaçu (sede do governo estadual), Cabral, Juvevê e Centro. O bairro é valorizado por sua proximidade com as instituições governamentais, segurança e tranquilidade. A Ótica Gouveia entrega em todo o Alto da Glória, perfeito para profissionais com agenda lotada que não podem sair do trabalho.',
      'Cliente do Alto da Glória, sua visão merece excelência! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos premium em casa ou no escritório. Entrega gratuita no Alto da Glória para compras acima de R$ 250,00. Ótica Gouveia - glória em cada detalhe há mais de 40 anos!'
    ],
    characteristics: 'Bairro nobre próximo ao Centro Cívico e Palácio Iguaçu',
    nearbyLandmarks: ['Centro Cívico', 'Palácio Iguaçu', 'Cabral', 'Juvevê'],
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
      'Moradores do Pilarzinho, a Ótica Gouveia é sua parceira de confiança na região norte de Curitiba! O Pilarzinho é um bairro residencial tradicional, conhecido por suas ruas tranquilas, forte identidade comunitária e moradores que valorizam qualidade de vida e relacionamentos duradouros. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia atende toda a comunidade do Pilarzinho com produtos de qualidade e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos: exame de vista gratuito com equipamentos modernos para diagnóstico preciso, confecção de óculos de grau com lentes de alta qualidade incluindo monofocais, bifocais e multifocais progressivas. Disponibilizamos tratamentos anti-reflexo, proteção contra luz azul de computadores e celulares, lentes fotocromáticas Transitions e proteção UV 400. Trabalhamos também com lentes de contato de diversas marcas para todas as necessidades.',
      'No Pilarzinho você encontra as melhores marcas com atendimento familiar: Ray-Ban, Oakley, Arnette, Chilli Beans e diversas armações nacionais de excelente custo-benefício. A Ótica Gouveia se diferencia pelo atendimento comunitário e acolhedor - conhecemos nossos clientes e suas famílias há gerações. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde, com condições especiais para pagamento à vista.',
      'O Pilarzinho está localizado na região norte de Curitiba, próximo ao Abranches, Cachoeira, São Lourenço, Barreirinha e Tingui. O bairro possui boa infraestrutura, comércio local, escolas e transporte público eficiente. É valorizado por famílias que buscam tranquilidade sem abrir mão da praticidade urbana. A Ótica Gouveia entrega em toda essa região norte com cuidado.',
      'Morador do Pilarzinho, cuide da sua visão em família! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa. Entrega gratuita no Pilarzinho para compras acima de R$ 250,00. Ótica Gouveia Pilarzinho - tradição e qualidade há mais de 40 anos!'
    ],
    characteristics: 'Bairro residencial tranquilo com comunidade ativa',
    nearbyLandmarks: ['Próximo ao Abranches', 'São Lourenço', 'Barreirinha'],
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
      'Moradores do Santa Cândida, a Ótica Gouveia é sua escolha certa na zona norte de Curitiba! O Santa Cândida é um dos bairros mais populosos e dinâmicos do norte da cidade, conhecido pelo movimentado Terminal Santa Cândida, forte vocação comercial e milhares de famílias trabalhadoras. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia atende toda a comunidade do Santa Cândida com qualidade, preços justos e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos e acessíveis: exame de vista gratuito com equipamentos modernos, confecção de óculos de grau com lentes de qualidade incluindo monofocais, bifocais e multifocais progressivas. Disponibilizamos tratamentos anti-reflexo, proteção contra luz azul de telas, lentes fotocromáticas Transitions e proteção UV 400. Trabalhamos também com lentes de contato de diversas marcas com preços justos.',
      'No Santa Cândida você encontra marcas de qualidade com preços que cabem no orçamento: Ray-Ban, Oakley, Arnette, Chilli Beans e diversas armações nacionais acessíveis. A Ótica Gouveia se diferencia pelo atendimento familiar e comunitário - entendemos as necessidades das famílias trabalhadoras. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde, facilitando o acesso a óculos de qualidade.',
      'O Santa Cândida está localizado na região norte de Curitiba, com excelente acesso pelo Terminal Santa Cândida que conecta toda a região norte da cidade. O bairro faz divisa com Atuba, Tingui, Bacacheri e Boa Vista, sendo um importante polo comercial e residencial. A Ótica Gouveia entrega em toda essa região populosa do norte com praticidade.',
      'Morador do Santa Cândida, cuide da sua visão com qualidade acessível! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa. Entrega gratuita no Santa Cândida para compras acima de R$ 250,00. Ótica Gouveia Santa Cândida - qualidade para o norte há mais de 40 anos!'
    ],
    characteristics: 'Bairro populoso do norte com forte comércio e Terminal',
    nearbyLandmarks: ['Terminal Santa Cândida', 'Atuba', 'Tingui'],
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
      'Moradores do Santa Quitéria, a Ótica Gouveia é sua escolha para cuidados visuais em família! O Santa Quitéria é um bairro residencial tranquilo de Curitiba, conhecido por sua atmosfera familiar, boa infraestrutura e moradores que valorizam qualidade de vida. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia atende toda a comunidade do Santa Quitéria com produtos de qualidade e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos para toda a família: exame de vista gratuito com equipamentos modernos, confecção de óculos de grau com lentes de alta qualidade incluindo monofocais para crianças e adultos, bifocais e multifocais progressivas para os mais velhos. Disponibilizamos tratamentos anti-reflexo, proteção contra luz azul de telas, lentes fotocromáticas Transitions e proteção UV 400. Trabalhamos também com lentes de contato de diversas marcas.',
      'No Santa Quitéria você encontra marcas de qualidade para todas as idades: Ray-Ban, Oakley para esportes, Arnette, Chilli Beans, armações infantis coloridas e diversas opções nacionais acessíveis. A Ótica Gouveia se diferencia pelo atendimento familiar - cuidamos da visão de pais, filhos e avós com a mesma atenção. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde.',
      'O Santa Quitéria está localizado na região oeste de Curitiba, próximo ao Campo Comprido, Campina do Siqueira, Vila Izabel e Portão. O bairro possui boa infraestrutura, comércio local, escolas e áreas verdes. É muito valorizado por famílias que buscam ambiente tranquilo para criar os filhos. A Ótica Gouveia entrega em toda essa região familiar com cuidado.',
      'Família do Santa Quitéria, cuide da visão de todos em um só lugar! Agende exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba os óculos de toda a família em casa. Entrega gratuita no Santa Quitéria para compras acima de R$ 250,00. Ótica Gouveia Santa Quitéria - qualidade familiar há mais de 40 anos!'
    ],
    characteristics: 'Bairro residencial familiar e tranquilo',
    nearbyLandmarks: ['Próximo ao Campo Comprido', 'Campina do Siqueira', 'Vila Izabel'],
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
      'Moradores do Mossunguê, a Ótica Gouveia oferece sofisticação para uma das regiões mais nobres de Curitiba! O Mossunguê é uma área de alto padrão, conhecida por seus condomínios de luxo, proximidade com o Ecoville e ParkShopping Barigui, e moradores extremamente exigentes. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia atende clientes sofisticados do Mossunguê com marcas premium e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos de altíssimo padrão: exame de vista gratuito com tecnologia de ponta, confecção de óculos de grau com lentes das marcas mais prestigiadas do mundo incluindo Zeiss, Hoya e Varilux. Disponibilizamos tratamentos premium exclusivos como anti-reflexo Crizal Sapphire HR, proteção DuraVision BlueProtect, lentes fotocromáticas Transitions XTRActive Style Colors e proteção UV total. Trabalhamos também com lentes de contato diárias de alta performance.',
      'No Mossunguê você encontra as grifes mais exclusivas do mercado óptico internacional: Ray-Ban com edições limitadas, Oakley de alta performance, Persol italiano, Prada, Dolce & Gabbana, Tom Ford e diversas armações de designer. A Ótica Gouveia se diferencia pelo atendimento consultivo de excelência - proporcionamos uma experiência completa de escolha para clientes que exigem o melhor. Parcelamos em até 12x sem juros.',
      'O Mossunguê está localizado na região mais valorizada de Curitiba, próximo ao Ecoville, ParkShopping Barigui, Champagnat e Bigorrilho. A região é sinônimo de luxo, com condomínios fechados de alto padrão, áreas verdes preservadas e infraestrutura impecável. A Ótica Gouveia entrega em todo o Mossunguê, garantindo praticidade para clientes com agenda premium.',
      'Cliente do Mossunguê, sua visão merece exclusividade! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos premium em casa. Entrega gratuita no Mossunguê para compras acima de R$ 250,00. Ótica Gouveia - sofisticação em cuidados visuais há mais de 40 anos!'
    ],
    characteristics: 'Região de altíssimo padrão próxima ao Ecoville e ParkShopping',
    nearbyLandmarks: ['Ecoville', 'ParkShopping Barigui', 'Champagnat', 'Bigorrilho'],
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
      'Moradores do Seminário, a Ótica Gouveia oferece tradição para um bairro que valoriza história! O Seminário é um bairro residencial tradicional de Curitiba, conhecido por suas casas elegantes, arquitetura clássica e moradores que apreciam qualidade e bom gosto. Com mais de 40 anos de tradição no mercado óptico - quase tanto quanto muitas casas do bairro - a Ótica Gouveia atende toda a comunidade do Seminário com produtos de qualidade e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos de alto padrão: exame de vista gratuito com equipamentos modernos, confecção de óculos de grau com lentes de alta qualidade incluindo monofocais, bifocais e multifocais progressivas das melhores marcas. Disponibilizamos tratamentos premium como anti-reflexo multicamadas, proteção contra luz azul, lentes fotocromáticas Transitions e proteção UV 400. Trabalhamos também com lentes de contato premium.',
      'No Seminário você encontra as marcas mais elegantes do mercado óptico: Ray-Ban com modelos clássicos atemporais, Oakley, Arnette, Chilli Beans e diversas armações de designer nacionais e importadas. A Ótica Gouveia se diferencia pelo atendimento clássico e refinado - ajudamos você a escolher armações que combinam com a elegância tradicional do seu bairro. Parcelamos em até 12x sem juros, aceitamos convênios.',
      'O Seminário está localizado na região norte de Curitiba, próximo ao Bom Retiro, Vista Alegre, São Lourenço e Cabral. O bairro é valorizado por sua arquitetura tradicional, ruas arborizadas e tranquilidade. Possui fácil acesso às principais vias da cidade mantendo o charme residencial. A Ótica Gouveia entrega em todo o Seminário com a elegância que o bairro merece.',
      'Morador do Seminário, cuide da sua visão com tradição! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa. Entrega gratuita no Seminário para compras acima de R$ 250,00. Ótica Gouveia Seminário - tradição e qualidade há mais de 40 anos!'
    ],
    characteristics: 'Bairro residencial tradicional com arquitetura clássica',
    nearbyLandmarks: ['Próximo ao Bom Retiro', 'Vista Alegre', 'São Lourenço'],
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
      'Moradores da Barreirinha, a Ótica Gouveia é sua referência na zona norte de Curitiba! A Barreirinha é um bairro dinâmico e populoso, conhecido pelo Terminal Barreirinha, pelo Parque da Barreirinha e sua forte movimentação comercial. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia atende toda a comunidade da Barreirinha com qualidade, preços justos e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos e acessíveis: exame de vista gratuito com equipamentos modernos, confecção de óculos de grau com lentes de qualidade incluindo monofocais, bifocais e multifocais progressivas. Disponibilizamos tratamentos anti-reflexo, proteção contra luz azul de telas, lentes fotocromáticas Transitions e proteção UV 400 para curtir o Parque. Trabalhamos também com lentes de contato de diversas marcas com preços justos.',
      'Na Barreirinha você encontra marcas de qualidade com preços acessíveis: Ray-Ban, Oakley, Arnette, Chilli Beans e diversas armações nacionais de excelente custo-benefício. A Ótica Gouveia se diferencia pelo atendimento familiar e comunitário - entendemos as necessidades das famílias trabalhadoras do norte. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde.',
      'A Barreirinha está localizada na região norte de Curitiba, com excelente acesso pelo Terminal Barreirinha, um dos mais movimentados da cidade. O bairro possui o Parque da Barreirinha para lazer, comércio variado e faz divisa com Abranches, Cachoeira e Santa Cândida. A Ótica Gouveia entrega em toda essa região populosa do norte.',
      'Morador da Barreirinha, cuide da sua visão com qualidade acessível! Agende seu exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba seus óculos em casa. Entrega gratuita na Barreirinha para compras acima de R$ 250,00. Ótica Gouveia Barreirinha - qualidade para o norte há mais de 40 anos!'
    ],
    characteristics: 'Bairro do norte com Terminal de ônibus e Parque',
    nearbyLandmarks: ['Terminal Barreirinha', 'Parque da Barreirinha', 'Abranches'],
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
      'Moradores do Santo Inácio, a Ótica Gouveia é sua parceira de fé na qualidade visual! O Santo Inácio é um bairro residencial familiar de Curitiba, conhecido por sua tranquilidade, forte senso de comunidade e moradores que valorizam qualidade de vida e relacionamentos duradouros. Com mais de 40 anos de tradição no mercado óptico, a Ótica Gouveia atende toda a comunidade do Santo Inácio com produtos de qualidade e entrega gratuita via motoboy para compras acima de R$ 250,00.',
      'Nossa equipe especializada oferece serviços ópticos completos para todas as idades: exame de vista gratuito com equipamentos modernos, confecção de óculos de grau com lentes de alta qualidade incluindo monofocais para crianças e adultos, bifocais e multifocais progressivas. Disponibilizamos tratamentos anti-reflexo, proteção contra luz azul de telas, lentes fotocromáticas Transitions e proteção UV 400. Trabalhamos também com lentes de contato de diversas marcas.',
      'No Santo Inácio você encontra marcas de qualidade para toda a família: Ray-Ban, Oakley, Arnette, Chilli Beans, armações infantis coloridas e diversas opções nacionais acessíveis. A Ótica Gouveia se diferencia pelo atendimento familiar e acolhedor - cuidamos da visão de todas as gerações. Parcelamos em até 12x sem juros, aceitamos convênios e planos de saúde.',
      'O Santo Inácio está localizado na região norte de Curitiba, próximo ao Santa Cândida, Barreirinha, Cachoeira e Abranches. O bairro possui boa infraestrutura, comércio local, igrejas e áreas verdes. É muito valorizado por famílias que buscam ambiente tranquilo e seguro. A Ótica Gouveia entrega em toda essa região familiar com cuidado.',
      'Família do Santo Inácio, cuide da visão de todos! Agende exame de vista gratuito pelo WhatsApp (41) 99955-0667 e receba os óculos de toda a família em casa. Entrega gratuita no Santo Inácio para compras acima de R$ 250,00. Ótica Gouveia Santo Inácio - fé na qualidade há mais de 40 anos!'
    ],
    characteristics: 'Bairro residencial familiar com forte comunidade',
    nearbyLandmarks: ['Próximo ao Santa Cândida', 'Barreirinha', 'Cachoeira'],
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

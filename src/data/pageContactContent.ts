import { localRoutes } from './siteRoutes';

export interface PageContactContent {
  title: string;
  description: string;
  action: string;
  message: string;
}

const pageContent: Record<string, PageContactContent> = {
  '/': {
    title: 'Óculos e lentes na Ótica Gouveia',
    description: 'Conheça nossas armações e lentes e converse com a equipe sobre modelos, valores e etapas da compra. Nossa loja fica no Umbará, em Curitiba.',
    action: 'Conversar com a Ótica Gouveia',
    message: 'Olá! Vim pelo site da Ótica Gouveia e gostaria de informações sobre óculos e lentes.',
  },
  '/sobre': {
    title: 'Conheça a equipe da Ótica Gouveia',
    description: 'Quer saber mais sobre a loja e nosso atendimento? Tire suas dúvidas com a equipe e planeje uma visita ao endereço no Umbará.',
    action: 'Falar com a equipe da loja',
    message: 'Olá! Li sobre a Ótica Gouveia e gostaria de conhecer melhor a loja e o atendimento.',
  },
  '/produtos': {
    title: 'Gostou de um modelo do catálogo?',
    description: 'Consulte os modelos disponíveis, valores e opções de lentes diretamente com a equipe. Confirme os detalhes do produto antes de visitar a loja.',
    action: 'Consultar modelos pelo WhatsApp',
    message: 'Olá! Vi o catálogo da Ótica Gouveia e gostaria de consultar modelos e valores.',
  },
  '/servicos': {
    title: 'Converse sobre os cuidados com seus óculos',
    description: 'Consulte a equipe sobre medidas para montagem, ajustes e manutenção. A possibilidade de cada serviço depende da avaliação dos seus óculos na loja.',
    action: 'Consultar os serviços da ótica',
    message: 'Olá! Vi os serviços da Ótica Gouveia e gostaria de esclarecer uma dúvida com a equipe.',
  },
  '/contato': {
    title: 'Fale diretamente com a Ótica Gouveia',
    description: 'Use o WhatsApp ou o telefone para consultar produtos e combinar sua visita. Confira abaixo o endereço da nossa loja no Umbará.',
    action: 'Iniciar conversa no WhatsApp',
    message: 'Olá! Encontrei o contato da Ótica Gouveia no site e gostaria de falar com a equipe.',
  },
  '/faq': {
    title: 'Ainda tem dúvidas sobre a compra dos seus óculos?',
    description: 'A equipe pode esclarecer dúvidas sobre produtos e atendimento na loja. Para avaliação da saúde dos olhos e prescrição, consulte um oftalmologista.',
    action: 'Tirar dúvidas com a ótica',
    message: 'Olá! Consultei as perguntas frequentes da Ótica Gouveia e tenho uma dúvida sobre produtos ou atendimento.',
  },
  '/mapa-do-site': {
    title: 'Encontre a informação e fale com a loja',
    description: 'As páginas de bairros e cidades ajudam a planejar sua visita. O atendimento presencial da Ótica Gouveia acontece no endereço do Umbará, em Curitiba.',
    action: 'Pedir informações à equipe',
    message: 'Olá! Estou consultando as páginas da Ótica Gouveia e gostaria de informações para visitar a loja no Umbará.',
  },
  '/blog/oculos-ou-lentes': {
    title: 'Converse sobre óculos e lentes antes de comprar',
    description: 'Depois da orientação do profissional que acompanha sua visão, consulte a ótica sobre produtos e valores. O conteúdo do site não substitui avaliação nem prescrição.',
    action: 'Consultar produtos com a equipe',
    message: 'Olá! Li o artigo sobre óculos e lentes no site da Ótica Gouveia e gostaria de consultar os produtos da loja.',
  },
  '/conserto-oculos-sitio-cercado': {
    title: 'Consulte a avaliação dos seus óculos',
    description: 'Mora no Sítio Cercado e precisa de ajuste ou manutenção? Converse sobre a avaliação na loja do Umbará. A equipe confirma a possibilidade do serviço, o valor e o prazo.',
    action: 'Consultar ajuste ou manutenção',
    message: 'Olá! Vi a página sobre conserto de óculos e gostaria de consultar uma avaliação na loja do Umbará.',
  },
  '/otica-terminal-sitio-cercado': {
    title: 'Do Terminal Sítio Cercado à loja no Umbará',
    description: 'Planeje seu deslocamento até a Rua Nicola Pellanda, 1286. Antes de sair, consulte a equipe sobre o produto que procura e as etapas do atendimento.',
    action: 'Planejar minha visita à loja',
    message: 'Olá! Vi a página sobre o Terminal Sítio Cercado e gostaria de planejar uma visita à Ótica Gouveia no Umbará.',
  },
  '/otica-barata-curitiba': {
    title: 'Consulte um orçamento para seus óculos',
    description: 'Compare opções de armações e lentes e peça os detalhes do orçamento. Valores, disponibilidade e condições de pagamento são confirmados diretamente com a equipe.',
    action: 'Consultar um orçamento',
    message: 'Olá! Gostaria de consultar opções e um orçamento de óculos na Ótica Gouveia.',
  },
  '/entregas-sitio-cercado-curitiba': {
    title: 'Confirme as opções de compra e retirada',
    description: 'Converse com a equipe sobre seu produto e as etapas presenciais na loja do Umbará. Confirme as opções disponíveis antes de combinar retirada ou entrega.',
    action: 'Consultar compra e retirada',
    message: 'Olá! Vi a página sobre compra e retirada e gostaria de confirmar as opções disponíveis na Ótica Gouveia.',
  },
};

const regionByPath = new Map(
  localRoutes.map(({ path, label }) => [path, label.replace(/^Ótica /, '')])
);
regionByPath.set('/oticas-no-centro-de-curitiba', 'Centro de Curitiba');
regionByPath.set('/otica-pinheirinho', 'Pinheirinho');
regionByPath.set('/otica-pinheirinho-bairro', 'Pinheirinho');
regionByPath.set('/loja-de-oculos-no-pinheirinho/15565', 'Pinheirinho');

export function getPageContactContent(pathname: string): PageContactContent {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (pageContent[path]) return pageContent[path];

  const region = regionByPath.get(path);
  if (region) {
    if (region === 'Umbará') {
      return {
        title: 'Visite a Ótica Gouveia no Umbará',
        description: 'Nossa loja fica na Rua Nicola Pellanda, 1286. Consulte armações, lentes e valores com a equipe e combine os detalhes da sua visita.',
        action: 'Falar com a loja no Umbará',
        message: 'Olá! Vi a página da Ótica Gouveia no Umbará e gostaria de planejar uma visita.',
      };
    }
    return {
      title: `De ${region} à Ótica Gouveia no Umbará`,
      description: `Está em ${region}? Consulte produtos e planeje sua visita à nossa loja no Umbará, em Curitiba. Esta página orienta seu deslocamento e não representa uma filial em ${region}.`,
      action: 'Consultar produtos e planejar a visita',
      message: `Olá! Vi a página de ${region} no site da Ótica Gouveia e gostaria de informações sobre produtos e a visita à loja no Umbará.`,
    };
  }

  return {
    title: 'Precisa de ajuda para encontrar uma informação?',
    description: 'Converse com a Ótica Gouveia para consultar produtos, atendimento e o endereço da loja no Umbará. A equipe pode ajudar a orientar sua visita.',
    action: 'Pedir ajuda à Ótica Gouveia',
    message: 'Olá! Gostaria de ajuda para encontrar uma informação no site da Ótica Gouveia.',
  };
}

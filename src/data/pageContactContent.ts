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
    description: 'Se prefere escolher com calma, conte à equipe como usa seus óculos no dia a dia. Você pode começar por telefone e anotar o endereço da loja, Rua Nicola Pellanda, 1286, antes de sair.',
    action: 'Conversar com a Ótica Gouveia',
    message: 'Olá! Vim pelo site da Ótica Gouveia e gostaria de informações sobre óculos e lentes.',
  },
  '/sobre': {
    title: 'Conheça a equipe da Ótica Gouveia',
    description: 'Na visita à loja, reserve tempo para provar armações e comparar o conforto. Se preferir, venha com alguém de sua confiança para ajudar a lembrar as opções e os valores.',
    action: 'Falar com a equipe da loja',
    message: 'Olá! Li sobre a Ótica Gouveia e gostaria de conhecer melhor a loja e o atendimento.',
  },
  '/produtos': {
    title: 'Gostou de um modelo do catálogo?',
    description: 'Anote ou fotografe o nome da armação que gostou. Antes de sair, pergunte se está disponível para provar e compare o apoio no nariz, o encaixe atrás das orelhas e a facilidade de colocar e retirar.',
    action: 'Consultar modelos pelo WhatsApp',
    message: 'Olá! Vi o catálogo da Ótica Gouveia e gostaria de consultar modelos e valores.',
  },
  '/servicos': {
    title: 'Converse sobre os cuidados com seus óculos',
    description: 'Se os óculos escorregam ou apertam, leve o par à loja e diga onde sente incômodo. Pergunte se a armação pode ser ajustada e peça o valor antes de autorizar o serviço.',
    action: 'Consultar os serviços da ótica',
    message: 'Olá! Vi os serviços da Ótica Gouveia e gostaria de esclarecer uma dúvida com a equipe.',
  },
  '/contato': {
    title: 'Fale diretamente com a Ótica Gouveia',
    description: 'Não precisa usar WhatsApp: toque no telefone abaixo para ligar. Tenha papel à mão para anotar o endereço, o horário e o que levar no dia da visita.',
    action: 'Iniciar conversa no WhatsApp',
    message: 'Olá! Encontrei o contato da Ótica Gouveia no site e gostaria de falar com a equipe.',
  },
  '/faq': {
    title: 'Ainda tem dúvidas sobre a compra dos seus óculos?',
    description: 'Anote as dúvidas antes de falar com a equipe, como o valor total, o que está incluído e a previsão de retirada. Para avaliação da saúde dos olhos e prescrição, consulte um oftalmologista.',
    action: 'Tirar dúvidas com a ótica',
    message: 'Olá! Consultei as perguntas frequentes da Ótica Gouveia e tenho uma dúvida sobre produtos ou atendimento.',
  },
  '/mapa-do-site': {
    title: 'Encontre a informação e fale com a loja',
    description: 'As páginas de bairros e cidades ajudam a planejar sua visita. O atendimento presencial da Ótica Gouveia acontece na Rua Nicola Pellanda, 1286, Curitiba.',
    action: 'Pedir informações à equipe',
    message: 'Olá! Estou consultando as páginas da Ótica Gouveia e gostaria de informações para visitar a loja no Umbará.',
  },
  '/blog/oculos-ou-lentes': {
    title: 'Converse sobre óculos e lentes antes de comprar',
    description: 'Se colocar ou retirar lentes de contato for difícil, conte isso ao profissional que acompanha sua visão. Leve sua receita e o par de óculos que já usa quando for comparar opções na ótica. Este artigo não substitui avaliação nem prescrição.',
    action: 'Consultar produtos com a equipe',
    message: 'Olá! Li o artigo sobre óculos e lentes no site da Ótica Gouveia e gostaria de consultar os produtos da loja.',
  },
  '/conserto-oculos-sitio-cercado': {
    title: 'Consulte a avaliação dos seus óculos',
    description: 'Mora no Sítio Cercado e precisa de ajuste ou manutenção? Converse sobre a avaliação na Rua Nicola Pellanda, 1286. A equipe confirma a possibilidade do serviço, o valor e o prazo.',
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
      description: `Saindo de ${region}, confirme por telefone o horário e se vale levar sua receita ou os óculos atuais. O atendimento é na loja do Umbará, em Curitiba; esta página não representa uma filial em ${region}.`,
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

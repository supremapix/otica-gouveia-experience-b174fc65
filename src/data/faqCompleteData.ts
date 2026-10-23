export interface FAQItem { question: string; answer: string; }
export interface FAQBlock { id: string; title: string; icon: string; count: number; items: FAQItem[]; }
export const faqBlocks: FAQBlock[] = [
  {
    "id": "exame",
    "title": "Consulta e receita",
    "icon": "eye",
    "count": 2,
    "items": [
      {
        "question": "A medição na ótica é um exame de vista?",
        "answer": "Não. As medidas para montagem das lentes não substituem a avaliação da saúde ocular. Procure um oftalmologista para avaliação e prescrição."
      },
      {
        "question": "Devo atualizar minha receita?",
        "answer": "Leve sua receita mais recente. A necessidade de uma nova consulta e a frequência do acompanhamento devem ser definidas pelo profissional de saúde."
      }
    ]
  },
  {
    "id": "grau",
    "title": "Óculos com grau",
    "icon": "glasses",
    "count": 2,
    "items": [
      {
        "question": "O que levar à loja?",
        "answer": "Traga a receita e os óculos que já usa. Informe as atividades em que pretende usar o novo par, como leitura ou trabalho."
      },
      {
        "question": "Posso escolher uma armação antes das lentes?",
        "answer": "Você pode conhecer os modelos do catálogo. A equipe precisa avaliar a compatibilidade entre armação, receita e lentes antes de confirmar o pedido."
      }
    ]
  },
  {
    "id": "solar",
    "title": "Óculos de sol",
    "icon": "sun",
    "count": 2,
    "items": [
      {
        "question": "Como consultar um modelo solar?",
        "answer": "Escolha o produto no catálogo e use o botão de WhatsApp para consultar estoque, medidas e características. As fotos mostram os produtos do catálogo, mas não garantem disponibilidade imediata."
      },
      {
        "question": "Há óculos de sol com grau?",
        "answer": "Consulte a equipe com sua receita para verificar opções e compatibilidade com a armação escolhida."
      }
    ]
  },
  {
    "id": "contato-lente",
    "title": "Lentes de contato",
    "icon": "contact",
    "count": 2,
    "items": [
      {
        "question": "Posso escolher lentes de contato por conta própria?",
        "answer": "A escolha e a adaptação precisam de orientação profissional individual. Não converta o grau dos óculos por conta própria."
      },
      {
        "question": "Como cuidar das lentes de contato?",
        "answer": "Siga as orientações do profissional que acompanha você e as instruções do fabricante para o modelo prescrito. Não altere o tempo de uso por conta própria."
      }
    ]
  },
  {
    "id": "idosos",
    "title": "Para pessoas idosas",
    "icon": "heart",
    "count": 2,
    "items": [
      {
        "question": "Como aumentar o texto do site?",
        "answer": "No rodapé, use Ampliar texto para aumentar em etapas até 200%. Restaurar texto retorna ao tamanho inicial. O zoom do navegador continua disponível."
      },
      {
        "question": "Como preparar a visita?",
        "answer": "Traga sua receita, os óculos atuais e suas dúvidas. Se preferir, venha acompanhado de alguém de sua confiança para ajudar a comparar os modelos."
      }
    ]
  },
  {
    "id": "criancas",
    "title": "Crianças e família",
    "icon": "baby",
    "count": 2,
    "items": [
      {
        "question": "Há modelos infantis no catálogo?",
        "answer": "Sim. Use o filtro Infantil na página Produtos para conhecer os modelos cadastrados. Confirme disponibilidade com a loja."
      },
      {
        "question": "Quem avalia se uma criança precisa de óculos?",
        "answer": "Essa avaliação cabe ao profissional de saúde. A loja orienta a escolha da armação e das lentes conforme a receita apresentada."
      }
    ]
  },
  {
    "id": "lentes",
    "title": "Opções de lentes",
    "icon": "lens",
    "count": 2,
    "items": [
      {
        "question": "Como escolher lentes para meu uso?",
        "answer": "Apresente sua receita e explique as atividades do dia a dia. Peça uma comparação de materiais, tratamentos, preços e condições, sem alterar a prescrição."
      },
      {
        "question": "O que são medições para montagem?",
        "answer": "São medidas usadas para posicionar as lentes na armação escolhida. Não são diagnóstico nem substituem a consulta oftalmológica."
      }
    ]
  },
  {
    "id": "acessorios",
    "title": "Acessórios e manutenção",
    "icon": "wrench",
    "count": 2,
    "items": [
      {
        "question": "Posso pedir avaliação de um conserto?",
        "answer": "Entre em contato e descreva o problema. A possibilidade de reparo depende da peça, do material e do estado da armação; precisa de avaliação antes de um orçamento."
      },
      {
        "question": "Como guardar meus óculos?",
        "answer": "Use um estojo adequado e siga as instruções de conservação do fabricante. Evite apoiar as lentes diretamente sobre superfícies."
      }
    ]
  },
  {
    "id": "precos",
    "title": "Preços e pagamento",
    "icon": "wallet",
    "count": 2,
    "items": [
      {
        "question": "Onde vejo os preços?",
        "answer": "O catálogo oferece consulta à equipe. O valor depende do modelo, das lentes e dos tratamentos escolhidos. Peça orçamento antes de confirmar a compra."
      },
      {
        "question": "Qual o prazo e a forma de pagamento?",
        "answer": "Confirme condições, prazo de fabricação e forma de retirada diretamente com a equipe para o seu pedido. O site não garante prazo, parcelamento ou frete."
      }
    ]
  },
  {
    "id": "lojas",
    "title": "Nossa loja no Umbará",
    "icon": "store",
    "count": 2,
    "items": [
      {
        "question": "Qual é o endereço da Ótica Gouveia?",
        "answer": "Rua Nicola Pellanda, 1286, Umbará, Curitiba, Paraná. Telefone (41) 3114-0663 e WhatsApp (41) 99161-0663."
      },
      {
        "question": "As páginas de bairros representam filiais?",
        "answer": "Não. Elas orientam moradores de Curitiba e de outras cidades a visitar a loja no Umbará. Confirme o trajeto e as etapas presenciais antes de sair."
      }
    ]
  },
  {
    "id": "cuidados",
    "title": "Cuidados com a visão",
    "icon": "shield",
    "count": 2,
    "items": [
      {
        "question": "Posso usar colírios sem orientação?",
        "answer": "Evite automedicação. O Ministério da Saúde orienta cuidado com o uso de colírios e avaliação médica diante de alterações na visão."
      },
      {
        "question": "Onde encontrar informação oficial sobre saúde ocular?",
        "answer": "Consulte o Ministério da Saúde em https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/doencas-oculares. As orientações deste site são gerais e não substituem atendimento individual."
      }
    ]
  }
];
export const blogArticles: {title:string;category:string;date:string;summary:string}[] = [];
export const getTotalQuestions = () => faqBlocks.reduce((sum,b)=>sum+b.items.length,0);

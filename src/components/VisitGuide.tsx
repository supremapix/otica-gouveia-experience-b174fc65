import { Link } from 'react-router-dom';
import { localRoutes } from '@/data/siteRoutes';
const nearby = ['umbara', 'pinheirinho', 'sitio-cercado', 'xaxim', 'capao-raso', 'novo-mundo', 'tatuquara', 'ganchinho'];
const localVisitTips: Record<string, string> = {
  "Santa Felicidade": "Para escolher seus óculos com calma, escreva duas ou três situações do dia a dia em que você mais os usa: ler etiquetas, acompanhar a televisão ou sair para caminhar. Leve a anotação junto com a receita e os óculos atuais. Na loja, peça para experimentar a armação sentado e conte onde o par antigo incomoda ou escorrega.",
  "Bairro Alto": "Se for outra pessoa quem vai ajudar a retirar os óculos, anote o nome de quem fez o pedido e ligue antes para saber o que levar. Na entrega, guarde o telefone da ótica junto do estojo. Se a armação ficar frouxa ou apertar atrás das orelhas, descreva onde ela incomoda e pergunte como combinar um ajuste.",
  "Cajuru": "Se você usa um par para leitura e outro para sair, leve os dois identificados no estojo. Conte quais tarefas faz com cada um, como ler contas, ver a TV ou caminhar. Assim fica mais fácil explicar o que você quer manter ou mudar nos óculos novos.",
  "Portão": "Se a armação aperta atrás das orelhas, experimente com calma e indique o ponto exato do incômodo. Quem usa aparelho auditivo pode levá-lo no dia para experimentar os óculos juntos e verificar se as hastes ficam confortáveis.",
  "Capão Raso": "Se um familiar puder acompanhar a visita, combine antes quais dúvidas vocês querem esclarecer. Na hora de comparar propostas, peça os valores da armação e das lentes separados e anote o que está incluído em cada opção.",
  "Novo Mundo": "Se os óculos escorregam quando você lê no celular ou abaixa a cabeça, mostre como isso acontece com o par atual. Antes de escolher outra armação, experimente sentar, movimentar a cabeça e olhar para baixo para perceber diferenças de apoio.",
  "Tatuquara": "Antes de sair do Tatuquara, confirme por telefone a unidade, o horário e o que levar. Se você prefere evitar uma segunda viagem só para buscar os óculos, pergunte já no orçamento como funciona a retirada e quais são as condições de entrega para o seu endereço.",
  "Campo Comprido": "Para quem alterna entre artesanato, leitura e televisão, vale anotar a distância em que costuma usar os óculos. Se o problema aparece em uma tarefa específica, como enxergar os detalhes de uma costura, leve um exemplo do material para explicar a dificuldade no atendimento."
};
const localVisitTipHeadings: Record<string, string> = {
  "Cajuru": "Separe os óculos que você usa",
  "Portão": "Experimente a armação com seu aparelho auditivo",
  "Capão Raso": "Compare as propostas com calma",
  "Novo Mundo": "Mostre onde os óculos escorregam",
  "Tatuquara": "Combine como buscar ou receber os óculos",
  "Campo Comprido": "Explique em que tarefas usa seus óculos"
};
export default function VisitGuide({ name, city = false }: { name?: string; city?: boolean }) {
  const origin = name ? `${name}, ${city ? 'PR' : 'Curitiba, PR'}` : '';
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Ótica Gouveia, Rua Nicola Pellanda, 1286, Curitiba, PR')}${origin ? `&origin=${encodeURIComponent(origin)}` : ''}`;
  return <section className="visit-guide" aria-labelledby="visit-title">
    <div className="visit-heading"><span>UMA LOJA NO UMBARÁ</span>
      <h2 id="visit-title">{name ? `Sua visita saindo de ${name}` : 'Perto da sua rotina, no sul de Curitiba'}</h2>
      <p>Rua Nicola Pellanda, 1286 — Umbará, Curitiba. As páginas de bairros e cidades orientam quem vem até este endereço; não representam filiais.</p>
    </div>
    <div className="visit-cards">
      <article><h3>Planeje o deslocamento</h3><p>{city ? 'Antes de sair de outra cidade, confirme os horários, a disponibilidade do modelo e as etapas presenciais. Isso ajuda a evitar uma viagem sem o produto desejado.' : 'Confira o trajeto a partir do seu ponto de partida. O tempo varia com o trânsito, o transporte escolhido e a localização dentro do bairro.'}</p><a href={directions} target="_blank" rel="noopener noreferrer">{name ? `Consultar trajeto de ${name}` : 'Como chegar à loja'} ↗</a></article>
      <article><h3>O que levar</h3><p>Para óculos de grau, traga sua receita e os óculos que já usa. Converse sobre leitura, trabalho e outras atividades para avaliar armações e opções compatíveis com a receita.</p><Link to="/produtos">Ver o catálogo original →</Link></article>
      <article><h3>Combine antes de visitar</h3><p>Confirme estoque, valores, condições de pagamento e prazo diretamente com a equipe. Medições para montagem dos óculos não substituem uma consulta oftalmológica.</p><a href="https://wa.me/5541991610663" target="_blank" rel="noopener noreferrer">WhatsApp (41) 99161-0663 ↗</a></article>
    </div>
    {name && localVisitTips[name] && <div className="visit-region"><h3>{localVisitTipHeadings[name] || (name === "Bairro Alto" ? "Organize a retirada dos óculos" : "Escolha os óculos com calma")}</h3><p>{localVisitTips[name]}</p></div>}
    <div className="visit-region"><h3>Entorno da loja e demais regiões</h3><p>O foco local é o entorno de aproximadamente 10 km do endereço da loja. Esse raio é uma referência de proximidade, não uma promessa de entrega nem a distância de cada bairro inteiro.</p>
      <nav aria-label="Regiões próximas" className="flex flex-wrap gap-3">{localRoutes.filter(r=>nearby.some(n=>r.path.endsWith(n))).map(r=><Link key={r.path} to={r.path}>{r.label.replace(/^Ótica /, '')}</Link>)}<Link to="/mapa-do-site">Todas as regiões e páginas →</Link></nav>
    </div>
  </section>;
}

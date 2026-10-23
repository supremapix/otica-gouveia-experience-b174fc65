import { Link } from 'react-router-dom';
import { localRoutes } from '@/data/siteRoutes';
const nearby = ['umbara', 'pinheirinho', 'sitio-cercado', 'xaxim', 'capao-raso', 'novo-mundo', 'tatuquara', 'ganchinho'];
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
    <div className="visit-region"><h3>Entorno da loja e demais regiões</h3><p>O foco local é o entorno de aproximadamente 10 km do endereço da loja. Esse raio é uma referência de proximidade, não uma promessa de entrega nem a distância de cada bairro inteiro.</p>
      <nav aria-label="Regiões próximas" className="flex flex-wrap gap-3">{localRoutes.filter(r=>nearby.some(n=>r.path.endsWith(n))).map(r=><Link key={r.path} to={r.path}>{r.label.replace(/^Ótica /, '')}</Link>)}<Link to="/mapa-do-site">Todas as regiões e páginas →</Link></nav>
    </div>
  </section>;
}

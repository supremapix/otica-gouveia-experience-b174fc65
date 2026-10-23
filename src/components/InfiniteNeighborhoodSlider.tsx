import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { localRoutes } from '../data/siteRoutes';
export default function InfiniteNeighborhoodSlider() {
  const [query,setQuery]=useState('');
  const normalize=(text:string)=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const results=useMemo(()=>localRoutes.filter(r=>normalize(r.label).includes(normalize(query))),[query]);
  return <section className="visit-guide" aria-labelledby="region-search"><div className="visit-heading"><span>CURITIBA E OUTRAS CIDADES</span><h2 id="region-search">Encontre sua região</h2><p>Consulte as páginas existentes para planejar sua visita à loja no Umbará. Não há indicação de filial ou entrega garantida em cada região.</p></div><label htmlFor="region-query" className="block font-bold mb-2">Bairro ou cidade</label><input id="region-query" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Ex.: Xaxim ou Araucária" className="w-full max-w-xl border border-gray-400 rounded-lg p-3 text-base"/><p role="status" className="mt-3">{results.length} regiões encontradas</p><details open={query.length>0 ? true : undefined}><summary className="cursor-pointer py-3 font-semibold">Ver regiões e abrir o guia de visita</summary><nav aria-label="Todas as regiões" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6">{results.map(r=><Link key={r.path} to={r.path}>{r.label.replace(/^Ótica /,'')}</Link>)}</nav></details></section>;
}

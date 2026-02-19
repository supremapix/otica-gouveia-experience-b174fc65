import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BackToTop from '../components/BackToTop';

const WHATSAPP_BASE = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Tenho%20interesse%20no%20produto%20";

const products = [
  { id: 1, name: 'Ray-Ban Aviator', category: 'masculino', image: '/lovable-uploads/354f71c7-bae6-44ac-ac04-89d830bbdff7.png', desc: 'Clássico e atemporal, o modelo Aviator da Ray-Ban é ideal para quem busca elegância e estilo.' },
  { id: 2, name: 'Ana Hickmann Collection', category: 'feminino', image: '/lovable-uploads/d3ddb8a3-b37c-478e-a768-7517a36330e5.png', desc: 'Armações femininas com design moderno e sofisticado assinadas por Ana Hickmann.' },
  { id: 3, name: 'Disney Pixar Kids', category: 'infantil', image: '/lovable-uploads/93936557-38ff-45d9-9298-fca9a24ce61d.png', desc: 'Armações coloridas e divertidas com personagens da Disney e Pixar para as crianças.' },
  { id: 4, name: 'Victor Hugo Collection', category: 'feminino', image: '/lovable-uploads/59e66895-c23e-4752-8a7e-1c31102148cf.png', desc: 'Elegância e sofisticação em cada detalhe das armações Victor Hugo.' },
  { id: 5, name: 'Sabrina Sato Eyewear', category: 'feminino', image: '/lovable-uploads/cb5792fa-09cd-48d9-96ee-80bd8e1a29ee.png', desc: 'Modelos modernos e cheios de personalidade da linha Sabrina Sato.' },
  { id: 6, name: 'Lentes Varilux Liberty', category: 'lentes', image: '/lovable-uploads/4b85711f-9660-415d-a4fa-cd7f50e747ec.png', desc: 'Lentes multifocais de alta qualidade para visão de perto e longe com máximo conforto.' },
  { id: 7, name: 'Ray-Ban Hexagonal', category: 'masculino', image: '/lovable-uploads/1989c2bf-cbd0-4081-8776-f6c0e985a404.png', desc: 'Design hexagonal único com armação metálica dourada e lentes escuras.' },
  { id: 8, name: 'Ray-Ban Round Double Bridge', category: 'feminino', image: '/lovable-uploads/1be253aa-66d3-4954-a782-d2e82afe7b50.png', desc: 'Modelo redondo clássico com dupla ponte e lentes degradê marrom.' },
  { id: 9, name: 'Ray-Ban Round Metal', category: 'masculino', image: '/lovable-uploads/313dd361-4d84-445f-9985-e941bb363e87.png', desc: 'O icônico modelo redondo com armação dourada e lentes G-15 Classic em verde escuro.' },
  { id: 10, name: 'Disney Infantil', category: 'infantil', image: '/lovable-uploads/893390c7-51de-4f3a-97ac-9489c25925eb.png', desc: 'Armação infantil em acetato lilás com hastes internas na cor rosa. Super leve e resistente.' },
  { id: 11, name: 'Victor Hugo Duo', category: 'feminino', image: '/lovable-uploads/78fd2b6e-8019-4120-9d13-9550297ccac7.png', desc: 'Conjunto Victor Hugo: óculos de grau + solar com clip magnético tartaruga.' },
  { id: 12, name: 'Óculos Esportivo Máscara', category: 'masculino', image: '/lovable-uploads/35e542ae-f892-4c53-8e2f-db75ce35721e.png', desc: 'Lente única espelhada azul. Ideal para ciclismo, corrida e atividades outdoor. UV400.' },
  { id: 13, name: 'Evoke Retrô Square', category: 'masculino', image: '/lovable-uploads/377f56c0-deef-4820-a648-e38ad0be7f36.png', desc: 'Armação em acetato preto tartaruga, lente marrom degradê. Estilo urbano e moderno.' },
  { id: 14, name: 'Evoke Round Feminino', category: 'feminino', image: '/lovable-uploads/9c6d314e-f050-4664-965f-bbe9ebc6bf8f.png', desc: 'Acetato translúcido âmbar com lente marrom degradê. Formato arredondado e super estiloso.' },
  { id: 15, name: 'HB Switch Clip-On', category: 'feminino', image: '/lovable-uploads/593e7657-b084-4527-afc6-3be7b4cf974c.png', desc: 'Armação de grau com clip solar magnético. 2 em 1: grau e solar no mesmo óculos.' },
  { id: 16, name: 'Ray-Ban Wayfarer', category: 'masculino', image: '/lovable-uploads/otica-gouveia-rayban.webp', desc: 'O modelo mais icônico da Ray-Ban. Estilo atemporal que combina com qualquer look.' },
  { id: 17, name: 'Carolina Herrera', category: 'feminino', image: '/lovable-uploads/otica-gouveia-carolina-herrera.png', desc: 'Sofisticação e elegância da grife Carolina Herrera em armações exclusivas.' },
  { id: 18, name: 'Óculos Esportivos', category: 'masculino', image: '/lovable-uploads/otica-gouveia-esportivos.webp', desc: 'Linha esportiva com proteção UV400, ideal para atividades ao ar livre e prática de esportes.' },
];

const categories = [
  { key: 'all', label: 'Todos' },
  { key: 'masculino', label: '👨 Masculino' },
  { key: 'feminino', label: '👩 Feminino' },
  { key: 'infantil', label: '🧒 Infantil' },
  { key: 'lentes', label: '🔍 Lentes' },
];

const brands = [
  { src: '/lovable-uploads/e1fdf903-0fb7-4358-98e8-8106df0f6d1c.png', alt: 'Ray-Ban' },
  { src: '/lovable-uploads/57d4695c-9e6f-43d1-81bf-653d3e2cf9be.png', alt: 'Ana Hickmann' },
  { src: '/lovable-uploads/010e742a-6f6d-4d89-b93d-c68042fd7bf2.png', alt: 'Victor Hugo' },
  { src: '/lovable-uploads/3cf8a689-5aec-44e9-8da2-6fa72de0c834.png', alt: 'Sabrina Sato' },
  { src: '/lovable-uploads/90da4304-f85c-40df-b3cb-e1e816376757.png', alt: 'Varilux' },
  { src: '/lovable-uploads/179e193c-db7a-4d72-9e5d-83ea7dfa63ac.png', alt: 'Bausch & Lomb' },
];

const ProdutosPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selected, setSelected] = useState<typeof products[0] | null>(null);

  const filtered = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Produtos — Ótica Gouveia Curitiba | Ray-Ban, Oakley, Ana Hickmann"
        description="Catálogo completo de armações e lentes da Ótica Gouveia Curitiba. Ray-Ban, Ana Hickmann, Victor Hugo, lentes Varilux e muito mais. Consulte-nos!"
        keywords="óculos ray-ban curitiba, armações ótica curitiba, lentes varilux curitiba, óculos de grau curitiba, catálogo ótica gouveia"
        canonicalUrl="/produtos"
      />
      <Navbar />

      {/* Hero */}
      <section
        className="pt-32 pb-20 px-4 text-white"
        style={{ background: 'linear-gradient(135deg, hsl(225,100%,13%) 0%, hsl(221,100%,26%) 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4"
            style={{ backgroundColor: 'hsla(48,100%,50%,0.15)', color: 'hsl(48,100%,50%)', border: '1px solid hsla(48,100%,50%,0.3)' }}>
            🕶️ CATÁLOGO
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Nossas <span style={{ color: 'hsl(48,100%,50%)' }}>Coleções</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Mais de 500 modelos em estoque — armações, óculos de sol e lentes das melhores marcas do mundo.
          </p>
        </div>
      </section>

      {/* Filtros + Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Filtros */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className="px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200"
                style={activeCategory === cat.key
                  ? { backgroundColor: 'hsl(221,100%,26%)', color: 'white' }
                  : { backgroundColor: 'hsl(210,40%,96%)', color: 'hsl(221,100%,26%)' }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <div
                key={p.id}
                onClick={() => setSelected(p)}
                className="bg-white rounded-2xl border border-border/50 overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-foreground">{p.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full capitalize"
                      style={{ backgroundColor: 'hsla(221,100%,26%,0.1)', color: 'hsl(221,100%,26%)' }}>
                      {p.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                  <button
                    onClick={(e) => { e.stopPropagation(); window.open(`${WHATSAPP_BASE}${encodeURIComponent(p.name)}.%20Pode%20me%20ajudar?`, '_blank'); }}
                    className="w-full py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105"
                    style={{ backgroundColor: 'hsl(48,100%,50%)', color: 'hsl(225,100%,13%)' }}
                  >
                    💬 Consultar Preço
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section className="py-16 px-4" style={{ backgroundColor: 'hsl(210,40%,98%)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'hsl(221,100%,26%)' }}>PARCEIROS</span>
          <h2 className="text-2xl font-black mt-2 mb-10 text-foreground">Marcas que Trabalhamos</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {brands.map((b, i) => (
              <div key={i} className="flex items-center justify-center h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img src={b.src} alt={b.alt} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-white" style={{ backgroundColor: 'hsl(225,100%,13%)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Não encontrou o que procura?</h2>
          <p className="text-white/70 mb-8">Temos mais de 500 modelos em loja! Fale conosco e encontramos o produto ideal para você.</p>
          <a
            href="https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20N%C3%A3o%20encontrei%20o%20que%20procurava%20no%20site.%20Pode%20me%20ajudar?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105"
            style={{ backgroundColor: 'hsl(48,100%,50%)', color: 'hsl(225,100%,13%)' }}
          >
            💬 Falar com especialista
          </a>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,20,64,0.95)' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="h-72 overflow-hidden">
              <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-black text-foreground mb-2">{selected.name}</h3>
              <span className="text-sm capitalize px-3 py-1 rounded-full mb-4 inline-block"
                style={{ backgroundColor: 'hsla(221,100%,26%,0.1)', color: 'hsl(221,100%,26%)' }}>
                {selected.category}
              </span>
              <p className="text-muted-foreground mt-3 mb-6">{selected.desc}</p>
              <div className="flex gap-3">
                <a
                  href={`${WHATSAPP_BASE}${encodeURIComponent(selected.name)}.%20Pode%20me%20ajudar?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 rounded-full font-bold transition-all hover:scale-105"
                  style={{ backgroundColor: 'hsl(48,100%,50%)', color: 'hsl(225,100%,13%)' }}
                >
                  💬 Consultar Preço
                </a>
                <button
                  onClick={() => setSelected(null)}
                  className="px-6 py-3 rounded-full font-bold border-2 transition-all"
                  style={{ borderColor: 'hsl(221,100%,26%)', color: 'hsl(221,100%,26%)' }}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
};

export default ProdutosPage;

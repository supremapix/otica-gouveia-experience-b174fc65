import { useState, useMemo } from 'react';

const bairros = [
  { name: 'Ahú', dist: '8 km' },
  { name: 'Água Verde', dist: '6 km' },
  { name: 'Alto Boqueirão', dist: '5 km' },
  { name: 'Bacacheri', dist: '12 km' },
  { name: 'Bairro Alto', dist: '14 km' },
  { name: 'Bigorrilho', dist: '9 km' },
  { name: 'Boa Vista', dist: '11 km' },
  { name: 'Boqueirão', dist: '4 km' },
  { name: 'Cabral', dist: '10 km' },
  { name: 'Cajuru', dist: '8 km' },
  { name: 'Campo Comprido', dist: '10 km' },
  { name: 'CIC', dist: '9 km' },
  { name: 'Cidade Industrial', dist: '9 km' },
  { name: 'Fanny', dist: '5 km' },
  { name: 'Fazendinha', dist: '7 km' },
  { name: 'Guaíra', dist: '5 km' },
  { name: 'Hauer', dist: '4 km' },
  { name: 'Jardim Botânico', dist: '7 km' },
  { name: 'Jardim das Américas', dist: '6 km' },
  { name: 'Jardim Social', dist: '9 km' },
  { name: 'Juvevê', dist: '10 km' },
  { name: 'Lindoia', dist: '7 km' },
  { name: 'Mercês', dist: '9 km' },
  { name: 'Novo Mundo', dist: '3 km' },
  { name: 'Orleans', dist: '5 km' },
  { name: 'Parolin', dist: '5 km' },
  { name: 'Pilarzinho', dist: '12 km' },
  { name: 'Pinheirinho', dist: '1 km' },
  { name: 'Portão', dist: '5 km' },
  { name: 'Rebouças', dist: '7 km' },
  { name: 'Santa Felicidade', dist: '14 km' },
  { name: 'Santa Quitéria', dist: '7 km' },
  { name: 'São Braz', dist: '10 km' },
  { name: 'Seminário', dist: '8 km' },
  { name: 'Sítio Cercado', dist: '3 km' },
  { name: 'Tatuquara', dist: '4 km' },
  { name: 'Uberaba', dist: '5 km' },
  { name: 'Umbará', dist: '6 km' },
  { name: 'Vista Alegre', dist: '11 km' },
  { name: 'Xaxim', dist: '3 km' },
];

const NeighborhoodsSection = () => {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const letters = useMemo(() => {
    const set = new Set(bairros.map(b => b.name[0].toUpperCase()));
    return Array.from(set).sort();
  }, []);

  const filtered = activeLetter 
    ? bairros.filter(b => b.name[0].toUpperCase() === activeLetter) 
    : bairros;

  const makeWhatsAppUrl = (bairro: string) =>
    `https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Moro%20no%20${encodeURIComponent(bairro)}%20e%20quero%20um%20or%C3%A7amento`;

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-3">
            Atendemos Sua Região em Curitiba
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: 'hsl(48, 100%, 50%)' }} />
        </div>

        {/* Letter Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveLetter(null)}
            className={`px-3 py-1.5 rounded-md text-sm font-bold transition-all ${
              !activeLetter ? 'text-white' : 'text-foreground bg-muted hover:bg-muted/80'
            }`}
            style={!activeLetter ? { backgroundColor: 'hsl(221, 100%, 19%)' } : {}}
          >
            Todos
          </button>
          {letters.map(l => (
            <button
              key={l}
              onClick={() => setActiveLetter(l === activeLetter ? null : l)}
              className={`w-9 h-9 rounded-md text-sm font-bold transition-all ${
                activeLetter === l ? 'text-white' : 'text-foreground bg-muted hover:bg-muted/80'
              }`}
              style={activeLetter === l ? { backgroundColor: 'hsl(221, 100%, 19%)' } : {}}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((b) => (
            <a
              key={b.name}
              href={makeWhatsAppUrl(b.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ '--tw-shadow-color': 'hsla(221, 100%, 19%, 0.15)' } as React.CSSProperties}
            >
              <div className="flex items-center gap-2 mb-1">
                <span style={{ color: 'hsl(48, 100%, 50%)' }}>📍</span>
                <span className="font-bold text-foreground group-hover:text-primary transition-colors text-sm">
                  {b.name}
                </span>
              </div>
              <span className="text-muted-foreground text-xs">~{b.dist} da loja</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodsSection;

import { useState } from 'react';

const tabs = [
  {
    id: 'grau',
    icon: '👓',
    label: 'Óculos de Grau',
    title: '5 Passos Para Escolher o Óculos de Grau Ideal',
    items: [
      { title: 'OBTENHA SUA RECEITA ATUALIZADA', text: 'Consulte um oftalmologista para obter sua receita médica. Ela é o ponto de partida para lentes perfeitas. Recomendamos exame a cada 1-2 anos.' },
      { title: 'ESCOLHA A ARMAÇÃO CERTA PARA SEU ROSTO', text: 'Rosto oval: qualquer formato funciona ✓ | Rosto redondo: prefira armações retangulares | Rosto quadrado: aposte em redondas ou ovais | Rosto coração: armações com base mais larga equilibram.' },
      { title: 'ENTENDA SUA RECEITA', text: 'O grau é dividido em: Esférico (miopia ou hipermetropia), Cilíndrico (astigmatismo) e Eixo. Quanto maior o número, maior o grau de correção.' },
      { title: 'ESCOLHA O TIPO DE LENTE', text: 'Monofocal: para quem tem apenas um grau | Multifocal/Progressiva: para perto e longe | Anti-reflexo: essencial para telas e direção noturna | Fotossensível (Transitions): escurece no sol.' },
      { title: 'MEDIÇÃO PRECISA COM VISIOFFICE 3', text: 'Aqui na Ótica Gouveia, usamos o Visioffice 3 da Essilor para medir com precisão milimétrica todos os parâmetros do seu rosto. Resultado: lentes perfeitamente centradas e conforto visual imediato.' },
    ],
  },
  {
    id: 'sol',
    icon: '🕶️',
    label: 'Óculos de Sol',
    title: 'Óculos de Sol — Proteção e Estilo',
    items: [
      { title: 'FILTRO UV É ESSENCIAL', text: 'A cor das lentes não determina a proteção UV. Sempre verifique se suas lentes possuem filtro UV400 para bloquear 100% dos raios ultravioleta.' },
      { title: 'FORMATO IDEAL PARA SEU ROSTO', text: 'Escolha formatos que contrastem com a forma do seu rosto. Rostos redondos ficam ótimos com formatos angulares, e vice-versa.' },
      { title: 'POLARIZADAS VS. COMUNS', text: 'Lentes polarizadas reduzem reflexos de superfícies como água e asfalto. Ideais para dirigir e praticar esportes ao ar livre.' },
      { title: 'CUIDADOS PARA DURABILIDADE', text: 'Sempre guarde seus óculos no estojo. Limpe com pano de microfibra e solução própria. Evite apoiar as lentes para baixo.' },
    ],
  },
  {
    id: 'adaptacao',
    icon: '🔄',
    label: 'Adaptação',
    title: 'Adaptação às Novas Lentes',
    items: [
      { title: 'TONTURA NOS PRIMEIROS DIAS', text: 'É completamente normal sentir leve tontura ou desconforto visual nos primeiros 7-14 dias. Seu cérebro está se adaptando à nova correção.' },
      { title: 'LENTES PROGRESSIVAS', text: 'Os primeiros dias podem ser desafiadores. Mova a cabeça em vez dos olhos para buscar foco. A adaptação completa leva de 2 a 4 semanas.' },
      { title: 'QUANDO VOLTAR À ÓTICA', text: 'Se após 2 semanas ainda sentir desconforto, dores de cabeça ou visão embaçada, volte à ótica para verificação. Pode ser necessário ajuste.' },
      { title: 'DICAS PARA ACELERAR', text: 'Use os óculos o máximo possível desde o primeiro dia. Evite alternar com óculos antigos. O uso contínuo acelera a adaptação.' },
    ],
  },
  {
    id: 'cuidados',
    icon: '🧹',
    label: 'Cuidados',
    title: 'Cuidados com Seus Óculos',
    items: [
      { title: 'COMO LIMPAR CORRETAMENTE', text: 'Use água corrente morna e detergente neutro. Seque com pano de microfibra. Nunca use papel toalha, camiseta ou lenço de papel — eles riscam as lentes.' },
      { title: 'ONDE GUARDAR', text: 'Sempre no estojo rígido quando não estiver usando. Apoie os óculos com as hastes para baixo, nunca com as lentes viradas para a superfície.' },
      { title: 'AJUSTE DE ARMAÇÃO', text: 'Se sentir que os óculos estão frouxos, tortos ou apertando, visite a ótica para ajuste gratuito. Armações desalinhadas comprometem a visão.' },
      { title: 'VALIDADE DAS LENTES', text: 'Lentes com tratamento anti-reflexo duram em média 2 anos. Riscos, manchas ou descascamento são sinais de que é hora de trocar.' },
    ],
  },
];

const TipsSection = () => {
  const [activeTab, setActiveTab] = useState('grau');
  const currentTab = tabs.find(t => t.id === activeTab)!;

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-3">
            Guia Visual — Dicas de Especialistas
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: 'hsl(48, 100%, 50%)' }} />
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-pill font-bold text-sm transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'text-white shadow-lg' 
                  : 'bg-card text-foreground hover:bg-card/80 border border-border'
              }`}
              style={activeTab === tab.id ? { backgroundColor: 'hsl(221, 100%, 19%)' } : {}}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-6">{currentTab.title}</h3>
          <div className="space-y-4">
            {currentTab.items.map((item, i) => (
              <div 
                key={i} 
                className="bg-card rounded-xl p-5 border-l-4 shadow-sm"
                style={{ borderLeftColor: 'hsl(48, 100%, 50%)' }}
              >
                <h4 className="font-bold text-foreground mb-2 text-base">
                  {i + 1}. {item.title}
                </h4>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsSection;

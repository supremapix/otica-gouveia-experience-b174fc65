import { useState } from 'react';
import { Glasses, Sun, RefreshCw, Sparkles, type LucideIcon } from 'lucide-react';

type Tab = {
  id: string;
  Icon: LucideIcon;
  label: string;
  title: string;
  items: { title: string; text: string }[];
};

const tabs: Tab[] = [
  {
    id: 'grau',
    Icon: Glasses,
    label: 'Óculos de Grau',
    title: '5 Passos Para Escolher o Óculos de Grau Ideal',
    items: [
      { title: 'OBTENHA SUA RECEITA ATUALIZADA', text: 'Consulte um oftalmologista para obter sua receita médica. Ela é o ponto de partida para lentes perfeitas. Recomendamos exame a cada 1-2 anos.' },
      { title: 'ESCOLHA A ARMAÇÃO CERTA PARA SEU ROSTO', text: 'Rosto oval: qualquer formato funciona. Rosto redondo: prefira armações retangulares. Rosto quadrado: aposte em redondas ou ovais. Rosto coração: armações com base mais larga equilibram.' },
      { title: 'ENTENDA SUA RECEITA', text: 'O grau é dividido em: Esférico (miopia ou hipermetropia), Cilíndrico (astigmatismo) e Eixo. Quanto maior o número, maior o grau de correção.' },
      { title: 'ESCOLHA O TIPO DE LENTE', text: 'Monofocal: para quem tem apenas um grau. Multifocal/Progressiva: para perto e longe. Anti-reflexo: essencial para telas e direção noturna. Fotossensível (Transitions): escurece no sol.' },
      { title: 'MEDIÇÃO PRECISA COM VISIOFFICE 3', text: 'Aqui na Ótica Gouveia, usamos o Visioffice 3 da Essilor para medir com precisão milimétrica todos os parâmetros do seu rosto. Resultado: lentes perfeitamente centradas e conforto visual imediato.' },
    ],
  },
  {
    id: 'sol',
    Icon: Sun,
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
    Icon: RefreshCw,
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
    Icon: Sparkles,
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
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Guia Visual
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
            Dicas de Especialistas
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa saber para cuidar da sua visão com tranquilidade.
          </p>
          <div className="w-16 h-[3px] mx-auto mt-6 rounded-full bg-primary" />
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {tabs.map(({ id, Icon, label }) => {
            const active = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                  active
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card text-foreground hover:bg-card/80 border border-border'
                }`}
                style={{ minHeight: '48px' }}
                aria-pressed={active}
              >
                <Icon className="w-5 h-5" strokeWidth={2} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
            {currentTab.title}
          </h3>
          <div className="grid gap-4 md:gap-5">
            {currentTab.items.map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-5 md:p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-semibold text-foreground mb-2 text-base md:text-lg tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-[15px] md:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsSection;

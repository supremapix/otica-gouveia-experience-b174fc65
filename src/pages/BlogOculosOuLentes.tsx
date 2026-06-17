import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Eye,
  Wallet,
  Droplets,
  Heart,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Glasses,
  Contact,
  ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BackToTop from '../components/BackToTop';

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20%C3%B3culos%20e%20lentes%20de%20contato.%20Pode%20me%20ajudar?";

const comparisonPoints = [
  {
    id: 'visao',
    icon: Eye,
    title: 'Campo de Visão',
    glasses: 'A armação limita levemente a visão periférica, mas as lentes modernas de alta curva ampliam o campo de visão.',
    contacts: 'Correção direta sobre a córnea: visão periférica completa e natural, sem bordas nem distorções laterais.',
  },
  {
    id: 'custo',
    icon: Wallet,
    title: 'Custo e Investimento',
    glasses: 'Investimento inicial maior (armação + lentes), mas duram anos com manutenção simples. Ótimo custo-benefício a longo prazo.',
    contacts: 'Custo inicial menor, mas há gasto recorrente com soluções de limpeza e reposição periódica das lentes.',
  },
  {
    id: 'manutencao',
    icon: Droplets,
    title: 'Manutenção e Cuidados',
    glasses: 'Limpeza rápida com flanela e solução específica. Quase zero trabalho diário. Não há risco de infecção ocular.',
    contacts: 'Requer disciplina: lavar as mãos, usar solução adequada, trocar estojo regularmente. Risco baixo de irritação se descuidado.',
  },
  {
    id: 'conforto',
    icon: Heart,
    title: 'Conforto Visual',
    glasses: 'Peso no rosto e marcas no nariz podem incomodar. Ideais para quem tem olhos secos ou alergias.',
    contacts: 'Liberdade total no rosto. Sensação de nada nos olhos após adaptação. Perfeitas para prática de esportes.',
  },
];

const tableData = [
  { label: 'Correção periférica', glasses: 'Limitada pela armação', contacts: 'Campo completo', winner: 'contacts' },
  { label: 'Custo inicial', glasses: 'Maior', contacts: 'Menor', winner: 'contacts' },
  { label: 'Custo a longo prazo', glasses: 'Baixo', contacts: 'Recorrente', winner: 'glasses' },
  { label: 'Cuidados diários', glasses: 'Mínimos', contacts: 'Moderados', winner: 'glasses' },
  { label: 'Esportes/Atividades', glasses: 'Pode escorregar', contacts: 'Estáveis', winner: 'contacts' },
  { label: 'Risco de infecção', glasses: 'Nenhum', contacts: 'Baixo (se cuidadas)', winner: 'glasses' },
  { label: 'Olhos secos/alergia', glasses: 'Recomendado', contacts: 'Pode piorar', winner: 'glasses' },
  { label: 'Estética', glasses: 'Modelos variados', contacts: 'Rosto livre', winner: 'draw' },
];

const faqItems = [
  {
    question: 'A lente de contato tem o mesmo grau do óculos?',
    answer: 'Na maioria dos casos, não. O grau da lente de contato costuma ser ligeiramente diferente do grau do óculos porque a lente de contato fica diretamente sobre a córnea, enquanto o óculos fica a uma distância do olho (cerca de 12 mm). Esse espaçamento altera a potência necessária. Por isso, é essencial fazer o exame de vista específico para lentes de contato com um optometrista qualificado, como os da Ótica Gouveia.',
  },
  {
    question: 'Posso usar lente de contato e óculos no mesmo dia?',
    answer: 'Sim, muitas pessoas alternam. O ideal é usar lentes de contato durante o dia, especialmente em atividades físicas ou eventos sociais, e óculos de grau em casa, para descansar os olhos. O importante é respeitar o tempo máximo de uso das lentes de contato recomendado pelo profissional.',
  },
  {
    question: 'Qual é mais caro no final das contas?',
    answer: 'Depende do uso. Óculos de grau exigem um investimento inicial maior (armação + lentes), mas duram anos. Lentes de contato têm custo inicial menor, mas geram despesas mensais com soluções de limpeza e reposição. Para quem usa diariamente, os óculos costumam sair mais em conta a longo prazo.',
  },
  {
    question: 'Lente de contato prejudica a saúde dos olhos?',
    answer: 'Quando usadas corretamente, não. O risco aumenta apenas com descuidos: dormir com lentes, não lavar as mãos antes de colocar, usar solução vencida ou estojo sujo. Com os cuidados certos e acompanhamento regular, as lentes de contato são seguras e confortáveis.',
  },
  {
    question: 'Para idosos, o que é mais indicado?',
    answer: 'Geralmente, óculos de grau são mais indicados para a melhor idade. São práticos, não exigem manipulação delicada diária e eliminam o risco de infecção. Além disso, a produção de lágrimas tende a diminuir com a idade, o que pode causar desconforto com lentes de contato. A Ótica Gouveia oferece atendimento especializado para o público 60+, com paciência e consultoria personalizada.',
  },
];

const schemaArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Óculos de Grau ou Lente de Contato: Qual Escolher? Guia Completo",
  "description": "Comparativo completo entre óculos de grau e lentes de contato. Saiba qual é a melhor opção para você em custo, conforto, manutenção e campo de visão.",
  "image": "https://www.gouveiacuritiba.com.br/og-image.webp",
  "author": {
    "@type": "Organization",
    "name": "Ótica Gouveia",
    "url": "https://www.gouveiacuritiba.com.br"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Ótica Gouveia",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.gouveiacuritiba.com.br/lovable-uploads/8a300cb4-5614-40c2-adcb-ea81b6994e40.webp"
    }
  },
  "datePublished": "2025-06-17",
  "dateModified": "2025-06-17",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.gouveiacuritiba.com.br/blog/oculos-ou-lentes"
  }
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

export default function BlogOculosOuLentes() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Óculos de Grau ou Lente de Contato? Guia Completo | Curitiba</title>
        <meta name="description" content="Compare óculos de grau e lentes de contato: custo, conforto, manutenção e campo de visão. Descubra qual é a melhor opção para você na Ótica Gouveia Curitiba." />
        <meta name="keywords" content="óculos de grau, lente de contato, comparativo óculos lente, qual escolher óculos ou lente, custo óculos de grau, manutenção lente de contato" />
        <link rel="canonical" href="https://www.gouveiacuritiba.com.br/blog/oculos-ou-lentes" />
        <meta property="og:title" content="Óculos de Grau ou Lente de Contato? Guia Completo | Curitiba" />
        <meta property="og:description" content="Compare óculos de grau e lentes de contato: custo, conforto, manutenção e campo de visão. Descubra qual é a melhor opção para você na Ótica Gouveia Curitiba." />
        <meta property="og:url" content="https://www.gouveiacuritiba.com.br/blog/oculos-ou-lentes" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-4 text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, hsl(var(--primary-dark)) 0%, hsl(var(--primary)) 100%)' }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 bg-white/10 border border-white/20">
            <Glasses className="w-4 h-4" /> GUIA COMPLETO
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Óculos de Grau ou Lente de Contato:
            <br />
            <span className="text-white/90">Qual Escolher?</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed" style={{ lineHeight: 1.8 }}>
            Compare custo, conforto, manutenção e campo de visão. Descubra a melhor opção para o seu estilo de vida com a orientação da Ótica Gouveia em Curitiba.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-foreground leading-relaxed" style={{ lineHeight: 1.8, fontSize: '18px' }}>
            A dúvida entre usar <strong>óculos de grau</strong> ou <strong>lentes de contato</strong> é comum. Cada opção tem vantagens e desvantagens que variam de acordo com seu orçamento, rotina e saúde ocular. Neste guia completo, a <strong>Ótica Gouveia</strong> ajuda você a entender as diferenças e tomar a melhor decisão para a sua visão.
          </p>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground">Comparativo por Categoria</h2>
            <p className="text-muted-foreground mt-3 text-lg" style={{ lineHeight: 1.8 }}>Veja os prós e contras de cada opção lado a lado.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {comparisonPoints.map((point) => (
              <div
                key={point.id}
                className="bg-white rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{point.title}</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="mt-1.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Glasses className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <span className="font-bold text-foreground text-base block mb-0.5">Óculos de Grau</span>
                      <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '18px', lineHeight: 1.8 }}>{point.glasses}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-1.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Contact className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <span className="font-bold text-foreground text-base block mb-0.5">Lente de Contato</span>
                      <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '18px', lineHeight: 1.8 }}>{point.contacts}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-foreground">Tabela Comparativa</h2>
            <p className="text-muted-foreground mt-3 text-lg" style={{ lineHeight: 1.8 }}>Resumo visual para facilitar sua escolha.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-left" style={{ minWidth: '640px' }}>
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-5 py-4 text-base font-bold">Critério</th>
                  <th className="px-5 py-4 text-base font-bold text-center">
                    <span className="inline-flex items-center gap-1.5">
                      <Glasses className="w-4 h-4" /> Óculos
                    </span>
                  </th>
                  <th className="px-5 py-4 text-base font-bold text-center">
                    <span className="inline-flex items-center gap-1.5">
                      <Contact className="w-4 h-4" /> Lentes
                    </span>
                  </th>
                  <th className="px-5 py-4 text-base font-bold text-center">Vencedor</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-muted/20'}>
                    <td className="px-5 py-4 font-semibold text-foreground text-base">{row.label}</td>
                    <td className="px-5 py-4 text-center text-muted-foreground" style={{ fontSize: '18px' }}>{row.glasses}</td>
                    <td className="px-5 py-4 text-center text-muted-foreground" style={{ fontSize: '18px' }}>{row.contacts}</td>
                    <td className="px-5 py-4 text-center">
                      {row.winner === 'glasses' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold bg-primary/10 text-primary">
                          <Glasses className="w-3.5 h-3.5" /> Óculos
                        </span>
                      )}
                      {row.winner === 'contacts' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold bg-emerald-50 text-emerald-700">
                          <Contact className="w-3.5 h-3.5" /> Lentes
                        </span>
                      )}
                      {row.winner === 'draw' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold bg-muted text-muted-foreground">
                          Empate
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-foreground">Perguntas Frequentes</h2>
            <p className="text-muted-foreground mt-3 text-lg" style={{ lineHeight: 1.8 }}>Tire suas principais dúvidas sobre óculos e lentes de contato.</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-border/50 overflow-hidden transition-shadow hover:shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-lg font-bold text-foreground leading-snug">{item.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-0.5" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Ainda com Dúvidas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed" style={{ lineHeight: 1.8 }}>
            Fale com nossos especialistas da Ótica Gouveia. Atendemos presencialmente no Pinheirinho e ajudamos você a escolher a melhor solução para sua visão, seja óculos de grau ou lente de contato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg text-white"
              style={{ backgroundColor: 'hsl(var(--whatsapp))', minHeight: '56px' }}
            >
              <MessageCircle className="w-5 h-5" /> Conversar no WhatsApp
            </a>
            <a
              href="/faq"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 border-2 border-primary text-primary"
              style={{ minHeight: '56px' }}
            >
              Ver FAQ Completo <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}

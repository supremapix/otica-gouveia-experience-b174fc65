import { useState, useEffect, useMemo, useRef } from 'react';
import { Search, Phone, MessageCircle, ChevronUp, Eye, Glasses, Sun, Contact, Heart, Baby, Wrench, Wallet, Store, Shield, BookOpen, ChevronDown, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BackToTop from '../components/BackToTop';
import SEO from '../components/SEO';
import { faqBlocks, blogArticles, getTotalQuestions } from '../data/faqCompleteData';

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es.%20Pode%20me%20ajudar?";

const iconMap: Record<string, React.ReactNode> = {
  eye: <Eye className="w-7 h-7" />,
  glasses: <Glasses className="w-7 h-7" />,
  sun: <Sun className="w-7 h-7" />,
  contact: <Contact className="w-7 h-7" />,
  heart: <Heart className="w-7 h-7" />,
  baby: <Baby className="w-7 h-7" />,
  lens: <BookOpen className="w-7 h-7" />,
  wrench: <Wrench className="w-7 h-7" />,
  wallet: <Wallet className="w-7 h-7" />,
  store: <Store className="w-7 h-7" />,
  shield: <Shield className="w-7 h-7" />,
};

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [readProgress, setReadProgress] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({ questions: 0, lojas: 0 });
  const searchInputRef = useRef<HTMLInputElement>(null);

  const totalQuestions = useMemo(() => getTotalQuestions(), []);

  // Animate stats on mount
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setAnimatedStats({
        questions: Math.round(progress * totalQuestions),
        lojas: Math.round(progress * 2),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [totalQuestions]);

  // Read progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hash scroll
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveCategory(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }, []);

  const filteredBlocks = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return faqBlocks.map(block => {
      if (activeCategory !== 'all' && block.id !== activeCategory) {
        return { ...block, items: [] };
      }
      if (!term) return block;
      return {
        ...block,
        items: block.items.filter(
          item => item.question.toLowerCase().includes(term) || item.answer.toLowerCase().includes(term)
        ),
      };
    }).filter(block => block.items.length > 0);
  }, [searchTerm, activeCategory]);

  const totalFiltered = filteredBlocks.reduce((sum, b) => sum + b.items.length, 0);

  const toggleItem = (blockId: string, index: number) => {
    const key = `${blockId}-${index}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const categories = [
    { id: 'all', label: 'Todas' },
    ...faqBlocks.map(b => ({ id: b.id, label: b.title })),
  ];

  // Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqBlocks.flatMap(block =>
      block.items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer.replace(/\n/g, ' ').replace(/👉.*$/, '').trim()
        }
      }))
    )
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Optician",
    "name": "Ótica Gouveia Curitiba",
    "legalName": "Asaph Produtos Óticos LTDA",
    "url": "https://www.gouveiacuritiba.com.br",
    "description": "Ótica completa em Curitiba com exame de vista, armações, lentes especializadas, lentes de contato, óculos de sol e relojoaria. Lojas no Pinheirinho e Umbará.",
    "location": [
      {
        "@type": "Place",
        "name": "Ótica Gouveia Pinheirinho",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Nicola Pellanda, 1286",
          "addressLocality": "Curitiba",
          "addressRegion": "PR",
          "postalCode": "81880-000",
          "addressCountry": "BR"
        }
      },
      {
        "@type": "Place",
        "name": "Ótica Gouveia Umbará",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Curitiba",
          "addressRegion": "PR",
          "addressCountry": "BR"
        }
      }
    ],
    "areaServed": ["Pinheirinho", "Umbará", "Bairro Novo", "Sítio Cercado", "Tatuquara", "Xaxim", "Capão Raso", "Curitiba PR"]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.gouveiacuritiba.com.br/" },
      { "@type": "ListItem", "position": 2, "name": "Perguntas Frequentes", "item": "https://www.gouveiacuritiba.com.br/faq" }
    ]
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [faqSchema, localBusinessSchema, breadcrumbSchema]
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SEO
        title="Ótica Gouveia — Perguntas Frequentes sobre Óculos, Exame de Vista e Lentes em Curitiba | Pinheirinho e Umbará"
        description="Tire todas as suas dúvidas sobre óculos com grau, exame de vista, lentes de contato, óculos de sol e visão. A Ótica Gouveia responde perguntas de forma simples e clara para toda a família em Curitiba."
        keywords="ótica em curitiba, ótica pinheirinho curitiba, ótica umbará curitiba, exame de vista curitiba, óculos com grau curitiba, lentes de contato curitiba, óculos de sol com grau curitiba, ótica para idosos curitiba, óculos para presbiopia curitiba, lentes progressivas curitiba"
        canonicalUrl="/faq"
        structuredData={combinedSchema}
        ogType="website"
      />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[99999] h-1.5 bg-gray-200">
        <div
          className="h-full transition-all duration-150"
          style={{ width: `${readProgress}%`, backgroundColor: 'hsl(var(--primary))' }}
        />
      </div>

      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-28 md:pt-36 pb-4 bg-gray-50">
        <div className="max-w-[860px] mx-auto px-4">
          <nav className="text-base" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="text-primary underline font-medium" style={{ fontSize: '16px' }}>Início</Link></li>
              <li><ChevronRight className="w-4 h-4 text-gray-400" /></li>
              <li className="font-semibold" style={{ fontSize: '16px', color: '#1A1A1A' }}>Perguntas Frequentes</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-20" style={{ backgroundColor: 'hsl(var(--primary))' }}>
        <div className="max-w-[860px] mx-auto px-4 text-center">
          <h1 className="text-white font-extrabold leading-tight mb-6" style={{ fontSize: 'clamp(32px, 5vw, 44px)' }}>
            Perguntas Frequentes —<br />Ótica Gouveia Curitiba
          </h1>
          <p className="text-white/90 mb-10 mx-auto max-w-2xl" style={{ fontSize: '20px', lineHeight: '1.7' }}>
            Texto claro e simples para toda a família.<br />
            Pinheirinho e Umbará — suas dúvidas respondidas aqui.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { value: animatedStats.questions + '+', label: 'Perguntas' },
              { value: animatedStats.lojas, label: 'Lojas' },
              { value: 'Curitiba', label: 'PR' },
              { value: 'Pinheirinho', label: 'e Umbará' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <div className="text-white font-extrabold" style={{ fontSize: '28px' }}>{stat.value}</div>
                <div className="text-white/80 font-medium" style={{ fontSize: '16px' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Digite aqui sua dúvida..."
              className="w-full pl-14 pr-14 rounded-2xl border-0 shadow-lg focus:ring-4 focus:ring-white/30 text-[#1A1A1A] font-medium"
              style={{ height: '60px', fontSize: '20px' }}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-6 bg-gray-50 sticky top-1.5 z-[9990] border-b">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (cat.id !== 'all') {
                    setTimeout(() => {
                      document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  } else {
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }
                }}
                className={`whitespace-nowrap rounded-xl font-semibold transition-all flex-shrink-0 ${
                  activeCategory === cat.id
                    ? 'text-white shadow-lg'
                    : 'bg-white text-[#1A1A1A] border-2 border-gray-200 hover:border-primary/50'
                }`}
                style={{
                  fontSize: '16px',
                  padding: '12px 20px',
                  minHeight: '48px',
                  backgroundColor: activeCategory === cat.id ? 'hsl(var(--primary))' : undefined,
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results count */}
      {(searchTerm || activeCategory !== 'all') && (
        <div className="max-w-[860px] mx-auto px-4 py-4">
          <p style={{ fontSize: '18px', color: '#1A1A1A' }} className="font-medium">
            {totalFiltered} {totalFiltered === 1 ? 'pergunta encontrada' : 'perguntas encontradas'}
            {searchTerm && ` para "${searchTerm}"`}
          </p>
        </div>
      )}

      {/* FAQ Blocks */}
      <section className="py-8 md:py-12">
        <div className="max-w-[860px] mx-auto px-4">
          {filteredBlocks.map((block, blockIndex) => (
            <div key={block.id} id={block.id} className="mb-16 scroll-mt-32">
              {/* Block Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: 'hsl(var(--primary))' }}
                >
                  {iconMap[block.icon]}
                </div>
                <div>
                  <h2 className="font-bold text-[#1A1A1A]" style={{ fontSize: '28px' }}>{block.title}</h2>
                  <span className="font-medium" style={{ fontSize: '16px', color: '#666' }}>{block.items.length} perguntas</span>
                </div>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {block.items.map((item, index) => {
                  const key = `${block.id}-${index}`;
                  const isOpen = openItems[key];
                  const globalIndex = faqBlocks.slice(0, blockIndex).reduce((s, b) => s + b.items.length, 0) + index + 1;

                  return (
                    <div
                      key={key}
                      className="rounded-2xl border-2 overflow-hidden transition-all"
                      style={{
                        borderColor: isOpen ? 'hsl(var(--primary))' : '#e5e7eb',
                      }}
                    >
                      <button
                        onClick={() => toggleItem(block.id, index)}
                        className="w-full flex items-start gap-4 text-left transition-all hover:bg-gray-50"
                        style={{ padding: '24px 28px', minHeight: '64px' }}
                      >
                        <span
                          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                          style={{ fontSize: '14px', backgroundColor: 'hsl(var(--primary))' }}
                        >
                          {globalIndex}
                        </span>
                        <h3 className="flex-1 font-semibold text-[#1A1A1A] pr-4" style={{ fontSize: '20px', lineHeight: '1.5' }}>
                          {item.question}
                        </h3>
                        <div
                          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                          style={{
                            backgroundColor: isOpen ? 'hsl(var(--primary))' : '#f3f4f6',
                            color: isOpen ? 'white' : '#1A1A1A',
                          }}
                        >
                          {isOpen ? (
                            <ChevronUp className="w-6 h-6" />
                          ) : (
                            <ChevronDown className="w-6 h-6" />
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div
                          className="border-t"
                          style={{ backgroundColor: '#f0f4ff', padding: '24px 28px 28px 28px' }}
                        >
                          <p
                            className="whitespace-pre-line"
                            style={{
                              fontSize: '18px',
                              lineHeight: '1.9',
                              color: '#1A1A1A',
                              fontWeight: 400,
                            }}
                          >
                            {item.answer.replace(/👉.*$/m, '')}
                          </p>
                          <div className="mt-6 flex flex-wrap gap-3">
                            <a
                              href={WHATSAPP_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-white font-semibold rounded-xl transition-all hover:opacity-90"
                              style={{
                                backgroundColor: '#25D366',
                                padding: '14px 24px',
                                fontSize: '16px',
                                minHeight: '48px',
                              }}
                            >
                              <MessageCircle className="w-5 h-5" />
                              Falar pelo WhatsApp
                            </a>
                            <a
                              href="tel:+554131140663"
                              className="inline-flex items-center gap-2 font-semibold rounded-xl border-2 transition-all hover:bg-gray-100"
                              style={{
                                borderColor: 'hsl(var(--primary))',
                                color: 'hsl(var(--primary))',
                                padding: '14px 24px',
                                fontSize: '16px',
                                minHeight: '48px',
                              }}
                            >
                              <Phone className="w-5 h-5" />
                              Ligar Agora
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredBlocks.length === 0 && (
            <div className="text-center py-20">
              <p className="font-semibold mb-4" style={{ fontSize: '22px', color: '#1A1A1A' }}>
                Nenhuma pergunta encontrada.
              </p>
              <p style={{ fontSize: '18px', color: '#666' }}>
                Tente buscar com outras palavras ou{' '}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold">
                  fale conosco pelo WhatsApp
                </a>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="font-bold text-center mb-10" style={{ fontSize: '32px', color: '#1A1A1A' }}>
            Artigos sobre Saúde Visual em Curitiba
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((article, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border hover:shadow-md transition-all">
                <span
                  className="inline-block text-white font-semibold rounded-lg px-3 py-1 mb-4"
                  style={{ fontSize: '14px', backgroundColor: 'hsl(var(--primary))' }}
                >
                  {article.category}
                </span>
                <h3 className="font-bold mb-3" style={{ fontSize: '20px', color: '#1A1A1A', lineHeight: '1.4' }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6' }}>
                  {article.summary}
                </p>
                <p className="mt-3 font-medium" style={{ fontSize: '14px', color: '#999' }}>
                  {new Date(article.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16" style={{ backgroundColor: 'hsl(var(--primary))' }}>
        <div className="max-w-[860px] mx-auto px-4 text-center">
          <h2 className="text-white font-bold mb-4" style={{ fontSize: '32px' }}>
            Não encontrou sua dúvida?
          </h2>
          <p className="text-white/90 mb-8" style={{ fontSize: '20px', lineHeight: '1.7' }}>
            Fale diretamente com a equipe da Ótica Gouveia.<br />
            Atendimento carinhoso e paciente para todas as idades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white font-bold rounded-2xl transition-all hover:scale-105 shadow-xl"
              style={{
                color: '#25D366',
                padding: '18px 36px',
                fontSize: '20px',
                minHeight: '64px',
              }}
            >
              <MessageCircle className="w-7 h-7" />
              Falar pelo WhatsApp
            </a>
            <a
              href="tel:+554131140663"
              className="inline-flex items-center justify-center gap-3 bg-white/20 text-white font-bold rounded-2xl border-2 border-white/40 transition-all hover:bg-white/30"
              style={{
                padding: '18px 36px',
                fontSize: '20px',
                minHeight: '64px',
              }}
            >
              <Phone className="w-7 h-7" />
              Ligar Agora
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
};

export default FAQPage;

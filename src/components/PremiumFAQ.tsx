import { useState, useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Search } from 'lucide-react';
import { faqCategories, faqItems, FAQItem } from '@/data/faqData';

interface PremiumFAQProps {
  neighborhoodName: string;
}

const PremiumFAQ = ({ neighborhoodName }: PremiumFAQProps) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedFAQ, setSelectedFAQ] = useState<FAQItem | null>(null);
  const [viewedIds, setViewedIds] = useState<Set<number>>(new Set());
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredItems = faqItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Stagger animation on filter change
  useEffect(() => {
    setVisibleCards(new Set());
    const timer = setTimeout(() => {
      filteredItems.forEach((item, index) => {
        setTimeout(() => {
          setVisibleCards(prev => new Set(prev).add(item.id));
        }, index * 40);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [activeCategory, searchTerm]);

  const openModal = useCallback((faq: FAQItem) => {
    setSelectedFAQ(faq);
    setViewedIds(prev => new Set(prev).add(faq.id));
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setSelectedFAQ(null);
    document.body.style.overflow = '';
  }, []);

  const navigateFAQ = useCallback((direction: 'prev' | 'next') => {
    if (!selectedFAQ) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedFAQ.id);
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    const newFAQ = filteredItems[newIndex];
    setSelectedFAQ(newFAQ);
    setViewedIds(prev => new Set(prev).add(newFAQ.id));
  }, [selectedFAQ, filteredItems]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedFAQ) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') navigateFAQ('next');
      if (e.key === 'ArrowLeft') navigateFAQ('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedFAQ, navigateFAQ, closeModal]);

  const progressPercent = (viewedIds.size / faqItems.length) * 100;
  const whatsappUrl = `https://wa.me/554199161663?text=${encodeURIComponent(`Olá! Tenho uma dúvida sobre óculos para ${neighborhoodName}.`)}`;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            ❓ Suas Dúvidas Respondidas
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            155 Perguntas Sobre Óculos e Visão
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-6">
            Respostas de especialistas para todas as suas dúvidas
          </p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>{viewedIds.size} de {faqItems.length} visualizadas</span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-lg mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar pergunta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-base"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 min-h-[44px] ${
                activeCategory === cat.key
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'bg-card border border-border text-foreground hover:border-primary/50 hover:bg-primary/5'
              }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredItems.map((item) => {
            const catInfo = faqCategories.find(c => c.key === item.category);
            return (
              <button
                key={item.id}
                onClick={() => openModal(item)}
                className={`text-left p-5 bg-card border rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50 min-h-[120px] flex flex-col justify-between group ${
                  visibleCards.has(item.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[60px]'
                } ${viewedIds.has(item.id) ? 'border-accent/50 bg-accent/5' : 'border-border/50'}`}
              >
                <div>
                  <span className="text-xs font-medium text-muted-foreground mb-2 block">
                    {catInfo?.icon} {catInfo?.label}
                  </span>
                  <p className="font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-colors line-clamp-3">
                    {item.question}
                  </p>
                </div>
                <span className="text-xs text-primary font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver resposta →
                </span>
              </button>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg">Nenhuma pergunta encontrada.</p>
            <p className="text-sm mt-2">Tente outro termo ou categoria.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedFAQ && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-[hsl(var(--primary)/0.95)] backdrop-blur-sm" />
          
          <div
            className="relative bg-card rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-card border-b border-border p-6 rounded-t-3xl z-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-medium text-primary mb-1 block">
                    {faqCategories.find(c => c.key === selectedFAQ.category)?.icon}{' '}
                    {faqCategories.find(c => c.key === selectedFAQ.category)?.label}
                  </span>
                  <h2 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    {selectedFAQ.question}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-muted hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                {selectedFAQ.answer}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-card border-t border-border p-4 rounded-b-3xl flex items-center justify-between gap-3">
              <button
                onClick={() => navigateFAQ('prev')}
                className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground text-sm font-medium transition-colors min-h-[44px]"
              >
                <ChevronLeft className="w-4 h-4" /> Anterior
              </button>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold transition-colors min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com Especialista
              </a>
              
              <button
                onClick={() => navigateFAQ('next')}
                className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground text-sm font-medium transition-colors min-h-[44px]"
              >
                Próxima <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PremiumFAQ;

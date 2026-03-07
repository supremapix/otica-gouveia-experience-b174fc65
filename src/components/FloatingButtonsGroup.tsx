import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20%C3%93tica%20Gouveia%20e%20gostaria%20de%20um%20or%C3%A7amento%20%F0%9F%98%8A";

const FloatingButtonsGroup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButtons(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!showButtons) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9998] flex flex-col items-end gap-3">
      {/* Expanded buttons */}
      <div className={`flex flex-col items-end gap-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {/* Phone */}
        <a
          href="tel:+554131140663"
          className="flex items-center gap-3 bg-white text-foreground pl-4 pr-5 py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 border border-border"
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-sm whitespace-nowrap">Ligar Agora</span>
        </a>

        {/* WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white text-foreground pl-4 pr-5 py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 border border-border"
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'hsl(142, 70%, 49%)' }}>
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-sm whitespace-nowrap">Falar no WhatsApp</span>
        </a>
      </div>

      {/* Main animated CTA button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-cta-attention"
        style={{ backgroundColor: 'hsl(var(--primary))' }}
        aria-label="Fale conosco"
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: 'hsl(var(--primary))' }} />
        <span className="absolute -inset-1 rounded-full opacity-30 animate-pulse" style={{ border: '2px solid hsl(var(--primary))' }} />
        
        {/* Icon */}
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          {isOpen ? (
            <span className="text-primary-foreground text-3xl font-light">+</span>
          ) : (
            <Calendar className="w-7 h-7 text-primary-foreground" />
          )}
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </button>
    </div>
  );
};

export default FloatingButtonsGroup;

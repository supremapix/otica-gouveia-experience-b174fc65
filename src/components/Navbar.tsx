import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es.%20Pode%20me%20ajudar?";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { href: string; page?: string }) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === '/' && link.href.startsWith('#')) {
      const sectionId = link.href.replace('#', '');
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }
    }
    navigate(link.page || '/');
  };

  const navLinks = [
    { name: 'Início', href: '#home', page: '/' },
    { name: 'Sobre', href: '#about', page: '/sobre' },
    { name: 'Serviços', href: '#services', page: '/servicos' },
    { name: 'Produtos', href: '#products', page: '/produtos' },
    { name: 'Contato', href: '#contact', page: '/contato' },
    { name: 'FAQ', href: '/faq', page: '/faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999]">
      {/* Top Info Bar - Desktop only */}
      <div className="bg-primary-dark text-primary-foreground py-2 px-4 hidden md:block">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex space-x-4 items-center text-sm">
            <a href="tel:+554131140663" className="flex items-center hover:text-white/80 transition-colors">
              <Phone className="h-3 w-3 mr-1" />
              <span>(41) 3114-0663</span>
            </a>
            <a 
              href={WHATSAPP_URL}
              className="flex items-center hover:text-white/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>(41) 99161-0663</span>
            </a>
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              <span>R. Nicola Pellanda, 1286 - Umbará, Curitiba - PR</span>
            </div>
          </div>
          <div className="text-sm flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>Seg-Sex 9:00-18:00 | Sáb 9:00-13:00</span>
          </div>
        </div>
      </div>
      
      {/* Main Navbar */}
      <nav 
        className="w-full transition-all duration-300"
        style={{
          backgroundColor: 'hsl(var(--primary))',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.15)' : '0 2px 10px rgba(0,0,0,0.08)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-[72px]">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/8a300cb4-5614-40c2-adcb-ea81b6994e40.webp" 
                  alt="Ótica Gouveia Logo" 
                  className="h-8 md:h-10"
                />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6 lg:space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-white hover:text-white/80 transition-colors text-sm lg:text-base font-semibold cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-5 py-2.5 rounded-pill hover:bg-white/90 transition-all duration-300 hover:scale-105 text-sm lg:text-base font-bold"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
            
            {/* Mobile Quick Actions + Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="tel:+554131140663"
                className="inline-flex items-center justify-center gap-1.5 bg-white text-primary px-3 h-11 rounded-full font-bold text-sm shadow-md"
                aria-label="Ligar para a Ótica Gouveia"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                Ligar
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex flex-col items-center justify-center w-14 h-14 rounded-md text-white hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                aria-label="Abrir menu de navegação"
              >
                {isOpen ? (
                  <X className="block h-8 w-8" strokeWidth={3} aria-hidden="true" />
                ) : (
                  <>
                    <Menu className="block h-7 w-7" strokeWidth={3} aria-hidden="true" />
                    <span className="text-[10px] font-bold mt-0.5">MENU</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu - Fullscreen, otimizado melhor idade */}
        <div 
          className={`md:hidden fixed inset-0 top-0 z-[9999] transition-all duration-300 ease-in-out overflow-y-auto ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ backgroundColor: 'hsl(var(--primary))' }}
        >
          <div className="flex justify-between items-center px-4 h-16 sticky top-0 z-10" style={{ backgroundColor: 'hsl(var(--primary))' }}>
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img 
                src="/lovable-uploads/8a300cb4-5614-40c2-adcb-ea81b6994e40.webp" 
                alt="Ótica Gouveia Logo" 
                className="h-9"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="w-14 h-14 flex flex-col items-center justify-center text-white hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white rounded-md"
              aria-label="Fechar menu"
            >
              <X className="h-8 w-8" strokeWidth={3} />
              <span className="text-[10px] font-bold">FECHAR</span>
            </button>
          </div>

          {/* Atalhos rápidos no topo */}
          <div className="px-4 pt-4 pb-2 grid grid-cols-2 gap-3">
            <a
              href="tel:+554131140663"
              className="flex flex-col items-center justify-center bg-white text-primary rounded-2xl py-4 font-bold shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="h-7 w-7 mb-1" strokeWidth={2.5} />
              <span className="text-base">LIGAR</span>
              <span className="text-xs opacity-80">3114-0663</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-white rounded-2xl py-4 font-bold shadow-lg"
              style={{ backgroundColor: 'hsl(142, 70%, 45%)' }}
              onClick={() => setIsOpen(false)}
            >
              <svg className="h-7 w-7 mb-1" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span className="text-base">WHATSAPP</span>
              <span className="text-xs opacity-90">Resposta rápida</span>
            </a>
          </div>

          <div className="px-4 pb-2">
            <a
              href="https://maps.app.goo.gl/GhqcM45P9vZA8jMN9"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-white/15 border-2 border-white/30 text-white rounded-2xl py-4 font-bold text-base"
              onClick={() => setIsOpen(false)}
            >
              <MapPin className="h-6 w-6" /> COMO CHEGAR ATÉ A LOJA
            </a>
          </div>

          <div className="px-4 py-3 mt-2 border-t border-white/20">
            <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-1">Navegue pelo site</p>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-between py-[20px] text-[22px] font-bold text-white uppercase tracking-wide border-b border-white/20 hover:text-white/80 transition-colors"
                onClick={(e) => handleNavClick(e, link)}
                style={{ minHeight: '64px' }}
              >
                <span>{link.name}</span>
                <span className="text-white/50 text-2xl">›</span>
              </a>
            ))}
          </div>

          <div className="px-4 py-5 space-y-3 border-t border-white/20 mt-2">
            <div className="flex items-center text-white text-base">
              <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>R. Nicola Pellanda, 1286 - Umbará</span>
            </div>
            <div className="flex items-center text-white text-base">
              <Clock className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>Seg-Sex 9h-18h | Sáb 9h-13h</span>
            </div>
          </div>

          <div className="px-6 pb-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-pill text-white text-lg font-bold transition-all duration-300"
              style={{ backgroundColor: 'hsl(142, 70%, 49%)' }}
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

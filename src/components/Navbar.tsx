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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    setIsOpen(false);
    const sectionId = anchor.replace('#', '');
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else {
      navigate(`/${anchor}`);
    }
  };

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Produtos', href: '#products' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999]">
      {/* Top Info Bar - Desktop only */}
      <div className="bg-primary-dark text-primary-foreground py-2 px-4 hidden md:block">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex space-x-4 items-center text-sm">
            <a href="tel:+554131140663" className="flex items-center hover:text-accent-gold transition-colors">
              <Phone className="h-3 w-3 mr-1" />
              <span>(41) 3114-0663</span>
            </a>
            <a 
              href={WHATSAPP_URL}
              className="flex items-center hover:text-accent-gold transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>(41) 99161-0663</span>
            </a>
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              <span>R. Nicola Pellanda, 1286 - Pinheirinho, Curitiba - PR</span>
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
          backgroundColor: scrolled ? 'hsl(221, 100%, 19%)' : 'rgba(0, 20, 64, 0.2)',
          backdropFilter: scrolled ? 'none' : 'blur(8px)',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.15)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-[72px]">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/8a300cb4-5614-40c2-adcb-ea81b6994e40.png" 
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
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white hover:text-accent-gold transition-colors text-sm lg:text-base font-semibold cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-gold text-primary-dark px-5 py-2.5 rounded-pill hover:bg-accent-gold-dark transition-all duration-300 hover:scale-105 text-sm lg:text-base font-bold"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
            
            {/* Mobile Menu Button - 48x48 touch target */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center w-12 h-12 rounded-md text-white hover:text-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold transition-colors"
                aria-label="Abrir menu"
              >
                {isOpen ? (
                  <X className="block h-7 w-7" strokeWidth={3} aria-hidden="true" />
                ) : (
                  <Menu className="block h-7 w-7" strokeWidth={3} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu - Fullscreen */}
        <div 
          className={`md:hidden fixed inset-0 top-0 z-[9999] transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ backgroundColor: 'hsl(221, 100%, 19%)' }}
        >
          {/* Close button */}
          <div className="flex justify-between items-center px-4 h-16">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img 
                src="/lovable-uploads/8a300cb4-5614-40c2-adcb-ea81b6994e40.png" 
                alt="Ótica Gouveia Logo" 
                className="h-8"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="w-12 h-12 flex items-center justify-center text-white hover:text-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold rounded-md"
              aria-label="Fechar menu"
            >
              <X className="h-8 w-8" strokeWidth={3} />
            </button>
          </div>

          {/* Phone highlight at top */}
          <div className="px-6 py-3 border-b border-white/20">
            <a href="tel:+554131140663" className="flex items-center text-accent-gold text-lg font-bold">
              <Phone className="h-5 w-5 mr-2" />
              (41) 3114-0663
            </a>
          </div>

          {/* Nav Links */}
          <div className="px-6 py-4 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-[18px] text-[20px] font-bold text-white uppercase tracking-wide border-b border-white/20 hover:text-accent-gold transition-colors"
                onClick={(e) => handleNavClick(e, link.href)}
                style={{ minHeight: '48px' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Info at bottom */}
          <div className="px-6 pb-4 space-y-3">
            <div className="flex items-center text-white/80 text-sm">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0 text-accent-gold" />
              <span>R. Nicola Pellanda, 1286 - Pinheirinho</span>
            </div>
            <div className="flex items-center text-white/80 text-sm">
              <Clock className="h-4 w-4 mr-2 flex-shrink-0 text-accent-gold" />
              <span>Seg-Sex 9:00-18:00 | Sáb 9:00-13:00</span>
            </div>
          </div>

          {/* WhatsApp CTA fixed at bottom of mobile menu */}
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

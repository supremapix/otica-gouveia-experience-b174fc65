import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Produtos', href: '#products' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex space-x-4 items-center text-sm">
            <a href="tel:+554131140663" className="flex items-center hover:underline transition-colors">
              <Phone className="h-3 w-3 mr-1" />
              <span>(41) 3114-0663</span>
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es.%20Pode%20me%20ajudar?" 
              className="flex items-center hover:underline transition-colors"
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
          <div className="text-sm">
            <span>Horário: Seg-Sex 9:00-18:00 | Sáb 9:00-13:00</span>
          </div>
        </div>
      </div>
      
      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md' 
          : 'bg-black/20 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                {scrolled ? (
                  <img 
                    src="/lovable-uploads/9cb88b28-e372-46cb-9604-f84bf0bed383.png" 
                    alt="Ótica Gouveia Logo" 
                    className="h-8 md:h-10"
                  />
                ) : (
                  <img 
                    src="/lovable-uploads/8a300cb4-5614-40c2-adcb-ea81b6994e40.png" 
                    alt="Ótica Gouveia Logo" 
                    className="h-8 md:h-10"
                  />
                )}
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6 lg:space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`transition-colors text-sm lg:text-base font-medium ${
                      scrolled 
                        ? 'text-foreground hover:text-primary' 
                        : 'text-white hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es.%20Pode%20me%20ajudar?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-sm lg:text-base font-medium"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${
                  scrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-primary'
                }`}
              >
                <span className="sr-only">Abrir menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-background shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-lg text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es.%20Pode%20me%20ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-3 text-base font-medium text-primary hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Agendar Consulta
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-border">
            <div className="px-5 space-y-2">
              <a
                href="tel:+554131140663"
                className="flex items-center px-3 py-2 text-sm text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                (41) 3114-0663
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5541991610663"
                className="flex items-center px-3 py-2 text-sm text-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp: (41) 99161-0663
              </a>
              <div className="flex items-center px-3 py-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>R. Nicola Pellanda, 1286 - Pinheirinho</span>
              </div>
              <div className="px-3 py-2 text-sm text-muted-foreground">
                Horário: Seg-Sex 9:00-18:00 | Sáb 9:00-13:00
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

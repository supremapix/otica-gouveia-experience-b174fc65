
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
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
    <>
      {/* Top Info Bar */}
      <div className="bg-brand-red text-white py-2 px-4 hidden md:block">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex space-x-4 items-center text-sm">
            <a href="tel:+554131140663" className="flex items-center hover:underline">
              <Phone className="h-3 w-3 mr-1" />
              <span>(41) 3114-0663</span>
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es.%20Pode%20me%20ajudar?" 
              className="flex items-center hover:underline"
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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/48cc47c3-a484-4afb-9f9e-fc1b26e5d095.png" 
                  alt="Ótica Gouveia Logo" 
                  className="h-10 md:h-12"
                />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-brand-gray-700 hover:text-brand-red transition-colors text-base font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es.%20Pode%20me%20ajudar?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-red text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray-700 hover:text-brand-red focus:outline-none"
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
        <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-brand-gray-700 hover:text-brand-red"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es.%20Pode%20me%20ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-medium text-brand-red hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Agendar Consulta
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-5 space-y-1">
              <a
                href="tel:+554131140663"
                className="block px-3 py-2 text-base font-medium text-brand-gray-700 hover:text-brand-red"
              >
                <Phone className="h-5 w-5 mr-2 inline" />
                (41) 3114-0663
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es.%20Pode%20me%20ajudar?"
                className="block px-3 py-2 text-base font-medium text-brand-gray-700 hover:text-brand-red"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5 mr-2 inline" />
                WhatsApp: (41) 99161-0663
              </a>
              <div className="block px-3 py-2 text-base font-medium text-brand-gray-700">
                <MapPin className="h-5 w-5 mr-2 inline" />
                R. Nicola Pellanda, 1286 - Pinheirinho, Curitiba - PR
              </div>
              <div className="block px-3 py-2 text-base font-medium text-brand-gray-700">
                Horário: Seg-Sex 9:00-18:00 | Sáb 9:00-13:00
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

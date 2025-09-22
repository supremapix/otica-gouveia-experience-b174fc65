import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Home, ArrowUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actions = [
    {
      icon: MapPin,
      label: 'Ver Rotas',
      href: 'https://maps.app.goo.gl/GhqcM45P9vZA8jMN9',
      className: 'bg-blue-600 hover:bg-blue-700',
      external: true
    },
    {
      icon: Phone,
      label: 'Ligar Agora',
      href: 'tel:+5541999123456',
      className: 'bg-green-600 hover:bg-green-700',
      external: false
    },
    {
      icon: Star,
      label: 'Avaliar Agora',
      href: 'https://tinyurl.com/5n6zau9b',
      className: 'bg-yellow-600 hover:bg-yellow-700',
      external: true
    },
    {
      icon: Home,
      label: 'Voltar à Home',
      href: '/',
      className: 'bg-primary hover:bg-primary/90',
      external: false
    }
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 space-y-3">
      {actions.map((action, index) => (
        <div key={index} className="group relative">
          {action.external ? (
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${action.className} text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center justify-center w-12 h-12`}
            >
              <action.icon size={20} />
            </a>
          ) : (
            <Link
              to={action.href}
              className={`${action.className} text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center justify-center w-12 h-12`}
            >
              <action.icon size={20} />
            </Link>
          )}
          
          {/* Tooltip */}
          <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {action.label}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
          </div>
        </div>
      ))}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="group relative">
          <button
            onClick={scrollToTop}
            className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center justify-center w-12 h-12"
          >
            <ArrowUp size={20} />
          </button>
          
          {/* Tooltip */}
          <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Voltar ao Topo
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingActions;
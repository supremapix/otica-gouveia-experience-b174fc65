import { Phone, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es.%20Pode%20me%20ajudar?";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'hsl(225, 100%, 13%)' }} className="text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/8a300cb4-5614-40c2-adcb-ea81b6994e40.png" 
                alt="Ótica Gouveia Logo" 
                className="h-10 mb-3"
              />
            </div>
            <p className="text-white/70 mb-6 text-[15px] leading-relaxed">
              Proporcionando soluções ópticas de qualidade com atendimento personalizado para melhorar a qualidade de vida dos nossos clientes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/gouveiaoticacuritiba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent-gold hover:text-primary-dark transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">Navegação</h3>
            <ul className="space-y-1">
              {[
                { name: 'Início', href: '/' },
                { name: 'Sobre', href: '/sobre' },
                { name: 'Serviços', href: '/servicos' },
                { name: 'Produtos', href: '/produtos' },
                { name: 'Contato', href: '/contato' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accent-gold transition-colors text-[15px] block py-[12px]"
                    style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3" style={{ minHeight: '44px' }}>
                <Phone className="w-5 h-5 text-accent-gold flex-shrink-0" />
                <a href="tel:+554131140663" className="text-white/70 hover:text-accent-gold transition-colors text-[15px]">
                  (41) 3114-0663
                </a>
              </li>
              <li className="flex items-center gap-3" style={{ minHeight: '44px' }}>
                <MessageCircle className="w-5 h-5 text-accent-gold flex-shrink-0" />
                <a 
                  href={WHATSAPP_URL}
                  className="text-white/70 hover:text-accent-gold transition-colors text-[15px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (41) 99161-0663
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/GhqcM45P9vZA8jMN9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent-gold transition-colors text-[15px]"
                >
                  R. Nicola Pellanda, 1286 - Pinheirinho, Curitiba - PR, 81880-000
                </a>
              </li>
              <li className="flex items-center gap-3" style={{ minHeight: '44px' }}>
                <Clock className="w-5 h-5 text-accent-gold flex-shrink-0" />
                <span className="text-white/70 text-[15px]">
                  Seg-Sex: 9h às 18h | Sáb: 9h às 13h
                </span>
              </li>
            </ul>
          </div>

          {/* Páginas SEO */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">Páginas Especiais</h3>
            <ul className="space-y-1">
              {[
                { name: 'Conserto de Óculos — Sítio Cercado', href: '/conserto-oculos-sitio-cercado' },
                { name: 'Ótica perto do Terminal Sítio Cercado', href: '/otica-terminal-sitio-cercado' },
                { name: 'Óticas no Centro de Curitiba', href: '/oticas-no-centro-de-curitiba' },
                { name: 'Ótica Barata em Curitiba', href: '/otica-barata-curitiba' },
                { name: 'Entregas no Sítio Cercado', href: '/entregas-sitio-cercado-curitiba' },
              ].map((page) => (
                <li key={page.href}>
                  <Link
                    to={page.href}
                    className="text-white/70 hover:text-accent-gold transition-colors text-[14px] block py-[10px]"
                    style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-[15px]">
          <p>© 2025 Ótica Gouveia. Todos os direitos reservados.</p>
          <p className="mt-3 flex items-center justify-center gap-2 flex-wrap">
            Desenvolvido com
            <span className="text-red-500 text-2xl animate-heartbeat inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-red-500" viewBox="0 0 24 24">
                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
              </svg>
            </span>
            por
            <a 
              href="https://supremasite.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-gold hover:underline font-semibold inline-flex items-center gap-2"
            >
              <img 
                src="https://img.supremamidia.com/suprema-img.png" 
                alt="Suprema Sites Express" 
                className="h-6 inline-block"
              />
              Suprema Sites Express
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

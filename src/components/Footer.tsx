import { Phone, MapPin, Clock, Instagram } from 'lucide-react';
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
                { name: 'Início', href: '#home' },
                { name: 'Sobre', href: '#about' },
                { name: 'Serviços', href: '#services' },
                { name: 'Produtos', href: '#products' },
                { name: 'Contato', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-accent-gold transition-colors text-[15px] block py-[12px]"
                    style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center" style={{ minHeight: '44px' }}>
                <Phone className="w-5 h-5 text-accent-gold mr-3 flex-shrink-0" />
                <a href="tel:+554131140663" className="text-white/70 hover:text-accent-gold transition-colors text-[15px]">
                  📞 (41) 3114-0663
                </a>
              </li>
              <li className="flex items-center" style={{ minHeight: '44px' }}>
                <svg className="w-5 h-5 text-accent-gold mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a 
                  href={WHATSAPP_URL}
                  className="text-white/70 hover:text-accent-gold transition-colors text-[15px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 (41) 99161-0663
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent-gold mr-3 flex-shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/GhqcM45P9vZA8jMN9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent-gold transition-colors text-[15px]"
                >
                  📍 R. Nicola Pellanda, 1286 - Pinheirinho, Curitiba - PR, 81880-000
                </a>
              </li>
              <li className="flex items-center" style={{ minHeight: '44px' }}>
                <Clock className="w-5 h-5 text-accent-gold mr-3 flex-shrink-0" />
                <span className="text-white/70 text-[15px]">
                  🕐 Seg-Sex: 9h às 18h | Sáb: 9h às 13h
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
            Desenvolvido
            <span className="text-red-500 text-2xl animate-heartbeat inline-block">❤️</span>
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

import { Phone, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es.%20Pode%20me%20ajudar?";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Faixa de contato rápido - melhor idade */}
      <div className="border-b border-white/15 bg-black/15">
        <div className="section-container py-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Precisa de ajuda? Fale conosco agora</h2>
            <p className="text-white/85 text-lg">Estamos prontos para te atender com calma e atenção</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <a
              href="tel:+554131140663"
              className="flex flex-col items-center justify-center bg-white text-primary rounded-2xl py-5 px-4 font-bold shadow-lg hover:scale-[1.02] transition-transform"
              style={{ minHeight: '88px' }}
            >
              <Phone className="w-7 h-7 mb-1" strokeWidth={2.5} />
              <span className="text-lg">LIGAR AGORA</span>
              <span className="text-sm font-semibold opacity-80">(41) 3114-0663</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-white rounded-2xl py-5 px-4 font-bold shadow-lg hover:scale-[1.02] transition-transform"
              style={{ backgroundColor: 'hsl(142, 70%, 45%)', minHeight: '88px' }}
            >
              <MessageCircle className="w-7 h-7 mb-1" strokeWidth={2.5} />
              <span className="text-lg">WHATSAPP</span>
              <span className="text-sm font-semibold opacity-90">(41) 99161-0663</span>
            </a>
            <a
              href="https://maps.app.goo.gl/GhqcM45P9vZA8jMN9"
              target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center justify-center bg-white/15 border-2 border-white text-white rounded-2xl py-5 px-4 font-bold shadow-lg hover:scale-[1.02] transition-transform"
              style={{ minHeight: '88px' }}
            >
              <MapPin className="w-7 h-7 mb-1" strokeWidth={2.5} />
              <span className="text-lg">COMO CHEGAR</span>
              <span className="text-sm font-semibold opacity-90">Umbará - Curitiba</span>
            </a>
          </div>
        </div>
      </div>

      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/8a300cb4-5614-40c2-adcb-ea81b6994e40.webp" 
                alt="Ótica Gouveia Logo" 
                className="h-12 mb-3"
              />
            </div>
            <p className="text-white/85 mb-6 text-[17px] leading-[1.7]">
              Cuidamos da sua visão com carinho e paciência. Atendimento dedicado à melhor idade em Curitiba.
            </p>
            <a 
              href="https://www.instagram.com/gouveiaoticacuritiba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-4 py-3 rounded-full font-semibold transition-colors"
              aria-label="Siga-nos no Instagram"
              style={{ minHeight: '48px' }}
            >
              <Instagram className="w-5 h-5" />
              <span className="text-[15px]">Instagram</span>
            </a>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white uppercase tracking-wide">Navegação</h3>
            <ul className="space-y-1">
              {[
                { name: 'Início', href: '/' },
                { name: 'Sobre Nós', href: '/sobre' },
                { name: 'Nossos Serviços', href: '/servicos' },
                { name: 'Produtos', href: '/produtos' },
                { name: 'Contato', href: '/contato' },
                { name: 'Perguntas Frequentes', href: '/faq' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/85 hover:text-white hover:underline transition-colors text-[17px] block py-3 font-medium"
                    style={{ minHeight: '48px', display: 'flex', alignItems: 'center' }}
                  >
                    › {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white uppercase tracking-wide">Onde Estamos</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/GhqcM45P9vZA8jMN9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white hover:underline transition-colors text-[17px] leading-relaxed"
                >
                  R. Nicola Pellanda, 1286<br/>Umbará, Curitiba - PR
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-[17px] leading-relaxed">
                  Seg a Sex: 9h às 18h<br/>Sábado: 9h às 13h
                </span>
              </li>
            </ul>
          </div>

          {/* Ajuda Rápida */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white uppercase tracking-wide">Tire Suas Dúvidas</h3>
            <ul className="space-y-1">
              {[
                { name: 'Óculos para Idosos', href: '/faq#idosos' },
                { name: 'Exame de Vista', href: '/faq#exame' },
                { name: 'Lentes Grau Alto', href: '/faq#lentes' },
                { name: 'Lentes de Contato', href: '/faq#contato-lente' },
                { name: 'Óculos de Sol com Grau', href: '/faq#solar' },
              ].map((page) => (
                <li key={page.href}>
                  <Link
                    to={page.href}
                    className="text-white/85 hover:text-white hover:underline transition-colors text-[16px] block py-3 font-medium"
                    style={{ minHeight: '48px', display: 'flex', alignItems: 'center' }}
                  >
                    › {page.name}
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
            <span className="text-white text-2xl animate-heartbeat inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
              </svg>
            </span>
            por
            <a 
              href="https://supremasite.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:underline font-semibold inline-flex items-center gap-2"
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

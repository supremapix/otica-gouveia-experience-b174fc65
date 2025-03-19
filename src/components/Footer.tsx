
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-gray-900 text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-white">Ótica Gouveia</span>
            </div>
            <p className="text-brand-gray-400 mb-6">
              Proporcionando soluções ópticas de qualidade com atendimento personalizado para melhorar a qualidade de vida dos nossos clientes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/gouveiaoticacuritiba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-gray-800 flex items-center justify-center text-white hover:bg-brand-red transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-brand-gray-400 hover:text-brand-red transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="text-brand-gray-400 hover:text-brand-red transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#services" className="text-brand-gray-400 hover:text-brand-red transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#products" className="text-brand-gray-400 hover:text-brand-red transition-colors">Produtos</a>
              </li>
              <li>
                <a href="#contact" className="text-brand-gray-400 hover:text-brand-red transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-brand-gray-400 hover:text-brand-red transition-colors">Exames de Vista</a>
              </li>
              <li>
                <a href="#services" className="text-brand-gray-400 hover:text-brand-red transition-colors">Adaptação de Lentes</a>
              </li>
              <li>
                <a href="#services" className="text-brand-gray-400 hover:text-brand-red transition-colors">Manutenção de Óculos</a>
              </li>
              <li>
                <a href="#services" className="text-brand-gray-400 hover:text-brand-red transition-colors">Lentes sob Medida</a>
              </li>
              <li>
                <a href="#services" className="text-brand-gray-400 hover:text-brand-red transition-colors">Armações Exclusivas</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-brand-gray-400">
                  R. Nicola Pellanda, 1286 - Pinheirinho, Curitiba - PR, 81880-000
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                <a href="tel:+554131140663" className="text-brand-gray-400 hover:text-brand-red transition-colors">
                  (41) 3114-0663
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                <a 
                  href="https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es.%20Pode%20me%20ajudar?" 
                  className="text-brand-gray-400 hover:text-brand-red transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: (41) 99161-0663
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                <span className="text-brand-gray-400">
                  Seg-Sex: 9h às 18h | Sáb: 9h às 13h
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-brand-gray-800 text-center text-brand-gray-400 text-sm">
          <p>© {currentYear} Ótica Gouveia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

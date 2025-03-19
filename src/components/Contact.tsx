
import { useState } from 'react';
import { useInView } from '../utils/animations';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  
  const businessHours = [
    { day: 'Segunda-feira', hours: '09:00–18:00' },
    { day: 'Terça-feira', hours: '09:00–18:00' },
    { day: 'Quarta-feira', hours: '09:00–18:00' },
    { day: 'Quinta-feira', hours: '09:00–18:00' },
    { day: 'Sexta-feira', hours: '09:00–18:00' },
    { day: 'Sábado', hours: '09:00–13:00' },
    { day: 'Domingo', hours: 'Fechado' },
  ];

  return (
    <section id="contact" className="section-padding bg-white" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="section-container">
        <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="text-brand-red text-sm font-semibold uppercase tracking-wider">FALE CONOSCO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mt-2">
            Entre em Contato
          </h2>
          <p className="text-brand-gray-700 max-w-2xl mx-auto mt-4">
            Estamos à disposição para esclarecer suas dúvidas, agendar seu exame de vista ou auxiliar na escolha dos seus óculos.
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out delay-200 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-gray-200">
              <h3 className="text-xl font-bold text-brand-gray-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="text-brand-gray-900 font-medium">Endereço</h4>
                    <p className="text-brand-gray-700">
                      R. Nicola Pellanda, 1286 - Pinheirinho, Curitiba - PR, 81880-000
                    </p>
                    <a 
                      href="https://g.co/kgs/85peFEj" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-red text-sm font-medium hover:underline mt-1 inline-block"
                    >
                      Ver no mapa
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="text-brand-gray-900 font-medium">Telefone & WhatsApp</h4>
                    <p className="text-brand-gray-700">
                      <a href="tel:+554131140663" className="hover:underline">Telefone: (41) 3114-0663</a><br/>
                      <a 
                        href="https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es.%20Pode%20me%20ajudar?" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        WhatsApp: (41) 99161-0663
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center mr-4">
                    <Instagram className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="text-brand-gray-900 font-medium">Redes Sociais</h4>
                    <p className="text-brand-gray-700">
                      <a 
                        href="https://www.instagram.com/gouveiaoticacuritiba/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        @gouveiaoticacuritiba
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-gray-200">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-brand-red mr-2" />
                <h3 className="text-xl font-bold text-brand-gray-900">Horário de Funcionamento</h3>
              </div>
              
              <ul className="space-y-2">
                {businessHours.map((item, index) => (
                  <li key={index} className="flex justify-between py-1 border-b border-brand-gray-100 last:border-0">
                    <span className="text-brand-gray-700">{item.day}</span>
                    <span className={`font-medium ${item.hours === 'Fechado' ? 'text-brand-red' : 'text-brand-gray-900'}`}>
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Map */}
          <div className="lg:col-span-2 h-full">
            <div className="h-full min-h-[400px] rounded-xl overflow-hidden shadow-sm border border-brand-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.2486917075837!2d-49.292339524408596!3d-25.500941637619383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfbd13da9c8b1%3A0x5a6cf2204b045a1c!2sR.%20Nicola%20Pellanda%2C%201286%20-%20Pinheirinho%2C%20Curitiba%20-%20PR%2C%2081880-000!5e0!3m2!1spt-BR!2sbr!4v1695655841619!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ótica Gouveia Localização"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* CTA Banner */}
        <div className={`mt-16 bg-brand-red rounded-2xl p-8 md:p-12 text-white relative overflow-hidden transition-all duration-1000 ease-out delay-400 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="absolute top-0 right-0 w-full h-full">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
              <path fill="#ffffff" d="M40.8,-67.7C55.6,-60.5,71.9,-54.3,79.5,-42.3C87.2,-30.3,86.1,-12.4,81.5,3.4C76.9,19.2,68.8,32.8,59.8,45.1C50.8,57.4,40.8,68.4,28.2,72.6C15.5,76.9,0.2,74.5,-13.7,70.1C-27.5,65.7,-40,59.3,-52.3,50.4C-64.7,41.5,-76.9,30.1,-80.7,16.2C-84.5,2.3,-79.8,-14.1,-70.9,-25.6C-62,-37.1,-49,-43.8,-36.7,-52.2C-24.4,-60.6,-12.2,-70.7,0.5,-71.5C13.2,-72.3,26.1,-74.9,40.8,-67.7Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Agende seu exame de vista <br/>ou tire suas dúvidas
            </h3>
            <p className="text-white/90 mb-8">
              Entre em contato conosco pelo WhatsApp e receba atendimento personalizado. Nossa equipe está pronta para auxiliar você.
            </p>
            <a 
              href="https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es.%20Pode%20me%20ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-red px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center font-medium"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enviar Mensagem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

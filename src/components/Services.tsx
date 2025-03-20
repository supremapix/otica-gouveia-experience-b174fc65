
import { useState } from 'react';
import { useInView } from '../utils/animations';
import { Eye, Glasses, Wrench, CreditCard, CalendarCheck, Users } from 'lucide-react';

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState('exams');

  const tabContent = {
    exams: {
      title: "Medidas de Alta Precisão",
      description: "A Ótica Gouveia Úmbara traz o que há de mais moderno no mundo óptico com o Visioffice 3, um equipamento de alta tecnologia da Essilor que garante extrema precisão em diversas medições. Em apenas alguns segundos, conseguimos determinar com exatidão diversas medidas para o ajuste perfeito das suas lentes.",
      image: "/lovable-uploads/4a29b99c-56aa-418b-be88-b850f3f0cc76.png",
      features: [
        "Distância pupilar",
        "Altura de montagem",
        "Distância de leitura",
        "Ângulo pantoscópico",
        "E muito mais!",
      ],
      cta: "Agendar Medição",
      ctaLink: "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20gostaria%20de%20conhecer%20o%20Visioffice%203.%20Pode%20me%20ajudar?"
    },
    lenses: {
      title: "Lentes de Qualidade",
      description: "Trabalhamos com as melhores marcas de lentes do mercado para proporcionar conforto visual e proteção para seus olhos. Das lentes básicas às mais tecnológicas, temos a solução ideal para você.",
      image: "/lovable-uploads/d03236fb-b7da-44a0-9e41-d1bcf77ee2fe.png", // Updated Varilux image
      features: [
        "Lentes multifocais Varilux",
        "Tratamento anti-reflexo Crizal",
        "Lentes de contato Bausch Ultra",
        "Lentes fotossensíveis",
      ],
      cta: "Conhecer Opções",
      ctaLink: "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es%20sobre%20lentes.%20Pode%20me%20ajudar?"
    },
    frames: {
      title: "Armações Exclusivas",
      description: "Oferecemos uma ampla variedade de armações para todos os estilos e necessidades. De marcas renomadas como Ray-Ban e Ana Hickmann a modelos exclusivos para o público infantil.",
      image: "/lovable-uploads/74d8f6cb-dfbb-4388-82b9-f012acfbadcc.png",
      features: [
        "Marcas premium nacionais e importadas",
        "Modelos para todos os rostos",
        "Armações infantis temáticas",
        "Últimas tendências da moda",
      ],
      cta: "Ver Coleção",
      ctaLink: "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es%20sobre%20arma%C3%A7%C3%B5es.%20Pode%20me%20ajudar?"
    },
    maintenance: {
      title: "Manutenção e Ajustes",
      description: "Sua experiência com óculos não termina na compra. Oferecemos serviços completos de manutenção, ajustes e reparos para garantir o conforto e a durabilidade dos seus óculos.",
      image: "/lovable-uploads/484f4810-331a-4018-af69-0853c07fa440.png",
      features: [
        "Ajustes de armação",
        "Troca de plaquetas e parafusos",
        "Limpeza profissional",
        "Pequenos reparos",
      ],
      cta: "Solicitar Manutenção",
      ctaLink: "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es%20sobre%20manuten%C3%A7%C3%A3o%20dos%20meus%20%C3%B3culos.%20Pode%20me%20ajudar?"
    }
  };

  return (
    <section id="services" className="section-padding bg-brand-gray-100" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="section-container">
        <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="text-brand-red text-sm font-semibold uppercase tracking-wider">O QUE OFERECEMOS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mt-2">
            Serviços Especializados
          </h2>
          <p className="text-brand-gray-700 max-w-2xl mx-auto mt-4">
            Conheça nossa ampla gama de serviços dedicados a proporcionar a melhor experiência visual e garantir a saúde dos seus olhos.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 transition-all duration-1000 ease-out delay-200 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <button
            onClick={() => setActiveTab('exams')}
            className={`flex items-center px-4 py-2 rounded-full transition-all ${
              activeTab === 'exams' 
                ? 'bg-brand-red text-white shadow-md' 
                : 'bg-white text-brand-gray-700 hover:bg-brand-gray-200'
            }`}
          >
            <Eye className="w-4 h-4 mr-2" />
            <span>Medidas</span>
          </button>
          <button
            onClick={() => setActiveTab('lenses')}
            className={`flex items-center px-4 py-2 rounded-full transition-all ${
              activeTab === 'lenses' 
                ? 'bg-brand-red text-white shadow-md' 
                : 'bg-white text-brand-gray-700 hover:bg-brand-gray-200'
            }`}
          >
            <Glasses className="w-4 h-4 mr-2" />
            <span>Lentes</span>
          </button>
          <button
            onClick={() => setActiveTab('frames')}
            className={`flex items-center px-4 py-2 rounded-full transition-all ${
              activeTab === 'frames' 
                ? 'bg-brand-red text-white shadow-md' 
                : 'bg-white text-brand-gray-700 hover:bg-brand-gray-200'
            }`}
          >
            <Glasses className="w-4 h-4 mr-2" />
            <span>Armações</span>
          </button>
          <button
            onClick={() => setActiveTab('maintenance')}
            className={`flex items-center px-4 py-2 rounded-full transition-all ${
              activeTab === 'maintenance' 
                ? 'bg-brand-red text-white shadow-md' 
                : 'bg-white text-brand-gray-700 hover:bg-brand-gray-200'
            }`}
          >
            <Wrench className="w-4 h-4 mr-2" />
            <span>Manutenção</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-700 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-brand-gray-900 mb-4">
              {tabContent[activeTab as keyof typeof tabContent].title}
            </h3>
            <p className="text-brand-gray-700 mb-6">
              {tabContent[activeTab as keyof typeof tabContent].description}
            </p>
            <ul className="space-y-3 mb-8">
              {tabContent[activeTab as keyof typeof tabContent].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-red/10 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-brand-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <a 
              href={tabContent[activeTab as keyof typeof tabContent].ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              {tabContent[activeTab as keyof typeof tabContent].cta}
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-xl shadow-lg h-80 lg:h-96">
              <img 
                src={tabContent[activeTab as keyof typeof tabContent].image}
                alt={tabContent[activeTab as keyof typeof tabContent].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out delay-300 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6 text-brand-red" />
            </div>
            <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Facilidade de Pagamento</h3>
            <p className="text-brand-gray-700">
              Parcele suas compras em até 10x sem juros e aproveite nossas condições especiais de pagamento.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
              <CalendarCheck className="w-6 h-6 text-brand-red" />
            </div>
            <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Agendamento Prático</h3>
            <p className="text-brand-gray-700">
              Venha conhecer a nossa loja cheia de novidades, promoções e descontos!
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-brand-red" />
            </div>
            <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Descontos Especiais</h3>
            <p className="text-brand-gray-700">
              Professores e alunos recebem 50% de desconto na volta às aulas. Consulte nossas promoções atuais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

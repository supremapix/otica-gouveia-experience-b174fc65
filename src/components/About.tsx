
import { useInView } from '../utils/animations';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="section-padding bg-white" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="section-container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Left Column - Text */}
          <div>
            <span className="text-brand-red text-sm font-semibold uppercase tracking-wider">Nossa História</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mt-2 mb-6">
              Tradição e Inovação<br/>
              <span className="text-brand-red">Desde o início</span>
            </h2>
            <div className="space-y-4 text-brand-gray-700">
              <p>
                A história da Ótica Gouveia Pinheirinho não se resume apenas a óculos e lentes. É a história de uma família que 
                transformou a loja em um lar acolhedor para clientes e colaboradores.
              </p>
              <p>
                Com o tempo, a Ótica Gouveia se tornou mais do que uma loja de produtos ópticos. Tornou-se um refúgio para quem buscava 
                mais do que apenas enxergar melhor. Tornou-se um lugar onde a excelência no atendimento se une à qualidade dos produtos 
                para oferecer uma experiência única e personalizada.
              </p>
              <p>
                Na Ótica Gouveia Pinheirinho, cada cliente é tratado com carinho e respeito. A equipe, formada por profissionais 
                experientes e apaixonados, dedica-se a entender as necessidades de cada um, desde o exame de vista completo até a 
                escolha da armação ideal.
              </p>
            </div>
            
            <div className="mt-8 bg-brand-gray-100 p-6 rounded-lg border border-brand-gray-200">
              <h3 className="text-lg font-bold text-brand-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-brand-gray-700">
                Proporcionar soluções ópticas de qualidade com atendimento personalizado, contribuindo para o bem-estar visual e 
                qualidade de vida dos nossos clientes.
              </p>
            </div>
          </div>
          
          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg shadow-md h-64">
                <img 
                  src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqoRMGTZJFtSv0URx_wZDRPfuOoQMVAD0jCcKrqFiNsejV9qnkbYH8JI-4BfzprrT8sBYcPf4gFJ7PqhG35etyeb2QqOUYDeqgVFZzWITHyQEPyMAgN9HnTVVMVVLoUfGeoG1Oefg=s680-w680-h510-rw" 
                  alt="Ótica Gouveia" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md h-40">
                <img 
                  src="/lovable-uploads/9897115a-b317-4c81-a85a-ea9454853a2a.png" 
                  alt="Lentes Varilux" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="overflow-hidden rounded-lg shadow-md h-40">
                <img 
                  src="/lovable-uploads/40a418ff-3ca5-4179-978b-9c5888b8d04b.png" 
                  alt="Varilux Ótica Gouveia" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md h-64">
                <img 
                  src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4noY_NH-0OfpPguT1ifB4Jrfp4cB6F6GcQL33ImhfTC611Xa_N7Abe2P4SY-RAWxbo1cwDC6kL_V5VNsJIQlbtO48Z_Y1BlPwLfCqa5O7QW1drwtY2QQg1znsvjK09nHvi1VhztAUw=s680-w680-h510-rw" 
                  alt="Nossa loja" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className={`mt-20 transition-all duration-1000 ease-out delay-300 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center mb-12">
            <span className="text-brand-red text-sm font-semibold uppercase tracking-wider">O QUE NOS MOVE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mt-2">
              Nossos Valores
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-brand-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Confiança</h3>
              <p className="text-brand-gray-700">
                Construímos relacionamentos duradouros baseados em transparência e honestidade com nossos clientes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-brand-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Qualidade</h3>
              <p className="text-brand-gray-700">
                Trabalhamos apenas com produtos e serviços de excelência para garantir a satisfação e bem-estar visual.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-brand-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Atendimento</h3>
              <p className="text-brand-gray-700">
                Tratamos cada cliente de forma personalizada, atendendo suas necessidades específicas com atenção e dedicação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

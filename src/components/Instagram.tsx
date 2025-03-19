
import { useInView } from '../utils/animations';
import { Instagram as InstagramIcon } from 'lucide-react';

const Instagram = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-brand-gray-100" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="section-container">
        <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="text-brand-red text-sm font-semibold uppercase tracking-wider">SIGA-NOS NAS REDES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mt-2">
            Instagram <span className="text-brand-red">@gouveiaoticacuritiba</span>
          </h2>
          <p className="text-brand-gray-700 max-w-2xl mx-auto mt-4">
            Acompanhe nossas novidades, promoções e dicas sobre saúde ocular.
          </p>
        </div>

        <div className={`transition-all duration-1000 ease-out delay-200 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Instagram Embed */}
          <div className="flex justify-center w-full">
            <iframe 
              src="https://www.instagram.com/gouveiaoticacuritiba/embed" 
              width="100%" 
              height="750" 
              frameBorder="0" 
              scrolling="no" 
              allowTransparency={true}
              title="Instagram Feed de @gouveiaoticacuritiba"
              className="max-w-4xl mx-auto border-none"
            ></iframe>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://www.instagram.com/gouveiaoticacuritiba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-md bg-brand-red text-white hover:bg-opacity-90 transition-colors shadow-md"
            >
              <InstagramIcon className="w-5 h-5 mr-2" />
              Seguir no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;

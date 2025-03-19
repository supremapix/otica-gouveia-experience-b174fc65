
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
          {/* Instagram Feed with placeholder images instead of embed */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-lg shadow-sm border border-brand-gray-200 bg-white">
                <img 
                  src={`https://images.unsplash.com/photo-${1570000000000 + item * 1000}?q=80&w=300&h=300&auto=format&fit=crop`} 
                  alt={`Instagram post ${item}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
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


import { useInView } from '../utils/animations';
import { Instagram as InstagramIcon, Facebook as FacebookIcon } from 'lucide-react';

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
          {/* Instagram Embed with proper mobile support */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-4xl mx-auto overflow-hidden" style={{ height: '750px', maxHeight: '90vh' }}>
              <iframe 
                src="https://www.instagram.com/gouveiaoticacuritiba/embed" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                allowTransparency="true"
                title="Instagram Feed de @gouveiaoticacuritiba"
                className="border-none"
              ></iframe>
            </div>
          </div>
          
          <div className="text-center mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://www.instagram.com/gouveiaoticacuritiba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand-red text-white hover:bg-opacity-90 transition-colors shadow-md"
            >
              <InstagramIcon className="w-5 h-5 mr-2" />
              Seguir no Instagram
            </a>
            
            <a 
              href="https://www.facebook.com/profile.php?id=61560224348183"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-opacity-90 transition-colors shadow-md"
            >
              <FacebookIcon className="w-5 h-5 mr-2" />
              Seguir no Facebook
            </a>
          </div>
        </div>
        
        {/* Facebook Section */}
        <div className={`mt-16 transition-all duration-1000 ease-out delay-300 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-gray-900">
              Facebook <span className="text-blue-600">Ótica Gouveia</span>
            </h3>
            <p className="text-brand-gray-700 max-w-2xl mx-auto mt-2">
              Confira promoções exclusivas e novidades também em nossa página no Facebook.
            </p>
          </div>
          
          <div className="flex justify-center w-full">
            <div className="w-full max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-sm" style={{ maxHeight: '600px', overflowY: 'auto' }}>
              <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61560224348183&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                width="100%" 
                height="500" 
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no" 
                frameBorder="0" 
                allow="encrypted-media"
                title="Facebook Page Ótica Gouveia"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;


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
          <div className="flex justify-center w-full">
            <div className="w-full max-w-[560px] mx-auto rounded-2xl shadow-xl ring-1 ring-pink-100 bg-gradient-to-br from-pink-50 via-white to-orange-50 p-3 sm:p-5">
              <div className="rounded-xl overflow-hidden bg-white">
                <iframe
                  src="https://www.instagram.com/gouveiaoticacuritiba/embed/"
                  className="block w-full"
                  height={620}
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  loading="lazy"
                  title="Instagram Feed de @gouveiaoticacuritiba"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/gouveiaoticacuritiba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white text-base md:text-lg font-semibold hover:opacity-90 transition-opacity shadow-md min-h-[56px]"
            >
              <InstagramIcon className="w-5 h-5 mr-2" />
              Seguir no Instagram
            </a>
          </div>
        </div>

        
        {/* Facebook Section */}
        <div className={`mt-16 transition-all duration-1000 ease-out delay-300 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center mb-8">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">NOSSA PÁGINA</span>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mt-2">
              Facebook <span className="text-blue-600">Ótica Gouveia</span>
            </h3>
            <p className="text-brand-gray-700 max-w-2xl mx-auto mt-4 text-base md:text-lg">
              Confira promoções exclusivas e novidades também em nossa página no Facebook.
            </p>
          </div>

          <div className="flex justify-center w-full">
            <div className="w-full max-w-[560px] mx-auto rounded-2xl shadow-xl ring-1 ring-blue-100 bg-gradient-to-br from-blue-50 to-white p-3 sm:p-5">
              <div className="rounded-xl overflow-hidden bg-white">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61560224348183&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                  className="block w-full"
                  height={600}
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allow="encrypted-media"
                  title="Facebook Page Ótica Gouveia"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.facebook.com/profile.php?id=61560224348183"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-blue-600 text-white text-base md:text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md min-h-[56px]"
            >
              <FacebookIcon className="w-5 h-5 mr-2" />
              Visitar nossa página no Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;

import { MapPin, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../utils/animations';

const LocalizacoesBairros = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const localizacoes = [
    {
      bairro: "Pinheirinho",
      titulo: "Ótica Gouveia Pinheirinho",
      descricao: "Sua ótica de confiança no coração do Pinheirinho. Atendimento premium com as melhores marcas.",
      destacos: ["Marcas Premium", "Atendimento Especializado", "Qualidade Garantida"],
      link: "/loja-de-oculos-no-pinheirinho",
      cor: "from-blue-500 to-blue-600"
    },
    {
      bairro: "Sítio Cercado", 
      titulo: "Ótica Gouveia Sítio Cercado",
      descricao: "Cuidando da visão das famílias com carinho, qualidade e preços justos para toda comunidade.",
      destacos: ["Preços Populares", "Parcelamento Facilitado", "Atendimento Humanizado"],
      link: "/otica-sitio-cercado",
      cor: "from-green-500 to-green-600"
    },
    {
      bairro: "Umbará",
      titulo: "Centro de Excelência Umbará",
      descricao: "Nossa unidade principal com tecnologia de ponta e atendimento VIP diferenciado.",
      destacos: ["Tecnologia Alemã", "Atendimento VIP", "Equipamentos Modernos"],
      link: "/otica-umbara",
      cor: "from-red-500 to-red-600",
      destaque: true
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-brand-gray-50 to-white" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="text-brand-red text-sm font-semibold uppercase tracking-wider">NOSSAS UNIDADES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mt-2 mb-4">
            Ótica Gouveia em <span className="text-brand-red">Curitiba</span>
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
            Encontre a unidade mais próxima de você e descubra nossos serviços especializados para cada região
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out delay-200 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {localizacoes.map((local, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                local.destaque ? 'ring-2 ring-brand-red/20 relative' : ''
              }`}
            >
              {local.destaque && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-brand-red text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star size={12} />
                    PRINCIPAL
                  </div>
                </div>
              )}
              
              <div className={`h-32 bg-gradient-to-r ${local.cor} relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={16} />
                    <span className="text-sm font-medium opacity-90">{local.bairro}</span>
                  </div>
                  <h3 className="text-lg font-bold">{local.titulo}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-brand-gray-600 mb-6 leading-relaxed">
                  {local.descricao}
                </p>

                <div className="space-y-2 mb-6">
                  {local.destacos.map((destaque, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-brand-red rounded-full"></div>
                      <span className="text-sm text-brand-gray-700">{destaque}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to={local.link}
                  className="group w-full bg-brand-red hover:bg-brand-red/90 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Conhecer Unidade
                  <ArrowRight 
                    size={16} 
                    className="group-hover:translate-x-1 transition-transform" 
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 ease-out delay-400 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-red/10">
            <h3 className="text-2xl font-bold text-brand-gray-900 mb-4">
              Atendemos toda região de Curitiba
            </h3>
            <p className="text-brand-gray-600 mb-6 max-w-2xl mx-auto">
              Além das nossas unidades principais, nossa equipe de especialistas também atende 
              bairros vizinhos como Capão Raso, Xaxim, Augusta, Cidade Industrial, Ganchinho, 
              Tatuquara, Cajuru, Uberaba, Portão e Água Verde.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Capão Raso", "Xaxim", "Augusta", "Cidade Industrial", 
                "Ganchinho", "Tatuquara", "Cajuru", "Uberaba", "Portão", "Água Verde"
              ].map((bairro, idx) => (
                <span 
                  key={idx}
                  className="bg-brand-gray-100 text-brand-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {bairro}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalizacoesBairros;

import { useState } from 'react';
import { useInView } from '../utils/animations';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Products = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');

  // Product data
  const products = [
    {
      id: 1,
      name: "Ray-Ban Aviator",
      category: "masculino",
      image: "/lovable-uploads/354f71c7-bae6-44ac-ac04-89d830bbdff7.png", // Updated to Ray-Ban Aviator image
      description: "Clássico e atemporal, o modelo Aviator da Ray-Ban é ideal para quem busca elegância.",
      price: "A partir de R$ 599,00"
    },
    {
      id: 2,
      name: "Ana Hickmann Collection",
      category: "feminino",
      image: "/lovable-uploads/d3ddb8a3-b37c-478e-a768-7517a36330e5.png", // Swapped: now using Disney image for Ana Hickmann
      description: "Armações femininas com design moderno e sofisticado assinadas por Ana Hickmann.",
      price: "A partir de R$ 499,00"
    },
    {
      id: 3,
      name: "Disney Pixar Kids",
      category: "infantil",
      image: "/lovable-uploads/93936557-38ff-45d9-9298-fca9a24ce61d.png", // Swapped: now using Ana Hickmann image for Disney
      description: "Armações coloridas e divertidas com personagens da Disney e Pixar para as crianças.",
      price: "A partir de R$ 359,00"
    },
    {
      id: 4,
      name: "Victor Hugo Collection",
      category: "feminino",
      image: "/lovable-uploads/e2d4b47a-9617-4e72-9f26-50170c88e9a0.png", // Keeping Visão Natural image
      description: "Elegância e sofisticação em cada detalhe das armações Victor Hugo.",
      price: "A partir de R$ 699,00"
    },
    {
      id: 5,
      name: "Sabrina Sato Eyewear",
      category: "feminino",
      image: "/lovable-uploads/60aacd8d-b40d-4235-a564-379310b71e6a.png", // Keeping Jean Pierre image
      description: "Modelos modernos e cheios de personalidade da linha Sabrina Sato.",
      price: "A partir de R$ 459,00"
    },
    {
      id: 6,
      name: "Lentes Varilux Liberty",
      category: "lentes",
      image: "/lovable-uploads/90da4304-f85c-40df-b3cb-e1e816376757.png", // Keeping the same as before
      description: "Lentes multifocais de alta qualidade para visão de perto e longe.",
      price: "A partir de R$ 899,00"
    }
  ];

  // Filter products by category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Modal state
  const [selectedProduct, setSelectedProduct] = useState<null | typeof products[0]>(null);

  return (
    <section id="products" className="section-padding bg-white" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="section-container">
        <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="text-brand-red text-sm font-semibold uppercase tracking-wider">CATÁLOGO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mt-2">
            Nossas Coleções
          </h2>
          <p className="text-brand-gray-700 max-w-2xl mx-auto mt-4">
            Explore nossa seleção exclusiva de armações e lentes das melhores marcas do mercado, para todos os estilos e necessidades.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 transition-all duration-1000 ease-out delay-200 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === 'all' 
                ? 'bg-brand-red text-white shadow-md' 
                : 'bg-brand-gray-100 text-brand-gray-700 hover:bg-brand-gray-200'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setActiveCategory('masculino')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === 'masculino' 
                ? 'bg-brand-red text-white shadow-md' 
                : 'bg-brand-gray-100 text-brand-gray-700 hover:bg-brand-gray-200'
            }`}
          >
            Masculino
          </button>
          <button
            onClick={() => setActiveCategory('feminino')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === 'feminino' 
                ? 'bg-brand-red text-white shadow-md' 
                : 'bg-brand-gray-100 text-brand-gray-700 hover:bg-brand-gray-200'
            }`}
          >
            Feminino
          </button>
          <button
            onClick={() => setActiveCategory('infantil')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === 'infantil' 
                ? 'bg-brand-red text-white shadow-md' 
                : 'bg-brand-gray-100 text-brand-gray-700 hover:bg-brand-gray-200'
            }`}
          >
            Infantil
          </button>
          <button
            onClick={() => setActiveCategory('lentes')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === 'lentes' 
                ? 'bg-brand-red text-white shadow-md' 
                : 'bg-brand-gray-100 text-brand-gray-700 hover:bg-brand-gray-200'
            }`}
          >
            Lentes
          </button>
        </div>

        {/* Product Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-brand-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-brand-gray-900">{product.name}</h3>
                  <span className="bg-brand-red/10 text-brand-red text-xs px-2 py-1 rounded-full font-medium">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </span>
                </div>
                <p className="text-brand-gray-700 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-brand-gray-900 font-medium">{product.price}</span>
                  <button 
                    className="text-brand-red text-sm font-medium hover:underline"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open("https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20tenho%20interesse%20no%20produto%20" + product.name + ".%20Pode%20me%20ajudar?", "_blank");
                    }}
                  >
                    Saber mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brands Section */}
        <div className={`mt-20 transition-all duration-1000 ease-out delay-300 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center mb-8">
            <span className="text-brand-red text-sm font-semibold uppercase tracking-wider">PARCEIROS</span>
            <h3 className="text-2xl font-bold text-brand-gray-900 mt-2">
              Marcas Renomadas
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 items-center py-8">
            <div className="flex items-center justify-center h-16 w-40 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src="/lovable-uploads/e1fdf903-0fb7-4358-98e8-8106df0f6d1c.png" 
                alt="Ray-Ban Logo" 
                className="h-auto max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-40 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src="/lovable-uploads/57d4695c-9e6f-43d1-81bf-653d3e2cf9be.png" 
                alt="Ana Hickmann Logo" 
                className="h-auto max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-40 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src="/lovable-uploads/010e742a-6f6d-4d89-b93d-c68042fd7bf2.png" 
                alt="Victor Hugo Logo" 
                className="h-auto max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-40 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src="/lovable-uploads/3cf8a689-5aec-44e9-8da2-6fa72de0c834.png" 
                alt="Sabrina Sato Logo" 
                className="h-auto max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-40 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src="/lovable-uploads/90da4304-f85c-40df-b3cb-e1e816376757.png" 
                alt="Varilux Logo" 
                className="h-auto max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-40 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src="/lovable-uploads/179e193c-db7a-4d72-9e5d-83ea7dfa63ac.png" 
                alt="Bausch & Lomb Logo" 
                className="h-auto max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-40 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src="/lovable-uploads/2c1f65c4-9adc-49d1-ad2f-ec9b7af09704.png" 
                alt="Mormaii Logo" 
                className="h-auto max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-16 w-40 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src="/lovable-uploads/6005de4b-e632-4ca4-8d3f-40f769c0b650.png" 
                alt="Jean Pierre Logo" 
                className="h-auto max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-16 bg-brand-gray-100 rounded-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-1000 ease-out delay-400 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ea384c" d="M40.8,-67.7C55.6,-60.5,71.9,-54.3,79.5,-42.3C87.2,-30.3,86.1,-12.4,81.5,3.4C76.9,19.2,68.8,32.8,59.8,45.1C50.8,57.4,40.8,68.4,28.2,72.6C15.5,76.9,0.2,74.5,-13.7,70.1C-27.5,65.7,-40,59.3,-52.3,50.4C-64.7,41.5,-76.9,30.1,-80.7,16.2C-84.5,2.3,-79.8,-14.1,-70.9,-25.6C-62,-37.1,-49,-43.8,-36.7,-52.2C-24.4,-60.6,-12.2,-70.7,0.5,-71.5C13.2,-72.3,26.1,-74.9,40.8,-67.7Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-gray-900 mb-4">
                Promoção Especial para<br/>
                <span className="text-brand-red">Alunos e Professores</span>
              </h3>
              <p className="text-brand-gray-700 mb-6">
                Aproveite 50% de desconto em todas as armações até o fim do estoque! Promoção válida mediante apresentação de documentação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20promo%C3%A7%C3%A3o%20para%20alunos%20e%20professores.%20Pode%20me%20ajudar?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Aproveitar Promoção
                </a>
                <a href="#contact" className="btn-secondary">
                  Saiba Mais
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center shadow-md">
              <div className="text-center">
                <span className="block text-4xl md:text-6xl font-bold text-brand-red">50%</span>
                <span className="text-brand-gray-800 font-medium text-sm md:text-base">de desconto</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 md:max-w-md">
                <img 
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6 md:p-8 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-gray-900 mb-1">{selectedProduct.name}</h3>
                    <span className="bg-brand-red/10 text-brand-red text-xs px-2 py-1 rounded-full font-medium">
                      {selectedProduct.category.charAt(0).toUpperCase() + selectedProduct.category.slice(1)}
                    </span>
                  </div>
                  <button 
                    className="text-brand-gray-500 hover:text-brand-gray-700"
                    onClick={() => setSelectedProduct(null)}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-brand-gray-700 mb-4">{selectedProduct.description}</p>
                
                <div className="mt-4 mb-8">
                  <h4 className="text-sm font-medium text-brand-gray-500 mb-2">Características:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-brand-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-brand-gray-700">Design exclusivo</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-brand-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-brand-gray-700">Materiais de alta qualidade</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-brand-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-brand-gray-700">Conforto garantido</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold text-brand-gray-900">{selectedProduct.price}</span>
                    <span className="text-brand-gray-700 text-sm">10x sem juros</span>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={`https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20tenho%20interesse%20no%20produto%20${selectedProduct.name}.%20Pode%20me%20ajudar?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1"
                    >
                      Solicitar Informações
                    </a>
                    <button 
                      className="btn-secondary flex-shrink-0"
                      onClick={() => setSelectedProduct(null)}
                    >
                      Voltar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;

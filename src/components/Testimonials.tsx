
import { useState, useEffect } from 'react';
import { useInView } from '../utils/animations';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Cliente desde 2019",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&h=250&auto=format&fit=crop",
      quote: "A equipe da Ótica Gouveia me atendeu com muita atenção e paciência. Os óculos ficaram perfeitos e a qualidade das lentes é excepcional. Super recomendo!"
    },
    {
      id: 2,
      name: "João Oliveira",
      role: "Cliente desde 2020",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=250&h=250&auto=format&fit=crop",
      quote: "Meus filhos adoraram os óculos infantis da Disney. O atendimento foi muito atencioso, principalmente na hora de explicar como cuidar dos óculos. Ótima experiência."
    },
    {
      id: 3,
      name: "Ana Souza",
      role: "Cliente desde 2018",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&auto=format&fit=crop",
      quote: "As lentes multifocais que comprei na Ótica Gouveia são incríveis! A adaptação foi muito mais rápida do que eu esperava, e a equipe me deu todo o suporte necessário."
    },
    {
      id: 4,
      name: "Pedro Santos",
      role: "Cliente desde 2021",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&h=250&auto=format&fit=crop",
      quote: "Como professor, aproveitei o desconto especial e consegui renovar meus óculos com um preço incrível. O serviço e a qualidade são excelentes!"
    },
    {
      id: 5,
      name: "Carla Mendes",
      role: "Cliente desde 2019",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&h=250&auto=format&fit=crop",
      quote: "Já fiz exames de vista em várias óticas, mas a tecnologia e a precisão do exame na Ótica Gouveia são realmente diferenciais. Minha visão nunca esteve tão nítida!"
    },
    {
      id: 6,
      name: "Roberto Almeida",
      role: "Cliente desde 2022",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=250&h=250&auto=format&fit=crop",
      quote: "Minha esposa ficou encantada com a variedade de armações femininas. O atendimento personalizado e as facilidades de pagamento fizeram toda a diferença na nossa escolha."
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (isInView) {
        setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isInView, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-brand-gray-100" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="section-container">
        <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="text-brand-red text-sm font-semibold uppercase tracking-wider">O QUE DIZEM NOSSOS CLIENTES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mt-2">
            Depoimentos
          </h2>
          <p className="text-brand-gray-700 max-w-2xl mx-auto mt-4">
            A satisfação de nossos clientes é o nosso maior orgulho. Confira alguns depoimentos de quem já experimentou nossos serviços.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-all duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                    <div className="flex items-start mb-6">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-brand-gray-900">{testimonial.name}</h3>
                        <p className="text-brand-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                      <div className="ml-auto">
                        <Quote className="w-8 h-8 text-brand-red opacity-20" />
                      </div>
                    </div>
                    <p className="text-brand-gray-700 italic">"{testimonial.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-2">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-brand-gray-200 shadow-sm flex items-center justify-center text-brand-gray-700 hover:text-brand-red transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full mx-1 transition-all ${
                  currentIndex === index ? 'bg-brand-red w-6' : 'bg-brand-gray-300'
                }`}
              />
            ))}
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-brand-gray-200 shadow-sm flex items-center justify-center text-brand-gray-700 hover:text-brand-red transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera } from 'lucide-react';

interface ImageGalleryProps {
  neighborhoodName: string;
}

const galleryImages = [
  {
    src: "/lovable-uploads/otica-gouveia-fachada.png",
    alt: "Fachada da Ótica Gouveia",
    title: "Nossa Loja"
  },
  {
    src: "/lovable-uploads/otica-gouveia-expositor.webp",
    alt: "Expositor de armações",
    title: "Expositores Modernos"
  },
  {
    src: "/lovable-uploads/otica-gouveia-armacoes.webp",
    alt: "Armações de grau",
    title: "Armações de Grau"
  },
  {
    src: "/lovable-uploads/otica-gouveia-vitrine.webp",
    alt: "Vitrine de óculos",
    title: "Vitrine Premium"
  },
  {
    src: "/lovable-uploads/otica-gouveia-rayban.webp",
    alt: "Óculos Ray-Ban",
    title: "Ray-Ban Original"
  },
  {
    src: "/lovable-uploads/otica-gouveia-esportivos.webp",
    alt: "Óculos esportivos",
    title: "Linha Esportiva"
  },
  {
    src: "/lovable-uploads/otica-gouveia-carolina-herrera.png",
    alt: "Armação Carolina Herrera sofisticada com acabamento refinado",
    title: "Carolina Herrera"
  }
];

const ImageGallery: React.FC<ImageGalleryProps> = ({ neighborhoodName }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: index * slideWidth * 0.85,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % galleryImages.length;
    scrollToSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + galleryImages.length) % galleryImages.length;
    scrollToSlide(prev);
  };

  // Touch/Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Update current slide based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const slideWidth = sliderRef.current.offsetWidth * 0.85;
        const newSlide = Math.round(sliderRef.current.scrollLeft / slideWidth);
        setCurrentSlide(newSlide);
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            <span>Galeria de Fotos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Conheça Nossa Loja e Produtos
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Visite a Ótica Gouveia e descubra as melhores opções em armações e lentes para você no {neighborhoodName}
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-primary hover:text-white text-foreground p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-primary hover:text-white text-foreground p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-8 sm:px-12 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[75vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw] xl:w-[22vw] snap-center"
              >
                <div
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ZoomIn className="w-5 h-5 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <a
            href="https://wa.me/554199161663?text=Olá! Gostaria de conhecer mais armações da Ótica Gouveia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Ver Mais no WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary p-2 transition-colors z-50"
            aria-label="Fechar"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary p-2 sm:p-3 bg-white/10 rounded-full transition-all hover:scale-110"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary p-2 sm:p-3 bg-white/10 rounded-full transition-all hover:scale-110"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          
          <div className="max-w-5xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white font-bold text-xl">{galleryImages[currentImage].title}</h3>
              <p className="text-white/70 mt-1">{galleryImages[currentImage].alt}</p>
              <p className="text-white/50 text-sm mt-2">{currentImage + 1} / {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;

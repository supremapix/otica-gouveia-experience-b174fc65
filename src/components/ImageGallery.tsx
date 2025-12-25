import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

interface ImageGalleryProps {
  neighborhoodName: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ neighborhoodName }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images: GalleryImage[] = [
    {
      src: '/lovable-uploads/otica-gouveia-fachada.png',
      alt: `Fachada da Ótica Gouveia próximo ao ${neighborhoodName}`,
      title: 'Fachada da Loja'
    },
    {
      src: '/lovable-uploads/2c54c0af-f957-4477-b0ec-ea572976132f.png',
      alt: `Interior da Ótica Gouveia com expositores de óculos para ${neighborhoodName}`,
      title: 'Amplo Showroom'
    },
    {
      src: '/lovable-uploads/9cb88b28-e372-46cb-9604-f84bf0bed383.png',
      alt: `Armações de óculos de grau disponíveis para moradores do ${neighborhoodName}`,
      title: 'Armações de Grau'
    },
    {
      src: '/lovable-uploads/2c1f65c4-9adc-49d1-ad2f-ec9b7af09704.png',
      alt: `Óculos de sol originais para clientes do ${neighborhoodName}`,
      title: 'Óculos de Sol'
    },
    {
      src: '/lovable-uploads/3cf8a689-5aec-44e9-8da2-6fa72de0c834.png',
      alt: `Equipamento de exame de vista para atender ${neighborhoodName}`,
      title: 'Exame de Vista'
    },
    {
      src: '/lovable-uploads/60aacd8d-b40d-4235-a564-379310b71e6a.png',
      alt: `Atendimento personalizado para clientes do ${neighborhoodName}`,
      title: 'Atendimento Especializado'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conheça Nossa Loja e Produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja nosso espaço preparado para atender você do {neighborhoodName} com conforto e qualidade
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory no-scrollbar">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="relative flex-shrink-0 w-[280px] aspect-square rounded-xl overflow-hidden snap-center group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-white font-semibold">{image.title}</span>
                </div>
                <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-foreground" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                title={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white text-lg font-semibold">{image.title}</span>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                <ZoomIn className="w-5 h-5 text-foreground" />
              </div>
            </button>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="https://wa.me/554199161663?text=Olá! Gostaria de ver o catálogo completo de armações."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Ver Catálogo Completo
          </a>
          <a
            href="https://wa.me/554199161663?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 border border-border"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-none">
          <div className="relative">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <img
              src={images[selectedIndex]?.src}
              alt={images[selectedIndex]?.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-semibold text-center">
                {images[selectedIndex]?.title}
              </h3>
              <p className="text-white/70 text-sm text-center mt-2">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ImageGallery;

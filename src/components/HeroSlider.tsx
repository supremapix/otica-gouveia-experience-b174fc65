import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '../assets/hero-1.jpg.asset.json';
import hero2 from '../assets/hero-2.jpg.asset.json';

const slides = [
  { image: hero1.url, alt: 'Ótica Gouveia — Sua visão, nossa essência' },
  { image: hero2.url, alt: 'Ótica Gouveia — Seu olhar, nossa paixão' },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Banner principal Ótica Gouveia"
    >
      <div className="relative w-full aspect-[1905/798] max-h-[80vh] min-h-[260px]">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.image}
            alt={s.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center text-primary transition-all hover:scale-110"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center text-primary transition-all hover:scale-110"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === current ? 'w-10 bg-primary' : 'w-4 bg-white/80 hover:bg-white'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;

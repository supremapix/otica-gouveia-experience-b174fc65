import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '../assets/hero-1.webp';
import hero2 from '../assets/hero-2.webp';
import hero3 from '../assets/hero-3.webp';
import heroMobile1 from '../assets/hero-mobile-1.webp';
import heroMobile2 from '../assets/hero-mobile-2.webp';
import heroMobile3 from '../assets/hero-mobile-3.webp';

const slides = [
  {
    desktop: hero1,
    mobile: heroMobile1,
    alt: 'Ótica Gouveia — Sua visão, nossa essência',
  },
  {
    desktop: hero2,
    mobile: heroMobile2,
    alt: 'Ótica Gouveia — Seu olhar, nossa paixão',
  },
  {
    desktop: hero3,
    mobile: heroMobile3,
    alt: 'Ótica Gouveia — Mais que óculos, confiança que se vê',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (idx === current) return;
    setPrevIndex(current);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    setPrevIndex(current);
    setCurrent((p) => (p + 1) % slides.length);
  }, [current]);

  const prev = useCallback(() => {
    setPrevIndex(current);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, [current]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Elegant transition: gentle cross-fade with subtle Ken Burns zoom.
  // Active slide fades in and slowly zooms out; previous slide fades out softly.
  const getClasses = (isActive: boolean, wasPrev: boolean, base: string) => {
    if (isActive) {
      return `${base} opacity-100 scale-100 z-20`;
    }
    if (wasPrev) {
      return `${base} opacity-0 scale-[1.04] z-10`;
    }
    return `${base} opacity-0 scale-[1.06] z-0`;
  };

  const transitionBase =
    'will-change-[opacity,transform] transition-[opacity,transform] duration-[1800ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]';

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-primary"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Banner principal Ótica Gouveia"
    >
      {/* Mobile */}
      <div className="relative w-full md:hidden aspect-[780/1645]">
        {slides.map((s, i) => {
          const isActive = i === current;
          const wasPrev = i === prevIndex;
          return (
            <img
              key={`m-${i}`}
              src={s.mobile}
              alt={s.alt}
              width={780}
              height={1645}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'auto'}
              decoding={i === 0 ? 'sync' : 'async'}
              className={getClasses(
                isActive,
                wasPrev,
                `${transitionBase} absolute inset-0 w-full h-full object-cover`
              )}
            />
          );
        })}
        <SliderControls onPrev={prev} onNext={next} />
      </div>

      {/* Desktop */}
      <div className="relative w-full hidden md:block aspect-[1905/798] max-h-[80vh] min-h-[300px]">
        {slides.map((s, i) => {
          const isActive = i === current;
          const wasPrev = i === prevIndex;
          return (
            <img
              key={`d-${i}`}
              src={s.desktop}
              alt={s.alt}
              width={1600}
              height={670}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'auto'}
              decoding={i === 0 ? 'sync' : 'async'}
              className={getClasses(
                isActive,
                wasPrev,
                `${transitionBase} absolute inset-0 w-full h-full object-cover`
              )}
            />
          );
        })}
        <SliderControls onPrev={prev} onNext={next} />
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? 'w-10 bg-white' : 'w-3 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

const SliderControls = ({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) => (
  <>
    <button
      onClick={onPrev}
      className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/85 hover:bg-white shadow-lg flex items-center justify-center text-primary transition-all hover:scale-110"
      aria-label="Slide anterior"
    >
      <ChevronLeft className="w-7 h-7" />
    </button>
    <button
      onClick={onNext}
      className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/85 hover:bg-white shadow-lg flex items-center justify-center text-primary transition-all hover:scale-110"
      aria-label="Próximo slide"
    >
      <ChevronRight className="w-7 h-7" />
    </button>
  </>
);

export default HeroSlider;

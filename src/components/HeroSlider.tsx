import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '../assets/hero-1.jpg.asset.json';
import hero2 from '../assets/hero-2.jpg.asset.json';
import heroMobile1 from '../assets/hero-mobile-1.jpg.asset.json';
import heroMobile2 from '../assets/hero-mobile-2.jpg.asset.json';

const slides = [
  {
    desktop: hero1.url,
    mobile: heroMobile1.url,
    alt: 'Ótica Gouveia — Sua visão, nossa essência',
  },
  {
    desktop: hero2.url,
    mobile: heroMobile2.url,
    alt: 'Ótica Gouveia — Seu olhar, nossa paixão',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((idx: number) => {
    setPrevIndex((p) => {
      // capture current as previous
      return current;
    });
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
    const timer = setInterval(next, 6500);
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
      {/* Mobile: portrait aspect to fit vertical creatives */}
      <div className="relative w-full md:hidden aspect-[864/1872] max-h-[88vh] min-h-[420px]">
        {slides.map((s, i) => {
          const isActive = i === current;
          const wasPrev = i === prevIndex;
          return (
            <img
              key={`m-${i}`}
              src={s.mobile}
              alt={s.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              className={`absolute inset-0 w-full h-full object-cover will-change-transform transition-all duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] ${
                isActive
                  ? 'opacity-100 scale-100 z-10'
                  : wasPrev
                  ? 'opacity-0 scale-110 z-0'
                  : 'opacity-0 scale-105 z-0'
              }`}
            />
          );
        })}
        <SliderControls current={current} count={slides.length} onPrev={prev} onNext={next} onGo={goTo} />
      </div>

      {/* Desktop: original wide aspect */}
      <div className="relative w-full hidden md:block aspect-[1905/798] max-h-[80vh] min-h-[300px]">
        {slides.map((s, i) => {
          const isActive = i === current;
          const wasPrev = i === prevIndex;
          return (
            <img
              key={`d-${i}`}
              src={s.desktop}
              alt={s.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              className={`absolute inset-0 w-full h-full object-cover will-change-transform transition-all duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] ${
                isActive
                  ? 'opacity-100 scale-100 z-10'
                  : wasPrev
                  ? 'opacity-0 scale-110 z-0'
                  : 'opacity-0 scale-105 z-0'
              }`}
            />
          );
        })}
        <SliderControls current={current} count={slides.length} onPrev={prev} onNext={next} onGo={goTo} />
      </div>
    </section>
  );
};

const SliderControls = ({
  current,
  count,
  onPrev,
  onNext,
  onGo,
}: {
  current: number;
  count: number;
  onPrev: () => void;
  onNext: () => void;
  onGo: (i: number) => void;
}) => (
  <>
    <button
      onClick={onPrev}
      className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/85 hover:bg-white shadow-lg flex items-center justify-center text-primary transition-all hover:scale-110"
      aria-label="Slide anterior"
    >
      <ChevronLeft className="w-7 h-7" />
    </button>
    <button
      onClick={onNext}
      className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/85 hover:bg-white shadow-lg flex items-center justify-center text-primary transition-all hover:scale-110"
      aria-label="Próximo slide"
    >
      <ChevronRight className="w-7 h-7" />
    </button>
    <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onGo(i)}
          className={`h-2 rounded-full transition-all duration-500 ${
            i === current ? 'w-10 bg-primary' : 'w-4 bg-white/80 hover:bg-white'
          }`}
          aria-label={`Slide ${i + 1}`}
        />
      ))}
    </div>
  </>
);

export default HeroSlider;

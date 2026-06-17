import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '../assets/hero-1.webp';
import hero2 from '../assets/hero-2.webp';
import heroMobile1 from '../assets/hero-mobile-1.webp';
import heroMobile2 from '../assets/hero-mobile-2.webp';

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
    const timer = setInterval(next, 6500);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Impactful transition: active reveals via clip-path from right + zoom-out;
  // previous exits with zoom-in + blur + fade.
  const getClasses = (isActive: boolean, wasPrev: boolean, base: string) => {
    if (isActive) {
      return `${base} opacity-100 scale-100 blur-0 z-20 [clip-path:inset(0_0_0_0)]`;
    }
    if (wasPrev) {
      return `${base} opacity-0 scale-[1.15] blur-md z-10 [clip-path:inset(0_0_0_0)]`;
    }
    return `${base} opacity-0 scale-105 blur-sm z-0 [clip-path:inset(0_100%_0_0)]`;
  };

  const transitionBase =
    'will-change-transform transition-all duration-[1400ms] ease-[cubic-bezier(.77,0,.18,1)]';

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

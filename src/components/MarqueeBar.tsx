import { useRef, useEffect } from 'react';
import { Phone, MapPin, Tag } from 'lucide-react';

const marqueeItems = [
  { icon: Tag, text: 'PROMOÇÃO: Até 30% OFF em armações selecionadas' },
  { icon: MapPin, text: 'R. Nicola Pellanda, 1286 — Umbará, Curitiba' },
  { icon: Phone, text: 'WhatsApp: (41) 99161-0663' },
  { icon: Tag, text: 'Óculos de sol com proteção UV 400' },
  { icon: MapPin, text: 'Retire na loja — Atendimento com hora marcada' },
  { icon: Phone, text: 'Ligue agora: (41) 3629-9999' },
];

const MarqueeBar = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 0.8;

    const animate = () => {
      position -= speed;
      const firstChild = track.firstElementChild as HTMLElement;
      if (firstChild && Math.abs(position) >= firstChild.offsetWidth) {
        position += firstChild.offsetWidth;
        track.appendChild(firstChild);
      }
      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-primary py-4 md:py-5"
      role="marquee"
      aria-label="Informações da loja: promoções, endereço e telefone"
    >
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform"
        style={{ width: 'max-content' }}
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 md:gap-4 px-6 md:px-10"
            >
              <Icon className="w-5 h-5 md:w-7 md:h-7 text-white flex-shrink-0" strokeWidth={2.5} />
              <span className="text-white text-base md:text-xl font-bold tracking-wide">
                {item.text}
              </span>
              <span className="text-white/60 text-xl md:text-2xl font-light select-none" aria-hidden="true">
                |
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarqueeBar;

import { useCallback, useEffect, useState } from 'react';
import { Glasses, Sparkles, ShieldCheck, HeartHandshake, Ruler, Sun, Phone, MapPin } from 'lucide-react';
import hero1 from '../assets/hero-gouveia-1.webp';
import hero2 from '../assets/hero-gouveia-2.webp';
import hero3 from '../assets/hero-gouveia-3.webp';
import './desktop-hero.css';

type Slide = {
  image: string;
  alt: string;
  titleLines: string[];
  description: string;
  gradient: string;
  dark?: boolean;
  chips?: { label: string; icon: React.ElementType }[];
  list?: { label: string; icon: React.ElementType }[];
  footer?: string[];
};

const slides: Slide[] = [
  {
    image: hero1,
    alt: 'Ótica Gouveia — Sua visão, nossa essência',
    titleLines: ['SUA VISÃO,', 'NOSSA ESSÊNCIA.'],
    description: 'Cuidar da sua visão é enxergar um futuro melhor.',
    gradient:
      'linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.7) 35%, rgba(255,255,255,0.1) 70%)',
    chips: [
      { label: 'ESTILO', icon: Sparkles },
      { label: 'CONFORTO', icon: Glasses },
      { label: 'QUALIDADE', icon: ShieldCheck },
      { label: 'ATENDIMENTO ESPECIALIZADO', icon: HeartHandshake },
    ],
  },
  {
    image: hero2,
    alt: 'Ótica Gouveia — Seu olhar, nossa paixão',
    titleLines: ['SEU OLHAR,', 'NOSSA PAIXÃO!'],
    description: 'Na Gouveia, cada par de óculos é escolhido com cuidado.',
    gradient:
      'linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.7) 35%, rgba(255,255,255,0.1) 70%)',
    chips: [
      { label: 'ESTILO', icon: Sparkles },
      { label: 'CONFORTO', icon: Glasses },
      { label: 'QUALIDADE', icon: ShieldCheck },
    ],
  },
  {
    image: hero3,
    alt: 'Ótica Gouveia — Mais que óculos, confiança que se vê',
    titleLines: ['Mais que óculos,', 'confiança que se vê.'],
    description: 'SUA VISÃO, NOSSA PAIXÃO.',
    gradient: 'linear-gradient(90deg, rgba(139,0,0,0.85) 0%, rgba(139,0,0,0.3) 60%)',
    dark: true,
    list: [
      { label: 'Óculos de Sol e Grau', icon: Sun },
      { label: 'Medição digital Visioffice 3', icon: Ruler },
      { label: 'Qualidade, estilo e atendimento que você merece', icon: ShieldCheck },
    ],
    footer: ['(41) 3114-0663', '(41) 99161-0663', 'R. Nicola Pellanda, 1286 - Umbará'],
  },
];

const DesktopHeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section
      className="gouveia-hero-new"
      aria-label="Banner principal Ótica Gouveia"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="gh-stage">
        {slides.map((slide, i) => {
          const active = i === current;
          return (
            <div key={i} className={`gh-slide${active ? ' is-active' : ''}`} aria-hidden={!active}>
              <img
                src={slide.image}
                alt={slide.alt}
                className={`gh-img${active ? ' is-active' : ''}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                decoding={i === 0 ? 'sync' : 'async'}
              />
              <div className="gh-gradient" style={{ background: slide.gradient }} />

              <div className="gh-content">
                <div className={`gh-inner${slide.dark ? ' gh-dark' : ''}`}>
                  {active && (
                    <>
                      <h1 className="gh-title">
                        {slide.titleLines.map((line, li) => (
                          <span className="gh-line" key={li}>
                            {line.split(' ').map((word, wi) => (
                              <span className="gh-word-wrap" key={wi}>
                                <span
                                  className="gh-word"
                                  style={{ animationDelay: `${(li * 3 + wi) * 0.08}s` }}
                                >
                                  {word}
                                </span>
                              </span>
                            ))}
                          </span>
                        ))}
                      </h1>

                      <span className="gh-rule" />

                      <p className="gh-desc">{slide.description}</p>

                      {slide.chips && (
                        <ul className="gh-chips">
                          {slide.chips.map((c, ci) => {
                            const Icon = c.icon;
                            return (
                              <li
                                key={ci}
                                className="gh-chip"
                                style={{ animationDelay: `${1.2 + ci * 0.1}s` }}
                              >
                                <Icon className="gh-chip-icon" aria-hidden="true" />
                                <span>{c.label}</span>
                              </li>
                            );
                          })}
                        </ul>
                      )}

                      {slide.list && (
                        <ul className="gh-list">
                          {slide.list.map((c, ci) => {
                            const Icon = c.icon;
                            return (
                              <li
                                key={ci}
                                className="gh-list-item"
                                style={{ animationDelay: `${1.2 + ci * 0.1}s` }}
                              >
                                <Icon className="gh-chip-icon" aria-hidden="true" />
                                <span>{c.label}</span>
                              </li>
                            );
                          })}
                        </ul>
                      )}

                      {slide.footer && (
                        <div className="gh-footer" style={{ animationDelay: '1.6s' }}>
                          <Phone className="gh-chip-icon" aria-hidden="true" />
                          <span>{slide.footer[0]}</span>
                          <span className="gh-sep">|</span>
                          <span>{slide.footer[1]}</span>
                          <span className="gh-sep">|</span>
                          <MapPin className="gh-chip-icon" aria-hidden="true" />
                          <span>{slide.footer[2]}</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <div className="gh-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Ir para o slide ${i + 1}`}
              className={`gh-dot${i === current ? ' is-active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesktopHeroSlider;

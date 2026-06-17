import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import heroBg from '../assets/hero-faq.webp';

interface PageHeroProps {
  BadgeIcon: LucideIcon;
  badgeText: string;
  title: ReactNode;
  highlight?: string;
  description: string;
  children?: ReactNode;
}

/**
 * Hero institucional padronizado para páginas internas.
 * Paleta: vermelho (primary), branco e preto.
 */
const PageHero = ({ BadgeIcon, badgeText, title, highlight, description, children }: PageHeroProps) => {
  return (
    <section
      className="relative pt-32 pb-24 px-4 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlays para legibilidade e identidade vermelha/preta */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.65) 45%, hsla(0,75%,42%,0.78) 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          background:
            'radial-gradient(circle at 80% 50%, hsla(0,75%,42%,0.55) 0%, transparent 55%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-5 uppercase tracking-wider"
          style={{
            backgroundColor: 'rgba(255,255,255,0.12)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.25)',
            backdropFilter: 'blur(6px)',
          }}
        >
          <BadgeIcon className="w-4 h-4" /> {badgeText}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
          {title}
          {highlight && (
            <>
              {' '}
              <span className="text-white relative inline-block">
                {highlight}
                <span
                  className="absolute left-0 right-0 -bottom-1 h-1 rounded-full"
                  style={{ backgroundColor: '#fff' }}
                />
              </span>
            </>
          )}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
};

export default PageHero;

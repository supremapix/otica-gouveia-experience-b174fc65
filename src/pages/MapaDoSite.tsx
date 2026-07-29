import { Link } from 'react-router-dom';
import { Map, ChevronRight, MapPin, Wrench, BookOpen, Building2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import FloatingButtonsGroup from '../components/FloatingButtonsGroup';
import BackToTop from '../components/BackToTop';
import SEO from '../components/SEO';
import {
  institucionalRoutes,
  servicoRoutes,
  blogRoutes,
  localRoutes,
  SiteRoute,
} from '../data/siteRoutes';
import {
  SITE_URL,
  createBreadcrumbSchema,
  createWebPageSchema,
} from '../utils/schemas';

const Section = ({
  icon: Icon,
  title,
  routes,
  columns = 3,
}: {
  icon: typeof MapPin;
  title: string;
  routes: SiteRoute[];
  columns?: number;
}) => (
  <section className="mb-14">
    <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-6">
      <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary text-primary-foreground">
        <Icon className="w-6 h-6" />
      </span>
      {title}
      <span className="text-base font-medium text-muted-foreground">
        ({routes.length})
      </span>
    </h2>
    <ul
      className={`grid gap-x-6 gap-y-1 sm:grid-cols-2 ${
        columns === 3 ? 'lg:grid-cols-3' : ''
      }`}
    >
      {routes.map((route) => (
        <li key={route.path}>
          <Link
            to={route.path}
            className="group flex items-center gap-2 py-3 text-[18px] leading-[1.8] text-foreground hover:text-primary transition-colors border-b border-border/60"
          >
            <ChevronRight className="w-4 h-4 shrink-0 text-primary" />
            <span className="group-hover:underline">{route.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

const MapaDoSite = () => {
  const url = `${SITE_URL}/mapa-do-site`;
  const total =
    institucionalRoutes.length +
    servicoRoutes.length +
    blogRoutes.length +
    localRoutes.length;

  const structuredData = [
    createWebPageSchema({
      name: 'Mapa do Site | Ótica Gouveia Curitiba',
      description:
        'Índice completo com todas as páginas da Ótica Gouveia: institucional, serviços, blog e atendimento por bairro em Curitiba e região metropolitana.',
      url,
      primaryTopic: 'Ótica em Curitiba',
    }),
    createBreadcrumbSchema([
      { name: 'Início', url: SITE_URL },
      { name: 'Mapa do Site', url },
    ]),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Mapa do Site | Ótica Gouveia Curitiba"
        description="Índice completo das páginas da Ótica Gouveia: institucional, serviços, blog e atendimento por bairro em Curitiba e região metropolitana."
        keywords="mapa do site ótica gouveia, páginas ótica curitiba"
        canonicalUrl="/mapa-do-site"
        structuredData={{ '@context': 'https://schema.org', '@graph': structuredData }}
      />

      <Navbar />

      <PageHero
        BadgeIcon={Map}
        badgeText="Navegação"
        title="Mapa do"
        highlight="Site"
        description={`Todas as ${total} páginas da Ótica Gouveia reunidas em um único lugar, organizadas por tipo de conteúdo.`}
      />

      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <Section
          icon={Building2}
          title="Institucional"
          routes={institucionalRoutes}
        />
        <Section icon={Wrench} title="Serviços" routes={servicoRoutes} />
        <Section icon={BookOpen} title="Blog" routes={blogRoutes} />
        <Section
          icon={MapPin}
          title="Atendimento por bairro e cidade"
          routes={localRoutes}
        />
      </main>

      <Footer />
      <FloatingButtonsGroup />
      <BackToTop />
    </div>
  );
};

export default MapaDoSite;

import { LocalBusinessData } from '../components/EnhancedSEO/types';

export class SEOService {
  private static baseUrl = 'https://www.gouveiacuritiba.com.br';

  static generatePageTitle(location: string, service?: string): string {
    const base = `Ótica no ${location} - Curitiba | Ótica Gouveia`;
    if (service) {
      return `${service} no ${location} - ${base}`;
    }
    return base;
  }

  static generatePageDescription(location: string, service?: string): string {
    const base = `Ótica no ${location} com exames de vista gratuitos, armações de qualidade e lentes especializadas. Visite a Ótica Gouveia e tenha atendimento personalizado.`;
    if (service) {
      return `${service} no ${location}. ${base}`;
    }
    return base;
  }

  static generateKeywords(location: string, additionalKeywords: string[] = []): string {
    const baseKeywords = [
      `ótica no ${location.toLowerCase()}`,
      `óculos ${location}`,
      `exame de vista ${location}`,
      'ótica curitiba',
      'lentes de grau curitiba',
      'armações curitiba',
      'óculos de sol curitiba'
    ];

    return [...baseKeywords, ...additionalKeywords].join(', ');
  }

  static generateCanonicalUrl(path: string): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${this.baseUrl}${cleanPath}`;
  }

  static createLocalBusinessData(location: string, coordinates: { lat: number; lng: number }): LocalBusinessData {
    return {
      type: 'OpticalStore',
      name: `Ótica Gouveia - ${location}`,
      description: `Ótica especializada no ${location}, Curitiba, oferecendo exames de vista gratuitos, armações de qualidade e lentes especializadas.`,
      url: this.generateCanonicalUrl(`/otica-${location.toLowerCase().replace(/\s+/g, '-')}`),
      telephone: '+5541999123456',
      address: {
        streetAddress: `Rua Principal do ${location}, 123`,
        addressLocality: 'Curitiba',
        addressRegion: 'PR',
        postalCode: '80000-000',
        addressCountry: 'BR'
      },
      geo: {
        latitude: coordinates.lat,
        longitude: coordinates.lng
      },
      openingHours: [
        'Mo-Fr 08:00-18:00',
        'Sa 08:00-16:00'
      ],
      priceRange: '$$',
      image: [
        `${this.baseUrl}/og-image.png`,
        `${this.baseUrl}/loja-${location.toLowerCase().replace(/\s+/g, '-')}.jpg`
      ],
      sameAs: [
        'https://www.facebook.com/oticagouveia',
        'https://www.instagram.com/oticagouveia',
        'https://wa.me/5541999123456'
      ],
      aggregateRating: {
        ratingValue: 4.8,
        reviewCount: 127
      }
    };
  }

  static generateBreadcrumbs(location: string) {
    return [
      { name: 'Início', url: this.baseUrl },
      { name: 'Óticas em Curitiba', url: `${this.baseUrl}/oticas-curitiba` },
      { name: location, url: this.generateCanonicalUrl(`/otica-${location.toLowerCase().replace(/\s+/g, '-')}`) }
    ];
  }

  static generateMetaTags(location: string, service?: string) {
    const title = this.generatePageTitle(location, service);
    const description = this.generatePageDescription(location, service);
    const keywords = this.generateKeywords(location);
    const canonicalUrl = this.generateCanonicalUrl(`/otica-${location.toLowerCase().replace(/\s+/g, '-')}`);

    return {
      title,
      description,
      keywords,
      canonicalUrl,
      imageUrl: `${this.baseUrl}/og-image.png`,
      ogType: 'website' as const,
      author: 'Ótica Gouveia',
      locale: 'pt_BR' as const,
      robots: 'index, follow' as const
    };
  }

  static validateStructuredData(data: any): boolean {
    try {
      // Validação básica de structured data
      if (!data['@context'] || !data['@type']) {
        return false;
      }

      // Validar campos obrigatórios para LocalBusiness
      if (data['@type'] === 'OpticalStore' || data['@type'] === 'LocalBusiness') {
        const requiredFields = ['name', 'address', 'telephone'];
        return requiredFields.every(field => data[field]);
      }

      return true;
    } catch (error) {
      console.error('Erro na validação de structured data:', error);
      return false;
    }
  }

  static generatePreloadResources(location: string) {
    const slug = location.toLowerCase().replace(/\s+/g, '-');
    return [
      {
        href: `${this.baseUrl}/hero-${slug}.jpg`,
        as: 'image' as const
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        as: 'style' as const,
        crossorigin: 'anonymous' as const
      }
    ];
  }

  static generatePrefetchResources() {
    return [
      { href: '/otica-pinheirinho', as: 'document' as const },
      { href: '/otica-sitio-cercado', as: 'document' as const },
      { href: '/otica-umbara', as: 'document' as const }
    ];
  }
}

export default SEOService;
export interface EnhancedSEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  structuredData?: object | object[];
  imageUrl?: string;
  ogType?: string;
  author?: string;
  locale?: string;
  robots?: string;
  articleData?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  preloadResources?: Array<{
    href: string;
    as: string;
    type?: string;
    crossorigin?: string;
  }>;
  prefetchResources?: Array<{
    href: string;
    as?: string;
  }>;
}

export interface LocalBusinessData {
  type: string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  priceRange?: string;
  image?: string[];
  sameAs?: string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}
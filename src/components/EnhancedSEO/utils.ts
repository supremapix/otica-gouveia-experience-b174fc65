import { LocalBusinessData } from './types';

export const createLocalBusinessStructuredData = (data: LocalBusinessData) => {
  return {
    "@context": "https://schema.org",
    "@type": data.type,
    "name": data.name,
    "description": data.description,
    "url": data.url,
    "telephone": data.telephone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.address.streetAddress,
      "addressLocality": data.address.addressLocality,
      "addressRegion": data.address.addressRegion,
      "postalCode": data.address.postalCode,
      "addressCountry": data.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": data.geo.latitude,
      "longitude": data.geo.longitude
    },
    "openingHours": data.openingHours,
    ...(data.priceRange && { "priceRange": data.priceRange }),
    ...(data.image && { "image": data.image }),
    ...(data.sameAs && { "sameAs": data.sameAs }),
    ...(data.aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": data.aggregateRating.ratingValue,
        "reviewCount": data.aggregateRating.reviewCount
      }
    })
  };
};

export const createBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const createWebsiteStructuredData = (name: string, url: string, description: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "url": url,
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
};

export const generateCriticalCSS = () => {
  return `
    /* Critical CSS for above-the-fold content */
    body { 
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.6;
    }
    .hero-section {
      min-height: 50vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
  `;
};

export const getCanonicalUrl = (baseUrl: string, path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  return `${cleanBaseUrl}${cleanPath}`;
};
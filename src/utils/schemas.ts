// Schema markup utilities for SEO

export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ótica Gouveia",
  "url": "https://www.gouveiacuritiba.com.br",
  "logo": "https://www.gouveiacuritiba.com.br/lovable-uploads/9cb88b28-e372-46cb-9604-f84bf0bed383.png",
  "image": "https://www.gouveiacuritiba.com.br/lovable-uploads/00284f2e-4859-48cc-a2c3-4a6ce2507ecf.png",
  "description": "Ótica Gouveia - Tradição e qualidade em cuidados visuais. Óculos de grau, sol, lentes de contato e exames de vista gratuitos em Curitiba.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Nicola Pellanda, 1286",
    "addressLocality": "Pinheirinho",
    "addressRegion": "PR",
    "postalCode": "81880-000",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-41-3114-0663",
    "contactType": "customer service",
    "availableLanguage": "Portuguese"
  },
  "sameAs": [
    "https://www.instagram.com/gouveiaoticacuritiba/",
    "https://www.facebook.com/profile.php?id=61560224348183"
  ],
  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa 08:00-16:00"
  ],
  "priceRange": "$$",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-25.500941",
    "longitude": "-49.292339"
  }
});

export const createLocalBusinessSchema = (location: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `https://www.gouveiacuritiba.com.br/#LocalBusiness-${location}`,
  "name": `Ótica Gouveia ${location}`,
  "image": "https://www.gouveiacuritiba.com.br/lovable-uploads/00284f2e-4859-48cc-a2c3-4a6ce2507ecf.png",
  "url": "https://www.gouveiacuritiba.com.br",
  "telephone": "+55-41-3114-0663",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Nicola Pellanda, 1286",
    "addressLocality": location,
    "addressRegion": "PR",
    "postalCode": "81880-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-25.500941",
    "longitude": "-49.292339"
  },
  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa 08:00-16:00"
  ],
  "priceRange": "$$",
  "servedCuisine": [],
  "hasMenu": false,
  "acceptsReservations": true,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
});

export const createOpticalStoreSchema = (location: string) => ({
  "@context": "https://schema.org",
  "@type": ["Store", "HealthAndBeautyBusiness"],
  "name": `Ótica Gouveia ${location}`,
  "description": `Ótica especializada em óculos de grau, sol e lentes de contato no ${location}, Curitiba. Exames de vista gratuitos e atendimento personalizado.`,
  "url": "https://www.gouveiacuritiba.com.br",
  "image": "https://www.gouveiacuritiba.com.br/lovable-uploads/00284f2e-4859-48cc-a2c3-4a6ce2507ecf.png",
  "telephone": "+55-41-3114-0663",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Nicola Pellanda, 1286",
    "addressLocality": location,
    "addressRegion": "Paraná",
    "postalCode": "81880-000",
    "addressCountry": "Brasil"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-25.500941",
    "longitude": "-49.292339"
  },
  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa 08:00-16:00"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Produtos Óticos",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Óculos de Grau",
          "description": "Óculos de grau com as melhores marcas e lentes de qualidade"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Óculos de Sol",
          "description": "Óculos de sol com proteção UV e estilo"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Lentes de Contato",
          "description": "Lentes de contato das melhores marcas"
        }
      }
    ]
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Exame de Vista Gratuito",
      "description": "Exame completo de vista sem custo",
      "price": "0",
      "priceCurrency": "BRL"
    }
  ]
});

export const createWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ótica Gouveia",
  "url": "https://www.gouveiacuritiba.com.br",
  "description": "Site oficial da Ótica Gouveia - Óculos de grau, sol, lentes de contato e exames gratuitos em Curitiba",
  "inLanguage": "pt-BR",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.gouveiacuritiba.com.br/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Ótica Gouveia",
    "url": "https://www.gouveiacuritiba.com.br"
  }
});

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const createServiceSchema = (serviceName: string, description: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Ótica Gouveia"
  },
  "areaServed": {
    "@type": "City",
    "name": "Curitiba",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "PR",
      "addressCountry": "BR"
    }
  },
  "offers": {
    "@type": "Offer",
    "price": price || "0",
    "priceCurrency": "BRL"
  }
});

export const createProductSchema = (product: { name: string; price: string; description: string; category: string }) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "category": product.category,
  "brand": {
    "@type": "Brand",
    "name": "Ótica Gouveia"
  },
  "offers": {
    "@type": "Offer",
    "price": product.price.replace(/[^\d,]/g, '').replace(',', '.'),
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Ótica Gouveia"
    }
  }
});
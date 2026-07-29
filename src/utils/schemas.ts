// Schema.org markup utilities — Ótica Gouveia
// NAP (Nome, Endereço, Telefone) canônico e único para todo o site.
// Regra: nunca alterar o endereço por bairro (isso quebra a consistência de NAP
// e pode ser interpretado como spam local). Bairros entram em `areaServed`.

export const SITE_URL = "https://www.gouveiacuritiba.com.br";

const LOGO = `${SITE_URL}/lovable-uploads/9cb88b28-e372-46cb-9604-f84bf0bed383.webp`;
const STORE_IMAGE = `${SITE_URL}/lovable-uploads/00284f2e-4859-48cc-a2c3-4a6ce2507ecf.webp`;

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "R. Nicola Pellanda, 1286",
  addressLocality: "Curitiba",
  addressRegion: "PR",
  postalCode: "81880-000",
  addressCountry: "BR",
} as const;

const GEO = {
  "@type": "GeoCoordinates",
  latitude: -25.500941,
  longitude: -49.292339,
} as const;

const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday"],
    opens: "09:00",
    closes: "13:00",
  },
] as const;

const SAME_AS = [
  "https://www.instagram.com/gouveiaoticacuritiba/",
  "https://www.facebook.com/profile.php?id=61560224348183",
];

const CONTACT = {
  telephone: "+554131140663",
  email: "contato@gouveiacuritiba.com.br",
};

/** Bairros e cidades atendidas — usado em areaServed para SEO local. */
export const AREA_SERVED = [
  "Umbará",
  "Pinheirinho",
  "Sítio Cercado",
  "Boqueirão",
  "Xaxim",
  "Capão Raso",
  "Tatuquara",
  "Ganchinho",
  "Fazendinha",
  "Portão",
  "Novo Mundo",
  "Água Verde",
  "CIC",
  "Curitiba",
  "Região Metropolitana de Curitiba",
];

const areaServedFor = (location?: string) => {
  const list = location
    ? [location, ...AREA_SERVED.filter((a) => a !== location)]
    : AREA_SERVED;
  return list.map((name) => ({ "@type": "Place", name }));
};

export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Ótica Gouveia",
  alternateName: "Gouveia Ótica Curitiba",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO,
    caption: "Logotipo da Ótica Gouveia",
  },
  image: STORE_IMAGE,
  description:
    "Ótica em Curitiba especializada em óculos de grau, óculos de sol, lentes de contato e lentes multifocais, com medições digitais Visioffice 3. Não realizamos exame de vista: trabalhamos com a receita do oftalmologista.",
  address: ADDRESS,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: CONTACT.telephone,
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
    },
  ],
  sameAs: SAME_AS,
});

export const createOpticianSchema = (location?: string) => ({
  "@context": "https://schema.org",
  "@type": ["Optician", "Store", "MedicalBusiness"],
  "@id": `${SITE_URL}/#optician`,
  name: "Ótica Gouveia",
  description: location
    ? `Ótica que atende ${location} e região, em Curitiba: óculos de grau, óculos de sol, lentes de contato, lentes multifocais e conserto de óculos.`
    : "Ótica em Curitiba: óculos de grau, óculos de sol, lentes de contato, lentes multifocais e conserto de óculos.",
  url: SITE_URL,
  image: STORE_IMAGE,
  logo: LOGO,
  telephone: CONTACT.telephone,
  email: CONTACT.email,
  address: ADDRESS,
  geo: GEO,
  openingHoursSpecification: OPENING_HOURS,
  priceRange: "$$",
  currenciesAccepted: "BRL",
  paymentAccepted: "Dinheiro, PIX, Cartão de Crédito, Cartão de Débito",
  areaServed: areaServedFor(location),
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
  sameAs: SAME_AS,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Produtos e serviços ópticos",
    itemListElement: [
      "Óculos de grau",
      "Óculos de sol",
      "Óculos infantil",
      "Lentes de contato",
      "Lentes multifocais e progressivas",
      "Lentes antirreflexo e blue light",
      "Lentes fotossensíveis",
      "Armações femininas, masculinas e infantis",
      "Conserto e ajuste de óculos",
      "Troca de lentes",
      "Medição digital Visioffice 3",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
});

/** Mantido por compatibilidade — hoje delega para o schema Optician. */
export const createLocalBusinessSchema = (location?: string) =>
  createOpticianSchema(location);

/** Mantido por compatibilidade — hoje delega para o schema Optician. */
export const createOpticalStoreSchema = (location?: string) =>
  createOpticianSchema(location);

export const createWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Ótica Gouveia",
  url: SITE_URL,
  description:
    "Site oficial da Ótica Gouveia — óculos de grau, óculos de sol, lentes de contato e lentes multifocais em Curitiba.",
  inLanguage: "pt-BR",
  publisher: { "@id": `${SITE_URL}/#organization` },
});

export const createBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const createServiceSchema = (
  serviceName: string,
  description: string,
  price?: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description,
  serviceType: serviceName,
  provider: { "@id": `${SITE_URL}/#optician` },
  areaServed: areaServedFor(),
  ...(price
    ? {
        offers: {
          "@type": "Offer",
          price,
          priceCurrency: "BRL",
        },
      }
    : {}),
});

export const createProductSchema = (product: {
  name: string;
  price: string;
  description: string;
  category: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  category: product.category,
  ...(product.image ? { image: product.image } : {}),
  brand: { "@type": "Brand", name: "Ótica Gouveia" },
  offers: {
    "@type": "Offer",
    price: product.price.replace(/[^\d,]/g, "").replace(",", "."),
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    availableAtOrFrom: { "@id": `${SITE_URL}/#optician` },
    seller: { "@id": `${SITE_URL}/#organization` },
  },
});

/**
 * FAQPage — essencial para AI Overviews, ChatGPT, Perplexity e Copilot.
 * As respostas devem ser objetivas e autossuficientes.
 */
export const createFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const createArticleSchema = (article: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  section?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: article.headline,
  description: article.description,
  mainEntityOfPage: { "@type": "WebPage", "@id": article.url },
  url: article.url,
  image: article.image || STORE_IMAGE,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  ...(article.section ? { articleSection: article.section } : {}),
  inLanguage: "pt-BR",
  author: { "@id": `${SITE_URL}/#organization` },
  publisher: { "@id": `${SITE_URL}/#organization` },
});

/**
 * WebPage com `speakable` — sinaliza para assistentes de voz e motores
 * generativos qual trecho responde à pergunta principal da página.
 */
export const createWebPageSchema = (page: {
  name: string;
  description: string;
  url: string;
  primaryTopic?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: page.name,
  description: page.description,
  url: page.url,
  inLanguage: "pt-BR",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: page.primaryTopic
    ? { "@type": "Thing", name: page.primaryTopic }
    : undefined,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "[data-speakable]"],
  },
  primaryImageOfPage: { "@type": "ImageObject", url: STORE_IMAGE },
});

export const createImageObjectSchema = (image: {
  url: string;
  caption: string;
  width?: number;
  height?: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  contentUrl: image.url,
  url: image.url,
  caption: image.caption,
  ...(image.width ? { width: image.width } : {}),
  ...(image.height ? { height: image.height } : {}),
});

export const createVideoObjectSchema = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  embedUrl: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: video.name,
  description: video.description,
  thumbnailUrl: video.thumbnailUrl,
  uploadDate: video.uploadDate,
  embedUrl: video.embedUrl,
  publisher: { "@id": `${SITE_URL}/#organization` },
});

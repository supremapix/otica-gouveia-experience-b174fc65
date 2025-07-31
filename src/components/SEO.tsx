import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  robots?: string;
  author?: string;
  locale?: string;
}

const SEO = ({
  title,
  description,
  keywords = "",
  canonicalUrl,
  ogImage = "https://www.gouveiacuritiba.com.br/og-image.png",
  ogType = "website",
  structuredData,
  robots = "index, follow",
  author = "Ótica Gouveia",
  locale = "pt_BR"
}: SEOProps) => {
  const siteName = "Ótica Gouveia";
  const baseUrl = "https://www.gouveiacuritiba.com.br";
  const fullCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#ef4444" />
      <meta name="msapplication-TileColor" content="#ef4444" />
      <meta name="google-site-verification" content="Vpi-8OrZzWV8kNdWbjC1fMIIDPtdUcKYWvHCllEaO1s" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="geo.position" content="-25.5;-49.3" />
      <meta name="ICBM" content="-25.5, -49.3" />
      
      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
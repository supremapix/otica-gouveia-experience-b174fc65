import React from 'react';
import { Helmet } from 'react-helmet-async';
import { EnhancedSEOProps } from './types';
import { generateCriticalCSS, getCanonicalUrl } from './utils';

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonicalUrl,
  keywords = "",
  structuredData,
  imageUrl = "https://www.gouveiacuritiba.com.br/og-image.png",
  ogType = "website",
  author = "Ótica Gouveia",
  locale = "pt_BR",
  robots = "index, follow",
  articleData,
  breadcrumbs,
  preloadResources = [],
  prefetchResources = []
}) => {
  const siteName = "Ótica Gouveia";
  const baseUrl = "https://www.gouveiacuritiba.com.br";
  const fullCanonicalUrl = getCanonicalUrl(baseUrl, canonicalUrl);
  const criticalCSS = generateCriticalCSS();

  // Default preload resources for critical assets
  const defaultPreloadResources = [
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
      as: "style",
      crossorigin: "anonymous"
    },
    {
      href: imageUrl,
      as: "image"
    }
  ];

  const allPreloadResources = [...defaultPreloadResources, ...preloadResources];

  return (
    <Helmet>
      {/* Critical CSS inline */}
      <style type="text/css">{criticalCSS}</style>

      {/* Resource Hints - Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* Resource Hints - DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      {/* Resource Hints - Preload Critical Resources */}
      {allPreloadResources.map((resource, index) => (
        <link
          key={index}
          rel="preload"
          href={resource.href}
          as={resource.as}
          {...('crossorigin' in resource && resource.crossorigin && { crossOrigin: resource.crossorigin as any })}
        />
      ))}

      {/* Resource Hints - Prefetch */}
      {prefetchResources.map((resource, index) => (
        <link
          key={index}
          rel="prefetch"
          href={resource.href}
          {...(resource.as && { as: resource.as })}
        />
      ))}

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
      <meta name="google-site-verification" content="Vpi-8OrZzWV8kNdWbjC1fMIIDPtdUcKYWvHCllEaO1s" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      
      {/* Article specific OG tags */}
      {articleData && ogType === "article" && (
        <>
          {articleData.publishedTime && (
            <meta property="article:published_time" content={articleData.publishedTime} />
          )}
          {articleData.modifiedTime && (
            <meta property="article:modified_time" content={articleData.modifiedTime} />
          )}
          {articleData.author && (
            <meta property="article:author" content={articleData.author} />
          )}
          {articleData.section && (
            <meta property="article:section" content={articleData.section} />
          )}
          {articleData.tags && articleData.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#ef4444" />
      <meta name="msapplication-TileColor" content="#ef4444" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="geo.position" content="-25.5;-49.3" />
      <meta name="ICBM" content="-25.5, -49.3" />
      
      {/* Performance Optimization */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="format-detection" content="address=yes" />
      
      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData])}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEO;
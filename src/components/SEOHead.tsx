import React, { useEffect, useMemo } from 'react';

export const SITE_DOMAIN = 'https://the14lights.com';
export const DEFAULT_OG_IMAGE = 'https://the14lights.com/assets/VR_LOGO.webp';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  faqs?: FAQItem[];
  customSchema?: Record<string, any> | Array<Record<string, any>>;
}

/**
 * Reusable SEO Head component for Single Page Apps (Vite) and modern SSR/SSG frameworks.
 * Renders both inline JSON-LD schemas and dynamically syncs document metadata in browser environments.
 */
export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'The 14 Lights | AI, Game Development & XR Innovations',
  description = 'The 14 Lights is a premier immersive technology company specializing in AI EdTech (eduraXR), multi-platform game development, and enterprise Extended Reality (XR) simulations.',
  canonicalPath = '/',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  publishedTime,
  modifiedTime,
  authorName,
  faqs = [],
  customSchema,
}) => {
  const normalizedPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const canonicalUrl = normalizedPath === '/' ? `${SITE_DOMAIN}/` : `${SITE_DOMAIN}${normalizedPath}`;
  const resolvedOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_DOMAIN}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  // Generate unified JSON-LD Graph Schema
  const schemaGraph = useMemo(() => {
    const graph: any[] = [
      // 1. Organization Schema
      {
        '@type': 'Organization',
        '@id': `${SITE_DOMAIN}/#organization`,
        'name': 'The 14 Lights',
        'url': SITE_DOMAIN,
        'logo': {
          '@type': 'ImageObject',
          '@id': `${SITE_DOMAIN}/#logo`,
          'url': `${SITE_DOMAIN}/assets/VR_LOGO.webp`,
          'caption': 'The 14 Lights Logo',
          'width': 512,
          'height': 512,
        },
        'description': 'Pioneering technology company specializing in AI EdTech (eduraXR), interactive game development, and Enterprise Extended Reality (XR) solutions.',
        'email': 'hello@the14lights.com',
        'sameAs': [
          'https://www.facebook.com/profile.php?id=100087743332604',
          'https://pk.linkedin.com/company/the14lights',
          'https://discord.gg/6kuByeGNm',
        ],
        'knowsAbout': [
          'Artificial Intelligence in Education',
          'Virtual Reality Game Development',
          'Extended Reality (XR) Spatial Simulations',
          'OpenXR Cross-Platform Pipelines',
          'eduraXR Virtual AI Teacher',
        ],
      },
      // 2. WebSite Schema
      {
        '@type': 'WebSite',
        '@id': `${SITE_DOMAIN}/#website`,
        'url': SITE_DOMAIN,
        'name': 'The 14 Lights',
        'alternateName': ['14 Lights', 'The 14Lights'],
        'publisher': {
          '@id': `${SITE_DOMAIN}/#organization`,
        },
        'inLanguage': 'en-US',
      },
      // 3. WebPage Schema
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        'url': canonicalUrl,
        'name': title,
        'isPartOf': {
          '@id': `${SITE_DOMAIN}/#website`,
        },
        'about': {
          '@id': `${SITE_DOMAIN}/#organization`,
        },
        'description': description,
        'inLanguage': 'en-US',
        ...(publishedTime ? { 'datePublished': publishedTime } : {}),
        ...(modifiedTime ? { 'dateModified': modifiedTime } : {}),
      },
    ];

    // 4. Dynamic BreadcrumbList Schema for Google SERP
    const pathSegments = normalizedPath.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      const breadcrumbItems: any[] = [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_DOMAIN}/`,
        },
      ];
      let accumulatedPath = '';
      pathSegments.forEach((segment, index) => {
        accumulatedPath += `/${segment}`;
        const segmentName = segment
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (char) => char.toUpperCase());
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: index + 2,
          name: index === pathSegments.length - 1 ? title.split('|')[0].trim() : segmentName,
          item: `${SITE_DOMAIN}${accumulatedPath}`,
        });
      });

      graph.push({
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumbs`,
        itemListElement: breadcrumbItems,
      });
    }

    // 5. FAQ Schema (if FAQs are provided)
    if (faqs && faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        'mainEntity': faqs.map((faq) => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer,
          },
        })),
      });
    }

    // 6. Append any custom schemas passed via props
    if (customSchema) {
      if (Array.isArray(customSchema)) {
        graph.push(...customSchema);
      } else {
        graph.push(customSchema);
      }
    }

    return {
      '@context': 'https://schema.org',
      '@graph': graph,
    };
  }, [canonicalUrl, title, description, faqs, customSchema, publishedTime, modifiedTime]);

  // Client-side DOM Synchronization for Single Page App transitions
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // 1. Document Title
    document.title = title;

    // 2. Canonical Link
    let canonicalElem = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalElem) {
      canonicalElem = document.createElement('link');
      canonicalElem.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElem);
    }
    canonicalElem.setAttribute('href', canonicalUrl);

    // 3. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 4. Robots Meta (Global, Googlebot, Bingbot)
    const robotsContent = noindex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    ['robots', 'googlebot', 'bingbot'].forEach((botName) => {
      let metaBot = document.querySelector(`meta[name="${botName}"]`) as HTMLMetaElement | null;
      if (!metaBot) {
        metaBot = document.createElement('meta');
        metaBot.setAttribute('name', botName);
        document.head.appendChild(metaBot);
      }
      metaBot.setAttribute('content', robotsContent);
    });

    // 5. OpenGraph Tags
    const ogTags: { property: string; content: string }[] = [
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: resolvedOgImage },
      { property: 'og:type', content: ogType },
      { property: 'og:site_name', content: 'The 14 Lights' },
      { property: 'og:locale', content: 'en_US' },
      ...(publishedTime ? [{ property: 'article:published_time', content: publishedTime }] : []),
      ...(modifiedTime ? [{ property: 'article:modified_time', content: modifiedTime }] : []),
      ...(authorName ? [{ property: 'article:author', content: authorName }] : []),
    ];

    ogTags.forEach(({ property, content }) => {
      let elem = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!elem) {
        elem = document.createElement('meta');
        elem.setAttribute('property', property);
        document.head.appendChild(elem);
      }
      elem.setAttribute('content', content);
    });

    // 6. Twitter Cards
    const twitterTags: { name: string; content: string }[] = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@the14lights' },
      { name: 'twitter:creator', content: '@the14lights' },
      { name: 'twitter:url', content: canonicalUrl },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: resolvedOgImage },
    ];

    twitterTags.forEach(({ name, content }) => {
      let elem = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!elem) {
        elem = document.createElement('meta');
        elem.setAttribute('name', name);
        document.head.appendChild(elem);
      }
      elem.setAttribute('content', content);
    });

    // 7. Dynamic JSON-LD injection in document head
    let scriptTag = document.querySelector('script#structured-data-seo') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'structured-data-seo';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaGraph);
  }, [title, description, canonicalUrl, resolvedOgImage, ogType, noindex, publishedTime, modifiedTime, authorName, schemaGraph]);

  return (
    <script
      id="ssr-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
};

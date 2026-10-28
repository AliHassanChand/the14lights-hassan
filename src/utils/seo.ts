export const SITE_DOMAIN = 'https://the14lights.com';
export const DEFAULT_OG_IMAGE = 'https://the14lights.com/assets/VR_LOGO.webp';

export interface SeoProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

export function updatePageSeo({
  title = 'The 14 Lights | Pakistan Virtual AI Teacher & Game Development',
  description = 'The 14 Lights is a pioneer in AI EdTech featuring Pakistan\'s Virtual AI Teacher, alongside high-performance Game Development & VR.',
  canonicalPath = '/',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
}: SeoProps) {
  // 1. Update Document Title
  document.title = title;

  // 2. Format Canonical URL
  const normalizedPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const canonicalUrl = normalizedPath === '/' ? `${SITE_DOMAIN}/` : `${SITE_DOMAIN}${normalizedPath}`;

  // 3. Update or Create Canonical Link Element
  let canonicalElem = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalElem) {
    canonicalElem = document.createElement('link');
    canonicalElem.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalElem);
  }
  canonicalElem.setAttribute('href', canonicalUrl);

  // 4. Update Meta Description
  let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // 5. Update Robots Meta
  let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
  if (noindex) {
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, follow');
  } else if (metaRobots) {
    metaRobots.setAttribute('content', 'index, follow');
  }

  // 6. Update OpenGraph Tags
  const ogTags: { property: string; content: string }[] = [
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: ogImage.startsWith('http') ? ogImage : `${SITE_DOMAIN}${ogImage}` },
    { property: 'og:type', content: ogType },
    { property: 'og:site_name', content: 'The 14 Lights' },
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

  // 7. Update Twitter Card Tags
  const twitterTags: { property: string; content: string }[] = [
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: canonicalUrl },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: description },
    { property: 'twitter:image', content: ogImage.startsWith('http') ? ogImage : `${SITE_DOMAIN}${ogImage}` },
  ];

  twitterTags.forEach(({ property, content }) => {
    let elem = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
    if (!elem) {
      elem = document.createElement('meta');
      elem.setAttribute('property', property);
      document.head.appendChild(elem);
    }
    elem.setAttribute('content', content);
  });
}

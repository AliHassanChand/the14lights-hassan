import { useEffect, useState, lazy, Suspense } from 'react';
import { PageView } from './types';
import { updatePageSeo } from './utils/seo';
import { isEduraXRSubdomain, getEduraXRLink, getMainDomainLink, isProductionThe14Lights } from './utils/domain';

const HomePage = lazy(() =>
  import('./components/HomePage').then((m) => ({ default: m.HomePage }))
);
const BlogListingPage = lazy(() =>
  import('./components/BlogListingPage').then((m) => ({ default: m.BlogListingPage }))
);
const ArticleDetailView = lazy(() =>
  import('./components/ArticleDetailView').then((m) => ({ default: m.ArticleDetailView }))
);
const GameDetailPage = lazy(() =>
  import('./components/GameDetailPage').then((m) => ({ default: m.GameDetailPage }))
);
const PrivacyPolicyPage = lazy(() =>
  import('./components/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage }))
);
const NewsletterPage = lazy(() =>
  import('./components/NewsletterPage').then((m) => ({ default: m.NewsletterPage }))
);
const NotFoundPage = lazy(() =>
  import('./components/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>(() => (isEduraXRSubdomain() ? 'eduraxr' : 'home'));
  const [selectedArticleId, setSelectedArticleId] = useState<string>('ai-virtual-teacher-edtech-pakistan-guide');
  const [selectedGameSlug, setSelectedGameSlug] = useState<string>('crazy-fifa-2026');

  useEffect(() => {
    const parseRoute = () => {
      let pathname = window.location.pathname;
      const hash = window.location.hash;
      const onEduraXRDomain = isEduraXRSubdomain();

      // Gracefully migrate legacy hash routes
      if (hash.startsWith('#/blog') || hash === '#blog') {
        pathname = '/blog';
        window.history.replaceState({}, '', '/blog');
      } else if (hash.startsWith('#/eduraxr') || hash === '#eduraxr') {
        pathname = '/eduraxr';
        window.history.replaceState({}, '', '/eduraxr');
      } else if (hash.startsWith('#/newsletter') || hash === '#newsletter') {
        pathname = '/newsletter';
        window.history.replaceState({}, '', '/newsletter');
      } else if (hash.startsWith('#/publisher') || hash === '#publisher') {
        pathname = '/newsletter';
        window.history.replaceState({}, '', '/newsletter');
      } else if (hash.startsWith('#/privacy') || hash === '#privacy') {
        pathname = '/privacy';
        window.history.replaceState({}, '', '/privacy');
      } else if (hash.startsWith('#/game-development-services') || hash === '#game-development-services') {
        pathname = '/game-development-services';
        window.history.replaceState({}, '', '/game-development-services');
      } else if (hash.startsWith('#/article/') || hash.startsWith('#article/')) {
        const parts = hash.split('/');
        if (parts[2]) {
          pathname = `/article/${parts[2]}`;
          window.history.replaceState({}, '', pathname);
        }
      } else if (hash.startsWith('#/game/') || hash.startsWith('#game/')) {
        const parts = hash.split('/');
        if (parts[2]) {
          pathname = `/game/${parts[2]}`;
          window.history.replaceState({}, '', pathname);
        }
      } else if (hash.startsWith('#/404') || hash === '#404') {
        pathname = '/404';
        window.history.replaceState({}, '', '/404');
      }

      // Remove trailing slash if present (except for root '/')
      if (pathname.length > 1 && pathname.endsWith('/')) {
        pathname = pathname.slice(0, -1);
      }

      if (pathname === '' || pathname === '/') {
        // If visiting on eduraxr.the14lights.com subdomain, root opens EduraXR Page
        setCurrentView(onEduraXRDomain ? 'eduraxr' : 'home');
      } else if (pathname === '/eduraxr') {
        setCurrentView('eduraxr');
      } else if (pathname === '/blog') {
        setCurrentView('blog');
      } else if (pathname === '/newsletter') {
        setCurrentView('newsletter');
      } else if (pathname === '/publisher') {
        pathname = '/newsletter';
        window.history.replaceState({}, '', '/newsletter');
        setCurrentView('newsletter');
      } else if (pathname === '/privacy') {
        setCurrentView('privacy');
      } else if (pathname === '/game-development-services') {
        setSelectedArticleId('game-development-services');
        setCurrentView('article');
      } else if (pathname === '/how-to-make-a-video-game') {
        setSelectedArticleId('how-to-make-a-video-game');
        setCurrentView('article');
      } else if (pathname === '/buy-pc-games-online-safely') {
        setSelectedArticleId('buy-pc-games-online-safely');
        setCurrentView('article');
      } else if (pathname === '/pc-vs-console-gaming') {
        setSelectedArticleId('pc-vs-console-gaming');
        setCurrentView('article');
      } else if (pathname.startsWith('/article/')) {
        const parts = pathname.split('/');
        if (parts.length >= 3 && parts[2]) {
          setSelectedArticleId(parts[2]);
          setCurrentView('article');
        } else {
          setCurrentView('404');
        }
      } else if (pathname.startsWith('/game/')) {
        const parts = pathname.split('/');
        if (parts.length >= 3 && parts[2]) {
          setSelectedGameSlug(parts[2]);
          setCurrentView('game');
        } else {
          setSelectedGameSlug('crazy-fifa-2026');
          setCurrentView('game');
        }
      } else if (pathname === '/404') {
        setCurrentView('404');
      } else {
        // Unmatched path -> 404 page
        setCurrentView('404');
      }
    };

    parseRoute();
    window.addEventListener('popstate', parseRoute);
    return () => window.removeEventListener('popstate', parseRoute);
  }, []);

  // Update canonical URL and metadata when route/view changes
  useEffect(() => {
    const onEduraXRDomain = isEduraXRSubdomain();

    if (currentView === 'home') {
      updatePageSeo({
        title: 'The 14 Lights | Pakistan Virtual AI Teacher & Game Development',
        description: "The 14 Lights is a pioneer in AI EdTech featuring Pakistan's Virtual AI Teacher, alongside high-performance Game Development & VR.",
        canonicalPath: '/',
      });
    } else if (currentView === 'eduraxr') {
      updatePageSeo({
        title: "Edura XR | Pakistan's First Virtual AI Teacher by The 14 Lights",
        description: "Edura XR is an immersive AI-powered virtual classroom for Meta Quest headsets developed by The 14 Lights. Experience real-time multilingual AI tutoring, spatial memory, and interactive Socratic learning in a 3D environment.",
        canonicalPath: onEduraXRDomain ? '/' : '/eduraxr',
        ogImage: '/assets/eduraxr_classroom.jpg',
      });
    } else if (currentView === 'newsletter' || currentView === 'publisher') {
      updatePageSeo({
        title: 'Edura XR Newsletter: Reimagining Learning Through AI and Virtual Reality | The 14 Lights',
        description: 'Read the official Edura XR feature report by The 14 Lights. Explore how an AI teacher in a Meta Quest 3D classroom reimagines learning with voice, memory, and spatial presence.',
        canonicalPath: '/newsletter',
      });
    } else if (currentView === 'blog') {
      updatePageSeo({
        title: 'Engineering Dispatches & Insights | The 14 Lights',
        description: 'Technical deep-dives, AI architecture blueprints, and game engine benchmarks from The 14 Lights.',
        canonicalPath: '/blog',
      });
    } else if (currentView === 'privacy') {
      updatePageSeo({
        title: 'Privacy Policy | The 14 Lights',
        description: 'Privacy policy, data protection, and cookie usage guidelines for The 14 Lights.',
        canonicalPath: '/privacy',
      });
    } else if (currentView === '404') {
      updatePageSeo({
        title: '404 - Page Not Found | The 14 Lights',
        description: 'The requested resource could not be found on The 14 Lights server.',
        canonicalPath: '/404',
        noindex: true,
      });
    }
  }, [currentView]);

  const navigateTo = (view: PageView, articleOrGameId?: string) => {
    const onEduraXRDomain = isEduraXRSubdomain();
    let targetPath = '/';

    if (view === 'eduraxr') {
      // In production, when clicked from the14lights.com, navigate to subdomain
      if (isProductionThe14Lights() && !onEduraXRDomain) {
        window.location.href = getEduraXRLink('/');
        return;
      }
      targetPath = onEduraXRDomain ? '/' : '/eduraxr';
    } else if (view === 'home') {
      // In production, when clicked from eduraxr.the14lights.com, navigate back to main domain
      if (isProductionThe14Lights() && onEduraXRDomain) {
        window.location.href = getMainDomainLink('/');
        return;
      }
      targetPath = '/';
    } else if (view === 'blog') {
      targetPath = '/blog';
    } else if (view === 'newsletter' || view === 'publisher') {
      targetPath = '/newsletter';
    } else if (view === 'privacy') {
      targetPath = '/privacy';
    } else if (view === 'article') {
      const targetId = articleOrGameId || selectedArticleId || 'game-development-services';
      if (targetId === 'game-development-services') {
        targetPath = '/game-development-services';
      } else if (targetId === 'how-to-make-a-video-game') {
        targetPath = '/how-to-make-a-video-game';
      } else if (targetId === 'buy-pc-games-online-safely') {
        targetPath = '/buy-pc-games-online-safely';
      } else if (targetId === 'pc-vs-console-gaming') {
        targetPath = '/pc-vs-console-gaming';
      } else {
        targetPath = `/article/${targetId}`;
      }
    } else if (view === 'game') {
      const targetSlug = articleOrGameId || selectedGameSlug || 'crazy-fifa-2026';
      targetPath = `/game/${targetSlug}`;
    } else if (view === '404') {
      targetPath = '/404';
    } else {
      targetPath = '/';
    }

    if (window.location.pathname !== targetPath) {
      window.history.pushState({ view, id: articleOrGameId }, '', targetPath);
    }

    setCurrentView(view === 'publisher' ? 'newsletter' : view);
    if (view === 'article' && articleOrGameId) {
      setSelectedArticleId(articleOrGameId);
    } else if (view === 'game' && articleOrGameId) {
      setSelectedGameSlug(articleOrGameId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050507] text-white flex items-center justify-center"><div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin"></div></div>}>
      {currentView === 'home' && <HomePage onNavigate={navigateTo} />}
      {(currentView === 'newsletter' || currentView === 'publisher' || currentView === 'eduraxr') && (
        <NewsletterPage onNavigate={navigateTo} />
      )}
      {currentView === 'blog' && <BlogListingPage onNavigate={navigateTo} />}
      {currentView === 'article' && <ArticleDetailView articleId={selectedArticleId} onNavigate={navigateTo} />}
      {currentView === 'game' && <GameDetailPage slug={selectedGameSlug} onNavigate={navigateTo} />}
      {currentView === 'privacy' && <PrivacyPolicyPage onNavigate={navigateTo} />}
      {currentView === '404' && <NotFoundPage onNavigate={navigateTo} />}
    </Suspense>
  );
}

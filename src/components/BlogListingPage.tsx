import React, { useEffect, useState } from 'react';
import { PageView } from '../types';
import { BLOG_ARTICLES, BlogArticleData } from '../data/blogArticles';
import { SEOHead } from './SEOHead';
import vrLogo from '../assets/VR_LOGO.webp';
import { getEduraXRLink, isProductionThe14Lights } from '../utils/domain';

interface BlogListingPageProps {
  onNavigate: (page: PageView, articleId?: string) => void;
}

export const BlogListingPage: React.FC<BlogListingPageProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'products' | 'services' | 'engineering'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Set blog theme on body
  useEffect(() => {
    document.body.className = 'antialiased selection:bg-gold-500 selection:text-black w-full overflow-x-hidden blog-page';
    return () => {
      document.body.className = '';
    };
  }, []);

  const filteredArticles = BLOG_ARTICLES.filter((article) => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscriberEmail && subscriberEmail.includes('@') && subscriberEmail.includes('.')) {
      setNewsletterStatus('success');
      setSubscriberEmail('');
    } else {
      setNewsletterStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#334155]">
      <SEOHead
        title="Engineering Dispatches & Insights | The 14 Lights"
        description="Technical deep-dives, AI architecture blueprints, and game engine benchmarks from The 14 Lights."
        canonicalPath="/blog"
      />
      {/* Reading Progress Bar */}
      <div id="scroll-progress" aria-hidden="true" style={{ width: '0%' }}></div>

      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Header & Global Navigation */}
      <header className="sticky top-0 z-40 w-full" id="navbar">
        <nav className="nav-glass transition-all duration-300 w-full" aria-label="Global Navigation">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <a href="#/" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="group flex items-center gap-3 text-left focus:outline-none" aria-label="The 14 Lights - Go to Homepage">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full overflow-hidden transition p-1 bg-white ring-2 ring-gold-400/50 shadow-md">
              <picture className="w-full h-full flex items-center justify-center">
                <source srcSet="/assets/VR_LOGO.webp" type="image/webp" />
                <img
                  src={vrLogo}
                  alt="The 14 Lights Logo"
                  width={48}
                  height={48}
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallbacks = ['/assets/VR_LOGO.webp', '/VR_LOGO.webp', '/assets/VR_LOGO.png', '/favicon.png'];
                    const step = parseInt(target.dataset.fallbackStep || '0', 10);
                    if (step < fallbacks.length) {
                      target.dataset.fallbackStep = String(step + 1);
                      target.src = fallbacks[step];
                    } else {
                      target.onerror = null;
                    }
                  }}
                />
              </picture>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-display font-bold text-slate-900 tracking-wider leading-none group-hover:text-gold-600 transition">
                The<span className="text-gold-600"> 14 Lights</span>
              </span>
            </div>
          </a>

          {/* Menu Links */}
          <ul className="hidden lg:flex items-center justify-end gap-1 ml-auto">
            <li>
              <button onClick={() => onNavigate('home')} className="px-3.5 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('home')} className="px-3.5 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition">
                About
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('home')} className="px-3.5 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition">
                Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('blog')} className="px-3.5 py-2 rounded-full text-sm font-medium text-gold-600 bg-gold-500/10 border border-gold-500/20 transition">
                Blog
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('newsletter')} className="px-3.5 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-gold-600 hover:bg-gold-500/10 transition">
                Newsletter
              </button>
            </li>
            {/* EduraXR Button in Right Last of Nav */}
            <li className="ml-2 pl-2 border-l border-slate-200 flex items-center">
              <a
                href={getEduraXRLink('/')}
                onClick={(e) => {
                  if (!isProductionThe14Lights()) {
                    e.preventDefault();
                    onNavigate('eduraxr');
                  }
                }}
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full font-display font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 border border-gold-400/60 shadow-[0_0_14px_rgba(212,175,55,0.35)] hover:shadow-[0_0_22px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer select-none"
                aria-label="EduraXR - Connected with subdomain eduraxr.the14lights.com"
                title="EduraXR - eduraxr.the14lights.com"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                </span>
                <span>edura<span className="font-black text-black">XR</span></span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true"></i>
              </a>
            </li>
          </ul>

          {/* Mobile Burger */}
          <div className="flex items-center">
            <button
              id="hambtn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-2xl text-slate-600 hover:text-gold-600 transition focus:outline-none p-2"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'}`} aria-hidden="true"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobileMenu" className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 absolute w-full left-0 z-50 shadow-lg">
            <div className="px-6 py-6 flex flex-col gap-3">
              <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="text-left text-slate-600 hover:text-gold-600 font-medium py-2 border-b border-slate-100">
                Home
              </button>
              <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="text-left text-slate-600 hover:text-gold-600 font-medium py-2 border-b border-slate-100">
                About
              </button>
              <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="text-left text-slate-600 hover:text-gold-600 font-medium py-2 border-b border-slate-100">
                Portfolio
              </button>
              <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="text-left text-slate-600 hover:text-gold-600 font-medium py-2 border-b border-slate-100">
                Creators
              </button>
              <button onClick={() => { onNavigate('blog'); setMobileMenuOpen(false); }} className="text-left text-gold-600 font-bold py-2 border-b border-slate-100">
                Blog
              </button>
              <button onClick={() => { onNavigate('newsletter'); setMobileMenuOpen(false); }} className="text-left text-slate-600 hover:text-gold-600 font-medium py-2 border-b border-slate-100">
                Newsletter
              </button>
              <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="mt-2 text-center py-2.5 rounded-full font-bold bg-gold-500 text-slate-900">
                Get Started
              </button>
            </div>
          </div>
        )}
        </nav>
      </header>

      {/* Main Content Wrapper */}
      <main id="main-content" className="relative z-20">
        <h1 className="sr-only">The 14Lights - Blog & Technical Dispatches</h1>

        {/* Blog Hero: Product Spotlight */}
        <section className="relative pt-2 pb-16 md:py-8 overflow-hidden" aria-labelledby="featured-story-title">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-gold-500"></span>
              <span className="text-xs uppercase tracking-[0.3em] font-display font-bold text-gold-600">Product Spotlight</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div className="group relative rounded-2xl overflow-hidden border border-slate-200/80 aspect-[16/9] lg:aspect-auto lg:h-full bg-slate-100 shadow-xl">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-blue-500 rounded-2xl opacity-10 blur-xl transition group-hover:opacity-20 duration-700"></div>

                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
                    alt="AI technology interfacing with education networks"
                    className="absolute inset-0 w-full h-full object-cover transition duration-1000 group-hover:scale-[1.03] group-hover:opacity-95"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-gold-500 text-slate-900 text-[10px] font-bold uppercase tracking-wider rounded">Innovation</span>
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur text-white text-[10px] uppercase tracking-wider rounded border border-white/10">AI Product</span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                    <span className="text-xs text-gold-400 font-bold uppercase tracking-wider block mb-2">EdTech Revolution</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">Pakistan's First Virtual AI Teacher: Redefining Digital Education</h2>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center bg-white p-6 md:p-10 rounded-2xl border-2 border-slate-200/90 shadow-md relative">
                <div className="absolute top-0 right-0 w-28 h-28 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="hidden lg:block">
                  <span className="text-xs text-gold-700 font-bold uppercase tracking-widest block mb-3">Department: Products</span>
                  <h2 id="featured-story-title" className="text-3xl xl:text-4xl font-display font-extrabold text-slate-950 leading-tight mb-4 group-hover:text-gold-600 transition">
                    Pakistan's First Virtual AI Teacher is Here
                  </h2>
                </div>
                <div className="lg:hidden">
                  <p className="text-xs text-gold-700 font-bold uppercase tracking-widest block mb-2">Department: Products</p>
                </div>

                <div className="bg-amber-50/80 border-l-4 border-gold-500 border border-amber-200/70 p-5 mb-6 rounded-r-xl shadow-xs">
                  <p className="text-slate-800 text-sm font-medium leading-relaxed">
                    <strong className="text-slate-950">What is the Virtual AI Teacher?</strong> Developed by The 14Lights, it is Pakistan's first generative AI-powered educational platform. It provides real-time, personalized tutoring, adapts to individual learning paces, and bridges the accessibility gap in modern EdTech infrastructure.
                  </p>
                </div>

                <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6">
                  Beyond our core services, we are pioneering the product space. Discover the complex NLP architecture and local cultural datasets we used to engineer a seamlessly interactive AI educator.
                </p>

                <div className="flex items-center gap-4 mb-8 pt-4 border-t border-slate-200">
                  <div className="w-12 h-12 rounded-full border-2 border-gold-500/40 flex items-center justify-center bg-gold-500/10 text-gold-700 font-extrabold">14L</div>
                  <div>
                    <span className="block text-sm font-bold text-slate-950">The 14Lights Team</span>
                    <span className="block text-xs text-slate-600 font-medium">Product Engineering • 6 min read</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => onNavigate('article', 'ai-virtual-teacher-edtech-pakistan-guide')} className="btn-gold text-center px-6 py-3.5 rounded-xl font-bold uppercase tracking-wide text-xs shadow-md hover:shadow-lg transition">
                    Read Case Study <i className="fa-solid fa-arrow-right-long ml-2"></i>
                  </button>
                  <button onClick={() => onNavigate('article', 'ai-virtual-teacher-edtech-pakistan-guide')} className="px-6 py-3.5 border-2 border-slate-200 hover:border-gold-500 text-slate-800 rounded-xl font-bold uppercase tracking-wide text-xs transition bg-slate-50 hover:bg-gold-500/10 shadow-xs">
                    <i className="fa-solid fa-robot mr-2 text-gold-600"></i> Try Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Filtering & Search Section */}
        <section className="sticky top-[64px] md:top-[72px] z-30 py-4 bg-white/95 backdrop-blur-md border-y border-slate-200/90 shadow-xs" aria-label="Search and Categorization">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none" role="tablist">
              <button
                onClick={() => setActiveCategory('all')}
                className={`category-btn whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${activeCategory === 'all' ? 'bg-gold-500 text-slate-950 border border-gold-600 shadow-sm' : 'bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-950 hover:bg-slate-200'}`}
                role="tab"
                aria-selected={activeCategory === 'all'}
              >
                All Stories
              </button>
              <button
                onClick={() => setActiveCategory('products')}
                className={`category-btn whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${activeCategory === 'products' ? 'bg-gold-500 text-slate-950 border border-gold-600 shadow-sm' : 'bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-950 hover:bg-slate-200'}`}
                role="tab"
                aria-selected={activeCategory === 'products'}
              >
                Products (AI)
              </button>
              <button
                onClick={() => setActiveCategory('services')}
                className={`category-btn whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${activeCategory === 'services' ? 'bg-gold-500 text-slate-950 border border-gold-600 shadow-sm' : 'bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-950 hover:bg-slate-200'}`}
                role="tab"
                aria-selected={activeCategory === 'services'}
              >
                Services
              </button>
              <button
                onClick={() => setActiveCategory('engineering')}
                className={`category-btn whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${activeCategory === 'engineering' ? 'bg-gold-500 text-slate-950 border border-gold-600 shadow-sm' : 'bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-950 hover:bg-slate-200'}`}
                role="tab"
                aria-selected={activeCategory === 'engineering'}
              >
                Engineering
              </button>
            </div>

            <div className="relative w-full md:w-72 lg:w-96 shrink-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <i className="fa-solid fa-magnifying-glass text-slate-400 text-xs"></i>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search technical articles or products..."
                aria-label="Search blog posts"
                className="w-full bg-slate-50 border-2 border-slate-200 focus:border-gold-500 focus:bg-white rounded-full py-2 pl-10 pr-9 text-xs text-slate-900 font-medium transition-all placeholder:text-slate-400 shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-slate-400 hover:text-slate-900"
                  aria-label="Clear Search Input"
                >
                  <i className="fa-solid fa-circle-xmark"></i>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-12 max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col gap-6">
              {searchQuery && (
                <div className="text-sm font-medium text-slate-600 mb-2">
                  Found <span className="text-gold-700 font-bold">{filteredArticles.length}</span> articles matching your query.
                </div>
              )}

              <div id="articles-wrapper" className="grid sm:grid-cols-2 gap-6 transition-all duration-300">
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    className="article-card bg-white rounded-2xl overflow-hidden border-2 border-slate-200/90 hover:border-gold-500/60 shadow-[0_4px_16px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)] transition-all duration-300 flex flex-col group"
                  >
                    <a
                      href={`/article/${article.id}`}
                      onClick={(e) => { e.preventDefault(); onNavigate('article', article.id); }}
                      className="relative aspect-video overflow-hidden bg-slate-100 block"
                      aria-label={`Read article: ${article.title}`}
                    >
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-white/95 backdrop-blur text-slate-950 text-[10px] font-bold uppercase tracking-wider rounded-md border border-slate-200 shadow-xs">
                          {article.categoryLabel}
                        </span>
                      </div>
                    </a>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-slate-950 mb-2 leading-snug">
                        <a
                          href={`/article/${article.id}`}
                          onClick={(e) => { e.preventDefault(); onNavigate('article', article.id); }}
                          className="hover:text-gold-600 transition focus:outline-none focus:underline"
                        >
                          {article.title}
                        </a>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 flex-grow leading-relaxed">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2 relative z-10">
                          <div className="w-6 h-6 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-[10px] font-extrabold text-gold-700">
                            {article.authorInitials}
                          </div>
                          <span className="text-xs font-semibold text-slate-800">{article.author}</span>
                        </div>
                        <span className="text-xs text-slate-500 font-medium">{article.date} • {article.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4 flex flex-col gap-8 sticky top-[150px]">
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200/90 shadow-sm border-t-4 border-t-gold-500">
                <h4 className="font-display font-bold text-slate-950 mb-4 text-lg">Our Departments</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-gold-500/10 p-2.5 rounded-xl text-gold-700 border border-gold-500/20"><i className="fa-solid fa-code"></i></div>
                    <div>
                      <button onClick={() => onNavigate('home')} className="font-bold text-slate-900 hover:text-gold-600 transition text-sm block text-left">
                        1. Services
                      </button>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">Full-stack game dev, web platforms, and custom digital esports infrastructure.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-gold-500/10 p-2.5 rounded-xl text-gold-700 border border-gold-500/20"><i className="fa-solid fa-microchip"></i></div>
                    <div>
                      <button onClick={() => onNavigate('article')} className="font-bold text-slate-900 hover:text-gold-600 transition text-sm block text-left">
                        2. Products
                      </button>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">Building proprietary tools, led by Pakistan's First Virtual AI Teacher platform.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#0e1120] via-[#090b14] to-[#06070b] border border-slate-700 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gold-sheen opacity-10 group-hover:opacity-20 transition duration-500"></div>
                <h4 className="font-display font-bold text-gold-400 mb-2 text-lg">Build With Us</h4>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">Need a custom AI product or high-tier digital service? Get a direct technical consultation.</p>
                <button onClick={() => onNavigate('home')} className="btn-gold block w-full text-center px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg">
                  Book Strategy Call
                </button>
              </div>
            </aside>
          </div>
        </section>

        {/* Dynamic Newsletter & Subscriber Form */}
        <section className="py-16 bg-white border-t border-slate-200 relative" aria-labelledby="newsletter-title">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
            <div className="bg-slate-50/90 border-2 border-slate-200/90 rounded-3xl p-8 md:p-12 text-center shadow-sm">
              <span className="text-xs text-gold-700 uppercase tracking-widest font-bold block mb-2">Technical Journal Updates</span>
              <h2 id="newsletter-title" className="text-2xl md:text-3xl font-display font-bold text-slate-950 mb-3">Subscribe to The 14Lights Dispatch</h2>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-8 leading-relaxed">Receive technical breakdowns, engineering diaries, and early playtest openings directly in your inbox.</p>

              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto relative flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={subscriberEmail}
                  onChange={(e) => setSubscriberEmail(e.target.value)}
                  required
                  placeholder="Enter developer email address"
                  aria-label="Subscriber Email Address"
                  className="flex-1 bg-white border-2 border-slate-200 focus:border-gold-500 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition shadow-xs font-medium"
                />
                <button type="submit" className="btn-gold px-6 py-3 rounded-xl font-bold uppercase tracking-wide text-xs shadow-md hover:shadow-lg">
                  Subscribe <i className="fa-solid fa-paper-plane ml-1"></i>
                </button>
              </form>

              {newsletterStatus === 'success' && (
                <div className="max-w-md mx-auto mt-4 p-3 bg-gold-500/10 border border-gold-500/30 text-gold-800 rounded-xl text-xs font-medium">
                  <i className="fa-solid fa-circle-check mr-2"></i> Registration complete. Thank you for subscribing.
                </div>
              )}
              {newsletterStatus === 'error' && (
                <div className="max-w-md mx-auto mt-4 p-3 bg-red-500/10 border border-red-500/20 text-red-700 rounded-xl text-xs font-medium">
                  <i className="fa-solid fa-triangle-exclamation mr-2"></i> Please provide a valid email format.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Project Pitch Banner */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="p-8 rounded-[2rem] bg-white border-2 border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
            <div className="text-center md:text-left">
              <h5 className="text-xl font-bold text-slate-950 mb-1 tracking-tight">Need Interactive Architecture?</h5>
              <p className="text-slate-600 text-sm">We configure and build web platforms, custom mechanics, and esports modules.</p>
            </div>
            <button onClick={() => onNavigate('home')} className="w-full md:w-auto px-10 py-4 bg-gold-500 text-slate-950 text-xs font-black uppercase tracking-[0.2em] rounded-full shadow-[0_10px_25px_rgba(212,175,55,0.25)] hover:scale-105 hover:bg-slate-950 hover:text-white transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative z-20" aria-label="Site Footer">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group text-left">
                <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden p-1 bg-white ring-2 ring-gold-400/40 shadow-md">
                  <picture className="w-full h-full flex items-center justify-center">
                    <source srcSet="/assets/VR_LOGO.webp" type="image/webp" />
                    <img
                      src={vrLogo}
                      alt="The 14Lights Logo"
                      width={40}
                      height={40}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const fallbacks = ['/assets/VR_LOGO.webp', '/VR_LOGO.webp', '/assets/VR_LOGO.png', '/favicon.png'];
                        const step = parseInt(target.dataset.fallbackStep || '0', 10);
                        if (step < fallbacks.length) {
                          target.dataset.fallbackStep = String(step + 1);
                          target.src = fallbacks[step];
                        } else {
                          target.onerror = null;
                        }
                      }}
                    />
                  </picture>
                </div>
                <span className="text-xl font-display font-bold text-white tracking-wider">
                  The<span className="text-gold-400"> 14 Lights</span>
                </span>
              </button>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Pioneering digital excellence through premium high-performance services and groundbreaking proprietary products, including Pakistan's First Virtual AI Teacher.
              </p>
              <div className="flex items-center gap-4 text-slate-400 mt-2">
                <a href="https://www.facebook.com/profile.php?id=100087743332604" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-slate-900 transition" aria-label="Facebook Page"><i className="fab fa-facebook-f" aria-hidden="true"></i><span className="sr-only">Facebook</span></a>
                <a href="https://discord.gg/6kuByeGNm" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-slate-900 transition" aria-label="Discord Server"><i className="fab fa-discord" aria-hidden="true"></i><span className="sr-only">Discord</span></a>
                <a href="https://wa.me/923163394180" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-slate-900 transition" aria-label="WhatsApp - +92 316 3394180"><i className="fab fa-whatsapp" aria-hidden="true"></i><span className="sr-only">WhatsApp</span></a>
                <a href="https://pk.linkedin.com/company/the14lights" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-slate-900 transition" aria-label="LinkedIn Company Page"><i className="fab fa-linkedin-in" aria-hidden="true"></i><span className="sr-only">LinkedIn</span></a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-white font-display font-bold text-sm tracking-wider uppercase mb-1">Navigation</h2>
              <ul className="space-y-2.5 text-sm">
                <li><button onClick={() => onNavigate('home')} className="hover:text-gold-400 transition">Home</button></li>
                <li><button onClick={() => onNavigate('home')} className="hover:text-gold-400 transition">About</button></li>
                <li><button onClick={() => onNavigate('home')} className="hover:text-gold-400 transition">Portfolio</button></li>
                <li><button onClick={() => onNavigate('newsletter')} className="text-gold-400 font-bold hover:text-gold-300 transition">Newsletter</button></li>
                <li><button onClick={() => onNavigate('blog')} className="hover:text-gold-400 transition">Blog & Insights</button></li>
                <li><button onClick={() => onNavigate('privacy')} className="hover:text-gold-400 transition">Privacy Policy</button></li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-white font-display font-bold text-sm tracking-wider uppercase mb-1">Departments</h2>
              <ul className="space-y-2.5 text-sm">
                <li><button onClick={() => onNavigate('home')} className="hover:text-gold-400 transition flex items-center gap-2"><i className="fa-solid fa-code text-gold-400 text-xs" aria-hidden="true"></i> Services Division</button></li>
                <li><button onClick={() => onNavigate('article')} className="hover:text-gold-400 transition flex items-center gap-2"><i className="fa-solid fa-microchip text-gold-400 text-xs" aria-hidden="true"></i> Products Division</button></li>
                <li><button onClick={() => onNavigate('article')} className="hover:text-gold-400 transition flex items-center gap-2"><i className="fa-solid fa-robot text-gold-400 text-xs" aria-hidden="true"></i> Virtual AI Teacher</button></li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-white font-display font-bold text-sm tracking-wider uppercase mb-1">Stay Updated</h2>
              <p className="text-xs text-slate-400">Subscribe to our newsletter for product releases and tech deep-dives.</p>
              <form className="flex flex-col gap-2 mt-1" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address for newsletter"
                  className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold-400"
                />
                <button type="submit" className="btn-gold text-slate-900 font-bold text-xs py-2 px-3 rounded uppercase tracking-wider">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>&copy; 2026 The 14 Lights. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button onClick={() => onNavigate('privacy')} className="hover:text-slate-300 transition">Privacy Policy</button>
              <button onClick={() => onNavigate('privacy')} className="hover:text-slate-300 transition">Terms of Service</button>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition" aria-label="View XML Sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import {
  Gamepad2,
  Maximize2,
  Minimize2,
  RotateCcw,
  Sparkles,
  Trophy,
  Zap,
  Star,
  Play,
  ArrowLeft,
  Share2,
  CheckCircle2,
  Keyboard,
  Smartphone,
  Info,
  ChevronRight,
  ShieldCheck,
  Flame,
  Target,
  Tv,
  Check,
  Volume2,
  Award,
  Layers,
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { PageView } from '../types';
import { getGameBySlug, GAMES_DATA, GameItem } from '../data/gamesData';
import { updatePageSeo } from '../utils/seo';

interface GameDetailPageProps {
  slug: string;
  onNavigate: (view: PageView, articleOrGameId?: string) => void;
}

export const GameDetailPage: React.FC<GameDetailPageProps> = ({ slug, onNavigate }) => {
  const game: GameItem = getGameBySlug(slug) || GAMES_DATA[0];

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'controls' | 'tips'>('overview');

  const gameContainerRef = useRef<HTMLDivElement>(null);
  const playerSectionRef = useRef<HTMLDivElement>(null);

    // Dynamic SEO Metadata and Schema Injection
  useEffect(() => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const canonicalGameUrl = `https://the14lights.com/game/${game.slug}`;
    const canonicalImageUrl = `https://the14lights.com${game.thumbnailUrl}`;

    // Set Document Title and SEO Metadata
    updatePageSeo({
      title: game.metaTitle || `${game.title} - Play Free Online Game | The 14 Lights`,
      description: game.metaDescription,
      canonicalPath: `/game/${game.slug}`,
      ogImage: canonicalImageUrl,
      ogType: 'game',
    });

    // Inject JSON-LD VideoGame Schema
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'VideoGame',
      name: game.title,
      description: game.shortDescription,
      image: canonicalImageUrl,
      url: canonicalGameUrl,
      genre: [game.categoryLabel, ...game.tags],
      gamePlatform: ['Web Browser', 'WebGL', 'HTML5'],
      applicationCategory: 'Game',
      operatingSystem: 'Windows, macOS, Linux, Android, iOS',
      author: {
        '@type': 'Organization',
        name: 'The 14 Lights',
        url: 'https://the14lights.com/'
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: game.rating.toString(),
        bestRating: '5',
        ratingCount: '150'
      }
    };

    let scriptTag = document.getElementById('game-json-ld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'game-json-ld';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    document.body.className = 'home-page';

    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [game]);

  const handleStartGame = () => {
    setIsPlaying(true);
    setIsLoading(true);
    setHasError(false);
    if (playerSectionRef.current) {
      playerSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleReload = () => {
    setIsLoading(true);
    setHasError(false);
    setIframeKey((prev) => prev + 1);
  };

  const toggleFullscreen = () => {
    if (!gameContainerRef.current) return;
    if (!document.fullscreenElement) {
      gameContainerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(console.error);
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(console.error);
    }
  };

  const handleShare = () => {
    const canonicalShareUrl = `https://the14lights.com/game/${game.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(canonicalShareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const relatedGames = GAMES_DATA.filter((g) => g.id !== game.id);

  // Simplified player-facing engine label (no technical jargon)
  const displayCategory = game.categoryLabel || 'Sports 3D';
  const displayEngine = game.engine.includes('Unity') ? '3D Graphics' : 'HTML5 Engine';

  return (
    <div className="min-h-screen bg-[#08090d] text-[#e6eef8] font-sans selection:bg-gold-500/30 selection:text-gold-400">
      {/* Top Header / Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#08090d]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Back & Breadcrumb */}
          <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-gold-400 transition font-semibold group flex-shrink-0"
              aria-label="Back to Games"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="hidden sm:inline">Games Catalog</span>
              <span className="sm:hidden">Back</span>
            </button>
            <div className="h-4 w-px bg-white/15 hidden sm:block"></div>
            <div className="hidden md:flex items-center gap-2 text-xs text-gray-400 truncate">
              <span>Home</span>
              <ChevronRight className="w-3 h-3 text-gold-500/60" />
              <span>Games</span>
              <ChevronRight className="w-3 h-3 text-gold-500/60" />
              <span className="text-gold-400 font-bold truncate max-w-[180px]">{game.title}</span>
            </div>
          </div>

          {/* Right: Quick Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/5 hover:bg-gold-500/15 text-gray-200 hover:text-gold-400 border border-white/10 hover:border-gold-500/30 transition"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={() => onNavigate('home')}
              className="btn-gold px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5"
            >
              <Gamepad2 className="w-3.5 h-3.5 fill-dark-950" />
              <span className="hidden sm:inline">Explore All Games</span>
              <span className="sm:hidden">Catalog</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-10 sm:space-y-12">
        
        {/* ========================================================= */}
        {/* HERO BANNER SECTION (Modern Gaming Portal Header) */}
        {/* ========================================================= */}
        <section className="relative rounded-3xl overflow-hidden border border-gold-500/20 bg-gradient-to-b from-[#11131f] to-[#0d0f18] shadow-2xl">
          {/* Ambient Blurred Artwork Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <img
              src={game.bannerUrl}
              alt={game.title}
              className="w-full h-full object-cover blur-md scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f18] via-[#0d0f18]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f18] via-transparent to-[#0d0f18]/90"></div>
          </div>

          <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Game Cover Poster Thumbnail */}
            <div className="relative flex-shrink-0 group">
              <div className="w-48 sm:w-56 md:w-60 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gold-500/40 bg-black/90 shadow-[0_0_30px_rgba(212,175,55,0.25)] relative">
                <img
                  src={game.thumbnailUrl}
                  alt={game.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-gold-500/40 text-[10px] font-bold text-gold-400 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>FREE ONLINE</span>
                </div>
              </div>
            </div>

            {/* Game Header Details */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider">
                <span className="px-3 py-1 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-gold-400" />
                  {displayCategory}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 flex items-center gap-1.5">
                  <Tv className="w-3.5 h-3.5 text-gold-400" />
                  {displayEngine}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Instant Play
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight mb-2 drop-shadow-sm">
                  {game.title}
                </h1>
                <p className="text-base sm:text-lg text-gold-400/90 font-medium">
                  {game.subtitle}
                </p>
              </div>

              {/* Short Description */}
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed font-light">
                {game.shortDescription}
              </p>

              {/* Quick Stats Bar */}
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm text-gray-300">
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-xl border border-white/10">
                  <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                  <span className="font-bold text-white">{game.rating}</span>
                  <span className="text-gray-400">/ 5.0</span>
                </div>

                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-xl border border-white/10">
                  <Trophy className="w-4 h-4 text-gold-400" />
                  <span className="text-gray-400">Plays:</span>
                  <span className="font-bold text-gold-400">{game.playsCount}</span>
                </div>

                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-xl border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-400">Developer:</span>
                  <span className="font-semibold text-white">{game.developer}</span>
                </div>
              </div>

              {/* Hero Action CTA Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-4">
                <button
                  onClick={handleStartGame}
                  className="btn-gold px-8 py-3.5 rounded-xl text-sm sm:text-base font-extrabold uppercase tracking-wider flex items-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition duration-300"
                >
                  <Play className="w-5 h-5 fill-dark-950" />
                  <span>Play Game Now</span>
                </button>

                <a
                  href="#how-to-play"
                  className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white border border-white/15 text-xs sm:text-sm font-bold flex items-center gap-2 transition"
                >
                  <HelpCircle className="w-4 h-4 text-gold-400" />
                  <span>How To Play</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* GAME PLAYER SECTION (Sleek Arena Viewport) */}
        {/* ========================================================= */}
        <section ref={playerSectionRef} id="game-player" className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-lg sm:text-xl font-bold font-display text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-gold-400 animate-pulse" />
              <span>Game Arena</span>
            </h2>
            <div className="text-xs text-gray-400 hidden sm:flex items-center gap-3">
              <span className="flex items-center gap-1 text-emerald-400">
                <Check className="w-3.5 h-3.5" /> Fullscreen Available
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-gold-400">
                <Smartphone className="w-3.5 h-3.5" /> Touch & Keyboard Ready
              </span>
            </div>
          </div>

          {/* Game Canvas Viewport Container */}
          <div
            ref={gameContainerRef}
            className={`relative w-full bg-[#0a0c12] border-2 border-gold-500/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col transition-all duration-300 ${
              isTheaterMode ? 'min-h-[600px] sm:min-h-[720px] md:min-h-[820px]' : 'aspect-video min-h-[380px] sm:min-h-[480px] md:min-h-[600px]'
            }`}
          >
            {/* Top Player Control Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-black/95 border-b border-white/10 z-20">
              <div className="flex items-center gap-2.5 truncate">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                <span className="text-xs font-bold text-white tracking-wider uppercase truncate flex items-center gap-2">
                  {game.title}
                  <span className="hidden sm:inline-block text-[10px] text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20">
                    {displayCategory}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => setIsTheaterMode(!isTheaterMode)}
                  title={isTheaterMode ? "Standard View" : "Expand View"}
                  className="p-1.5 px-2.5 rounded-lg bg-white/5 hover:bg-gold-500/20 text-gray-300 hover:text-gold-400 transition text-xs flex items-center gap-1.5 border border-white/10"
                >
                  <Tv className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">{isTheaterMode ? 'Standard' : 'Theater View'}</span>
                </button>

                {isPlaying && (
                  <button
                    onClick={handleReload}
                    title="Reload Game"
                    className="p-1.5 px-2.5 rounded-lg bg-white/5 hover:bg-gold-500/20 text-gray-300 hover:text-gold-400 transition text-xs flex items-center gap-1.5 border border-white/10"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span className="hidden md:inline">Reload</span>
                  </button>
                )}

                <button
                  onClick={toggleFullscreen}
                  title="Toggle Fullscreen"
                  className="p-1.5 px-2.5 rounded-lg bg-gold-500/15 hover:bg-gold-500/30 text-gold-300 border border-gold-500/30 transition text-xs flex items-center gap-1.5 font-bold"
                >
                  {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
                </button>
              </div>
            </div>

            {/* Live Screen Area */}
            <div className="relative flex-1 w-full bg-black overflow-hidden flex items-center justify-center">
              {!isPlaying ? (
                /* Interactive Splash Screen Cover */
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-t from-black via-black/85 to-black/60">
                  <div className="absolute inset-0 -z-10 opacity-30 blur-sm scale-105">
                    <img
                      src={game.bannerUrl}
                      alt={game.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 p-0.5 shadow-[0_0_35px_rgba(212,175,55,0.4)]">
                      <div className="w-full h-full bg-[#0d0f18] rounded-[14px] flex items-center justify-center">
                        <Gamepad2 className="w-10 h-10 text-gold-400" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-2">
                    {game.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mb-6 leading-relaxed font-light">
                    {game.shortDescription}
                  </p>

                  <button
                    onClick={handleStartGame}
                    className="btn-gold px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold uppercase tracking-wider flex items-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition duration-300"
                  >
                    <Play className="w-5 h-5 fill-dark-950" />
                    <span>Click To Start Game</span>
                  </button>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-300">
                    <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      No Download Needed
                    </span>
                    <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Free Full Version
                    </span>
                    <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      60 FPS Game Engine
                    </span>
                  </div>
                </div>
              ) : (
                /* Embedded Live Game Container */
                <>
                  {isLoading && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0d0f18] p-6 text-center">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 rounded-full border-4 border-gold-500/20 border-t-gold-400 animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-gold-400 animate-pulse" />
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">Preparing {game.title}...</h4>
                      <p className="text-xs text-gray-400 max-w-sm">
                        Initializing match environment and graphics shader assets...
                      </p>
                    </div>
                  )}

                  {hasError && (
                    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#0d0f18] p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mb-4 text-xl font-bold">
                        !
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">Unable to connect game frame</h4>
                      <p className="text-xs text-gray-400 max-w-sm mb-6">
                        Please check your internet connection or reload the game player.
                      </p>
                      <button
                        onClick={handleReload}
                        className="btn-gold px-6 py-2.5 rounded-lg text-xs font-bold uppercase"
                      >
                        Reload Game
                      </button>
                    </div>
                  )}

                  <iframe
                    key={iframeKey}
                    src={game.gameUrl}
                    title={game.title}
                    className="w-full h-full border-0 relative z-0"
                    allow="autoplay; fullscreen; microphone; camera; focus-without-user-activation; accelerometer; gyroscope"
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                      setIsLoading(false);
                      setHasError(true);
                    }}
                  />
                </>
              )}
            </div>

            {/* Bottom Controls Legend Bar */}
            <div className="px-4 py-2 bg-black/95 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-gray-400 gap-2">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-gold-400 font-semibold">
                  <Keyboard className="w-3.5 h-3.5" />
                  <span>Controls:</span>
                </span>
                <span className="text-gray-300 font-mono text-[11px] truncate">
                  {game.controls.map((c) => c.key).slice(0, 3).join(' • ')}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span>The 14 Lights</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* GAME INFORMATION TABS & DETAILS SECTIONS */}
        {/* ========================================================= */}
        <section className="space-y-8">
          {/* Section Navigation Tabs */}
          <div className="flex border-b border-white/10 gap-2 sm:gap-6 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 px-1 text-sm sm:text-base font-bold transition flex items-center gap-2 whitespace-nowrap border-b-2 ${
                activeTab === 'overview'
                  ? 'border-gold-400 text-gold-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <Info className="w-4 h-4" />
              <span>Game Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('controls')}
              className={`pb-3 px-1 text-sm sm:text-base font-bold transition flex items-center gap-2 whitespace-nowrap border-b-2 ${
                activeTab === 'controls'
                  ? 'border-gold-400 text-gold-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <Keyboard className="w-4 h-4" />
              <span>How To Play & Controls</span>
            </button>

            <button
              onClick={() => setActiveTab('tips')}
              className={`pb-3 px-1 text-sm sm:text-base font-bold transition flex items-center gap-2 whitespace-nowrap border-b-2 ${
                activeTab === 'tips'
                  ? 'border-gold-400 text-gold-400'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <Lightbulb className="w-4 h-4 text-gold-400" />
              <span>Pro Strategy & Tips</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column (2 Cols) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* TAB 1: OVERVIEW */}
              {(activeTab === 'overview' || true) && (
                <div className="space-y-8">
                  {/* About the Game */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#0e101b] border border-white/10 space-y-4 shadow-xl">
                    <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2 border-b border-white/10 pb-3">
                      <Target className="w-5 h-5 text-gold-400" />
                      <span>About {game.title}</span>
                    </h2>
                    <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-4 font-light whitespace-pre-line">
                      {game.fullDescription}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#0e101b] border border-white/10 space-y-6 shadow-xl">
                    <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2 border-b border-white/10 pb-3">
                      <Sparkles className="w-5 h-5 text-gold-400" />
                      <span>Game Features & Highlights</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {game.features.map((feature, idx) => {
                        const [title, ...descParts] = feature.split(':');
                        const desc = descParts.join(':');
                        return (
                          <div
                            key={idx}
                            className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-gold-500/30 transition space-y-1.5"
                          >
                            <div className="flex items-center gap-2 text-gold-400 font-bold text-sm">
                              <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                              <span>{title}</span>
                            </div>
                            {desc && <p className="text-xs text-gray-300 leading-relaxed pl-6 font-light">{desc}</p>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: HOW TO PLAY & CONTROLS */}
              <div id="how-to-play" className="space-y-8">
                {/* How To Play Step by Step */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0e101b] border border-white/10 space-y-6 shadow-xl">
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2 border-b border-white/10 pb-3">
                    <Trophy className="w-5 h-5 text-gold-400" />
                    <span>How to Play {game.title}</span>
                  </h2>

                  <ol className="space-y-4">
                    {game.howToPlay.map((step, idx) => (
                      <li key={idx} className="flex gap-4 items-start p-3 rounded-xl bg-white/5 border border-white/5">
                        <span className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5 shadow-sm">
                          {idx + 1}
                        </span>
                        <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light pt-0.5">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Controls Keybindings */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0e101b] border border-white/10 space-y-6 shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2">
                      <Keyboard className="w-5 h-5 text-gold-400" />
                      <span>Controls Guide</span>
                    </h2>
                    <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1 font-semibold">
                      <Smartphone className="w-3.5 h-3.5" />
                      Touch & Mobile Support Included
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-white/10">
                    <table className="w-full text-left text-sm text-gray-300">
                      <thead className="text-xs uppercase bg-white/10 text-gold-400 border-b border-white/10">
                        <tr>
                          <th scope="col" className="px-4 py-3 font.bold">Input / Key</th>
                          <th scope="col" className="px-4 py-3 font-bold">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 bg-black/40">
                        {game.controls.map((ctrl, idx) => (
                          <tr key={idx} className="hover:bg-white/5 transition">
                            <td className="px-4 py-3.5 text-xs font-bold text-white">
                              <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 inline-block font-mono text-gold-300 shadow-sm">
                                {ctrl.key}
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-sm text-gray-200 font-medium">{ctrl.action}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* TAB 3: PRO TIPS & STRATEGY */}
              {game.tips && game.tips.length > 0 && (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0e101b] border border-gold-500/20 space-y-6 shadow-xl">
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-white flex items-center gap-2 border-b border-white/10 pb-3">
                    <Lightbulb className="w-5 h-5 text-gold-400 animate-pulse" />
                    <span>Pro Gaming Tips & Tactics</span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {game.tips.map((tip, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/25 space-y-2"
                      >
                        <div className="flex items-center gap-2 text-gold-400 font-bold text-xs uppercase tracking-wider">
                          <Award className="w-4 h-4 text-gold-400" />
                          <span>Tip #{idx + 1}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
                          {tip}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar Column (1 Col): Specs & Quick Info */}
            <div className="space-y-6">
              {/* Game Specifications Card */}
              <div className="p-6 rounded-2xl bg-[#0e101b] border border-white/10 space-y-5 shadow-xl">
                <h3 className="text-lg font-bold font-display text-white border-b border-white/10 pb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-gold-400" />
                  <span>Game Information</span>
                </h3>

                <div className="space-y-3.5 text-sm">
                  <div className="flex justify-between items-center py-1 border-b border-white/5">
                    <span className="text-gray-400">Developer</span>
                    <span className="font-semibold text-gold-400">{game.developer}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/5">
                    <span className="text-gray-400">Category</span>
                    <span className="font-medium text-white">{game.categoryLabel}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/5">
                    <span className="text-gray-400">Rating</span>
                    <span className="font-bold text-gold-400 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-gold-400" />
                      {game.rating} / 5.0
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/5">
                    <span className="text-gray-400">Plays</span>
                    <span className="font-bold text-white">{game.playsCount}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/5">
                    <span className="text-gray-400">Platform</span>
                    <span className="font-medium text-emerald-400">Web Browser & Mobile</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/5">
                    <span className="text-gray-400">Price</span>
                    <span className="font-bold text-emerald-400">100% Free</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Tags & Themes
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {game.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:border-gold-500/40 transition"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-gold-950/40 via-[#0e101b] to-[#0e101b] border border-gold-500/25 space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-gold-400 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-gold-400" />
                  <span>Verified Release</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  Published and verified by The 14 Lights. Optimized for fast browser performance, responsive touchscreen controls, and high-definition visual render.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* RELATED / RECOMMENDED GAMES SECTION */}
        {/* ========================================================= */}
        {relatedGames.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold font-display text-white flex items-center gap-2">
                  <Gamepad2 className="w-6 h-6 text-gold-400" />
                  <span>More Games You Might Like</span>
                </h2>
                <p className="text-xs text-gray-400 mt-1">Explore other free online games from The 14 Lights</p>
              </div>
              <button
                onClick={() => onNavigate('home')}
                className="text-xs text-gold-400 hover:text-gold-300 font-bold flex items-center gap-1"
              >
                <span>View All Games</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedGames.map((relGame) => (
                <div
                  key={relGame.id}
                  className="rounded-2xl bg-[#0e101b] border border-white/10 overflow-hidden hover:border-gold-500/40 transition duration-300 flex flex-col sm:flex-row group shadow-xl"
                >
                  <div className="sm:w-2/5 relative h-48 sm:h-auto overflow-hidden bg-black flex items-center justify-center p-3">
                    <img
                      src={relGame.thumbnailUrl}
                      alt={relGame.title}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/80 text-[10px] font-bold text-gold-400 border border-gold-500/30">
                      FREE ONLINE
                    </div>
                  </div>

                  <div className="sm:w-3/5 p-5 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="text-xs font-bold text-gold-400 uppercase tracking-wider mb-1">
                        {relGame.categoryLabel}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-gold-300 transition">
                        {relGame.title}
                      </h3>
                      <p className="text-xs text-gray-300 line-clamp-2 mt-1 leading-relaxed font-light">
                        {relGame.shortDescription}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="flex items-center gap-1 text-xs text-gold-400 font-bold">
                        <Star className="w-3.5 h-3.5 fill-gold-400" />
                        <span>{relGame.rating}</span>
                      </div>
                      <button
                        onClick={() => onNavigate('game', relGame.slug)}
                        className="btn-gold px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:scale-105 transition"
                      >
                        <Play className="w-3 h-3 fill-dark-950" />
                        <span>Play Game</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 bg-[#050609] text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} The 14 Lights. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <button onClick={() => onNavigate('home')} className="hover:text-gold-400 transition">Games Catalog</button>
            <button onClick={() => onNavigate('newsletter')} className="hover:text-gold-400 transition">Newsletter</button>
            <button onClick={() => onNavigate('blog')} className="hover:text-gold-400 transition">Articles & Tech</button>
            <button onClick={() => onNavigate('privacy')} className="hover:text-gold-400 transition">Privacy Policy</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

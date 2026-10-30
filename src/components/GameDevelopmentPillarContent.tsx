import React, { useState } from 'react';

interface GameDevelopmentPillarContentProps {
  onNavigate: (view: any, articleOrGameId?: string) => void;
}

export const GameDevelopmentPillarContent: React.FC<GameDevelopmentPillarContentProps> = ({
  onNavigate,
}) => {
  const [activeEngineTab, setActiveEngineTab] = useState<'unity' | 'unreal' | 'godot'>('unreal');
  const [activePlatformFilter, setActivePlatformFilter] = useState<'all' | 'mobile' | 'pc' | 'console' | 'vr'>('all');

  return (
    <div id="article-content" className="text-slate-800 leading-relaxed space-y-10 font-sans">
      {/* Intro Lead Paragraph */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white shadow-xl border border-gold-500/25 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30 text-xs font-bold uppercase tracking-wider mb-4 font-heading">
          <i className="fa-solid fa-gamepad text-gold-400"></i> Cornerstone Technical Guide
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4 tracking-tight">
          Engineering Immersive Worlds: From Concept to Cross-Platform Deployment
        </h2>
        <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light mb-4">
          Game development turns an idea into an interactive experience that people can play, explore, and enjoy. It combines game design, programming, visual art, animation, audio, testing, and technical optimization to create games for different platforms and audiences. Whether you are planning a mobile game, a competitive multiplayer experience, a PC title, or an immersive virtual reality project, the right development approach begins with a clear concept and a realistic production plan.
        </p>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
          <strong>The 14 Lights</strong> is an immersive technology company based in Karachi, Pakistan, working across game development, AI, virtual reality, and extended reality. Its engineering division highlights specialized game architecture for PC, mobile, console, and VR, alongside playable productions including <strong>Crazy FIFA 2026</strong> and <strong>Soccer Disc League</strong>.
        </p>
      </div>

      {/* 1. Quick Answer: What Is Game Development? */}
      <section id="section-quick-answer" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">01</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Quick Answer: What Is Game Development?
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6">
          <strong>Game development</strong> is the holistic process of planning, designing, programming, testing, and launching a video game. It encompasses 2D or 3D graphics creation, physics mechanics, artificial intelligence, spatial sound design, multiplayer networking, and platform-specific performance optimization. Depending on the project's requirements, a game may be deployed natively for Android, iOS, Windows PC, consoles (PlayStation, Xbox, Nintendo), WebGL web browsers, or VR headsets.
        </p>

        {/* Quick Answer Key Takeaways Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
          <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3">
              <i className="fa-solid fa-compass-drafting text-sm"></i>
            </div>
            <div className="text-xs uppercase font-bold text-slate-400 font-heading">Phased Pipeline</div>
            <div className="font-bold text-slate-900 text-sm mt-0.5">Concept to Post-Launch</div>
            <p className="text-xs text-slate-500 mt-1">Structured 7-stage roadmap minimizing technical risk.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mb-3">
              <i className="fa-solid fa-microchip text-sm"></i>
            </div>
            <div className="text-xs uppercase font-bold text-slate-400 font-heading">Multi-Engine Mastery</div>
            <div className="font-bold text-slate-900 text-sm mt-0.5">UE5, Unity &amp; Godot</div>
            <p className="text-xs text-slate-500 mt-1">Engine chosen strictly by performance &amp; platform targets.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center mb-3">
              <i className="fa-solid fa-network-wired text-sm"></i>
            </div>
            <div className="text-xs uppercase font-bold text-slate-400 font-heading">Netcode Architecture</div>
            <div className="font-bold text-slate-900 text-sm mt-0.5">Real-Time Multiplayer</div>
            <p className="text-xs text-slate-500 mt-1">Authoritative state, matchmaking &amp; low-latency sync.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-3">
              <i className="fa-solid fa-vr-cardboard text-sm"></i>
            </div>
            <div className="text-xs uppercase font-bold text-slate-400 font-heading">Spatial Reality</div>
            <div className="font-bold text-slate-900 text-sm mt-0.5">VR / AR / MR (XR)</div>
            <p className="text-xs text-slate-500 mt-1">6DoF tracking, spatial audio, and 90+ FPS comfort.</p>
          </div>
        </div>
      </section>

      {/* 2. What Are Game Development Services? */}
      <section id="section-services-scope" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">02</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            What Are Game Development Services?
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6">
          Game development services encompass the complete suite of technical and creative disciplines required to convert an unformed concept into a certified, market-ready interactive product. The exact production scope varies dynamically based on genre, platform matrix, visual art requirements, and monetization architecture.
        </p>

        {/* 9 Core Modular Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: 'fa-brain',
              title: 'Concept & Technical Planning',
              desc: 'Game Design Document (GDD) creation, core loop definition, mechanics prototyping, and technical risk assessment.',
              tag: 'Pre-Production',
            },
            {
              icon: 'fa-code',
              title: 'Gameplay Programming',
              desc: 'C++, C#, and Blueprint engineering for player physics, responsive controls, progression systems, and inventory logic.',
              tag: 'Engineering',
            },
            {
              icon: 'fa-cubes',
              title: '2D & 3D Asset Creation',
              desc: 'Character modeling, rigging, skeletal animation, PBR materials, stylized environments, and shader development.',
              tag: 'Art & Animation',
            },
            {
              icon: 'fa-mobile-screen',
              title: 'Mobile Game Development',
              desc: 'Optimized touch input, memory budgets, battery-efficient rendering, and Google Play / Apple App Store certification.',
              tag: 'Android & iOS',
            },
            {
              icon: 'fa-display',
              title: 'PC & Console Engineering',
              desc: 'DirectX 12 / Vulkan scaling, controller mapping, Steam Deck verification, and Sony PlayStation / Xbox certification.',
              tag: 'High Fidelity',
            },
            {
              icon: 'fa-users',
              title: 'Multiplayer & Backend Netcode',
              desc: 'Authoritative server architecture, WebSocket / UDP synchronization, matchmaking, and cheat-prevention systems.',
              tag: 'Online Systems',
            },
            {
              icon: 'fa-glasses',
              title: 'VR & XR Spatial Development',
              desc: 'Meta Quest 3, Apple Vision Pro, and SteamVR spatial tracking, hand interactions, and motion sickness reduction.',
              tag: 'Spatial Tech',
            },
            {
              icon: 'fa-gauge-high',
              title: 'Profiling & Performance Optimization',
              desc: 'Draw call batching, LOD management, occlusion culling, and memory leak elimination to maintain locked frame rates.',
              tag: 'QA & Polish',
            },
            {
              icon: 'fa-cloud-arrow-up',
              title: 'Publishing & LiveOps Support',
              desc: 'Store metadata preparation, analytics integration, content updates, seasonal events, and post-launch maintenance.',
              tag: 'Lifecycle',
            },
          ].map((srv, idx) => (
            <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-gold-500/50 hover:shadow-md transition group">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-gold-500/15 group-hover:text-gold-700 text-slate-700 flex items-center justify-center transition">
                  <i className={`fa-solid ${srv.icon}`}></i>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-heading">
                  {srv.tag}
                </span>
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base mb-2 group-hover:text-gold-700 transition">
                {srv.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The 14 Lights Portfolio Showcase */}
      <section id="section-14-lights-portfolio" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">03</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            The 14 Lights: A Game Development Company for Interactive Experiences
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6">
          Choosing a game development partner requires evaluating engineering rigour, aesthetic excellence, and transparent communication. <strong>The 14 Lights</strong> operates at the nexus of game design and spatial computing, delivering titles and simulations optimized for Windows PC, Android, iOS, WebGL, PlayStation, Xbox, and Meta Quest.
        </p>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Crazy FIFA 2026 */}
          <div className="bg-slate-900 text-white rounded-2xl overflow-hidden border border-slate-800 shadow-lg flex flex-col justify-between group">
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-gold-500 text-black font-heading">
                  Playable Now
                </span>
                <span className="text-xs text-slate-400 font-mono">3D WebGL / Simulation</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-gold-400 transition">
                Crazy FIFA 2026
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                A high-energy 3D WebGL football match engine featuring dynamic AI-driven opposition, realistic stadium lighting, full controller and keyboard inputs, and responsive goal physics right in the browser.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] text-slate-300">Three.js / WebGL</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] text-slate-300">AI Team Logic</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] text-slate-300">60 FPS Locked</span>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={() => onNavigate('game', 'crazy-fifa-2026')}
                className="w-full py-3 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-gold-500 text-black hover:bg-gold-400 transition flex items-center justify-center gap-2 shadow-sm"
              >
                <i className="fa-solid fa-play"></i> Play Crazy FIFA 2026 Now
              </button>
            </div>
          </div>

          {/* Soccer Disc League */}
          <div className="bg-slate-900 text-white rounded-2xl overflow-hidden border border-slate-800 shadow-lg flex flex-col justify-between group">
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-gold-500 text-black font-heading">
                  Playable Now
                </span>
                <span className="text-xs text-slate-400 font-mono">Physics / Turn-Based</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-gold-400 transition">
                Soccer Disc League
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                A tactical turn-based football game built around precision disc trajectory physics, angle calculations, team formations, and strategic bank shots.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] text-slate-300">Physics Trajectories</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] text-slate-300">Turn Strategy</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] text-slate-300">Cross-Platform</span>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={() => onNavigate('game', 'soccer-disc-league')}
                className="w-full py-3 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-gold-500 text-black hover:bg-gold-400 transition flex items-center justify-center gap-2 shadow-sm"
              >
                <i className="fa-solid fa-play"></i> Play Soccer Disc League
              </button>
            </div>
          </div>

          {/* Rogue Strike */}
          <div className="bg-slate-50 text-slate-800 rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 font-heading">
                  In Active Development
                </span>
                <span className="text-xs text-slate-500 font-mono">Tactical Shooter</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">
                Rogue Strike
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                An intense tactical action shooter engineered in Unreal Engine 5, prioritizing close-quarters ballistics, dynamic cover systems, and intelligent squad flanking.
              </p>
            </div>
            <div className="text-[11px] text-slate-500 italic border-t border-slate-200 pt-3">
              Target platforms: PC (Steam) &amp; Next-Gen Consoles
            </div>
          </div>

          {/* Veil of Mirrors */}
          <div className="bg-slate-50 text-slate-800 rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 font-heading">
                  In Active Development
                </span>
                <span className="text-xs text-slate-500 font-mono">Cinematic RPG</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">
                Veil of Mirrors
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                A narrative-driven action-adventure incorporating Lumen global illumination and Nanite geometry for high-fidelity surreal landscapes.
              </p>
            </div>
            <div className="text-[11px] text-slate-500 italic border-t border-slate-200 pt-3">
              Target platforms: PC, PlayStation 5, Xbox Series X
            </div>
          </div>
        </div>
      </section>

      {/* 4. Custom Game Development for Your Idea */}
      <section id="section-custom-dev" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">04</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Custom Game Development for Your Idea
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          Custom game development means engineering a game around a bespoke concept, target demographic, unique mechanics, and specific technical requirements rather than relying on restrictive marketplace templates.
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          Whether you are an independent game studio, an enterprise venturing into gamification, an educational institution, or a global entertainment franchise, custom production aligns the codebase with your commercial goals.
        </p>

        {/* Prototyping / MVP Spotlight */}
        <div className="p-6 bg-amber-500/10 border-l-4 border-gold-500 rounded-r-2xl mb-6">
          <h3 className="text-base font-heading font-bold text-slate-900 mb-2 flex items-center gap-2">
            <i className="fa-solid fa-lightbulb text-gold-600"></i> The Power of the Minimum Viable Product (MVP) Prototype
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            The most cost-effective and risk-mitigated entry point into game development is a playable <strong>prototype (vertical slice)</strong>. A prototype validates core mechanics—testing whether the controls feel natural, whether the camera behavior is comfortable, and whether the core gameplay loop retains player interest—before committing large financial resources into full 3D asset modeling and audio production.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Tailored Gameplay Mechanics</h4>
            <p className="text-xs text-slate-600">Original progression trees, unique combat or puzzle mechanics, and responsive input feel.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Custom In-Game Economies</h4>
            <p className="text-xs text-slate-600">Balanced monetization, reward drop tables, season passes, and anti-inflation mechanics.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Dedicated Platform Integrations</h4>
            <p className="text-xs text-slate-600">Seamless integration with Steamworks, Epic Online Services, Apple Game Center, and Google Play Games.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Simulations &amp; Gamified Training</h4>
            <p className="text-xs text-slate-600">Serious games engineered for vocational training, flight simulation, or medical procedural practice.</p>
          </div>
        </div>
      </section>

      {/* 5. Mobile Game Development for Android and iOS */}
      <section id="section-mobile-dev" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">05</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Mobile Game Development for Android and iOS
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6">
          Mobile game development accounts for over 50% of the global gaming market revenue. However, engineering for mobile requires mastering hardware diversity, aggressive thermal throttling, dynamic memory constraints, and platform compliance for both Google Play and the Apple App Store.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Android Card */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <i className="fa-brands fa-android text-emerald-500 text-xl"></i>
              <h3 className="font-heading font-bold text-slate-900 text-lg">Android Game Development</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Android represents thousands of unique device profiles across Snapdragon, MediaTek, and Exynos processors. Development demands rigorous testing across low-end, mid-range, and flagship devices to prevent thermal dips and framerate degradation.
            </p>
            <ul className="text-xs text-slate-700 space-y-2">
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                <span><strong>Google Play Asset Delivery (PAD):</strong> Dynamic texture compression format (ASTC) streaming.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                <span><strong>Vulkan API Backend:</strong> Low-overhead rendering for reduced battery consumption.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                <span><strong>Google Play Console Compliance:</strong> Target API 34+ and 64-bit architecture requirements.</span>
              </li>
            </ul>
          </div>

          {/* iOS Card */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <i className="fa-brands fa-apple text-slate-900 text-xl"></i>
              <h3 className="font-heading font-bold text-slate-900 text-lg">iOS Game Development</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Apple's iOS ecosystem offers uniform, high-performance silicon (A-series and M-series chips). Engineering prioritizes Apple's Metal rendering API, strict human interface guidelines, and privacy-first tracking architectures.
            </p>
            <ul className="text-xs text-slate-700 space-y-2">
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check text-slate-900 mt-0.5"></i>
                <span><strong>Metal 3 Graphics Acceleration:</strong> MetalFX spatial and temporal upscaling.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check text-slate-900 mt-0.5"></i>
                <span><strong>ProMotion 120Hz Support:</strong> Fluid variable refresh rates across iPad Pro and iPhone Pro.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-check text-slate-900 mt-0.5"></i>
                <span><strong>App Store Guidelines Compliance:</strong> In-App Purchase sandbox testing and ATT compliance.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* What makes a good mobile game? */}
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
          <h4 className="font-heading font-bold text-slate-900 text-sm mb-3">
            Checklist: What Makes a Successful Mobile Title?
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
            <div className="p-3 bg-white rounded-lg border border-slate-200/60">
              <strong className="block text-slate-900 mb-1">Intuitive Touch Ergonomics</strong>
              Fitts' Law thumb-zone layout, haptic feedback, and customizable floating analog sticks.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200/60">
              <strong className="block text-slate-900 mb-1">Instant Session Resumption</strong>
              Zero-latency state saves when suspended or interrupted by phone calls.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200/60">
              <strong className="block text-slate-900 mb-1">Graceful Network Degradation</strong>
              Offline play capabilities and seamless reconnection logic on fluctuating cellular networks.
            </div>
          </div>
        </div>
      </section>

      {/* 6. PC and Console Game Development */}
      <section id="section-pc-console" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">06</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            PC and Console Game Development
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6">
          PC and console titles deliver expansive, graphically demanding experiences across high-refresh-rate desktop monitors and living-room 4K displays. Engineering across these ecosystems introduces strict certification protocols, variable hardware scaling, and standardized gamepad UX.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="font-heading font-bold text-slate-900 text-base mb-2">PC Game Engineering</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Must scale smoothly from integrated GPUs to ultra-high-end NVIDIA RTX 4090 rigs. Key development considerations:
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
              <li>Comprehensive graphics menus (FOV, DLSS, FSR, frame limiters, VSync).</li>
              <li>Rebindable keyboard, mouse, and multi-controller mapping.</li>
              <li>Steamworks API (Cloud saves, achievements, workshop, trading cards).</li>
              <li>Steam Deck compatibility verification (proton optimization).</li>
            </ul>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="font-heading font-bold text-slate-900 text-base mb-2">Console Certification</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Sony PlayStation and Microsoft Xbox enforce non-negotiable Technical Requirements Checklists (TRC/TCR):
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
              <li>Account switching and user profile disconnect handling.</li>
              <li>Fixed 30, 60, or 120 FPS performance guarantees without dips.</li>
              <li>DualSense haptics and adaptive trigger integration.</li>
              <li>Mandatory localized error messaging and cloud save integrity.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. 2D vs. 3D Game Development */}
      <section id="section-2d-3d" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">07</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            2D vs. 3D Game Development: The Engineering Choice
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6">
          The difference between 2D and 3D game development is not merely visual aesthetics—it dictates coordinate mathematics, physics engines, animation pipelines, memory footprints, and camera projection matrices.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs mb-6">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-white font-heading uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-3.5">Dimension Factor</th>
                <th className="p-3.5">2D Game Development</th>
                <th className="p-3.5">3D Game Development</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Art Pipeline</td>
                <td className="p-3.5">Sprites, pixel art, spine skeletal rigs, vector graphics, parallax layers.</td>
                <td className="p-3.5">3D polygon meshes, UV unwrapping, PBR textures, bone rigging, blend shapes.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Physics Simulation</td>
                <td className="p-3.5">Box2D / simple AABB collision detection, lower CPU calculation load.</td>
                <td className="p-3.5">PhysX / Chaos physics, raycasting, mesh colliders, inverse kinematics (IK).</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Lighting &amp; Shaders</td>
                <td className="p-3.5">2D normal maps, sprite lights, or flat hand-painted lighting.</td>
                <td className="p-3.5">Real-time dynamic global illumination (Lumen), shadow cascades, screen-space reflections.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Prototyping Speed</td>
                <td className="p-3.5">Faster iteration on core mechanics with greybox sprites.</td>
                <td className="p-3.5">Requires 3D blocking, camera frustum tuning, and spatial collision setup.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Typical Genres</td>
                <td className="p-3.5">Platformers, turn-based tactics, metroidvanias, puzzles, card battlers.</td>
                <td className="p-3.5">Action RPGs, sports simulations, first-person shooters, racing, VR worlds.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. Unity vs. Unreal Engine 5 vs. Godot Engine Showdown */}
      <section id="section-engines" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">08</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Game Engine Comparison: Unity vs. Unreal Engine 5 vs. Godot
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6">
          Selecting the appropriate game engine is the most consequential architectural decision of any project. The decision must be driven by performance targets, target platforms, licensing models, and team language expertise.
        </p>

        {/* Engine Switcher Tabs */}
        <div className="flex gap-2 p-1.5 bg-slate-100 rounded-xl max-w-md mb-6">
          <button
            onClick={() => setActiveEngineTab('unreal')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${activeEngineTab === 'unreal' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Unreal Engine 5
          </button>
          <button
            onClick={() => setActiveEngineTab('unity')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${activeEngineTab === 'unity' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Unity
          </button>
          <button
            onClick={() => setActiveEngineTab('godot')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${activeEngineTab === 'godot' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Godot Engine
          </button>
        </div>

        {/* Engine Details Card */}
        {activeEngineTab === 'unreal' && (
          <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-heading font-bold text-white">Unreal Engine 5 (Epic Games)</h3>
                <span className="text-xs text-gold-400 font-mono">Industry Standard for Cinematic Realism &amp; VR</span>
              </div>
              <a
                href="https://www.unrealengine.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-lg bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 transition border border-gold-500/30 flex items-center gap-1.5"
              >
                Official Site <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Unreal Engine 5 is renowned for cutting-edge real-time 3D rendering. Features like <strong>Nanite</strong> (virtualized micropolygon geometry) and <strong>Lumen</strong> (dynamic global illumination) make it the premier choice for visually ambitious PC, console, and VR projects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <strong className="text-gold-400 block mb-1">Key Strengths</strong>
                C++ architecture, Visual Scripting (Blueprints), MetaHumans, Niagara visual effects, Chaos destruction.
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <strong className="text-gold-400 block mb-1">Best Suited For</strong>
                AAA/AA PC &amp; Console games, photorealistic VR training simulations, high-end action/shooters.
              </div>
            </div>
          </div>
        )}

        {activeEngineTab === 'unity' && (
          <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-heading font-bold text-white">Unity (Unity Technologies)</h3>
                <span className="text-xs text-amber-400 font-mono">Cross-Platform Versatility &amp; Mobile Dominance</span>
              </div>
              <a
                href="https://unity.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 transition border border-amber-500/30 flex items-center gap-1.5"
              >
                Official Site <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Unity powers more than 50% of the world's top mobile games and hundreds of acclaimed indie titles. With Universal Render Pipeline (URP), High Definition Render Pipeline (HDRP), and C# scripting, it provides rapid prototyping and lightweight cross-platform deployment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <strong className="text-amber-400 block mb-1">Key Strengths</strong>
                Extensive Asset Store, modular package manager, URP efficiency, C# development ergonomics.
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <strong className="text-amber-400 block mb-1">Best Suited For</strong>
                Mobile iOS/Android titles, 2D platformers, standalone Meta Quest VR apps, indie cross-platform games.
              </div>
            </div>
          </div>
        )}

        {activeEngineTab === 'godot' && (
          <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-heading font-bold text-white">Godot Engine (Open Source)</h3>
                <span className="text-xs text-cyan-400 font-mono">Lightweight, Free &amp; Open-Source Flexibility</span>
              </div>
              <a
                href="https://docs.godotengine.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition border border-cyan-500/30 flex items-center gap-1.5"
              >
                Documentation <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Godot is a completely free, MIT-licensed open-source engine with zero royalties. Godot 4 features a refreshed Vulkan renderer, node-based tree architecture, GDScript, and C# support, making it an agile powerhouse for 2D and mid-tier 3D projects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <strong className="text-cyan-400 block mb-1">Key Strengths</strong>
                Zero license royalties, instant startup, lightweight editor (&lt;100MB), dedicated 2D pixel engine.
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <strong className="text-cyan-400 block mb-1">Best Suited For</strong>
                Indie 2D games, educational game jam prototypes, developers seeking total source code ownership.
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 9. Multiplayer Game Development & Netcode */}
      <section id="section-multiplayer" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">09</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Multiplayer Game Development: Netcode &amp; Synchronous State
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6">
          Multiplayer networking introduces distributed systems complexity to game loops. Every millisecond of latency (ping), packet jitter, and desynchronization threatens player engagement.
        </p>

        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs mb-6">
          <h3 className="font-heading font-bold text-slate-900 text-base mb-3">
            Core Architectural Tenets of Low-Latency Netcode
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1 font-heading">Server-Authoritative Architecture</strong>
              The game server executes the master simulation. Clients send only player inputs, preventing cheating such as speed hacks and teleportation.
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1 font-heading">Client-Side Prediction &amp; Reconciliation</strong>
              Local characters respond immediately to button presses; if server calculation deviates, the client reconciles smoothly without perceptible snapping.
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1 font-heading">Lag Compensation (Rewind)</strong>
              For fast-twitch shooting or sports games, the server rewinds hitboxes to the exact timestamp of client fire, ensuring fair hit registration.
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1 font-heading">Matchmaking &amp; Region Clusters</strong>
              Low-ping geo-routing routing players into nearby edge clusters (&lt;40ms ping) with Skill-Based Matchmaking (SBMM).
            </div>
          </div>
        </div>
      </section>

      {/* 10. VR, AR, and XR Spatial Development */}
      <section id="section-vr-xr" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">10</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            VR, AR, and XR Game Development: The Spatial Frontier
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          Virtual Reality (VR) immerses the user in an entirely synthetic 360-degree 3D environment. Augmented Reality (AR) superimposes digital assets over real-world camera feeds. Extended Reality (XR) bridges both paradigms into spatial computing.
        </p>
        <p className="text-slate-700 leading-relaxed mb-6">
          <strong>The 14 Lights</strong> specializes in high-comfort XR engineering, utilizing the open-standard <strong>OpenXR</strong> runtime across Meta Quest 3, Apple Vision Pro, and SteamVR hardware.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="text-gold-600 text-lg mb-2"><i className="fa-solid fa-headset"></i></div>
            <h4 className="font-heading font-bold text-slate-900 text-sm mb-1">6DoF Spatial Tracking</h4>
            <p className="text-xs text-slate-600">Sub-millimeter tracking of head and hand controllers in 3D coordinate space.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="text-gold-600 text-lg mb-2"><i className="fa-solid fa-person-walking"></i></div>
            <h4 className="font-heading font-bold text-slate-900 text-sm mb-1">Comfort &amp; Locomotion</h4>
            <p className="text-xs text-slate-600">Dynamic vignetting, teleport locomotion, and snap-turning to eliminate simulator sickness.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="text-gold-600 text-lg mb-2"><i className="fa-solid fa-hand"></i></div>
            <h4 className="font-heading font-bold text-slate-900 text-sm mb-1">Natural Hand Gestures</h4>
            <p className="text-xs text-slate-600">Direct optical pinch gestures, physics-based object grasping, and virtual haptic resonance.</p>
          </div>
        </div>

        <div className="p-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-gold-400 font-bold uppercase tracking-wider block font-heading">Flagship XR Case Study</span>
            <h4 className="text-base font-heading font-bold text-white mt-1">Explore Pakistan's First Virtual AI Teacher in VR</h4>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              See how The 14 Lights uses spatial computing and real-time AI avatars to teach students in an interactive virtual 3D classroom.
            </p>
          </div>
          <button
            onClick={() => onNavigate('article', 'ai-virtual-teacher-edtech-pakistan-guide')}
            className="shrink-0 px-4 py-2.5 rounded-xl bg-gold-500 text-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-gold-400 transition"
          >
            Read VR Case Study
          </button>
        </div>
      </section>

      {/* 11. AI in Modern Game Development */}
      <section id="section-ai-game-dev" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">11</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            AI in Modern Game Development: Beyond Scripted State Machines
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6">
          Artificial Intelligence in modern game engineering operates across two symbiotic domains: in-game runtime behavioral intelligence (NPCs and procedural content generation) and production-pipeline acceleration.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="font-heading font-bold text-slate-900 text-base mb-2">Runtime Gameplay AI</h3>
            <ul className="text-xs text-slate-700 space-y-2">
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-circle-check text-gold-600 mt-0.5"></i>
                <span><strong>Goal-Oriented Action Planning (GOAP):</strong> NPCs dynamically evaluate available actions based on context rather than linear scripts.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-circle-check text-gold-600 mt-0.5"></i>
                <span><strong>Generative Voice &amp; Unscripted Dialogue:</strong> LLMs connected via low-latency WebSockets enable autonomous conversational NPCs.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-circle-check text-gold-600 mt-0.5"></i>
                <span><strong>Reinforcement Learning Bot Playtesting:</strong> Autonomous agents stress-test game balance and discover exploits 24/7.</span>
              </li>
            </ul>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="font-heading font-bold text-slate-900 text-base mb-2">Pipeline Acceleration</h3>
            <ul className="text-xs text-slate-700 space-y-2">
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-circle-check text-gold-600 mt-0.5"></i>
                <span><strong>Procedural Environment Generation:</strong> Houdini and Unreal PCG nodes generate vast natural biomes dynamically.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-circle-check text-gold-600 mt-0.5"></i>
                <span><strong>Motion Capture Clean-up:</strong> Neural networks denoise mocap jitter, accelerating animation delivery by up to 50%.</span>
              </li>
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-circle-check text-gold-600 mt-0.5"></i>
                <span><strong>Automated Localization:</strong> Contextual LLM translation of in-game lore across 20+ languages with strict glossary adherence.</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
          Want a deep dive into neural architectures? Read our dedicated engineering paper on{' '}
          <button
            onClick={() => onNavigate('article', 'generative-ai-unreal-engine-5-vr-game-development')}
            className="text-gold-600 font-bold hover:underline"
          >
            Integrating Generative AI with Unreal Engine 5 &amp; Virtual Reality
          </button>.
        </p>
      </section>

      {/* 12. 7-Stage End-to-End Production Process */}
      <section id="section-process" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">12</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Game Development Process: From Idea to Global Launch
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6">
          A disciplined, milestone-governed production lifecycle separates commercial hits from bloated, unfinished projects. At The 14 Lights, every game moves through 7 transparent gates.
        </p>

        {/* 7 Stages Vertical Timeline */}
        <div className="space-y-4">
          {[
            {
              step: '01',
              title: 'Discovery & Concept Validation',
              desc: 'Define genre, core target demographic, market positioning, platform matrix, and unique hook. De-risk critical assumptions early.',
              deliverables: 'Executive Pitch Deck, Feature Matrix, Technical Feasibility Report',
            },
            {
              step: '02',
              title: 'Game Design & Technical Architecture',
              desc: 'Author the comprehensive Game Design Document (GDD). Define control schemes, art bible, economy balance, and backend infrastructure schema.',
              deliverables: 'Living GDD, Art Styleguide, Architecture Blueprint',
            },
            {
              step: '03',
              title: 'Playable Prototype / Vertical Slice',
              desc: 'Build a rapid playable build verifying the core gameplay loop. Test control ergonomics, player feedback, and fun factor with target testers.',
              deliverables: 'Playable MVP Build, Player Telemetry Report, Go/No-Go Gate',
            },
            {
              step: '04',
              title: 'Full Production Sprinting',
              desc: 'Scale asset modeling, level design, narrative integration, character rigging, audio composition, and multiplayer netcode implementation.',
              deliverables: 'Bi-weekly playable builds, asset repository commits, milestone demos',
            },
            {
              step: '05',
              title: 'Quality Assurance & Profiling',
              desc: 'Comprehensive functional, stress, and compatibility testing across devices. Memory profiling, draw-call reduction, and bug triage.',
              deliverables: 'Jira Defect Log, 60/90 FPS Locked Profiler Certifications',
            },
            {
              step: '06',
              title: 'Release Preparation & Platform Certification',
              desc: 'Build final release candidates, prepare store key art, record trailers, configure in-app purchases, and pass Apple, Google, Steam, or Sony certification.',
              deliverables: 'Signed Release Binaries, Store Pages, Age Ratings (ESRB/PEGI)',
            },
            {
              step: '07',
              title: 'Post-Launch Support & LiveOps',
              desc: 'Monitor server telemetry, deploy hotfixes, balance multiplayer matchmaking, and release seasonal battle passes and content expansions.',
              deliverables: 'Server Uptime SLAs, Content Roadmap Updates, LiveOps Analytics',
            },
          ].map((stage, idx) => (
            <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-gold-400 font-heading font-black text-base flex items-center justify-center shrink-0">
                {stage.step}
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-slate-900 text-base mb-1">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                  {stage.desc}
                </p>
                <div className="inline-block px-3 py-1 bg-slate-50 text-slate-700 rounded-lg text-xs font-mono border border-slate-200/60">
                  <span className="font-bold text-slate-900">Key Deliverables:</span> {stage.deliverables}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 13. Transparent Cost & Budget Breakdown */}
      <section id="section-costs" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">13</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            How Much Does Game Development Cost?
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6">
          Game development expenditure is determined by scope, art fidelity, multiplayer networking, and target platform matrix rather than arbitrary hourly rates. A transparent studio builds its cost proposal around clear scope milestones.
        </p>

        {/* Cost Matrix Factors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Gameplay Mechanics Complexity</h4>
            <p className="text-xs text-slate-600">Simple casual puzzle vs. deep physics-based soccer engine vs. tactical shooter with cover mechanics.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Art Style &amp; Dimension</h4>
            <p className="text-xs text-slate-600">Stylized 2D pixel sprites vs. high-poly Nanite 3D environments with 4K PBR textures.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Multiplayer Infrastructure</h4>
            <p className="text-xs text-slate-600">Local offline multiplayer vs. dedicated authoritative edge servers handling thousands of CCUs.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Target Platform Count</h4>
            <p className="text-xs text-slate-600">Single Android release vs. simultaneous PC, PS5, Xbox, and Meta Quest launch.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Audio &amp; Voice Acting</h4>
            <p className="text-xs text-slate-600">Royalty-free synth loops vs. fully orchestrated adaptive spatial soundscape and professional VO.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-1">Certification &amp; Compliance</h4>
            <p className="text-xs text-slate-600">App Store &amp; Play Console reviews vs. rigorous multi-week Sony TRC and Microsoft TCR audits.</p>
          </div>
        </div>

        {/* Brief Template Callout */}
        <div className="p-6 bg-white rounded-2xl border-2 border-dashed border-gold-500/50 shadow-sm">
          <h3 className="font-heading font-bold text-slate-900 text-base mb-2">
            Want a Fixed-Price Milestone Estimate? Prepare This 6-Point Brief:
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            To receive a precise, binding project estimate from The 14 Lights or any development partner, document:
          </p>
          <ol className="text-xs text-slate-700 list-decimal list-inside space-y-1 font-mono">
            <li><strong>Core Gameplay Hook:</strong> 2-3 sentences describing what the player does every minute.</li>
            <li><strong>Target Platforms:</strong> (e.g., PC on Steam, Android, iOS, or Meta Quest 3).</li>
            <li><strong>Visual Reference:</strong> 2-3 existing games that match your desired visual benchmark.</li>
            <li><strong>Multiplayer Scope:</strong> Single-player, asynchronous leaderboards, or live synchronous PvP/PvE.</li>
            <li><strong>Hard Deadlines:</strong> Required launch dates, seasonal windows, or investor demo dates.</li>
            <li><strong>Capital Allocation:</strong> Target budget range to optimize feature priorities and asset tiers.</li>
          </ol>
        </div>
      </section>

      {/* 14. How to Choose the Right Game Development Studio */}
      <section id="section-choose-studio" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">14</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            How to Choose the Right Game Development Studio
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6">
          Before signing an agreement or disbursing upfront capital, put prospective studios through a thorough technical vetting process. Ask these 8 crucial partner questions:
        </p>

        {/* 8 Critical Partner Questions Accordion / List */}
        <div className="space-y-3 mb-8">
          {[
            {
              q: '1. Have you developed projects with similar mechanics or network architecture?',
              a: 'Verify working, playable proof in their portfolio rather than conceptual concept art. Test their builds on actual hardware.',
            },
            {
              q: '2. Which game engine do you recommend for our specific target, and why?',
              a: 'A good studio explains technical trade-offs objectively rather than forcing the only tool their developers know.',
            },
            {
              q: '3. What exactly will be included in the first playable prototype?',
              a: 'Ensure the prototype tests the riskiest mechanic rather than polished UI menus and static splash screens.',
            },
            {
              q: '4. How are milestone scope adjustments and change orders handled?',
              a: 'Agile sprints with documented change-order impact assessments on both cost and delivery dates.',
            },
            {
              q: '5. What automated and manual QA profiling is included in the quote?',
              a: 'Demand frame-time profiler graphs across minimum spec hardware before signing off on release candidates.',
            },
            {
              q: '6. Who owns the source code, original 3D blend files, and intellectual property?',
              a: 'You must own 100% of the repository, source files, and assets upon milestone completion with zero vendor lock-in.',
            },
            {
              q: '7. What SLA is provided for post-launch OS updates and crash hotfixes?',
              a: 'Establish clear guarantees for Android OS version updates, iOS SDK deprecations, and server uptime.',
            },
            {
              q: '8. How will progress, risks, blockers, and delays be communicated?',
              a: 'Weekly live sprint reviews, playable test flight builds, and direct shared communication channels (Slack/Discord/Jira).',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-heading font-bold text-slate-900 text-sm mb-1">{item.q}</h4>
              <p className="text-xs text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>

        {/* Why Consider The 14 Lights */}
        <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-2xl border border-gold-500/30 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400 font-heading mb-2 block">
              The 14 Lights Advantage
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3">
              Why Partner with The 14 Lights for Your Next Title?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              The 14 Lights combines hands-on game engineering with deep domain expertise in AI agents, virtual reality, and extended reality. Whether you need a lightning-fast WebGL sports simulation, an Unreal Engine 5 PC/console title, or an interactive spatial VR application, our team delivers milestone-backed excellence.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@the14lights.com"
                className="px-5 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-gold-500 text-black hover:bg-gold-400 transition flex items-center gap-2 shadow-sm"
              >
                <i className="fa-solid fa-envelope"></i> Contact Engineering Team (hello@the14lights.com)
              </a>
              <button
                onClick={() => onNavigate('home')}
                className="px-5 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition"
              >
                Explore Homepage &amp; Studio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Recommended External Resources */}
      <section id="section-resources" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <h3 className="font-heading font-bold text-slate-900 text-lg mb-3">
          Recommended Official Resources &amp; Documentation
        </h3>
        <p className="text-xs text-slate-600 mb-4">
          Industry-standard documentation and developer portals for game production teams:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <a
            href="https://unity.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-50 hover:bg-white border border-slate-200 hover:border-gold-500 rounded-xl transition flex items-center justify-between group"
          >
            <span className="text-xs font-bold text-slate-900 group-hover:text-gold-600">Unity Game Platform</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-400"></i>
          </a>
          <a
            href="https://www.unrealengine.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-50 hover:bg-white border border-slate-200 hover:border-gold-500 rounded-xl transition flex items-center justify-between group"
          >
            <span className="text-xs font-bold text-slate-900 group-hover:text-gold-600">Unreal Engine 5</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-400"></i>
          </a>
          <a
            href="https://docs.godotengine.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-50 hover:bg-white border border-slate-200 hover:border-gold-500 rounded-xl transition flex items-center justify-between group"
          >
            <span className="text-xs font-bold text-slate-900 group-hover:text-gold-600">Godot Engine Docs</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-400"></i>
          </a>
          <a
            href="https://support.google.com/googleplay/android-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-50 hover:bg-white border border-slate-200 hover:border-gold-500 rounded-xl transition flex items-center justify-between group"
          >
            <span className="text-xs font-bold text-slate-900 group-hover:text-gold-600">Google Play Console Help</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-400"></i>
          </a>
          <a
            href="https://developer.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-50 hover:bg-white border border-slate-200 hover:border-gold-500 rounded-xl transition flex items-center justify-between group"
          >
            <span className="text-xs font-bold text-slate-900 group-hover:text-gold-600">Apple Developer Portal</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-400"></i>
          </a>
          <button
            onClick={() => onNavigate('blog')}
            className="p-3 bg-slate-50 hover:bg-white border border-slate-200 hover:border-gold-500 rounded-xl transition flex items-center justify-between group text-left"
          >
            <span className="text-xs font-bold text-slate-900 group-hover:text-gold-600">The 14 Lights Tech Blog</span>
            <i className="fa-solid fa-arrow-right text-[10px] text-slate-400"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

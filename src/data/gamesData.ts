export interface GameControl {
  key: string;
  action: string;
}

export interface GameItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categoryLabel: string;
  tags: string[];
  thumbnailUrl: string;
  bannerUrl: string;
  gameUrl: string;
  engine: string;
  rating: number;
  playsCount: string;
  releaseDate: string;
  developer: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  howToPlay: string[];
  controls: GameControl[];
  tips?: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const GAMES_DATA: GameItem[] = [
  {
    id: 'crazy-fifa-2026',
    slug: 'crazy-fifa-2026',
    title: 'Crazy FIFA 2026',
    subtitle: 'High-Performance 3D Unity WebGL Football Simulation',
    category: 'sports',
    categoryLabel: 'Sports & Football 3D',
    tags: ['Unity WebGL', '3D Soccer', 'Real-Time AI', 'Physics Engine', 'Tournament Mode'],
    thumbnailUrl: '/games/crazyfifa2026.webp',
    bannerUrl: '/games/crazyfifa2026.webp',
    gameUrl: '/games/crazyfifa2026/index.html',
    engine: 'Unity 2019 WebGL (Assembly / WASM)',
    rating: 4.9,
    playsCount: '124,500+',
    releaseDate: '2026',
    developer: 'The 14 Lights',
    shortDescription: 'Experience high-octane 3D soccer gameplay featuring real-time AI, realistic ball physics, dynamic stadium atmosphere, and fluid controls directly in your browser.',
    fullDescription: `Crazy FIFA 2026 is The 14 Lights's flagship 3D WebGL football game. Built from the ground up on Unity WebGL technology, it brings AAA-inspired arcade soccer action straight to your web browser with zero downloads or plugins required.

Dominate the pitch with precision passing, tactical dribbling, elevated power shots, and responsive goalkeeping. Challenge advanced AI opponent teams across multiple tournament brackets, test your free-kick skills, and experience authentic stadium crowd atmosphere optimized for desktop computers, laptops, tablets, and smartphones.`,
    features: [
      'Next-Gen 3D Graphics: Powered by Unity WebGL with fluid player animations and real-time lighting',
      'Adaptive Tactical AI: Opponent teams adapt defensive press and offensive counter-attacks dynamically',
      'Universal Controls: Full support for Keyboard (WASD / Arrow Keys) and Touch Screen controls',
      'Zero Download Browser Play: Instant WebAssembly load times with optimized client-side asset streaming',
      'Dynamic Audio Engine: Authentic stadium chants, referee whistles, commentary triggers, and ball strikes'
    ],
    howToPlay: [
      'Use the Movement keys (WASD or Arrow Keys) to steer your active player toward open space or the ball carrier.',
      'Press Spacebar or K to shoot toward goal. Hold the key longer to charge up shot power and elevation.',
      'Press J or Pass key to trigger ground passes to open teammates or switch defensive targeting.',
      'Intercept enemy passes and execute timed tackles to regain ball possession in the midfield.',
      'Score more goals than your opponent before the 90-minute regulation timer expires to win the match trophy!'
    ],
    controls: [
      { key: 'WASD / Arrow Keys', action: 'Move active player & steer direction' },
      { key: 'Spacebar / K', action: 'Goal Shot (Hold for Power & Height)' },
      { key: 'J / Pass Key', action: 'Ground Pass / Switch Target' },
      { key: 'Shift', action: 'Sprint Boost' },
      { key: 'Touch Screen', action: 'On-screen Virtual Joystick & Buttons (Mobile)' }
    ],
    tips: [
      'Charge shot power around 70-80% when shooting from outside the 18-yard box for high top-corner accuracy.',
      'Use ground passes (J Key) to build attacks through midfield to draw AI defenders out of position.',
      'Sprint in short bursts (Shift Key) to preserve player stamina for late-game counter-attacks.',
      'Position your defenders between the ball carrier and the goal line instead of making risky slide tackles.'
    ],
    metaTitle: 'Play Crazy FIFA 2026 Online - 3D Unity WebGL Football | The 14 Lights',
    metaDescription: 'Play Crazy FIFA 2026 online for free in your browser! Experience 3D Unity WebGL football graphics, adaptive AI teams, realistic physics, and full mobile support from The 14 Lights.',
    keywords: ['Crazy FIFA 2026', 'Unity WebGL Football', '3D Soccer Game Online', 'The 14 Lights Games', 'Free Browser Game', 'Play Crazy FIFA WebGL']
  },
  {
    id: 'soccer-disc-league',
    slug: 'soccer-disc-league',
    title: 'Soccer Disc League',
    subtitle: 'Strategic Physics-Based Turn-Based Disc Football',
    category: 'sports',
    categoryLabel: 'Tactical Sports Strategy',
    tags: ['Disc Soccer', 'Physics Engine', 'Turn-Based', 'Strategy', 'HTML5 Canvas'],
    thumbnailUrl: '/games/soccerdiscleague.webp',
    bannerUrl: '/games/soccerdiscleague.webp',
    gameUrl: '/games/soccerdiscleague/index.html',
    engine: 'HTML5 & WebGL Physics Engine',
    rating: 4.8,
    playsCount: '89,200+',
    releaseDate: '2026',
    developer: 'The 14 Lights',
    shortDescription: 'A strategic turn-based disc soccer game combining precision trajectory physics with tactical positioning.',
    fullDescription: `Soccer Disc League is an addictive turn-based disc football game developed by The 14 Lights. Calculate ricochet angles, line up your precision trajectory shots, and launch your team discs across the pitch to outsmart your rival.

Featuring realistic friction physics, custom team disc skins, tactical obstacle placement, and competitive single-player AI modes, Soccer Disc League offers quick-pick play sessions ideal for both desktop and mobile gamers.`,
    features: [
      'Precision Trajectory Physics: Calculate bounce angles, spin velocity, and wall rebounds',
      'Turn-Based Strategy: Position your discs defensively to block opponent angles while setting up goal shots',
      'League Trophy Progression: Earn points across matches to unlock stadium pitches and team badges',
      'Ultra-Lightweight HTML5 Engine: Instant startup speed on low-bandwidth and mobile connections'
    ],
    howToPlay: [
      'Select your active team disc by clicking or touching it on the pitch.',
      'Drag backward to line up target trajectory line and adjust shot velocity.',
      'Release to fire your disc into the ball or knock opponent discs out of strategic positions.',
      'Be the first player to score 3 goals past the goalkeeper net to claim victory!'
    ],
    controls: [
      { key: 'Mouse Click & Drag', action: 'Aim trajectory & adjust launch power' },
      { key: 'Touch Swipe', action: 'Pull-back aiming on mobile screens' },
      { key: 'R', action: 'Restart pitch setup' }
    ],
    tips: [
      'Bank shots off stadium walls to bypass opponent discs blocking direct sightlines.',
      'Aim for the outer edge of opponent discs to clear defense lanes while deflecting the ball forward.',
      'Keep one disc stationed near your goal line to act as a emergency goalkeeper.'
    ],
    metaTitle: 'Play Soccer Disc League Online - Tactical Disc Football | The 14 Lights',
    metaDescription: 'Play Soccer Disc League for free in your browser! Experience physics-based turn-based disc football with strategic trajectory shots and AI opponents.',
    keywords: ['Soccer Disc League', 'Disc Football Game', 'Physics Strategy Game', 'HTML5 Sports Game', 'The 14 Lights']
  }
];

export function getGameBySlug(slug: string): GameItem | undefined {
  if (!slug) return GAMES_DATA[0];
  const cleanSlug = slug.toLowerCase().trim();
  return GAMES_DATA.find((g) => g.slug.toLowerCase() === cleanSlug || g.id.toLowerCase() === cleanSlug) || GAMES_DATA[0];
}

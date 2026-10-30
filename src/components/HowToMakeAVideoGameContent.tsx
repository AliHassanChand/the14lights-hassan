import React from 'react';

interface HowToMakeAVideoGameContentProps {
  onNavigate: (view: any, articleOrGameId?: string) => void;
}

export const HowToMakeAVideoGameContent: React.FC<HowToMakeAVideoGameContentProps> = ({ onNavigate }) => {
  return (
    <div id="article-content" className="text-slate-800 leading-relaxed space-y-10 font-sans">
      {/* Intro Lead */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white shadow-xl border border-gold-500/25 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30 text-xs font-bold uppercase tracking-wider mb-4 font-heading">
          <i className="fa-solid fa-graduation-cap text-gold-400"></i> Beginner Game Dev Roadmap
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4 tracking-tight">
          How to Make a Video Game as a Beginner: The Complete Step-by-Step Guide
        </h2>
        <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light mb-4">
          Every gamer has had the thought: <em>"I could make something better than this."</em> The good news is that you can start today, for free, without a computer science degree or a big studio team behind you.
        </p>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
          Game development combines creative design, visual art, sound, and logic. With modern accessible engines like Godot and Unity, turning a simple concept into a finished, playable game is within anyone's reach.
        </p>
      </div>

      {/* Quick Answer Callout */}
      <section id="section-quick-answer" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="p-6 bg-amber-500/10 border-l-4 border-gold-500 rounded-r-2xl shadow-xs">
          <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 flex items-center gap-2">
            <i className="fa-solid fa-bolt text-gold-600"></i> How do you make a video game as a beginner?
          </h3>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            To make a video game as a beginner, <strong>pick one free game engine</strong> such as Godot or Unity, build a <strong>tiny 2D project</strong> like a dodge or platformer game, learn basic scripting as you go, and <strong>finish it before starting anything bigger</strong>. Small and finished beats big and abandoned every time.
          </p>
        </div>
      </section>

      {/* Step 1: Start with a tiny idea */}
      <section id="section-step-1" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">01</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Step 1: Start with a Tiny Idea
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          Most first games fail because the idea is too big. Skip the massive open-world RPG, the MMO, or the hyper-realistic tactical shooter. Think of something you can genuinely build and finish in a few weekends:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-gold-600 font-bold text-sm mb-1 flex items-center gap-2">
              <i className="fa-solid fa-shield-halved"></i> Falling Object Dodger
            </div>
            <p className="text-xs text-slate-600">A single character moving left and right, dodging randomly spawned hazards falling from the top.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-gold-600 font-bold text-sm mb-1 flex items-center gap-2">
              <i className="fa-solid fa-person-running"></i> 3-Level Mini Platformer
            </div>
            <p className="text-xs text-slate-600">A character with simple jump physics reaching an exit flag across three short, handcrafted levels.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-gold-600 font-bold text-sm mb-1 flex items-center gap-2">
              <i className="fa-solid fa-crosshairs"></i> Top-Down Arena Shooter
            </div>
            <p className="text-xs text-slate-600">A player aiming and firing at one enemy type that slowly swarms towards the center of the screen.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-gold-600 font-bold text-sm mb-1 flex items-center gap-2">
              <i className="fa-solid fa-puzzle-piece"></i> Single-Mechanic Puzzle
            </div>
            <p className="text-xs text-slate-600">A tile-pushing or color-matching game with clear, unambiguous win and lose conditions.</p>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl border-l-4 border-slate-900 shadow-xs text-xs sm:text-sm text-slate-700">
          <strong>The Golden Scope Rule:</strong> If you can describe the entire game in one sentence, the scope is probably right.
        </div>
      </section>

      {/* Step 2: Choose a game engine */}
      <section id="section-step-2" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">02</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Step 2: Choose a Game Engine
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6">
          A game engine is the specialized software that handles graphics rendering, audio playback, physics simulation, and user keyboard/touch input so you don't have to build low-level mathematics from zero. Here are two standout beginner-friendly engines:
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs mb-6">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-white font-heading uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-3.5">Engine</th>
                <th className="p-3.5">Best For</th>
                <th className="p-3.5">Language</th>
                <th className="p-3.5">Where to Learn</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
              <tr>
                <td className="p-3.5 font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span> Godot
                </td>
                <td className="p-3.5">2D games, lightweight (&lt;100MB download), and 100% open source</td>
                <td className="p-3.5 font-mono text-[11px]">GDScript (Python-like) or C#</td>
                <td className="p-3.5">
                  <a href="https://docs.godotengine.org/" target="_blank" rel="noopener noreferrer" className="text-gold-600 font-bold hover:underline">
                    Godot official docs <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span> Unity
                </td>
                <td className="p-3.5">2D and 3D games, massive global community and asset marketplace</td>
                <td className="p-3.5 font-mono text-[11px]">C#</td>
                <td className="p-3.5">
                  <a href="https://learn.unity.com/" target="_blank" rel="noopener noreferrer" className="text-gold-600 font-bold hover:underline">
                    Unity Learn <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-xl text-xs sm:text-sm text-cyan-950">
          <strong>Why Godot is so popular for beginners:</strong> Godot is free and open source under the MIT license, meaning there are zero royalties on the games you build. You download a single executable file and can start making games within two minutes.
        </div>
      </section>

      {/* Step 3: Follow one complete tutorial */}
      <section id="section-step-3" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">03</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Step 3: Follow One Complete Tutorial
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          Resist the urge to watch ten different introductory videos simultaneously. Pick <strong>one</strong> tutorial series and build the entire project from start to finish.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Godot's official <em>"Your first 2D game"</em> series walks you through building <strong>Dodge the Creeps</strong>, where you move a character, spawn random enemies from screen edges, and tally scores. That single tutorial covers 80% of the foundational systems you will use in every project going forward:
        </p>

        <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc list-inside bg-slate-50 p-4 rounded-xl border border-slate-200">
          <li><strong>Player Input:</strong> Translating arrow keys or WASD into velocity vectors.</li>
          <li><strong>Collision Detection:</strong> Using Area2D nodes to detect when hazards hit the player.</li>
          <li><strong>Spawning Timers:</strong> Generating dynamic obstacles with randomized speeds and trajectories.</li>
          <li><strong>User Interface (UI):</strong> Updating score labels and displaying game over screens.</li>
        </ul>

        <p className="text-xs text-slate-600 mt-3 italic">
          New to programming? Spend an afternoon learning scripting basics (variables, if-statements, loops, and functions) first, then return to the engine. You will absorb concepts significantly faster.
        </p>
      </section>

      {/* Step 4: Add art and sound */}
      <section id="section-step-4" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">04</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Step 4: Add Art and Sound
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          You don't need to be a professional illustrator or audio engineer to make a compelling game. Thousands of artists publish high-quality free asset packs featuring sprites, tilesets, and sound effects under Creative Commons licenses (such as Kenney.nl and OpenGameArt.org).
        </p>
        <div className="p-4 bg-slate-900 text-white rounded-xl text-xs sm:text-sm">
          <span className="text-gold-400 font-bold block mb-1 font-heading">Core Rule of Indie Production:</span>
          Gameplay first, polish second. Build your mechanics using grey prototype boxes. Once the game is genuinely fun to control, swap the placeholder shapes for clean sprite art and sound effects.
        </div>
      </section>

      {/* Step 5: Playtest early and often */}
      <section id="section-step-5" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">05</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Step 5: Playtest Early and Often
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          Hand your build to a friend and <strong>say nothing</strong>. Do not explain the controls or tell them where to go. Sit beside them and watch where they hesitate, get confused, or fail unexpectedly.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
          You will learn more in five minutes of silent observation than in an hour of guessing what players might experience. Fix the friction points immediately.
        </p>
      </section>

      {/* Step 6: Publish it */}
      <section id="section-step-6" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">06</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Step 6: Publish It
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          Finishing a game is a skill, and publishing teaches you the rest. Platforms like <strong>itch.io</strong> allow you to upload an HTML5 WebGL or standalone build for free, share a link, and collect genuine feedback from indie players without paperwork or store submission fees.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Once you have finished and shipped two or three small titles, you will be prepared for commercial releases on Steam, Google Play, or the Apple App Store.
        </p>
      </section>

      {/* Common Beginner Mistakes */}
      <section id="section-mistakes" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <h3 className="text-xl font-heading font-bold text-slate-900 mb-4">
          Common Beginner Mistakes to Avoid
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-red-50/60 rounded-xl border border-red-200">
            <h4 className="font-bold text-red-900 text-sm mb-1 flex items-center gap-2">
              <i className="fa-solid fa-triangle-exclamation text-red-600"></i> Scope Creep
            </h4>
            <p className="text-xs text-slate-700">Continuously adding "just one more feature" until the project becomes overwhelming and gets abandoned.</p>
          </div>
          <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-900 text-sm mb-1 flex items-center gap-2">
              <i className="fa-solid fa-arrows-split-up-and-left text-amber-600"></i> Tutorial Hopping
            </h4>
            <p className="text-xs text-slate-700">Starting five different tutorial series without finishing any. Stick to one until you export a playable binary.</p>
          </div>
          <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-200">
            <h4 className="font-bold text-purple-900 text-sm mb-1 flex items-center gap-2">
              <i className="fa-solid fa-palette text-purple-600"></i> Perfect Art First
            </h4>
            <p className="text-xs text-slate-700">Spending weeks tweaking pixel art before testing if the underlying game mechanics are actually enjoyable.</p>
          </div>
          <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-900 text-sm mb-1 flex items-center gap-2">
              <i className="fa-solid fa-user-xmark text-blue-600"></i> Skipping Playtests
            </h4>
            <p className="text-xs text-slate-700">Building in isolation for months without outside feedback, discovering confusing controls too late.</p>
          </div>
        </div>
      </section>

      {/* Final Thoughts & Internal Links */}
      <section id="section-final" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="p-6 bg-slate-900 text-white rounded-2xl border border-gold-500/30 shadow-xl">
          <span className="text-xs text-gold-400 font-bold uppercase tracking-widest font-heading block mb-2">Final Thoughts</span>
          <h3 className="text-xl font-heading font-bold mb-3">Small and Finished Beats Big and Abandoned</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
            The secret to learning game development is simple: pick an engine, follow one complete tutorial, ship your first tiny game, and then build a slightly bigger one.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('game', 'crazy-fifa-2026')}
              className="px-4 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-gold-500 text-black hover:bg-gold-400 transition"
            >
              Play Crazy FIFA 2026 (Studio Example)
            </button>
            <button
              onClick={() => onNavigate('article', 'game-development-services')}
              className="px-4 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition"
            >
              Explore Game Development Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

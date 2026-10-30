import React from 'react';

interface PCVsConsoleGamingContentProps {
  onNavigate: (view: any, articleOrGameId?: string) => void;
}

export const PCVsConsoleGamingContent: React.FC<PCVsConsoleGamingContentProps> = ({ onNavigate }) => {
  return (
    <div id="article-content" className="text-slate-800 leading-relaxed space-y-10 font-sans">
      {/* Intro Lead */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white shadow-xl border border-gold-500/25 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30 text-xs font-bold uppercase tracking-wider mb-4 font-heading">
          <i className="fa-solid fa-scale-balanced text-gold-400"></i> Platform Showdown &amp; Hardware Guide
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4 tracking-tight">
          PC vs Console Gaming: Which Is Right for You in 2026?
        </h2>
        <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light mb-4">
          It is the oldest debate in gaming, and the honest answer is that neither side universally wins. The right platform depends entirely on your budget, the genres you love, and how much technical tweaking you enjoy.
        </p>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
          Whether you crave the plug-and-play simplicity of a living-room television console or the limitless customization, ultra-high frame rates, and modding freedom of a modern PC battlestation, here is everything you need to know to decide.
        </p>
      </div>

      {/* Quick Answer Callout */}
      <section id="section-quick-answer" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-2xl shadow-xs">
          <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 flex items-center gap-2">
            <i className="fa-solid fa-gamepad text-blue-600"></i> PC or console: which should you choose?
          </h3>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            <strong>Choose a console</strong> if you want a simple, plug-and-play setup with a fixed predictable cost and effortless couch gaming. <strong>Choose a PC</strong> if you want more flexibility, hardware upgrades, community mods, and a vastly wider range of digital storefronts and game types. Your budget and favorite franchises should decide the final call.
          </p>
        </div>
      </section>

      {/* PC vs Console at a Glance Comparison Table */}
      <section id="section-comparison-table" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">01</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            PC vs Console at a Glance
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-6">
          Compare the core characteristics across hardware, economics, and everyday usability:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs mb-6">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-white font-heading uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-3.5">Factor</th>
                <th className="p-3.5">Gaming PC</th>
                <th className="p-3.5">Console (PS5 / Xbox Series X / Switch)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Upfront Cost</td>
                <td className="p-3.5">Varies widely ($600–$2,500+), initial hardware investment can be higher.</td>
                <td className="p-3.5 text-emerald-700 font-semibold">Fixed price per hardware model ($300–$500).</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Setup &amp; Ease of Use</td>
                <td className="p-3.5">More choices, driver management, graphics sliders to tune.</td>
                <td className="p-3.5 text-emerald-700 font-semibold">Effortless plug in and play directly on a television.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Hardware Upgrades</td>
                <td className="p-3.5 text-emerald-700 font-semibold">Swap GPUs, add RAM, or expand NVMe SSDs over time.</td>
                <td className="p-3.5">Replace the whole console each 5–7 year hardware generation.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Community Mods</td>
                <td className="p-3.5 text-emerald-700 font-semibold">Widely supported via Nexus Mods, Steam Workshop, etc.</td>
                <td className="p-3.5">Extremely limited (rare exceptions like Skyrim/Fallout).</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Exclusive Titles</td>
                <td className="p-3.5">Deep strategy games, indie gems, simulation, early access.</td>
                <td className="p-3.5 text-purple-700 font-semibold">Signature platform-exclusive franchises and day-one releases.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Input Controls</td>
                <td className="p-3.5">Keyboard, precision mouse, or any controller seamlessly.</td>
                <td className="p-3.5">Wireless controller (select games support mouse and keyboard).</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Multipurpose Utility</td>
                <td className="p-3.5 text-emerald-700 font-semibold">Work, video editing, coding, 3D rendering, live streaming.</td>
                <td className="p-3.5">Primarily dedicated gaming, streaming apps, and 4K media playback.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* The Case for Console Gaming */}
      <section id="section-console-case" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">02</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            The Case for Console Gaming
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          Consoles are built to be simple and friction-free. You unbox the hardware, connect an HDMI cable to your television, and start playing immediately. Every player has identical hardware specifications, which enables game developers to optimize performance and frame-times specifically for that targeted chipset.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Major ecosystems include <strong>Sony PlayStation</strong>, <strong>Microsoft Xbox</strong>, and <strong>Nintendo</strong>. Each ecosystem features signature first-party franchises that are frequently the ultimate deciding factor for gamers.
        </p>

        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 mb-6">
          <h4 className="font-heading font-bold text-slate-900 text-sm mb-3">
            A Console is a Great Fit if You:
          </h4>
          <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-check text-emerald-600 mt-0.5"></i>
              <span>Want a predictable, one-time hardware cost that lasts an entire 7-year console generation.</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-check text-emerald-600 mt-0.5"></i>
              <span>Prefer relaxing on the living room couch with a comfortable wireless gamepad.</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-check text-emerald-600 mt-0.5"></i>
              <span>Care deeply about specific platform-exclusive releases (e.g., Nintendo Mario/Zelda, Sony story exclusives).</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-check text-emerald-600 mt-0.5"></i>
              <span>Never want to deal with Windows updates, graphics driver crashes, shader compilation hitches, or hardware bottlenecks.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* The Case for PC Gaming */}
      <section id="section-pc-case" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">03</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            The Case for PC Gaming
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          A gaming PC offers total technological freedom. You can upgrade individual components as new GPU architectures release, play at 144Hz–240Hz+ refresh rates, customize field-of-view settings, install transformative community mods, and purchase titles from multiple competing storefronts (Steam, Epic, GOG, Humble Bundle).
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Furthermore, the <strong>Steam Hardware &amp; Software Survey</strong> reveals the vast diversity of real-world gaming rigs, proving that you don't need a $3,000 rig to enjoy modern gaming—mid-tier graphics cards like the RTX 4060 and RTX 3060 deliver exceptional 1080p and 1440p high-framerate gameplay.
        </p>

        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 mb-6">
          <h4 className="font-heading font-bold text-slate-900 text-sm mb-3">
            A PC is a Great Fit if You:
          </h4>
          <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-check text-blue-600 mt-0.5"></i>
              <span>Love grand strategy, complex simulations, MMOs, or competitive tactical shooters that require a precision mouse.</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-check text-blue-600 mt-0.5"></i>
              <span>Enjoy hardware tinkering, building custom liquid loops, and upgrading graphics cards over time.</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-check text-blue-600 mt-0.5"></i>
              <span>Want game mods, community patch fixes, and fan-made total conversions.</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-check text-blue-600 mt-0.5"></i>
              <span>Need a single powerhouse machine that handles gaming by night and professional creative work by day.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How to Decide in 4 Steps */}
      <section id="section-how-to-decide" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">04</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            How to Decide in 4 Steps
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-gold-500/15 text-gold-700 font-bold flex items-center justify-center mb-2 font-heading">
              1
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">Set Your Total Budget</h4>
            <p className="text-xs text-slate-600">Include the display monitor, audio headset, controller, or desk ergonomics, not just the raw machine.</p>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-gold-500/15 text-gold-700 font-bold flex items-center justify-center mb-2 font-heading">
              2
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">List Your Must-Play Titles</h4>
            <p className="text-xs text-slate-600">Confirm where your favorite games reside—some console exclusives take years to arrive on PC, while PC strategy games never touch consoles.</p>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-gold-500/15 text-gold-700 font-bold flex items-center justify-center mb-2 font-heading">
              3
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">Analyze Your Physical Space</h4>
            <p className="text-xs text-slate-600">Do you envision playing relaxed on a living room couch with family, or seated at an immersive private desk?</p>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-gold-500/15 text-gold-700 font-bold flex items-center justify-center mb-2 font-heading">
              4
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">Be Honest About Tinkering</h4>
            <p className="text-xs text-slate-600">Do you enjoy tweaking resolution scaling and testing benchmarks, or does troubleshooting feel like unwanted homework?</p>
          </div>
        </div>
      </section>

      {/* What About Playing on Both? */}
      <section id="section-both" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
          What About Playing on Both?
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Many modern gamers maintain both: a gaming PC for competitive FPS titles and simulations, paired with a Nintendo Switch or PlayStation for living-room social play and exclusives.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
          With widespread <strong>cross-play</strong> and <strong>cross-progression</strong> across major releases like Fortnite, Rocket League, and Call of Duty, your progress syncs effortlessly across platforms. Start with the platform that fits your current budget today, and you can always expand your setup later.
        </p>
      </section>

      {/* Final Thoughts */}
      <section id="section-final" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="p-6 bg-slate-900 text-white rounded-2xl border border-gold-500/30 shadow-xl">
          <span className="text-xs text-gold-400 font-bold uppercase tracking-widest font-heading block mb-2">Final Thoughts</span>
          <h3 className="text-xl font-heading font-bold mb-3">There Is No Wrong Answer, Only What Fits Your Lifestyle</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
            Pick based on your games, your budget, and how you like to play. Want to experience high-speed arcade action that runs instantly on both PC and mobile browsers? Try out The 14 Lights' playable WebGL titles!
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('game', 'crazy-fifa-2026')}
              className="px-4 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-gold-500 text-black hover:bg-gold-400 transition"
            >
              Play Crazy FIFA 2026
            </button>
            <button
              onClick={() => onNavigate('article', 'game-development-services')}
              className="px-4 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition"
            >
              Explore Cross-Platform Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

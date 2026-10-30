import React from 'react';

interface BuyPCGamesOnlineSafelyContentProps {
  onNavigate: (view: any, articleOrGameId?: string) => void;
}

export const BuyPCGamesOnlineSafelyContent: React.FC<BuyPCGamesOnlineSafelyContentProps> = ({ onNavigate }) => {
  return (
    <div id="article-content" className="text-slate-800 leading-relaxed space-y-10 font-sans">
      {/* Intro Lead */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white shadow-xl border border-gold-500/25 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30 text-xs font-bold uppercase tracking-wider mb-4 font-heading">
          <i className="fa-solid fa-shield-halved text-gold-400"></i> Gamer Security &amp; Shopping Guide
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4 tracking-tight">
          How to Buy PC Games Online Safely: 7 Simple Rules
        </h2>
        <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light mb-4">
          Buying games online is easy. Buying them safely takes a little more thought. Fake keys, compromised accounts, and surprise recurring charges are all real risks—but a handful of good habits will keep your wallet and your digital game library secure.
        </p>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
          Follow these 7 practical rules whether you are buying on Steam, looking for sales, or setting up a gaming library for family members.
        </p>
      </div>

      {/* Quick Answer Callout */}
      <section id="section-quick-answer" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="p-6 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-2xl shadow-xs">
          <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 flex items-center gap-2">
            <i className="fa-solid fa-lock text-emerald-600"></i> How can you buy PC games online safely?
          </h3>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            To buy PC games online safely, use <strong>well-known authorized stores</strong> like Steam, Epic Games Store or GOG, <strong>avoid suspiciously cheap key sellers</strong>, check the game's <strong>age rating and reviews</strong> before paying, learn the store's <strong>refund rules</strong>, and protect your account with <strong>two-factor authentication (2FA)</strong>.
          </p>
        </div>
      </section>

      {/* Rule 1: Stick to trusted stores */}
      <section id="section-rule-1" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">01</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Rule 1: Stick to Trusted Stores
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          The single easiest way to avoid digital scams is to purchase directly from established, authorized platforms:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="text-slate-900 font-bold text-base mb-1 flex items-center gap-2">
              <i className="fa-brands fa-steam text-xl text-blue-600"></i> Steam (Valve)
            </div>
            <p className="text-xs text-slate-600">The world's largest PC platform with integrated buyer protection, automated refunds, and Steam Guard.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="text-slate-900 font-bold text-base mb-1 flex items-center gap-2">
              <i className="fa-solid fa-gamepad text-xl text-slate-800"></i> Epic Games Store
            </div>
            <p className="text-xs text-slate-600">Official direct-from-publisher distribution with weekly free games and standard refund options.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="text-slate-900 font-bold text-base mb-1 flex items-center gap-2">
              <i className="fa-solid fa-compact-disc text-xl text-purple-600"></i> GOG (CD Projekt)
            </div>
            <p className="text-xs text-slate-600">DRM-free digital installers you completely own without required launcher verification or online DRM.</p>
          </div>
        </div>

        <p className="text-xs text-slate-600">
          Their payment gateways, fraud prevention engines, customer support teams, and refund pipelines are engineered specifically to protect buyers.
        </p>
      </section>

      {/* Rule 2: Treat suspicious prices with caution */}
      <section id="section-rule-2" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">02</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Rule 2: Treat "Too Good to Be True" Prices with Suspicion
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          If a brand-new $70 AAA release is listed on an unknown website for $12, be extremely careful. Gray-market unauthorized CD keys frequently originate from:
        </p>
        <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc list-inside bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4">
          <li>Stolen credit cards that trigger chargebacks weeks later.</li>
          <li>Exploited regional pricing tricks that violate Steam and publisher ToS.</li>
          <li>Promotional codes intended for review outlets or hardware bundles.</li>
        </ul>
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs sm:text-sm text-red-900">
          <strong>The Danger:</strong> Publishers regularly ban batches of illicit keys. You risk having the game permanently removed from your Steam account without any recourse or refund.
        </div>
      </section>

      {/* Rule 3: Check the age rating */}
      <section id="section-rule-3" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">03</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Rule 3: Check the Age Rating
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          Buying for yourself, a sibling, or a child? The Entertainment Software Rating Board (ESRB) provides five standardized rating categories with descriptive tags:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs mb-4">
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <span className="font-heading font-black text-lg block text-emerald-600">E</span>
            <span className="font-bold text-slate-800">Everyone</span>
            <span className="text-[10px] text-slate-500 block mt-1">All ages</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <span className="font-heading font-black text-lg block text-cyan-600">E10+</span>
            <span className="font-bold text-slate-800">Everyone 10+</span>
            <span className="text-[10px] text-slate-500 block mt-1">Ages 10 and up</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <span className="font-heading font-black text-lg block text-amber-600">T</span>
            <span className="font-bold text-slate-800">Teen</span>
            <span className="text-[10px] text-slate-500 block mt-1">Ages 13 and up</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <span className="font-heading font-black text-lg block text-red-600">M</span>
            <span className="font-bold text-slate-800">Mature 17+</span>
            <span className="text-[10px] text-slate-500 block mt-1">Intense violence</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200 col-span-2 sm:col-span-1">
            <span className="font-heading font-black text-lg block text-slate-900">AO</span>
            <span className="font-bold text-slate-800">Adults Only</span>
            <span className="text-[10px] text-slate-500 block mt-1">18+ only</span>
          </div>
        </div>

        <p className="text-xs text-slate-600">
          Always inspect the <strong>content descriptors</strong> (e.g., Blood, Simulated Gambling, Mild Lyrics) on the store page before checkout.
        </p>
      </section>

      {/* Rule 4: Know refund rules before you buy */}
      <section id="section-rule-4" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">04</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Rule 4: Know the Refund Rules Before You Click Buy
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          A game might not run well on your GPU, or the controls might not suit you. Knowing your refund rights beforehand prevents wasted money.
        </p>

        <div className="p-5 bg-blue-50 border border-blue-200 rounded-2xl mb-4">
          <h4 className="font-heading font-bold text-blue-950 text-base mb-2">
            Steam's Standard 14-Day / 2-Hour Refund Rule
          </h4>
          <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
            On Steam, you can request a full refund to your original payment method or Steam Wallet if:
          </p>
          <ul className="text-xs sm:text-sm text-blue-900 list-disc list-inside mt-2 space-y-1">
            <li>The purchase was made within the last <strong>14 days</strong>.</li>
            <li>The title has been played for <strong>less than 2 hours</strong> total play time.</li>
          </ul>
        </div>
      </section>

      {/* Rule 5: Read reviews and system requirements */}
      <section id="section-rule-5" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">05</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Rule 5: Read Reviews and System Requirements
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          Spend two minutes verifying four essential items before entering your payment details:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong>1. Recent Review Sentiment:</strong> Don't just check overall scores; filter by "Most Recent" to see if a recent patch broke optimization.
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong>2. Minimum vs Recommended Specs:</strong> Compare your CPU, GPU VRAM, and RAM against the store page's listed requirements.
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong>3. Always-Online Requirements:</strong> Verify whether single-player story mode demands a continuous internet connection.
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong>4. Third-Party Account Launchers:</strong> Check if playing requires an external Ubisoft Connect, EA App, or Denuvo DRM client.
          </div>
        </div>
      </section>

      {/* Rule 6: Lock down your account */}
      <section id="section-rule-6" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">06</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Rule 6: Lock Down Your Account
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          Your game library contains real monetary value. Guard it against credential stuffing and phishing:
        </p>
        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
          <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
            <i className="fa-solid fa-mobile-screen-button text-gold-600 text-lg"></i>
            <span><strong>Turn on Two-Factor Authentication (2FA):</strong> Enable Steam Guard Mobile Authenticator on your smartphone.</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
            <i className="fa-solid fa-key text-gold-600 text-lg"></i>
            <span><strong>Use Unique Passwords:</strong> Never reuse your personal email password for your gaming accounts.</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-3">
            <i className="fa-solid fa-triangle-exclamation text-gold-600 text-lg"></i>
            <span><strong>Beware of Discord Phishing:</strong> Never click links offering "free $50 Steam gift cards" or "vote for my CS team."</span>
          </div>
        </div>
      </section>

      {/* Rule 7: Watch out for in-game purchases */}
      <section id="section-rule-7" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center font-bold text-sm">07</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Rule 7: Watch Out for In-Game Purchases
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed mb-4">
          Free-to-play games are accessible, but many use psychological FOMO loops (fear of missing out) to encourage recurring microtransactions. Set a monthly budget, disable saved credit cards or one-click purchases if family members use your PC, and review email receipts regularly.
        </p>
      </section>

      {/* Quick Safety Checklist Table */}
      <section id="section-checklist" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <h3 className="text-xl font-heading font-bold text-slate-900 mb-4">
          Quick Pre-Purchase Safety Checklist
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs mb-6">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-white font-heading uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-3.5">Before You Buy</th>
                <th className="p-3.5">Safety Check</th>
                <th className="p-3.5">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Store</td>
                <td className="p-3.5">Is it an official, recognized platform?</td>
                <td className="p-3.5 text-emerald-700 font-medium">Stick to Steam, Epic, GOG, or direct publisher stores.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Price</td>
                <td className="p-3.5">Is the discount suspiciously steep?</td>
                <td className="p-3.5 text-amber-700 font-medium">Avoid unauthorized key sellers with 80%+ launch discounts.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Age Rating</td>
                <td className="p-3.5">Is the rating appropriate for the player?</td>
                <td className="p-3.5">Verify ESRB categories and content descriptors.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Refund Policy</td>
                <td className="p-3.5">Are clear return rules posted?</td>
                <td className="p-3.5">Note the 14-day / 2-hour window on Steam.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900">Account</td>
                <td className="p-3.5">Is Two-Factor Authentication active?</td>
                <td className="p-3.5 text-emerald-700 font-medium">Keep Steam Guard or 2FA active at all times.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Final Thoughts */}
      <section id="section-final" className="scroll-mt-24 pt-6 border-t border-slate-200">
        <div className="p-6 bg-slate-900 text-white rounded-2xl border border-gold-500/30 shadow-xl">
          <span className="text-xs text-gold-400 font-bold uppercase tracking-widest font-heading block mb-2">Final Thoughts</span>
          <h3 className="text-xl font-heading font-bold mb-3">Safe Gaming Shopping is a Simple Habit</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
            Safe digital gaming isn't complicated. Stick to trusted stores, be skeptical of unbelievable deals, and know your refund rights before checkout. Looking for your next competitive match? Check out our playable browser sports games built right by The 14 Lights!
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('game', 'crazy-fifa-2026')}
              className="px-4 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-gold-500 text-black hover:bg-gold-400 transition"
            >
              Play Crazy FIFA 2026
            </button>
            <button
              onClick={() => onNavigate('game', 'soccer-disc-league')}
              className="px-4 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider border border-white/20 text-white hover:bg-white/10 transition"
            >
              Play Soccer Disc League
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

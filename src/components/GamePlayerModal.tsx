import React, { useState, useEffect } from 'react';
import { X, Maximize2, Minimize2, RotateCcw, Loader2, Sparkles, Volume2, VolumeX } from 'lucide-react';

interface GamePlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameTitle: string;
  gameUrl: string;
}

export const GamePlayerModal: React.FC<GamePlayerModalProps> = ({
  isOpen,
  onClose,
  gameTitle,
  gameUrl,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Lock scroll on body when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, key]);

  if (!isOpen) return null;

  const handleReload = () => {
    setIsLoading(true);
    setKey((prev) => prev + 1);
  };

  const toggleFullscreen = () => {
    const modalElem = document.getElementById('game-modal-container');
    if (!modalElem) return;

    if (!document.fullscreenElement) {
      modalElem.requestFullscreen().then(() => setIsFullscreen(true)).catch((err) => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch((err) => {
        console.error('Error attempting to exit fullscreen:', err);
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div
        id="game-modal-container"
        className="relative w-full max-w-6xl h-[92vh] max-h-[850px] bg-dark-900 border border-gold-500/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-black/80 border-b border-white/10 z-20">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gold-500 animate-pulse"></div>
            <h2 className="text-white font-bold text-base sm:text-lg tracking-wide flex items-center gap-2">
              {gameTitle}
              <span className="hidden sm:inline-block text-[10px] uppercase font-semibold text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20">
                Unity WebGL
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReload}
              title="Reload Game"
              className="p-2 rounded-lg bg-white/5 hover:bg-gold-500/20 text-gray-300 hover:text-gold-400 transition"
              aria-label="Reload Game"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={toggleFullscreen}
              title="Toggle Fullscreen"
              className="p-2 rounded-lg bg-white/5 hover:bg-gold-500/20 text-gray-300 hover:text-gold-400 transition"
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              title="Close Player"
              className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500 text-red-300 hover:text-white transition ml-1"
              aria-label="Close Game"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Game Canvas Container & Iframe */}
        <div className="relative flex-1 w-full bg-black overflow-hidden flex items-center justify-center">
          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-dark-900/95 p-6 text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full border-4 border-gold-500/20 border-t-gold-500 animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-gold-400 animate-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Preparing Stadium...</h3>
              <p className="text-sm text-gray-400 max-w-md">
                Downloading Unity WebGL engine files & game assets for <span className="text-gold-400 font-medium">{gameTitle}</span>.
              </p>
              <div className="mt-6 w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gold-600 to-gold-400 animate-pulse w-3/4 rounded-full"></div>
              </div>
            </div>
          )}

          {/* Embedded Game iframe */}
          <iframe
            key={key}
            src={gameUrl}
            title={gameTitle}
            className="w-full h-full border-0 relative z-0"
            allow="autoplay; fullscreen; microphone; camera; focus-without-user-activation; accelerometer; gyroscope"
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2 bg-black/90 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Controls: Keyboard / Touch screen</span>
          </div>
          <div>Powered by The 14Lights</div>
        </div>
      </div>
    </div>
  );
};

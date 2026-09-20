import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sound } from '../utils/audio';

interface HeaderProps {
  onOpenTrial: () => void;
  onOpenMenu: () => void;
  isSoundEnabled: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenTrial,
  onOpenMenu,
  isSoundEnabled,
  onToggleSound,
}) => {
  return (
    <header id="main-header" className="relative z-30 w-full flex items-center justify-between px-6 sm:px-10 lg:px-14 py-6 md:py-8 select-none">
      {/* Brand Logo */}
      <div 
        id="brand-logo"
        onClick={() => sound.playBlip()}
        className="flex items-center space-x-2.5 cursor-pointer group"
      >
        <div className="relative flex items-center justify-center w-5 h-5">
          {/* Diamond Glyph */}
          <span className="text-cyan-400 text-base leading-none group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
            ❉
          </span>
        </div>
        <span className="flex items-center font-display font-medium text-lg tracking-[0.08em] text-slate-100 group-hover:text-cyan-200 transition-colors">
          x720<span className="text-cyan-400 text-sm font-light">.ai</span>
        </span>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        {/* Sound Toggle */}
        <button
          id="sound-toggle-btn"
          type="button"
          onClick={onToggleSound}
          title={isSoundEnabled ? "Mute audio effects" : "Enable audio effects"}
          className="p-2 text-slate-400 hover:text-cyan-300 transition-colors rounded-full hover:bg-slate-800/40 cursor-pointer"
          aria-label="Toggle Sound"
        >
          {isSoundEnabled ? (
            <Volume2 className="w-4 h-4" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-600" />
          )}
        </button>

        {/* RISK FREE TRIAL Pill Button */}
        <button
          id="get-free-trial-btn"
          type="button"
          onClick={() => {
            sound.playClick();
            onOpenTrial();
          }}
          className="relative group px-5 sm:px-6 py-2 rounded-full border border-slate-700/80 bg-slate-900/40 hover:bg-slate-800/60 hover:border-cyan-500/60 transition-all duration-300 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-95"
        >
          <span className="relative z-10 font-sans text-[0.45rem] sm:text-xs tracking-[0.18em] font-medium text-slate-200 group-hover:text-white uppercase transition-colors cursor-pointer">
            Free Trial 3 Day
          </span>
          <div className="absolute inset-0 rounded-full bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xs pointer-events-none" />
        </button>

        {/* Hamburger Menu Button */}
        <button
          id="mobile-menu-btn"
          type="button"
          onClick={() => {
            sound.playClick();
            onOpenMenu();
          }}
          className="flex flex-col justify-center items-center w-9 h-9 space-y-1.5 p-1 text-slate-300 hover:text-cyan-300 transition-colors rounded-lg hover:bg-slate-800/40 group cursor-pointer"
          aria-label="Open Navigation Menu"
        >
          <span className="w-6 h-[1.5px] bg-slate-300 group-hover:bg-cyan-400 transition-all duration-300" />
          <span className="w-6 h-[1.5px] bg-slate-300 group-hover:bg-cyan-400 transition-all duration-300" />
          <span className="w-6 h-[1.5px] bg-slate-300 group-hover:bg-cyan-400 transition-all duration-300" />
        </button>
      </div>
    </header>
  );
};

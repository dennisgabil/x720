import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/audio';

interface LeftHeroContentProps {
  onOpenLiveDemo: (samplePrompt?: string) => void;
}

export const LeftHeroContent: React.FC<LeftHeroContentProps> = ({ onOpenLiveDemo }) => {
  return (
    <div id="left-hero-section" className="relative z-20 flex flex-col justify-center select-none pt-4 lg:pt-0">
      {/* Almighty headline */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-1 sm:space-y-1.5"
      >
        <h2 className="font-display font-light text-2xl sm:text-3xl md:text-4xl lg:text-[42px] tracking-[0.08em] text-slate-100 uppercase leading-[1.1]">
          HYPER
        </h2>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] tracking-[0.08em] text-cyan-400 uppercase leading-[1.1] drop-shadow-[0_0_18px_rgba(34,211,238,0.7)] animate-pulse-glow">
          PERSONAL
        </h2>
        <h2 className="font-display font-light text-2xl sm:text-3xl md:text-4xl lg:text-[42px] tracking-[0.08em] text-slate-100 uppercase leading-[1.1]">
          NEO
        </h2>
        <h2 className="font-display font-light text-2xl sm:text-3xl md:text-4xl lg:text-[42px] tracking-[0.08em] text-slate-100 uppercase leading-[1.1]">
          MOBILE AI
        </h2>
      </motion.div>

      {/* 24/7 Stat Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-6 sm:mt-8"
      >
        <div className="font-sans font-extralight text-5xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-widest text-slate-200/90 leading-none">
          24/7
        </div>
        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-400 font-light flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
          Autonomous Standby
        </p>
      </motion.div>

      {/* Interactive Micro-CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="mt-8"
      >
        <button
          id="quick-demo-trigger"
          type="button"
          onClick={() => {
            sound.playClick();
            onOpenLiveDemo("Make an appointment with a doctor for Tuesday at 10 AM");
          }}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-cyan-400/90 hover:text-cyan-300 py-1.5 px-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group shadow-sm active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span>TEST LIVE COMMAND</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};

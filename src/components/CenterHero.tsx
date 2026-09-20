import React from 'react';
import { motion } from 'motion/react';
import heroImage from '../assets/images/x720_cyborg_hero.png';

export const CenterHero: React.FC = () => {
  return (
    <div id="center-hero-container" className="relative flex flex-col items-center justify-end w-full h-full min-h-[460px] lg:min-h-[580px] pointer-events-none select-none">
      
      {/* Background Big Typography: E L L I */}
      <div className="absolute top-0 inset-x-0 flex items-start justify-center z-0 pt-2 sm:pt-4">
        <div className="relative flex items-center justify-center w-full max-w-4xl px-4">
          
          {/* Vertical Rotated "personal ai" label to the left of 'E' */}
          <div className="absolute -left-2 sm:left-4 md:left-8 top-12 sm:top-16 md:top-20 z-10">
            <span className="block -rotate-90 origin-bottom-left text-[9px] sm:text-[11px] font-sans tracking-[0.28em] text-slate-400/80 uppercase whitespace-nowrap">
              Personal ai
            </span>
          </div>

          {/* Huge Letters E L L I */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="flex items-center justify-between w-full text-slate-200/85 font-sans font-light text-[22vw] sm:text-[18vw] md:text-[16vw] lg:text-[180px] tracking-[0.22em] sm:tracking-[0.28em] md:tracking-[0.35em] leading-none select-none pl-6 sm:pl-10"
          >
            <span className="inline-block transition-transform hover:scale-105 duration-500 hover:text-cyan-200">X</span>
            <span className="inline-block transition-transform hover:scale-105 duration-500 hover:text-cyan-200">7</span>
            <span className="inline-block transition-transform hover:scale-105 duration-500 hover:text-cyan-200">2</span>
            <span className="inline-block transition-transform hover:scale-105 duration-500 hover:text-cyan-200">0</span>
          </motion.div>
        </div>
      </div>

      {/* Cybernetic Woman Character Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
        className="relative z-10 flex items-end justify-center w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[540px] h-[420px] sm:h-[500px] md:h-[560px] lg:h-[620px] overflow-visible"
      >
        {/* Glow halo behind character */}
        <div className="absolute inset-0 bg-radial from-cyan-500/15 via-transparent to-transparent blur-3xl transform scale-110 pointer-events-none" />

        {/* Character Image with Precision Masking & Gradient Blending */}
        <div className="relative w-full h-full flex items-end justify-center">
          <img
            id="cyborg-character-img"
            src={heroImage}
            alt="x720 Cyborg AI Character"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-[1.02] drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)]"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 76%, rgba(0,0,0,0) 100%)',
            }}
          />

          {/* Interactive subtle neon pulse along arm area */}
          <div className="absolute bottom-28 left-[36%] w-1.5 h-12 bg-cyan-400 rounded-full blur-[2px] opacity-80 animate-pulse pointer-events-none" />
          <div className="absolute bottom-20 left-[48%] w-12 h-1 bg-cyan-400 rounded-full blur-[2px] opacity-75 animate-pulse pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

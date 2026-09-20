import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { CapabilitySlide } from '../types';
import { sound } from '../utils/audio';

interface CapabilityCardProps {
  slides: CapabilitySlide[];
  onSelectPrompt: (prompt: string) => void;
}

export const CapabilityCard: React.FC<CapabilityCardProps> = ({
  slides,
  onSelectPrompt,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    sound.playClick();
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    sound.playClick();
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <div id="capability-card" className="relative z-20 w-full max-w-[360px] sm:max-w-[400px]">
      {/* Outer Card Shell */}
      <div className="relative rounded-2xl bg-[#0e1420]/85 border border-slate-800/80 backdrop-blur-xl p-5 sm:p-6 shadow-2xl transition-all duration-300 hover:border-slate-700/80 group">
        
        {/* Subtle cyan top highlight */}
        <div className="absolute top-0 inset-x-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-60" />

        {/* Slide Content */}
        <div className="min-h-[96px] sm:min-h-[105px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400/90 font-medium">
                  {currentSlide.category}
                </span>
                <span className="text-[9px] font-mono text-slate-500">
                  {currentSlide.metrics}
                </span>
              </div>
              
              <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-slate-300 font-normal">
                {currentSlide.text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Pagination & Navigation Controls */}
        <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
          {/* Dot Pagination */}
          <div className="flex items-center space-x-1.5">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => {
                  sound.playBlip();
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-4 h-1.5 bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]'
                    : 'w-1.5 h-1.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Try Command & Chevron Buttons */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onSelectPrompt(currentSlide.examplePrompt);
              }}
              className="px-2.5 py-1 text-[10px] font-mono text-cyan-400 hover:text-white bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 rounded-full flex items-center gap-1 transition-colors"
              title="Run simulation"
            >
              <Play className="w-2.5 h-2.5 fill-cyan-400 text-cyan-400" />
              <span className='cursor-pointer'>Simulate</span>
            </button>

            {/* Previous button */}
            <button
              id="slide-prev-btn"
              type="button"
              onClick={handlePrev}
              className="w-7 h-7 rounded-full border border-slate-700/80 hover:border-slate-500 bg-slate-900/40 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            {/* Next button */}
            <button
              id="slide-next-btn"
              type="button"
              onClick={handleNext}
              className="w-7 h-7 rounded-full border border-slate-700/80 hover:border-slate-500 bg-slate-900/40 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

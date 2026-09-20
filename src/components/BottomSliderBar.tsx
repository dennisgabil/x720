import React from 'react';
import { motion } from 'motion/react';
import { SliderPill } from '../types';
import { SLIDER_DESCRIPTIONS } from '../data';
import { sound } from '../utils/audio';

interface BottomSliderBarProps {
  activePill: SliderPill;
  onChangePill: (pill: SliderPill) => void;
}

export const BottomSliderBar: React.FC<BottomSliderBarProps> = ({
  activePill,
  onChangePill,
}) => {
  const options: SliderPill[] = ['contextaware', 'seamless', 'realtime'];
  const activeData = SLIDER_DESCRIPTIONS[activePill];

  return (
    <div id="bottom-slider-bar" className="relative z-30 flex flex-col items-center justify-center select-none py-3 px-4 w-full max-w-xl mx-auto">
      {/* Interactive slider track */}
      <div className="relative flex items-center justify-between w-full max-w-sm sm:max-w-md px-2">
        {/* Continuous horizontal background line */}
        <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-[1px] bg-slate-700/60 z-0" />

        {options.map((option, idx) => {
          const isActive = activePill === option;
          return (
            <button
              key={option}
              id={`slider-option-${option}`}
              type="button"
              onClick={() => {
                sound.playBlip();
                onChangePill(option);
              }}
              className="relative z-10 group flex flex-col items-center focus:outline-none px-2 py-1"
            >
              {/* Text label */}
              <span
                className={`text-[11px] sm:text-xs font-sans tracking-widest lowercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-cyan-300 font-medium drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {option}
              </span>

              {/* Slider Indicator underneath */}
              <div className="mt-1 relative flex items-center justify-center h-3 w-8">
                {isActive ? (
                  <motion.div
                    layoutId="activeSliderIndicator"
                    className="relative flex items-center justify-center"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  >
                    <div className="w-5 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                    <div className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#fff]" />
                  </motion.div>
                ) : (
                  <div className="w-1.5 h-[1.5px] bg-slate-700 group-hover:bg-slate-500 transition-colors rounded-full" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic descriptor pill */}
      <motion.div
        key={activePill}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-1 text-center max-w-sm"
      >
        <span className="inline-block text-[10px] font-mono tracking-widest text-cyan-400/80 uppercase mr-1.5">
          [{activeData.tag}]:
        </span>
        <span className="text-[11px] text-slate-400 font-light leading-snug">
          {activeData.description}
        </span>
      </motion.div>
    </div>
  );
};

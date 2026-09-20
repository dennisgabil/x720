import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Smartphone, Shield, Zap, Sparkles, Radio, ArrowRight } from 'lucide-react';
import { sound } from '../utils/audio';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onOpenTrial,
  onOpenDemo,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Slide-over Drawer from Right */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 350, damping: 35 }}
          className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#090d14] border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl"
        >
          {/* Top Bar */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400 text-base leading-none">❉</span>
                <span className="font-display font-medium text-lg tracking-wider text-slate-100">
                  x720<span className="text-cyan-400 text-sm">.ai</span>
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <div className="mt-8 space-y-4 font-sans">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onClose();
                  onOpenDemo();
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-900/80 border border-transparent hover:border-cyan-500/20 text-left transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-950/40 text-cyan-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-200 group-hover:text-cyan-300">
                      Live Command Shell
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Simulate multi-step mobile execution
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </button>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/50">
                <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">
                    Native Mobile Companion
                  </div>
                  <div className="text-[11px] text-slate-500">
                    iOS Dynamic Island & Android Widget
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/50">
                <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                  <Radio className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">
                    Duplex Real-Time Voice
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Sub-120ms conversational audio matrix
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/50">
                <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">
                    Neural Privacy Guard
                  </div>
                  <div className="text-[11px] text-slate-500">
                    On-device isolation & zero cloud training
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-6 border-t border-slate-800/80">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onClose();
                onOpenTrial();
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] active:scale-95 text-center"
            >
              Start 14-Day Free Trial
            </button>
            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-cyan-400" />
                <span>v3.4.2 Active</span>
              </span>
              <span>Online 99.99%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

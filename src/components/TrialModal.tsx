import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Smartphone, Apple, ShieldCheck, Sparkles } from 'lucide-react';
import { SubscriptionTier } from '../types';
import { sound } from '../utils/audio';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier: SubscriptionTier;
  onSelectTier: (tier: SubscriptionTier) => void;
  tiers: SubscriptionTier[];
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  selectedTier,
  onSelectTier,
  tiers,
}) => {
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;
    sound.playClick();
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setEmailOrPhone('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 w-full max-w-lg rounded-2xl bg-[#0b1018] border border-slate-700/80 p-6 sm:p-8 shadow-2xl overflow-hidden"
        >
          {/* Subtle Ambient Top Accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Close Button */}
          <button
            id="close-trial-modal-btn"
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase">
                <Sparkles className="w-4 h-4" />
                <span>14-Day Free Neural Trial</span>
              </div>
              <h3 className="mt-1 font-display font-medium text-2xl text-slate-100">
                Experience x720.ai in Your Mobile
              </h3>
              <p className="mt-1 text-xs text-slate-400 font-sans leading-relaxed">
                Full access to all autonomous features. No credit card required. Cancel anytime with one tap.
              </p>

              {/* Tier Selection */}
              <div className="mt-5">
                <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Select Edition
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {tiers.map((t) => {
                    const isSelected = t.id === selectedTier.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => {
                          sound.playBlip();
                          onSelectTier(t);
                        }}
                        className={`flex flex-col items-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.25)]'
                            : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-full overflow-hidden mb-1.5">
                          <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="font-sans text-xs font-medium text-slate-200 capitalize">
                          {t.name}
                        </span>
                        <span className="font-mono text-[11px] text-cyan-400">
                          {t.priceMonthly}<span className="text-[9px] text-slate-500">/mo</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Operating System Choice */}
              <div className="mt-5">
                <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Mobile Device
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      sound.playBlip();
                      setPlatform('ios');
                    }}
                    className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-xs font-sans transition-all cursor-pointer ${
                      platform === 'ios'
                        ? 'bg-slate-800/80 border-cyan-400 text-white font-medium shadow-sm'
                        : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Apple className="w-4 h-4" />
                    <span>Apple iOS</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      sound.playBlip();
                      setPlatform('android');
                    }}
                    className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-xs font-sans transition-all cursor-pointer ${
                      platform === 'android'
                        ? 'bg-slate-800/80 border-cyan-400 text-white font-medium shadow-sm'
                        : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Android</span>
                  </button>
                </div>
              </div>

              {/* Form Input */}
              <form onSubmit={handleSubmit} className="mt-5">
                <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Send Mobile Invitation Link
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Enter email or mobile phone..."
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    className="flex-1 bg-slate-950 border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)] active:scale-95"
                  >
                    Send
                  </button>
                </div>
              </form>

              {/* Trust Badge */}
              <div className="mt-5 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Data Retention • End-to-End Encrypted Neural Core</span>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-display font-medium text-2xl text-slate-100">
                Activation Link Dispatched
              </h3>
              <p className="mt-2 text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                We've sent your exclusive 14-day trial invitation for <span className="text-cyan-400 font-semibold uppercase">{selectedTier.name} edition</span> to <span className="text-slate-200 font-mono">{emailOrPhone}</span>.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 inline-block text-left w-full">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  Test Activation Token:
                </div>
                <div className="text-sm font-mono text-cyan-300 font-bold tracking-widest mt-1">
                  x720-NEURAL-8902-PRO
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="mt-6 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
              >
                Return to Experience
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

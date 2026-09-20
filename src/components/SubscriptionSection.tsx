import React from 'react';
import { SubscriptionTier } from '../types';
import { sound } from '../utils/audio';

interface SubscriptionSectionProps {
  tiers: SubscriptionTier[];
  selectedTier: SubscriptionTier | null;
  onSelectTier: (tier: SubscriptionTier) => void;
}

export const SubscriptionSection: React.FC<SubscriptionSectionProps> = ({
  tiers,
  selectedTier,
  onSelectTier,
}) => {
  return (
    <div id="subscription-options-section" className="relative z-20 flex items-center justify-between sm:justify-end gap-5 sm:gap-7 select-none mt-4 sm:mt-5">
      {/* Left Typographic Column */}
      <div className="text-left font-sans">
        <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.22em] text-slate-400 uppercase leading-[1.3]">
          PICK<br />
          YOUR<br />
          NEURO
        </p>
      </div>

      {/* 3 Metallic Badges Row */}
      <div className="flex items-center space-x-3.5 sm:space-x-4">
        {tiers.map((tier) => {
          const isCurrent = selectedTier?.id === tier.id;
          return (
            <button
              key={tier.id}
              id={`subscription-tier-${tier.id}`}
              type="button"
              onClick={() => {
                sound.playClick();
                onSelectTier(tier);
              }}
              className="flex flex-col items-center group focus:outline-none transition-transform hover:-translate-y-1 active:scale-95"
            >
              {/* Metallic 3D Orb/Badge */}
              <div
                className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-black/60 p-[1px] transition-all duration-300 cursor-pointer ${
                  isCurrent
                    ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-950 scale-110 shadow-[0_0_15px_rgba(34,211,238,0.7)]'
                    : 'border border-slate-700/60 group-hover:border-slate-400'
                }`}
              >
                <img
                  src={tier.image}
                  alt={`${tier.name} tier`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full filter contrast-110 group-hover:scale-115 transition-transform duration-500"
                />
              </div>

              {/* Tier Label */}
              <span
                className={`mt-1.5 text-[9px] sm:text-[10px] tracking-wider lowercase transition-colors font-sans ${
                  isCurrent
                    ? 'text-cyan-300 font-medium'
                    : 'text-slate-500 group-hover:text-slate-300'
                }`}
              >
                {tier.id}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

import { useState } from 'react';
import { Header } from './components/Header';
import { LeftHeroContent } from './components/LeftHeroContent';
import { CenterHero } from './components/CenterHero';
import { CapabilityCard } from './components/CapabilityCard';
import { SubscriptionSection } from './components/SubscriptionSection';
import { BottomSliderBar } from './components/BottomSliderBar';
import { TrialModal } from './components/TrialModal';
import { InteractiveTaskDemo } from './components/InteractiveTaskDemo';
import { MenuDrawer } from './components/MenuDrawer';
import { CAPABILITY_SLIDES, SUBSCRIPTION_TIERS } from './data';
import { SliderPill, SubscriptionTier } from './types';

export default function App() {
  const [activePill, setActivePill] = useState<SliderPill>('seamless');
  const [selectedTier, setSelectedTier] = useState<SubscriptionTier>(SUBSCRIPTION_TIERS[1]); // Gold default
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [activeDemoPrompt, setActiveDemoPrompt] = useState('');
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  const handleOpenDemoWithPrompt = (promptText?: string) => {
    if (promptText) {
      setActiveDemoPrompt(promptText);
    } else {
      setActiveDemoPrompt("Make an appointment with a doctor for Tuesday at 10 AM");
    }
    setIsDemoOpen(true);
  };

  const handleSelectTier = (tier: SubscriptionTier) => {
    setSelectedTier(tier);
    setIsTrialOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#05070b] flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* High-Tech Bezel / Screen Container (Exact match to reference frame) */}
      <div 
        id="x720-viewport-container" 
        className="relative w-full max-w-[1520px] min-h-[92vh] sm:min-h-[95vh] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-cyan-500/25 bg-gradient-to-br from-[#080d16] via-[#060910] to-[#0e0a12] shadow-[0_0_60px_rgba(6,182,212,0.12)] overflow-hidden flex flex-col justify-between"
      >
        
        {/* Ambient atmospheric backdrop lighting */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-rose-950/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Top Header Navigation */}
        <Header
          onOpenTrial={() => setIsTrialOpen(true)}
          onOpenMenu={() => setIsMenuOpen(true)}
          isSoundEnabled={isSoundEnabled}
          onToggleSound={() => setIsSoundEnabled((prev) => !prev)}
        />

        {/* Central Responsive Hero Stage */}
        <main className="relative z-10 flex-1 w-full px-6 sm:px-10 lg:px-14 flex flex-col justify-between py-2 lg:py-0">
          
          <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
            
            {/* Left Column: Almighty Personal AI & 24/7 (cols 1-4) */}
            <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col justify-center">
              <LeftHeroContent onOpenLiveDemo={handleOpenDemoWithPrompt} />
            </div>

            {/* Center Stage: Huge E L L I & Cyborg Character (cols 5-8) */}
            <div className="lg:col-span-4 order-1 lg:order-2 flex items-center justify-center relative min-h-[380px] sm:min-h-[460px] lg:min-h-[580px]">
              <CenterHero />
            </div>

            {/* Right Column: Capability Slide Card & 3 Subscriptions (cols 9-12) */}
            <div className="lg:col-span-4 order-3 flex flex-col items-start lg:items-end justify-center space-y-2 mt-4 lg:mt-12">
              <SubscriptionSection
                tiers={SUBSCRIPTION_TIERS}
                selectedTier={selectedTier}
                onSelectTier={handleSelectTier}
              />

              <CapabilityCard
                slides={CAPABILITY_SLIDES}
                onSelectPrompt={handleOpenDemoWithPrompt}
              />
            </div>
          </div>

          {/* Bottom Slider Bar: contentaware — seamless — realtime */}
          <div className="w-full mt-6 sm:mt-8 pb-3 sm:pb-5">
            <BottomSliderBar
              activePill={activePill}
              onChangePill={setActivePill}
            />
          </div>
        </main>
      </div>

      {/* Interactive Overlays */}
      <TrialModal
        isOpen={isTrialOpen}
        onClose={() => setIsTrialOpen(false)}
        selectedTier={selectedTier}
        onSelectTier={setSelectedTier}
        tiers={SUBSCRIPTION_TIERS}
      />

      <InteractiveTaskDemo
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        initialPrompt={activeDemoPrompt}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenTrial={() => setIsTrialOpen(true)}
        onOpenDemo={() => handleOpenDemoWithPrompt()}
      />
    </div>
  );
}

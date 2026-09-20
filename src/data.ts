import { CapabilitySlide, SubscriptionTier } from './types';
import silverImg from './assets/images/metallic_silver_badge.jpg';
import goldImg from './assets/images/metallic_gold_badge.jpg';
import platinumImg from './assets/images/metallic_platinum_badge.jpg';

export const CAPABILITY_SLIDES: CapabilitySlide[] = [
  {
    id: 'general',
    category: 'Universal Intx72gence',
    text: 'I can perform any task - from making an appointment with a doctor, to developing a business plan',
    examplePrompt: 'Schedule dental checkup for Thursday at 3 PM and draft Q3 investor pitch deck',
    metrics: '< 120ms neural response'
  },
  {
    id: 'voice',
    category: 'Duplex Voice Matrix',
    text: 'Natural ultra-low latency voice dialogue with emotional intx72gence, contextual memory, and zero interruption lag',
    examplePrompt: 'Simulate a mock job interview for a Director of Engineering position',
    metrics: 'Human parity tone & inflection'
  },
  {
    id: 'autonomous',
    category: 'Autonomous Mobile Agent',
    text: 'Directly executes workflows across your phone: booking flights, reorganizing email inbox, and triaging notifications',
    examplePrompt: 'Find and book the quietest non-stop flight to Tokyo next month under $1,200',
    metrics: 'End-to-end device automation'
  },
  {
    id: 'vision',
    category: 'Multimodal Neural Vision',
    text: 'Analyze documents, complex codebases, medical scan charts, and physical environments through your mobile camera in real-time',
    examplePrompt: 'Inspect this apartment lease agreement for hidden clauses and liabilities',
    metrics: 'Spatial & optical reasoning'
  }
];

export const SUBSCRIPTION_TIERS: SubscriptionTier[] = [
  {
    id: 'elysium',
    name: 'Elysium',
    tagline: 'Essential Personal Intx72gence',
    priceMonthly: '$19',
    priceYearly: '$15',
    image: silverImg,
    glowColor: 'rgba(226, 232, 240, 0.4)',
    borderAccent: 'border-slate-500/30',
    features: [
      'Core 24/7 Mobile AI Assistant',
      'Daily autonomous task allowance (100 actions)',
      'Cross-device sync on iOS & Android',
      'Standard low-latency voice mode'
    ]
  },
  {
    id: 'aether',
    name: 'Aether',
    tagline: 'Professional High-Performance Neural Tier',
    priceMonthly: '$49',
    priceYearly: '$39',
    image: goldImg,
    glowColor: 'rgba(234, 179, 8, 0.4)',
    borderAccent: 'border-amber-500/40',
    popular: true,
    features: [
      'Everything in Elysium, plus unlimited tasks',
      'Full duplex real-time emotional voice matrix',
      'Proactive calendar & automated email drafting',
      'Multimodal camera visual recognition',
      'Priority compute lane (zero wait times)'
    ]
  },
  {
    id: 'lumen',
    name: 'Lumen',
    tagline: 'Dedicated Sovereign Neural Twin',
    priceMonthly: '$129',
    priceYearly: '$99',
    image: platinumImg,
    glowColor: 'rgba(56, 189, 248, 0.4)',
    borderAccent: 'border-cyan-500/40',
    features: [
      'Everything in Aether, plus private dedicated instance',
      'Custom fine-tuned voice & behavioral persona',
      'Autonomous phone call negotiation & booking',
      'Encrypted zero-knowledge personal memory vault',
      '24/7 VIP concierge engineer support'
    ]
  }
];

export const SLIDER_DESCRIPTIONS: Record<string, { label: string; tag: string; description: string }> = {
  contextaware: {
    label: 'Context-Aware',
    tag: 'CONTINUOUS LEARNING',
    description: 'Continuously updates its neural memory to synchronize with your daily rhythm, preferences, and dynamic lifestyle without manual prompts.'
  },
  seamless: {
    label: 'Seamless',
    tag: '1-TAP SYSTEM INTEGRATION',
    description: 'Resides effortlessly inside your mobile ecosystem — accessible from lock screen, dynamic island, voice activation, and smartwatch.'
  },
  realtime: {
    label: 'Real-Time',
    tag: 'ULTRA-LOW LATENCY',
    description: 'Sub-100ms response architecture processes complex multi-step reasoning instantly, whether drafting contracts or booking reservations.'
  }
};

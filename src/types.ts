export interface CapabilitySlide {
  id: string;
  category: string;
  text: string;
  examplePrompt: string;
  metrics: string;
}

export interface SubscriptionTier {
  id: 'elysium' | 'aether' | 'lumen';
  name: string;
  tagline: string;
  priceMonthly: string;
  priceYearly: string;
  image: string;
  glowColor: string;
  borderAccent: string;
  features: string[];
  popular?: boolean;
}

export type SliderPill = 'contextaware' | 'seamless' | 'realtime';

export interface TestimonialStat {
  label: string;
  value: string;
  sub: string;
}

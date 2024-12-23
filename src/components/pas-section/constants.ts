import { Package, Crown, Rocket } from 'lucide-react';
import { AlertTriangle, TrendingDown, DollarSign } from 'lucide-react';
import type { AgitationPoint, SolutionFeature } from './types';

export const AGITATION_POINTS: AgitationPoint[] = [
  {
    emoji: "📉",
    title: "Canva Templates Are Dead",
    description: "Your $20 templates are now worth $2. Thousands of sellers racing to the bottom.",
    icon: TrendingDown
  },
  {
    emoji: "📚",
    title: "Stop Making eBooks",
    description: "10,000+ sellers offering identical products. Even quality eBooks can't sell for more than $5.",
    icon: AlertTriangle
  },
  {
    emoji: "⚠️",
    title: "40 Hours for $2 Profit",
    description: "While you work for pennies, premium sellers make $100-$200 per sale.",
    icon: DollarSign
  }
];

export const SOLUTION_FEATURES: SolutionFeature[] = [
  {
    title: "500+ Templates",
    description: "Instantly access our complete collection of premium Notion templates, ready to sell with proven conversion rates.",
    icon: Package
  },
  {
    title: "Full PLR Rights",
    description: "Sell each template for $97-$297 and keep 100% of the profits. No recurring fees or commissions.",
    icon: Crown
  },
  {
    title: "Ready to Sell Today",
    description: "Start selling immediately with our done-for-you package. Just add your branding and launch.",
    icon: Rocket
  }
];
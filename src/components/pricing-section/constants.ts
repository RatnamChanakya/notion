import type { PricingFeature } from './types';

export const PRICING_TIERS = {
  USD: [
    { templates: 25, price: 27, label: '25 Templates' },
    { templates: 100, price: 97, label: '100 Templates' },
    { templates: 250, price: 197, label: '250 Templates' },
    { templates: 500, price: 297, label: '500 Templates' }
  ],
  INR: [
    { templates: 25, price: 999, label: '25 Templates' },
    { templates: 100, price: 1999, label: '100 Templates' },
    { templates: 250, price: 2999, label: '250 Templates' },
    { templates: 500, price: 4999, label: '500 Templates' }
  ]
} as const;

export const DEFAULT_TEMPLATES = 100; // Default to 100 templates

export const PRICING_FEATURES: PricingFeature[] = [
  {
    title: "Full PLR Rights",
    description: "Sell each template for $97-$297 and keep 100% of the profits"
  },
  {
    title: "Ready to Sell",
    description: "Start selling premium templates immediately with our done-for-you package"
  },
  {
    title: "Premium Quality",
    description: "Each template is meticulously crafted and proven to convert"
  },
  {
    title: "Lifetime Updates",
    description: "Get free updates and new templates added monthly"
  }
];
import { ShoppingBag, Store, Globe, Share2, Rocket, Users } from 'lucide-react';
import type { SalesPlatform } from './types';

export const PLATFORMS: SalesPlatform[] = [
  {
    name: 'Gumroad',
    icon: ShoppingBag,
    description: 'Perfect for digital creators with instant payouts and flexible pricing',
    benefits: [
      'No monthly fees - only pay when you make a sale',
      'Built-in email marketing tools',
      'Automated delivery & licensing',
      'Custom checkout experience'
    ],
    steps: [
      'Create a Gumroad account (free)',
      'Upload your template bundle with professional thumbnails',
      'Set tiered pricing (Basic/Pro/Agency)',
      'Enable affiliate program to boost sales'
    ]
  },
  {
    name: 'Etsy',
    icon: Store,
    description: 'Tap into a massive marketplace of buyers looking for digital products',
    benefits: [
      'Access to 90M+ active buyers',
      'Built-in SEO and traffic',
      'High trust factor with buyers',
      'Multiple payment options'
    ],
    steps: [
      'Open your Etsy shop ($0.20/listing)',
      'Create detailed product listings with keywords',
      'Add multiple template variations',
      'Offer bundle deals for higher AOV'
    ]
  },
  {
    name: 'Your Website',
    icon: Globe,
    description: 'Maximum control and profits with your own branded platform',
    benefits: [
      'Keep 100% of revenue',
      'Full control over branding',
      'Build your email list',
      'Create custom bundles'
    ],
    steps: [
      'Set up a professional landing page',
      'Connect payment processor (Stripe)',
      'Install analytics tracking',
      'Create content to drive organic traffic'
    ]
  },
  {
    name: 'Social Platforms',
    icon: Share2,
    description: 'Leverage your existing audience on Twitter, LinkedIn & Instagram',
    benefits: [
      'Direct access to your audience',
      'Organic reach potential',
      'Build authority in your niche',
      'Real-time market feedback'
    ],
    steps: [
      'Create platform-specific content',
      'Share template previews & results',
      'Engage with potential customers',
      'Use platform-specific CTAs'
    ]
  },
  {
    name: 'Course Platforms',
    icon: Rocket,
    description: 'Bundle templates with courses for higher ticket sales',
    benefits: [
      'Higher perceived value',
      'Recurring revenue potential',
      'Built-in audience',
      'Enhanced credibility'
    ],
    steps: [
      'Create a mini-course around your templates',
      'Price premium ($497-$997)',
      'Offer implementation support',
      'Create student success stories'
    ]
  },
  {
    name: 'Partnerships',
    icon: Users,
    description: 'Scale through strategic partnerships and affiliates',
    benefits: [
      'Rapid audience growth',
      'Shared credibility',
      'Multiple revenue streams',
      'Network effect'
    ],
    steps: [
      'Identify potential partners',
      'Create attractive commission structure',
      'Provide marketing materials',
      'Track & optimize performance'
    ]
  }
];
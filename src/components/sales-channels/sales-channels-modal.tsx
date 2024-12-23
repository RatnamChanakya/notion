import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { 
  Store, Globe, BookOpen, Users, 
  Mail, Video, Target, Zap,
  DollarSign, Briefcase, BarChart, Gift
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const CATEGORIES = [
  'All Channels',
  'Marketplaces',
  'Own Platform',
  'Education',
  'Social Media',
  'Email Marketing',
  'Video & Live',
  'Partnerships',
  'Membership Sites',
  'Apps & Tools',
  'Communities'
] as const;

const CHANNEL_CATEGORIES = [
  {
    title: 'Popular Marketplaces',
    icon: Store,
    category: 'Marketplaces',
    channels: [
      { 
        name: 'Gumroad',
        details: 'Best for digital creators, instant payouts',
        pricing: '8.5% + $0.30 per sale',
        audience: '25M+ monthly visitors',
        features: ['Instant payouts', 'Email marketing tools', 'Affiliate system', 'Custom checkout', 'Analytics dashboard']
      },
      { 
        name: 'Etsy',
        details: 'Huge marketplace with creative buyers',
        pricing: '$0.20 listing fee + 6.5% transaction fee',
        audience: '90M+ active buyers',
        features: ['Built-in SEO', 'High trust factor', 'Multiple payment options', 'Shop customization', 'Marketing tools']
      },
      { 
        name: 'Creative Market',
        details: 'Design-focused premium marketplace',
        pricing: '40% commission to platform',
        audience: '12M+ creative professionals',
        features: ['Quality-focused', 'Professional audience', 'Brand building', 'Featured opportunities']
      },
      {
        name: 'JVZoo',
        details: 'Digital product marketplace with instant commissions',
        pricing: '5% + payment processing fees',
        audience: '800K+ active affiliates',
        features: ['Instant commission payments', 'Affiliate marketplace', 'Sales funnel tools', 'Launch management']
      }
    ]
  },
  {
    title: 'Your Own Platform',
    icon: Globe,
    category: 'Own Platform',
    channels: [
      { 
        name: 'Custom Website',
        details: 'Full control over your brand and sales',
        pricing: 'Hosting costs + payment processing fees',
        audience: 'Build your own audience',
        features: ['Complete control', '100% profit margin', 'Brand building', 'Custom features', 'Direct customer relationships']
      },
      { 
        name: 'Sales Funnels',
        details: 'High-converting marketing funnels',
        pricing: 'Platform fee + 2.9% payment processing',
        audience: 'Targeted traffic',
        features: ['Upsell opportunities', 'Email integration', 'Analytics', 'A/B testing', 'Conversion optimization']
      },
      {
        name: 'WordPress + WooCommerce',
        details: 'Flexible e-commerce solution',
        pricing: 'Hosting + plugin costs',
        audience: 'Global reach potential',
        features: ['Unlimited customization', 'SEO friendly', 'Plugin ecosystem', 'Content marketing']
      }
    ]
  },
  {
    title: 'Education Platforms',
    icon: BookOpen,
    category: 'Education',
    channels: [
      { 
        name: 'Udemy',
        details: 'Bundle templates with video courses',
        pricing: '37% instructor revenue (direct sales)',
        audience: '57M+ students',
        features: ['Built-in audience', 'Course marketing', 'Student engagement', 'Marketing tools', 'Mobile app']
      },
      { 
        name: 'Skillshare',
        details: 'Project-based learning platform',
        pricing: 'Revenue share based on minutes watched',
        audience: '12M+ students',
        features: ['Passive income', 'Creative community', 'Project showcase', 'Student projects']
      },
      {
        name: 'Teachable',
        details: 'Create your own course platform',
        pricing: 'From $29/month + 5% transaction fee',
        audience: 'Your marketing reach',
        features: ['Custom branding', 'Course builder', 'Student management', 'Marketing tools']
      }
    ]
  },
  {
    title: 'Social Platforms',
    icon: Users,
    category: 'Social Media',
    channels: [
      { 
        name: 'Twitter/X',
        details: 'Tech and productivity focused audience',
        pricing: 'Free + paid promotion options',
        audience: '450M+ monthly users',
        features: ['Direct engagement', 'Viral potential', 'Community building', 'Real-time feedback']
      },
      { 
        name: 'LinkedIn',
        details: 'Professional B2B audience',
        pricing: 'Free + sponsored content options',
        audience: '900M+ professionals',
        features: ['High-value customers', 'Business networking', 'Thought leadership', 'Content marketing']
      },
      {
        name: 'Instagram',
        details: 'Visual-first platform for showcasing templates',
        pricing: 'Free + advertising costs',
        audience: '2B+ monthly users',
        features: ['Visual storytelling', 'Stories & Reels', 'Shopping features', 'Direct messaging']
      }
    ]
  },
  {
    title: 'Email Marketing',
    icon: Mail,
    category: 'Email Marketing',
    channels: [
      { 
        name: 'Newsletter',
        details: 'Build and monetize an email list',
        pricing: 'Email service provider costs',
        audience: 'Your subscriber base',
        features: ['Direct relationship', 'High conversion rates', 'Automated sales', 'Segmentation']
      },
      { 
        name: 'Automated Funnels',
        details: 'Systematic lead nurturing and sales',
        pricing: 'Platform + automation tool costs',
        audience: 'Qualified leads',
        features: ['24/7 sales', 'Segmentation', 'Personalization', 'Split testing']
      },
      {
        name: 'ConvertKit',
        details: 'Creator-focused email marketing',
        pricing: 'From $29/month',
        audience: 'Your email subscribers',
        features: ['Visual automations', 'Landing pages', 'Digital products', 'Subscriber tagging']
      }
    ]
  },
  {
    title: 'Video & Live',
    icon: Video,
    category: 'Video & Live',
    channels: [
      { 
        name: 'YouTube',
        details: 'Content marketing + template sales',
        pricing: 'Free + production costs',
        audience: '2.5B+ monthly users',
        features: ['Organic reach', 'Tutorial content', 'Community building', 'Monetization']
      },
      { 
        name: 'Webinars',
        details: 'Live demonstrations and sales',
        pricing: 'Webinar platform costs',
        audience: 'Highly engaged leads',
        features: ['Live interaction', 'High conversion', 'Q&A opportunities', 'Replay value']
      },
      {
        name: 'TikTok',
        details: 'Short-form video marketing',
        pricing: 'Free + advertising options',
        audience: '1B+ monthly users',
        features: ['Viral potential', 'Young audience', 'Creative formats', 'Shopping features']
      }
    ]
  }
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SalesChannelsModal({ open, onOpenChange }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[number]>('All Channels');

  const filteredCategories = selectedCategory === 'All Channels'
    ? CHANNEL_CATEGORIES
    : CHANNEL_CATEGORIES.filter(cat => cat.category === selectedCategory);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl h-[90vh] sm:h-[85vh] p-0 bg-white border-gray-200 w-[95vw] sm:w-[95vw] md:w-[90vw] lg:w-[85vw]">
        <DialogTitle className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 px-4 sm:px-6 pt-4 sm:pt-6">
          Sales Channel Directory
        </DialogTitle>
        <ScrollArea className="h-full">
          <div className="p-4 sm:p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="text-left sm:text-center flex-1">
                <p className="text-gray-600 text-sm sm:text-lg mb-4">
                Maximize your revenue by selling across multiple platforms
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-500 hover:text-gray-700 -mr-2"
                onClick={() => onOpenChange(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </Button>
            </div>
              
            {/* Category Filter */}
            <Select 
              value={selectedCategory} 
              onValueChange={(value) => setSelectedCategory(value as typeof CATEGORIES[number])}
            >
              <SelectTrigger className="w-full sm:w-[250px] mx-auto bg-white border-gray-200 h-11 mb-6 text-gray-900">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200">
                {CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category} className="text-gray-900">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 auto-rows-fr">
              {filteredCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group h-full flex bg-white"
                >
                  <div className="relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 border border-gray-200 hover:border-pink-400 transition-all duration-300 w-full shadow-sm hover:shadow-md">
                    
                    <div className="relative h-full flex flex-col">
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-pink-50 flex items-center justify-center">
                          <category.icon className="w-6 h-6 text-pink-400" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                          {category.title}
                        </h3>
                      </div>

                      {/* Channels List */}
                      <div className="grid gap-3 flex-grow">
                        {category.channels.map((channel, channelIndex) => (
                          <div
                            key={channelIndex}
                            className="group/item bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200 hover:border-pink-300 transition-all duration-300"
                          >
                            <div className="flex items-start gap-3 mb-2">
                              <div className="w-2 h-2 rounded-full bg-pink-500 mt-2" />
                              <div>
                                <div className="font-semibold text-base sm:text-lg text-gray-900 group-hover/item:text-pink-500 transition-colors">
                                  {channel.name}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600">
                                  {channel.details}
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-3 space-y-2">
                              <div className="grid grid-cols-1 gap-1.5">
                                <div className="flex items-center gap-2 text-sm">
                                  <DollarSign className="w-4 h-4 text-pink-400 flex-shrink-0" />
                                  <span className="text-gray-700">{channel.pricing}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Users className="w-4 h-4 text-pink-400 flex-shrink-0" />
                                  <span className="text-gray-700">{channel.audience}</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                  {channel.features.map((feature, featureIndex) => (
                                    <span
                                      key={featureIndex}
                                      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-pink-50 text-pink-600 border border-pink-200"
                                    >
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pro Tips */}
            <div className="mt-8 p-5 bg-gradient-to-r from-pink-50 to-violet-50 rounded-xl border border-pink-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <Zap className="w-5 h-5 text-pink-400" />
                Pro Tips for Maximum Success
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-600">
                    Start with 2-3 platforms and master them before expanding. Focus on quality over quantity.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-600">
                    Track performance metrics across platforms to optimize your pricing and marketing strategy.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-600">
                    Create platform-specific bundles and offers to maximize appeal to different audiences.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-600">
                    Build a professional brand presence on each platform to increase trust and sales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
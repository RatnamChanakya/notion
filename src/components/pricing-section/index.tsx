import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PricingSelector } from './pricing-selector';
import { PricingFeatures } from './pricing-features';
import { RevenueCalculator } from './revenue-calculator';
import { PRICING_TIERS, DEFAULT_TEMPLATES } from './constants';
import { StarterPlan } from './starter-plan';
import { trackInitiateCheckout } from '@/lib/facebook-pixel';
import { useCurrency } from '@/lib/currency-context';

export function PricingSection() {
  const { currency } = useCurrency();
  const [selectedTemplates, setSelectedTemplates] = useState(DEFAULT_TEMPLATES);

  const currentTier = PRICING_TIERS[currency].find(tier => tier.templates === selectedTemplates) || 
    PRICING_TIERS[currency].find(tier => tier.templates === DEFAULT_TEMPLATES)!;
  const pricePerTemplate = (currentTier.price / currentTier.templates).toFixed(2);

  const handlePurchaseClick = async () => {
    const tier = PRICING_TIERS[currency].find(t => t.templates === selectedTemplates) || 
      PRICING_TIERS[currency].find(t => t.templates === DEFAULT_TEMPLATES)!;
    const contentName = `${tier.templates} Templates Package`;
    const contentId = `templates-${tier.templates}`;
    const value = tier.price;

    // Track both client-side pixel and server-side conversion
    trackInitiateCheckout(value);

    // Send server-side conversion event
    try {
      await trackInitiateCheckout({
        value,
        currency: 'USD',
        contentName,
        contentId,
        userData: {
          // We'll add user data when available
        }
      });
    } catch (error) {
      console.error('Failed to track conversion:', error);
    }

    // Open payment popup
    (window as any).open_center_popup(getPabblyUrl(selectedTemplates));
  };
  const getPabblyUrl = (templates: number) => {
    const usdUrls = {
      25: 'https://payments.pabbly.com/subscribe/6764809de9eb8881f62b1fae/buy-25-templates?is_popup_preview=true',
      100: 'https://payments.pabbly.com/subscribe/6765ffdffcce817fc5ef4d8a/buy-100-templates?is_popup_preview=true',
      250: 'https://payments.pabbly.com/subscribe/67648158e9eb8881f62b1fcf/buy-250-templates?is_popup_preview=true',
      500: 'https://payments.pabbly.com/subscribe/6764819be9eb8881f62b1fdf/buy-500-templates?is_popup_preview=true'
    };
    
    const inrUrls = {
      25: 'https://payments.pabbly.com/subscribe/67685922f405f5ca9fc5f671/buy-25-templates-inr?is_popup_preview=true',
      100: 'https://payments.pabbly.com/subscribe/676866cff405f5ca9fc5fae2/buy-100-templates-inr?is_popup_preview=true',
      250: 'https://payments.pabbly.com/subscribe/676866f7f405f5ca9fc5fae6/buy-250-templates-inr?is_popup_preview=true',
      500: 'https://payments.pabbly.com/subscribe/67686720f405f5ca9fc5faea/buy-500-templates-inr?is_popup_preview=true'
    };

    const urls = currency === 'USD' ? usdUrls : inrUrls;
    return urls[templates as keyof typeof urls] || urls[100];
  };

  return (
    <section id="pricing" className="relative bg-gray-50 py-8 sm:py-12 overflow-hidden scroll-mt-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100/50 via-violet-100/30 to-pink-100/50 blur-[100px] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_0.25px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_0.25px,transparent_1px)] bg-[size:24px_36px] opacity-10" />
      </div>

      <div className="container relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-600 mb-4">
            <DollarSign className="w-4 h-4" />
            Special Launch Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Choose Your Package
            <span className="block mt-2 bg-gradient-to-r from-pink-600 to-violet-600 text-transparent bg-clip-text">
              Start Selling Today
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Select the number of templates you want to start with. The more templates you have, the more you can sell.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-lg">
            <div className="text-center mb-4">
              <div className="flex flex-col items-center gap-2">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  {currentTier.templates} Premium Templates
                </div>
                <div className="text-3xl sm:text-4xl font-bold flex items-center">
                  <span className="text-3xl sm:text-4xl text-gray-500 mr-0.5">
                    {currency === 'USD' ? '$' : '₹'}
                  </span>
                  <span className="bg-gradient-to-r from-pink-600 to-violet-600 text-transparent bg-clip-text">
                    {currentTier.price}
                  </span>
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  {currency === 'USD' ? '$' : '₹'}{pricePerTemplate} per template
                </div>
              </div>
            </div>

            <div className="mb-6">
              <PricingSelector
                value={selectedTemplates}
                onChange={setSelectedTemplates}
              />
            </div>

            <div className="flex flex-col items-center gap-4 mb-6">
              {/* CTA Button */}
              <div className="w-full max-w-md">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200" />
                  <Button
                    onClick={handlePurchaseClick}
                    size="lg"
                    className="relative w-full bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-8 py-6 text-lg font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300"
                  >
                    Get Instant Access
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6">
                {/* Money Back Guarantee */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6"
                >
                  <img 
                    src="https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/6765cd314693514ea351e05e.png"
                    alt="14-Day Money-Back Guarantee"
                    className="h-28 w-auto"
                  />

                  {/* Social Proof - Moved next to guarantee */}
                  <div className="flex items-center gap-3 hidden sm:flex">
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <motion.svg
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + i * 0.1 }}
                            className="w-4 h-4 text-yellow-400 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </motion.svg>
                        ))}
                      </div>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                        className="text-xs font-medium text-gray-600"
                      >
                        Rated 4.9/5 by 400+ customers
                      </motion.span>
                    </div>
                  </div>
                </motion.div>

                {/* Trust Indicators - Moved to horizontal layout */}
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { text: "Instant Access" },
                    { text: "Lifetime Updates" },
                    { text: "Premium Support" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="inline-flex"
                    >
                      <div className="flex items-center justify-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500">
                        </div>
                        <span className="text-sm font-medium text-gray-600">{item.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
              
            <div className="mt-8 pt-8 border-t border-gray-100">
              <PricingFeatures />
            </div>

          </div>
          <StarterPlan />
        </div>
      </div>
    </section>
  );
}
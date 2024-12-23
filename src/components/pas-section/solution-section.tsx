import { createElement } from 'react';
import { motion } from 'framer-motion';
import { Package, Crown, Rocket } from 'lucide-react';
import { SOLUTION_FEATURES } from './constants';
import { ComparisonTable } from './comparison-table';
import { useCallback } from 'react';

const FEATURE_ICONS = {
  "500+ Templates": Package,
  "Full PLR Rights": Crown,
  "Ready to Sell Today": Rocket
};

export function SolutionSection() {
  const scrollToPricing = useCallback(() => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="relative text-center px-3 sm:px-4 md:px-6 py-16">
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/30 via-teal-300/20 to-cyan-400/30 blur-[100px] opacity-30" />
      </div>

      <div className="relative mb-6 sm:mb-8 md:mb-12">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-sm sm:text-base mb-4 sm:mb-6">
          <Package className="w-4 h-4" />
          Complete Business Package
        </div>
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight">
          500+ Notion Templates
          <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-transparent bg-clip-text animate-gradient">
            With Full Resale Rights
          </span>
        </h3>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Start selling premium Notion templates today. Each template sells for $97-$297, and you keep 100% of the profits.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {SOLUTION_FEATURES.map((feature, index) => (
          <div
            key={index}
            className="group relative rounded-xl p-6 transition-all duration-300 border border-pink-200/20 hover:border-pink-200/40 bg-white h-full"
          >
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-pink-500/80 to-violet-600/80 flex items-center justify-center">
                  {FEATURE_ICONS[feature.title] && createElement(FEATURE_ICONS[feature.title], {
                    className: "w-4 h-4 sm:w-5 sm:h-5 text-white"
                  })}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16 md:mt-20"
      >
        <ComparisonTable />
        
        <div className="mt-8 sm:mt-12 md:mt-16 max-w-4xl mx-auto">
        <button
          onClick={scrollToPricing}
          className="group relative inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white font-semibold shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-500"
        >
          Get All 500+ Templates
          <Package className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-500" />
        </button>
        </div>
      </motion.div>
    </div>
  );
}
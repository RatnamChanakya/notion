import { createElement } from 'react';
import { motion } from 'framer-motion'; 
import { Crown, Rocket, Shield, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PRICING_FEATURES } from './constants';

type FeatureIconMap = {
  [key: string]: typeof Crown | typeof Rocket | typeof Shield | typeof RefreshCw;
};

const FEATURE_ICONS: FeatureIconMap = {
  "Full PLR Rights": Crown,
  "Ready to Sell": Rocket,
  "Premium Quality": Shield,
  "Lifetime Updates": RefreshCw
};

export function PricingFeatures() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {PRICING_FEATURES.map((feature, index) => (
        <motion.div
          key={index}
          {...(!isMobile ? {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 }
          } : {})}
          className="group relative bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100 hover:border-pink-200 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-violet-50/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
          <div className="relative flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-100 to-violet-100 flex items-center justify-center">
                {FEATURE_ICONS[feature.title] && createElement(FEATURE_ICONS[feature.title], {
                  className: "w-5 h-5 text-pink-600"
                })}
              </div>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-1">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
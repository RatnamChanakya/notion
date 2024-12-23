import { motion } from 'framer-motion';
import type { SalesPlatform } from './types';
import { useEffect, useState } from 'react';

export function PlatformCard({ platform }: { platform: SalesPlatform }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <motion.div
      {...(isMounted ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 }
      } : {})}
      className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl overflow-hidden border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
            <platform.icon className="w-6 h-6 text-pink-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">
              {platform.name}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{platform.description}</p>
          </div>
        </div>

        <div className="space-y-3 mt-6">
          {platform.benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-sm text-gray-300"
            >
              <div className="w-5 h-5 rounded-full bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
              </div>
              {benefit}
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-pink-500/10">
          <h4 className="text-sm font-medium text-pink-400 mb-2">Quick Start Guide:</h4>
          <ol className="space-y-2">
            {platform.steps.map((step, index) => (
              <li key={index} className="text-sm text-gray-400 flex gap-2">
                <span className="text-pink-400">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </motion.div>
  );
}
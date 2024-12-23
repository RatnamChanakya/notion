import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { PRICING_TIERS } from './constants';
import { useCurrency } from '@/lib/currency-context';

interface PricingSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

export function PricingSelector({ value, onChange }: PricingSelectorProps) {
  const { currency } = useCurrency();
  const tiers = PRICING_TIERS[currency];
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2">
      {tiers.map((tier, index) => (
        <motion.button
          key={tier.templates}
          {...(!isMobile ? {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 }
          } : {})}
          onClick={() => onChange(tier.templates)}
          className={cn("relative p-3 sm:p-2 rounded-lg border-2 transition-all duration-300",
            tier.templates === value
              ? "bg-white border-pink-500 shadow-lg"
              : "bg-white/80 border-gray-200 hover:border-pink-500/40"
          )}
        >
          <div className="flex flex-col items-center text-center gap-2">
            <div className="text-2xl sm:text-xl font-bold text-gray-900">
              {tier.templates}
            </div>
            <div className="text-gray-600 text-sm sm:text-xs">Templates</div>
            <div className={cn(
              "w-4 h-4 rounded-full flex items-center justify-center border",
              tier.templates === value
                ? "bg-pink-500 border-transparent"
                : "border-gray-300"
            )}>
              {tier.templates === value && (
                <Check className="w-3 h-3 text-white" />
              )}
            </div>
            <div className="mt-2">
              <div className="text-pink-600 font-bold text-3xl sm:text-2xl">
                {currency === 'USD' ? '$' : '₹'}{tier.price}
              </div>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
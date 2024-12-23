import { motion } from 'framer-motion';
import { TrendingDown } from 'lucide-react';

const MARKET_STATS = [
  { 
    label: 'Canva Templates',
    value: '-82%',
    detail: 'Price Drop',
    description: "From $19.99 to just $1.99 average price"
  },
  { 
    label: 'eBook Market',
    value: '-75%',
    detail: 'Revenue Drop',
    description: 'Market oversaturated with identical products'
  },
  { 
    label: 'PLR Content',
    value: '10,000+',
    detail: 'Competitors Daily',
    description: 'All selling the same recycled content'
  }
];

export function MarketReality() {
  return (
    <div className="relative">
      <div className="absolute -inset-x-4 -inset-y-8 bg-gradient-to-b from-red-500/5 to-red-500/0 rounded-2xl" />
      <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
      {MARKET_STATS.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className="relative group"
        >
          <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-red-500/30 hover:border-red-500/50 transition-all duration-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <TrendingDown className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium text-red-500/90">{stat.detail}</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">{stat.value}</div>
            <div className="text-base font-medium text-red-100 mb-2">{stat.label}</div>
            <div className="text-xs sm:text-sm text-red-200/80 font-medium">{stat.description}</div>
          </div>
        </motion.div>
      ))}
      </div>
    </div>
  );
}
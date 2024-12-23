import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, DollarSign, Users } from 'lucide-react';
import { ProblemPoints } from './problem-points';

const MARKET_TRENDS = [
  {
    label: 'Canva Templates',
    value: '-82%',
    detail: 'Price Drop',
    description: "From $19.99 to just $1.99 average price",
    icon: TrendingDown
  },
  {
    label: 'eBook Market',
    value: '-75%',
    detail: 'Revenue Drop',
    description: 'Market oversaturated with identical products',
    icon: DollarSign
  },
  {
    label: 'PLR Content',
    value: '10,000+',
    detail: 'Competitors Daily',
    description: 'All selling the same recycled content',
    icon: Users
  }
];

export function ProblemSection() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900 to-gray-900/50 blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Warning Banner */}
        <div className="relative overflow-hidden py-16 sm:py-24">
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-6"
            >
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">Critical Market Alert</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Stop Wasting Time on
              <span className="block mt-2 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 text-transparent bg-clip-text">
                Dead Digital Products
              </span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              While you're grinding away creating another $2 template,
              <span className="text-amber-400 font-semibold"> thousands of others are selling the exact same thing</span>.
              It's time for a change.
            </p>
          </div>
        </div>

        {/* Market Trends */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4f4f4f12_0%,transparent_50%)]" />
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-700/50">
            {MARKET_TRENDS.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group p-8 hover:bg-white/[0.02] transition-colors"
              >
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-4">
                    <trend.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="text-4xl font-bold text-red-400 mb-2">{trend.value}</div>
                  <div className="text-lg font-medium text-gray-300 mb-1">{trend.label}</div>
                  <div className="text-sm text-gray-400">{trend.detail}</div>
                  <div className="mt-4 text-sm text-gray-500">{trend.description}</div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>

        <ProblemPoints />
      </motion.div>
    </div>
    </LazyMotion>
  );
}
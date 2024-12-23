import { DollarSign, TrendingUp, Users } from 'lucide-react';

export const MARKET_STATS = [
  {
    icon: DollarSign,
    value: '$2.1M+',
    label: 'Market Size',
    detail: 'Monthly Notion template sales'
  },
  {
    icon: Users,
    value: '89%',
    label: 'Success Rate',
    detail: 'Of sellers reach $10K/month'
  },
  {
    icon: TrendingUp,
    value: '4.3x',
    label: 'Market Growth',
    detail: 'YoY increase in template demand'
  }
];

export function MarketStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {MARKET_STATS.map((stat, index) => (
        <div
          key={index}
          className="relative group bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-pink-500/10 hover:border-pink-500/20 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
          <div className="relative">
            <stat.icon className="w-8 h-8 text-pink-400 mb-4" />
            <div className="font-bold text-2xl md:text-3xl text-white mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm font-medium mb-2">{stat.label}</div>
            <div className="text-gray-500 text-sm hidden sm:block">{stat.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
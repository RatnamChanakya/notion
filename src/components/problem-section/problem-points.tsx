import { TrendingDown, AlertTriangle, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const PROBLEM_POINTS = [
  {
    icon: TrendingDown,
    title: "Canva Templates Are Dead",
    description: "Your $20 templates are now worth $2. Thousands of sellers racing to the bottom.",
    color: "from-red-500/80 to-orange-600/80",
    bgGradient: "from-red-950/30 to-orange-950/20",
    borderColor: "border-red-500/20 hover:border-red-500/40"
  },
  {
    icon: AlertTriangle,
    title: "Stop Making eBooks",
    description: "10,000+ sellers offering identical products. Even quality eBooks can't sell for more than $5.",
    color: "from-amber-400/80 to-yellow-600/80",
    bgGradient: "from-amber-950/30 to-yellow-950/20",
    borderColor: "border-amber-500/20 hover:border-amber-500/40"
  },
  {
    icon: Users,
    title: "40 Hours for $2 Profit",
    description: "While you work for pennies, premium sellers make $100-$200 per sale.",
    color: "from-orange-400/80 to-red-600/80",
    bgGradient: "from-orange-950/30 to-red-950/20",
    borderColor: "border-orange-500/20 hover:border-orange-500/40"
  }
];

export function ProblemPoints() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 rounded-2xl" />
        <div className="relative rounded-xl overflow-hidden">
          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 md:grid-cols-3 relative z-10">
              {PROBLEM_POINTS.map((point, index) => (
                <div
                  key={index}
                  className={cn(
                    "group relative rounded-xl p-6 border",
                    point.borderColor,
                    `bg-gradient-to-br ${point.bgGradient}`
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 md:group-hover:opacity-100 transition-all duration-700 rounded-xl" />
                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${point.color} mb-4`}>
                      <point.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h4 className={cn(
                      "text-xl font-bold mb-3 transition-colors duration-700",
                      index === 0 ? "text-red-200" :
                      index === 1 ? "text-amber-200" :
                      "text-orange-200"
                    )}>
                      {point.title}
                    </h4>
                    <p className={cn(
                      "text-sm leading-relaxed transition-colors duration-700",
                      index === 0 ? "text-red-200/80" :
                      index === 1 ? "text-amber-200/80" :
                      "text-orange-200/80"
                    )}>
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
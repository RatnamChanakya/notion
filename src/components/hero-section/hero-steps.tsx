import { motion } from 'framer-motion';
import { DollarSign, Repeat, ShoppingCart } from 'lucide-react';
import { fadeIn, staggerChildren } from './animations';

const STEPS = [
  {
    icon: ShoppingCart,
    title: "Sell",
    description: "Start selling our proven templates",
    highlight: "$97-$297 per template"
  },
  {
    icon: DollarSign,
    title: "Profit",
    description: "Keep 100% of every sale",
    highlight: "No commission fees"
  },
  {
    icon: Repeat,
    title: "Repeat",
    description: "Scale your income effortlessly",
    highlight: "Unlimited potential"
  }
];

export function HeroSteps() {
  return (
    <div className="relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-violet-500/5 to-pink-500/5 blur-[120px]" />
      
      <motion.div
        variants={staggerChildren}
        className="relative"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Three Simple Steps to
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text"> Financial Freedom</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 max-w-4xl mx-auto h-full">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative group h-full"
            >
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                
                <div className="relative flex flex-col items-center text-center h-full">
                  <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-pink-500/10 to-violet-600/10 border border-pink-500/20">
                    <step.icon className="w-7 h-7 text-pink-400" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-300 mb-3 flex-grow">{step.description}</p>
                  <div className="text-sm font-medium text-pink-400">{step.highlight}</div>
                </div>

                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Connector Line */}
              {index < STEPS.length - 1 && (
                <div className="hidden sm:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-pink-500/30 via-violet-600/30 to-pink-500/30 transform translate-x-full" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import type { Bonus } from './types';

interface BonusCardProps {
  bonus: Bonus;
  index: number;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function BonusCard({ bonus }: BonusCardProps) {
  return (
    <motion.div
      variants={item}
      layout
      className="group relative"
    >
      <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl p-4 sm:p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 h-full">
        <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
          ${bonus.value}
        </div>

        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
            <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-medium text-pink-400 mb-0.5 sm:mb-1">Bonus</div>
            <h3 className="text-base sm:text-xl font-semibold text-white group-hover:text-pink-400 transition-colors">
              {bonus.title}
            </h3>
          </div>
        </div>

        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
          {bonus.description}
        </p>
      </div>
    </motion.div>
  );
}
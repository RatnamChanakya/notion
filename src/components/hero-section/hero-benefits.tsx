import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { BENEFITS } from './constants';
import { fadeIn, staggerChildren } from './animations';

export function HeroBenefits() {
  return (
    <motion.div 
      variants={staggerChildren}
      className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0"
    >
      {BENEFITS.map((benefit, index) => (
        <motion.div 
          key={index} 
          variants={fadeIn}
          className="flex items-center gap-3 w-full sm:w-auto"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex-shrink-0 flex items-center justify-center w-6 sm:w-5 h-6 sm:h-5 rounded-full bg-gradient-to-br from-pink-500/20 to-violet-600/20 border border-pink-500/20">
            <Check className="w-4 sm:w-3 h-4 sm:h-3 text-pink-400" />
          </div>
          <span className="text-base sm:text-base text-gray-300 font-medium">{benefit.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
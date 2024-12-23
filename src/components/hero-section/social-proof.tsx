import { motion } from 'framer-motion';
import { STATS } from './constants';
import { fadeIn } from './animations';

export function SocialProof() {
  return (
    <motion.div 
      variants={fadeIn}
      className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-pink-500/20 relative"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
        {STATS.map((stat, index) => (
          <motion.div 
            key={index} 
            className="text-center group"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 text-xl sm:text-3xl lg:text-4xl mb-1 sm:mb-1 group-hover:from-pink-500 group-hover:to-violet-500 transition-all duration-300">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-gray-400 leading-tight">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
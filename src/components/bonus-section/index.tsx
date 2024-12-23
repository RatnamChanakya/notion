import { motion } from 'framer-motion';
import { Gift, ArrowRight } from 'lucide-react';
import { BonusCard } from './bonus-card';
import { BONUSES } from './bonuses';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

export function BonusSection() {
  return (
    <section className="relative bg-[#030712] py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-violet-500/5 to-pink-500/10 blur-[100px] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-4 sm:mb-6 text-sm sm:text-base">
            <Gift className="w-4 h-4" />
            Special Limited Time Offer
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
            Oh Wait... We Almost Forgot!
            <span className="block mt-2 bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">
              $5,364 Worth of Premium Bonuses
            </span>
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Supercharge your success with our comprehensive bonus package designed to help you sell more and scale faster
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {BONUSES.map((bonus, index) => (
            <BonusCard key={index} bonus={bonus} index={index} />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300"
          >
            Get All Bonuses Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { DollarSign, ArrowRight } from 'lucide-react';
import { TweetFeed } from './tweet-feed';

export function OpportunitySection() {
  return (
    <section className="relative bg-[#030712] py-8 sm:py-12 md:py-16 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm mb-4 sm:mb-6"
          >
            <DollarSign className="w-4 h-4 animate-pulse" />
            Limited Time Opportunity
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-[1.15]"
          >
            <span className="inline sm:inline-flex flex-wrap">
              <span className="inline-block">People Are &nbsp;</span>
              <span className="text-pink-500 sm:ml-2 inline-block">Making Millions</span>
            </span>
            <span className="block mt-2 bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">
              What's Stopping You?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
          >
            Smart entrepreneurs are banking $30K-$50K monthly with premium templates. The market is booming - your opportunity is now.
          </motion.p>
        </div>
        
        <div className="max-w-7xl mx-auto mt-10 sm:mt-12 lg:mt-16">
          <TweetFeed />
          <div
            className="relative mt-16 sm:mt-24 lg:mt-32 text-center py-12 sm:py-16"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-violet-500/20 to-pink-500/20 blur-[100px] opacity-60" />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            
            <h2 className="relative text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-pink-500 animate-gradient bg-[length:200%_auto] leading-tight tracking-tight">
              The market is booming - your opportunity is now
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8"
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
                Seize The Opportunity
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
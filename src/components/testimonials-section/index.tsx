import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { SuccessStories } from './success-stories';

export function TestimonialsSection() {
  return (
    <section className="relative bg-[#030712] py-20 overflow-hidden border-t border-pink-500/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-6">
            <TrendingUp className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            From Zero to
            <span className="block mt-2 bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">
              7-Figure Business
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join hundreds of successful entrepreneurs who transformed their lives with our premium templates
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <SuccessStories />
        </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300"
            >
              Join Them Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('https://twitter.com/intent/tweet?text=Check%20out%20these%20amazing%20Notion%20templates!%20%F0%9F%9A%80', '_blank')}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-lg bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Share Success Stories
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
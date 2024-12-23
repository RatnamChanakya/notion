import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useCallback } from 'react';

export function SolutionTransition() {
  const scrollToPricing = useCallback(() => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="relative py-20 sm:py-24 md:py-32 overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/20 via-violet-500/20 to-pink-500/20 blur-[100px] opacity-70" />

        {/* Animated circles */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: [0, 0.3, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.2, 0.9], opacity: [0, 0.2, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl"
          />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative w-full">
        <div className="flex flex-col items-center">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="hidden sm:block"
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-center w-full px-4 sm:px-6 lg:px-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="hidden sm:block"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative max-w-7xl mx-auto"
            >
              <div className="absolute -inset-x-8 -inset-y-4 bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-pink-500/10 blur-xl rounded-2xl" />
              <h2 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none">
                But Don't Worry
                <span className="relative block mt-2 sm:mt-4">
                  <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-pink-400 text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient">
                    We Have The Solution For You
                  </span>
                </span>
              </h2>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="hidden sm:block"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 w-full text-center px-4 sm:px-6 lg:px-8"
          >
            <motion.button
              onClick={scrollToPricing}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300 mx-auto"
            >
              Get Started Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
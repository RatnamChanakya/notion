import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { PlatformCard } from './platform-card';
import { PLATFORMS } from './platforms';
import { SalesChannelsModal } from './sales-channels-modal';

export function SalesChannels() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative bg-[#030712] py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-violet-500/5 to-pink-500/10 blur-[100px] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-6">
            <Rocket className="w-4 h-4" />
            Multiple Revenue Streams
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Sell Everywhere Your
            <span className="block mt-2 bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">
              Customers Are
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't limit yourself to one platform. Create multiple revenue streams and maximize your earnings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          {PLATFORMS.map((platform, index) => (
            <PlatformCard key={index} platform={platform} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
          <div className="relative mb-8 p-3">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-violet-600/5 rounded-lg blur-lg" />
            <p className="relative text-xl sm:text-2xl font-medium text-white">
              Potential Monthly Revenue:
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
                $10,000 - $50,000+
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-500"
            >
              Start Selling Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowModal(true)}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-lg bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              View All Sales Channels
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </motion.button>
          </div>
          </motion.div>
        </motion.div>
      </div>
      <SalesChannelsModal open={showModal} onOpenChange={setShowModal} />
    </section>
  );
}
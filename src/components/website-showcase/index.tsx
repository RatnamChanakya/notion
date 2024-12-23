import { motion } from 'framer-motion';
import { Monitor } from 'lucide-react';
import { WebsiteSlider } from './website-slider';

export function WebsiteShowcase() {
  return (
    <section className="relative bg-[#030712] py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-violet-500/5 to-pink-500/10 blur-[100px] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-6">
            <Monitor className="w-4 h-4" />
            Real Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See What's Possible With
            <span className="block mt-2 bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">
              Our Templates
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            These are real websites built and sold using our premium Notion templates.
          </p>
        </motion.div>

        <WebsiteSlider />
      </div>
    </section>
  );
}
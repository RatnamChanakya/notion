import { motion } from 'framer-motion';
import { TemplateGrid } from './template-grid';
import { TemplateList } from './template-list';
import { FileCheck, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function TemplateShowcase() {
  const [showTemplateList, setShowTemplateList] = useState(false);

  return (
    <section id="template-showcase" className="relative bg-[#030712] py-20 overflow-hidden scroll-mt-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-6">
            <FileCheck className="w-4 h-4" />
            Premium Templates
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            500+ Ready-to-Sell
            <span className="block mt-2 bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">
              Notion Templates
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Each template is meticulously crafted and proven to sell. Start your digital product empire today.
          </p>
        </motion.div>

        {/* Template Grid */}
        <div className="space-y-8">
          <TemplateGrid />
          
          {/* View Full List Button */}
          <div className="flex justify-center mt-12">
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full sm:w-auto group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200" />
                <button
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing');
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300"
                >
                  Get All Templates
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowTemplateList(true)}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-xl bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Browse Full List
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <TemplateList open={showTemplateList} onOpenChange={setShowTemplateList} />
    </section>
  );
}
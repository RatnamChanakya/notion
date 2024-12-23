import { motion } from 'framer-motion';
import { FileCheck, ArrowRight } from 'lucide-react';
import { SliderRow } from './slider-row';
import { useEffect, useState } from 'react';
import { TemplateList } from '../template-showcase/template-list';

export function TemplateSlider() {
  const [showTemplateList, setShowTemplateList] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative bg-[#030712] py-16 sm:py-20 overflow-hidden">
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
        </motion.div>

        {/* Slider Rows */}
        <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
            {isMounted && (
              <>
                <SliderRow direction="left" speed={80} />
                <div className="my-4"></div>
                <SliderRow direction="right" speed={80} reverse />
              </>
            )}
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300"
              >
                Get All Templates
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowTemplateList(true)}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-lg bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
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
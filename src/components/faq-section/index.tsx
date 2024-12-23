import { motion } from 'framer-motion';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { FAQAccordion } from './faq-accordion';
import { cn } from '@/lib/utils';

export function FAQSection({ className }: { className?: string }) {
  return (
    <section id="faq" className={cn("relative bg-[#030712] overflow-hidden", className)}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-violet-500/5 to-pink-500/10 blur-[100px] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-6">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked
            <span className="block mt-2 bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about selling Notion templates
          </p>
        </motion.div>

        <FAQAccordion />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
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
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = 'mailto:support@notionreseller.com'}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-lg bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            Still Have Questions?
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
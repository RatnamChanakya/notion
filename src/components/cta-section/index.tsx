import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ArrowRight, TrendingUp, Zap, Target, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const BENEFITS = [
  { text: "Earn $10,000+ Monthly", icon: DollarSign },
  { text: "Start Selling in 24 Hours", icon: Zap },
  { text: "Proven $297 Price Point", icon: Target },
  { text: "Lifetime Updates", icon: Clock }
];

export function CTASection({ className }: { className?: string }) {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={cn("relative bg-gray-50 overflow-hidden", className)}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100/50 via-violet-100/30 to-pink-100/50 blur-[100px] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:14px_24px] opacity-25" />
      </div>

      <div className="container relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-pink-100 border border-pink-200 text-pink-600 mb-4 sm:mb-6 text-sm sm:text-base"
              >
                <TrendingUp className="w-4 h-4" />
                Limited Time Opportunity
              </motion.div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Your Next
                <span className="relative">
                  <span className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-violet-500/20 blur-lg" />
                  <span className="relative bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text"> $1,000,000 </span>
                </span>
                is One Click Away!
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                Join hundreds of successful entrepreneurs who are building their dream lifestyle with our premium templates.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {BENEFITS.map(({ text, icon: Icon }, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 sm:gap-4 bg-white rounded-lg p-3 sm:p-4 border border-pink-200 hover:border-pink-300 shadow-sm hover:shadow transition-all duration-300"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-pink-50 to-violet-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-pink-500" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-block group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200" />
                  <Button
                    onClick={scrollToPricing}
                    size="lg"
                    className="relative w-full sm:w-auto bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium"
                  >
                    Get Instant Access
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full lg:w-auto max-w-2xl mx-auto"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden border border-pink-100 shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/6764463c443b88c77d264ff6.jpeg"
                alt="Success Dashboard"
                className="absolute inset-0 w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/20 to-violet-100/20 mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
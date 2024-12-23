import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Calculator, ArrowRight } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useCurrency } from '@/lib/currency-context';

export function RevenueCalculator() {
  const { currency, formatPrice } = useCurrency();
  const [price, setPrice] = useState(97);
  const [dailySales, setDailySales] = useState(5);

  const dailyEarnings = price * dailySales;
  const monthlyEarnings = dailyEarnings * 30;

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
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-6">
            <Calculator className="w-4 h-4" />
            Revenue Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Calculate Your
            <span className="block mt-2 bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">
              Potential Earnings
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how much you could earn selling premium Notion templates
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-pink-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Sliders */}
              <div className="space-y-8">
                {/* Price Slider */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-white">
                      Selling Price
                    </label>
                    <span className="text-sm font-semibold text-white">
                      ${price}
                    </span>
                  </div>
                  <Slider
                    value={[price]}
                    min={47}
                    max={297}
                    step={10}
                    onValueChange={(value) => setPrice(value[0])}
                    className="py-4 [&_.relative]:bg-gray-700 [&_[role=slider]]:bg-pink-500 [&_[role=slider]]:border-pink-400 [&_[role=slider]]:shadow-pink-500/50"
                  />
                </div>

                {/* Daily Sales Slider */}
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-white">
                      Daily Sales
                    </label>
                    <span className="text-sm font-semibold text-white">
                      {dailySales} sales
                    </span>
                  </div>
                  <Slider
                    value={[dailySales]}
                    min={1}
                    max={20}
                    step={1}
                    onValueChange={(value) => setDailySales(value[0])}
                    className="py-4 [&_.relative]:bg-gray-700 [&_[role=slider]]:bg-pink-500 [&_[role=slider]]:border-pink-400 [&_[role=slider]]:shadow-pink-500/50"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col justify-center gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-pink-500/20"
                >
                  <div className="text-sm text-gray-400 mb-1">Daily Revenue</div>
                  <div className="text-2xl font-bold text-white">
                    ${dailyEarnings.toLocaleString()}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 text-white"
                >
                  <div className="text-sm text-white/90 mb-1">Monthly Revenue</div>
                  <div className="text-3xl font-bold">
                    ${monthlyEarnings.toLocaleString()}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
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
              Start Earning Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
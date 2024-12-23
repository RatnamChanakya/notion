import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { motion } from 'framer-motion';
import { useCurrency } from '@/lib/currency-context';

export function RevenueCalculator() {
  const { formatPrice } = useCurrency();
  const [price, setPrice] = useState(97);
  const [dailySales, setDailySales] = useState(5);

  const dailyEarnings = price * dailySales;
  const monthlyEarnings = dailyEarnings * 30;

  return (
    <div className="mt-12 p-6 bg-gradient-to-br from-pink-50 to-violet-50 rounded-xl border border-pink-100">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-pink-600 mb-4">
          <Calculator className="w-4 h-4" />
          Revenue Calculator
        </div>
        <h3 className="text-2xl font-bold text-gray-900">
          Calculate Your Potential Earnings
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Sliders */}
        <div className="space-y-8">
          {/* Price Slider */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">
                Template Price
              </label>
              <span className="text-sm font-semibold text-pink-600">
                {formatPrice(price)}
              </span>
            </div>
            <Slider
              value={[price]}
              min={47}
              max={297}
              step={10}
              onValueChange={(value) => setPrice(value[0])}
              className="py-4"
            />
          </div>

          {/* Daily Sales Slider */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">
                Daily Sales
              </label>
              <span className="text-sm font-semibold text-pink-600">
                {dailySales} sales
              </span>
            </div>
            <Slider
              value={[dailySales]}
              min={1}
              max={20}
              step={1}
              onValueChange={(value) => setDailySales(value[0])}
              className="py-4"
            />
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg bg-white border border-pink-200"
          >
            <div className="text-sm text-gray-600 mb-1">Daily Revenue</div>
            <div className="text-2xl font-bold text-gray-900">
              {formatPrice(dailyEarnings)}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-4 rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 text-white"
          >
            <div className="text-sm text-white/90 mb-1">Monthly Revenue</div>
            <div className="text-3xl font-bold">
              {formatPrice(monthlyEarnings)}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
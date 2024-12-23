import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/lib/currency-context';

export function StarterPlan() {
  const { currency } = useCurrency();
  const price = currency === 'USD' ? '14' : '499';
  const symbol = currency === 'USD' ? '$' : '₹';
  const pabblyUrl = currency === 'USD' 
    ? 'https://payments.pabbly.com/subscribe/6766012de9eb8881f62b809d/buy-10-templates?is_popup_preview=true'
    : 'https://payments.pabbly.com/subscribe/6768676fe93bc1ca9956e90d/buy-10-templates-inr?is_popup_preview=true';

  const handlePurchaseClick = () => {
    (window as any).open_center_popup(pabblyUrl);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-8 sm:mt-12 text-center relative px-4 sm:px-0"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 via-violet-100/20 to-pink-100/20 blur-xl opacity-50 pointer-events-none" />
      
      <div className="relative">
        <div className="h-px w-full max-w-sm mx-auto bg-gradient-to-r from-transparent via-pink-200 to-transparent mb-6" />
        
        <div className="text-2xl sm:text-3xl text-gray-700 font-bold mb-6">
          Looking to start smaller?
        </div>
        
        <Button
          variant="ghost"
          onClick={handlePurchaseClick}
          className="group w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-white border-2 border-pink-200 hover:border-pink-300 shadow-md hover:shadow-lg px-4 sm:px-8 py-4 rounded-full transition-all duration-300 gap-2 sm:gap-3 mx-auto"
        >
          <Sparkles className="w-5 h-5 text-pink-500 opacity-75 group-hover:opacity-100" />
          <span className="text-base sm:text-xl text-gray-600 group-hover:text-gray-900">Try 10 templates for</span>
          <span className="text-2xl sm:text-3xl font-bold text-pink-600 group-hover:text-pink-700">{symbol}{price}</span>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-500 group-hover:translate-x-1 transition-all duration-300" />
        </Button>
      </div>
    </motion.div>
  );
}
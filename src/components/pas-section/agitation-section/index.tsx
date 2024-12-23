import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { AgitationPoints } from './agitation-points';
import { MarketReality } from './market-reality';

export function AgitationSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-orange-500/5 to-red-500/10 blur-[100px] opacity-60" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-950/50 border border-yellow-500/30 mb-6"
          >
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-400">Market Alert: Don't Waste Your Time</span>
          </motion.div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Stop Creating Canva Templates
            <span className="block mt-2 text-red-400">The Market is Saturated</span>
          </h3>
        
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            You're spending countless hours creating templates and eBooks, but
            <span className="text-red-400 font-semibold"> these markets are completely dead</span>.
            Thousands of sellers are fighting over $2 sales.
          </p>
        </div>

        <MarketReality />
        
        <div className="mt-16">
          <AgitationPoints />
        </div>
      </motion.div>
    </div>
  );
}
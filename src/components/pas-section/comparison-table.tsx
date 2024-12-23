import { motion } from 'framer-motion';
import { XCircle, CheckCircle, TrendingDown, TrendingUp, Clock, Rocket, Users, Crown, DollarSign, Package } from 'lucide-react';

const TABLE_DATA = [
  {
    oldWay: "Sell Canva & Ebooks for $1-2",
    newWay: "Sell Notion templates for $97-$297",
    oldIcon: TrendingDown,
    newIcon: TrendingUp
  },
  {
    oldWay: "Create everything from scratch",
    newWay: "500+ ready-to-sell templates",
    oldIcon: Clock,
    newIcon: Package
  },
  {
    oldWay: "40+ hours per product",
    newWay: "Start selling today",
    oldIcon: Clock,
    newIcon: Rocket
  },
  {
    oldWay: "Compete with 10,000+ sellers",
    newWay: "Premium, high-ticket market",
    oldIcon: Users,
    newIcon: Crown
  },
  {
    oldWay: "Make $500/month selling 500+ items",
    newWay: "Make $5,000/month selling just 20",
    oldIcon: DollarSign,
    newIcon: DollarSign
  }
];

export function ComparisonTable() {
  return (
    <div className="relative">
      {/* Animated background gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-b from-red-500/5 via-transparent to-emerald-500/5 blur-2xl"
      />
      
      <div className="relative overflow-hidden rounded-xl border border-pink-500/20 backdrop-blur-sm">
        {/* Table Header */}
        <div className="grid grid-cols-2 text-base sm:text-lg font-medium">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-red-950/50 p-4 sm:p-6 text-center"
          >
            <div className="relative z-10">
              <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mx-auto mb-1.5 sm:mb-2" />
              <span className="text-red-400 font-semibold">Old Way</span>
              <p className="text-xs text-red-300/60 mt-1">Low-Ticket PLR Products</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" />
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-white p-4 sm:p-6 text-center"
          >
            <div className="relative z-10">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600 mx-auto mb-1.5 sm:mb-2" />
              <span className="text-emerald-700 font-semibold">New Way</span>
              <p className="text-xs text-emerald-600/90 mt-1">Premium Notion Templates</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent" />
          </motion.div>
        </div>

        {/* Table Body */}
        {TABLE_DATA.map((row, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="hidden sm:block"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group grid grid-cols-2 border-t border-pink-500/20"
          >
            <div className="relative p-3 sm:p-4 md:p-6 bg-red-950/30">
              <div className="relative z-10 flex items-center gap-2 sm:gap-3 md:gap-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                  {row.oldIcon && <row.oldIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />}
                </div>
                <span className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
                  {row.oldWay}
                </span>
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0"
              />
            </div>
            
            <div className="relative p-3 sm:p-4 md:p-6 bg-white">
              <div className="relative z-10 flex items-center gap-2 sm:gap-3 md:gap-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                  {row.newIcon && <row.newIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />}
                </div>
                <span className="text-sm sm:text-base text-gray-800 group-hover:text-emerald-700 transition-colors font-medium">
                  {row.newWay}
                </span>
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-emerald-100/0 via-emerald-100/50 to-emerald-100/0"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
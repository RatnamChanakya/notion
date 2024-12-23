import { motion } from 'framer-motion';

const PROBLEM_STATS = [
  { value: '100+', label: 'Hours Per Template' },
  { value: '90%', label: 'Fail Rate' },
  { value: '$2000+', label: 'Lost Revenue/Month' }
];

export function ProblemStats() {
  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 max-w-2xl mx-auto">
      {PROBLEM_STATS.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className="text-center group"
        >
          <div className="font-bold text-red-500 group-hover:text-red-400 transition-colors text-2xl sm:text-3xl mb-1">
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm text-gray-400 leading-tight">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
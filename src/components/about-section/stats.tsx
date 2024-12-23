import { motion } from 'framer-motion';

const STATS = [
  { value: '50K+', label: 'Active Sellers' },
  { value: '$5M+', label: 'Monthly Sales' },
  { value: '120+', label: 'Countries' }
];

export function Stats() {
  return (
    <div className="relative mb-6 h-[300px]">
      <div className="absolute inset-0">
        <img
          src="https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/6750fccf6c55b51fe8dfe363.png"
          alt="Team in Bali"
          className="w-full h-full object-cover object-[center_25%] rounded-xl opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-[#030712]/40" />
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-3 border border-white/10"
            >
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-violet-400 text-transparent bg-clip-text">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
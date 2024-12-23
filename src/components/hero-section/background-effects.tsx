import { motion } from 'framer-motion';

export function BackgroundEffects() {
  return (
    <>
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute -top-[25%] -left-[15%] w-[50%] h-[50%] bg-gradient-to-br from-pink-500/30 to-violet-600/30 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-[25%] -right-[15%] w-[50%] h-[50%] bg-gradient-to-br from-violet-600/30 to-pink-500/30 rounded-full blur-[120px]"
        />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />
    </>
  );
}
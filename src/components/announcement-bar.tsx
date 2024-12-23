import { motion, useScroll, useTransform } from 'framer-motion';
import { Bell } from 'lucide-react';

export function AnnouncementBar() {
  const { scrollY } = useScroll();
  
  const contentOpacity = useTransform(scrollY, [0, 40], [1, 0]);
  const translateY = useTransform(scrollY, [0, 40], [0, -25]);

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-30"
      style={{ y: translateY }}
    >
      {/* Gradient background - maintains partial visibility */}
      <div className="absolute inset-0 h-10 bg-gradient-to-r from-pink-500/95 to-violet-600/95 backdrop-blur-[8px]" />

      {/* Content container - fades out completely */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="h-10 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center space-x-2 text-white text-sm">
              <Bell className="w-4 h-4 text-pink-400 animate-pulse" />
              <span>Get 50% OFF + Exclusive Bonuses!</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
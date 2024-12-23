import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { fadeIn } from './animations';

export function HeroBadge() {
  return (
    <motion.div 
      variants={fadeIn}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Badge variant="outline" className="px-2 sm:px-4 py-0.5 sm:py-1.5 text-xs sm:text-sm border-pink-500/20 bg-pink-500/5">
        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-pink-400 animate-pulse" />
        From 0 To 10,000$ in a Month ↗
      </Badge>
    </motion.div>
  );
}
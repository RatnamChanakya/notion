import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCallback } from 'react';
import { fadeIn } from './animations';

export function HeroCTA() {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <motion.div
      variants={fadeIn}
      className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 px-4 sm:px-0"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full sm:w-auto"
      >
        <Button
          onClick={() => scrollToSection('pricing')}
          size="lg"
          className="relative w-full sm:w-auto bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-6 sm:px-8 py-6 text-base sm:text-lg font-medium shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300 min-h-[56px] sm:min-h-[64px]"
        >
          <span className="flex items-center">
            Get Instant Access
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Button>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full sm:w-auto"
      >
        <Button
          onClick={() => scrollToSection('template-showcase')}
          size="lg"
          variant="secondary"
          className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 px-6 sm:px-8 py-6 text-base sm:text-lg font-medium transition-all duration-300 min-h-[56px] sm:min-h-[64px]"
        >
          <span className="flex items-center">
            <FileText className="mr-2 w-5 h-5" />
            View Templates
          </span>
        </Button>
      </motion.div>
    </motion.div>
  );
}
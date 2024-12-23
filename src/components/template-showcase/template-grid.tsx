import { motion } from 'framer-motion';
import { TEMPLATES } from './templates';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function TemplateGrid() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {TEMPLATES.map((template, index) => (
        <motion.div
          key={index}
          variants={item}
          layout
          className="group relative flex flex-col h-full"
        >
          <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl overflow-hidden border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 w-full flex flex-col h-full">
            {/* Image */}
            <div className="relative w-full aspect-[1.78/1] overflow-hidden">
              <img
                src={template.image}
                alt={template.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="relative p-5 flex-grow flex flex-col bg-gray-900/90 backdrop-blur-sm">
              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-white mb-1.5 group-hover:text-pink-400 transition-colors">
                {template.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 flex-grow leading-relaxed">
                {template.description}
              </p>
              
              {/* Price Tag */}
              <div className="mb-4">
                <div className="inline-flex items-center gap-1.5 bg-white/95 text-gray-900 px-3 py-1.5 rounded-full text-sm font-semibold shadow-xl shadow-black/20 backdrop-blur-sm">
                  <Star className="w-3.5 h-3.5 text-pink-500" />
                  <span>Sell for</span>
                  <span className="text-pink-500">{template.price}</span>
                </div>
              </div>
            </div>
            
            {/* Hover Border Glow */}
            <div className="absolute inset-0 border border-pink-500/0 group-hover:border-pink-500/50 rounded-xl transition-all duration-300" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
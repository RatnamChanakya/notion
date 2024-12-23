import { TEMPLATES } from '../template-showcase/templates';
import { cn } from '@/lib/utils';

interface SliderRowProps {
  direction: 'left' | 'right';
  speed?: number;
  offset?: number;
  reverse?: boolean;
}

export function SliderRow({ direction, speed = 80, offset = 0, reverse = false }: SliderRowProps) {
  // Triple the templates for seamless infinite scroll
  const items = reverse 
    ? [...TEMPLATES.slice().reverse(), ...TEMPLATES.slice().reverse(), ...TEMPLATES.slice().reverse()]
    : [...TEMPLATES, ...TEMPLATES, ...TEMPLATES];
  
  return (
    <div className="relative overflow-hidden py-2">
      {/* Gradient masks for smooth fade effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10" />

      <div
        className={cn(
          "flex gap-4 w-max",
          direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
        )}
        style={{
          '--scroll-speed': `${speed}s`,
          animationDelay: `${-offset}s`
        } as React.CSSProperties}
      >
        {items.map((template, index) => (
          <div
            key={`${template.title}-${index}`}
            className="w-[280px] sm:w-[350px] flex-shrink-0"
          >
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl overflow-hidden border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 group h-full">
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-900/50">
                <img
                  src={template.image}
                  alt={template.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-gray-900/90 backdrop-blur-sm flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">
                  {template.title}
                  </h3>
                  <span className="text-pink-400 font-semibold">{template.price}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 flex-grow">{template.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
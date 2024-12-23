import { motion } from 'framer-motion';

const WEBSITES = [
  'https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67643b66a5ca0098aa3f9ad0.png',
  'https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67643b669ea100085c9534c4.png',
  'https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67643b667e62110ca1ac2557.png',
  'https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67643b669ea1006c4f9534c5.png',
  'https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67643b66d0b58a02de39a8ce.png',
  'https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67643b66cdd6a8dd2e44bde8.png',
  'https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67643c129b7d9a812af3896a.png'
];

export function WebsiteSlider() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 w-32 z-10" />
      <div className="absolute inset-y-0 right-0 w-32 z-10" />
      
      <div className="flex gap-6 overflow-hidden -mx-4">
        <div
          className="flex gap-6 animate-scroll-left"
          style={{ '--scroll-speed': '40s' } as React.CSSProperties}
        >
          {[...WEBSITES, ...WEBSITES].map((url, index) => (
            <motion.div
              key={index}
              className="relative flex-none w-[300px] sm:w-[400px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[9/16] rounded-xl overflow-hidden">
                <img
                  src={url}
                  alt={`Website Screenshot ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
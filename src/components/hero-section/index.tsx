import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import { BackgroundEffects } from './background-effects';
import { HeroBadge } from './hero-badge';
import { HeroBenefits } from './hero-benefits';
import { HeroCTA } from './hero-cta';
import { HeroSteps } from './hero-steps';
import { staggerChildren, fadeIn } from './animations';
import { CustomImgProps } from '../../types';

const ImageWithFetchPriority = (props: CustomImgProps) => <img {...props} />;

export function HeroSection() {
  return (
    <section className="relative min-h-screen sm:min-h-[calc(100vh-8rem)] w-full flex items-center justify-center overflow-hidden bg-[#030712] py-16 sm:py-12 lg:py-20">
      {/* Only show background effects on desktop */}
      <div className="hidden sm:block">
        <BackgroundEffects />
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <LazyMotion features={domAnimation}>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="flex flex-col gap-6 sm:gap-8 lg:gap-12 max-w-3xl mx-auto"
          >
          {/* Header Content */}
          <div className="text-center">
            <HeroBadge />
            <motion.div variants={staggerChildren} className="mt-6 sm:mt-8">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
                Sell Notion Templates
                <span className="block mt-2 bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text pb-1">
                  With Full PLR Rights
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mt-4">
                Your Fast Track to a <span className="text-pink-400 font-semibold">$10,000+ Monthly Income</span>
              </p>
              <p className="hidden sm:block text-base sm:text-lg text-gray-400 mt-3 max-w-2xl mx-auto">
                Premium templates with proven profitability. Start selling in 24 hours with our complete business-in-a-box solution.
              </p>
            </motion.div>
            <div className="mt-8 sm:mt-12">
              <HeroCTA />
            </div>
            <div className="mt-8 sm:mt-12">
              <HeroBenefits />
            </div>
          </div>

          {/* Video Preview */}
          <motion.div
            variants={fadeIn}
            className="relative rounded-xl overflow-hidden border border-pink-500/20 bg-pink-500/5 shadow-2xl shadow-pink-500/10 w-full max-w-3xl mx-auto group aspect-[16/9]"
          >
            <div className="absolute inset-0">
              {/* Placeholder blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-violet-600/10 animate-pulse" />
              <ImageWithFetchPriority
                src="https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/676444e39b7d9ab527f39056.jpeg"
                alt="Notion Template Dashboard"
                className="w-full h-full object-contain"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </motion.div>
          
          {/* Steps Section */}
          <div className="mt-12 sm:mt-16 hidden sm:block">
            <HeroSteps />
          </div>
          </motion.div>
        </LazyMotion>
      </div>
    </section>
  );
}
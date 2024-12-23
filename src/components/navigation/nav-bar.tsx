import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MobileMenu } from './mobile-menu';
import { NAV_ITEMS } from './constants';
import { CurrencySwitcher } from './currency-switcher';

export function NavBar() {
  const { scrollY } = useScroll();  
  const translateY = useTransform(scrollY, [0, 40], [40, 15]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(15, 23, 42, 0.8)', 'rgba(15, 23, 42, 0.95)']
  );
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.2]);
  const shadowOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        backgroundColor,
        borderBottom: `1px solid rgba(236, 72, 153, ${borderOpacity.get()})`,
        boxShadow: `0 4px 30px rgba(236, 72, 153, ${shadowOpacity.get()})`,
        y: translateY
      }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-[12px] h-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo - Fixed Position */}
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67619f19fb63bc1cce62b0d2.png" 
              alt="Notion Reseller Logo" 
              className="w-8 h-8"
            />
            <span className="font-bold text-xl text-white/95">Notion Reseller</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center space-x-8 h-full">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById(item.section);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-200/90 hover:text-pink-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="sm:hidden bg-gradient-to-r from-pink-500/90 to-violet-600/90 hover:from-pink-500 hover:to-violet-600 text-white/95"
              size="sm"
            >
              Buy Now
            </Button>
            <div className="hidden sm:block">
              <CurrencySwitcher />
            </div>
            <a
              href="https://portal.notionreseller.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              <Button
                className="bg-gradient-to-r from-pink-500/90 to-violet-600/90 hover:from-pink-500 hover:to-violet-600 text-white/95"
              >
                Login
              </Button>
            </a>
            <MobileMenu />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
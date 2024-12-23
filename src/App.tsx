import './App.css';
import { HeroSection } from '@/components/hero-section/index';
import { AnnouncementBar } from '@/components/announcement-bar';
import { NavBar } from '@/components/navigation/nav-bar';
import { TemplateShowcase } from '@/components/template-showcase';
import { OpportunitySection } from '@/components/opportunity-section';
import { PASSection } from '@/components/pas-section';
import { TemplateSlider } from '@/components/template-slider';
import { PricingSection } from '@/components/pricing-section';
import { CTASection } from '@/components/cta-section';
import { SalesChannels } from '@/components/sales-channels';
import { WebsiteShowcase } from '@/components/website-showcase';
import { AboutSection } from '@/components/about-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FAQSection } from '@/components/faq-section';
import { BonusSection } from '@/components/bonus-section';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { RevenueCalculator } from '@/components/revenue-calculator';
import { Footer } from '@/components/footer';
import { CurrencyProvider } from './lib/currency-context';
import { useEffect, Suspense } from 'react';
import { initFacebookPixel, trackPageView } from '@/lib/facebook-pixel';

function App() {
  useEffect(() => {
    initFacebookPixel();
    trackPageView();
  }, []);

  return (
    <ThemeProvider>
      <CurrencyProvider>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <main className="flex-1 bg-[#030712] w-full overflow-x-hidden pt-24">
          <AnnouncementBar />
          <NavBar />
          <HeroSection />
          <Suspense fallback={null}>
            <PASSection />
            <TemplateShowcase />
            <WebsiteShowcase />
            <TestimonialsSection />
            <OpportunitySection />
            <BonusSection />
            <PricingSection />
            <RevenueCalculator />
            <SalesChannels />
            <TemplateSlider />
          </Suspense>
          <div className="border-t border-pink-500/10">
            <AboutSection className="py-20" /> {/* Build deeper trust */}
          </div>
          <div className="border-t border-pink-500/10">
            <CTASection className="py-20" /> {/* Strong call to action */}
          </div>
          <div className="border-t border-pink-500/10">
            <FAQSection className="py-20" /> {/* Remove final objections */}
          </div>
        </main>
        <Footer />
        <Toaster />
      </div>
      </CurrencyProvider>
    </ThemeProvider>
  );
}

export default App;
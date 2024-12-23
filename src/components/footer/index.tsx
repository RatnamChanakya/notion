import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-pink-500/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67619f19fb63bc1cce62b0d2.png" 
              alt="Notion Reseller Logo" 
              className="w-8 h-8"
            />
            <span className="text-white/90 font-medium">Notion Reseller</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2024 Coaching Marketing Kit LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
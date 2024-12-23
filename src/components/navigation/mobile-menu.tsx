import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CurrencySwitcher } from './currency-switcher';
import { NAV_ITEMS } from './constants';
import { SheetTitle } from '@/components/ui/sheet';

interface Props {
  onOpenChange?: (open: boolean) => void;
}

export function MobileMenu({ onOpenChange }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-[#0f172a] border-pink-500/20">
        <SheetTitle className="text-lg font-bold text-white mb-4">Navigation Menu</SheetTitle>
        <nav className="flex flex-col space-y-4 mt-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById(item.section);
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                  onOpenChange?.(false);
                }
              }}
              className="text-gray-200 hover:text-pink-400 transition-colors px-4 py-2 rounded-md hover:bg-pink-500/10"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-6 px-4">
          <div className="flex items-center justify-between py-2 border-b border-pink-500/20">
            <a
              href="https://portal.notionreseller.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                variant="default"
                className="w-full bg-gradient-to-r from-pink-500 to-violet-600 text-white"
              >
                Login
              </Button>
            </a>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-400 text-sm">Currency</span>
            <CurrencySwitcher />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { CURRENCIES } from '@/lib/constants';
import { useCurrency } from '@/lib/currency-context';
import { ChevronDown } from 'lucide-react';

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="text-gray-200/90 hover:text-pink-400 transition-colors gap-1.5 min-w-[70px]"
        >
          {CURRENCIES[currency].name}
          <ChevronDown className="w-4 h-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-900/95 backdrop-blur-sm border-pink-500/20">
        {Object.entries(CURRENCIES).map(([code, { name }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setCurrency(code as keyof typeof CURRENCIES)}
            className={`text-sm cursor-pointer ${
              currency === code ? 'text-pink-400' : 'text-gray-200'
            } hover:text-pink-400 hover:bg-pink-500/10`}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
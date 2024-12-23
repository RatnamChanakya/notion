import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ReadMoreButtonProps {
  isExpanded: boolean;
  onClick: () => void;
}

export function ReadMoreButton({ isExpanded, onClick }: ReadMoreButtonProps) {
  return (
    <div className="mt-auto px-3 sm:px-4 py-2 border-t border-white/10 transition-opacity duration-300">
      <Button
        variant="ghost"
        size="sm"
        onClick={onClick}
        className="w-full h-8 flex items-center justify-center gap-1 text-xs text-gray-400 hover:text-gray-200 transition-colors duration-200"
      >
        {isExpanded ? (
          <>
            Show Less <ChevronUp className="w-3 h-3" />
          </>
        ) : (
          <>
            Read More <ChevronDown className="w-3 h-3" />
          </>
        )}
      </Button>
    </div>
  );
}
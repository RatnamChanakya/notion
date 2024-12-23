import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { useEffect } from 'react';
import { TEMPLATES_DATA } from './template-list/data';

// Price range combinations
const PRICE_RANGES = [
  '$97-$197',
  '$147-$247',
  '$197-$297',
  '$247-$347',
  '$297-$397'
];

interface Template {
  id: number;
  name: string;
  price: string;
}

function getTemplatesForPage(pageNumber: number): string[] {
  const key = `page${pageNumber}` as keyof typeof TEMPLATES_DATA;
  return TEMPLATES_DATA[key] || [];
}

interface TemplateListProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TemplateList({ open, onOpenChange }: TemplateListProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    async function loadTemplates() {
      const pageTemplates = getTemplatesForPage(currentPage + 1);
      const templatesWithMetadata = pageTemplates.map((name, index) => ({
        id: (currentPage * 50) + index + 1,
        name: name.trim(),
        price: PRICE_RANGES[Math.floor(Math.random() * PRICE_RANGES.length)]
      }));
      setTemplates(templatesWithMetadata);
    }
    
    loadTemplates();
  }, [currentPage]);
  
  const totalPages = Object.keys(TEMPLATES_DATA).length;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[85vh] sm:h-[80vh] p-0 bg-white w-[90vw] sm:w-[95vw] md:w-[90vw] lg:w-[85vw]">
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <div>
          <DialogTitle className="text-lg sm:text-2xl font-bold text-gray-900">All Notion Templates</DialogTitle>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Page {currentPage + 1} of {totalPages}
          </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-700"
            onClick={() => onOpenChange(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-2 sm:px-6 py-2 sm:py-4">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-pulse text-gray-400">Loading templates...</div>
            </div>
          ) : (
            <div className="space-y-1.5 sm:space-y-2">
            {templates.map((template) => (
              <motion.div 
                key={template.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 rounded-lg hover:bg-gray-50 border border-gray-100 gap-1 sm:gap-4 relative mb-2"
              >
                <div className="absolute left-2 top-3 sm:top-1/2 sm:-translate-y-1/2 w-5 sm:w-6 text-xs sm:text-sm text-gray-400">
                  {template.id}.
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-xs sm:text-base pl-7 sm:pl-8 line-clamp-2 sm:line-clamp-1">{template.name}</h3>
                </div>
                <div className="flex items-center gap-4 sm:min-w-[100px] justify-start sm:justify-end pl-7 sm:pl-0 mt-1 sm:mt-0">
                  <span className="text-xs sm:text-sm font-medium text-pink-600">{template.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
          )}
        </div>

        <div className="p-2 sm:p-4 border-t bg-gray-50">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="flex items-center gap-2 sm:hidden flex-1">
              <Button
                variant="outline"
                size="sm"
                className="text-gray-700 hover:text-gray-900 border-pink-200 hover:bg-pink-50 h-9 px-2.5"
                onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                disabled={currentPage === 0}
              >
                <ChevronLeft className="w-3 h-3 mr-1" />
                Previous
              </Button>
              
              <Select
                value={currentPage.toString()}
                onValueChange={(value) => setCurrentPage(parseInt(value))}
              >
                <SelectTrigger className="flex-1 h-9 border-pink-200 text-gray-900">
                  <SelectValue>Page {currentPage + 1}</SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <SelectItem key={i} value={i.toString()} className="text-gray-900">
                      Page {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button
                variant="outline"
                size="sm"
                className="text-gray-700 hover:text-gray-900 border-pink-200 hover:bg-pink-50 h-9 px-2.5"
                onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
                disabled={currentPage === totalPages - 1}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Desktop Pagination */}
            <div className="hidden sm:flex items-center gap-1.5">
              <Button
                variant="outline"
                size="sm"
                className="text-gray-700 hover:text-gray-900 border-pink-200 hover:bg-pink-50"
                onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                disabled={currentPage === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(i)}
                  className={`w-10 text-sm ${
                    currentPage === i 
                      ? "bg-gradient-to-r from-pink-500 to-violet-600 text-white border-transparent hover:text-white" 
                      : "bg-white text-gray-700 hover:border-pink-200 hover:bg-pink-50 border-gray-200"
                  }`}
                >
                  {i + 1}
                </Button>
              ))}
              
              <Button
                variant="outline"
                size="sm"
                className="text-gray-700 hover:text-gray-900 border-pink-200 hover:bg-pink-50"
                onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
                disabled={currentPage === totalPages - 1}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TEMPLATES_DATA } from './template-list/data';

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

interface TemplateListProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function getTemplatesForPage(pageNumber: number): Array<string> {
  const key = `page${pageNumber}` as keyof typeof TEMPLATES_DATA;
  const templates = TEMPLATES_DATA[key];
  return templates ? Array.from(templates) : [];
}

export function TemplateList({ open, onOpenChange }: TemplateListProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [templates, setTemplates] = useState<Template[]>([]);
  
  useEffect(() => {
    const loadTemplates = () => {
      const pageTemplates = getTemplatesForPage(currentPage + 1);
      const templatesWithMetadata = pageTemplates.map((name, index) => ({
        id: (currentPage * 50) + index + 1,
        name: name.trim(),
        price: PRICE_RANGES[Math.floor(Math.random() * PRICE_RANGES.length)]
      }));
      setTemplates(templatesWithMetadata);
    };
    
    loadTemplates();
  }, [currentPage]);
  
  const totalPages = Object.keys(TEMPLATES_DATA).length;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[85vh] sm:h-[80vh] p-0 bg-white w-[90vw] sm:w-[95vw] md:w-[90vw] lg:w-[85vw]">
        <div className="px-6 py-4 border-b">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900">All Templates</DialogTitle>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Showing {currentPage * 50 + 1}-{Math.min((currentPage + 1) * 50, templates.length)} of {templates.length} templates
          </p>
        </div>
        
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4">
          <div className="space-y-2">
            {templates.map((template) => (
              <motion.div 
                key={template.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border-b border-gray-100 last:border-b-0 gap-2 sm:gap-4"
              >
                <div>
                  <h3 className="font-medium text-gray-900 text-sm sm:text-base">{template.name}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-pink-600">{template.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t bg-gray-50">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(i)}
                  className={currentPage === i ? "bg-pink-500 text-white" : ""}
                >
                  {i + 1}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
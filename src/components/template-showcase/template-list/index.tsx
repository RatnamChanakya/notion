import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TEMPLATES_DATA } from './data';

interface Template {
  id: number;
  name: string;
  category: string;
  price: string;
}

interface TemplateListProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getAllTemplates = (): Template[] => {
  let id = 1;
  return Object.values(TEMPLATES_DATA).flat().map(name => ({
    id: id++,
    name,
    category: 'Template',
    price: '$97-$297'
  }));
};

export function TemplateList({ open, onOpenChange }: TemplateListProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const templatesPerPage = 50;
  const allTemplates = getAllTemplates();
  const totalPages = Math.ceil(allTemplates.length / templatesPerPage);
  
  const currentTemplates = allTemplates.slice(
    currentPage * templatesPerPage,
    (currentPage + 1) * templatesPerPage
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[90vh] sm:h-[80vh] p-0 bg-white w-[95vw] sm:w-auto">
        <div className="px-6 py-4 border-b">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900">All Templates</DialogTitle>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Showing {currentPage * templatesPerPage + 1}-{Math.min((currentPage + 1) * templatesPerPage, allTemplates.length)} of {allTemplates.length} templates
          </p>
        </div>
        
        <ScrollArea className="flex-1 px-4 sm:px-6 py-4">
          <div className="space-y-2">
            {currentTemplates.map((template) => (
              <motion.div 
                key={template.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border-b border-gray-100 last:border-b-0 gap-2 sm:gap-4"
              >
                <div>
                  <h3 className="font-medium text-gray-900 text-sm sm:text-base">{template.name}</h3>
                  <span className="text-sm text-gray-500">{template.category}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-pink-600">{template.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 sm:px-6 sm:py-4 border-t bg-gray-50">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="flex items-center gap-2 sm:hidden flex-1">
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
              
              <Select
                value={currentPage.toString()}
                onValueChange={(value) => setCurrentPage(parseInt(value))}
              >
                <SelectTrigger className="flex-1 h-9 border-pink-200 text-gray-700">
                  <SelectValue>Page {currentPage + 1}</SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <SelectItem key={i} value={i.toString()} className="text-gray-700">
                      Page {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
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
                  className={`w-10 text-sm border-gray-200 ${
                    currentPage === i 
                      ? "bg-gradient-to-r from-pink-500 to-violet-600 text-white border-transparent" 
                      : "bg-white text-gray-700 hover:border-pink-200 hover:bg-pink-50"
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
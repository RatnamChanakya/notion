import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tweet } from 'react-tweet';
import { ReadMoreButton } from './read-more-button';

interface TweetCardProps {
  id: string;
}

const MAX_HEIGHT = 280; // Reduced max height for better UX

export function TweetCard({ id }: TweetCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const tweetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkHeight = () => {
      if (tweetContainerRef.current) {
        const height = tweetContainerRef.current.scrollHeight;
        setShowReadMore(height > MAX_HEIGHT);
      }
    }
    
    // Check height after a short delay to ensure tweet content is loaded
    const timer = setTimeout(checkHeight, 1000);
    
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white/5 rounded-md sm:rounded-lg md:rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col"
    >
      <div 
        ref={contentRef}
        style={{ maxHeight: isExpanded ? 'none' : MAX_HEIGHT }}
        className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
      >
        <div ref={tweetContainerRef} className="p-3 sm:p-4">
          <Tweet id={id} />
        </div>
        
        {!isExpanded && showReadMore && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent pointer-events-none transition-opacity duration-300" />
        )}
      </div>
      {showReadMore && (
        <ReadMoreButton 
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      )}
    </motion.div>
  );
}
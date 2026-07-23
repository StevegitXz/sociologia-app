import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Renders text content with key terms automatically highlighted in orange.
 * Hover on a term to see its definition in a tooltip.
 */
export default function HighlightedText({ text, keyTerms = [], onDiscoverTerm }) {
  if (!keyTerms.length) {
    return <>{text}</>;
  }

  // Build a regex that matches any key term (case-insensitive, whole words)
  const pattern = keyTerms
    .map((kt) => kt.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');

  // Split text by key terms
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        const match = keyTerms.find(
          (kt) => kt.term.toLowerCase() === part.toLowerCase()
        );
        if (match) {
          return (
            <TermHighlight 
              key={i} 
              term={part} 
              definition={match.definition} 
              onDiscover={() => onDiscoverTerm && onDiscoverTerm(match)} 
            />
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function TermHighlight({ term, definition, onDiscover }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    if (onDiscover) onDiscover();
  };

  return (
    <span
      className="relative inline-block cursor-help"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setShowTooltip(false)}
      onTouchStart={() => {
        setShowTooltip(!showTooltip);
        if (onDiscover) onDiscover();
      }}
    >
      <span className="text-accent-orange font-semibold border-b border-dashed border-accent-orange/40 hover:border-accent-orange transition-colors">
        {term}
      </span>

      <AnimatePresence>
        {showTooltip && (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50 w-56 sm:w-64 p-3 rounded-xl bg-primary-dark dark:bg-white text-white dark:text-primary-dark text-xs leading-relaxed shadow-xl pointer-events-none"
          >
            <span className="font-semibold text-accent-orange block mb-1">{term}</span>
            {definition}
            {/* Arrow */}
            <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-primary-dark dark:border-t-white" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

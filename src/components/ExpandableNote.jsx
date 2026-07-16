import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Lightbulb } from 'lucide-react';

/**
 * Expandable "Saiba mais" note for extra context.
 * Click to reveal additional information with smooth animation.
 */
export default function ExpandableNote({ title = 'Saiba mais', children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-6 sm:my-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 text-sm font-semibold text-accent-orange hover:text-accent-orange/80 transition-colors"
      >
        <span className="w-7 h-7 rounded-lg bg-accent-orange/10 flex items-center justify-center group-hover:bg-accent-orange/15 transition-colors">
          <Lightbulb className="w-3.5 h-3.5" strokeWidth={2} />
        </span>
        <span>{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="mt-3 pl-4 sm:pl-6 border-l border-accent-orange/15 text-sm leading-relaxed opacity-75">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

/**
 * Decorative pull-quote callout for important concepts.
 * Appears as an elegant aside with orange accent.
 */
export default function PullQuote({ children, author }) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative my-8 sm:my-10 pl-6 sm:pl-8 py-4 border-l-2 border-accent-orange/30"
    >
      {/* Decorative quote icon */}
      <Quote
        className="absolute -left-3 -top-1 w-6 h-6 text-accent-orange bg-primary-light dark:bg-primary-dark p-0.5"
        strokeWidth={1.5}
      />

      <blockquote className="font-heading text-lg sm:text-xl font-medium italic leading-relaxed text-primary-dark/80 dark:text-white/80">
        "{children}"
      </blockquote>

      {author && (
        <cite className="block mt-2 text-xs font-semibold uppercase tracking-wider text-accent-orange not-italic">
          — {author}
        </cite>
      )}
    </motion.aside>
  );
}

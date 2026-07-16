import { motion } from 'framer-motion';

/**
 * Animated fact/statistic callout.
 * Shows a large number/label with a descriptive caption.
 */
export default function FactCallout({ number, label, caption }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex items-center gap-4 my-6 sm:my-8 p-4 sm:p-5 rounded-2xl bg-accent-orange/[0.04] dark:bg-accent-orange/[0.06]"
    >
      {/* Big number/icon */}
      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent-orange/10 flex items-center justify-center">
        <span className="font-heading text-2xl font-bold text-accent-orange">
          {number}
        </span>
      </div>

      <div className="min-w-0">
        <p className="font-heading font-semibold text-sm text-primary-dark dark:text-white">
          {label}
        </p>
        <p className="text-xs opacity-60 mt-0.5 leading-relaxed">{caption}</p>
      </div>
    </motion.div>
  );
}

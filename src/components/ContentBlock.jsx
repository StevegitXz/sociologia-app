import { motion } from 'framer-motion';
import HighlightedText from './HighlightedText';
import PullQuote from './PullQuote';
import ExpandableNote from './ExpandableNote';
import FactCallout from './FactCallout';

/**
 * Free-flowing content section — no card wrapper.
 * Text flows naturally with interactive elements:
 * - Key terms highlighted with hover tooltips
 * - Pull quotes as decorative asides
 * - Expandable "Saiba mais" notes
 * - Fact callouts with animated numbers
 * - Large watermark section number
 */
export default function ContentBlock({ section, index }) {
  const sectionNum = String(index + 1).padStart(2, '0');

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative"
    >
      {/* Large watermark section number */}
      <span
        className="absolute -left-2 sm:-left-4 -top-6 font-heading text-[5rem] sm:text-[7rem] font-extrabold leading-none text-accent-orange/[0.06] dark:text-accent-orange/[0.08] select-none pointer-events-none"
        aria-hidden="true"
      >
        {sectionNum}
      </span>

      {/* Section label */}
      <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent-orange mb-3 relative z-10">
        Seção {sectionNum}
      </span>

      {/* Heading */}
      <h3 className="font-heading font-bold text-2xl sm:text-3xl text-primary-dark dark:text-white mb-6 relative z-10 leading-snug">
        {section.heading}
      </h3>

      {/* Main text with highlighted key terms */}
      <div className="relative z-10">
        <HighlightedText text={section.content} keyTerms={section.keyTerms || []} />
      </div>

      {/* Pull quote (if exists) */}
      {section.pullQuote && (
        <PullQuote>{section.pullQuote}</PullQuote>
      )}

      {/* Fact callout (if exists) */}
      {section.fact && (
        <FactCallout
          number={section.fact.number}
          label={section.fact.label}
          caption={section.fact.caption}
        />
      )}

      {/* Expandable note (if exists) */}
      {section.extraNote && (
        <ExpandableNote>
          {section.extraNote}
        </ExpandableNote>
      )}
    </motion.section>
  );
}

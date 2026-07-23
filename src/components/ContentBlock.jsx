import { motion } from 'framer-motion';
import HighlightedText from './HighlightedText';
import PullQuote from './PullQuote';
import ExpandableNote from './ExpandableNote';
import FactCallout from './FactCallout';
import ScrollReveal from './ScrollReveal';
import AudioPlayer from './AudioPlayer';

/**
 * Editorial Content Section
 * - 12-column grid layout on desktop
 * - Alternates text/sidebar positions based on index (Asymmetry)
 * - Sidebar contains PullQuotes and Facts in a sticky container
 */
export default function ContentBlock({ section, index, onDiscoverTerm }) {
  const sectionNum = String(index + 1).padStart(2, '0');
  const paragraphs = section.content ? section.content.split('\n\n').filter(p => p.trim() !== '') : [];
  
  // Every odd index alternates the layout (Text on Right, Sidebar on Left)
  const isAlt = index % 2 !== 0;

  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start w-full scroll-mt-28"
    >
      {/* ── Main Text Column (7 cols) ── */}
      <div className={`lg:col-span-7 flex flex-col gap-10 ${isAlt ? 'lg:col-start-6 lg:order-2' : 'lg:col-start-1 lg:order-1'}`}>
        
        {/* Header Block */}
        <div className="relative">
          {/* Watermark Number */}
          <span
            className={`absolute ${isAlt ? '-right-6 text-right' : '-left-8'} -top-14 font-heading text-[7rem] sm:text-[9rem] lg:text-[12rem] font-extrabold leading-none text-accent-orange/[0.04] dark:text-accent-orange/[0.06] select-none pointer-events-none z-0`}
            aria-hidden="true"
          >
            {sectionNum}
          </span>
          
          <div className="relative z-10 flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent-orange">
                Seção {sectionNum}
              </span>
              <AudioPlayer text={section.content} />
            </div>

            <h3 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-primary-dark dark:text-white leading-[1.15] mt-2">
              {section.heading}
            </h3>
          </div>
        </div>

        {/* Paragraphs */}
        <div className="flex flex-col gap-8 relative z-10">
          {paragraphs.map((para, i) => {
            const isFirstPara = i === 0;
            const dropCapClasses = "first-letter:text-7xl first-letter:font-heading first-letter:font-black first-letter:text-accent-orange first-letter:mr-4 first-letter:mt-2 first-letter:float-left first-letter:leading-[0.8] first-line:tracking-wide";
            
            return (
              <ScrollReveal key={i} direction="up" delay={i * 0.05} className="w-full">
                <p className={`text-lg sm:text-xl lg:text-[1.35rem] leading-[1.8] opacity-90 text-primary-dark dark:text-gray-200 ${isFirstPara ? dropCapClasses : ''}`}>
                  <HighlightedText text={para} keyTerms={section.keyTerms || []} onDiscoverTerm={onDiscoverTerm} />
                </p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* ── Marginalia Column (5 cols) - Sticky elements ── */}
      <div className={`lg:col-span-5 flex flex-col gap-12 sticky top-28 pt-4 lg:pt-16 ${isAlt ? 'lg:col-start-1 lg:row-start-1 lg:order-1' : 'lg:col-start-8 lg:order-2'}`}>
        
        {section.pullQuote && (
          <ScrollReveal direction={isAlt ? "right" : "left"} delay={0.2}>
            <div className="bg-primary-light dark:bg-primary-dark border-l-4 border-accent-orange shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.02)] p-6 rounded-r-2xl transform hover:-translate-y-1 transition-transform">
              <PullQuote>{section.pullQuote}</PullQuote>
            </div>
          </ScrollReveal>
        )}

        {section.fact && (
          <ScrollReveal direction={isAlt ? "right" : "left"} delay={0.3}>
            <FactCallout
              number={section.fact.number}
              label={section.fact.label}
              caption={section.fact.caption}
            />
          </ScrollReveal>
        )}

        {section.extraNote && (
          <ScrollReveal direction="up" delay={0.4}>
            <ExpandableNote>
              {section.extraNote}
            </ExpandableNote>
          </ScrollReveal>
        )}
      </div>
    </motion.section>
  );
}

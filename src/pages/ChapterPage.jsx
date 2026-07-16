import { useParams, Navigate } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { chaptersData } from '../data/chapters';
import ContentBlock from '../components/ContentBlock';
import MediaCenter from '../components/MediaCenter';
import Quiz from '../components/Quiz';
import ScrollReveal from '../components/ScrollReveal';

export default function ChapterPage({ chapterId: defaultId }) {
  const params = useParams();
  const id = defaultId || params.id;

  const { scrollYProgress } = useScroll();
  const data = chaptersData[id];

  if (!data) return <Navigate to="/" />;

  return (
    <div className="relative pb-24 max-w-3xl mx-auto w-full px-5 sm:px-8 pt-8">
      {/* ── Progress bar ── fixed 2px orange at top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent-orange z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ── Chapter illustration ── */}
      {data.illustration && (
        <ScrollReveal direction="up" delay={0} className="mb-10">
          <div className="relative w-full max-w-sm mx-auto">
            <motion.img
              src={data.illustration}
              alt={data.illustrationAlt || ''}
              className="w-full h-auto rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            {/* Decorative elements around image */}
            <div className="absolute -top-3 -right-3 w-8 h-8 border border-accent-orange/20 rounded-full animate-float-slow" />
            <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-accent-orange/10 rounded-full animate-float" />
          </div>
        </ScrollReveal>
      )}

      {/* ── Title with staggered reveal ── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="mb-16"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1, y: 0,
              transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
            },
          }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark dark:text-white leading-tight"
        >
          {data.title}
        </motion.h1>

        {/* Decorative orange line */}
        <motion.div
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
            },
          }}
          className="w-16 h-[2px] bg-accent-orange mt-6 origin-left"
        />
      </motion.div>

      {/* ── Content sections — free flowing ── */}
      <div className="flex flex-col gap-20 sm:gap-24">
        {data.sections.map((sec, i) => (
          <div key={sec.id}>
            <ContentBlock section={sec} index={i} />

            {/* Soft divider between sections */}
            {i < data.sections.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex items-center justify-center mt-20 sm:mt-24"
              >
                <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-orange/20 to-transparent" />
                <span className="absolute w-1.5 h-1.5 rounded-full bg-accent-orange" />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* ── Divider before Media ── */}
      <div className="relative flex items-center justify-center my-20">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-orange/20 to-transparent" />
        <span className="absolute w-1.5 h-1.5 rounded-full bg-accent-orange" />
      </div>

      {/* ── Media section ── */}
      <ScrollReveal direction="up" delay={0.1}>
        <h2 className="font-heading text-2xl font-semibold mb-8 text-primary-dark dark:text-white">
          Central de Mídia
        </h2>
        <MediaCenter videoUrl={data.videoUrl} mindmap={data.mindmap} />
      </ScrollReveal>

      {/* ── Divider before Quiz ── */}
      <div className="relative flex items-center justify-center my-20">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-orange/20 to-transparent" />
        <span className="absolute w-1.5 h-1.5 rounded-full bg-accent-orange" />
      </div>

      {/* ── Quiz section ── */}
      <ScrollReveal direction="up" delay={0.2}>
        <h2 className="font-heading text-2xl font-semibold mb-8 text-primary-dark dark:text-white">
          Quiz Fixador
        </h2>
        <Quiz questions={data.quiz} />
      </ScrollReveal>
    </div>
  );
}

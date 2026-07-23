import { useState, useEffect } from 'react';
import { useParams, Navigate, useOutletContext, Link } from 'react-router-dom';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { chaptersData } from '../data/chapters';
import ContentBlock from '../components/ContentBlock';
import VideoSection from '../components/VideoSection';
import ScrollReveal from '../components/ScrollReveal';
import SectionNav from '../components/SectionNav';

export default function ChapterPage({ chapterId: defaultId }) {
  const params = useParams();
  const id = defaultId || params.id;

  const { scrollYProgress, scrollY } = useScroll();
  const data = chaptersData[id];
  const [showVideoBtn, setShowVideoBtn] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(data?.sections[0]?.id || '');

  const outletContext = useOutletContext() || {};
  const { progress, markSectionCompleted, saveQuizScore, discoverTerm } = outletContext;

  // Resetar scroll ao mudar de capítulo
  useEffect(() => {
    const main = document.querySelector('main');
    if (main) main.scrollTop = 0;
    if (data?.sections[0]?.id) {
      setActiveSectionId(data.sections[0].id);
    }
  }, [id, data]);

  // ScrollSpy com IntersectionObserver
  useEffect(() => {
    if (!data?.sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const secId = entry.target.id;
            setActiveSectionId(secId);
            if (markSectionCompleted) {
              markSectionCompleted(secId, id, data.sections.length);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    data.sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [id, data, markSectionCompleted]);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      const videoSection = document.getElementById('video-section');
      if (videoSection) {
        const rect = videoSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setShowVideoBtn(false);
        } else if (latest > 300) {
          setShowVideoBtn(true);
        } else {
          setShowVideoBtn(false);
        }
      } else {
        if (latest > 300) setShowVideoBtn(true);
        else setShowVideoBtn(false);
      }
    });
  }, [scrollY]);

  const scrollToVideos = () => {
    const el = document.getElementById('video-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSection = (secId) => {
    const el = document.getElementById(secId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!data) return <Navigate to="/" />;

  return (
    <div className="relative pb-24 max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-16 pt-12 overflow-x-hidden">
      {/* ── Progress bar ── fixed 2px orange at top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent-orange z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ── Section Index / ScrollSpy Nav ── */}
      <SectionNav
        sections={data.sections}
        activeSectionId={activeSectionId}
        onSelectSection={handleSelectSection}
        completedSections={progress?.completedSections || []}
      />

      {/* ── Chapter illustration ── */}
      {data.illustration && (
        <ScrollReveal direction="up" delay={0} className="mb-16 lg:mb-24">
          <div className="relative w-full max-w-4xl mx-auto">
            <motion.img
              src={data.illustration}
              alt={data.illustrationAlt || ''}
              loading="lazy"
              className="w-full h-auto rounded-3xl object-cover aspect-[21/9]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            {/* Decorative elements around image */}
            <div className="absolute -top-6 -right-6 w-12 h-12 border border-accent-orange/20 rounded-full animate-float-slow" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent-orange/10 rounded-full animate-float" />
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
        className="mb-20 lg:mb-32 max-w-4xl mx-auto text-center"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1, y: 0,
              transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
            },
          }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primary-dark dark:text-white leading-tight"
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
          className="w-24 h-[3px] bg-accent-orange mt-8 mx-auto origin-center"
        />
      </motion.div>

      {/* ── Content sections — editorial alternating layout ── */}
      <div className="flex flex-col gap-32 lg:gap-48 mt-16">
        {data.sections.map((sec, i) => (
          <ContentBlock 
            key={sec.id} 
            section={sec} 
            index={i} 
            onDiscoverTerm={discoverTerm}
            colorTheme={data.colorTheme || 'orange'}
          />
        ))}
      </div>

      {/* ── Video Section ── */}
      {data.videos && data.videos.length > 0 && (
        <>
          <div className="relative flex items-center justify-center my-20">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-orange/20 to-transparent" />
            <span className="absolute w-1.5 h-1.5 rounded-full bg-accent-orange" />
          </div>
          <VideoSection videos={data.videos} />
        </>
      )}

      {/* ── Callout Banner to Dedicated Activities Page ── */}
      <ScrollReveal direction="up" delay={0.2} className="my-24">
        <div className="bg-gradient-to-br from-accent-orange via-orange-600 to-amber-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl text-center flex flex-col items-center gap-4 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="p-3 bg-white/15 rounded-2xl backdrop-blur-md">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          <h3 className="font-heading font-bold text-2xl sm:text-3xl max-w-xl">
            Pronto para fixar o aprendizado deste capítulo?
          </h3>
          <p className="max-w-xl text-white/90 text-sm sm:text-base leading-relaxed opacity-90">
            Acesse a Central de Atividades exclusiva para testar seus conhecimentos no Quiz Fixador, explorar o Mapa Mental Interativo e revisar os Resumos em tópicos.
          </p>

          <Link
            to={id === 'intro' ? '/intro/atividades' : `/capitulo/${id}/atividades`}
            className="mt-3 inline-flex items-center gap-2.5 bg-white text-accent-orange hover:bg-white/90 font-heading font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg transition-transform active:scale-95"
          >
            <span>🚀 Ir para Central de Atividades e Prática</span>
          </Link>
        </div>
      </ScrollReveal>

      {/* ── Sticky Video Button ── */}
      <AnimatePresence>
        {showVideoBtn && data.videos && data.videos.length > 0 && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            onClick={scrollToVideos}
            className="fixed bottom-6 right-6 z-40 bg-accent-orange text-white px-5 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors flex items-center gap-2 font-semibold text-sm"
          >
            <span className="text-lg">📹</span> Ir para Vídeos Auxiliares
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

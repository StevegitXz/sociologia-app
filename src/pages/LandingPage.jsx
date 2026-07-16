import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { ArrowRight, BookOpen, Brain, HelpCircle } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const titleWords = ['Sociologia'];
const subtitleWords = ['Do', 'Seu', 'Jeito'];

const features = [
  {
    icon: BookOpen,
    title: 'Conteúdo Interativo',
    desc: 'Textos enriquecidos com animações e elementos visuais que facilitam o aprendizado.',
  },
  {
    icon: Brain,
    title: 'Mapas Mentais',
    desc: 'Visualize conexões entre conceitos com mapas interativos e dinâmicos.',
  },
  {
    icon: HelpCircle,
    title: 'Quizzes Fixadores',
    desc: 'Teste seus conhecimentos com questões gamificadas e feedback instantâneo.',
  },
];

export default function LandingPage() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { saveUserName } = useUser();
  const [nameInput, setNameInput] = useState('');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Section visibility transforms
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.18], [1, 0.92]);

  const manifestoOpacity = useTransform(scrollYProgress, [0.15, 0.28, 0.6, 0.72], [0, 1, 1, 0]);

  const formOpacity = useTransform(scrollYProgress, [0.72, 0.88], [0, 1]);
  const formY = useTransform(scrollYProgress, [0.72, 0.88], [60, 0]);

  const handleStart = (e) => {
    e.preventDefault();
    if (nameInput.trim()) {
      saveUserName(nameInput.trim());
      navigate('/app');
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-[300vh] bg-primary-light text-text-light dark:bg-primary-dark dark:text-text-dark relative overflow-clip"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <AnimatedBackground variant="landing" />

        {/* ── HERO ── */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10 pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Title */}
            <div className="overflow-hidden mb-2">
              {titleWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="inline-block font-heading text-6xl md:text-8xl font-extrabold tracking-tight"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Subtitle — orange gradient */}
            <div className="overflow-hidden mb-6">
              {subtitleWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="inline-block font-heading text-5xl md:text-7xl font-extrabold tracking-tight text-gradient-orange mr-3 last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed"
            >
              Uma nova forma de observar o cotidiano. Role para baixo e descubra as engrenagens da sociedade.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="animate-bounce"
            >
              <div className="w-5 h-9 border-[1.5px] border-current/40 rounded-full flex justify-center pt-1.5 mx-auto">
                <motion.div
                  className="w-1 h-2.5 bg-accent-orange rounded-full"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── MANIFESTO — Feature Cards ── */}
        <motion.div
          style={{ opacity: manifestoOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 z-20 pointer-events-none"
        >
          <motion.h2
            className="font-heading text-2xl md:text-3xl font-bold mb-2 text-center"
          >
            O que você vai descobrir
          </motion.h2>
          <div className="w-12 h-[2px] bg-accent-orange rounded-full mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-4xl w-full">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="bg-white/60 dark:bg-white/[0.04] backdrop-blur-sm border-l-[3px] border-accent-orange rounded-xl p-6 pointer-events-auto"
                >
                  <Icon className="w-6 h-6 text-accent-orange mb-3" strokeWidth={1.5} />
                  <h3 className="font-heading font-semibold text-lg mb-1">{feat.title}</h3>
                  <p className="text-sm opacity-65 leading-relaxed">{feat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── ENTRY FORM ── */}
        <motion.div
          style={{ opacity: formOpacity, y: formY }}
          className="absolute inset-0 flex items-center justify-center z-30"
        >
          <div className="relative bg-white/70 dark:bg-primary-dark/70 backdrop-blur-xl p-10 md:p-14 rounded-3xl shadow-lg max-w-md w-full mx-6 border border-white/40 dark:border-white/10 text-center">
            {/* Decorative circle */}
            <motion.div
              className="absolute -top-5 -right-5 w-20 h-20 border border-accent-orange/25 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />

            <h2 className="font-heading text-2xl font-bold mb-2">Pronto para começar?</h2>
            <p className="text-sm opacity-60 mb-8">
              Insira seu nome para desvendar a teia de significados.
            </p>

            <form onSubmit={handleStart} className="flex flex-col gap-4 pointer-events-auto">
              <input
                type="text"
                required
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Seu nome"
                className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-black/30 border border-transparent outline-none focus:border-accent-orange focus:ring-2 focus:ring-accent-orange/20 transition-all duration-300 text-lg text-gray-800 dark:text-white placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-accent-orange text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent-orange/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Acessar Monitoria <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

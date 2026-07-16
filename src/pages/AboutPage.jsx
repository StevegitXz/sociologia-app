import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, BookOpen, Users, ClipboardCheck, Play, Camera, Video, Mail } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark font-sans transition-colors duration-500">

      {/* ═══════════ NAVBAR ═══════════ */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-primary-light/80 dark:bg-primary-dark/80 border-b border-border-light dark:border-border-dark">
        <div className="max-w-6xl mx-auto flex h-14 items-center justify-between px-6">
          <Link to="/sobre" className="font-heading text-lg tracking-tight">
            <span className="opacity-40">S</span>ociol<span className="text-accent-orange">o</span>gia
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link to="/sobre" className="text-accent-orange">Sobre</Link>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Ajuda</a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Contato</a>
            <Link to="/" className="opacity-60 hover:opacity-100 transition-opacity">Plataforma</Link>
          </div>
        </div>
      </nav>

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">

          {/* Left: vertical line + label */}
          <div className="hidden md:flex flex-row items-start gap-4 pt-2 flex-shrink-0">
            <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase whitespace-nowrap text-accent-orange writing-vertical-lr" style={{ writingMode: 'vertical-lr' }}>
              Introdução
            </span>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 160 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-[3px] bg-accent-orange rounded-full"
            />
          </div>

          {/* Center: text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex-1 max-w-xl"
          >
            <motion.p variants={fadeUp} custom={0} className="text-2xl md:text-[2.1rem] lg:text-4xl leading-relaxed font-light">
              Entre no mundo da{' '}
              <strong className="text-accent-orange font-semibold">sociologia</strong>{' '}
              de forma inspiradora e diferente, conheça os principais{' '}
              <strong className="text-accent-orange font-semibold">autores</strong>,{' '}
              formas de{' '}
              <strong className="text-accent-orange font-semibold">pensar</strong>,{' '}
              <strong className="text-accent-orange font-semibold">conceitos</strong>{' '}
              e muito mais.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="mt-10">
              <a href="#conteudo" className="inline-flex items-center gap-2 text-base font-medium opacity-60 hover:opacity-100 transition-opacity">
                Explorar <ArrowDown className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: hero collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 max-w-lg"
          >
            <img
              src="/images/hero-collage.png"
              alt="Colagem com pensadores da sociologia"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════ "O QUE VAMOS APRENDER" ═══════════ */}
      <section id="conteudo" className="max-w-6xl mx-auto px-6 pb-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="font-heading text-2xl md:text-4xl font-bold mb-16"
        >
          O que vamos aprender e fazer nessa plataforma?
        </motion.h2>
      </section>

      {/* ═══════════ CHAPTERS TIMELINE ═══════════ */}
      <section className="relative max-w-6xl mx-auto px-6 pb-24">

        {/* Vertical timeline line (desktop only) */}
        <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-border-light dark:bg-border-dark" />

        {/* ──── INTRODUÇÃO ──── */}
        <TimelineItem label="Introdução" dotActive>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="md:ml-12"
          >
            <motion.h3 variants={fadeUp} className="font-heading text-xl md:text-2xl font-bold mb-6">Introdução</motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-accent-orange bg-accent-orange/[0.03] dark:bg-accent-orange/[0.05] rounded-r-xl p-5">
                <ul className="space-y-3 text-sm md:text-base leading-relaxed">
                  <li><strong>As Ciências Sociais</strong><br/><span className="opacity-70">(Antropologia, Sociologia e Ciência Política)</span></li>
                  <li><strong>O pensamento crítico</strong><br/><span className="opacity-70">e a "desnaturalização" do mundo social</span></li>
                  <li><strong>Conceitos e Métodos</strong><br/><span className="opacity-70">(Pesquisas quantitativas e qualitativas)</span></li>
                  <li><strong>Ideologia</strong></li>
                </ul>
              </div>
              <ul className="space-y-3 text-sm md:text-base leading-relaxed list-disc list-inside opacity-80">
                <li>Sociedades indígenas e o mundo contemporâneo</li>
                <li>Mitos, narrativas e o estruturalismo</li>
              </ul>
            </div>
          </motion.div>
        </TimelineItem>

        {/* ──── CAPÍTULO 1 ──── */}
        <TimelineItem label="Capítulo 1">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="md:ml-12"
          >
            <div className="bg-gray-50 dark:bg-white/[0.03] rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <motion.p variants={fadeUp} className="text-xs md:text-sm uppercase tracking-widest text-accent-orange font-semibold mb-2">Capítulo 1</motion.p>
                  <motion.h3 variants={fadeUp} className="font-heading text-2xl md:text-3xl font-bold mb-6">O pensamento antropológico</motion.h3>
                  <motion.ul variants={stagger} className="space-y-2.5 text-sm md:text-base leading-relaxed">
                    {['Evolucionismo social', 'Sistemas de parentesco', 'Populações indígenas e a sociedade capitalista', 'Estruturalismo', 'Terras indígenas no Brasil'].map((item, i) => (
                      <motion.li key={i} variants={fadeUp} custom={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mt-2 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <motion.img
                  variants={fadeUp}
                  src="/images/cap1-anthropology.png"
                  alt="Colagem antropologia"
                  className="w-full md:w-64 h-auto rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </TimelineItem>

        {/* ──── CAPÍTULO 2 ──── */}
        <TimelineItem label="Capítulo 2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="md:ml-12"
          >
            <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
              <div className="flex-1">
                <motion.p variants={fadeUp} className="text-xs md:text-sm uppercase tracking-widest text-accent-orange font-semibold mb-2">Capítulo 2</motion.p>
                <motion.h3 variants={fadeUp} className="font-heading text-2xl md:text-3xl font-bold mb-6">O conceito de cultura</motion.h3>
                <motion.ul variants={stagger} className="space-y-2.5 text-sm md:text-base leading-relaxed">
                  {['Etnocentrismo e relativismo cultural', 'Padrões culturais', 'Novas concepções de cultura no século XX', 'A crítica pós-modernista ao conceito de cultura'].map((item, i) => (
                    <motion.li key={i} variants={fadeUp} custom={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mt-2 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <motion.img
                variants={fadeUp}
                src="/images/cap2-culture.png"
                alt="Colagem conceito de cultura"
                className="w-full md:w-64 h-auto rounded-xl"
              />
            </div>
          </motion.div>
        </TimelineItem>

        {/* ──── CAPÍTULO 3 ──── */}
        <TimelineItem label="Capítulo 3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="md:ml-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <motion.p variants={fadeUp} className="text-xs md:text-sm uppercase tracking-widest text-accent-orange font-semibold mb-2">Capítulo 3</motion.p>
                <motion.h3 variants={fadeUp} className="font-heading text-2xl md:text-3xl font-bold mb-6">Da estrutura à identidade</motion.h3>
                <motion.ul variants={stagger} className="space-y-2.5 text-sm md:text-base leading-relaxed">
                  {['Função e estrutura social', 'Sistema de trocas (Marcel Mauss)', 'Estruturalismo (Claude Lévi-Strauss)', 'O conceito de etnicidade e minorias étnicas', 'O conceito de identidade e política social'].map((item, i) => (
                    <motion.li key={i} variants={fadeUp} custom={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mt-2 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <motion.img
                variants={fadeUp}
                src="/images/cap3-identity.png"
                alt="Colagem estrutura e identidade"
                className="w-full md:w-56 h-auto rounded-xl"
              />
            </div>
          </motion.div>
        </TimelineItem>
      </section>

      {/* ═══════════ "O QUE VOCE ENCONTRARÁ" ═══════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-heading text-2xl md:text-4xl font-bold text-center mb-12"
        >
          O que você encontrará na plataforma
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { icon: BookOpen, title: 'Resumos', desc: 'Conteúdos organizados de forma clara e didática.' },
            { icon: Users, title: 'Grandes autores', desc: 'Biografias e ideias dos principais pensadores.' },
            { icon: ClipboardCheck, title: 'Exercícios', desc: 'Questões para praticar e fixar o conteúdo.' },
            { icon: Play, title: 'Conteúdo visual', desc: 'Vídeos, infográficos e imagens para aprender mais.' },
          ].map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              custom={i}
              className="bg-white dark:bg-white/[0.03] border border-border-light dark:border-border-dark rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent-orange/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent-orange" />
              </div>
              <h3 className="font-heading font-bold text-base md:text-lg mb-2">{title}</h3>
              <p className="text-xs md:text-sm opacity-60 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════ CTA SECTION ═══════════ */}
      <section className="px-6 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto bg-primary-dark dark:bg-white/[0.06] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden"
        >
          {/* Decorative blurred circle */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent-orange/20 rounded-full blur-3xl pointer-events-none" />

          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 relative z-10">
            Pronto para começar?
          </h2>
          <p className="text-base opacity-70 max-w-md mx-auto mb-8 relative z-10">
            Explore autores, conceitos e conteúdos organizados para facilitar seus estudos.
          </p>
          <Link
            to="/"
            className="relative z-10 inline-flex items-center gap-2 bg-accent-orange hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors"
          >
            Entrar na plataforma <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="border-t border-border-light dark:border-border-dark">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-heading text-sm tracking-tight opacity-40">
            <span className="opacity-60">S</span>ociol<span className="text-accent-orange">o</span>gia
          </span>

          <div className="flex items-center gap-6 text-sm">
            <Link to="/sobre" className="opacity-60 hover:opacity-100 transition-opacity">Sobre</Link>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Ajuda</a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Contato</a>
            <Link to="/" className="opacity-60 hover:opacity-100 transition-opacity">Plataforma</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="opacity-40 hover:opacity-80 transition-opacity" aria-label="Instagram">
              <Camera className="w-4 h-4" />
            </a>
            <a href="#" className="opacity-40 hover:opacity-80 transition-opacity" aria-label="YouTube">
              <Video className="w-4 h-4" />
            </a>
            <a href="#" className="opacity-40 hover:opacity-80 transition-opacity" aria-label="E-mail">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── Timeline Item sub-component ─── */
function TimelineItem({ label, dotActive, children }) {
  return (
    <div className="relative md:pl-6 mb-16 last:mb-0">
      {/* Dot on timeline */}
      <div className="hidden md:block absolute left-6 top-2 -translate-x-1/2">
        <div className={`w-3 h-3 rounded-full border-2 ${dotActive ? 'bg-accent-orange border-accent-orange' : 'bg-primary-light dark:bg-primary-dark border-accent-orange/40'}`} />
      </div>

      {/* Label */}
      <div className="hidden md:block absolute left-0 top-0 -translate-x-full pr-8">
        <span className="text-[0.8rem] md:text-sm font-semibold tracking-wider uppercase opacity-50 whitespace-nowrap">{label}</span>
      </div>

      {children}
    </div>
  );
}

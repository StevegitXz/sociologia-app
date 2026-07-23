import { NavLink, Link } from 'react-router-dom';
import { BookOpen, X, Info, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const chapters = [
  { id: 'intro', title: 'Introdução', num: '0' },
  { id: 'cap1', title: 'O pensamento antropológico', num: '1' },
  { id: 'cap2', title: 'O conceito de cultura', num: '2' },
  { id: 'cap3', title: 'Da estrutura à identidade', num: '3' },
];

export default function Sidebar({ isOpen, onClose, completedChapters = [], completedSections = [] }) {
  return (
    <>
      {/* Mobile overlay with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64
          bg-primary-light dark:bg-primary-dark
          border-r border-border-light dark:border-border-dark
          transform transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
          md:relative md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Brand header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-border-light dark:border-border-dark">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-accent-orange"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="font-heading font-bold text-base tracking-tight">
              Do Seu Jeito
            </span>
          </div>

          <button
            onClick={onClose}
            className="md:hidden p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Fechar menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3 flex flex-col gap-1 mt-2">
          {chapters.map((chap) => {
            const isCompleted = completedChapters.includes(chap.id);
            const hasProgress = completedSections.some(s => s.startsWith(chap.id));

            return (
              <NavLink
                key={chap.id}
                to={chap.id === 'intro' ? '/' : `/capitulo/${chap.id}`}
                end={chap.id === 'intro'}
                onClick={onClose}
                className="group relative block"
              >
                {({ isActive }) => (
                  <div
                    className={`
                      relative flex items-center gap-3 px-4 py-3 rounded-xl
                      transition-all duration-200 font-medium text-[0.9rem]
                      ${isActive
                        ? 'text-accent-orange bg-accent-orange/[0.06]'
                        : 'opacity-65 hover:opacity-100 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] group-hover:translate-x-0.5'}
                    `}
                    style={{ transition: 'all 0.2s ease, transform 0.2s ease' }}
                  >
                    {/* Active indicator bar */}
                    {isActive && (
                      <motion.div
                        layoutId="sidebar-indicator"
                        className="absolute left-0 top-2 bottom-2 w-[3px] bg-accent-orange rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}

                    {/* Chapter number badge / check */}
                    <span
                      className={`
                        w-6 h-6 rounded-md text-[0.7rem] font-semibold flex items-center justify-center flex-shrink-0 transition-colors
                        ${isCompleted
                          ? 'bg-emerald-500 text-white'
                          : isActive
                            ? 'bg-accent-orange text-white'
                            : hasProgress
                              ? 'bg-accent-orange/20 text-accent-orange'
                              : 'bg-accent-orange/10 text-accent-orange'}
                      `}
                    >
                      {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : chap.num}
                    </span>

                    <span className="truncate flex-1">{chap.title}</span>
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Sobre link (mobile) */}
        <div className="px-5 mt-4 sm:hidden">
          <Link
            to="/sobre"
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-medium opacity-50 hover:opacity-100 transition-opacity px-4 py-3"
          >
            <Info className="w-4 h-4" />
            Sobre o Projeto
          </Link>
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-6 left-5 right-5">
          <div className="flex items-center gap-2 opacity-20">
            <div className="flex-1 h-[1px] bg-current" />
            <BookOpen className="w-3 h-3" strokeWidth={1.5} />
            <div className="flex-1 h-[1px] bg-current" />
          </div>
        </div>
      </aside>
    </>
  );
}

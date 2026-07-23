import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, List } from 'lucide-react';

export default function SectionNav({ sections, activeSectionId, onSelectSection, completedSections = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Floating Section Nav (Left Margin) */}
      <div className="hidden xl:block fixed left-6 top-32 z-30 w-56 bg-primary-light/90 dark:bg-primary-dark/90 backdrop-blur-md p-4 rounded-2xl border border-border-light dark:border-border-dark shadow-lg transition-colors">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-border-light dark:border-border-dark">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-orange flex items-center gap-1.5">
            <List className="w-3.5 h-3.5" /> Índice do Capítulo
          </span>
          <span className="text-[0.65rem] font-mono opacity-60">
            {completedSections.filter(id => sections.some(s => s.id === id)).length}/{sections.length}
          </span>
        </div>

        <nav className="flex flex-col gap-1 text-xs">
          {sections.map((sec, idx) => {
            const isActive = activeSectionId === sec.id;
            const isCompleted = completedSections.includes(sec.id);
            const num = String(idx + 1).padStart(2, '0');

            return (
              <button
                key={sec.id}
                onClick={() => onSelectSection(sec.id)}
                className={`
                  group flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left transition-all duration-200
                  ${isActive 
                    ? 'bg-accent-orange/15 text-accent-orange font-semibold translate-x-1' 
                    : 'opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5'}
                `}
              >
                <span className={`
                  w-4 h-4 rounded-full text-[0.6rem] font-bold flex items-center justify-center flex-shrink-0 transition-colors
                  ${isCompleted 
                    ? 'bg-emerald-500 text-white' 
                    : isActive 
                      ? 'bg-accent-orange text-white' 
                      : 'bg-black/10 dark:bg-white/10 opacity-70'}
                `}>
                  {isCompleted ? <Check className="w-2.5 h-2.5 stroke-[3]" /> : num}
                </span>

                <span className="truncate">{sec.heading}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Floating Drawer Trigger */}
      <div className="xl:hidden fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-dark dark:bg-primary-light text-white dark:text-primary-dark px-4 py-2.5 rounded-full shadow-lg text-xs font-bold flex items-center gap-2 transition-transform active:scale-95 border border-white/10"
        >
          <List className="w-4 h-4 text-accent-orange" />
          <span>Índice ({sections.findIndex(s => s.id === activeSectionId) + 1}/{sections.length})</span>
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-4" onClick={() => setIsOpen(false)}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-surface-light dark:bg-surface-dark p-5 rounded-3xl shadow-2xl border border-border-light dark:border-border-dark"
            >
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-border-light dark:border-border-dark">
                <h4 className="font-heading font-bold text-sm text-primary-dark dark:text-white flex items-center gap-2">
                  <List className="w-4 h-4 text-accent-orange" /> Seções do Capítulo
                </h4>
                <button onClick={() => setIsOpen(false)} className="text-xs opacity-60 hover:opacity-100">Fechar</button>
              </div>

              <div className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto pr-1">
                {sections.map((sec, idx) => {
                  const isActive = activeSectionId === sec.id;
                  const isCompleted = completedSections.includes(sec.id);
                  const num = String(idx + 1).padStart(2, '0');

                  return (
                    <button
                      key={sec.id}
                      onClick={() => {
                        onSelectSection(sec.id);
                        setIsOpen(false);
                      }}
                      className={`
                        flex items-center gap-3 p-3 rounded-xl text-left text-sm transition-all
                        ${isActive ? 'bg-accent-orange text-white font-semibold' : 'bg-black/5 dark:bg-white/5 opacity-80'}
                      `}
                    >
                      <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center flex-shrink-0 ${isCompleted ? 'bg-emerald-500 text-white' : 'bg-accent-orange/20 text-accent-orange'}`}>
                        {isCompleted ? <Check className="w-3 h-3 stroke-[3]" /> : num}
                      </span>
                      <span className="truncate">{sec.heading}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}

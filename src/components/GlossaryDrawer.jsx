import { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookMarked, X, Search, Sparkles, CheckCircle2 } from 'lucide-react';
import { chaptersData } from '../data/chapters';

export default function GlossaryDrawer({ discoveredTerms = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all'); // 'all', 'discovered', or chapterId

  // Collect all terms from chaptersData
  const allTerms = useMemo(() => {
    const termMap = new Map();

    Object.entries(chaptersData).forEach(([chapId, chap]) => {
      if (!chap.sections) return;
      chap.sections.forEach((sec) => {
        if (!sec.keyTerms) return;
        sec.keyTerms.forEach((kt) => {
          const key = kt.term.toLowerCase();
          if (!termMap.has(key)) {
            termMap.set(key, {
              ...kt,
              chapterTitle: chap.title.split(':')[0] || chap.title,
              chapterId: chapId
            });
          }
        });
      });
    });

    return Array.from(termMap.values());
  }, []);

  const normalizeText = (str) =>
    (str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  const discoveredSet = useMemo(() => {
    return new Set(discoveredTerms.map((t) => normalizeText(t.term)));
  }, [discoveredTerms]);

  const filteredTerms = useMemo(() => {
    const query = normalizeText(search.trim());

    return allTerms.filter((t) => {
      const termNormalized = normalizeText(t.term);
      const defNormalized = normalizeText(t.definition);

      const matchesSearch =
        !query ||
        termNormalized.includes(query) ||
        defNormalized.includes(query);

      if (!matchesSearch) return false;

      if (selectedFilter === 'discovered') {
        return discoveredSet.has(termNormalized);
      }
      if (selectedFilter !== 'all') {
        return t.chapterId === selectedFilter;
      }
      return true;
    });
  }, [allTerms, search, selectedFilter, discoveredSet]);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-orange/10 hover:bg-accent-orange/20 border border-accent-orange/20 text-accent-orange text-xs font-semibold transition-all active:scale-95"
        title="Abrir Glossário de Conceitos"
      >
        <BookMarked className="w-4 h-4" />
        <span className="hidden sm:inline">Glossário</span>
        <span className="bg-accent-orange text-white px-1.5 py-0.2 rounded-full text-[0.65rem] font-bold">
          {discoveredTerms.length > 0 ? `${discoveredTerms.length}/${allTerms.length}` : allTerms.length}
        </span>
      </button>

      {/* Slide-over Drawer Portaled to document.body to bypass header transform */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[9999] overflow-hidden">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              />

              {/* Panel */}
              <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="w-screen max-w-md bg-primary-light dark:bg-primary-dark border-l border-border-light dark:border-border-dark shadow-2xl p-6 flex flex-col gap-4 text-primary-dark dark:text-white"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-border-light dark:border-border-dark">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-accent-orange/10 text-accent-orange">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base">Glossário de Conceitos</h3>
                        <p className="text-xs opacity-60">
                          {allTerms.length} termos catalogados no curso
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 opacity-70 hover:opacity-100"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Search Input */}
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-2.5 opacity-40" />
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Buscar conceito ou definição..."
                      className="w-full pl-9 pr-8 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-border-light dark:border-border-dark text-xs focus:outline-none focus:border-accent-orange text-primary-dark dark:text-white"
                    />
                    {search && (
                      <button
                        onClick={() => setSearch('')}
                        className="absolute right-2.5 top-2.5 opacity-50 hover:opacity-100"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Filter Tabs */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[0.7rem] font-semibold scrollbar-none">
                    <button
                      onClick={() => setSelectedFilter('all')}
                      className={`px-2.5 py-1 rounded-full transition-colors whitespace-nowrap ${
                        selectedFilter === 'all'
                          ? 'bg-accent-orange text-white'
                          : 'bg-black/5 dark:bg-white/5 opacity-70 hover:opacity-100'
                      }`}
                    >
                      Todos ({allTerms.length})
                    </button>
                    {discoveredTerms.length > 0 && (
                      <button
                        onClick={() => setSelectedFilter('discovered')}
                        className={`px-2.5 py-1 rounded-full transition-colors whitespace-nowrap ${
                          selectedFilter === 'discovered'
                            ? 'bg-accent-orange text-white'
                            : 'bg-black/5 dark:bg-white/5 opacity-70 hover:opacity-100'
                        }`}
                      >
                        Desbloqueados ({discoveredTerms.length})
                      </button>
                    )}
                    {Object.entries(chaptersData).map(([chapId, chap]) => (
                      <button
                        key={chapId}
                        onClick={() => setSelectedFilter(chapId)}
                        className={`px-2.5 py-1 rounded-full transition-colors whitespace-nowrap ${
                          selectedFilter === chapId
                            ? 'bg-accent-orange text-white'
                            : 'bg-black/5 dark:bg-white/5 opacity-70 hover:opacity-100'
                        }`}
                      >
                        {chapId === 'intro' ? 'Intro' : chapId.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  {/* Terms List */}
                  <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3">
                    {filteredTerms.length === 0 ? (
                      <div className="text-center py-12 opacity-60 text-xs flex flex-col items-center gap-2">
                        <BookMarked className="w-8 h-8 stroke-[1.5] text-accent-orange opacity-40" />
                        <p>Nenhum conceito encontrado para "{search}".</p>
                      </div>
                    ) : (
                      filteredTerms.map((term, i) => {
                        const isDiscovered = discoveredSet.has(term.term.toLowerCase());

                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: Math.min(i * 0.02, 0.3) }}
                            className="p-3.5 rounded-2xl bg-black/3 dark:bg-white/3 border border-border-light dark:border-border-dark flex flex-col gap-1.5 relative group hover:border-accent-orange/40 transition-colors"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-heading font-bold text-sm text-accent-orange capitalize">
                                {term.term}
                              </span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[0.65rem] opacity-50 bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded-md font-mono">
                                  {term.chapterTitle}
                                </span>
                                {isDiscovered && (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" title="Termo lido" />
                                )}
                              </div>
                            </div>

                            <p className="text-xs leading-relaxed opacity-85">
                              {term.definition}
                            </p>
                          </motion.div>
                        );
                      })
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PageTransition from '../components/PageTransition';
import { useProgress } from '../hooks/useProgress';

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [fontSize, setFontSize] = useState('normal'); // 'normal', 'lg', 'xl'
  const [isFocusMode, setIsFocusMode] = useState(false);
  const location = useLocation();

  const { progress, markSectionCompleted, saveQuizScore, discoverTerm } = useProgress();

  const toggleFontSize = () => {
    setFontSize((prev) => (prev === 'normal' ? 'lg' : prev === 'lg' ? 'xl' : 'normal'));
  };

  const toggleFocusMode = () => {
    setIsFocusMode((prev) => !prev);
  };

  const fontSizeClass = fontSize === 'lg' ? 'text-lg' : fontSize === 'xl' ? 'text-xl' : '';

  return (
    <div className={`flex h-screen bg-primary-light dark:bg-primary-dark transition-colors duration-500 overflow-hidden ${fontSizeClass}`}>
      {!isFocusMode && (
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
          completedChapters={progress.completedChapters}
          completedSections={progress.completedSections}
        />
      )}

      <div className="flex-1 flex flex-col min-w-0">
        {!isFocusMode && (
          <Header 
            onMenuClick={() => setSidebarOpen(true)}
            discoveredTerms={progress.discoveredTerms}
            fontSize={fontSize}
            onToggleFontSize={toggleFontSize}
            isFocusMode={isFocusMode}
            onToggleFocusMode={toggleFocusMode}
          />
        )}

        <main className={`flex-1 overflow-auto bg-surface-light dark:bg-surface-dark ${!isFocusMode ? 'rounded-tl-3xl shadow-[inset_0_1px_3px_rgba(0,0,0,0.04)] mt-1 ml-0 md:ml-1' : ''} relative transition-colors duration-500`}>
          {isFocusMode && (
            <div className="fixed top-4 right-4 z-50">
              <button
                onClick={toggleFocusMode}
                className="bg-accent-orange text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg"
              >
                Sair do Modo Foco
              </button>
            </div>
          )}

          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <Outlet context={{ progress, markSectionCompleted, saveQuizScore, discoverTerm, fontSize, isFocusMode }} />
            </PageTransition>
          </AnimatePresence>
        </main>
      </div>

      {/* FAB flutuante de menu — visível apenas no mobile quando não em modo foco */}
      {!isFocusMode && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
          onClick={() => setSidebarOpen(true)}
          className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent-orange text-white shadow-lg shadow-accent-orange/30 flex items-center justify-center active:scale-95 transition-transform"
          aria-label="Abrir menu de navegação"
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}

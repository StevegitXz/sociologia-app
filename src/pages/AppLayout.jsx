import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PageTransition from '../components/PageTransition';

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-primary-light dark:bg-primary-dark transition-colors duration-500 overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-auto bg-surface-light dark:bg-surface-dark rounded-tl-3xl shadow-[inset_0_1px_3px_rgba(0,0,0,0.04)] mt-1 ml-0 md:ml-1 relative transition-colors duration-500">
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </main>
      </div>

      {/* FAB flutuante de menu — visível apenas no mobile */}
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
    </div>
  );
}

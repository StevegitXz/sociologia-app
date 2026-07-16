import { useTheme } from '../hooks/useTheme';
import { Moon, Sun, Menu, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Platform header with:
 * - Hamburger menu on mobile
 * - Brand name
 * - Link to "Sobre" page
 * - Animated theme toggle
 * - Bottom orange accent line
 */
export default function Header({ onMenuClick }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 28, delay: 0.1 }}
      className="sticky top-0 z-40 w-full"
    >
      {/* Main bar */}
      <div className="backdrop-blur-lg bg-primary-light/70 dark:bg-primary-dark/70 transition-colors duration-500">
        <div className="flex h-16 items-center justify-between px-5 md:px-8">
          {/* Left side: hamburger + brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={onMenuClick}
              className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200"
              aria-label="Abrir menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <span className="font-heading font-bold text-base tracking-tight select-none">
              <span className="opacity-40">S</span>ociol<span className="text-accent-orange">o</span>gia
            </span>
          </div>

          {/* Right side: nav links + theme toggle */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              to="/sobre"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
            >
              <Info className="w-3.5 h-3.5" />
              Sobre
            </Link>

            <span
              className="hidden md:block text-[0.7rem] font-heading uppercase tracking-[0.25em] opacity-20 select-none"
              style={{ fontVariant: 'all-small-caps' }}
            >
              Do Seu Jeito
            </span>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200"
              aria-label="Alternar tema"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {theme === 'dark' ? (
                  <Sun className="w-[1.15rem] h-[1.15rem] text-amber-400" />
                ) : (
                  <Moon className="w-[1.15rem] h-[1.15rem] text-slate-500" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="flex justify-start px-5 md:px-8">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-[1px] w-12 bg-accent-orange origin-left"
        />
      </div>
    </motion.header>
  );
}

import { motion } from 'framer-motion';
import { Lightbulb, BookmarkCheck, Sparkles, Compass, Eye, ShieldAlert, Cpu } from 'lucide-react';

const iconMap = {
  lightbulb: Lightbulb,
  compass: Compass,
  eye: Eye,
  shield: ShieldAlert,
  cpu: Cpu,
  bookmark: BookmarkCheck,
  default: Sparkles
};

const colorStyles = {
  orange: {
    badge: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
    border: 'border-l-4 border-l-orange-500 border-t border-r border-b border-orange-500/10',
    bg: 'bg-gradient-to-br from-orange-500/5 via-amber-500/5 to-transparent',
    iconBg: 'bg-orange-500 text-white',
    title: 'text-orange-600 dark:text-orange-400',
    highlight: 'bg-orange-500/10 text-orange-700 dark:text-orange-300'
  },
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    border: 'border-l-4 border-l-emerald-500 border-t border-r border-b border-emerald-500/10',
    bg: 'bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-transparent',
    iconBg: 'bg-emerald-500 text-white',
    title: 'text-emerald-600 dark:text-emerald-400',
    highlight: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
  },
  violet: {
    badge: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
    border: 'border-l-4 border-l-violet-500 border-t border-r border-b border-violet-500/10',
    bg: 'bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-transparent',
    iconBg: 'bg-violet-500 text-white',
    title: 'text-violet-600 dark:text-violet-400',
    highlight: 'bg-violet-500/10 text-violet-700 dark:text-violet-300'
  },
  cyan: {
    badge: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    border: 'border-l-4 border-l-cyan-500 border-t border-r border-b border-cyan-500/10',
    bg: 'bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-transparent',
    iconBg: 'bg-cyan-500 text-white',
    title: 'text-cyan-600 dark:text-cyan-400',
    highlight: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300'
  }
};

export default function MemoryAnchor({ anchor, color = 'orange' }) {
  if (!anchor) return null;

  const style = colorStyles[color] || colorStyles.orange;
  const IconComponent = iconMap[anchor.icon] || iconMap.default;

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl p-5 sm:p-6 shadow-lg ${style.border} ${style.bg} backdrop-blur-md relative overflow-hidden group`}
    >
      {/* Top Badge */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${style.badge}`}>
          <Sparkles className="w-3.5 h-3.5" />
          <span>Marcador de Memória</span>
        </span>
        <span className="text-[0.65rem] font-mono opacity-50 uppercase tracking-widest">
          Guarde Isso!
        </span>
      </div>

      {/* Anchor Content */}
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl shadow-md ${style.iconBg} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-5 h-5" />
        </div>

        <div className="flex flex-col gap-1.5 flex-1">
          <h4 className={`font-heading font-bold text-base sm:text-lg ${style.title}`}>
            {anchor.title}
          </h4>

          {/* Punchy Phrase */}
          {anchor.phrase && (
            <p className="text-sm sm:text-base font-semibold leading-snug text-primary-dark dark:text-white">
              "{anchor.phrase}"
            </p>
          )}

          {/* Visual Metaphor / Explanation */}
          {anchor.metaphor && (
            <div className={`mt-2 p-3 rounded-xl text-xs sm:text-sm leading-relaxed ${style.highlight}`}>
              <strong className="block mb-0.5">💡 Metáfora de Fixação:</strong>
              {anchor.metaphor}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';

/**
 * Decorative animated background with minimalist geometric elements.
 * Uses subtle orange-tinted shapes (lines, circles, dots) floating gently.
 */
export default function AnimatedBackground({ variant = 'landing' }) {
  if (variant === 'landing') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Large gradient circle — top right */}
        <motion.div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating thin lines */}
        <motion.div
          className="absolute top-[20%] left-[10%] w-24 h-[1px] bg-accent-orange/20"
          animate={{ x: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[60%] right-[15%] w-32 h-[1px] bg-accent-orange/15 rotate-45"
          animate={{ x: [0, -20, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[20%] w-16 h-[1px] bg-accent-orange/20 -rotate-12"
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Small floating circles */}
        <motion.div
          className="absolute top-[35%] right-[25%] w-3 h-3 rounded-full border border-accent-orange/20"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[30%] w-2 h-2 rounded-full bg-accent-orange/15"
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.div
          className="absolute top-[70%] left-[60%] w-4 h-4 rounded-full border border-accent-orange/10"
          animate={{ y: [0, -18, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />

        {/* Dot grid pattern — subtle */}
        <div className="absolute bottom-[10%] right-[8%] grid grid-cols-4 gap-3 opacity-20">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-accent-orange"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Large gradient circle — bottom left */}
        <motion.div
          className="absolute -bottom-48 -left-48 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>
    );
  }

  // Subtle variant for inner pages
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute -top-24 -right-24 w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.03) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
    </div>
  );
}

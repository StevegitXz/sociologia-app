import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function Quiz({ questions }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [completed, setCompleted] = useState(false);

  if (!questions || questions.length === 0) return null;

  const currentQ = questions[currentIdx];
  const isCorrect = selected === currentQ.correct;
  const isLast = currentIdx === questions.length - 1;

  const handleSelect = (idx) => {
    if (isAnswered) return;
    setSelected(idx);
    setIsAnswered(true);
  };

  const nextQuestion = () => {
    if (isLast) {
      setCompleted(true);
      return;
    }
    setSelected(null);
    setIsAnswered(false);
    setCurrentIdx((prev) => prev + 1);
  };

  /* ── Completed state ── */
  if (completed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl p-10 sm:p-14 text-center"
        style={{
          background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)',
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <p className="text-white text-2xl sm:text-3xl font-heading font-bold mb-2">
            🎉 Parabéns!
          </p>
          <p className="text-white/80 text-base sm:text-lg">
            Você concluiu todas as questões deste capítulo.
          </p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white dark:bg-white/[0.03] p-6 sm:p-8 rounded-2xl shadow-sm border border-black/[0.06] dark:border-white/[0.06]">
      {/* ── Progress dots ── */}
      <div className="flex gap-2 mb-8">
        {questions.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentIdx
                ? 'bg-accent-orange scale-110'
                : i < currentIdx
                  ? 'bg-accent-orange/40'
                  : 'border-2 border-black/15 dark:border-white/20 bg-transparent'
            }`}
          />
        ))}
      </div>

      {/* ── Question ── */}
      <AnimatePresence mode="wait">
        <motion.h3
          key={currentIdx}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.3 }}
          className="font-heading text-xl font-semibold mb-8 text-primary-dark dark:text-white"
        >
          {currentQ.question}
        </motion.h3>
      </AnimatePresence>

      {/* ── Options ── */}
      <div className="flex flex-col gap-3">
        {currentQ.options.map((opt, idx) => {
          /* Determine visual state */
          let stateClasses =
            'border-black/10 dark:border-white/10 hover:border-accent-orange';
          let Icon = null;
          let animateProps = {};

          if (isAnswered) {
            if (idx === currentQ.correct) {
              stateClasses = 'bg-green-50 dark:bg-green-900/20 border-green-400';
              Icon = <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />;
              animateProps = { scale: [1, 1.05, 1], transition: { duration: 0.4 } };
            } else if (idx === selected) {
              stateClasses = 'bg-red-50 dark:bg-red-900/20 border-red-400';
              Icon = <XCircle className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0" />;
              animateProps = { x: [0, -6, 6, -4, 4, 0], transition: { duration: 0.4 } };
            } else {
              stateClasses = 'opacity-40';
            }
          }

          return (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, ...animateProps }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
              className={`text-left border-2 rounded-xl p-4 transition-colors duration-200 flex items-center justify-between gap-4 ${stateClasses}`}
            >
              <span className="flex-1">{opt}</span>
              {Icon}
            </motion.button>
          );
        })}
      </div>

      {/* ── Next button ── */}
      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-8 flex justify-end"
          >
            <button
              onClick={nextQuestion}
              className="bg-accent-orange text-white px-6 py-3 rounded-xl font-semibold hover:brightness-110 active:scale-[0.97] transition-all"
            >
              {isLast ? 'Finalizar' : 'Próxima Questão'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

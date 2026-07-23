import { useState } from 'react';
import { useParams, useNavigate, Link, useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Brain, HelpCircle, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import { chaptersData } from '../data/chapters';
import MediaCenter from '../components/MediaCenter';
import Quiz from '../components/Quiz';

export default function ChapterActivitiesPage({ chapterId: defaultId }) {
  const params = useParams();
  const navigate = useNavigate();
  const id = defaultId || params.id || 'intro';

  const data = chaptersData[id] || chaptersData['intro'];
  const [activeTab, setActiveTab] = useState('quiz'); // 'quiz', 'mindmap', 'summary'

  const outletContext = useOutletContext() || {};
  const { progress, saveQuizScore } = outletContext;

  const quizResult = progress?.quizScores?.[id];

  // Generate executive summary from section keyTerms & pullQuotes
  const summaryPoints = data.sections?.flatMap((sec) => [
    { title: sec.heading, text: sec.pullQuote },
    ...(sec.keyTerms || []).map((kt) => ({ title: kt.term, text: kt.definition }))
  ]) || [];

  return (
    <div className="relative pb-24 max-w-[1200px] mx-auto w-full px-5 sm:px-8 lg:px-12 pt-8">
      {/* Header & Back Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-border-light dark:border-border-dark">
        <button
          onClick={() => navigate(id === 'intro' ? '/' : `/capitulo/${id}`)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-orange hover:opacity-80 transition-opacity w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para Leitura do Capítulo</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono opacity-60 uppercase tracking-widest bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full">
            Central de Atividades
          </span>
        </div>
      </div>

      {/* Chapter Title Banner */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark dark:text-white mb-3">
          Prática e Fixação: {data.title}
        </h1>
        <p className="text-sm sm:text-base opacity-75 leading-relaxed">
          Testes de conhecimento, mapas de conceitos e resumos em tópicos para consolidar o que você aprendeu.
        </p>

        {quizResult && (
          <div className="mt-4 inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold border border-emerald-500/20">
            <CheckCircle2 className="w-4 h-4" />
            <span>Última pontuação no Quiz: {quizResult.score}/{quizResult.total} acertos</span>
          </div>
        )}
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all ${
            activeTab === 'quiz'
              ? 'bg-accent-orange text-white shadow-lg shadow-accent-orange/20 scale-105'
              : 'bg-black/5 dark:bg-white/5 opacity-70 hover:opacity-100 text-primary-dark dark:text-white'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Quiz Fixador ({data.quiz?.length || 0})</span>
        </button>

        <button
          onClick={() => setActiveTab('mindmap')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all ${
            activeTab === 'mindmap'
              ? 'bg-accent-orange text-white shadow-lg shadow-accent-orange/20 scale-105'
              : 'bg-black/5 dark:bg-white/5 opacity-70 hover:opacity-100 text-primary-dark dark:text-white'
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>Mapa de Conceitos</span>
        </button>

        <button
          onClick={() => setActiveTab('summary')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all ${
            activeTab === 'summary'
              ? 'bg-accent-orange text-white shadow-lg shadow-accent-orange/20 scale-105'
              : 'bg-black/5 dark:bg-white/5 opacity-70 hover:opacity-100 text-primary-dark dark:text-white'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Resumo em Tópicos</span>
        </button>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <Quiz 
              questions={data.quiz} 
              onCompleteScore={(score, total) => saveQuizScore && saveQuizScore(id, score, total)}
            />
          </motion.div>
        )}

        {activeTab === 'mindmap' && (
          <motion.div
            key="mindmap"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {data.mindmap ? (
              <MediaCenter mindmap={data.mindmap} />
            ) : (
              <p className="text-center opacity-60 py-12">Nenhum mapa mental disponível para este capítulo.</p>
            )}
          </motion.div>
        )}

        {activeTab === 'summary' && (
          <motion.div
            key="summary"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {summaryPoints.map((pt, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-black/3 dark:bg-white/3 border border-border-light dark:border-border-dark flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent-orange flex-shrink-0" />
                  <h4 className="font-heading font-bold text-base text-accent-orange capitalize">
                    {pt.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed opacity-85 text-primary-dark dark:text-gray-200">
                  {pt.text}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Navigation Back */}
      <div className="mt-16 text-center">
        <Link
          to={id === 'intro' ? '/' : `/capitulo/${id}`}
          className="inline-flex items-center gap-2 bg-black/5 dark:bg-white/5 hover:bg-accent-orange hover:text-white px-6 py-3 rounded-full text-sm font-bold transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a Leitura do Capítulo</span>
        </Link>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'sociologia_app_progress_v1';

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load progress', e);
    }
    return {
      completedSections: [],
      completedChapters: [],
      quizScores: {},
      discoveredTerms: []
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  }, [progress]);

  const markSectionCompleted = (sectionId, chapterId, totalSectionsInChapter) => {
    setProgress((prev) => {
      const nextSections = prev.completedSections.includes(sectionId)
        ? prev.completedSections
        : [...prev.completedSections, sectionId];

      // Check if all sections in this chapter are completed
      let nextChapters = prev.completedChapters;
      if (chapterId && totalSectionsInChapter) {
        const chapterSectionCount = nextSections.filter(s => s.startsWith(chapterId)).length;
        if (chapterSectionCount >= totalSectionsInChapter && !nextChapters.includes(chapterId)) {
          nextChapters = [...nextChapters, chapterId];
        }
      }

      return {
        ...prev,
        completedSections: nextSections,
        completedChapters: nextChapters
      };
    });
  };

  const saveQuizScore = (chapterId, score, total) => {
    setProgress((prev) => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [chapterId]: { score, total, timestamp: Date.now() }
      }
    }));
  };

  const discoverTerm = (termObj) => {
    if (!termObj || !termObj.term) return;
    setProgress((prev) => {
      const exists = prev.discoveredTerms.some(
        (t) => t.term.toLowerCase() === termObj.term.toLowerCase()
      );
      if (exists) return prev;
      return {
        ...prev,
        discoveredTerms: [...prev.discoveredTerms, termObj]
      };
    });
  };

  return {
    progress,
    markSectionCompleted,
    saveQuizScore,
    discoverTerm
  };
}

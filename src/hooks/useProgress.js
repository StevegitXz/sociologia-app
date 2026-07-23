import { useState, useEffect, useCallback } from 'react';

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

  const markSectionCompleted = useCallback((sectionId, chapterId, totalSectionsInChapter) => {
    setProgress((prev) => {
      const alreadyCompleted = prev.completedSections.includes(sectionId);
      
      // Calculate next sections
      const nextSections = alreadyCompleted
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

      // If nothing changed, return prev unchanged to prevent re-render loop
      if (alreadyCompleted && nextChapters === prev.completedChapters) {
        return prev;
      }

      return {
        ...prev,
        completedSections: nextSections,
        completedChapters: nextChapters
      };
    });
  }, []);

  const saveQuizScore = useCallback((chapterId, score, total) => {
    setProgress((prev) => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [chapterId]: { score, total, timestamp: Date.now() }
      }
    }));
  }, []);

  const discoverTerm = useCallback((termObj) => {
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
  }, []);

  return {
    progress,
    markSectionCompleted,
    saveQuizScore,
    discoverTerm
  };
}

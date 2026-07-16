import { useState, useEffect } from 'react';

export function useProgress(chapterId) {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(`progress_${chapterId}`);
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`progress_${chapterId}`, progress);
  }, [progress, chapterId]);

  return { progress, setProgress };
}

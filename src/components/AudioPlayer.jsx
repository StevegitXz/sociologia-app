import { useState, useEffect } from 'react';
import { Volume2, Pause, RotateCcw } from 'lucide-react';

export default function AudioPlayer({ text }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
    }

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (!isSupported || !text) return;

    const synth = window.speechSynthesis;

    if (isPlaying) {
      synth.pause();
      setIsPlaying(false);
    } else {
      if (synth.paused) {
        synth.resume();
        setIsPlaying(true);
      } else {
        synth.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        utterance.rate = rate;

        utterance.onend = () => {
          setIsPlaying(false);
        };

        utterance.onerror = () => {
          setIsPlaying(false);
        };

        synth.speak(utterance);
        setIsPlaying(true);
      }
    }
  };

  const handleReset = () => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const toggleRate = () => {
    const nextRate = rate === 1 ? 1.25 : rate === 1.25 ? 1.5 : 1;
    setRate(nextRate);
    if (isPlaying) {
      handleReset();
    }
  };

  if (!isSupported) return null;

  return (
    <div className="inline-flex items-center gap-2 bg-accent-orange/10 dark:bg-accent-orange/20 px-3 py-1.5 rounded-full border border-accent-orange/20 text-xs font-semibold text-accent-orange transition-all hover:bg-accent-orange/20">
      <button
        onClick={handlePlayPause}
        className="flex items-center gap-1.5 hover:opacity-80 transition-opacity focus:outline-none"
        title={isPlaying ? "Pausar leitura" : "Ouvir esta seção"}
      >
        {isPlaying ? (
          <>
            <Pause className="w-3.5 h-3.5 animate-pulse" />
            <span>Pausar</span>
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5" />
            <span>Ouvir Seção</span>
          </>
        )}
      </button>

      {isPlaying && (
        <>
          <span className="w-px h-3 bg-accent-orange/30" />
          <button
            onClick={handleReset}
            className="hover:opacity-80 transition-opacity"
            title="Reiniciar leitura"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </>
      )}

      <span className="w-px h-3 bg-accent-orange/30" />
      <button
        onClick={toggleRate}
        className="font-mono text-[0.65rem] hover:opacity-80 transition-opacity min-w-[2.2rem] text-center"
        title="Alternar velocidade"
      >
        {rate}x
      </button>
    </div>
  );
}

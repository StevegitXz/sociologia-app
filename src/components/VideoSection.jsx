import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronDown, Video } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function VideoSection({ videos }) {
  const [expandedId, setExpandedId] = useState(null);

  if (!videos || videos.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-6" id="video-section">
      <ScrollReveal direction="up" delay={0}>
        <div className="flex items-center gap-2 mb-2">
          <Video className="w-6 h-6 text-accent-orange" />
          <h2 className="font-heading text-2xl font-semibold text-primary-dark dark:text-white">
            Vídeos Auxiliares
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((video, idx) => {
          const isExpanded = expandedId === video.id;

          return (
            <ScrollReveal key={video.id} direction="up" delay={idx * 0.1} className={isExpanded ? "md:col-span-2" : ""}>
              <motion.div
                layout
                className={`overflow-hidden rounded-2xl shadow-sm border ${isExpanded ? 'border-accent-orange' : 'border-black/[0.06] dark:border-white/[0.06]'} bg-white dark:bg-white/[0.03] transition-colors`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : video.id)}
                  className="w-full p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center text-left hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center">
                    <Play className="w-5 h-5 text-accent-orange ml-1" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg text-primary-dark dark:text-white mb-1">
                      {video.title}
                    </h3>
                    <p className="text-sm text-primary-dark/70 dark:text-white/70 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 sm:ml-auto"
                  >
                    <ChevronDown className="w-5 h-5 text-primary-dark/40 dark:text-white/40" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-4 pt-0">
                        <div className="w-full aspect-video rounded-xl overflow-hidden bg-black">
                          <iframe
                            src={video.url}
                            title={video.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}

import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useTheme } from '../hooks/useTheme';
import ScrollReveal from './ScrollReveal';

export default function MediaCenter({ videoUrl, mindmap }) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-10">
      {/* ── Video ── */}
      {videoUrl && (
        <ScrollReveal direction="up" delay={0}>
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent-orange mb-3">
            ▶ Vídeo Recomendado
          </span>
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-black/[0.06] dark:border-white/[0.06]">
            <iframe
              src={videoUrl}
              title="Vídeo Recomendado"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </ScrollReveal>
      )}

      {/* ── Mindmap ── */}
      {mindmap && (
        <ScrollReveal direction="up" delay={0.15}>
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent-orange mb-3">
            ◈ Mapa Mental
          </span>
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-sm border border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-gray-900">
            <ReactFlow
              nodes={mindmap.nodes}
              edges={mindmap.edges}
              fitView
              colorMode={theme === 'dark' ? 'dark' : 'light'}
            >
              <Controls />
              <Background color={theme === 'dark' ? '#fff' : '#000'} gap={16} />
            </ReactFlow>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}

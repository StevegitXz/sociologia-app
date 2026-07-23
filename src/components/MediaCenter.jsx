import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useTheme } from '../hooks/useTheme';
import ScrollReveal from './ScrollReveal';

export default function MediaCenter({ mindmap }) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-10">
      {/* ── Mindmap ── */}
      {mindmap && (
        <ScrollReveal direction="up" delay={0.15}>
          <h2 className="font-heading text-2xl font-semibold mb-6 text-primary-dark dark:text-white">
            ◈ Mapa de Conceitos
          </h2>
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

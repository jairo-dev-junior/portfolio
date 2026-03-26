import React from 'react';
import { backendTech, frontendTech, techIcons } from '../config/tech';

interface StackCarouselProps {
  title: string;
}

const allTech = [...backendTech, ...frontendTech];

export function StackCarousel({ title }: StackCarouselProps) {
  const loop = [...allTech, ...allTech];

  return (
    <section id="tecnologias" className="parallax-section relative border-b border-slate-300/80 py-12 dark:border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">{title}</h2>
        <div className="overflow-hidden py-4">
          <div className="flex min-w-max animate-[marquee_25s_linear_infinite] items-center gap-6">
            {loop.map((item, index) => {
              const Icon = techIcons[item];
              return (
                <span key={`${item}-${index}`} className="inline-flex items-center gap-2 text-[24px] font-medium text-slate-700 dark:text-slate-200">
                  {Icon ? <Icon className="h-8 w-8 text-cyan-700 dark:text-cyan-300" /> : null}
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackCarousel;

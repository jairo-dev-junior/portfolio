import React from 'react';
import { TechnologyGroup } from './TechnologyGroup';
import { backendTech, frontendTech } from '../config/tech';

interface TechnologiesProps {
  title: string;
  backendLabel: string;
  frontendLabel: string;
}

export function Technologies({ title, backendLabel, frontendLabel }: TechnologiesProps) {
  return (
    <section id="tecnologias" className="relative border-b border-slate-800/80 scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-[180px_1fr]">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">{title}</h2>
        <div className="space-y-5">
          <TechnologyGroup title={backendLabel} items={backendTech} />
          <TechnologyGroup title={frontendLabel} items={frontendTech} />
        </div>
      </div>
    </section>
  );
}

export default Technologies;

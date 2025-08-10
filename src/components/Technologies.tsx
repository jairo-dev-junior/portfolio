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
    <section id="tecnologias" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="mb-6 text-center text-xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white/60 p-8 shadow-sm backdrop-blur dark:bg-slate-900/50">
            <TechnologyGroup title={backendLabel} items={backendTech} />
          </div>
          <div className="rounded-3xl bg-white/60 p-8 shadow-sm backdrop-blur dark:bg-slate-900/50">
            <TechnologyGroup title={frontendLabel} items={frontendTech} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Technologies; 
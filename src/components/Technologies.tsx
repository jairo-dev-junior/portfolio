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
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">{title}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-violet-500/20 bg-[#151624] p-5">
            <TechnologyGroup title={backendLabel} items={backendTech} />
          </div>
          <div className="rounded-2xl border border-violet-500/20 bg-[#151624] p-5">
            <TechnologyGroup title={frontendLabel} items={frontendTech} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;

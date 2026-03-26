import React from 'react';
import { techIcons } from '../config/tech';

export interface TechnologyGroupProps {
  title: string;
  items: string[];
}

export function TechnologyGroup({ title, items }: TechnologyGroupProps) {
  return (
    <div>
      <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-fuchsia-300">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const Icon = techIcons[item];
          return (
            <span key={item} className="inline-flex items-center gap-1.5 border border-slate-700/90 px-2 py-1 text-[11px] text-slate-200">
              {Icon ? <Icon className="h-3 w-3 text-cyan-300" aria-hidden="true" /> : null}
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default TechnologyGroup;

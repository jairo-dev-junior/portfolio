import React from 'react';
import { techIcons } from '../config/tech';

export interface TechnologyGroupProps {
  title: string;
  items: string[];
}

export function TechnologyGroup({ title, items }: TechnologyGroupProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-200">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map(item => {
          const Icon = techIcons[item];
          return (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full bg-slate-100/70 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
            >
              {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default TechnologyGroup; 
import React from 'react';
import { techIcons } from '../config/tech';

export interface TechnologyGroupProps {
  title: string;
  items: string[];
}

export function TechnologyGroup({ title, items }: TechnologyGroupProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-slate-100">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const Icon = techIcons[item];
          return (
            <span key={item} className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-[#10121b] px-2 py-1 text-xs text-slate-200">
              {Icon ? <Icon className="h-3.5 w-3.5" aria-hidden="true" /> : null}
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default TechnologyGroup;

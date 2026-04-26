import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import type { Locale } from '../hooks/useLocale';

interface HeaderProps {
  downloadCVLabel: string;
  isDark: boolean;
  toggleTheme: () => void;
  locale: Locale;
  setLocale: (l: Locale) => void;
}

export function Header({ downloadCVLabel, isDark, toggleTheme, locale, setLocale }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-cyan-600/20 bg-slate-100/80 backdrop-blur-xl dark:border-cyan-400/20 dark:bg-[#090910]/80">
      <div className="relative mx-auto flex max-w-6xl items-center justify-end px-4 py-3">
        <a href="/" className="absolute left-1/2 -translate-x-1/2 text-center font-mono text-sm uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-200">
          JAIRO JR SOFTWARE ENGINEER
        </a>

        <div className="flex items-center gap-2">
          <button aria-label="Português" onClick={() => setLocale('pt')} className={`rounded border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${locale === 'pt' ? 'border-cyan-500 text-cyan-700 dark:border-cyan-300 dark:text-cyan-200' : 'border-slate-400 text-slate-600 dark:border-slate-700 dark:text-slate-300'}`}>
            PT
          </button>
          <button aria-label="English" onClick={() => setLocale('en')} className={`rounded border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${locale === 'en' ? 'border-cyan-500 text-cyan-700 dark:border-cyan-300 dark:text-cyan-200' : 'border-slate-400 text-slate-600 dark:border-slate-700 dark:text-slate-300'}`}>
            ENG
          </button>
          <a href="/Curriculo_Jairo_Junior.pdf" className="hidden border border-fuchsia-500/50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fuchsia-700 dark:text-fuchsia-200 md:inline" download>
            {downloadCVLabel}
          </a>
          <button aria-label="Alternar tema" onClick={toggleTheme} className="inline-flex h-7 w-7 items-center justify-center border border-slate-500 text-slate-700 dark:border-slate-600 dark:text-slate-300">
            {isDark ? <FiSun className="h-3.5 w-3.5" /> : <FiMoon className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

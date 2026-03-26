import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { FiMoon, FiSun } from 'react-icons/fi';
import type { Locale } from '../hooks/useLocale';

interface HeaderProps {
  labels: { sobre: string; tecnologias: string; projetos: string; carreira: string; contatos: string };
  downloadCVLabel: string;
  isDark: boolean;
  toggleTheme: () => void;
  locale: Locale;
  setLocale: (l: Locale) => void;
  onNavigate: (href: string) => void;
}

export function Header({ labels, downloadCVLabel, isDark, toggleTheme, locale, setLocale, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-violet-500/20 bg-[#0f1017]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" className="text-base font-semibold text-violet-200">Jairo Junior</a>

        <nav className="hidden items-center gap-5 text-sm md:flex">
          {[
            { href: '#sobre', label: labels.sobre },
            { href: '#tecnologias', label: labels.tecnologias },
            { href: '#projetos', label: labels.projetos },
            { href: '#carreira', label: labels.carreira },
            { href: '#contatos', label: labels.contatos }
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(link.href);
              }}
              className="text-slate-300 transition hover:text-violet-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Português" onClick={() => setLocale('pt')} className={`rounded p-1 ${locale === 'pt' ? 'ring-1 ring-violet-300' : ''}`}>
            <ReactCountryFlag svg countryCode="BR" style={{ width: '18px', height: '18px' }} aria-label="Português" />
          </button>
          <button aria-label="English" onClick={() => setLocale('en')} className={`rounded p-1 ${locale === 'en' ? 'ring-1 ring-violet-300' : ''}`}>
            <ReactCountryFlag svg countryCode="US" style={{ width: '18px', height: '18px' }} aria-label="English" />
          </button>
          <a href="/Curriculo_Jairo_Junior.pdf" className="hidden rounded border border-violet-400/40 px-3 py-1 text-xs text-violet-100 md:inline" download>
            {downloadCVLabel}
          </a>
          <button aria-label="Alternar tema" onClick={toggleTheme} className="inline-flex h-8 w-8 items-center justify-center rounded border border-slate-600 text-slate-300">
            {isDark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

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
    <header className="sticky top-0 z-20 border-b border-cyan-400/20 bg-[#090910]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-200">Jairo Junior</a>

        <nav className="hidden items-center gap-5 md:flex">
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
              className="text-xs uppercase tracking-[0.12em] text-slate-300 transition hover:text-fuchsia-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Português" onClick={() => setLocale('pt')} className={`rounded p-1 ${locale === 'pt' ? 'ring-1 ring-cyan-300/70' : ''}`}>
            <ReactCountryFlag svg countryCode="BR" style={{ width: '16px', height: '16px' }} aria-label="Português" />
          </button>
          <button aria-label="English" onClick={() => setLocale('en')} className={`rounded p-1 ${locale === 'en' ? 'ring-1 ring-cyan-300/70' : ''}`}>
            <ReactCountryFlag svg countryCode="US" style={{ width: '16px', height: '16px' }} aria-label="English" />
          </button>
          <a href="/Curriculo_Jairo_Junior.pdf" className="hidden border border-fuchsia-400/50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fuchsia-200 md:inline" download>
            {downloadCVLabel}
          </a>
          <button aria-label="Alternar tema" onClick={toggleTheme} className="inline-flex h-7 w-7 items-center justify-center border border-slate-600 text-slate-300">
            {isDark ? <FiSun className="h-3.5 w-3.5" /> : <FiMoon className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import { motion } from 'framer-motion';
import ReactCountryFlag from 'react-country-flag';
import { FiMoon, FiSun } from 'react-icons/fi';
import type { Locale } from '../hooks/useLocale';

interface HeaderProps {
  labels: { sobre: string; tecnologias: string; carreira: string; contatos: string };
  downloadCVLabel: string;
  isDark: boolean;
  toggleTheme: () => void;
  locale: Locale;
  setLocale: (l: Locale) => void;
  onNavigate: (href: string) => void;
}

export function Header({ labels, downloadCVLabel, isDark, toggleTheme, locale, setLocale, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-white/60 backdrop-blur-md dark:bg-[#0b0d12]/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/" className="group flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.06, rotate: 2 }} whileTap={{ scale: 0.98 }} className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-[color:var(--color-primary)] transition">
            <img src="/images/perfil.jpeg" alt="Perfil" className="h-full w-full object-cover" />
          </motion.div>
          <div className="text-lg font-bold">
            <span className="bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-accent)] bg-clip-text text-transparent">Jairo Junior</span>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {[
            { href: '#sobre', label: labels.sobre },
            { href: '#tecnologias', label: labels.tecnologias },
            { href: '#carreira', label: labels.carreira },
            { href: '#contatos', label: labels.contatos }
          ].map(link => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); onNavigate(link.href); }}
              whileTap={{ scale: 0.94 }}
              whileHover={{ y: -1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="text-slate-600 transition hover:text-[color:var(--color-primary)] dark:text-slate-300 dark:hover:text-[color:var(--color-accent)]"
            >
              {link.label}
            </motion.a>
          ))}
          <div className="mx-2 h-5 w-px bg-slate-200 dark:bg-slate-700"/>
          <div className="flex items-center gap-2">
            <button aria-label="Português" onClick={() => setLocale('pt')} className={`inline-flex items-center justify-center rounded-full ring-1 ring-slate-200 p-1 transition hover:ring-[color:var(--color-primary)] dark:ring-slate-700 ${locale==='pt' ? 'ring-[color:var(--color-primary)]' : ''}`}>
              <ReactCountryFlag svg countryCode="BR" style={{ width: '20px', height: '20px', borderRadius: '9999px' }} aria-label="Português" />
            </button>
            <button aria-label="English" onClick={() => setLocale('en')} className={`inline-flex items-center justify-center rounded-full ring-1 ring-slate-200 p-1 transition hover:ring-[color:var(--color-primary)] dark:ring-slate-700 ${locale==='en' ? 'ring-[color:var(--color-primary)]' : ''}`}>
              <ReactCountryFlag svg countryCode="US" style={{ width: '20px', height: '20px', borderRadius: '9999px' }} aria-label="English" />
            </button>
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/Curriculo_Jairo_Junior.pdf"
            className="hidden rounded-full bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-accent)] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:opacity-95 active:opacity-90 md:inline"
            download
          >
            {downloadCVLabel}
          </a>
          <button
            aria-label="Alternar tema"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            {isDark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header; 
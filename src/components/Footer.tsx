import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-slate-300/80 py-6 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-slate-500 dark:border-slate-800/80">
      <p>&copy; {new Date().getFullYear()} Jairo Junior</p>
    </footer>
  );
}

export default Footer;

import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 text-center text-xs text-slate-600 dark:text-slate-400">
      <div className="mx-auto max-w-7xl px-4">
        <p>&copy; {new Date().getFullYear()} Jairo Junior. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
export default Footer; 
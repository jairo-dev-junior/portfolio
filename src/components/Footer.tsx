import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 text-center text-xs text-slate-500">
      <div className="mx-auto max-w-5xl px-4">
        <p>&copy; {new Date().getFullYear()} Jairo Junior.</p>
      </div>
    </footer>
  );
}

export default Footer;

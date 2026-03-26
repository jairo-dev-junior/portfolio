import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  btnView: string;
  btnSite: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative flex min-h-[calc(100vh-60px)] items-center border-b border-slate-300/80 dark:border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">backend engineer</p>

        <div className="relative mt-4 max-w-5xl">
          <h1 className="scan-text max-w-4xl text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-6xl">
            <span className="text-fuchsia-700 dark:text-fuchsia-300">{title}</span>
          </h1>

          <img
            src="/images/perfil.jpeg"
            alt="Jairo Junior"
            className="hero-slide-image absolute right-0 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-cyan-500/60 object-cover shadow-[0_0_30px_rgba(34,211,238,0.22)] sm:h-28 sm:w-28"
          />
        </div>

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-300">{subtitle}</p>
      </div>
      <a href="#projetos" className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-300">
        ↓ ver mais
      </a>
    </section>
  );
}

export default Hero;

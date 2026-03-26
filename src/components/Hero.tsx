import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  btnView: string;
  btnSite: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative border-b border-slate-300/80 dark:border-slate-800/80">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">backend systems + architecture</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            <span className="text-fuchsia-700 dark:text-fuchsia-300">{title}</span>
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-700 dark:text-slate-300">{subtitle}</p>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <div className="pulse-glow absolute h-44 w-44 rounded-full bg-fuchsia-400/30 blur-3xl dark:bg-fuchsia-500/20" />
          <img src="/images/perfil.jpeg" alt="Jairo Junior" className="float-ship relative h-44 w-44 rounded-full border border-cyan-500/60 object-cover shadow-[0_0_30px_rgba(34,211,238,0.2)]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

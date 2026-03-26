import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  btnView: string;
  btnSite: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative border-b border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">backend systems + architecture</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-slate-100 sm:text-5xl">
          <span className="text-fuchsia-300">{title}</span>
        </h1>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-300">{subtitle}</p>
      </div>
    </section>
  );
}

export default Hero;

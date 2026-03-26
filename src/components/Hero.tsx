import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  btnView: string;
  btnSite: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4 py-14">
        <div className="rounded-2xl border border-violet-500/20 bg-[#151624] p-8">
          <h1 className="text-2xl font-bold tracking-tight text-violet-200 sm:text-4xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

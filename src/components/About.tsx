import React from 'react';

interface AboutProps {
  title: string;
  text: string;
}

export function About({ title, text }: AboutProps) {
  return (
    <section id="sobre" className="relative border-b border-slate-800/80 scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-14 md:grid-cols-[180px_1fr]">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">{title}</h2>
        <p className="border-l border-fuchsia-400/30 pl-4 text-sm leading-relaxed text-slate-300 md:text-base">{text}</p>
      </div>
    </section>
  );
}

export default About;

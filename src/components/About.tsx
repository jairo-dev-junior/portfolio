import React from 'react';

interface AboutProps {
  title: string;
  text: string;
}

export function About({ title, text }: AboutProps) {
  return (
    <section id="sobre" className="relative border-b border-slate-300/80 scroll-mt-24 dark:border-slate-800/80">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-[180px_1fr]">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">{title}</h2>
        <div className="space-y-4">
          <p className="border-l border-fuchsia-500/40 pl-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300 md:text-base">{text}</p>
          <div className="grid grid-cols-2 gap-3 md:max-w-md">
            <img src="/images/1716259245388.jpeg" alt="Momento profissional" className="float-ship h-24 w-full rounded object-cover opacity-90" />
            <img src="/images/image2.jpeg" alt="Evento de tecnologia" className="float-ship h-24 w-full rounded object-cover opacity-90" style={{ animationDelay: '0.7s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

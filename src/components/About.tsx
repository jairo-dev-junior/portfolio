import React from 'react';

interface AboutProps {
  title: string;
  text: string;
}

export function About({ title, text }: AboutProps) {
  return (
    <section id="sobre" className="relative scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-2xl border border-violet-500/20 bg-[#151624] p-6">
          <h2 className="text-xl font-semibold text-slate-100 md:text-2xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{text}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
